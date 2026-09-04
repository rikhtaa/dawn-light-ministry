/**
 * Authoritative English homepage copy — transcribed from the approved
 * Claude Design mockup (Dawn of Light - Homepage Design.dc.html,
 * "02 — Homepage · desktop · light"), not paraphrased. Every claim traces
 * to verified organization facts (PRD §3/§4/§9); everything the mockup
 * itself marks as unverified stays marked here.
 */
export const home = {
  hero: {
    eyebrow: "A Baptist church, seminary and educational mission · since 1982",
    headline: "Rooted in God’s Word, Equipping the Church, Empowering the Next Generation.",
    urduName: "نور کی صبح",
    standfirst:
      "Our mission is to proclaim the Gospel, equip spiritual leaders, and strengthen the Church. We are committed to empowering children and youth by providing them with opportunities to learn, grow, and build a brighter tomorrow.",
    primaryCta: "Learn about our mission",
    secondaryCta: "Request prayer",
    facts: {
      founded: { value: "1982", label: "Founded" },
      cities: { value: "Two cities", label: "Karachi & Faisalabad" },
      seminary: { value: "Daily", label: "Seminary classes" },
      tradition: { value: "Baptist", label: "Christian tradition" },
    },
    imageCaption: "Palm Sunday 2025",
    imagePlaceholder: "Congregation or seminary class",
  },
  mission: {
    eyebrow: "Our mission",
    quote:
      "Preaching the Word of God to all communities, while equipping Christian youth with the education to build a brighter tomorrow.",
    body: "Empowering children through education to advance our nation. We deliver knowledge to underserved communities, teaching sustainable life skills for long-term transformation instead of temporary relief.",
    // A keyed object, not an array — lib/i18n/types.ts's `Translated<T>`
    // maps `[K in keyof T]`, which for an array type would also try to
    // map built-in methods like `length`/`push`, not just its indices.
    values: {
      faith: "Faith in Christ",
      biblicalTruth: "Biblical truth",
      prayer: "Prayer",
      love: "Love",
      service: "Service",
      integrity: "Integrity",
      christianEducation: "Christian education",
      helpingThoseInNeed: "Helping those in need",
    },
    cta: "Read our mission & vision",
  },
  ministries: {
    eyebrow: "Our work",
    heading: "Six ministries, one mission",
    cta: "All ministries",
    items: {
      church: {
        kicker: "01 · Worship",
        title: "Church",
        description:
          "Services twice weekly, Holy Communion monthly, worship, preaching and teaching in the Baptist tradition.",
        meta: "Service times: Sunday 9 AM · Friday 8 PM",
      },
      seminary: {
        kicker: "02 · Education",
        title: "Bethlehem Theological Seminary",
        description:
          "Daily classes in biblical education, doctrine and pastoral practice, with presentations and articles.",
        meta: "Three classes each week",
      },
      childrensEducation: {
        kicker: "03 · Children",
        title: "Children's education",
        description:
          "Weekly Sunday School, free books, and assistance with school fees for Christian children.",
        meta: "Sunday School weekly",
      },
      publishing: {
        kicker: "04 · Publishing",
        title: "Christian articles",
        description:
          "Writing and distributing biblical educational material to inspire personal Bible study and spiritual growth.",
        meta: "Free books distributed",
      },
      teachingLectures: {
        kicker: "05 · Teaching",
        title: "Lectures",
        description:
          "Public teaching on Scripture and practical Christian living for congregations and students.",
        meta: "Karachi & Faisalabad",
      },
      outreach: {
        kicker: "06 · Outreach",
        title: "Educational outreach",
        description:
          "Bringing knowledge and educational opportunity to communities facing hardship, and teaching sustainable ways to improve life.",
        meta: "Ongoing",
      },
    },
  },
  seminary: {
    eyebrow: "Bethlehem Theological Seminary",
    heading: "Theological Education in the language of the church.",
    body: "At Bethlehem Theological Seminary, students engage in a comprehensive study of Scripture, doctrine, and pastoral practice. Our mission is to equip leaders across Pakistan with a profound understanding of God's Word, providing daily instruction rooted in the widely used Urdu Bible translation.",
    primaryCta: "About the seminary",
    secondaryCta: "Enquire about classes",
    imageCaption: "Seminary classroom",
    facts: {
      classes: { label: "Classes", value: "Daily" },
      instruction: { label: "Instruction", value: "Urdu & English" },
      statementOfFaith: { label: "Statement of faith", value: "Christian Trinity" },
      coursesSchedule: { label: "Courses & schedule", value: "Systematic, book-by-book Bible study; classes held daily." },
    },
  },
  childrenEducation: {
    eyebrow: "Children & education",
    heading: "A child in school today is a nation's teacher tomorrow.",
    body: "Sunday School meets weekly. Beyond it, the ministry provides free books and helps families with school fees so that Christian children in Karachi and Faisalabad can stay in education.",
    list: {
      sundaySchool: { label: "Sunday School", value: "Weekly" },
      freeBooks: { label: "Free books", value: "Provided" },
      feeAssistance: { label: "School-fee assistance", value: "By request" },
    },
    imagePlaceholder: "Children's education — permission required",
  },
  prayerCta: {
    eyebrow: "Prayer",
    heading: "Need prayer?",
    body: "Send your request to the pastor. Prayer requests are private: they are never displayed on this website, never published, and never shared beyond the ministry.",
    note: "You may write in Urdu or English. Name and email are optional — a request may be sent anonymously.",
    formTitle: "Request prayer",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    requestLabel: "Your prayer request",
    requestPlaceholder: "Write here — Urdu or English",
    followUpLabel: "You may follow up with me about this request.",
    consentLabel: "I understand this request is sent privately to the ministry.",
    cta: "Send prayer request",
  },
  events: {
    heading: "Upcoming events",
    cta: "All events",
    emptyHeading: "No events scheduled at the moment",
    emptyState:
      "Services continue twice weekly and Sunday School meets weekly. Contact the ministry for current times.",
    emptyCta: "Contact the ministry",
  },
  resources: {
    heading: "Resources",
    cta: "All resources",
    items: {
      sermon: {
        kicker: "Sermon",
        title: "[Sermon title — to be supplied]",
        meta: "Pastor Nayyer Gull · Urdu · video",
      },
      article: {
        kicker: "Article",
        title: "[Christian article — to be supplied]",
        meta: "Written for congregations and students",
      },
      study: {
        kicker: "Study",
        title: "[Bible study — to be supplied]",
        meta: "Urdu Bible translation · PDF",
      },
      book: {
        kicker: "Book",
        title: "[Free book — to be supplied]",
        meta: "Distributed without charge",
      },
    },
  },
  support: {
    eyebrow: "Support the mission",
    heading: "Support goes to teaching, books and school fees.",
    body: "There are several ways to stand with Dawn of Light: pray for the ministry, share its work, volunteer your time, or give towards the cost of educating a child. Financial giving opens once the organization's payment arrangements are approved.",
    cta: "How you can help",
    pray: { title: "Pray with us", description: "Receive prayer needs from the ministry" },
    give: {
      title: "Give towards education",
      description: "Books and school fees for children",
      badge: "Coming soon",
    },
    speak: {
      title: "Speak with the pastor",
      description: "Phone or WhatsApp +92 344 2316634",
    },
  },
  contact: {
    eyebrow: "Visit or contact us",
    heading: "Two cities, one ministry",
    addressPending: "Service times: Sunday 9 AM · Friday 8 PM",
    serviceTimesPending: "Church services are held twice a week. Holy Communion is observed monthly.",
    reachHeading: "Reach the ministry",
    phoneLabel: "Phone / WhatsApp",
    emailLabel: "Email",
    cities: {
      karachi: "Karachi, Sindh",
      faisalabad: "Faisalabad, Punjab",
    },
  },
} as const;

export type HomeStrings = typeof home;
