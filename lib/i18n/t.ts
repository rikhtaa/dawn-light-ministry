import type { TranslatedString } from "@/lib/i18n/types";

/**
 * Resolves a translated string, falling back to the authoritative English
 * value whenever the translation has not been human-approved. This is the
 * only path by which Urdu content reaches the site, so unapproved
 * (machine-drafted or otherwise unreviewed) translations can never
 * silently become published content.
 */
export function t(
  entry: TranslatedString | undefined,
  englishFallback: string,
): string {
  return entry?.approved ? entry.value : englishFallback;
}
