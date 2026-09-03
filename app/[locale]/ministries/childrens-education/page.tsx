import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FactTable } from "@/components/ui/FactTable";
import { NavyBand } from "@/components/layout/NavyBand";
import { Reveal } from "@/components/ui/Reveal";
import { MinistryMasthead } from "@/components/ministries/MinistryMasthead";
import { MinistrySiblingsAndCta } from "@/components/ministries/MinistrySiblingsAndCta";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { childrensEducationBodyBlocks } from "@/lib/ministries";
import { organization } from "@/lib/organization";
import { getMinistryPagesContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/ministries/childrens-education">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getMinistryPagesContent(locale).childrensEducation;

  return {
    title: `${strings.title} — Dawn of Light Ministry`,
    description: strings.standfirst,
    alternates: {
      canonical: `/${locale}/ministries/childrens-education`,
      languages: { en: "/en/ministries/childrens-education", ur: "/ur/ministries/childrens-education" },
    },
  };
}

/**
 * Dawn of Light - Ministry Pages.dc.html "05 — Children's Education"
 * (`/ministries/childrens-education`, body only). Two elements no other
 * ministry page carries: a second caption line under the photograph
 * ("no identifiable child published without written permission" — hence
 * hand-composed here rather than ImagePlaceholder's single-line caption),
 * and a "Photograph policy" rail card between the practical card and
 * Related (HANDOFF.md §14 calls this out explicitly).
 */
export default async function ChildrensEducationPage({
  params,
}: PageProps<"/[locale]/ministries/childrens-education">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getMinistryPagesContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);
  const d = strings.childrensEducation;
  const s = strings.shared;

  const facts = [
    d.facts.sundaySchool,
    d.facts.books,
    d.facts.schoolFees,
    d.facts.childrenSupported,
  ];

  const activities = [
    d.body.activities.sundaySchool,
    d.body.activities.books,
    d.body.activities.fees,
    d.body.activities.teaching,
  ];

  const detailBandRows = [
    d.detailBand.rows.schoolFees,
    d.detailBand.rows.materials,
    d.detailBand.rows.sundaySchoolMaterial,
  ];

  const siblingKeys = ["church", "seminary", "publishing", "education"] as const;
  const siblingHrefs: Record<(typeof siblingKeys)[number], string> = {
    church: path("/ministries/church"),
    seminary: path("/ministries/seminary"),
    publishing: path("/ministries/publishing"),
    education: path("/ministries/education"),
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

      {/*
       * `photoSecondaryCaption` ("no identifiable child published without
       * written permission") is deliberately NOT rendered here anymore: the
       * photo below does show identifiable children, published with the
       * organization's written permission — displaying that sentence over
       * this specific image would misrepresent it. The sentence itself
       * stays intact in content/i18n for wherever it's still accurate.
       */}
      <div className="relative aspect-[21/9] overflow-hidden border-0">
        {/*
         * Source is 1368x742 (≈1.84:1), cropped into a 21:9 (≈2.33:1) box —
         * ~79% of the source height survives, ~21% cropped. The back row's
         * heads sit close to the very top of the source frame with almost
         * no headroom above them, so the crop must come almost entirely
         * from the bottom (the front row's torsos, which isn't the point
         * of the photo) rather than split top/bottom — a centered or
         * bottom-biased position clips their hair/foreheads.
         */}
        <Image
          src="/images/ministriesPages/children_education.jpg"
          alt="A large group of children posed together for a Sunday School class photograph"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 8%" }}
        />
      </div>

      <section className="bg-surface py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <Reveal className="min-w-0">
            <p className={cn("text-eyebrow text-primary", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
              {s.whatHappensEyebrow}
            </p>
            <h2 className={cn("text-h2 mt-3 max-w-[26ch] text-foreground", isUrdu && "font-urdu-display")}>
              {d.body.heading}
            </h2>
            <ArticleBody
              blocks={childrensEducationBodyBlocks}
              content={d.body.blocks}
              isUrdu={isUrdu}
              className="mt-5"
            />
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
                <Button href={path("/contact")} variant="primary" isUrdu={isUrdu}>
                  {d.rail.primaryCta}
                </Button>
                <Button
                  href={organization.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  isUrdu={isUrdu}
                >
                  {d.rail.secondaryCta}
                </Button>
              </div>
            </Card>

            <div className="border border-border bg-band p-6">
              <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
                {d.rail.photoPolicyHeading}
              </p>
              <p className={cn("text-small mt-2 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                {d.rail.photoPolicyBody}
              </p>
            </div>

            <Card tone="surface">
              <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
                {s.relatedHeading}
              </p>
              <div className="mt-2.5 flex flex-col items-start gap-2">
                <Button href={path("/ministries/education")} variant="tertiary" showArrow isUrdu={isUrdu}>
                  {d.rail.related.educationAndOutreach}
                </Button>
                <Button href={path("/ministries/church")} variant="tertiary" showArrow isUrdu={isUrdu}>
                  {d.rail.related.church}
                </Button>
                <Button href={path("/support")} variant="tertiary" showArrow isUrdu={isUrdu}>
                  {d.rail.related.supportTheMission}
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
        ctaPrimaryHref={path("/support")}
        ctaSecondaryLabel={d.cta.secondaryLabel}
        ctaSecondaryHref={path("/contact")}
        isUrdu={isUrdu}
      />
    </main>
  );
}
