/**
 * Shared structural model for long-form article bodies restructured from
 * the ARTICLES source document (headings, subheadings, paragraphs, bullet
 * lists) — used by content/i18n/en|ur/{about,ministryPages,seminary}.ts.
 *
 * Block ORDER and KIND are structural facts (which paragraph comes after
 * which heading), not translatable copy, so they live here as plain data —
 * mirroring lib/seminary.ts's own `subjectKeys` split between structure and
 * content/i18n copy. The actual heading/paragraph/list-item text is keyed
 * content living in content/i18n/en|ur — never an array, per
 * lib/i18n/types.ts's `Translated<T>` (no array/tuple support).
 */
export type ArticleBlockKind = "heading" | "subheading" | "paragraph" | "list";

export interface ArticleBlockDef {
  /** Key into the article's flat `blocks: Record<string, string>` content. */
  key: string;
  kind: ArticleBlockKind;
  /** Only for kind "list" — keys of this list's items, in display order. */
  itemKeys?: string[];
}
