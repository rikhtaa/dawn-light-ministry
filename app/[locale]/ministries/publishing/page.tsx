import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FactTable } from "@/components/ui/FactTable";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { NavyBand } from "@/components/layout/NavyBand";
import { Reveal } from "@/components/ui/Reveal";
import { MinistryMasthead } from "@/components/ministries/MinistryMasthead";
import { MinistrySiblingsAndCta } from "@/components/ministries/MinistrySiblingsAndCta";
import { getMinistryPagesContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/ministries/publishing">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getMinistryPagesContent(locale).publishing;

  return {
    title: `${strings.title} — Dawn of Light Ministry`,
    description: strings.standfirst,
    alternates: {
      canonical: `/${locale}/ministries/publishing`,
      languages: { en: "/en/ministries/publishing", ur: "/ur/ministries/publishing" },
    },
  };
}

/** Dawn of Light - Ministry Pages.dc.html "03 — Publishing & Christian Articles" (`/ministries/publishing`, body only — chrome/footer are identical to "01 — Church"). */
export default async function PublishingPage({
  params,
}: PageProps<"/[locale]/ministries/publishing">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getMinistryPagesContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);
  const d = strings.publishing;
  const s = strings.shared;

  const facts = [
    d.facts.output,
    d.facts.books,
    d.facts.languages,
    { ...d.facts.titlesInPrint, unconfirmed: true },
  ];

  const activities = [
    d.body.activities.writing,
    d.body.activities.lectures,
    d.body.activities.books,
    d.body.activities.material,
  ];

  const detailBandRows = [d.detailBand.rows.article, d.detailBand.rows.book, d.detailBand.rows.bibleStudy];

  const siblingKeys = ["church", "seminary", "education", "childrensEducation"] as const;
  const siblingHrefs: Record<(typeof siblingKeys)[number], string> = {
    church: path("/ministries/church"),
    seminary: path("/ministries/seminary"),
    education: path("/ministries/education"),
    childrensEducation: path("/ministries/childrens-education"),
  };

  return (
    <main className="flex flex-1 flex-col">
      <MinistryMasthead
        homeLabel={common.nav.home}
        homeHref={path("/")}
        ministriesLabel={common.nav.ministries}
        ministriesHref={path("/ministries")}
        breadcrumbLabel={d.breadcrumbLabel}
        eyebrow={d.eyebrow}
        title={d.title}
        standfirst={d.standfirst}
        isUrdu={isUrdu}
      />

      <div className="border-b border-border bg-surface">
        <Container>
          <FactTable layout="row" columns={4} facts={facts} isUrdu={isUrdu} />
        </Container>
      </div>

      <ImagePlaceholder ratio="21:9" caption={d.photoCaption} bordered={false} />

      <section className="bg-surface py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <Reveal className="min-w-0">
            <p className={cn("text-eyebrow text-primary", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
              {s.whatHappensEyebrow}
            </p>
            <h2 className={cn("text-h2 mt-3 max-w-[26ch] text-foreground", isUrdu && "font-urdu-display")}>
              {d.body.heading}
            </h2>
            <p className={cn("text-body measure mt-5 text-ink-body", isUrdu && "font-urdu-body")}>{d.body.intro}</p>
            <p className={cn("text-body measure mt-5 text-ink-body", isUrdu && "font-urdu-body")}>
              {d.body.placeholder}
            </p>
            <h3 className={cn("text-h3 mt-8 text-[1.375rem] font-semibold text-foreground", isUrdu && "font-urdu-display")}>
              {s.activitiesHeading}
            </h3>
            <div className="measure mt-3 border-t border-border">
              {activities.map((activity) => (
                <div key={activity} className={cn("border-b border-border-soft py-3.5 text-body text-ink-body", isUrdu && "font-urdu-body")}>
                  {activity}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="flex min-w-0 flex-col gap-3.5">
            <Card topRule="navy" tone="surface-warm">
              <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
                {d.rail.practicalHeading}
              </p>
              <p className={cn("text-small mt-2 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                {d.rail.practicalBody}
              </p>
              <div className="mt-3.5 flex flex-col gap-2.5">
                <Button href={path("/resources")} variant="primary" isUrdu={isUrdu}>
                  {d.rail.primaryCta}
                </Button>
                <Button href={path("/contact")} variant="secondary" isUrdu={isUrdu}>
                  {d.rail.secondaryCta}
                </Button>
              </div>
            </Card>

            <Card tone="surface">
              <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
                {s.relatedHeading}
              </p>
              <div className="mt-2.5 flex flex-col items-start gap-2">
                <Button href={path("/resources")} variant="tertiary" showArrow isUrdu={isUrdu}>
                  {d.rail.related.resourcesLibrary}
                </Button>
                <Button href={path("/resources")} variant="tertiary" showArrow isUrdu={isUrdu}>
                  {d.rail.related.bibleStudies}
                </Button>
                <Button href={path("/ministries/seminary")} variant="tertiary" showArrow isUrdu={isUrdu}>
                  {d.rail.related.seminary}
                </Button>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      <NavyBand>
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr] lg:gap-14">
          <div>
            <p className={cn("text-eyebrow text-dark-accent", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
              {d.detailBand.eyebrow}
            </p>
            <p className={cn("text-small mt-3 text-dark-body", isUrdu && "font-urdu-body text-base")}>
              {d.detailBand.note}
            </p>
          </div>
          <FactTable facts={detailBandRows} tone="on-navy" isUrdu={isUrdu} />
        </Reveal>
      </NavyBand>

      <MinistrySiblingsAndCta
        siblingsHeading={s.siblingsHeading}
        viewAllLabel={s.viewAllLabel}
        viewAllHref={path("/ministries")}
        siblings={siblingKeys.map((key) => ({
          key,
          title: strings.siblings[key].title,
          description: strings.siblings[key].description,
          href: siblingHrefs[key],
        }))}
        ctaHeading={d.cta.heading}
        ctaBody={d.cta.body}
        ctaPrimaryLabel={d.cta.primaryLabel}
        ctaPrimaryHref={path("/contact")}
        ctaSecondaryLabel={d.cta.secondaryLabel}
        ctaSecondaryHref={path("/resources")}
        isUrdu={isUrdu}
      />
    </main>
  );
}
