export type MinistryKey =
  | "church"
  | "seminary"
  | "christianEducation"
  | "childrensEducation"
  | "publishing"
  | "teachingLectures";

export interface MinistryItem {
  key: MinistryKey;
  href: string;
}

/**
 * Homepage ministry cards, per PRD §7.4 / §9. Copy is resolved separately
 * through content/i18n/en/home.ts and content/i18n/ur/home.ts — this file
 * only defines structure and routing.
 */
export const ministryItems: MinistryItem[] = [
  { key: "church", href: "/ministries/church" },
  { key: "seminary", href: "/ministries/seminary" },
  { key: "christianEducation", href: "/ministries/education" },
  { key: "childrensEducation", href: "/ministries/childrens-education" },
  { key: "publishing", href: "/ministries/publishing" },
  { key: "teachingLectures", href: "/ministries" },
];
