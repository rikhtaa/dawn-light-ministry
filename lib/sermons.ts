import type { Locale } from "@/lib/i18n/types";

/**
 * Sermon records — structured data, not translatable UI copy (mirrors
 * Event/Resource in HANDOFF.md §16's own content/data model exactly).
 * `sermons` is empty because no sermon has been supplied: title, slug,
 * date, Scripture reference, series and a YouTube URL are all still
 * outstanding (HANDOFF.md §25). app/[locale]/sermons/page.tsx reads this
 * array first and uses it once it holds real entries.
 *
 * Until then, the page falls back to `placeholderSermons` below rather
 * than an empty-state page — per explicit instruction, HANDOFF.md §16's
 * "an item missing required fields is not published — the index shows
 * its empty state instead" does not mean the Latest Sermon band and
 * archive (both structurally present in the connected design's own
 * populated frame, Dawn of Light - Sermons.dc.html) should disappear
 * just because no real sermon has been supplied yet. The empty-state
 * card (rendered in app/[locale]/sermons/page.tsx) stays in the code for
 * a genuinely empty list — e.g. a future filtered view with zero
 * results — it's just not what an empty `sermons` array triggers now.
 */
export interface Sermon {
  title: string;
  slug: string;
  speaker: string;
  /** ISO 8601 date (e.g. "2026-03-01"). Omit when not yet known — components render the design's own bracketed date placeholder instead of a computed one. */
  date?: string;
  scriptureReference?: string;
  series?: string;
  language: Locale;
  externalUrl?: string;
  audioUrl?: string;
  notesUrl?: string;
  description?: string;
  format: "video" | "audio" | "text";
}

export const sermons: Sermon[] = [];

/**
 * The exact placeholder composition shown in the connected design's
 * populated frame — not invented sermon data. Every bracketed field is
 * transcribed verbatim from Dawn of Light - Sermons.dc.html; nothing
 * here claims to be a real recording (CLAUDE.md §11/§32). "Pastor Nayyer
 * Gull" and "Urdu" appear because the design itself treats them as
 * already-known (CLAUDE.md §3's approved org facts — this name and
 * language already appear the same way in content/i18n/en/home.ts's
 * `resources.items.sermon`), not because they're guessed; rows 2 and 3
 * use the design's own generic "[speaker]" bracket instead, exactly as
 * drawn. No slug, date, Scripture reference, series or YouTube URL is
 * fabricated — each stays either absent or the design's own bracket
 * text. Used only while `sermons` is empty (see above).
 */
export const placeholderSermons: Sermon[] = [
  {
    title: "[SERMON TITLE — TO BE SUPPLIED]",
    slug: "placeholder-latest",
    speaker: "Pastor Nayyer Gull",
    scriptureReference: "[Scripture reference]",
    language: "ur",
    description:
      "[PSEUDO/PLACEHOLDER — DESCRIPTION SUPPLIED WITH THE RECORDING. No summary is written on the ministry's behalf.]",
    format: "video",
  },
  {
    title: "[Sermon title — to be supplied]",
    slug: "placeholder-video",
    speaker: "Pastor Nayyer Gull",
    scriptureReference: "[Scripture reference]",
    series: "[series]",
    language: "ur",
    format: "video",
  },
  {
    title: "[Sermon title — to be supplied]",
    slug: "placeholder-audio",
    speaker: "[speaker]",
    scriptureReference: "[Scripture reference]",
    language: "ur",
    format: "audio",
  },
  {
    title: "[Sermon title — to be supplied]",
    slug: "placeholder-text",
    speaker: "[speaker]",
    scriptureReference: "[Scripture reference]",
    language: "en",
    format: "text",
  },
];
