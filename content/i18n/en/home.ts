/**
 * Authoritative English homepage copy (PRD §7). Every claim here traces
 * back to verified organization facts in PRD §3/§4/§9 — no invented
 * statistics, testimonials, addresses, or schedules.
 */
export const home = {
  hero: {
    // PRD §3: verified associated-identity name.
    eyebrow: "Church, Bethlehem Seminary & Educational Mission",
    // PRD §7.2 has no approved marketing headline yet — using the
    // verified organization name (PRD §3) rather than inventing copy.
    // "Ministry" moved into animatedWords below — it cycles with
    // "Church"/"seminary" rather than sitting fixed in the static headline.
    headline: "Dawn of Light",
    // The three facets of the org's own associated identity (PRD §3:
    // "Bethlehem Church, Seminary & Educational Mission") that the Hero
    // headline cycles through via LayoutTextFlip.
    animatedWords: {
      ministry: "Ministry",
      church: "Church",
      seminary: "Seminary",
    },
    // PRD §7.2 supporting-message brief (Word, education, children,
    // service, hope, Pakistan), paraphrased from already-approved mission
    // language in this same file rather than inventing new claims.
    supportingMessage:
      "Sharing God's Word, strengthening Christian education, and helping children build a brighter future in Pakistan.",
    // PRD §7.2
    primaryCta: "Learn About Our Mission",
    secondaryCta: "Request Prayer",
  },
  mission: {
    eyebrow: "Our Mission",
    heading: "Preaching God's Word, Educating for a Brighter Future",
    body: "Dawn of Light Ministry exists to help people know God's Word and to encourage them to read the Bible for themselves, while addressing the spiritual and educational needs of the communities we serve — especially through the education of children.",
    cta: "Read Our Mission & Vision",
  },
  ministries: {
    eyebrow: "Ministries",
    heading: "How We Serve",
    body: "From weekly worship to daily seminary classes, our ministries carry out one shared calling: to teach God's Word and to educate.",
    cta: "View All Ministries",
    learnMore: "Learn more",
    items: {
      church: {
        title: "Church",
        description:
          "Weekly worship, preaching and teaching, with Holy Communion observed monthly.",
      },
      seminary: {
        title: "Seminary",
        description:
          "Daily seminary classes offering biblical and theological training.",
      },
      christianEducation: {
        title: "Christian Education",
        description:
          "Christian articles and teaching that help believers grow in God's Word.",
      },
      childrensEducation: {
        title: "Children's Education",
        description:
          "Sunday School, free books, and educational-fee assistance for children.",
      },
      publishing: {
        title: "Publishing & Articles",
        description:
          "Christian articles and educational material written and shared with the community.",
      },
      teachingLectures: {
        title: "Teaching & Lectures",
        description:
          "Lectures that bring biblical and educational knowledge to the wider community.",
      },
    },
  },
  education: {
    eyebrow: "Education",
    heading: "Investing in Children's Education",
    body: "Improving children's education is central to our work. Through Sunday School, free books, and help with school fees, we walk alongside children in Karachi and Faisalabad as they build a foundation for the future.",
    cta: "Learn About Children's Education",
  },
  prayerCta: {
    heading: "Need Prayer?",
    body: "We would be glad to pray with you. Every request is kept private.",
    cta: "Request Prayer",
  },
  events: {
    eyebrow: "Events",
    heading: "Upcoming Events",
    emptyState:
      "No upcoming events are scheduled at this time. Please check back soon.",
    cta: "View All Events",
  },
  resources: {
    eyebrow: "Resources",
    heading: "Sermons & Resources",
    emptyState: "Resources are being added. Please check back soon.",
    cta: "View All Resources",
  },
  support: {
    eyebrow: "Support",
    heading: "Support the Mission",
    body: "Your support sustains church ministry, seminary training, and children's education in Karachi and Faisalabad. Giving options will be published once an approved payment provider is confirmed.",
    cta: "Learn How to Support",
  },
  contact: {
    eyebrow: "Visit or Contact Us",
    heading: "Karachi & Faisalabad, Pakistan",
    body: "We would love to hear from you. Reach out by phone, WhatsApp, or email, or visit us in either city.",
    addressPending: "[PSEUDO/PLACEHOLDER — ADDRESS TO BE CONFIRMED]",
    phoneLabel: "Phone / WhatsApp",
    emailLabel: "Email",
    cta: "Contact Us",
    cities: {
      karachi: "Karachi",
      faisalabad: "Faisalabad",
    },
  },
} as const;

export type HomeStrings = typeof home;
