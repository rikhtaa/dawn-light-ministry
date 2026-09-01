/**
 * Authoritative English Prayer-page copy (Dawn of Light - Prayer.dc.html).
 * The design's own dark-mode/Urdu frames are partial previews (masthead +
 * form panel only) rendered at a shorter width than the full "Desktop ·
 * 1440 · light" frame — standfirst/body copy below is the full-frame
 * text throughout; the shorter dark-frame sentence reads as a space-
 * constrained preview of the same copy, not a distinct dark-mode string.
 */
export const prayer = {
  metadata: {
    title: "Prayer — Dawn of Light Ministry",
    description:
      "Write to the pastor. Prayer requests are read privately by the ministry and prayed for — never published or shared.",
  },
  breadcrumbLabel: "Prayer",
  masthead: {
    eyebrow: "Prayer",
    title: "Need Prayer?",
    standfirst:
      "Write to the pastor. All requests are securely received, read, and prayed for by the ministry. They are kept strictly confidential and are never displayed or shared.",
  },
  howThisWorks: {
    heading: "How this works",
    steps: {
      write: {
        number: "01",
        title: "You Write",
        body: "In Urdu or English. Your name and email are optional — a request may be sent anonymously.",
      },
      receive: {
        number: "02",
        title: "The Ministry Receives It Privately",
        body: "It reaches the pastor directly. It is not published, listed, or passed on to anyone else.",
      },
      pray: {
        number: "03",
        title: "We Pray",
        body: "If you request a follow-up and provide your email, a ministry representative may reply to you.",
      },
    },
  },
  urgentNotice:
    "If your situation is urgent or dangerous, please contact local emergency services. This website is not an emergency service and requests may not be read immediately.",
  speakToSomeone: {
    heading: "Prefer to Speak to Someone?",
    body: "Phone or WhatsApp",
  },
  form: {
    heading: "Request Prayer",
    subheading: "Only the prayer request is required.",
    nameLabel: "Name",
    nameOptional: "(Optional)",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailOptional: "(optional — only if you would like a reply)",
    emailPlaceholder: "you@example.com",
    requestLabel: "Your Prayer Request",
    requestPlaceholder: "Write here — Urdu or English",
    requestErrorEmpty: "Please write your request before sending.",
    followUpLabel: "You may follow up with me about this request.",
    consentLabel: "I understand this request is sent privately to the ministry and will not be published.",
    consentErrorEmpty: "Please confirm you understand before sending.",
    submitLabel: "Send prayer request",
    submitLabelSending: "Sending…",
    sendingNote: "The button is disabled while sending, so a request cannot be submitted twice.",
    footerNote: "Protected against automated submissions. Your request is not stored in your browser and is not included in analytics.",
  },
  success: {
    heading: "Your request has been received.",
    body: "It has been sent privately to the pastor and will not appear anywhere on this website. If you asked for follow-up, someone may reply to the email you gave.",
    sendAnother: "Send another request",
    returnHome: "Return home",
  },
  failure: {
    heading: "We could not send your request.",
    body: "Your words are still in the form. Please try again, or reach the ministry directly on WhatsApp at",
  },
} as const;

export type PrayerStrings = typeof prayer;
