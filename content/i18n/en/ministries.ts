/**
 * Authoritative English Ministries-index copy — transcribed from the
 * approved Claude Design mockup (Dawn of Light - Ministries.dc.html) and
 * HANDOFF.md §14 ("Ministries index"). The six ministry cards themselves
 * are NOT duplicated here — the page reuses content/i18n/en/home.ts's
 * `ministries.items` (via getHomeContent()), the same single source
 * Home's own MinistriesSection reads from, so the six ministries stay
 * identical wherever they're listed rather than risking drift between two
 * copies (CLAUDE.md §33's "no unauthorized scope expansion" spirit: don't
 * redefine content that's already authoritative elsewhere).
 */
export const ministries = {
  metadata: {
    title: "Ministries — Dawn of Light Ministry",
    description:
      "The six confirmed areas of Dawn of Light Ministry's work — church, Bethlehem Seminary, children's education, Christian publishing, teaching and lectures, and educational outreach — serving Karachi and Faisalabad, Pakistan since 1982.",
  },
  masthead: {
    eyebrow: "Our work",
    title: "Six ministries, one mission",
    standfirst:
      "Worship, theological training, children's schooling, publishing, lectures and outreach. Only work the organization has confirmed appears here.",
  },
  // Per-row UI chrome for the six ruled rows (Dawn of Light - Ministries.dc.html):
  // a photograph placeholder caption and a short directional-link label
  // ("Church →", "Seminary →" …). Neither is organizational content — the
  // ministries' own substantive copy (kicker/title/description/meta) stays
  // sourced from content/i18n/en/home.ts, as above.
  rows: {
    church: { imagePlaceholder: "Worship photograph", linkLabel: "Church" },
    seminary: { imagePlaceholder: "Seminary photograph", linkLabel: "Seminary" },
    childrensEducation: { imagePlaceholder: "Sunday School photograph", linkLabel: "Children" },
    publishing: { imagePlaceholder: "Books photograph", linkLabel: "Publishing" },
    teachingLectures: { imagePlaceholder: "Lecture photograph", linkLabel: "Lectures" },
    outreach: { imagePlaceholder: "Outreach photograph", linkLabel: "Outreach" },
  },
  connect: {
    eyebrow: "How the work connects",
    heading:
      "The church gathers, the seminary trains, the mission teaches — and children stay in school because of all three.",
    primaryCta: "Support the mission",
    secondaryCta: "Request prayer",
  },
} as const;

export type MinistriesStrings = typeof ministries;
