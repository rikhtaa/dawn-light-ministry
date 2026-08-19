/**
 * Authoritative English Privacy-page copy (Dawn of Light - Utility
 * Pages.dc.html §01). Transcribed from the connected design's own drafting
 * text, not authored here — CLAUDE.md §11/§32: this is explicitly marked
 * "drafting scaffolding, not legal advice" in the design itself, and every
 * [PSEUDO/PLACEHOLDER — ...] bracket is preserved verbatim, never resolved
 * into an invented fact. The design renders these placeholder paragraphs as
 * plain body text (not PlaceholderTag's short-value warning style) — the
 * bracket text itself is the marker, matching how the design draws it.
 */
export const privacy = {
  metadata: {
    title: "Privacy — Dawn of Light Ministry",
    description: "How Dawn of Light Ministry handles the information you send through this website.",
  },
  breadcrumbLabel: "Privacy",
  masthead: {
    eyebrow: "Legal",
    title: "Privacy",
    standfirst: "How Dawn of Light Ministry handles the information you send through this website.",
    lastUpdated: "Last updated [DATE] · Version [n]",
  },
  toc: {
    heading: "On this page",
    whatWeCollect: "What we collect",
    prayerRequests: "Prayer requests",
    howWeUseIt: "How we use it",
    whoSeesIt: "Who sees it",
    howLongWeKeepIt: "How long we keep it",
    children: "Children",
    cookiesAndAnalytics: "Cookies & analytics",
    contactUs: "Contact us about your data",
  },
  questionsCard: {
    heading: "Questions?",
    body: "Write to pastornayyer@gmail.com or message 03442316634.",
  },
  lead: "The ministry collects as little as possible, uses it only to reply, and never publishes what you send.",
  whatWeCollect: {
    heading: "What we collect",
    body1:
      "When you use the contact form we collect your name, email address, an optional phone or WhatsApp number, the subject you choose and your message. When you use the prayer form we collect your prayer request, and your name and email only if you choose to give them.",
    body2:
      "[PSEUDO/PLACEHOLDER — CONFIRM WHETHER ANY OTHER DATA IS COLLECTED, INCLUDING SERVER LOGS RETAINED BY THE HOSTING PROVIDER.]",
  },
  prayerRequests: {
    heading: "Prayer requests",
    body1:
      "Prayer requests are private. They are sent to the pastor and are not published on this website, not shown to other visitors, not shared with third parties, and not included in any public part of the site.",
    body2:
      "The website does not store the content of a prayer request in your browser and does not include it in analytics or error reports. If you ask for follow-up, the pastor may reply using the contact details you gave.",
  },
  howWeUseIt: {
    heading: "How we use it",
    body: "To reply to you, to pray for what you have asked, and to answer enquiries about the church, the seminary, resources, children's education or supporting the mission. Your details are not used for marketing and are not sold.",
  },
  whoSeesIt: {
    heading: "Who sees it",
    body1:
      "Messages reach the ministry's email at pastornayyer@gmail.com. The technical services that carry a message — the website host and the email provider — process it in transit.",
    body2: "[PSEUDO/PLACEHOLDER — NAME THE HOSTING AND EMAIL PROVIDERS ONCE CONFIRMED, AND STATE WHETHER DATA LEAVES PAKISTAN.]",
  },
  howLongWeKeepIt: {
    heading: "How long we keep it",
    body: "[PSEUDO/PLACEHOLDER — RETENTION PERIOD TO BE SET AND APPROVED BY THE ORGANIZATION. State a period for contact messages and a period for prayer requests, and say how they are deleted.]",
  },
  children: {
    heading: "Children",
    body: "No identifiable photograph of a child is published on this website without written permission from a parent or guardian. The website does not knowingly collect personal information from children. Enquiries about a child's education should come from a parent or guardian.",
  },
  cookiesAndAnalytics: {
    heading: "Cookies & analytics",
    body1: "The website sets no advertising cookies and embeds no social tracking. Video is played from YouTube only after you click, so YouTube sets nothing until then.",
    body2: "[PSEUDO/PLACEHOLDER — IF PRIVACY-CONSCIOUS ANALYTICS IS APPROVED, NAME THE PROVIDER AND WHAT IT MEASURES. Until then this section states that no analytics runs.]",
  },
  contactUs: {
    heading: "Contact us about your data",
    body: "To ask what the ministry holds about you, to correct it, or to have it deleted, write to pastornayyer@gmail.com or message 03442316634. The ministry will respond within [PERIOD — CONFIRM].",
  },
  beforeLaunch: {
    kicker: "Before launch",
    body: "This wording is drafting scaffolding. The organization must approve what is collected, how long it is kept, who receives it, how deletion works and the consent language, and should have the final text reviewed by someone qualified in Pakistani data-protection practice.",
  },
} as const;

export type PrivacyStrings = typeof privacy;
