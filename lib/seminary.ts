import type { ArticleBlockDef } from "@/lib/article";

export type SubjectKey = "scripture" | "doctrine" | "pastoralPractice" | "lectures";

/** Static asset path — the real, ministry-supplied Prospectus PDF (public/documents/). Structural, not translatable content. */
export const prospectusPdfPath = "/documents/bethlehem-theological-seminary-prospectus.pdf";

/**
 * The programme's numbered register, in display order — verified against
 * the approved Claude Design mockup's four rows (01 Scripture · 02
 * Doctrine · 03 Pastoral practice · 04 Lectures). Copy is resolved
 * separately through content/i18n/en/seminary.ts and
 * content/i18n/ur/seminary.ts — this file only defines structure and the
 * [CONFIRM] flag, mirroring lib/ministries.ts's own structure/copy split.
 */
export const subjectKeys: SubjectKey[] = ["scripture", "doctrine", "pastoralPractice", "lectures"];

/** True when a subject's `meta` line carries a [CONFIRM]/[PSEUDO/PLACEHOLDER] marker. */
export const subjectMetaUnconfirmedByKey: Record<SubjectKey, boolean> = {
  scripture: true,
  doctrine: true,
  pastoralPractice: true,
  lectures: false,
};

/**
 * Block order/kind for `content/i18n/en|ur/seminary.ts`'s `programme.blocks`
 * — restructured from the ARTICLES source document's "Bethlehem Theological
 * Seminary" article (lib/article.ts). Structural fact, not translatable
 * copy — mirrors this file's own `subjectKeys` split between structure and
 * content/i18n wording.
 */
export const programmeBodyBlocks: ArticleBlockDef[] = [
  { key: "dek", kind: "subheading" },
  { key: "introP1", kind: "paragraph" },
  { key: "introP2", kind: "paragraph" },
  { key: "introP3", kind: "paragraph" },
  { key: "introP4", kind: "paragraph" },
  { key: "introP5", kind: "paragraph" },
  { key: "introP6", kind: "paragraph" },
  { key: "introP7", kind: "paragraph" },
  { key: "whoHeading", kind: "heading" },
  { key: "whoP1", kind: "paragraph" },
  { key: "whoP2", kind: "paragraph" },
  { key: "whoP3", kind: "paragraph" },
  { key: "whoP4", kind: "paragraph" },
  { key: "howHeading", kind: "heading" },
  { key: "howP1", kind: "paragraph" },
  { key: "howP2", kind: "paragraph" },
  {
    key: "howList",
    kind: "list",
    itemKeys: ["howItem1", "howItem2", "howItem3", "howItem4", "howItem5", "howItem6"],
  },
  { key: "howP3", kind: "paragraph" },
  { key: "howP4", kind: "paragraph" },
  { key: "courseHeading", kind: "heading" },
  { key: "courseP1", kind: "paragraph" },
  { key: "courseP2", kind: "paragraph" },
  { key: "courseP3", kind: "paragraph" },
  { key: "courseP4", kind: "paragraph" },
  { key: "courseP5", kind: "paragraph" },
  { key: "courseP6", kind: "paragraph" },
  { key: "courseP7", kind: "paragraph" },
  { key: "pentateuchHeading", kind: "heading" },
  { key: "pentateuchP1", kind: "paragraph" },
  { key: "pentateuchP2", kind: "paragraph" },
  { key: "pentateuchP3", kind: "paragraph" },
  { key: "pentateuchP4", kind: "paragraph" },
  { key: "pentateuchP5", kind: "paragraph" },
  { key: "pentateuchP6", kind: "paragraph" },
  { key: "pentateuchP7", kind: "paragraph" },
  { key: "pentateuchP8", kind: "paragraph" },
  { key: "pentateuchP9", kind: "paragraph" },
  { key: "pentateuchP10", kind: "paragraph" },
  { key: "pentateuchP11", kind: "paragraph" },
  { key: "pentateuchP12", kind: "paragraph" },
  { key: "pentateuchP13", kind: "paragraph" },
  { key: "genesisHeading", kind: "heading" },
  { key: "genesisP1", kind: "paragraph" },
  { key: "genesisP2", kind: "paragraph" },
  { key: "genesisP3", kind: "paragraph" },
  { key: "genesisP4", kind: "paragraph" },
  { key: "genesisP5", kind: "paragraph" },
  { key: "purposeHeading", kind: "heading" },
  { key: "purposeP1", kind: "paragraph" },
  { key: "purposeP2", kind: "paragraph" },
  {
    key: "purposeList",
    kind: "list",
    itemKeys: [
      "purposeItem1",
      "purposeItem2",
      "purposeItem3",
      "purposeItem4",
      "purposeItem5",
      "purposeItem6",
      "purposeItem7",
    ],
  },
  { key: "purposeP3", kind: "paragraph" },
  { key: "reachHeading", kind: "heading" },
  { key: "reachP1", kind: "paragraph" },
  { key: "reachP2", kind: "paragraph" },
  { key: "reachP3", kind: "paragraph" },
  { key: "reachP4", kind: "paragraph" },
  { key: "reachP5", kind: "paragraph" },
  { key: "reachP6", kind: "paragraph" },
];
