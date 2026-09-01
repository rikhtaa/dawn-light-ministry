import type { ArticleBlockDef } from "@/lib/article";

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

export type MinistryTopRule = "oxblood" | "navy" | "brass" | "success";

/**
 * Structural — not translatable content, so it lives here rather than in
 * content/i18n. Verified against the approved mockup's six cards. Shared
 * by Home's MinistriesSection and the /ministries index page, which render
 * the same six cards in two places.
 */
export const ministryTopRuleByKey: Record<MinistryKey, MinistryTopRule> = {
  church: "oxblood",
  seminary: "navy",
  childrensEducation: "brass",
  publishing: "success",
  teachingLectures: "navy",
  outreach: "brass",
};

/** True when a card's `meta` line carries a [CONFIRM]/[PSEUDO/PLACEHOLDER] marker. */
export const ministryMetaUnconfirmedByKey: Record<MinistryKey, boolean> = {
  church: true,
  seminary: true,
  childrensEducation: false,
  publishing: false,
  teachingLectures: false,
  outreach: false,
};

/**
 * Block order/kind for `content/i18n/en|ur/ministryPages.ts`'s
 * `church.body.blocks` — restructured from the ARTICLES source document's
 * "Church Ministry" article (lib/article.ts). Structural fact, not
 * translatable copy.
 */
export const churchBodyBlocks: ArticleBlockDef[] = [
  { key: "introP1", kind: "paragraph" },
  { key: "introP2", kind: "paragraph" },
  { key: "ministryHeading", kind: "heading" },
  { key: "ministryP1", kind: "paragraph" },
  { key: "ministryP2", kind: "paragraph" },
  { key: "worshipSub", kind: "subheading" },
  { key: "worshipP1", kind: "paragraph" },
  { key: "worshipP2", kind: "paragraph" },
  { key: "preachingSub", kind: "subheading" },
  { key: "preachingP1", kind: "paragraph" },
  { key: "preachingP2", kind: "paragraph" },
  { key: "pastoralSub", kind: "subheading" },
  { key: "pastoralP1", kind: "paragraph" },
  { key: "pastoralP2", kind: "paragraph" },
  { key: "discipleshipSub", kind: "subheading" },
  { key: "discipleshipP1", kind: "paragraph" },
  { key: "discipleshipP2", kind: "paragraph" },
  { key: "evangelismSub", kind: "subheading" },
  { key: "evangelismP1", kind: "paragraph" },
  { key: "evangelismP2", kind: "paragraph" },
  { key: "buildingSub", kind: "subheading" },
  { key: "buildingP1", kind: "paragraph" },
  { key: "buildingP2", kind: "paragraph" },
  { key: "leadershipHeading", kind: "heading" },
  { key: "leadershipP1", kind: "paragraph" },
  { key: "leadershipP2", kind: "paragraph" },
  { key: "leadershipP3", kind: "paragraph" },
  { key: "familiesHeading", kind: "heading" },
  { key: "familiesP1", kind: "paragraph" },
  { key: "familiesP2", kind: "paragraph" },
  { key: "familiesP3", kind: "paragraph" },
  { key: "musicHeading", kind: "heading" },
  { key: "musicP1", kind: "paragraph" },
  { key: "musicP2", kind: "paragraph" },
  { key: "musicP3", kind: "paragraph" },
  { key: "since1982Heading", kind: "heading" },
  { key: "since1982P1", kind: "paragraph" },
  { key: "since1982P2", kind: "paragraph" },
  { key: "since1982P3", kind: "paragraph" },
  { key: "desireHeading", kind: "heading" },
  { key: "desireIntro", kind: "paragraph" },
  {
    key: "desireList",
    kind: "list",
    itemKeys: [
      "desireItem1",
      "desireItem2",
      "desireItem3",
      "desireItem4",
      "desireItem5",
      "desireItem6",
      "desireItem7",
      "desireItem8",
      "desireItem9",
    ],
  },
  { key: "commitmentHeading", kind: "heading" },
  { key: "commitmentP1", kind: "paragraph" },
  { key: "commitmentP2", kind: "paragraph" },
];

/**
 * Block order/kind for `content/i18n/en|ur/ministryPages.ts`'s
 * `publishing.body.blocks` — restructured from the ARTICLES source
 * document's "Writing to Make the Truth of God's Word Known" article
 * (lib/article.ts).
 */
export const publishingBodyBlocks: ArticleBlockDef[] = [
  { key: "introP1", kind: "paragraph" },
  { key: "introP2", kind: "paragraph" },
  { key: "introP3", kind: "paragraph" },
  { key: "introP4", kind: "paragraph" },
  { key: "convHeading", kind: "heading" },
  { key: "convP1", kind: "paragraph" },
  { key: "convP2", kind: "paragraph" },
  {
    key: "convList",
    kind: "list",
    itemKeys: ["convItem1", "convItem2", "convItem3", "convItem4"],
  },
  { key: "convP3", kind: "paragraph" },
  { key: "convP4", kind: "paragraph" },
  { key: "convP5", kind: "paragraph" },
  { key: "convP6", kind: "paragraph" },
  { key: "booksHeading", kind: "heading" },
  { key: "booksP1", kind: "paragraph" },
  { key: "booksP2", kind: "paragraph" },
  { key: "booksP3", kind: "paragraph" },
  { key: "booksP4", kind: "paragraph" },
  { key: "educationHeading", kind: "heading" },
  { key: "educationP1", kind: "paragraph" },
  { key: "educationP2", kind: "paragraph" },
  { key: "educationP3", kind: "paragraph" },
  { key: "educationP4", kind: "paragraph" },
  { key: "educationP5", kind: "paragraph" },
  { key: "beyondHeading", kind: "heading" },
  { key: "beyondP1", kind: "paragraph" },
  { key: "beyondP2", kind: "paragraph" },
  { key: "beyondP3", kind: "paragraph" },
  { key: "beyondP4", kind: "paragraph" },
  { key: "beyondP5", kind: "paragraph" },
  {
    key: "beyondList",
    kind: "list",
    itemKeys: ["beyondItem1", "beyondItem2", "beyondItem3", "beyondItem4", "beyondItem5", "beyondItem6", "beyondItem7"],
  },
  { key: "beyondP6", kind: "paragraph" },
  { key: "voiceHeading", kind: "heading" },
  { key: "voiceP1", kind: "paragraph" },
  { key: "voiceP2", kind: "paragraph" },
  { key: "voiceP3", kind: "paragraph" },
  { key: "voiceP4", kind: "paragraph" },
  { key: "voiceP5", kind: "paragraph" },
  { key: "voiceP6", kind: "paragraph" },
  { key: "voiceP7", kind: "paragraph" },
  { key: "voiceP8", kind: "paragraph" },
  { key: "purposeHeading", kind: "heading" },
  { key: "purposeP1", kind: "paragraph" },
  { key: "purposeP2", kind: "paragraph" },
  { key: "purposeP3", kind: "paragraph" },
  { key: "purposeP4", kind: "paragraph" },
  { key: "purposeP5", kind: "paragraph" },
  { key: "purposeP6", kind: "paragraph" },
  { key: "purposeP7", kind: "paragraph" },
  { key: "purposeP8", kind: "paragraph" },
  { key: "journeyHeading", kind: "heading" },
  { key: "journeyP1", kind: "paragraph" },
  { key: "journeyP2", kind: "paragraph" },
  { key: "journeyP3", kind: "paragraph" },
  { key: "journeyP4", kind: "paragraph" },
  { key: "journeyP5", kind: "paragraph" },
  { key: "journeyP6", kind: "paragraph" },
  { key: "journeyP7", kind: "paragraph" },
  { key: "journeyP8", kind: "paragraph" },
  { key: "journeyP9", kind: "paragraph" },
  { key: "journeyP10", kind: "paragraph" },
];

/**
 * Block order/kind for `content/i18n/en|ur/ministryPages.ts`'s
 * `education.body.blocks` — restructured from the ARTICLES source
 * document's "Educational Outreach" article (lib/article.ts).
 */
export const educationBodyBlocks: ArticleBlockDef[] = [
  { key: "introP1", kind: "paragraph" },
  { key: "introP2", kind: "paragraph" },
  { key: "introP3", kind: "paragraph" },
  { key: "reachHeading", kind: "heading" },
  { key: "reachP1", kind: "paragraph" },
  { key: "reachP2", kind: "paragraph" },
  { key: "reachP3", kind: "paragraph" },
  { key: "reachP4", kind: "paragraph" },
  { key: "reachP5", kind: "paragraph" },
  { key: "reachP6", kind: "paragraph" },
  { key: "findingHeading", kind: "heading" },
  { key: "findingP1", kind: "paragraph" },
  { key: "findingP2", kind: "paragraph" },
  { key: "findingP3", kind: "paragraph" },
  { key: "findingP4", kind: "paragraph" },
  { key: "findingP5", kind: "paragraph" },
  { key: "findingP6", kind: "paragraph" },
  { key: "findingP7", kind: "paragraph" },
  { key: "dependencyHeading", kind: "heading" },
  { key: "dependencyP1", kind: "paragraph" },
  { key: "dependencyP2", kind: "paragraph" },
  { key: "dependencyP3", kind: "paragraph" },
  { key: "dependencyP4", kind: "paragraph" },
  { key: "practicalHeading", kind: "heading" },
  { key: "practicalIntro", kind: "paragraph" },
  {
    key: "practicalList",
    kind: "list",
    itemKeys: [
      "practicalItem1",
      "practicalItem2",
      "practicalItem3",
      "practicalItem4",
      "practicalItem5",
      "practicalItem6",
      "practicalItem7",
      "practicalItem8",
    ],
  },
  { key: "practicalP1", kind: "paragraph" },
  { key: "practicalP2", kind: "paragraph" },
  { key: "visitingHeading", kind: "heading" },
  { key: "visitingP1", kind: "paragraph" },
  { key: "visitingP2", kind: "paragraph" },
  { key: "visitingP3", kind: "paragraph" },
  { key: "visitingP4", kind: "paragraph" },
  { key: "visitingP5", kind: "paragraph" },
  { key: "childLaborHeading", kind: "heading" },
  { key: "childLaborP1", kind: "paragraph" },
  { key: "childLaborP2", kind: "paragraph" },
  { key: "childLaborP3", kind: "paragraph" },
  { key: "childLaborP4", kind: "paragraph" },
  { key: "childLaborP5", kind: "paragraph" },
  { key: "betterSystemHeading", kind: "heading" },
  { key: "betterSystemP1", kind: "paragraph" },
  { key: "betterSystemP2", kind: "paragraph" },
  { key: "betterSystemP3", kind: "paragraph" },
  { key: "betterSystemP4", kind: "paragraph" },
  { key: "betterSystemP5", kind: "paragraph" },
  { key: "allPakistanHeading", kind: "heading" },
  { key: "allPakistanP1", kind: "paragraph" },
  { key: "allPakistanP2", kind: "paragraph" },
  { key: "allPakistanP3", kind: "paragraph" },
  { key: "allPakistanP4", kind: "paragraph" },
  { key: "futureHeading", kind: "heading" },
  { key: "futureP1", kind: "paragraph" },
  { key: "futureP2", kind: "paragraph" },
  { key: "futureP3", kind: "paragraph" },
  { key: "futureP4", kind: "paragraph" },
  { key: "futureP5", kind: "paragraph" },
  { key: "whyMattersHeading", kind: "heading" },
  { key: "whyMattersP1", kind: "paragraph" },
  { key: "whyMattersP2", kind: "paragraph" },
  { key: "whyMattersP3", kind: "paragraph" },
  { key: "whyMattersP4", kind: "paragraph" },
  { key: "whyMattersP5", kind: "paragraph" },
  { key: "whyMattersP6", kind: "paragraph" },
  { key: "whyMattersP7", kind: "paragraph" },
  { key: "whyMattersP8", kind: "paragraph" },
  { key: "joinUsHeading", kind: "heading" },
  { key: "joinUsP1", kind: "paragraph" },
  { key: "joinUsP2", kind: "paragraph" },
  { key: "joinUsP3", kind: "paragraph" },
  { key: "joinUsP4", kind: "paragraph" },
  { key: "joinUsP5", kind: "paragraph" },
  { key: "joinUsP6", kind: "paragraph" },
  { key: "joinUsP7", kind: "paragraph" },
  { key: "joinUsP8", kind: "paragraph" },
  { key: "joinUsP9", kind: "paragraph" },
  { key: "joinUsP10", kind: "paragraph" },
  { key: "joinUsP11", kind: "paragraph" },
  { key: "joinUsP12", kind: "paragraph" },
];

/**
 * Block order/kind for `content/i18n/en|ur/ministryPages.ts`'s
 * `childrensEducation.body.blocks` — restructured from the ARTICLES source
 * document's "Children's Education" article (lib/article.ts).
 */
export const childrensEducationBodyBlocks: ArticleBlockDef[] = [
  { key: "introP1", kind: "paragraph" },
  { key: "introP2", kind: "paragraph" },
  { key: "introP3", kind: "paragraph" },
  { key: "step1Heading", kind: "heading" },
  { key: "step1P1", kind: "paragraph" },
  { key: "step1P2", kind: "paragraph" },
  { key: "step1P3", kind: "paragraph" },
  { key: "step1P4", kind: "paragraph" },
  { key: "findingHeading", kind: "heading" },
  { key: "findingP1", kind: "paragraph" },
  { key: "findingP2", kind: "paragraph" },
  { key: "findingP3", kind: "paragraph" },
  { key: "findingP4", kind: "paragraph" },
  { key: "findingP5", kind: "paragraph" },
  { key: "moreThanHeading", kind: "heading" },
  { key: "moreThanP1", kind: "paragraph" },
  { key: "moreThanP2", kind: "paragraph" },
  { key: "moreThanP3", kind: "paragraph" },
  { key: "moreThanP4", kind: "paragraph" },
  { key: "provideHeading", kind: "heading" },
  { key: "provideIntro", kind: "paragraph" },
  {
    key: "provideList",
    kind: "list",
    itemKeys: [
      "provideItem1",
      "provideItem2",
      "provideItem3",
      "provideItem4",
      "provideItem5",
      "provideItem6",
      "provideItem7",
    ],
  },
  { key: "provideP1", kind: "paragraph" },
  { key: "provideP2", kind: "paragraph" },
  { key: "notForProfitHeading", kind: "heading" },
  { key: "notForProfitP1", kind: "paragraph" },
  { key: "notForProfitP2", kind: "paragraph" },
  {
    key: "notForProfitList",
    kind: "list",
    itemKeys: [
      "notForProfitItem1",
      "notForProfitItem2",
      "notForProfitItem3",
      "notForProfitItem4",
      "notForProfitItem5",
      "notForProfitItem6",
    ],
  },
  { key: "visionHeading", kind: "heading" },
  { key: "visionP1", kind: "paragraph" },
  { key: "visionP2", kind: "paragraph" },
  { key: "visionP3", kind: "paragraph" },
  { key: "visionP4", kind: "paragraph" },
  { key: "visionP5", kind: "paragraph" },
  { key: "whySupportHeading", kind: "heading" },
  { key: "whySupportP1", kind: "paragraph" },
  { key: "whySupportP2", kind: "paragraph" },
  { key: "whySupportP3", kind: "paragraph" },
  { key: "whySupportP4", kind: "paragraph" },
  { key: "whySupportP5", kind: "paragraph" },
  { key: "whySupportP6", kind: "paragraph" },
  { key: "whySupportP7", kind: "paragraph" },
  { key: "whySupportP8", kind: "paragraph" },
  { key: "whySupportP9", kind: "paragraph" },
  { key: "whySupportP10", kind: "paragraph" },
  { key: "whySupportP11", kind: "paragraph" },
  { key: "whySupportP12", kind: "paragraph" },
  { key: "whySupportP13", kind: "paragraph" },
  { key: "joinUsHeading", kind: "heading" },
  { key: "joinUsP1", kind: "paragraph" },
  { key: "joinUsP2", kind: "paragraph" },
  { key: "joinUsP3", kind: "paragraph" },
  { key: "joinUsP4", kind: "paragraph" },
  { key: "joinUsP5", kind: "paragraph" },
  { key: "joinUsP6", kind: "paragraph" },
  { key: "joinUsP7", kind: "paragraph" },
  { key: "joinUsP8", kind: "paragraph" },
  { key: "joinUsP9", kind: "paragraph" },
  { key: "joinUsP10", kind: "paragraph" },
];
