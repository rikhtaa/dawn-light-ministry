import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FactTable } from "@/components/ui/FactTable";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { Reveal } from "@/components/ui/Reveal";
import { RuledList, RuledRow } from "@/components/ui/RuledRow";
import { DetailLayout } from "@/components/detail/DetailLayout";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { findResourceBySlug, getRelatedResources, resourceTitle, resourceAuthor } from "@/lib/resources";
import { organization } from "@/lib/organization";
import { getResourcesContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale, type Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/resources/[slug]">): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const resource = findResourceBySlug(slug);

  if (!resource) {
    return {};
  }

  return {
    title: resourceTitle(resource, locale),
    description: resource.standfirst ?? resource.description,
    alternates: {
      canonical: `/${locale}/resources/${slug}`,
      languages: { en: `/en/resources/${slug}`, ur: `/ur/resources/${slug}` },
    },
  };
}

function languageLabel(locale: Locale, lang: Locale): string {
  const isUrdu = locale === "ur";
  if (lang === "ur") return isUrdu ? "اردو" : "Urdu";
  return isUrdu ? "انگریزی" : "English";
}

/**
 * Dawn of Light - Detail Templates.dc.html "04 — Resource detail".
 * Parchment header (shared rule: "Sermon = navy; Event & Resource =
 * parchment"). No mobile or dark frame is drawn for this template in the
 * connected design (only Event detail's mobile-390 frame is shown) — the
 * responsive/dark behaviour here extrapolates the same tokens and
 * DetailLayout rail-unstack rule used for Event/Sermon detail, which the
 * shared-rules panel states apply to all three templates uniformly.
 */
export default async function ResourceDetailPage({
  params,
}: PageProps<"/[locale]/resources/[slug]">) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const resource = findResourceBySlug(slug);
  if (!resource) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getResourcesContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);
  const d = strings.detail;
  const title = resourceTitle(resource, locale);
  const author = resourceAuthor(resource, locale);
  // A leadership biography (lib/resources.ts's `leadershipResources`) is a
  // distinct content type from a downloadable/watchable resource — see
  // the ResourceType doc comment. It reuses this template's typography and
  // article rendering, but has no action/rail content: no "Get this
  // resource" card, no Details/Related rail (Author is already shown in
  // the header below, per the content-type-specific exception this file
  // implements — the generic Resource Detail behaviour for every other
  // `type` is unchanged).
  const isBiography = resource.type === "biography";
  const related = resource.bodyBlockDefs ? [] : getRelatedResources(resource.slug, 3);
  const formatLabel = resource.downloadUrl ? d.format.download : d.format.online;

  const facts = [
    { label: d.facts.author, value: author ?? "[author]", unconfirmed: !author },
    // A full-length biography article (bodyBlockDefs) has no page count or
    // publish date to speak of — showing "[pages]" there would misleadingly
    // read as missing info on an otherwise-finished page, rather than
    // genuinely not applicable. The date row itself is omitted entirely
    // (not shown as an "unconfirmed [date]" placeholder) whenever no
    // resource in the current data has a verified date — do not invent one.
    ...(resource.bodyBlockDefs
      ? []
      : [
          ...(resource.date ? [{ label: d.facts.date, value: resource.date }] : []),
          {
            label: d.facts.pages,
            value: resource.pages ? String(resource.pages) : d.pagesPlaceholder,
            unconfirmed: !resource.pages,
          },
        ]),
    { label: d.facts.language, value: languageLabel(locale, resource.language) },
    ...(resource.scriptureReference
      ? [{ label: d.facts.scripture, value: resource.scriptureReference }]
      : []),
  ];

  // A biography has nothing to "get" — no download, no printed copy to
  // request — so it has no action card at all (not even a disabled one).
  const actionCard = isBiography ? undefined : (
    <Card topRule="navy" tone="surface-warm">
      <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
        {d.action.heading}
      </p>
      <div className="mt-4 flex flex-col gap-2.5">
        {resource.bodyBlockDefs ? null : resource.downloadUrl ? (
          <Button href={resource.downloadUrl} variant="primary" isUrdu={isUrdu}>
            {d.action.download}
          </Button>
        ) : (
          <Button variant="primary" disabled isUrdu={isUrdu}>
            {d.action.download}
          </Button>
        )}
        <Button
          href={organization.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant={resource.bodyBlockDefs ? "primary" : "secondary"}
          isUrdu={isUrdu}
        >
          {d.action.askForCopy}
        </Button>
      </div>
    </Card>
  );

  const articleContent = resource.bodyBlockDefs
    ? (isUrdu ? resource.bodyBlocksUr : resource.bodyBlocksEn) ?? resource.bodyBlocksEn ?? resource.bodyBlocksUr
    : undefined;

  const body = (
    <div className="flex flex-col gap-8">
      {resource.bodyBlockDefs && articleContent ? (
        <ArticleBody blocks={resource.bodyBlockDefs} content={articleContent} isUrdu={isUrdu} />
      ) : (
        <>
          {resource.standfirst ? (
            <p className={cn("text-standfirst measure text-ink-body", isUrdu && "font-urdu-display text-xl")}>
              {resource.standfirst}
            </p>
          ) : null}
          <p className={cn("text-body measure text-ink-body", isUrdu && "font-urdu-body")}>
            {resource.description ?? "[PSEUDO/PLACEHOLDER — BODY TEXT SUPPLIED WITH THE RESOURCE]"}
          </p>
        </>
      )}

      {resource.covers && resource.covers.length > 0 ? (
        <div>
          <h2
            className={cn(
              "text-h3 text-[1.4375rem] font-semibold text-foreground",
              isUrdu && "font-urdu-display",
            )}
          >
            {d.covers.heading}
          </h2>
          <div className="mt-4 border-t border-border">
            {resource.covers.map((item, i) => (
              <div key={i} className="border-b border-border-soft py-3.5">
                <PlaceholderTag>{item}</PlaceholderTag>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {resource.bodyBlockDefs ? null : (
        <div className="border-s-[3px] border-s-accent bg-surface-warm p-6 dark:border-s-dark-accent">
          <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
            {d.printedNotice.heading}
          </p>
          <p className={cn("text-small mt-2 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
            {d.printedNotice.body}
          </p>
        </div>
      )}
    </div>
  );

  // A biography's Author is already shown in the header meta line below
  // (and Language in the eyebrow above it), so the Details card would only
  // duplicate them — and there's no genuinely related content to list
  // (see `related` above), so the placeholder Related card would be
  // showing a permanent "nothing here yet" note rather than real content.
  // Both are omitted outright for this content type instead.
  const rail = isBiography ? undefined : (
    <>
      <Card topRule="navy" tone="surface-warm">
        <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {d.facts.heading}
        </p>
        <FactTable facts={facts} layout="stacked" isUrdu={isUrdu} className="mt-3.5" />
      </Card>

      <Card tone="surface">
        <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {d.related.heading}
        </p>
        <p className="mt-2.5">
          <PlaceholderTag>{d.related.empty}</PlaceholderTag>
        </p>
      </Card>
    </>
  );

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-border bg-paper py-12 md:py-16">
        <Container>
          <Breadcrumb
            items={[
              { label: common.nav.home, href: path("/") },
              { label: common.nav.resources, href: path("/resources") },
              { label: title },
            ]}
            isUrdu={isUrdu}
            className="mb-6"
          />
          <p
            className={cn(
              "text-eyebrow text-primary",
              isUrdu && "font-urdu-body text-base normal-case tracking-normal",
            )}
          >
            {d.type[resource.type]} · {languageLabel(locale, resource.language)} · {formatLabel}
          </p>
          <h1
            className={cn(
              "text-h1 mt-3 max-w-[22ch] text-foreground",
              isUrdu && "font-urdu-display",
            )}
          >
            {title}
          </h1>
          <div
            className={cn(
              "mt-5 flex flex-wrap gap-x-6 gap-y-1.5 text-small text-ink-muted",
              isUrdu && "font-urdu-body",
            )}
          >
            <span>
              {d.meta.author}: {author ?? "[author]"}
            </span>
            {resource.bodyBlockDefs ? null : (
              <>
                {resource.date ? (
                  <span>
                    {d.meta.date}: {resource.date}
                  </span>
                ) : null}
                <span>
                  {d.meta.pages}: {resource.pages ? String(resource.pages) : d.pagesPlaceholder}
                </span>
              </>
            )}
          </div>
        </Container>
      </div>

      <section className="bg-surface py-12 lg:py-20">
        <Container>
          <Reveal>
            <DetailLayout actionCard={actionCard} body={body} rail={rail} />
          </Reveal>
        </Container>
      </section>

      {related.length >= 2 ? (
        <section className="border-t border-border bg-band py-12 lg:py-16">
          <Container>
            <Reveal className="flex items-center justify-between gap-4">
              <h2
                className={cn(
                  "text-h3 text-[1.4375rem] font-semibold text-foreground",
                  isUrdu && "font-urdu-display",
                )}
              >
                {d.moreFromLibrary.heading}
              </h2>
              <Button href={path("/resources")} variant="tertiary" showArrow isUrdu={isUrdu}>
                {d.backToResources}
              </Button>
            </Reveal>
            <Reveal>
              <RuledList className="mt-6">
                {related.map((related) => (
                  <RuledRow key={related.slug} asLink={path(`/resources/${related.slug}`)}>
                    <span
                      className={cn(
                        "text-body font-medium text-foreground",
                        isUrdu && "font-urdu-display",
                      )}
                    >
                      {resourceTitle(related, locale)}
                    </span>
                    <span className="text-caption text-ink-faint">{d.type[related.type]}</span>
                  </RuledRow>
                ))}
              </RuledList>
            </Reveal>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
