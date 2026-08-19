/**
 * Authoritative English Contact-page copy (Dawn of Light - Contact.dc.html).
 * Addresses/service times/route notes are the design's own [CONFIRM]
 * placeholders, preserved verbatim (CLAUDE.md §11/§32) — never resolved
 * into invented facts. Social links (Facebook/YouTube) have no organization-
 * supplied URL, so `channels.follow` renders as non-interactive text, not a
 * fabricated href.
 */
export const contact = {
  metadata: {
    title: "Contact — Dawn of Light Ministry",
    description:
      "Reach Dawn of Light Ministry by WhatsApp, email, or the contact form. Serving Karachi and Faisalabad, Pakistan. For prayer, use the private prayer page.",
  },
  breadcrumbLabel: "Contact",
  masthead: {
    eyebrow: "Get in touch",
    title: "Contact the ministry",
    standfirst:
      "Ask about services, the seminary, children's education, or visiting either city. Messages in Urdu are welcome. For prayer, use the prayer page — it is private.",
    standfirstMobile: "Messages in Urdu are welcome.",
  },
  channels: {
    whatsapp: { kicker: "Fastest", heading: "WhatsApp", cta: "Open WhatsApp" },
    email: { kicker: "Email", heading: "Write to the pastor", cta: "Send an email" },
    follow: { kicker: "Follow", heading: "Facebook & YouTube", facebook: "Facebook", youtube: "YouTube" },
  },
  cities: {
    eyebrow: "Where we are",
    heading: "Two cities",
    imagePlaceholder: "church photograph or map",
    note: "Maps appear only once the organization confirms exact addresses. Until then the panels state plainly that the address is to be confirmed rather than showing an approximate pin.",
    karachi: {
      name: "Karachi, Sindh",
      addressLabel: "Address",
      address: "[CONFIRM]",
      servicesLabel: "Services",
      services: "Times [CONFIRM]",
      thirdLabel: "Sunday School",
      thirdValue: "Weekly",
    },
    faisalabad: {
      name: "Faisalabad, Punjab",
      addressLabel: "Address",
      address: "[CONFIRM]",
      servicesLabel: "Services",
      services: "Times [CONFIRM]",
      thirdLabel: "Seminary",
      thirdValue: "Daily classes",
    },
  },
  form: {
    heading: "Send a message",
    subheading: "The ministry replies from",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone / WhatsApp",
    phoneOptional: "(optional)",
    phonePlaceholder: "03xx xxxxxxx",
    subjectLabel: "Subject",
    subjectHelp: "General enquiry · Church & services · Seminary · Children's education · Resources · Supporting the mission",
    subjectOptions: {
      general: "General enquiry",
      church: "Church & services",
      seminary: "Seminary",
      childrensEducation: "Children's education",
      resources: "Resources",
      support: "Supporting the mission",
    },
    messageLabel: "Message",
    messagePlaceholder: "Write here — Urdu or English",
    consentLabel: "I agree that the ministry may use these details to reply to my message.",
    submitLabel: "Send message",
    submitLabelSending: "Sending…",
    footerNote: "Protected against automated submissions. Prayer requests should go through the prayer page, where they stay private.",
    errors: {
      name: "Please enter your name.",
      email: "Please enter your email.",
      message: "Please write a message before sending.",
      consent: "Please confirm before sending.",
    },
  },
  success: {
    heading: "Your message has been sent.",
    body: "The ministry will reply from pastornayyer@gmail.com, usually to the email address you gave.",
    sendAnother: "Send another message",
    returnHome: "Return home",
  },
  failure: {
    heading: "We could not send your message.",
    body: "Your words are still in the form. Please try again, or reach the ministry directly on WhatsApp at",
  },
  gettingThere: {
    eyebrow: "Getting there",
    body: "Directions live on this page rather than a separate one. The quickest route to an exact address is a WhatsApp message — the ministry sends a pin.",
    cta: "Ask for directions on WhatsApp",
    karachi: {
      name: "Karachi, Sindh",
      streetLabel: "Street address",
      street: "[CONFIRM]",
      landmarkLabel: "Nearest landmark",
      landmark: "[CONFIRM]",
      transitLabel: "By bus or rickshaw",
      transit: "[route note — CONFIRM]",
      fourthLabel: "Parking",
      fourthValue: "[CONFIRM]",
    },
    faisalabad: {
      name: "Faisalabad, Punjab",
      streetLabel: "Street address",
      street: "[CONFIRM]",
      landmarkLabel: "Nearest landmark",
      landmark: "[CONFIRM]",
      transitLabel: "By bus or rickshaw",
      transit: "[route note — CONFIRM]",
      fourthLabel: "Seminary entrance",
      fourthValue: "[CONFIRM]",
    },
    note: "A visitor arriving for the first time should be met — say which service you plan to attend and someone will look out for you. Step-free access and facilities at each site are [PSEUDO/PLACEHOLDER — TO BE CONFIRMED].",
  },
  prayerCta: {
    heading: "Would you rather ask for prayer?",
    body: "Prayer requests are private and never published.",
    cta: "Request prayer",
  },
} as const;

export type ContactStrings = typeof contact;
