import type { Locale } from "@/lib/i18n/types";
import { isPublished, warnOnDuplicateSlugs, type Publishable } from "@/lib/content-status";

/**
 * Event records — structured data, not translatable UI copy (HANDOFF.md
 * §16's content/data model, mirroring lib/sermons.ts exactly).
 */
export type EventStatus = "open" | "closed" | "cancelled" | "completed";

export interface Event extends Publishable {
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

/**
 * Real event data, transcribed from the organization-supplied events
 * document. All three are retrospective summaries of completed ministry
 * activity (status: "completed"), not upcoming/attendable events — the
 * source gives no specific date, time, address, or registration details
 * for any of them, only a year and a description, so those fields stay
 * absent rather than invented. `title` is not supplied by the source
 * (each entry is only labeled "event 1"/"event 2"/"event 3"); the titles
 * below are a minimal, factual summary of each entry's own description,
 * not an added fact — flagged in the Step 5 report as a judgment call.
 */
export const events: Event[] = [
  {
    id: "teaching-and-educational-support-2023",
    title: "Teaching a Friend About Christianity and Supporting His Education",
    slug: "teaching-and-educational-support-2023",
    description:
      "In 2023, Pastor Nayyer Gull taught a non-Christian about Christianity, helped him financially, supported his education, and provided books.",
    status: "completed",
  },
  {
    id: "outreach-to-kotri-sindh-2025",
    title: "Outreach to Hindu Communities in Kotri, Sindh",
    slug: "outreach-to-kotri-sindh-2025",
    description:
      "In 2025, Pastor Nayyer Gul preached about Christianity to Hindus in Kotri, Sindh, helped them financially, supported their education, and provided books.",
    city: "Kotri, Sindh",
    status: "completed",
  },
  {
    id: "ministry-partnership-with-shakeel-nasir-2025",
    title: "Ministry Partnership with Pastor Shakeel Nasir",
    slug: "ministry-partnership-with-shakeel-nasir-2025",
    description:
      "In 2025, Pastor Nayyer Gull worked with Pastor Jameel Nasir's brother, Shakeel Nasir, in their ministry, preaching and giving sermons.",
    status: "completed",
  },
];
warnOnDuplicateSlugs(events, "lib/events.ts events");

/** `events`, filtered to entries that are actually publishable (see lib/content-status.ts). Every page/lookup below reads this, never the raw array. */
export const publishedEvents: Event[] = events.filter(isPublished);

export function findEventBySlug(slug: string): Event | undefined {
  return publishedEvents.find((e) => e.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return publishedEvents.map((e) => e.slug);
}

export function getRelatedEvents(slug: string, limit = 3): Event[] {
  return publishedEvents.filter((e) => e.slug !== slug).slice(0, limit);
}
