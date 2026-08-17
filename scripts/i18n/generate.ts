#!/usr/bin/env tsx
/**
 * npm run i18n:generate -- --locale=<code>
 *
 * Server-side/offline CLI only — never called from the browser or at
 * Next.js request time. For each namespace:
 *   1. Reconciles the canonical English content against whatever
 *      translated cache already exists (reconcileTree, scripts/i18n/shared.ts):
 *      unchanged/hash-matching entries are preserved exactly; new or
 *      English-source-changed entries are collected as "pending".
 *   2. Batches every pending entry's English text through the configured
 *      TranslationProvider (lib/i18n/translation-provider.ts) in one pass
 *      across all namespaces, deduplicating identical strings so the API
 *      is never asked to translate the same text twice.
 *   3. Applies each result back to its exact content key by array index —
 *      never by re-matching text — and writes content/i18n/<locale>/*.ts.
 *
 * If there is nothing pending, this succeeds without needing a provider at
 * all (a pure reconciliation/bookkeeping pass). If there IS pending work
 * and no provider is configured, this fails loudly rather than silently
 * writing a locale file that's still full of empty strings.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getConfiguredProvider } from "../../lib/i18n/translation-provider";
import type { Locale } from "../../lib/i18n/types";
import {
  namespaces,
  contentTiers,
  reconcileTree,
  renderGeneratedFile,
  emptyStats,
  type ReconcileStats,
  type PendingTranslation,
} from "./shared";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const TRANSLATE_BATCH_SIZE = 100;

function parseArgs(argv: string[]): Record<string, string> {
  const args: Record<string, string> = {};
  for (const arg of argv) {
    const match = /^--([^=]+)=(.*)$/.exec(arg);
    if (match) args[match[1]] = match[2];
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const locale = args.locale;

  if (!locale) {
    console.error("Usage: npm run i18n:generate -- --locale=<code>");
    process.exit(1);
  }
  if (locale === "en") {
    console.error("en is the canonical source locale — there is nothing to generate for it.");
    process.exit(1);
  }

  const grandStats = emptyStats();
  const namespaceTrees = new Map<string, ReturnType<typeof reconcileTree>["tree"]>();
  const allPending: (PendingTranslation & { namespace: string })[] = [];

  for (const ns of namespaces) {
    const existing = await ns.loadExisting(locale);
    const nsStats: ReconcileStats = emptyStats();
    const { tree, pending } = reconcileTree(ns.english, existing, nsStats, contentTiers[ns.name]);

    namespaceTrees.set(ns.name, tree);
    for (const p of pending) allPending.push({ ...p, namespace: ns.name });

    (Object.keys(grandStats) as (keyof ReconcileStats)[]).forEach((k) => {
      grandStats[k] += nsStats[k];
    });
  }

  let batches = 0;
  let failed = 0;
  let providerUnavailable = false;
  let providerErrorMessage: string | null = null;
  const newTranslated = { count: 0 };
  const staleTranslated = { count: 0 };

  if (allPending.length > 0) {
    let provider = null;
    try {
      provider = getConfiguredProvider();
    } catch (error) {
      // Misconfigured (e.g. TRANSLATION_PROVIDER=google with no API key, or
      // an unrecognized provider name) — distinct from "unset", but treated
      // the same way here: report clearly, still write an honest,
      // schema-valid file below, then fail at the end.
      providerErrorMessage = (error as Error).message;
    }

    if (!provider) {
      providerUnavailable = true;
      failed = allPending.length;
    } else {
      console.log(`Translation provider: ${provider.name}`);

      const uniqueTexts = [...new Set(allPending.map((p) => p.englishText))];
      const translatedByText = new Map<string, string>();

      for (let i = 0; i < uniqueTexts.length; i += TRANSLATE_BATCH_SIZE) {
        const chunk = uniqueTexts.slice(i, i + TRANSLATE_BATCH_SIZE);
        batches++;
        try {
          const results = await provider.translateBatch({
            texts: chunk,
            sourceLocale: "en" as Locale,
            targetLocale: locale as Locale,
          });
          chunk.forEach((text, idx) => translatedByText.set(text, results[idx]));
        } catch (error) {
          console.error(`  batch ${batches} (${chunk.length} strings) failed: ${(error as Error).message}`);
        }
      }

      for (const p of allPending) {
        const result = translatedByText.get(p.englishText);
        if (result !== undefined) {
          p.node.value = result;
          p.node.source = "machine";
          p.node.reviewed = false;
          // No tier auto-publishes. Every machine translation — including
          // "label" (UI chrome) — is written unpublished. Tiers are used
          // only to prioritize review order (status.ts/review.ts), never to
          // decide what's safe to show visitors without a human looking at
          // it first. A real LibreTranslate run surfaced clearly wrong
          // "label"-tier output (e.g. "WhatsApp" mistranslated as
          // "misunderstanding"), which is why this is no longer tier-based.
          p.node.published = false;
          if (p.reason === "stale") staleTranslated.count++;
          else newTranslated.count++;
        } else {
          failed++;
        }
      }
    }
  }

  // Written even when the provider is unavailable: every placeholder node
  // reconcileTree() built is already schema-valid (empty value, unpublished,
  // hash stamped) — writing it now keeps the repo typecheck-clean and
  // honest about the fact that nothing was translated, rather than leaving
  // stale files in an older schema on disk.
  const outDir = path.join(repoRoot, "content", "i18n", locale);
  mkdirSync(outDir, { recursive: true });

  for (const ns of namespaces) {
    const tree = namespaceTrees.get(ns.name)!;
    const source = renderGeneratedFile({ namespace: ns.name, typeName: ns.typeName, locale, tree });
    writeFileSync(path.join(outDir, `${ns.name}.ts`), source, "utf8");
  }

  const translated = newTranslated.count + staleTranslated.count;

  console.log(`\nLocale: ${locale}`);
  console.log(`Existing translations preserved: ${grandStats.preserved + grandStats.bootstrapped}`);
  console.log(`New translations generated: ${newTranslated.count}`);
  console.log(`Stale translations regenerated: ${staleTranslated.count}`);
  console.log(`Copied verbatim (URLs/emails/numbers, not sent to the API): ${grandStats.verbatim}`);
  console.log(`API batches: ${batches}`);
  console.log(`Failed: ${failed}`);
  if (translated > 0) {
    console.log(
      `All ${translated} translated entries were written unpublished — nothing auto-publishes, ` +
        `regardless of tier. See \`npm run i18n:review -- --locale=${locale}\` to review and approve.`,
    );
  }

  if (providerUnavailable) {
    console.error("\nTranslation provider is not configured.");
    if (providerErrorMessage) console.error(providerErrorMessage);
    console.error(
      `${allPending.length} string(s) across locale "${locale}" need translation. Reconciliation ` +
        "was written to disk (existing translations preserved, structure kept valid), but nothing " +
        "new was translated.",
    );
    console.error("\nSet the required environment variables and run one of:");
    console.error(
      `  TRANSLATION_PROVIDER=google GOOGLE_TRANSLATE_API_KEY=<your key> ` +
        `npm run i18n:generate -- --locale=${locale}`,
    );
    console.error(
      `  TRANSLATION_PROVIDER=libretranslate LIBRETRANSLATE_URL=<your instance> ` +
        `npm run i18n:generate -- --locale=${locale}`,
    );
    process.exit(1);
  }

  console.log(
    failed > 0
      ? `\n${failed} string(s) failed to translate and were left unpublished — see errors above.`
      : "\nTranslation complete.",
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
