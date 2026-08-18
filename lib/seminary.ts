export type SubjectKey = "scripture" | "doctrine" | "pastoralPractice" | "lectures";

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
