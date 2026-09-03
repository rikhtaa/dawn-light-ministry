/**
 * Shared publish-status/slug-integrity helpers for the three structured
 * content arrays (lib/{sermons,events,resources}.ts). V1 has no database
 * and no admin UI (CLAUDE.md §33) — publishing a real entry is a Git
 * operation (add it to the array). `published` exists for the one case
 * that isn't already covered by "add/remove the entry": staging a real,
 * fully-written record in the repository ahead of when it should go live,
 * without deleting and re-adding it later. Omitting the field — true for
 * every entry today — means published; nothing about current content
 * changes behavior.
 */
export interface Publishable {
  published?: boolean;
}

export function isPublished<T extends Publishable>(item: T): boolean {
  return item.published !== false;
}

/**
 * Dev-only guard against a copy/paste slug collision. Warns rather than
 * throwing, so a content mistake shows up in `npm run dev`/`next build`
 * output instead of ever being able to crash the production site — the
 * first matching entry simply always wins at lookup time regardless.
 */
export function warnOnDuplicateSlugs(items: { slug: string }[], label: string): void {
  if (process.env.NODE_ENV === "production") return;
  const seen = new Set<string>();
  for (const item of items) {
    if (seen.has(item.slug)) {
      console.warn(`[content] duplicate slug "${item.slug}" in ${label} — the first entry will always win at lookup time.`);
    }
    seen.add(item.slug);
  }
}
