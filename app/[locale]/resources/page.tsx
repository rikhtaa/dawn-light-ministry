import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/layout/CtaBand";
import { Button } from "@/components/ui/Button";
import {
  ResourcesFilterableList,
  type FilterableResourceItem,
  type ResourceCategory,
} from "@/components/resources/ResourcesFilterableList";
import { publishedResources, type ResourceType } from "@/lib/resources";
import { publishedSermons, getYouTubeThumbnailUrl } from "@/lib/sermons";
import { getResourcesContent, getSermonsContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

/**
 * Maps each Resource's own `type` to the filter chip it belongs under. Not
 * every type has a corresponding chip in the approved design (no "Videos"
 * chip exists) — those stay `null`, filterable only via "All", rather than
 * inventing a chip or mis-filing them under an unrelated category.
 */
const categoryByResourceType: Record<ResourceType, ResourceCategory> = {
  article: "articles",
  study: "bibleStudies",
  book: "books",
  pdf: "educationalMaterial",
  video: null,
  biography: null,
};

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/resources">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getResourcesContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/resources`,
      languages: { en: "/en/resources", ur: "/ur/resources" },
    },
  };
}

/**
 * Dawn of Light - Resources.dc.html.
 *
 * HANDOFF.md §13 conflict, reported not silently resolved: HANDOFF says
 * "Resources keeps a 'Sermons' filter chip that links to /sermons rather
 * than duplicating the archive," but the design's own first row IS a
 * sermon, inline, with its own Watch action. Reproduced as drawn — the
 * row is sourced live from lib/sermons.ts (the latest sermon, same
 * record the Sermons index itself would show), not a duplicated or
 * invented Resource record — while the "Sermons" filter chip HANDOFF
 * also expects still appears in the filter row.
 */
export default async function ResourcesPage({ params }: PageProps<"/[locale]/resources">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getResourcesContent(locale);
  const sermonsStrings = getSermonsContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);

  const displayResources = publishedResources;
  const [latestSermon] = publishedSermons;

  const languageLabel = (lang: "en" | "ur") =>
    lang === "ur" ? sermonsStrings.filters.urdu : sermonsStrings.filters.english;
  const sermonFormatLabel = latestSermon
    ? latestSermon.format === "video"
      ? sermonsStrings.row.formatVideo
      : latestSermon.format === "audio"
        ? sermonsStrings.row.formatAudio
        : sermonsStrings.row.formatText
    : undefined;

  const typeLabel = strings.detail.type;

  const items: FilterableResourceItem[] = [];

  if (latestSermon) {
    const latestSermonThumbnail = getYouTubeThumbnailUrl(latestSermon.externalUrl);
    items.push({
      key: `sermon-${latestSermon.slug}`,
      category: "sermons",
      language: latestSermon.language,
      speaker: latestSermon.speaker,
      scriptureReference: latestSermon.scriptureReference,
      rowProps: {
        kicker: `${sermonsStrings.row.kicker.toUpperCase()} · ${languageLabel(latestSermon.language)} · ${(sermonFormatLabel ?? "").toUpperCase()}`,
        title: latestSermon.title,
        description: latestSermon.description,
        meta: [latestSermon.speaker, latestSermon.date ?? sermonsStrings.latest.datePlaceholder, latestSermon.scriptureReference ?? ""].filter(Boolean),
        actionLabel: sermonsStrings.latest.watchOnYouTube,
        href: latestSermon.externalUrl,
        external: true,
        imageSrc: latestSermonThumbnail,
        imageAlt: latestSermon.title,
        imageUnoptimized: true,
      },
    });
  }

  for (const resource of displayResources) {
    const kicker = [
      typeLabel[resource.type],
      resource.language === "ur" ? sermonsStrings.filters.urdu : sermonsStrings.filters.english,
      resource.downloadUrl ? strings.detail.format.download : strings.detail.format.online,
    ]
      .join(" · ")
      .toUpperCase();
    const description =
      resource.description ??
      (resource.type === "article"
        ? strings.row.articleFallbackDescription
        : resource.type === "study"
          ? strings.row.bibleStudyFallbackDescription
          : resource.type === "book"
            ? strings.row.bookFallbackDescription
            : undefined);
    // A real thumbnail is either the resource's own supplied `thumbnail`
    // (a local /images/ file) or, for a YouTube video, the same
    // deterministic thumbnail-URL derivation already used for Sermons —
    // never invented for a resource that genuinely has neither (e.g. a
    // Medium-hosted article, which gets no thumbnail block at all rather
    // than a placeholder — see ResourceRow).
    const youtubeThumbnail = resource.type === "video" ? getYouTubeThumbnailUrl(resource.externalUrl) : undefined;
    const imageSrc = resource.thumbnail ?? youtubeThumbnail;
    // No resource in the current data has a verified date — the fake
    // "[date]" bracket is dropped entirely rather than shown, for every
    // resource, not just the thumbnail-less ones (do not invent a date).
    const meta = [
      resource.pages ? `${resource.pages} ${strings.detail.meta.pages.toLowerCase()}` : undefined,
      resource.date,
    ].filter((v): v is string => Boolean(v));
    const actionLabel =
      resource.type === "video"
        ? strings.row.watchOnYouTube
        : resource.type === "article"
          ? strings.row.read
          : resource.downloadUrl
            ? strings.row.downloadPdf
            : strings.row.askForCopy;
    const href = resource.externalUrl ?? resource.downloadUrl ?? path(`/resources/${resource.slug}`);

    items.push({
      key: resource.slug,
      category: categoryByResourceType[resource.type],
      language: resource.language,
      speaker: resource.author,
      scriptureReference: resource.scriptureReference,
      rowProps: {
        kicker,
        title: resource.title,
        description,
        meta,
        actionLabel,
        href,
        external: Boolean(resource.externalUrl),
        imageSrc,
        imageAlt: imageSrc ? resource.title : undefined,
        imageUnoptimized: Boolean(youtubeThumbnail),
      },
    });
  }

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-border bg-paper py-10 md:py-14">
        <Container>
          <Breadcrumb
            items={[
              { label: common.nav.home, href: path("/") },
              { label: common.nav.resources },
            ]}
            isUrdu={isUrdu}
            className="mb-6"
          />
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_520px] lg:gap-14">
            <div>
              <p
                className={cn(
                  "text-eyebrow text-primary",
                  isUrdu && "font-urdu-body text-base normal-case tracking-normal",
                )}
              >
                {strings.masthead.eyebrow}
              </p>
              <h1 className={cn("text-h1 mt-3 text-foreground", isUrdu && "font-urdu-display")}>
                {strings.masthead.title}
              </h1>
            </div>
            <p className={cn("text-body-long text-ink-muted", isUrdu && "font-urdu-body")}>
              {strings.masthead.standfirst}
            </p>
          </div>
        </Container>
      </div>

      <ResourcesFilterableList items={items} strings={strings} isUrdu={isUrdu} />

      <CtaBand
        heading={strings.cta.heading}
        body={strings.cta.body}
        isUrdu={isUrdu}
        actions={
          <Button href={path("/contact")} variant="primary" isUrdu={isUrdu}>
            {strings.cta.primaryCta}
          </Button>
        }
      />
    </main>
  );
}
