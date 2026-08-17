/**
 * Authoritative English footer copy. Structure verified against the
 * approved Claude Design homepage mockup (Dawn of Light - Homepage
 * Design.dc.html, "footer" section): logo + one-line mission + inline
 * social badges, then Navigate / Ministries / Contact columns, and a
 * bottom row (copyright · Privacy · Website notice · language). The
 * mockup's footer has no About-anchors column — those live on the About
 * page itself.
 */
export const footer = {
  missionStatement:
    "A Baptist church, seminary and educational mission serving Karachi and Faisalabad since 1982.",
  navigateHeading: "Navigate",
  ministriesHeading: "Ministries",
  ministriesLinks: {
    church: "Church",
    seminary: "Bethlehem Seminary",
    childrensEducation: "Children's education",
    christianArticles: "Christian articles",
    // Not a distinct route — links to /sermons, same as the ministries
    // index's own "teaching & lectures" card (HANDOFF.md §13).
    lectures: "Lectures",
    outreach: "Educational outreach",
  },
  contactHeading: "Contact",
  // A nav-style link label, distinct from the homepage prayer form's
  // submit-button copy ("Send prayer request") — verified against the
  // mockup's own footer, which reads "Request prayer" here.
  requestPrayerLabel: "Request prayer",
  socialHeading: "Follow",
  socialPending: "Link pending",
  privacy: "Privacy",
  notice: "Website notice",
  copyright: "All rights reserved.",
} as const;

export type FooterStrings = typeof footer;
