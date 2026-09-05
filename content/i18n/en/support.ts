/**
 * Authoritative English Support-page copy (Dawn of Light - Support.dc.html).
 * V1 ships manual giving only: `manualGiving` below presents the
 * organization's own Easypaisa wallet and HBL bank account, explicitly
 * authorized for this exact purpose (CLAUDE.md §22, PRD.md §15) — not an
 * approved online payment gateway or registered merchant account. State B
 * as originally drawn (automated checkout, provider handoff, amount
 * entry) is still not built and still requires legal/banking/provider
 * approval first; its copy is not transcribed here.
 */
export const support = {
  metadata: {
    title: "Support the mission — Dawn of Light Ministry",
    description:
      "Prayer, sharing, and giving by Easypaisa or bank transfer are live ways to support Dawn of Light Ministry today. Automated online giving opens once the organization's banking and provider arrangements are approved.",
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
      badge: "Manual payment",
      heading: "Give towards education",
      body: "Send your gift directly by Easypaisa or bank transfer below. Automated online giving will open once the organization's banking and payment-provider arrangements are approved.",
      bodyMobile: "Give by Easypaisa or bank transfer below. Online giving opens after approval.",
      cta: "See payment details",
    },
  },
  /**
   * V1's actual giving mechanism — two manual payment methods, not a
   * gateway. Account facts (holder name, number, bank, IBAN, branch) are
   * verified organizational data, not translatable copy, so they live in
   * `lib/organization.ts`'s `payments` object and are read directly by
   * `components/support/ManualPaymentMethods.tsx`; only the labels/
   * instructions/copy-button text below belong here.
   */
  manualGiving: {
    eyebrow: "Give directly",
    heading: "Support the Ministry",
    intro:
      "These are manual payment methods. Send your gift directly using the details below, then let the ministry know so it can be acknowledged — no amount is fixed and nothing is processed automatically on this site.",
    easypaisa: {
      heading: "Easypaisa",
      accountHolderLabel: "Account holder",
      numberLabel: "Easypaisa number",
      instruction: "Send your support using Easypaisa.",
      qrAlt: "Easypaisa QR code for Nayer Gul's account",
    },
    bankTransfer: {
      heading: "Bank Transfer",
      accountHolderLabel: "Account holder",
      bankLabel: "Bank",
      accountNumberLabel: "Account number",
      ibanLabel: "IBAN",
      branchLabel: "Branch",
      instruction: "Transfer your support directly to the bank account.",
      qrAlt: "HBL bank transfer QR code for Nayyer's account",
    },
    copyLabel: "Copy",
    copiedLabel: "Copied",
    afterGiving:
      "After sending your gift, a WhatsApp message or email to the ministry helps confirm it was received.",
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
    heading: "Before online giving opens",
    body: "The organization is working through the steps required before an automated online payment method can be published. Manual Easypaisa and bank transfer are available above in the meantime.",
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
