import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { CtaBand } from "@/components/layout/CtaBand";
import { Button } from "@/components/ui/Button";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { Reveal } from "@/components/ui/Reveal";
import { LatestSermonBand } from "@/components/sermons/LatestSermonBand";
import { SermonsFilterableList } from "@/components/sermons/SermonsFilterableList";
import { publishedSermons } from "@/lib/sermons";
import { getSermonsContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/sermons">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getSermonsContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/sermons`,
      languages: { en: "/en/sermons", ur: "/ur/sermons" },
    },
  };
}

export default async function SermonsPage({ params }: PageProps<"/[locale]/sermons">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getSermonsContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);
  const languageLabel = (lang: "en" | "ur") => (lang === "ur" ? strings.filters.urdu : strings.filters.english);

  // The empty-state branch below stays reachable for a genuinely empty
  // list (e.g. a future filtered view with zero results).
  const [latest, ...archive] = publishedSermons;

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-border bg-paper py-10 md:py-14">
        <Container>
          <Breadcrumb
            items={[
              { label: common.nav.home, href: path("/") },
              { label: common.nav.sermons },
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
            <p
              className={cn(
                "text-body-long text-ink-muted",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.masthead.standfirst}
            </p>
          </div>
        </Container>
      </div>

      {latest ? (
        <>
          <LatestSermonBand
            sermon={latest}
            strings={strings.latest}
            languageLabel={languageLabel(latest.language)}
            isUrdu={isUrdu}
          />

          <SermonsFilterableList sermons={archive} strings={strings} isUrdu={isUrdu} />
        </>
      ) : (
        <section className="bg-surface py-16 lg:py-24">
          <Container>
            <Reveal className="mx-auto max-w-xl border border-border bg-paper px-8 py-14 text-center">
              <svg
                aria-hidden="true"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                className="mx-auto mb-6 text-border-strong"
              >
                <rect x="1" y="1" width="54" height="54" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="26" y="12" width="4" height="32" fill="currentColor" />
                <rect x="18" y="20" width="20" height="4" fill="currentColor" />
              </svg>
              <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
                {strings.emptyState.heading}
              </p>
              <p
                className={cn(
                  "text-body measure mx-auto mt-3 text-ink-muted",
                  isUrdu && "font-urdu-body",
                )}
              >
                {strings.emptyState.body}
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Button href={path("/resources")} variant="secondary" isUrdu={isUrdu}>
                  {strings.emptyState.browseResources}
                </Button>
                <Button href={path("/contact")} variant="primary" isUrdu={isUrdu}>
                  {strings.emptyState.askForRecording}
                </Button>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      <CtaBand
        heading={strings.visitCta.heading}
        body={
          <>
            {strings.visitCta.bodyPrefix} <PlaceholderTag>{strings.visitCta.locationNote}</PlaceholderTag>{" "}
            {strings.visitCta.bodySuffix}
          </>
        }
        isUrdu={isUrdu}
        actions={
          <>
            <Button href={path("/contact")} variant="secondary" isUrdu={isUrdu}>
              {strings.visitCta.visitUs}
            </Button>
            <Button href={path("/contact")} variant="primary" isUrdu={isUrdu}>
              {strings.visitCta.contactTheMinistry}
            </Button>
          </>
        }
      />
    </main>
  );
}
