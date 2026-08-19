/**
 * Authoritative English Website Notice & Terms copy (Dawn of Light -
 * Utility Pages.dc.html §02, "same template, body only" as Privacy — see
 * components/legal/LegalDocument.tsx). Transcribed from the connected
 * design's own drafting text — see content/i18n/en/privacy.ts's own note
 * on the placeholder-paragraph convention this page shares.
 */
export const websiteNotice = {
  metadata: {
    title: "Website Notice & Terms — Dawn of Light Ministry",
    description: "Who publishes this website, what the content is for, and the limits of what it can do.",
  },
  breadcrumbLabel: "Website notice",
  masthead: {
    eyebrow: "Legal",
    title: "Website notice & terms",
    standfirst: "Who publishes this website, what the content is for, and the limits of what it can do.",
    lastUpdated: "Last updated [DATE] · Version [n]",
  },
  toc: {
    heading: "On this page",
    whoPublishes: "Who publishes this site",
    useOfContent: "Use of the content",
    copyright: "Copyright & permissions",
    externalLinks: "External links",
    accuracy: "Accuracy",
    notPastoral: "Not pastoral or emergency care",
    giving: "Giving & donations",
    languageVersions: "Language versions",
  },
  lead: "This website is published by Dawn of Light Ministry as an act of teaching, not as a service contract.",
  whoPublishes: {
    heading: "Who publishes this site",
    body1:
      "Dawn of Light Ministry — نور کی صبح — associated with Bethlehem Church, Seminary & Educational Mission, serving Karachi and Faisalabad in the Baptist Christian tradition since 1982.",
    body2:
      "Contact: pastornayyer@gmail.com · 03442316634. Registered name, legal status and registered address: [PSEUDO/PLACEHOLDER — TO BE CONFIRMED. No legal or registration status is claimed on this website until the organization supplies it.]",
  },
  useOfContent: {
    heading: "Use of the content",
    body: "Articles, Bible studies, sermons and educational material on this site are published free for personal study, teaching and congregational use. You may print and share them for those purposes provided the ministry is credited and the text is not altered.",
  },
  copyright: {
    heading: "Copyright & permissions",
    body: "Text and photographs on this site belong to Dawn of Light Ministry or to the people who supplied them. Commercial reuse, resale and republication require written permission. Scripture is cited by reference to the commonly used Urdu translation rather than reproduced at length.",
  },
  externalLinks: {
    heading: "External links",
    body: "Recordings are hosted on YouTube and the ministry also publishes on Facebook. Those services have their own terms and privacy practices, which the ministry does not control.",
  },
  accuracy: {
    heading: "Accuracy",
    body: "The ministry keeps service times, events and course information as current as it can. Where a detail is still being confirmed, the page says so rather than guessing. If you find something out of date, please write and tell us.",
  },
  notPastoral: {
    heading: "Not pastoral or emergency care",
    body: "This website does not replace pastoral counsel, medical advice or emergency services. If you are in danger or in crisis, contact local emergency services or a person who can help you in person. A prayer request is read by the pastor, but it is not monitored around the clock.",
  },
  giving: {
    heading: "Giving & donations",
    body: "No payment is taken through this website until the organization's payment arrangements and accounting are approved. Any giving instructions published here will name the ministry's own approved provider or account. Treat any other request for money in the ministry's name as unverified, and confirm it by calling 03442316634.",
  },
  languageVersions: {
    heading: "Language versions",
    body: "The site is published in English and Urdu. Where the two differ, the version approved by the ministry for that content governs. Theological content is not machine-translated; Urdu text is reviewed by a fluent speaker before publication.",
  },
  beforeLaunch: {
    kicker: "Before launch",
    body: "Registered name and legal status, the governing jurisdiction clause, and the final copyright and permissions wording all require the organization's decision and a qualified review.",
  },
} as const;

export type WebsiteNoticeStrings = typeof websiteNotice;
