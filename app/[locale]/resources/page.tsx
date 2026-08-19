import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/layout/CtaBand";
import { Button } from "@/components/ui/Button";
import { RuledList } from "@/components/ui/RuledRow";
import { Reveal } from "@/components/ui/Reveal";
import { ResourceRow } from "@/components/resources/ResourceRow";
import { resources, placeholderResources } from "@/lib/resources";
import { sermons, placeholderSermons } from "@/lib/sermons";
import { getResourcesContent, getSermonsContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

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
 * Dawn of Light - Resources.dc.html. Draws one populated frame only (no
 * empty-state composition of its own, unlike Events) — so, matching
 * Sermons' precedent, this falls back to `placeholderResources` when
 * `resources` is empty rather than showing nothing.
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

  const displayResources = resources.length > 0 ? resources : placeholderResources;
  const [latestSermon] = sermons.length > 0 ? sermons : placeholderSermons;

  const languageLabel = (lang: "en" | "ur") =>
    lang === "ur" ? sermonsStrings.filters.urdu : sermonsStrings.filters.english;
  const sermonFormatLabel =
    latestSermon.format === "video"
      ? sermonsStrings.row.formatVideo
      : latestSermon.format === "audio"
        ? sermonsStrings.row.formatAudio
        : sermonsStrings.row.formatText;

  const typeLabel = strings.detail.type;
  const totalCount = displayResources.length + (latestSermon ? 1 : 0);

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

      <div className="border-b border-border bg-surface py-5">
        <Container className="flex flex-nowrap items-center gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
          <span className="bg-ink px-4 py-2.5 text-[0.84375rem] whitespace-nowrap text-dark-heading">
            {strings.filters.all}
          </span>
          <span className="border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted">
            {strings.filters.sermons}
          </span>
          <span className="border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted">
            {strings.filters.articles}
          </span>
          {/* Bible studies / Educational material collapse below the mobile
              breakpoint — Resources.dc.html's own mobile frame ("filters
              collapse to a scrolling row") shows All/Sermons/Articles/
              Studies only, matching Sermons index's established precedent
              of dropping the least-essential chips on mobile rather than
              relabelling them. */}
          <span className="hidden border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted sm:inline-block">
            {strings.filters.bibleStudies}
          </span>
          <span className="border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted sm:hidden">
            {strings.filters.bibleStudies}
          </span>
          <span className="hidden border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted sm:inline-block">
            {strings.filters.educationalMaterial}
          </span>
          <span className="hidden border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted sm:inline-block">
            {strings.filters.books}
          </span>
          <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
          <span className="hidden border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted sm:inline-block">
            {strings.filters.english}
          </span>
          <span className="hidden border border-border px-4 py-1.5 font-urdu-body text-sm whitespace-nowrap text-ink-muted sm:inline-block">
            {strings.filters.urdu}
          </span>
          <span className="ms-auto hidden min-w-60 border border-input-border bg-surface-warm px-4 py-2.5 text-[0.84375rem] text-ink-disabled sm:block">
            {strings.filters.searchPlaceholder}
          </span>
        </Container>
      </div>

      <section className="bg-surface pb-12">
        <Container>
          <Reveal>
            <RuledList className="mt-2">
              {latestSermon ? (
                <ResourceRow
                  kicker={`${sermonsStrings.row.kicker.toUpperCase()} · ${languageLabel(latestSermon.language)} · ${sermonFormatLabel.toUpperCase()}`}
                  title={latestSermon.title}
                  description={latestSermon.description}
                  meta={[latestSermon.speaker, latestSermon.date ?? sermonsStrings.latest.datePlaceholder, latestSermon.scriptureReference ?? ""].filter(Boolean)}
                  actionLabel={sermonsStrings.latest.watchOnYouTube}
                  href={latestSermon.externalUrl}
                  external
                  isUrdu={isUrdu}
                />
              ) : null}
              {displayResources.map((resource) => {
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
                const meta = [
                  resource.pages ? `${resource.pages} ${strings.detail.meta.pages.toLowerCase()}` : undefined,
                  resource.date ?? strings.detail.datePlaceholder,
                ].filter((v): v is string => Boolean(v));
                const actionLabel =
                  resource.type === "article"
                    ? strings.row.read
                    : resource.downloadUrl
                      ? strings.row.downloadPdf
                      : strings.row.askForCopy;
                const href = resource.externalUrl ?? resource.downloadUrl ?? path(`/resources/${resource.slug}`);

                return (
                  <ResourceRow
                    key={resource.slug}
                    kicker={kicker}
                    title={resource.title}
                    description={description}
                    meta={meta}
                    actionLabel={actionLabel}
                    href={href}
                    external={Boolean(resource.externalUrl)}
                    isUrdu={isUrdu}
                  />
                );
              })}
            </RuledList>
          </Reveal>
          <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-small text-ink-faint">
              {strings.pagination.showing} {totalCount} {strings.pagination.of} {totalCount}{" "}
              {strings.pagination.resourcesLabel}
            </p>
            <div className="flex gap-2">
              <Button variant="secondary" size="compact" disabled isUrdu={isUrdu}>
                {strings.pagination.previous}
              </Button>
              <Button variant="secondary" size="compact" disabled isUrdu={isUrdu}>
                {strings.pagination.next}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

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
