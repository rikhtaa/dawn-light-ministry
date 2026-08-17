#!/usr/bin/env tsx
/**
 * npm run i18n:status -- --locale=<code>
 *
 * Read-only report: how many strings are published/machine-translated/
 * human-reviewed/untranslated/stale/orphaned for a locale, per namespace,
 * with sensitive/critical entries broken out separately. Server-side/
 * offline only — computed by reading the actual generated files against
 * the actual current English source, never cached numbers.
 */
import { namespaces, findOrphaned, isTranslatedLeaf, type TranslatedLeaf } from "./shared";
import { hashSource } from "../../lib/i18n/hash";

function parseArgs(argv: string[]): Record<string, string> {
  const args: Record<string, string> = {};
  for (const arg of argv) {
    const match = /^--([^=]+)=(.*)$/.exec(arg);
    if (match) args[match[1]] = match[2];
  }
  return args;
}

interface Counters {
  total: number;
  published: number; // renders as translated text on the live site right now
  machine: number; // source === "machine" (regardless of published/reviewed)
  reviewed: number; // a human has actually checked the value
  untranslated: number; // no usable value at all — renders as English fallback
  stale: number; // sourceHash no longer matches current English
  orphaned: number; // entry exists in the locale file with no matching English key
  reviewRequired: number; // has a value but isn't published yet — nothing auto-publishes
}

function emptyCounters(): Counters {
  return {
    total: 0,
    published: 0,
    machine: 0,
    reviewed: 0,
    untranslated: 0,
    stale: 0,
    orphaned: 0,
    reviewRequired: 0,
  };
}

function walk(
  english: Record<string, unknown>,
  existing: Record<string, unknown>,
  pathParts: string[],
  counters: Counters,
): void {
  for (const key of Object.keys(english)) {
    const enValue = english[key];
    const nextPath = [...pathParts, key];

    if (typeof enValue === "string") {
      const currentHash = hashSource(enValue);
      const existingValue = existing[key];
      const leaf = isTranslatedLeaf(existingValue) ? (existingValue as TranslatedLeaf) : undefined;

      counters.total++;

      const isStale = !!leaf?.sourceHash && leaf.sourceHash !== currentHash;
      if (isStale) counters.stale++;

      if (!leaf || !leaf.value || isStale) {
        counters.untranslated++;
      } else {
        if (leaf.published) counters.published++;
        else counters.reviewRequired++;
        if (leaf.source === "machine") counters.machine++;
        if (leaf.reviewed) counters.reviewed++;
      }
    } else {
      walk(
        enValue as Record<string, unknown>,
        (existing[key] as Record<string, unknown>) ?? {},
        nextPath,
        counters,
      );
    }
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const locale = args.locale;
  if (!locale) {
    console.error("Usage: npm run i18n:status -- --locale=<code>");
    process.exit(1);
  }

  console.log(`i18n status — locale: ${locale}\n`);

  const grand = emptyCounters();

  for (const ns of namespaces) {
    const existing = await ns.loadExisting(locale);
    const counters = emptyCounters();
    walk(ns.english, existing, [], counters);
    counters.orphaned = findOrphaned(
      ns.english as Record<string, unknown>,
      existing as Record<string, unknown>,
    ).length;

    console.log(
      `${ns.name.padEnd(8)} ${counters.published}/${counters.total} published · ` +
        `${counters.machine} machine · ${counters.reviewed} reviewed · ` +
        `${counters.untranslated} untranslated · ${counters.stale} stale · ` +
        `${counters.orphaned} orphaned` +
        (counters.reviewRequired > 0 ? ` · ${counters.reviewRequired} awaiting review` : ""),
    );

    for (const key of Object.keys(grand) as (keyof Counters)[]) {
      grand[key] += counters[key];
    }
  }

  console.log(
    `\nTotal    ${grand.published}/${grand.total} published · ${grand.machine} machine translated · ` +
      `${grand.reviewed} human reviewed · ${grand.untranslated} untranslated · ${grand.stale} stale · ` +
      `${grand.orphaned} orphaned`,
  );
  if (grand.reviewRequired > 0) {
    console.log(
      `⚠ ${grand.reviewRequired} translated entries are withheld from publishing until a human ` +
        `reviews them — no tier auto-publishes — see \`npm run i18n:review -- --locale=${locale}\`.`,
    );
  }
  if (grand.orphaned > 0) {
    console.log(
      `⚠ ${grand.orphaned} entries exist in the locale file with no matching English key — ` +
        "the English source was removed/renamed; safe to delete these by hand.",
    );
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
