/**
 * Authoritative English Support-page copy (Dawn of Light - Support.dc.html).
 * State A ("launch — giving pending approval") only — HANDOFF.md §18/PRD
 * forbid activating payments before legal/banking/provider approval, and
 * the task instruction is explicit that State B (the post-approval giving
 * block) must not be the default production state. State B's copy is not
 * transcribed here; nothing in this file renders a giving/payment UI.
 */
export const support = {
  metadata: {
    title: "Support the mission — Dawn of Light Ministry",
    description:
      "Prayer, sharing and volunteering are live ways to support Dawn of Light Ministry today. Online giving opens once the organization's banking and provider arrangements are approved.",
  },
  breadcrumbLabel: "Support",
  masthead: {
    eyebrow: "Stand with the ministry",
    title: "Support goes to teaching, books and school fees.",
    standfirst:
      "There is more than one way to help, and the ministry does not measure support only in money. Prayer and time matter as much as giving.",
    standfirstMobile: "Prayer and time matter as much as money.",
  },
  cards: {
    pray: {
      kicker: "01 · Pray",
      heading: "Pray with us",
      body: "Ask the ministry what to pray for, and send your own requests. This is the support the ministry asks for first.",
      cta: "Request prayer",
    },
    share: {
      kicker: "02 · Share & serve",
      heading: "Share the work, give your time",
      body: "Tell others about the seminary and the children's education work, or speak with the pastor about helping in person.",
      cta: "Speak with the pastor",
      ctaMobile: "WhatsApp",
    },
    give: {
      kicker: "03 · Give",
      badge: "Not yet available",
      heading: "Give towards education",
      body: "Online giving will open once the organization's banking and payment arrangements are approved. Until then, no payment details are published here.",
      bodyMobile: "Online giving opens once the organization's arrangements are approved.",
      cta: "Giving opens after approval",
    },
  },
  whereSupportGoes: {
    eyebrow: "Where support goes",
    heading: "Three costs the ministry carries",
    costs: {
      schoolFees: { label: "School fees", body: "Helping Christian children stay in education" },
      books: {
        label: "Free books",
        body: "Bibles and Christian educational material, given without charge",
      },
      teaching: {
        label: "Teaching",
        body: "Seminary classes, lectures and the writing of articles",
      },
    },
    note: "No cost breakdown, total raised, or number of children helped is published. The ministry has not supplied those figures, and none will be estimated.",
  },
  beforeGivingOpens: {
    heading: "Before giving opens",
    body: "The organization is working through the steps required before any payment method can be published. This page will change only when each is confirmed.",
    checklist: {
      legal: "Legal and organizational status confirmed",
      kyc: "Bank account ownership and KYC completed",
      eligibility: "Eligibility for donation collection verified",
      receipts: "Receipts and accounting process agreed",
      contract: "Payment provider contract signed",
    },
  },
  inTheMeantime: {
    eyebrow: "In the meantime",
    heading: "Speak with Pastor Nayyer Gull directly about supporting the work.",
    whatsappCta: "WhatsApp",
    emailCta: "Send an email",
  },
} as const;

export type SupportStrings = typeof support;
