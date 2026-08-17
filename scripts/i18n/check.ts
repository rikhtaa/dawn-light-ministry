#!/usr/bin/env tsx
/**
 * npm run i18n:check -- --locale=<code> [--strict]
 *
 * CI-friendly gate: reports MISSING/STALE/ORPHANED/REVIEWED counts per
 * namespace and total, computed fresh from the actual generated files
 * against the actual current English source (no cached numbers). Read-only
 * — never writes.
 *
 * Exit code: non-zero if STALE > 0 or ORPHANED > 0 — both indicate
 * actionable drift (a translation that no longer matches its English
 * source, or a dead key nobody cleaned up). MISSING alone does not fail by
 * default, since it's the expected state before a translation provider has
 * ever been run for a locale; pass --strict to also fail on any MISSING,
 * for use once a locale is meant to be complete.
 */
import { namespaces, findOrphaned, isTranslatedLeaf, type TranslatedLeaf } from "./shared";
import { hashSource } from "../../lib/i18n/hash";

function parseArgs(argv: string[]): { locale?: string; strict: boolean } {
  const args: Record<string, string> = {};
  let strict = false;
  for (const arg of argv) {
    if (arg === "--strict") {
      strict = true;
      continue;
    }
    const match = /^--([^=]+)=(.*)$/.exec(arg);
    if (match) args[match[1]] = match[2];
  }
  return { locale: args.locale, strict };
}

interface Counters {
  total: number;
  missing: number;
  stale: number;
  orphaned: number;
  reviewed: number;
}

function emptyCounters(): Counters {
  return { total: 0, missing: 0, stale: 0, orphaned: 0, reviewed: 0 };
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
      if (!leaf || !leaf.value) counters.missing++;
      else if (isStale) counters.stale++;
      else if (leaf.reviewed) counters.reviewed++;
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
  const { locale, strict } = parseArgs(process.argv.slice(2));
  if (!locale) {
    console.error("Usage: npm run i18n:check -- --locale=<code> [--strict]");
    process.exit(1);
  }

  console.log(`i18n check — locale: ${locale}${strict ? " (strict)" : ""}\n`);

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
      `${ns.name.padEnd(8)} Missing: ${counters.missing}  Stale: ${counters.stale}  ` +
        `Orphaned: ${counters.orphaned}  Reviewed: ${counters.reviewed}/${counters.total}`,
    );

    for (const key of Object.keys(grand) as (keyof Counters)[]) {
      grand[key] += counters[key];
    }
  }

  console.log(
    `\nTotal    Missing: ${grand.missing}  Stale: ${grand.stale}  Orphaned: ${grand.orphaned}  ` +
      `Reviewed: ${grand.reviewed}/${grand.total}`,
  );

  const hardFailure = grand.stale > 0 || grand.orphaned > 0;
  const strictFailure = strict && grand.missing > 0;

  if (hardFailure || strictFailure) {
    console.error("\ni18n check FAILED:");
    if (grand.stale > 0) {
      console.error(`  ${grand.stale} stale translation(s) — English source changed since translation.`);
    }
    if (grand.orphaned > 0) {
      console.error(`  ${grand.orphaned} orphaned entr(y/ies) — English key no longer exists.`);
    }
    if (strictFailure) {
      console.error(`  ${grand.missing} missing translation(s) (--strict requires zero).`);
    }
    console.error(`Run \`npm run i18n:review -- --locale=${locale}\` for details.`);
    process.exit(1);
  }

  console.log("\ni18n check passed.");
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
