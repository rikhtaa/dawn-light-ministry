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
 * `approved` is only ever set by a human reviewer — see lib/i18n/t.ts.
 */
export interface TranslatedString {
  value: string;
  source: "author" | "machine";
  approved: boolean;
}

/**
 * Mirrors an authoritative English content shape, replacing every string
 * leaf with a TranslatedString. Keeps translation files structurally in
 * sync with their English source at the type level.
 */
export type Translated<T> = {
  [K in keyof T]: T[K] extends string ? TranslatedString : Translated<T[K]>;
};
