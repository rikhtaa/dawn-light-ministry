/**
 * Authoritative English Seminary-page copy — transcribed from the approved
 * Claude Design mockup (Dawn of Light - Seminary.dc.html). Two rows in
 * `studyAlongside` (study, article) are NOT duplicated here — the page
 * reuses content/i18n/en/home.ts's `resources.items.study`/`.article`
 * (via getHomeContent()), the same wording Home's own resources section
 * already shows, so the two listings can't drift apart. Only `lecture`
 * (Home has no equivalent resource-teaser row) is new.
 */
export const seminary = {
  metadata: {
    title: "Bethlehem Seminary — Dawn of Light Ministry",
    description:
      "Bethlehem Seminary — daily classes in Scripture, doctrine and pastoral practice, taught in Urdu and English, part of Dawn of Light Ministry in Karachi and Faisalabad, Pakistan.",
  },
  masthead: {
    eyebrow: "Theological education",
    title: "Bethlehem Seminary",
    standfirst:
      "Daily classes in Scripture, doctrine and pastoral practice, taught so that congregations in Pakistan are led by people trained in God's Word.",
    primaryCta: "Enquire about classes",
    secondaryCta: "Ask a question",
    imagePlaceholder: "Seminary classroom photograph",
    imageCaption: "[Caption to be supplied — class, city, year]",
  },
  programme: {
    eyebrow: "The programme",
    heading: "What students study",
    body: "Classes meet daily. Teaching is given in Urdu and English and draws on the commonly used Urdu Bible translation. Students are prepared for preaching, teaching and pastoral work in their own congregations.",
    disclosure:
      "[PSEUDO/PLACEHOLDER — THE FULL COURSE LIST, ENTRY REQUIREMENTS, DURATION AND SCHEDULE MUST BE CONFIRMED BY THE SEMINARY BEFORE PUBLICATION. The outline below is a structure to be filled, not a claim.]",
    subjects: {
      scripture: {
        title: "Scripture",
        description: "Reading and study of the Bible, book by book. [Course description to be supplied.]",
        meta: "[Hours CONFIRM]",
      },
      doctrine: {
        title: "Doctrine",
        description:
          "Christian belief in the Baptist tradition, including the Trinity and baptism. [Course description to be supplied.]",
        meta: "[Hours CONFIRM]",
      },
      pastoralPractice: {
        title: "Pastoral practice",
        description: "Preaching, teaching and the care of a congregation. [Course description to be supplied.]",
        meta: "[Hours CONFIRM]",
      },
      lectures: {
        title: "Lectures",
        description: "Public teaching sessions open to congregations and visitors in both cities.",
        meta: "Open",
      },
    },
  },
  facts: {
    heading: "Programme facts",
    classes: { label: "Classes", value: "Daily" },
    instruction: { label: "Instruction", value: "Urdu & English" },
    bible: { label: "Bible", value: "Urdu translation" },
    tradition: { label: "Tradition", value: "Baptist" },
    cities: { label: "Cities", value: "Karachi, Faisalabad" },
    duration: { label: "Duration", value: "[CONFIRM]" },
    fees: { label: "Fees", value: "[CONFIRM]" },
  },
  enquiry: {
    heading: "Enquire about studying",
    body: "Speak with the seminary about joining a class. Enquiries reach the same address as contact messages.",
    primaryCta: "Send an enquiry",
    secondaryCta: "WhatsApp 03442316634",
  },
  prospectus: {
    heading: "Prospectus",
    body: "A downloadable prospectus will appear here once the seminary supplies one.",
  },
  studyAlongside: {
    eyebrow: "Teaching material",
    heading: "Study alongside the seminary",
    body: "Sermons, Bible studies and articles published by the ministry are open to everyone, whether or not you attend classes.",
    cta: "Go to resources",
    lecture: {
      kicker: "Lecture",
      title: "[Lecture recording — to be supplied]",
      meta: "Video, hosted on YouTube",
    },
  },
} as const;

export type SeminaryStrings = typeof seminary;
