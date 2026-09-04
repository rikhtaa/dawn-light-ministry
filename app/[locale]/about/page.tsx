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
import { Reveal } from "@/components/ui/Reveal";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { ourStoryBlocks, missionBlocks, visionBlocks, leadershipSlugs } from "@/lib/about";
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
    {
      id: "mission-vision",
      label: strings.rail.missionVision,
      mobileLabel: strings.rail.missionVisionMobile,
    },
    {
      id: "statement-of-faith",
      label: strings.rail.statementOfFaith,
      mobileLabel: strings.rail.statementOfFaithMobile,
    },
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
              <ArticleBody
                blocks={ourStoryBlocks}
                content={strings.ourStory.blocks}
                isUrdu={isUrdu}
                className="mt-5"
              />
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
              <div className="measure mt-7 border border-border">
                <ImagePlaceholder
                  ratio="16:9"
                  caption={strings.ourStory.imagePlaceholder}
                  bordered={false}
                  src="/images/about/ourstory/early_ministry.jpg"
                  alt="A speaker addressing an indoor gathering decorated for Christmas, with a seated congregation and a nativity mural"
                  objectPosition="center 60%"
                />
                <p className="border-t border-border px-4 py-3 text-caption text-ink-faint">
                  {strings.ourStory.imageCaption}
                </p>
              </div>
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
                <ArticleBody
                  blocks={missionBlocks}
                  content={strings.missionVision.missionBlocks}
                  isUrdu={isUrdu}
                  className="mt-2"
                />
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
                <ArticleBody
                  blocks={visionBlocks}
                  content={strings.missionVision.visionBlocks}
                  isUrdu={isUrdu}
                  className="mt-2"
                />
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
            {/*
             * Mobile-only inline treatment (Dawn of Light - About.dc.html
             * "Mobile · 390"): the doctrine sentence sits directly under
             * the Trinity statement with just a left accent rule, no box —
             * the boxed aside below is a desktop-only composition.
             */}
            <div className="mt-6 border-s-[3px] border-dark-border ps-4 lg:hidden">
              <p
                className={cn(
                  "text-body text-dark-body",
                  isUrdu && "font-urdu-body",
                )}
              >
                {strings.statementOfFaith.doctrine}
              </p>
            </div>
          </div>

          <div className="hidden border border-dark-border bg-dark-surface p-6 lg:block">
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
            {[
              {
                person: strings.leadership.nayyer,
                slug: leadershipSlugs.nayyer,
                imageSrc: "/images/about/leadership/pastor_nayyergul.jpeg",
                imageAlt: "Pastor Nayyer Gull speaking at a lectern",
                photoCaption: undefined as string | undefined,
                objectPosition: "center 20%",
              },
              {
                // The only supplied photo of Pastor Rahmat is an old,
                // hand-annotated group snapshot (paper-tape labels, a circle
                // drawn around his face, an arrow, and other unnamed people
                // in frame). Its own aspect ratio is close enough to this
                // card's 3:2 box that almost the entire photo shows
                // regardless of objectPosition — there is no crop-only fix
                // here; a dedicated cropped asset would be needed to isolate
                // just him. Presented explicitly as an archival group
                // photograph (photoCaption below) rather than passed off as
                // a studio portrait.
                person: strings.leadership.rahmat,
                slug: leadershipSlugs.rahmat,
                imageSrc: "/images/about/leadership/pastor_rahmat.png",
                imageAlt: "An early ministry-era group photograph; Pastor Rahmat is circled in the original",
                photoCaption: undefined as string | undefined,
                objectPosition: "center 45%",
              },
            ].map(({ person, slug, imageSrc, imageAlt, photoCaption, objectPosition }, i) => (
              <Reveal key={person.name} index={i} className="h-full">
                <div className="flex h-full flex-col border border-border bg-surface-warm">
                  <ImagePlaceholder
                    ratio="3:2"
                    caption={person.imagePlaceholder}
                    src={imageSrc}
                    alt={imageAlt}
                    photoCaption={photoCaption}
                    objectPosition={objectPosition}
                  />
                  <div className="flex flex-1 flex-col gap-2 p-6">
                    <p
                      className={cn(
                        "text-card-title font-semibold text-foreground",
                        isUrdu && "font-urdu-display",
                      )}
                    >
                      {person.name}
                    </p>
                    <p className={cn("text-small text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                      {person.role}
                    </p>
                    <p className={cn("mt-2 text-body text-ink-body", isUrdu && "font-urdu-body")}>
                      {person.bio}
                    </p>
                    <Button href={path(`/resources/${slug}`)} variant="tertiary" showArrow isUrdu={isUrdu} className="mt-auto self-start pt-2">
                      {person.readMoreLabel}
                    </Button>
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
