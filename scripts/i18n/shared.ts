/**
 * Shared helpers for the i18n CLI (generate.ts / status.ts / review.ts / check.ts).
 * Runs only under `tsx` as an offline/server-side script — never imported
 * by the Next.js app itself. Uses relative imports throughout (not the
 * `@/*` alias) since this runs outside Next's module resolution.
 */
import { hashSource } from "../../lib/i18n/hash";
import { common as commonEn } from "../../content/i18n/en/common";
import { home as homeEn } from "../../content/i18n/en/home";
import { footer as footerEn } from "../../content/i18n/en/footer";
import { metadata as metadataEn } from "../../content/i18n/en/metadata";
import { about as aboutEn } from "../../content/i18n/en/about";

export interface TranslatedLeaf {
  value: string;
  source: "author" | "machine";
  published: boolean;
  reviewed: boolean;
  sourceHash?: string; // optional only for not-yet-hashed legacy entries mid-normalization
}

export function isTranslatedLeaf(node: unknown): node is TranslatedLeaf {
  return (
    node !== null &&
    typeof node === "object" &&
    "value" in node &&
    "source" in node &&
    ("published" in node || "approved" in node)
  );
}

/**
 * Accepts either the current `{ published, reviewed }` schema or the
 * earlier `{ approved }` schema (still present in any not-yet-regenerated
 * file) and normalizes to the current shape. Under the old schema,
 * `approved` meant "human-authored/checked and live" — both `published`
 * and `reviewed` together — so that's the faithful one-time mapping.
 * `sourceHash` is passed through as-is (possibly absent, for entries that
 * predate hash tracking entirely).
 */
function normalizeLeaf(raw: unknown): TranslatedLeaf | undefined {
  if (raw === null || typeof raw !== "object") return undefined;
  const obj = raw as Record<string, unknown>;
  if (typeof obj.value !== "string" || typeof obj.source !== "string") return undefined;
  const sourceHash = typeof obj.sourceHash === "string" ? obj.sourceHash : undefined;
  const source = obj.source as "author" | "machine";

  if ("published" in obj) {
    return {
      value: obj.value,
      source,
      published: !!obj.published,
      reviewed: !!obj.reviewed,
      sourceHash,
    };
  }
  if ("approved" in obj) {
    const approved = !!obj.approved;
    return { value: obj.value, source, published: approved, reviewed: approved, sourceHash };
  }
  return undefined;
}

/** A tree of the same shape as the English content, but with every string leaf replaced. */
export type LeafTree = { [key: string]: string | LeafTree };
export type TranslatedTree = { [key: string]: TranslatedLeaf | TranslatedTree };

type NamespaceName = "common" | "home" | "footer" | "metadata" | "about";

interface Namespace {
  name: NamespaceName;
  typeName: "CommonStrings" | "HomeStrings" | "FooterStrings" | "MetadataStrings" | "AboutStrings";
  english: LeafTree;
  loadExisting(locale: string): Promise<TranslatedTree | Record<string, never>>;
}

async function loadExistingModule(
  namespace: string,
  locale: string,
): Promise<TranslatedTree | Record<string, never>> {
  try {
    const mod = (await import(`../../content/i18n/${locale}/${namespace}`)) as Record<
      string,
      TranslatedTree
    >;
    return mod[namespace] ?? {};
  } catch {
    // No file yet for this locale/namespace — a brand-new locale. Treated
    // as "nothing existing", so every key starts as new-pending.
    return {};
  }
}

export const namespaces: Namespace[] = [
  {
    name: "common",
    typeName: "CommonStrings",
    english: commonEn as unknown as LeafTree,
    loadExisting: (locale) => loadExistingModule("common", locale),
  },
  {
    name: "home",
    typeName: "HomeStrings",
    english: homeEn as unknown as LeafTree,
    loadExisting: (locale) => loadExistingModule("home", locale),
  },
  {
    name: "footer",
    typeName: "FooterStrings",
    english: footerEn as unknown as LeafTree,
    loadExisting: (locale) => loadExistingModule("footer", locale),
  },
  {
    name: "metadata",
    typeName: "MetadataStrings",
    english: metadataEn as unknown as LeafTree,
    loadExisting: (locale) => loadExistingModule("metadata", locale),
  },
  {
    name: "about",
    typeName: "AboutStrings",
    english: aboutEn as unknown as LeafTree,
    loadExisting: (locale) => loadExistingModule("about", locale),
  },
];

/**
 * Review-priority tier per content key (dot-path within a namespace).
 *
 * Policy is **no tier auto-publishes**. Every machine translation —
 * `label` included — is written `published: false, reviewed: false`
 * (scripts/i18n/generate.ts). A real run against LibreTranslate produced
 * clearly wrong output even for short "label"-tier UI chrome (e.g.
 * "WhatsApp" mistranslated as "misunderstanding" — غلط‌فہمی), which is why
 * tiers are no longer trusted to decide what's safe to show visitors
 * without a human looking at it first. Tiers exist purely to prioritize
 * *review order* in `status.ts`/`review.ts` — nothing more.
 *
 * - `label`     — pure interface chrome with no informational content of
 *                 its own (nav item names, aria-labels, toggle labels,
 *                 column headings). Lowest review priority, still gated.
 * - `content`   — the default. Any substantive copy not explicitly listed.
 * - `sensitive` — theological/doctrinal (HANDOFF.md §21). Top review
 *                 priority.
 * - `critical`  — organizational info where a translation error has a
 *                 real-world consequence (place names, a phone number
 *                 embedded in a sentence). Top review priority.
 */
export type ContentTier = "label" | "content" | "sensitive" | "critical";

export const contentTiers: Record<NamespaceName, Map<string, ContentTier>> = {
  common: new Map<string, ContentTier>([
    ["nav.home", "label"],
    ["nav.about", "label"],
    ["nav.ministries", "label"],
    ["nav.seminary", "label"],
    ["nav.sermons", "label"],
    ["nav.resources", "label"],
    ["nav.events", "label"],
    ["nav.prayer", "label"],
    ["nav.support", "label"],
    ["nav.contact", "label"],
    ["header.menuTitle", "label"],
    ["header.menuOpen", "label"],
    ["header.menuClose", "label"],
    ["header.primaryNavLabel", "label"],
    ["header.mobileNavLabel", "label"],
    ["header.languageSwitcherLabel", "label"],
    ["header.darkModeLabel", "label"],
    ["header.lightModeLabel", "label"],
    ["header.themeToggleToLight", "label"],
    ["header.themeToggleToDark", "label"],
    ["utilityBar.phoneLabel", "label"],
    // header.supportCta and utilityBar.locations are deliberately NOT
    // listed — a CTA and a place name are informational, not chrome, so
    // they fall through to the "content"/"critical" default below.
  ]),
  home: new Map<string, ContentTier>([
    ["mission.quote", "sensitive"],
    ["mission.body", "sensitive"],
    ["seminary.facts.statementOfFaith.value", "sensitive"],
    ["contact.cities.karachi", "critical"],
    ["contact.cities.faisalabad", "critical"],
    ["support.speak.description", "critical"],
  ]),
  footer: new Map<string, ContentTier>([
    ["navigateHeading", "label"],
    ["ministriesHeading", "label"],
    ["contactHeading", "label"],
    ["socialHeading", "label"],
    ["privacy", "label"],
    ["notice", "label"],
    // missionStatement, ministriesLinks.*, requestPrayerLabel, copyright
    // are informational/link-label copy, not pure chrome — default "content".
  ]),
  metadata: new Map<string, ContentTier>(),
  about: new Map<string, ContentTier>([
    ["missionVision.mission", "sensitive"],
    ["missionVision.vision", "sensitive"],
    ["statementOfFaith.trinity", "sensitive"],
    ["statementOfFaith.doctrine", "sensitive"],
  ]),
};

export function tierOf(namespace: NamespaceName, path: string): ContentTier {
  return contentTiers[namespace].get(path) ?? "content";
}

/**
 * Leaves that look like they shouldn't be run through a translation API at
 * all — URLs, email addresses, and strings that are purely numeric/
 * punctuation (e.g. a bare year like "1982"). These are copied verbatim
 * from English rather than translated, since a translation API may
 * otherwise "helpfully" localize digits or mangle a literal address.
 * Embedded values inside a longer sentence (e.g. a phone number quoted
 * mid-sentence) aren't caught by this — that's a human-review concern,
 * not something a regex can safely fix.
 */
const URL_PATTERN = /^https?:\/\//i;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NUMERIC_PATTERN = /^[\d\s.,/-]+$/;

export function shouldTranslate(text: string): boolean {
  const trimmed = text.trim();
  if (!trimmed) return false;
  if (URL_PATTERN.test(trimmed)) return false;
  if (EMAIL_PATTERN.test(trimmed)) return false;
  if (NUMERIC_PATTERN.test(trimmed)) return false;
  return true;
}

export interface ReconcileStats {
  preserved: number;
  bootstrapped: number;
  stale: number;
  newPending: number;
  verbatim: number; // shouldTranslate() said no — copied from English untouched
}

export function emptyStats(): ReconcileStats {
  return { preserved: 0, bootstrapped: 0, stale: 0, newPending: 0, verbatim: 0 };
}

/** One leaf still needing a translation call, with a live reference into the tree being built. */
export interface PendingTranslation {
  node: TranslatedLeaf; // already inserted into the output tree — mutate `value` after translating
  englishText: string;
  path: string;
  tier: ContentTier;
  reason: "new" | "stale";
}

export interface ReconcileResult {
  tree: TranslatedTree;
  pending: PendingTranslation[];
}

/**
 * Walks the English tree against whatever translated tree already exists
 * for a locale, classifying every leaf into exactly one outcome:
 *
 *  - preserved    — a real (non-empty) translation exists and its
 *                    sourceHash matches the current English text; kept
 *                    exactly as-is (published/reviewed/source untouched).
 *  - bootstrapped — a real (non-empty) translation exists but predates
 *                    sourceHash tracking; value/published/reviewed kept,
 *                    hash stamped so future runs can detect real changes.
 *  - verbatim     — shouldTranslate() rejects the English text (URL,
 *                    email, bare number); copied through unchanged and
 *                    published immediately — there's nothing to review.
 *  - new-pending / stale — no usable existing value, or the English
 *                    source changed since the last translation. Returned
 *                    in `pending` for the caller to actually translate;
 *                    the tree already holds a placeholder node the caller
 *                    mutates in place once a translation comes back.
 *
 * Never fabricates translated text itself — that only happens where the
 * caller (generate.ts) applies a TranslationProvider's result to the
 * `pending` entries this function hands back.
 */
export function reconcileTree(
  english: LeafTree,
  existing: TranslatedTree | Record<string, never>,
  stats: ReconcileStats,
  tierMap: Map<string, ContentTier>,
  pathParts: string[] = [],
): ReconcileResult {
  const tree: TranslatedTree = {};
  const pending: PendingTranslation[] = [];

  for (const key of Object.keys(english)) {
    const enValue = english[key];
    const existingRaw = (existing as Record<string, unknown>)[key];
    const nextPath = [...pathParts, key];
    const dotPath = nextPath.join(".");

    if (typeof enValue === "string") {
      const currentHash = hashSource(enValue);
      const normalized = normalizeLeaf(existingRaw);
      const tier = tierMap.get(dotPath) ?? "content";

      if (normalized && normalized.value && normalized.sourceHash === currentHash) {
        stats.preserved++;
        tree[key] = normalized as TranslatedLeaf & { sourceHash: string };
      } else if (normalized && normalized.value && !normalized.sourceHash) {
        stats.bootstrapped++;
        tree[key] = { ...normalized, sourceHash: currentHash };
      } else if (!shouldTranslate(enValue)) {
        stats.verbatim++;
        tree[key] = {
          value: enValue,
          source: "machine",
          published: true,
          reviewed: false,
          sourceHash: currentHash,
        };
      } else {
        const isStale = !!(normalized?.value && normalized.sourceHash !== currentHash);
        if (isStale) stats.stale++;
        else stats.newPending++;

        const node: TranslatedLeaf = {
          value: "",
          source: "machine",
          published: false,
          reviewed: false,
          sourceHash: currentHash,
        };
        tree[key] = node;
        pending.push({
          node,
          englishText: enValue,
          path: dotPath,
          tier,
          reason: isStale ? "stale" : "new",
        });
      }
    } else {
      const nested = reconcileTree(
        enValue as LeafTree,
        (existingRaw as TranslatedTree) ?? {},
        stats,
        tierMap,
        nextPath,
      );
      tree[key] = nested.tree;
      pending.push(...nested.pending);
    }
  }

  return { tree, pending };
}

/**
 * Dot-paths present in a locale's already-generated tree that no longer
 * correspond to any key in the current English source — the English string
 * was removed or renamed but the stale translation entry was never cleaned
 * up. Used by status.ts/check.ts; reconcileTree() never encounters these
 * itself since it only ever walks the English tree.
 */
export function findOrphaned(
  english: Record<string, unknown>,
  existing: Record<string, unknown>,
  pathParts: string[] = [],
): string[] {
  const orphaned: string[] = [];

  for (const key of Object.keys(existing)) {
    const existingValue = existing[key];
    const enValue = english[key];
    const nextPath = [...pathParts, key];

    if (isTranslatedLeaf(existingValue)) {
      if (typeof enValue !== "string") orphaned.push(nextPath.join("."));
    } else if (existingValue && typeof existingValue === "object") {
      if (enValue && typeof enValue === "object") {
        orphaned.push(
          ...findOrphaned(
            enValue as Record<string, unknown>,
            existingValue as Record<string, unknown>,
            nextPath,
          ),
        );
      } else {
        orphaned.push(nextPath.join("."));
      }
    }
  }

  return orphaned;
}

function serializeKey(key: string): string {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(key) ? key : JSON.stringify(key);
}

function serializeTree(node: TranslatedTree | TranslatedLeaf, indent: number): string {
  if (isTranslatedLeaf(node)) {
    return (
      `{ value: ${JSON.stringify(node.value)}, source: ${JSON.stringify(node.source)}, ` +
      `published: ${node.published}, reviewed: ${node.reviewed}, ` +
      `sourceHash: ${JSON.stringify(node.sourceHash)} }`
    );
  }
  const pad = " ".repeat(indent);
  const closePad = " ".repeat(indent - 2);
  const lines = Object.entries(node).map(
    ([key, value]) => `${pad}${serializeKey(key)}: ${serializeTree(value, indent + 2)},`,
  );
  return `{\n${lines.join("\n")}\n${closePad}}`;
}

export function renderGeneratedFile(options: {
  namespace: string;
  typeName: string;
  locale: string;
  tree: TranslatedTree;
}): string {
  const { namespace, typeName, locale, tree } = options;
  return `import type { Translated } from "@/lib/i18n/types";
import type { ${typeName} } from "@/content/i18n/en/${namespace}";

/**
 * GENERATED FILE — do not hand-edit the structure or add entries by hand.
 * Produced by \`npm run i18n:generate -- --locale=${locale}\`
 * (scripts/i18n/generate.ts), which calls the configured TranslationProvider
 * (lib/i18n/translation-provider.ts) for any entry whose sourceHash no
 * longer matches its English source. Regenerating preserves every entry
 * whose sourceHash still matches exactly, byte-for-byte — it never
 * overwrites an existing translation on its own.
 *
 * \`published\` controls whether this value renders on the live site at all
 * (see lib/i18n/t.ts); \`reviewed\` records whether a fluent human has
 * actually checked it. No tier auto-publishes — every machine translation,
 * including "label" (pure UI chrome), is written \`published: false\`. A
 * human has to review it and flip both \`reviewed\` and \`published\` here
 * by hand before it reaches visitors. scripts/i18n/shared.ts's
 * \`contentTiers\` ("label"/"content"/"sensitive"/"critical") only affects
 * review *priority* in \`npm run i18n:review -- --locale=${locale}\`, not
 * whether something publishes. See HANDOFF.md §21.
 */
export const ${namespace}: Translated<${typeName}> = ${serializeTree(tree, 2)};
`;
}
