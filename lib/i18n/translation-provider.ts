import type { Locale } from "@/lib/i18n/types";

export interface TranslationProvider {
  readonly name: string;
  translateBatch(input: {
    texts: string[];
    sourceLocale: Locale;
    targetLocale: Locale;
  }): Promise<string[]>;
}

const GOOGLE_TRANSLATE_ENDPOINT = "https://translation.googleapis.com/language/translate2";
// Google's Translation API v2 accepts many `q` values per request but caps
// total request size — chunking client-side keeps every request well
// inside that limit regardless of individual string length.
const GOOGLE_BATCH_SIZE = 100;

/**
 * Google Cloud Translation API (v2, API-key auth — no service account/SDK
 * needed). Called only from scripts/i18n/generate.ts, a Node-only CLI —
 * never from the browser or from Next.js request handling. The API key
 * lives in GOOGLE_TRANSLATE_API_KEY (server-side env var, never
 * NEXT_PUBLIC_*, never committed).
 */
export class GoogleTranslateProvider implements TranslationProvider {
  readonly name = "google";

  constructor(private readonly apiKey: string) {}

  async translateBatch(input: {
    texts: string[];
    sourceLocale: Locale;
    targetLocale: Locale;
  }): Promise<string[]> {
    const { texts, sourceLocale, targetLocale } = input;
    if (texts.length === 0) return [];

    const results: string[] = [];

    for (let i = 0; i < texts.length; i += GOOGLE_BATCH_SIZE) {
      const chunk = texts.slice(i, i + GOOGLE_BATCH_SIZE);
      const response = await fetch(`${GOOGLE_TRANSLATE_ENDPOINT}?key=${this.apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: chunk,
          source: sourceLocale,
          target: targetLocale,
          format: "text",
        }),
      });

      if (!response.ok) {
        const body = await response.text().catch(() => "");
        throw new Error(
          `Google Translate API request failed (${response.status} ${response.statusText}): ${body.slice(0, 500)}`,
        );
      }

      const json = (await response.json()) as {
        data?: { translations?: { translatedText: string }[] };
      };
      const translations = json.data?.translations;

      // Google v2 returns translations in the same order as the `q` array,
      // one-to-one — but refuse to guess if the count doesn't match rather
      // than silently misaligning strings to the wrong content keys.
      if (!translations || translations.length !== chunk.length) {
        throw new Error(
          `Google Translate API returned ${translations?.length ?? 0} results for a ` +
            `batch of ${chunk.length} texts — refusing to guess the mapping.`,
        );
      }

      results.push(...translations.map((t) => t.translatedText));
    }

    return results;
  }
}

// Self-hosted instances are more resource-constrained than a managed API —
// a smaller chunk size keeps individual requests light.
const LIBRETRANSLATE_BATCH_SIZE = 50;

/**
 * LibreTranslate (self-hosted, e.g. via Docker — see .env.example for the
 * run command). Called only from scripts/i18n/generate.ts, never from the
 * browser or Next.js request handling. LIBRETRANSLATE_URL points at your
 * instance's /translate endpoint; LIBRETRANSLATE_API_KEY is only needed if
 * that instance requires one (self-hosted instances often don't).
 */
export class LibreTranslateProvider implements TranslationProvider {
  readonly name = "libretranslate";

  constructor(
    private readonly endpoint: string,
    private readonly apiKey?: string,
  ) {}

  async translateBatch(input: {
    texts: string[];
    sourceLocale: Locale;
    targetLocale: Locale;
  }): Promise<string[]> {
    const { texts, sourceLocale, targetLocale } = input;
    if (texts.length === 0) return [];

    const results: string[] = [];

    for (let i = 0; i < texts.length; i += LIBRETRANSLATE_BATCH_SIZE) {
      const chunk = texts.slice(i, i + LIBRETRANSLATE_BATCH_SIZE);
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          q: chunk,
          source: sourceLocale,
          target: targetLocale,
          format: "text",
          ...(this.apiKey ? { api_key: this.apiKey } : {}),
        }),
      });

      if (!response.ok) {
        const body = await response.text().catch(() => "");
        throw new Error(
          `LibreTranslate request failed (${response.status} ${response.statusText}) at ${this.endpoint}: ${body.slice(0, 500)}`,
        );
      }

      const json = (await response.json()) as { translatedText?: string[] | string };
      const translated = json.translatedText;

      // Batch (array `q`) support requires a reasonably recent LibreTranslate
      // version — an older instance may echo back a single string instead
      // of an array. Refuse to guess the mapping either way.
      if (!Array.isArray(translated) || translated.length !== chunk.length) {
        throw new Error(
          `LibreTranslate returned ${Array.isArray(translated) ? translated.length : "a non-array"} ` +
            `result for a batch of ${chunk.length} texts — refusing to guess the mapping. ` +
            "(Does this instance support array `q` batch requests?)",
        );
      }

      results.push(...translated);
    }

    return results;
  }
}

export class UnconfiguredTranslationProvider implements TranslationProvider {
  readonly name = "none";

  async translateBatch(): Promise<string[]> {
    throw new Error(
      "No translation provider is configured. Set TRANSLATION_PROVIDER=google or " +
        "TRANSLATION_PROVIDER=libretranslate (plus the matching env vars), then re-run the generator.",
    );
  }
}

/**
 * Reads TRANSLATION_PROVIDER (and provider-specific env vars) to decide
 * which TranslationProvider to use. Returns null only for the explicit
 * "no provider" states (unset or "none") — an unrecognized or
 * misconfigured provider name throws immediately, so a typo in
 * TRANSLATION_PROVIDER or a missing API key surfaces as a clear startup
 * error rather than silently falling back to bookkeeping-only mode.
 */
export function getConfiguredProvider(): TranslationProvider | null {
  const name = process.env.TRANSLATION_PROVIDER;

  if (!name || name === "none") return null;

  if (name === "google") {
    const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
    if (!apiKey) {
      throw new Error(
        "TRANSLATION_PROVIDER=google is set but GOOGLE_TRANSLATE_API_KEY is missing. " +
          "Set GOOGLE_TRANSLATE_API_KEY (see .env.example) and re-run.",
      );
    }
    return new GoogleTranslateProvider(apiKey);
  }

  if (name === "libretranslate") {
    const endpoint = process.env.LIBRETRANSLATE_URL;
    if (!endpoint) {
      throw new Error(
        "TRANSLATION_PROVIDER=libretranslate is set but LIBRETRANSLATE_URL is missing. " +
          "Set LIBRETRANSLATE_URL to your instance's /translate endpoint (see .env.example) and re-run.",
      );
    }
    return new LibreTranslateProvider(endpoint, process.env.LIBRETRANSLATE_API_KEY);
  }

  throw new Error(
    `Unknown TRANSLATION_PROVIDER "${name}" — "google" and "libretranslate" are implemented today ` +
      "(lib/i18n/translation-provider.ts).",
  );
}
