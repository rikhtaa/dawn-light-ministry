import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageMasthead } from "@/components/layout/PageMasthead";
import { Container } from "@/components/layout/Container";
import { NavyBand } from "@/components/layout/NavyBand";
import { CtaBand } from "@/components/layout/CtaBand";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { OnThisPageRail } from "@/components/layout/OnThisPageRail";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { Reveal } from "@/components/ui/Reveal";
import { getAboutContent, getCommonContent, getHomeContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getAboutContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", ur: "/ur/about" },
    },
  };
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getAboutContent(locale);
  const common = getCommonContent(locale);
  // The mission's core-values chips are already authoritative content on
  // the homepage (content/i18n/en/home.ts) — reused here rather than
  // duplicated so there is one list to keep in sync, not two.
  const values = Object.values(getHomeContent(locale).mission.values);

  const path = (segment: string) => localizePath(locale, segment);

  const railItems = [
    { id: "our-story", label: strings.rail.ourStory },
    { id: "mission-vision", label: strings.rail.missionVision },
    { id: "statement-of-faith", label: strings.rail.statementOfFaith },
    { id: "leadership", label: strings.rail.leadership },
  ];

  return (
    <main className="flex flex-1 flex-col">
      <PageMasthead
        breadcrumbItems={[
          { label: common.nav.home, href: path("/") },
          { label: common.nav.about },
        ]}
        eyebrow={strings.masthead.eyebrow}
        title={strings.masthead.title}
        standfirst={strings.masthead.standfirst}
        isUrdu={isUrdu}
      />

      <Container className="grid grid-cols-1 gap-x-18 gap-y-10 py-16 lg:grid-cols-[260px_1fr] lg:py-24">
        <OnThisPageRail items={railItems} label={strings.rail.label} isUrdu={isUrdu} />

        <div className="flex min-w-0 flex-col gap-16 lg:gap-20">
          <section id="our-story" className="scroll-mt-28">
            <Reveal>
              <SectionHeader
                eyebrow={strings.ourStory.eyebrow}
                heading={strings.ourStory.heading}
                isUrdu={isUrdu}
              />
              <p
                className={cn(
                  "text-standfirst measure mt-5 text-ink-muted",
                  isUrdu && "font-urdu-display",
                )}
              >
                {strings.ourStory.standfirst}
              </p>
              <ul className="measure mt-7 flex flex-col gap-3 border-t border-border-soft pt-6">
                {Object.values(strings.ourStory.points).map((point) => (
                  <li
                    key={point}
                    className={cn(
                      "flex items-baseline gap-3 text-body text-ink-body",
                      isUrdu && "font-urdu-body",
                    )}
                  >
                    <span aria-hidden="true" className="h-1 w-1 shrink-0 self-center bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                <PlaceholderTag>{strings.ourStory.note}</PlaceholderTag>
              </p>
            </Reveal>
          </section>

          <section id="mission-vision" className="scroll-mt-28 border-t-2 border-ink pt-10">
            <Reveal>
              <SectionHeader
                eyebrow={strings.missionVision.eyebrow}
                heading={strings.missionVision.heading}
                isUrdu={isUrdu}
              />
              <div className="mt-7 border-s-[3px] border-accent ps-6">
                <p
                  className={cn(
                    "text-mono-label text-ink-ghost",
                    isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
                  )}
                >
                  {strings.missionVision.missionLabel}
                </p>
                <p
                  className={cn(
                    "text-standfirst measure mt-2 text-foreground",
                    isUrdu && "font-urdu-display",
                  )}
                >
                  {strings.missionVision.mission}
                </p>
              </div>
              <div className="mt-6">
                <p
                  className={cn(
                    "text-mono-label text-ink-ghost",
                    isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
                  )}
                >
                  {strings.missionVision.visionLabel}
                </p>
                <p
                  className={cn(
                    "text-body measure mt-2 text-ink-body",
                    isUrdu && "font-urdu-body",
                  )}
                >
                  {strings.missionVision.vision}
                </p>
              </div>
              <p
                className={cn(
                  "text-body measure mt-5 text-ink-body",
                  isUrdu && "font-urdu-body",
                )}
              >
                {strings.missionVision.body}
              </p>
              <div className="mt-7">
                <p
                  className={cn(
                    "text-mono-label mb-2.5 text-ink-ghost",
                    isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
                  )}
                >
                  {strings.missionVision.valuesLabel}
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {values.map((value) => (
                    <span
                      key={value}
                      className={cn(
                        "border border-border px-3.5 py-2 text-[0.8125rem] text-ink-muted",
                        isUrdu && "font-urdu-body text-sm",
                      )}
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        </div>
      </Container>

      <NavyBand id="statement-of-faith" size="section" className="scroll-mt-28">
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr_320px] lg:gap-10">
          <div>
            <p
              className={cn(
                "text-eyebrow text-dark-accent",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.statementOfFaith.eyebrow}
            </p>
            <h2
              className={cn(
                "text-h3 mt-3 text-dark-heading",
                isUrdu && "font-urdu-display",
              )}
            >
              {strings.statementOfFaith.heading}
            </h2>
          </div>

          <div>
            <p
              className={cn(
                "text-mono-label text-dark-faint",
                isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
              )}
            >
              {strings.statementOfFaith.trinityLabel}
            </p>
            <p
              className={cn(
                "text-standfirst mt-2 text-dark-heading",
                isUrdu && "font-urdu-display",
              )}
            >
              {strings.statementOfFaith.trinity}
            </p>
            <p className="mt-5">
              <PlaceholderTag>{strings.statementOfFaith.note}</PlaceholderTag>
            </p>
          </div>

          <div className="border border-dark-border bg-dark-surface p-6">
            <p
              className={cn(
                "text-mono-label text-dark-faint",
                isUrdu && "font-urdu-body text-sm normal-case tracking-normal",
              )}
            >
              {strings.statementOfFaith.doctrineLabel}
            </p>
            <p
              className={cn(
                "text-body mt-2 text-dark-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.statementOfFaith.doctrine}
            </p>
          </div>
        </Reveal>
      </NavyBand>

      <section id="leadership" className="scroll-mt-28 bg-surface py-16 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={strings.leadership.eyebrow}
              heading={strings.leadership.heading}
              isUrdu={isUrdu}
            />
          </Reveal>
          <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[strings.leadership.nayyer, strings.leadership.rahmat].map((person, i) => (
              <Reveal key={person.name} index={i} className="h-full">
                <div className="flex h-full flex-col border border-border bg-surface-warm">
                  <ImagePlaceholder ratio="3:2" caption={person.imagePlaceholder} />
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <p
                      className={cn(
                        "text-card-title font-semibold text-foreground",
                        isUrdu && "font-urdu-display",
                      )}
                    >
                      {person.name}
                    </p>
                    <PlaceholderTag>{person.role}</PlaceholderTag>
                    <p className="mt-2">
                      <PlaceholderTag>{person.bio}</PlaceholderTag>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        heading={strings.cta.heading}
        body={strings.cta.body}
        isUrdu={isUrdu}
        actions={
          <>
            <Button href={path("/ministries")} variant="primary" isUrdu={isUrdu}>
              {strings.cta.primaryCta}
            </Button>
            <Button href={path("/prayer")} variant="secondary" isUrdu={isUrdu}>
              {strings.cta.secondaryCta}
            </Button>
          </>
        }
      />
    </main>
  );
}
