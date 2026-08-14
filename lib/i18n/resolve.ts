import { t } from "@/lib/i18n/t";
import type { Translated, TranslatedString } from "@/lib/i18n/types";

function isTranslatedString(value: unknown): value is TranslatedString {
  return (
    typeof value === "object" &&
    value !== null &&
    "value" in value &&
    "approved" in value
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
