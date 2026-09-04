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
  /** Urdu translation of `title` — same optionality/fallback shape as `Resource.titleUr` (lib/resources.ts): optional because most entries have no separately supplied Urdu title, set only where the ministry's own Urdu wording is actually known. Read via `eventTitle()`, never directly. */
  titleUr?: string;
  slug: string;
  description?: string;
  /** Urdu translation of `description` — same optionality/fallback shape as `titleUr`. Read via `eventDescription()`, never directly. */
  descriptionUr?: string;
  /** ISO 8601 date. Omit when not yet known. */
  date?: string;
  startTime?: string;
  endTime?: string;
  location?: string;
  city?: string;
  address?: string;
  image?: string;
  /** CSS `object-position` for the detail page's hero photo, e.g. "center 25%" — only set where the default center crop cuts into faces on this image's own composition (§ImagePlaceholder's `objectPosition` prop). Omit to keep the default centered crop. */
  imageObjectPosition?: string;
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
 * not an added fact. The third event's title previously said "Ministry
 * Partnership" — corrected: the source says Pastor Nayyer Gull "worked
 * with ... in their ministry, preaching and giving sermons," which is
 * preaching in someone else's ministry, not a stated partnership; the
 * word "partnership" never appears in the source and has been removed.
 * `image` paths are the organization-supplied photographs in
 * public/images/events/, matched by their own subject to each event.
 */
export const events: Event[] = [
  {
  id: "teaching-and-educational-support-2023",
  title: "Teaching a Friend About Christianity and Supporting His Education",
  titleUr: "ایک دوست کو مسیحیت کی تعلیم اور اس کی تعلیمی معاونت",
  slug: "teaching-and-educational-support-2023",
  description:
    "In 2023, Pastor Nayyer Gull taught a non-Christian about Christianity, helped him financially, supported his education, and provided books.",
  descriptionUr:
    "2023 میں پادری نیر گل نے ایک غیر مسیحی شخص کو مسیحیت کی تعلیم دی، مالی طور پر اس کی مدد کی، اس کی تعلیم میں معاونت کی اور اسے کتابیں فراہم کیں۔",
  image: "/images/events/event1.png",
  status: "completed",
},
{
  id: "outreach-to-kotri-sindh-2025",
  title: "Outreach to Hindu Communities in Kotri, Sindh",
  titleUr: "کوٹری، سندھ میں ہندو برادری کے درمیان خدمت",
  slug: "outreach-to-kotri-sindh-2025",
  description:
    "In 2025, Pastor Nayyer Gul preached about Christianity to Hindus in Kotri, Sindh, helped them financially, supported their education, and provided books.",
  descriptionUr:
    "2025 میں پادری نیر گل نے کوٹری، سندھ میں ہندو برادری کے افراد کو مسیحیت کے بارے میں تعلیم دی، مالی طور پر ان کی مدد کی، ان کی تعلیم میں معاونت کی اور انہیں کتابیں فراہم کیں۔",
  city: "Kotri, Sindh",
  image: "/images/events/event2.png",
  status: "completed",
},
{
  id: "preaching-in-shakeel-nasir-ministry-2025",
  title: "Preaching in Pastor Shakeel Nasir's Ministry",
  titleUr: "پادری شکیل ناصر کی خدمت میں منادی",
  slug: "preaching-in-shakeel-nasir-ministry-2025",
  description:
    "In 2025, Pastor Nayyer Gull worked with Pastor Jameel Nasir's brother, Shakeel Nasir, in their ministry, preaching and giving sermons.",
  descriptionUr:
    "2025 میں پادری نیر گل نے پادری جمیل ناصر کے بھائی، شکیل ناصر، کی خدمت میں منادی کی اور واعظ پیش کیے۔",
  image: "/images/events/event3.jpg",
  imageObjectPosition: "center 25%",
  status: "completed",
},
];
warnOnDuplicateSlugs(events, "lib/events.ts events");

/** `events`, filtered to entries that are actually publishable (see lib/content-status.ts). Every page/lookup below reads this, never the raw array. */
export const publishedEvents: Event[] = events.filter(isPublished);

/**
 * Locale-aware display title for an Event: `titleUr` on the Urdu route
 * when supplied, `title` (English) otherwise. Mirrors `resourceTitle()`
 * in lib/resources.ts exactly. The single place that should ever read
 * `event.title`/`event.titleUr` for display.
 */
export function eventTitle(event: Event, locale: Locale): string {
  return locale === "ur" && event.titleUr ? event.titleUr : event.title;
}

/**
 * Locale-aware display description for an Event: `descriptionUr` on the
 * Urdu route when supplied, `description` (English) otherwise. Mirrors
 * `eventTitle()`'s fallback shape exactly; `description` itself stays
 * optional, so this can return undefined.
 */
export function eventDescription(event: Event, locale: Locale): string | undefined {
  return locale === "ur" && event.descriptionUr ? event.descriptionUr : event.description;
}

export function findEventBySlug(slug: string): Event | undefined {
  return publishedEvents.find((e) => e.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return publishedEvents.map((e) => e.slug);
}

export function getRelatedEvents(slug: string, limit = 3): Event[] {
  return publishedEvents.filter((e) => e.slug !== slug).slice(0, limit);
}
