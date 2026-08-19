import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FactTable } from "@/components/ui/FactTable";
import { RuledList } from "@/components/ui/RuledRow";
import { Reveal } from "@/components/ui/Reveal";
import { EventRow } from "@/components/events/EventRow";
import { events } from "@/lib/events";
import { getEventsContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/events">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getEventsContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/events`,
      languages: { en: "/en/events", ur: "/ur/events" },
    },
  };
}

/**
 * Dawn of Light - Events.dc.html. Two real states, both reproduced: the
 * design's own text is explicit that "the page ships empty by default,
 * because inventing events would be worse than having none" and labels
 * the empty composition "the launch state" — so this reads `events`
 * (lib/events.ts) only, with no placeholder fallback (unlike Sermons/
 * Resources, whose designs draw no empty state of their own). The weekly
 * rhythm strip renders in both states per the design's own stated rule:
 * "shown either way, so the page is never useless."
 */
export default async function EventsPage({ params }: PageProps<"/[locale]/events">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getEventsContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);
  const hasEvents = events.length > 0;

  // Design shows "[CONFIRM]" here as plain muted text, not the warning-
  // amber PlaceholderTag treatment used elsewhere — the literal bracket
  // text already satisfies CLAUDE.md's "impossible to miss" rule on its
  // own, so `unconfirmed` isn't set (that would also switch the whole
  // value, including the real "Twice weekly" part, to mono/warning
  // styling, which the design doesn't do here).
  const weeklyRhythmFacts = [
    strings.weeklyRhythm.churchServices,
    strings.weeklyRhythm.sundaySchool,
    strings.weeklyRhythm.seminaryClasses,
    strings.weeklyRhythm.holyCommunion,
  ].map((fact) => ({ ...fact, value: `${fact.value} · ${strings.weeklyRhythm.confirmSuffix}` }));

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-border bg-paper py-10 md:py-14">
        <Container>
          <Breadcrumb
            items={[
              { label: common.nav.home, href: path("/") },
              { label: common.nav.events },
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

      <section className="bg-surface py-16 lg:py-24">
        <Container>
          {hasEvents ? (
            <>
              <Reveal className="flex flex-nowrap items-center gap-3 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
                <span className="bg-ink px-4 py-2.5 text-[0.84375rem] whitespace-nowrap text-dark-heading">
                  {strings.filters.upcoming}
                </span>
                <span className="border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted">
                  {strings.filters.past}
                </span>
                <span className="border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted">
                  {strings.filters.karachi}
                </span>
                <span className="border border-border px-4 py-2 text-[0.84375rem] whitespace-nowrap text-ink-muted">
                  {strings.filters.faisalabad}
                </span>
              </Reveal>
              <Reveal>
                <RuledList className="mt-6">
                  {events.map((event) => (
                    <EventRow
                      key={event.slug}
                      event={event}
                      statusLabel={strings.detail.status[event.status]}
                      cityLabel={event.city}
                      strings={strings}
                      detailHref={path(`/events/${event.slug}`)}
                      isUrdu={isUrdu}
                    />
                  ))}
                </RuledList>
              </Reveal>
              <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-small text-ink-faint">
                  {strings.pagination.showing} {events.length} {strings.pagination.of} {events.length}{" "}
                  {strings.pagination.eventsLabel}
                </p>
              </Reveal>
            </>
          ) : (
            <Reveal className="border border-dashed border-border-strong bg-surface-warm px-8 py-16 text-center lg:px-16">
              <p className="text-mono-label text-ink-ghost">{strings.emptyState.kicker}</p>
              <p
                className={cn(
                  "text-card-title mt-4 text-[1.875rem] font-semibold text-foreground",
                  isUrdu && "font-urdu-display",
                )}
              >
                <span className="hidden sm:inline">{strings.emptyState.heading}</span>
                <span className="sm:hidden">{strings.emptyStateMobile.heading}</span>
              </p>
              <p className={cn("text-body measure mx-auto mt-3.5 text-ink-muted", isUrdu && "font-urdu-body")}>
                <span className="hidden sm:inline">{strings.emptyState.body}</span>
                <span className="sm:hidden">{strings.emptyStateMobile.body}</span>
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={path("/contact")} variant="primary" isUrdu={isUrdu}>
                  {strings.emptyState.primaryCta}
                </Button>
                {/* A wrapping div, not `className="hidden ..."` on the
                    Button itself — Button's own base classes already
                    include `inline-flex`, and `cn()` is plain
                    concatenation (no tailwind-merge), so `hidden` and
                    `inline-flex` tie at equal specificity and whichever
                    Tailwind happened to generate later in the stylesheet
                    wins, not whichever appears later in the class list. */}
                <div className="hidden sm:block">
                  <Button href={path("/ministries")} variant="secondary" isUrdu={isUrdu}>
                    {strings.emptyState.secondaryCta}
                  </Button>
                </div>
              </div>
            </Reveal>
          )}

          <Reveal className="mt-14 border-t-2 border-ink pt-4 dark:border-dark-accent lg:mt-20">
            <div className="flex items-baseline justify-between gap-4">
              <h2
                className={cn(
                  "text-h3 text-[1.625rem] font-semibold text-foreground",
                  isUrdu && "font-urdu-display",
                )}
              >
                {strings.weeklyRhythm.heading}
              </h2>
              <span className="hidden text-caption text-ink-faint sm:inline">{strings.weeklyRhythm.note}</span>
            </div>
            <FactTable facts={weeklyRhythmFacts} layout="row" columns={4} isUrdu={isUrdu} className="mt-2" />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
