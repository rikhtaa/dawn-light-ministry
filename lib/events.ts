import type { Locale } from "@/lib/i18n/types";

/**
 * Event records — structured data, not translatable UI copy (HANDOFF.md
 * §16's content/data model, mirroring lib/sermons.ts exactly). `events` is
 * empty: no event has been supplied yet. Neither an Events index page nor
 * real event data exists in this codebase yet — this file exists so
 * /events/[slug] (Dawn of Light - Detail Templates.dc.html "02 — Event
 * detail") has something real to route to, on the same "design's own
 * placeholder composition, not fabricated content" basis established for
 * Sermons (see lib/sermons.ts).
 */
export type EventStatus = "open" | "closed" | "cancelled" | "completed";

export interface Event {
  id: string;
  title: string;
  slug: string;
  description?: string;
  /** ISO 8601 date. Omit when not yet known. */
  date?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  city?: string;
  address?: string;
  image?: string;
  registrationUrl?: string;
  contact?: string;
  status: EventStatus;
  /** Shown only when status is "closed" — HANDOFF.md/the design's shared rule "status stated, never implied: disabled actions carry reason in text." */
  closedReason?: string;
  /** Shown only when status is "cancelled". */
  cancelledNote?: string;
  programme?: { time: string; session: string }[];
  language?: Locale;
}

export const events: Event[] = [];

/**
 * The connected design's own four status-variant demo cards, transcribed
 * as bracket-placeholder events rather than invented ones — CLAUDE.md §32
 * forbids fabricating event facts/dates, so every field here is either
 * absent or the design's own generic bracket text. Exercises all four
 * `EventStatusBadge`/action-card variants the template must support.
 */
export const placeholderEvents: Event[] = [
  {
    id: "placeholder-open",
    title: "[EVENT TITLE — TO BE SUPPLIED]",
    slug: "placeholder-open",
    description:
      "[PSEUDO/PLACEHOLDER — EVENT DESCRIPTION SUPPLIED WHEN THE EVENT IS CONFIRMED. No summary is written on the ministry's behalf.]",
    location: "[venue]",
    city: "[city]",
    address: "[PSEUDO/PLACEHOLDER — ADDRESS TO BE CONFIRMED]",
    status: "open",
    programme: [
      { time: "[time]", session: "[session]" },
      { time: "[time]", session: "[session]" },
    ],
  },
  {
    id: "placeholder-closed",
    title: "[Event title — to be supplied]",
    slug: "placeholder-closed",
    location: "[venue]",
    city: "[city]",
    status: "closed",
    closedReason: "[PSEUDO/PLACEHOLDER — REASON REGISTRATION IS CLOSED TO BE SUPPLIED]",
  },
  {
    id: "placeholder-cancelled",
    title: "[Event title — to be supplied]",
    slug: "placeholder-cancelled",
    location: "[venue]",
    city: "[city]",
    status: "cancelled",
    cancelledNote: "[PSEUDO/PLACEHOLDER — CANCELLATION NOTICE TO BE SUPPLIED]",
  },
  {
    id: "placeholder-completed",
    title: "[Event title — to be supplied]",
    slug: "placeholder-completed",
    location: "[venue]",
    city: "[city]",
    status: "completed",
  },
];

export function findEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug) ?? placeholderEvents.find((e) => e.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return (events.length > 0 ? events : placeholderEvents).map((e) => e.slug);
}

export function getRelatedEvents(slug: string, limit = 3): Event[] {
  const pool = events.length > 0 ? events : placeholderEvents;
  return pool.filter((e) => e.slug !== slug).slice(0, limit);
}
