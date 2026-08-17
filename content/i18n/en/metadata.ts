/**
 * Authoritative English `<head>` metadata (title/description) — separate
 * from `common`/`home` since this is document metadata, not UI copy. Feeds
 * app/[locale]/layout.tsx's generateMetadata(). Facts as established in
 * CLAUDE.md §3/§4 and PRD.md; nothing invented.
 */
export const metadata = {
  title: "Dawn of Light Ministry",
  description:
    "Dawn of Light Ministry — Bethlehem Church, Seminary & Educational Mission, serving Karachi and Faisalabad, Pakistan since 1982.",
} as const;

export type MetadataStrings = typeof metadata;
