import type { TranslatedString } from "@/lib/i18n/types";

/**
 * Resolves a translated string, falling back to the authoritative English
 * value whenever the translation isn't published or has no value yet. This
 * is the only path by which non-English content reaches the site.
 *
 * `published` (not `reviewed`) is the render gate: ordinary machine
 * translations go live as `published: true, reviewed: false`, while
 * sensitive/theological content stays `published: false` — invisible to
 * visitors — until a human reviews it and flips both fields. See the
 * TranslatedString doc comment (lib/i18n/types.ts).
 */
export function t(
  entry: TranslatedString | undefined,
  englishFallback: string,
): string {
  return entry?.published && entry.value ? entry.value : englishFallback;
}
