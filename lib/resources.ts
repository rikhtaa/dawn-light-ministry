import type { Locale } from "@/lib/i18n/types";

/**
 * Resource records — structured data, not translatable UI copy
 * (HANDOFF.md §16, mirroring lib/sermons.ts / lib/events.ts). `resources`
 * is empty: no resource has been supplied yet. Neither a Resources index
 * page nor real resource data exists in this codebase yet — this file
 * exists so /resources/[slug] (Dawn of Light - Detail Templates.dc.html
 * "04 — Resource detail") has something real to route to, on the same
 * placeholder-composition basis as Sermons/Events.
 */
export type ResourceType = "article" | "study" | "book" | "pdf";

export interface Resource {
  title: string;
  slug: string;
  type: ResourceType;
  author?: string;
  /** ISO 8601 date. Omit when not yet known. */
  date?: string;
  description?: string;
  thumbnail?: string;
  externalUrl?: string;
  downloadUrl?: string;
  scriptureReference?: string;
  language: Locale;
  pages?: number;
  /** 22px serif lede paragraph at the top of the body. */
  standfirst?: string;
  /** "What it covers" ruled list. */
  covers?: string[];
}

export const resources: Resource[] = [];

/**
 * The design's own bracket-placeholder resource, transcribed verbatim —
 * not invented content. "Pastor Nayyer Gull" reused only where already an
 * approved org fact (CLAUDE.md §3), exactly as lib/sermons.ts does.
 */
export const placeholderResources: Resource[] = [
  {
    title: "[RESOURCE TITLE — TO BE SUPPLIED]",
    slug: "placeholder-study",
    type: "study",
    author: "Pastor Nayyer Gull",
    language: "ur",
    standfirst: "[PSEUDO/PLACEHOLDER — STANDFIRST TO BE SUPPLIED]",
    description:
      "[PSEUDO/PLACEHOLDER — BODY TEXT SUPPLIED WITH THE RESOURCE. No summary is written on the ministry's behalf.]",
    covers: ["[topic]", "[topic]", "[topic]"],
  },
  {
    title: "[Resource title — to be supplied]",
    slug: "placeholder-article",
    type: "article",
    author: "[author]",
    language: "en",
  },
  {
    title: "[Resource title — to be supplied]",
    slug: "placeholder-book",
    type: "book",
    author: "[author]",
    language: "ur",
  },
];

export function findResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug) ?? placeholderResources.find((r) => r.slug === slug);
}

export function getAllResourceSlugs(): string[] {
  return (resources.length > 0 ? resources : placeholderResources).map((r) => r.slug);
}

export function getRelatedResources(slug: string, limit = 3): Resource[] {
  const pool = resources.length > 0 ? resources : placeholderResources;
  return pool.filter((r) => r.slug !== slug).slice(0, limit);
}
