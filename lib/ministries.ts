export type MinistryKey =
  | "church"
  | "seminary"
  | "childrensEducation"
  | "publishing"
  | "teachingLectures"
  | "outreach";

export interface MinistryItem {
  key: MinistryKey;
  href: string;
}

/**
 * Homepage ministry cards, verified against the approved Claude Design
 * homepage mockup's six cards (01 Worship · 02 Education · 03 Children ·
 * 04 Publishing · 05 Teaching · 06 Outreach). "teachingLectures" links to
 * Sermons rather than a distinct ministry route, matching the ministries
 * index's own "teaching & lectures" card (HANDOFF.md §13). Copy is
 * resolved separately through content/i18n/en/home.ts and
 * content/i18n/ur/home.ts — this file only defines structure and routing.
 */
export const ministryItems: MinistryItem[] = [
  { key: "church", href: "/ministries/church" },
  { key: "seminary", href: "/ministries/seminary" },
  { key: "childrensEducation", href: "/ministries/childrens-education" },
  { key: "publishing", href: "/ministries/publishing" },
  { key: "teachingLectures", href: "/sermons" },
  { key: "outreach", href: "/ministries/education" },
];
