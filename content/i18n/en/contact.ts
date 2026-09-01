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
      address: "Nasry Church, N 164, St 18, 50/A, Korangi",
      servicesLabel: "Services",
      services: "Times: Sunday 9 AM · Friday 8 PM",
      thirdLabel: "Sunday School",
      thirdValue: "Weekly",
    },
    faisalabad: {
      name: "Faisalabad, Punjab",
      addressLabel: "Address",
      address: "Khanuana, Faisalabad",
      servicesLabel: "Services",
      services: "Times: Sunday 9 AM · Friday 8 PM",
      thirdLabel: "Seminary",
      thirdValue: "Twice a Week",
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
    body: "If you are visiting us for the first time, let us know which service you plan to attend, and someone will be ready to welcome you. Information about step-free access and facilities at each location is available upon request. For directions to a specific location, contact us on WhatsApp and we will send you a location pin.",
    cta: "Ask for directions on WhatsApp",
    karachi: {
      name: "Karachi, Sindh",
      streetLabel: "Street address",
      street: "N 164, St 18, 50/A, Korangi",
      landmarkLabel: "Nearest landmark",
      landmark: "Khulfa e Rashdeen Family Park.",
      transitLabel: "By bus or rickshaw",
      transit: "Local route to Korangi 50/A",
      fourthLabel: "Parking",
      fourthValue: "Available nearby",
    },
    faisalabad: {
      name: "Faisalabad, Punjab",
      streetLabel: "Street address",
      street: "Khanuana, Faisalabad",
      landmarkLabel: "Nearest landmark",
      landmark: "-",
      transitLabel: "By bus or rickshaw",
      transit: "Local route to Khanuana",
      fourthLabel: "Seminary entrance",
      fourthValue: "Main gates",
    },
    note: "If you are visiting for the first time, let us know which service you plan to attend, and someone will be ready to welcome you. Information about access and facilities at each location is available upon request.",
  },
  prayerCta: {
    heading: "Would you rather ask for prayer?",
    body: "Prayer requests are private and never published.",
    cta: "Request prayer",
  },
} as const;

export type ContactStrings = typeof contact;
