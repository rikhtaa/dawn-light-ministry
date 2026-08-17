export type Locale = "en" | "ur";

export const locales: Locale[] = ["en", "ur"];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export const directions: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ur: "rtl",
};

/**
 * A Urdu (or other non-English) string paired with provenance/review state.
 *
 * `published` and `reviewed` are deliberately separate concepts:
 *  - `published` controls whether t() (lib/i18n/t.ts) will render `value`
 *    on the live site at all, instead of falling back to English.
 *  - `reviewed` records whether a fluent human has actually checked
 *    `value`, independent of whether it's live.
 *
 * A machine translation for ordinary UI copy is generated with
 * `published: true, reviewed: false` — it's live immediately, but visibly
 * not yet human-checked. A machine translation for sensitive/theological
 * content (scripts/i18n/shared.ts's `sensitiveKeys`) is generated with
 * `published: false, reviewed: false` — a candidate exists for a reviewer
 * to read, but it never reaches visitors until a human flips both fields.
 * This is what makes it impossible to accidentally present an unreviewed
 * machine translation of doctrinal content as reviewed, while still
 * letting ordinary machine translations go live without per-string
 * human sign-off. See scripts/i18n/generate.ts for where these are set.
 */
export interface TranslatedString {
  value: string;
  source: "author" | "machine";
  published: boolean;
  reviewed: boolean;
  /**
   * hashSource() (lib/i18n/hash.ts) of the English string this was
   * translated from. Staleness is derived, not stored: an entry is stale
   * when this no longer matches hashSource(currentEnglishString) — see
   * scripts/i18n/generate.ts.
   */
  sourceHash: string;
}

/**
 * Mirrors an authoritative English content shape, replacing every string
 * leaf with a TranslatedString. Keeps translation files structurally in
 * sync with their English source at the type level.
 */
export type Translated<T> = {
  [K in keyof T]: T[K] extends string ? TranslatedString : Translated<T[K]>;
};
