import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FactTable } from "@/components/ui/FactTable";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { Reveal } from "@/components/ui/Reveal";
import { RuledList, RuledRow } from "@/components/ui/RuledRow";
import { DetailLayout } from "@/components/detail/DetailLayout";
import { findSermonBySlug, getRelatedSermons } from "@/lib/sermons";
import { getSermonsContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/sermons/[slug]">): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getSermonsContent(locale);
  const sermon = findSermonBySlug(slug);

  if (!sermon) {
    return { title: strings.metadata.title };
  }

  return {
    title: `${sermon.title} — ${strings.metadata.title}`,
    description: sermon.description ?? strings.metadata.description,
    alternates: {
      canonical: `/${locale}/sermons/${slug}`,
      languages: { en: `/en/sermons/${slug}`, ur: `/ur/sermons/${slug}` },
    },
  };
}

/**
 * Dawn of Light - Detail Templates.dc.html "03 — Sermon detail". Header
 * band is navy (the shared-rules panel: "Header band signals type: Sermon
 * = navy; Event & Resource = parchment"), built the same bespoke way as
 * Seminary's masthead (app/[locale]/ministries/seminary/page.tsx) rather
 * than NavyBand — a page-top header, not a mid-page band, loses its navy
 * fill in dark mode the same way. The design shows no dark-mode frame for
 * this template (as with Sermons.dc.html's own index), so dark mode here
 * extrapolates from that established masthead pattern plus the app's
 * standard tokens, not a separately-drawn dark composition.
 */
export default async function SermonDetailPage({
  params,
}: PageProps<"/[locale]/sermons/[slug]">) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const sermon = findSermonBySlug(slug);
  if (!sermon) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getSermonsContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);
  const d = strings.detail;
  const languageLabel = sermon.language === "ur" ? strings.filters.urdu : strings.filters.english;
  const formatLabel =
    sermon.format === "video"
      ? strings.row.formatVideo
      : sermon.format === "audio"
        ? strings.row.formatAudio
        : strings.row.formatText;
  const related = getRelatedSermons(sermon.slug, 3);

  const facts = [
    { label: d.facts.speaker, value: sermon.speaker },
    {
      label: d.facts.date,
      value: sermon.date ?? strings.detail.datePlaceholder,
      unconfirmed: !sermon.date,
    },
    {
      label: d.facts.series,
      value: sermon.series ?? d.facts.seriesPlaceholder,
      unconfirmed: !sermon.series,
    },
    {
      label: d.facts.scripture,
      value: sermon.scriptureReference ?? d.facts.scripturePlaceholder,
      unconfirmed: !sermon.scriptureReference,
    },
    {
      label: d.facts.length,
      value: sermon.duration ?? d.facts.lengthPlaceholder,
      unconfirmed: !sermon.duration,
    },
    { label: d.facts.language, value: languageLabel },
  ];

  // Always shown, each disabled rather than omitted when the real URL is
  // missing — same "designed action stays in place" rule as SermonRow /
  // LatestSermonBand on the index page.
  const actionCard = (
    <Card topRule="navy" tone="surface">
      <div className="flex flex-col gap-2.5">
        {sermon.externalUrl ? (
          <Button
            href={sermon.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            isUrdu={isUrdu}
          >
            {d.actions.watchOnYouTube}
          </Button>
        ) : (
          <Button variant="primary" isUrdu={isUrdu} disabled>
            {d.actions.watchOnYouTube}
          </Button>
        )}
        {sermon.audioUrl ? (
          <Button
            href={sermon.audioUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            isUrdu={isUrdu}
          >
            {d.actions.downloadAudio}
          </Button>
        ) : (
          <Button variant="secondary" isUrdu={isUrdu} disabled>
            {d.actions.downloadAudio}
          </Button>
        )}
        {sermon.notesUrl ? (
          <Button
            href={sermon.notesUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            isUrdu={isUrdu}
          >
            {d.actions.sermonNotes}
          </Button>
        ) : (
          <Button variant="secondary" isUrdu={isUrdu} disabled>
            {d.actions.sermonNotes}
          </Button>
        )}
      </div>
    </Card>
  );

  const body = (
    <div className="flex flex-col gap-10">
      <ImagePlaceholder ratio="16:9" caption="Sermon video" />
      {sermon.scriptureReference ? (
        <div className="border-s-[3px] border-accent ps-5 dark:border-dark-accent">
          <p className="text-mono-label text-ink-faint">{d.scripture.heading}</p>
          <p
            className={cn(
              "text-card-title mt-1.5 font-semibold text-foreground",
              isUrdu && "font-urdu-display",
            )}
          >
            {sermon.scriptureReference}
          </p>
          <p className={cn("text-caption mt-1.5 text-ink-faint", isUrdu && "font-urdu-body text-sm")}>
            {d.scripture.note}
          </p>
        </div>
      ) : null}
      <div>
        <h2
          className={cn(
            "text-h3 text-[1.4375rem] font-semibold text-foreground",
            isUrdu && "font-urdu-display",
          )}
        >
          {d.about.heading}
        </h2>
        <p className={cn("text-body measure mt-4 text-ink-body", isUrdu && "font-urdu-body")}>
          {sermon.description ?? d.about.fallbackBody}
        </p>
      </div>
    </div>
  );

  const rail = (
    <>
      <Card topRule="navy" tone="surface-warm">
        <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {d.facts.heading}
        </p>
        <FactTable facts={facts} layout="stacked" isUrdu={isUrdu} className="mt-3.5" />
      </Card>

      <Card tone="surface">
        <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {d.series.heading}
        </p>
        <p className="mt-2.5">
          <PlaceholderTag>{d.series.empty}</PlaceholderTag>
        </p>
      </Card>

      <div className="border border-border bg-band p-6">
        <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {d.prayer.heading}
        </p>
        <p className={cn("text-small mt-2 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
          {d.prayer.body}
        </p>
        <Button href={path("/prayer")} variant="primary" isUrdu={isUrdu} className="mt-4 w-full">
          {d.prayer.cta}
        </Button>
      </div>
    </>
  );

  return (
    <main className="flex flex-1 flex-col">
      <div className="bg-ink py-12 md:py-16 dark:border-b dark:border-dark-border dark:bg-transparent">
        <Container>
          <Breadcrumb
            items={[
              { label: common.nav.home, href: path("/") },
              { label: common.nav.sermons, href: path("/sermons") },
              { label: sermon.title },
            ]}
            tone="on-navy"
            isUrdu={isUrdu}
            className="mb-6"
          />
          <p
            className={cn(
              "text-eyebrow text-dark-accent",
              isUrdu && "font-urdu-body text-base normal-case tracking-normal",
            )}
          >
            {d.kicker} · {languageLabel} · {formatLabel}
          </p>
          <h1
            className={cn(
              "text-h1 mt-3 max-w-[22ch] font-normal text-dark-heading",
              isUrdu && "font-urdu-display",
            )}
          >
            {sermon.title}
          </h1>
          <div
            className={cn(
              "mt-5 flex flex-wrap gap-x-6 gap-y-1.5 text-small text-dark-body",
              isUrdu && "font-urdu-body",
            )}
          >
            <span>
              {d.meta.speaker}: {sermon.speaker}
            </span>
            <span>
              {d.meta.date}: {sermon.date ?? d.datePlaceholder}
            </span>
            {sermon.scriptureReference ? (
              <span>
                {d.meta.scripture}: {sermon.scriptureReference}
              </span>
            ) : null}
            {sermon.series ? (
              <span>
                {d.meta.series}: {sermon.series}
              </span>
            ) : null}
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
                {d.related.heading}
              </h2>
              <Button href={path("/sermons")} variant="tertiary" showArrow isUrdu={isUrdu}>
                {d.backToSermons}
              </Button>
            </Reveal>
            <Reveal>
              <RuledList className="mt-6">
                {related.map((related) => (
                  <RuledRow key={related.slug} asLink={path(`/sermons/${related.slug}`)}>
                    <span
                      className={cn(
                        "text-body font-medium text-foreground",
                        isUrdu && "font-urdu-display",
                      )}
                    >
                      {related.title}
                    </span>
                    <span className="text-caption text-ink-faint">{related.speaker}</span>
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
