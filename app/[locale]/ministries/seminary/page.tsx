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
import { subjectKeys, subjectMetaUnconfirmedByKey } from "@/lib/seminary";
import { organization } from "@/lib/organization";
import { getSeminaryContent, getCommonContent, getHomeContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/ministries/seminary">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getSeminaryContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/ministries/seminary`,
      languages: { en: "/en/ministries/seminary", ur: "/ur/ministries/seminary" },
    },
  };
}

export default async function SeminaryPage({ params }: PageProps<"/[locale]/ministries/seminary">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getSeminaryContent(locale);
  const common = getCommonContent(locale);
  // "study" and "article" are the same authoritative resource teasers
  // Home's own resources section reads (content/i18n/en/home.ts) — reused
  // here rather than duplicated. "lecture" has no Home equivalent.
  const resourcesItems = getHomeContent(locale).resources.items;

  const path = (segment: string) => localizePath(locale, segment);

  const facts = [
    strings.facts.classes,
    strings.facts.instruction,
    strings.facts.bible,
    strings.facts.tradition,
    strings.facts.cities,
    { ...strings.facts.duration, unconfirmed: true },
    { ...strings.facts.fees, unconfirmed: true },
  ];

  const studyRows = [
    {
      kicker: resourcesItems.study.kicker,
      title: resourcesItems.study.title,
      meta: resourcesItems.study.meta,
    },
    {
      kicker: resourcesItems.article.kicker,
      title: resourcesItems.article.title,
      meta: resourcesItems.article.meta,
    },
    {
      kicker: strings.studyAlongside.lecture.kicker,
      title: strings.studyAlongside.lecture.title,
      meta: strings.studyAlongside.lecture.meta,
    },
  ];

  return (
    <main className="flex flex-1 flex-col">
      {/*
       * Not NavyBand — the approved mockup (Dawn of Light - Seminary.dc.html)
       * gives this page's masthead its own dark-mode rule, distinct from
       * NavyBand's "stays navy in both themes" rule used everywhere else:
       * "In dark mode the page header loses its navy band — the whole page
       * is already dark — and is separated by a hairline instead." So this
       * block is a solid navy fill in light mode, and transparent (showing
       * the page's own dark background) with a bottom hairline in dark mode.
       */}
      <div className="bg-ink py-12 md:py-16 dark:border-b dark:border-dark-border dark:bg-transparent">
        <Container>
          <Breadcrumb
            items={[
              { label: common.nav.home, href: path("/") },
              { label: common.nav.seminary },
            ]}
            tone="on-navy"
            isUrdu={isUrdu}
            className="mb-6"
          />
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_440px] lg:gap-14">
            <div>
              <p
                className={cn(
                  "text-eyebrow text-dark-accent",
                  isUrdu && "font-urdu-body text-base normal-case tracking-normal",
                )}
              >
                {strings.masthead.eyebrow}
              </p>
              <h1
                className={cn(
                  "text-h1 mt-3 text-dark-heading",
                  isUrdu && "font-urdu-display",
                )}
              >
                {strings.masthead.title}
              </h1>
              <p
                className={cn(
                  "text-body-long mt-5 text-dark-body",
                  isUrdu && "font-urdu-body",
                )}
              >
                {strings.masthead.standfirst}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href={path("/contact")} variant="primary" brassFill isUrdu={isUrdu}>
                {strings.masthead.primaryCta}
              </Button>
              <Button href={path("/contact")} variant="secondary" tone="on-navy" isUrdu={isUrdu}>
                {strings.masthead.secondaryCta}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <ImagePlaceholder
        ratio="21:9"
        caption={strings.masthead.imagePlaceholder}
        photoCaption={strings.masthead.imageCaption}
      />

      <section className="bg-surface py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <Reveal className="min-w-0">
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.programme.eyebrow}
            </p>
            <h2 className={cn("text-h2 mt-3 text-foreground", isUrdu && "font-urdu-display")}>
              {strings.programme.heading}
            </h2>
            <p
              className={cn(
                "text-body measure mt-5 text-ink-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.programme.body}
            </p>
            <div className="measure mt-6 border-s-[3px] border-accent ps-5 dark:border-dark-accent">
              <PlaceholderTag>{strings.programme.disclosure}</PlaceholderTag>
            </div>

            <div className="mt-9 border-t-2 border-ink dark:border-dark-accent">
              {subjectKeys.map((key, i) => {
                const subject = strings.programme.subjects[key];
                const unconfirmed = subjectMetaUnconfirmedByKey[key];
                return (
                  <div
                    key={key}
                    className="flex flex-col gap-1.5 border-b border-border-soft py-5 sm:flex-row sm:items-start sm:gap-6 sm:py-6"
                  >
                    <span className="text-mono-label shrink-0 text-accent dark:text-dark-accent sm:pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "text-card-title font-semibold text-foreground",
                          isUrdu && "font-urdu-display",
                        )}
                      >
                        {subject.title}
                      </p>
                      <p
                        className={cn(
                          "text-small mt-1 measure text-ink-muted",
                          isUrdu && "font-urdu-body text-base",
                        )}
                      >
                        {subject.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-caption text-ink-faint sm:pt-1">
                      {unconfirmed ? <PlaceholderTag>{subject.meta}</PlaceholderTag> : subject.meta}
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="flex min-w-0 flex-col gap-5">
            <Card topRule="brass" tone="surface-warm" className="dark:bg-background">
              <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
                {strings.facts.heading}
              </p>
              <FactTable facts={facts} layout="stacked" isUrdu={isUrdu} className="mt-3.5" />
            </Card>

            <Card tone="surface">
              <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
                {strings.enquiry.heading}
              </p>
              <p
                className={cn(
                  "text-small mt-2 text-ink-muted",
                  isUrdu && "font-urdu-body text-base",
                )}
              >
                {strings.enquiry.body}
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Button href={path("/contact")} variant="primary" isUrdu={isUrdu}>
                  {strings.enquiry.primaryCta}
                </Button>
                <Button
                  href={organization.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  isUrdu={isUrdu}
                >
                  {strings.enquiry.secondaryCta}
                </Button>
              </div>
            </Card>

            <div className="border border-dashed border-border-strong bg-surface-warm p-6">
              <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
                {strings.prospectus.heading}
              </p>
              <p
                className={cn(
                  "text-small mt-2 text-ink-muted",
                  isUrdu && "font-urdu-body text-base",
                )}
              >
                {strings.prospectus.body}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-band py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.studyAlongside.eyebrow}
            </p>
            <h2 className={cn("text-h2 mt-3 text-foreground", isUrdu && "font-urdu-display")}>
              {strings.studyAlongside.heading}
            </h2>
            <p
              className={cn(
                "text-body measure mt-4 text-ink-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.studyAlongside.body}
            </p>
            <Button href={path("/resources")} variant="secondary" isUrdu={isUrdu} className="mt-6">
              {strings.studyAlongside.cta}
            </Button>
          </Reveal>

          <Reveal className="flex flex-col">
            {studyRows.map((row) => (
              <div
                key={row.kicker}
                className="flex gap-4 border-b border-border py-4 first:pt-0 last:border-b-0"
              >
                <span
                  className={cn(
                    "text-mono-label w-16 shrink-0 pt-1 text-accent",
                    isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
                  )}
                >
                  {row.kicker}
                </span>
                <div className="min-w-0">
                  <p
                    className={cn(
                      "text-card-title font-semibold text-foreground",
                      isUrdu && "font-urdu-display",
                    )}
                  >
                    {row.title}
                  </p>
                  <p className={cn("text-caption text-ink-faint", isUrdu && "font-urdu-body text-sm")}>
                    {row.meta}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
