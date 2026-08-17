#!/usr/bin/env tsx
/**
 * npm run i18n:review -- --locale=<code> [--namespace=home]
 *
 * Read-only: lists every entry a human hasn't reviewed yet — whether or
 * not it's currently published — English text beside the current
 * translated value, sensitive/critical entries flagged distinctly.
 * Approving/correcting a translation is done by hand-editing the
 * generated file directly (this command only reports, it never writes) —
 * see the header comment scripts/i18n/shared.ts writes into each
 * generated file.
 */
import { namespaces, contentTiers, isTranslatedLeaf, type TranslatedLeaf, type ContentTier } from "./shared";
import { hashSource } from "../../lib/i18n/hash";

function parseArgs(argv: string[]): Record<string, string> {
  const args: Record<string, string> = {};
  for (const arg of argv) {
    const match = /^--([^=]+)=(.*)$/.exec(arg);
    if (match) args[match[1]] = match[2];
  }
  return args;
}

interface ReviewItem {
  path: string;
  english: string;
  current: string;
  status: "missing" | "stale" | "unreviewed-live" | "unreviewed-blocked";
  tier: ContentTier;
}

function walk(
  english: Record<string, unknown>,
  existing: Record<string, unknown>,
  tierMap: Map<string, ContentTier>,
  pathParts: string[],
  out: ReviewItem[],
): void {
  for (const key of Object.keys(english)) {
    const enValue = english[key];
    const nextPath = [...pathParts, key];

    if (typeof enValue === "string") {
      const pathKey = nextPath.join(".");
      const currentHash = hashSource(enValue);
      const existingValue = existing[key];
      const leaf = isTranslatedLeaf(existingValue) ? (existingValue as TranslatedLeaf) : undefined;
      const tier = tierMap.get(pathKey) ?? "content";

      let status: ReviewItem["status"] | null = null;
      if (!leaf || !leaf.value) status = "missing";
      else if (!leaf.sourceHash || leaf.sourceHash !== currentHash) status = "stale";
      else if (!leaf.reviewed) status = leaf.published ? "unreviewed-live" : "unreviewed-blocked";

      if (status) {
        out.push({
          path: pathKey,
          english: enValue,
          current: leaf?.value ?? "",
          status,
          tier,
        });
      }
    } else {
      walk(
        enValue as Record<string, unknown>,
        (existing[key] as Record<string, unknown>) ?? {},
        tierMap,
        nextPath,
        out,
      );
    }
  }
}

const STATUS_LABEL: Record<ReviewItem["status"], string> = {
  missing: "missing",
  stale: "stale",
  "unreviewed-live": "live, unreviewed",
  "unreviewed-blocked": "blocked, unreviewed",
};

const TIER_TAG: Record<ContentTier, string> = {
  label: "",
  content: "",
  sensitive: "⚠ SENSITIVE ",
  critical: "⛔ CRITICAL ",
};

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const locale = args.locale;
  if (!locale) {
    console.error("Usage: npm run i18n:review -- --locale=<code> [--namespace=home]");
    process.exit(1);
  }

  let totalItems = 0;

  for (const ns of namespaces) {
    if (args.namespace && args.namespace !== ns.name) continue;

    const existing = await ns.loadExisting(locale);
    const items: ReviewItem[] = [];
    walk(ns.english, existing, contentTiers[ns.name], [], items);
    if (items.length === 0) continue;

    totalItems += items.length;
    console.log(`\n=== ${ns.name} (${items.length} needing review) ===`);
    for (const item of items) {
      const tag = TIER_TAG[item.tier];
      console.log(`\n${tag}[${STATUS_LABEL[item.status]}, ${item.tier}] ${ns.name}.${item.path}`);
      console.log(`  en: ${item.english}`);
      console.log(`  ${locale}: ${item.current || "(empty)"}`);
    }
  }

  if (totalItems === 0) {
    console.log(`Nothing needs review for locale "${locale}".`);
    return;
  }

  console.log(
    `\n${totalItems} entries need review. Edit content/i18n/${locale}/<namespace>.ts directly ` +
      `(set \`value\`, \`published: true\`, \`reviewed: true\`), then re-run ` +
      `\`npm run i18n:generate -- --locale=${locale}\` to confirm nothing else changed. Nothing ` +
      `auto-publishes, regardless of tier — every entry stays blocked until reviewed here.`,
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
