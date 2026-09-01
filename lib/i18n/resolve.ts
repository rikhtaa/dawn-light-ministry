import { t } from "@/lib/i18n/t";
import type { Translated, TranslatedString } from "@/lib/i18n/types";

function isTranslatedString(value: unknown): value is TranslatedString {
  return (
    typeof value === "object" &&
    value !== null &&
    "value" in value &&
    "published" in value
  );
}

/**
 * Recursively resolves a Translated<T> content tree against its English
 * source, returning an object shaped like T with every leaf resolved
 * through t() — approved Urdu where available, English fallback otherwise.
 * Only call this for the non-English locale; the English locale should
 * render its source content directly.
 */
export function resolveContent<T extends Record<string, unknown>>(
  en: T,
  translated: Translated<T>,
): T {
  const result: Record<string, unknown> = {};

  for (const key of Object.keys(en)) {
    const enValue = en[key];
    const translatedValue = (translated as Record<string, unknown>)[key];

    if (typeof enValue === "string" && isTranslatedString(translatedValue)) {
      result[key] = t(translatedValue, enValue);
    } else {
      result[key] = resolveContent(
        enValue as Record<string, unknown>,
        translatedValue as Translated<Record<string, unknown>>,
      );
    }
  }

  return result as T;
}

/**
 * Resolves a flat ArticleBody block-content map (lib/article.ts's
 * `ArticleBlockDef.key` → paragraph/heading/list-item text) strictly
 * against ONE locale's own entries — never falling back to English.
 *
 * This is deliberately separate from resolveContent()/t()'s site-wide
 * English-fallback policy (lib/i18n/t.ts), which is correct for ordinary
 * UI copy (a button label with no Urdu yet should still say something
 * rather than render blank). Long-form article bodies are different: an
 * unpublished/empty Urdu paragraph must never silently render the English
 * paragraph in its place — that reads as the site mixing languages
 * mid-article. Call this for the non-English locale only; the caller
 * (lib/i18n/content-registry.ts) uses the English blocks object directly
 * for the English locale. ArticleBody (components/ui/ArticleBody.tsx)
 * omits any block whose resolved text comes back empty.
 */
export function resolveBlocksStrict<T extends Record<string, string>>(
  en: T,
  translated: Record<string, TranslatedString> | undefined,
): T {
  const result: Record<string, string> = {};

  for (const key of Object.keys(en)) {
    const entry = translated?.[key];
    result[key] = entry?.published && entry.value ? entry.value : "";
  }

  return result as T;
}
