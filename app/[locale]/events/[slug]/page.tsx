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
import { EventStatusBadge } from "@/components/detail/EventStatusBadge";
import { findEventBySlug, getRelatedEvents, type Event } from "@/lib/events";
import { organization } from "@/lib/organization";
import { getEventsContent, getCommonContent } from "@/lib/i18n/content-registry";
import type { EventsStrings } from "@/content/i18n/en/events";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/events/[slug]">): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const event = findEventBySlug(slug);

  if (!event) {
    return {};
  }

  return {
    title: event.title,
    description: event.description,
    alternates: {
      canonical: `/${locale}/events/${slug}`,
      languages: { en: `/en/events/${slug}`, ur: `/ur/events/${slug}` },
    },
  };
}

/**
 * The rail's "Attend" slot per status — Dawn of Light - Detail
 * Templates.dc.html's four status-variant demo cards. "Status stated,
 * never implied: disabled actions carry reason in text" (the shared-rules
 * panel) — closed keeps the action card with the button disabled and the
 * reason shown; cancelled replaces the action card entirely with a notice
 * (oxblood/clay left border); completed keeps the card shape but drops
 * the buttons for a plain closing note.
 */
function ActionCard({
  event,
  d,
  isUrdu,
}: {
  event: Event;
  d: EventsStrings["detail"];
  isUrdu: boolean;
}) {
  if (event.status === "cancelled") {
    return (
      <div className="border-s-[3px] border-s-primary bg-surface-warm p-6 dark:border-s-dark-clay">
        <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {d.action.cancelledHeading}
        </p>
        <p className="mt-2.5">
          <PlaceholderTag>{event.cancelledNote ?? ""}</PlaceholderTag>
        </p>
      </div>
    );
  }

  if (event.status === "completed") {
    return (
      <Card topRule="navy" tone="surface">
        <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {d.action.completedHeading}
        </p>
        <p className={cn("text-small mt-2 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
          {d.action.completedNote}
        </p>
      </Card>
    );
  }

  return (
    <Card topRule="navy" tone="surface">
      <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
        {d.action.heading}
      </p>
      {event.status === "closed" ? (
        <>
          <p className="mt-2.5">
            <PlaceholderTag>{event.closedReason ?? d.action.closedNote}</PlaceholderTag>
          </p>
          <Button variant="primary" disabled isUrdu={isUrdu} className="mt-4 w-full">
            {d.action.register}
          </Button>
        </>
      ) : (
        <div className="mt-4 flex flex-col gap-2.5">
          {event.registrationUrl ? (
            <Button href={event.registrationUrl} variant="primary" isUrdu={isUrdu}>
              {d.action.register}
            </Button>
          ) : (
            <Button variant="primary" disabled isUrdu={isUrdu}>
              {d.action.register}
            </Button>
          )}
          <Button
            href={organization.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            isUrdu={isUrdu}
          >
            {d.action.whatsapp}
          </Button>
        </div>
      )}
    </Card>
  );
}

export default async function EventDetailPage({
  params,
}: PageProps<"/[locale]/events/[slug]">) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const event = findEventBySlug(slug);
  if (!event) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getEventsContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);
  const d = strings.detail;
  const related = getRelatedEvents(event.slug, 3);

  const facts = [
    { label: d.facts.date, value: event.date ?? d.datePlaceholder, unconfirmed: !event.date },
    {
      label: d.facts.time,
      value: event.startTime ? `${event.startTime}${event.endTime ? `–${event.endTime}` : ""}` : d.timePlaceholder,
      unconfirmed: !event.startTime,
    },
    { label: d.facts.location, value: event.location ?? "[venue]", unconfirmed: !event.location },
    { label: d.facts.city, value: event.city ?? "[city]", unconfirmed: !event.city },
    { label: d.facts.status, value: d.status[event.status] },
  ];

  const body = (
    <div className="flex flex-col gap-10">
      <ImagePlaceholder ratio="16:9" caption="Event photograph" />
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
          {event.description ?? d.about.fallbackBody}
        </p>
      </div>
      {event.programme && event.programme.length > 0 ? (
        <div>
          <h2
            className={cn(
              "text-h3 text-[1.4375rem] font-semibold text-foreground",
              isUrdu && "font-urdu-display",
            )}
          >
            {d.programme.heading}
          </h2>
          <div className="mt-4 border-t border-border">
            {event.programme.map((slot, i) => (
              <div
                key={`${slot.time}-${i}`}
                className="flex gap-5 border-b border-border-soft py-3.5"
              >
                <span className="w-24 shrink-0 text-caption text-ink-faint">
                  <PlaceholderTag>{slot.time}</PlaceholderTag>
                </span>
                <span className={cn("text-small text-ink-body", isUrdu && "font-urdu-body text-base")}>
                  <PlaceholderTag>{slot.session}</PlaceholderTag>
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
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
          {d.gettingThere.heading}
        </p>
        <ImagePlaceholder ratio="4:3" caption="Map" className="mt-3.5" />
        <p className="mt-3.5">
          <PlaceholderTag>{event.address ?? d.gettingThere.addressPlaceholder}</PlaceholderTag>
        </p>
        <Button variant="secondary" size="compact" disabled isUrdu={isUrdu} className="mt-4 w-full">
          {d.gettingThere.directions}
        </Button>
      </Card>

      <div className="border border-border bg-band p-6">
        <p className={cn("text-card-title font-semibold text-foreground", isUrdu && "font-urdu-display")}>
          {d.contact.heading}
        </p>
        <p className={cn("text-small mt-2 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
          {d.contact.body}
        </p>
        <Button href={path("/contact")} variant="primary" isUrdu={isUrdu} className="mt-4 w-full">
          {d.contact.cta}
        </Button>
      </div>
    </>
  );

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-border bg-paper py-12 md:py-16">
        <Container>
          <Breadcrumb
            items={[
              { label: common.nav.home, href: path("/") },
              { label: common.nav.events, href: path("/events") },
              { label: event.title },
            ]}
            isUrdu={isUrdu}
            className="mb-6"
          />
          <EventStatusBadge status={event.status} label={d.status[event.status]} />
          <h1
            className={cn(
              "text-h1 mt-4 max-w-[22ch] text-foreground",
              isUrdu && "font-urdu-display",
            )}
          >
            {event.title}
          </h1>
          <div
            className={cn(
              "mt-5 flex flex-wrap gap-x-6 gap-y-1.5 text-small text-ink-muted",
              isUrdu && "font-urdu-body",
            )}
          >
            <span>
              {d.meta.date}: {event.date ?? d.datePlaceholder}
            </span>
            <span>
              {d.meta.time}: {event.startTime ? `${event.startTime}${event.endTime ? `–${event.endTime}` : ""}` : d.timePlaceholder}
            </span>
            <span>
              {d.meta.location}: {event.location ?? "[venue]"}
            </span>
          </div>
        </Container>
      </div>

      <section className="bg-surface py-12 lg:py-20">
        <Container>
          <Reveal>
            <DetailLayout
              actionCard={<ActionCard event={event} d={d} isUrdu={isUrdu} />}
              body={body}
              rail={rail}
            />
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
              <Button href={path("/events")} variant="tertiary" showArrow isUrdu={isUrdu}>
                {d.backToEvents}
              </Button>
            </Reveal>
            <Reveal>
              <RuledList className="mt-6">
                {related.map((related) => (
                  <RuledRow key={related.slug} asLink={path(`/events/${related.slug}`)}>
                    <span
                      className={cn(
                        "text-body font-medium text-foreground",
                        isUrdu && "font-urdu-display",
                      )}
                    >
                      {related.title}
                    </span>
                    <span className="text-caption text-ink-faint">
                      {related.date ?? d.datePlaceholder}
                    </span>
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
