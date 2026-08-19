/**
 * Authoritative English copy for the four remaining ministry child pages —
 * transcribed from the approved Claude Design mockup (Dawn of Light -
 * Ministry Pages.dc.html, sections "01 — Church", "03 — Publishing &
 * Christian Articles", "04 — Education", "05 — Children's Education").
 * Seminary is NOT here: /ministries/seminary already has its own richer,
 * dedicated design (Dawn of Light - Seminary.dc.html) and content file
 * (content/i18n/en/seminary.ts) — Ministry Pages.dc.html's own generic
 * "02 — Seminary" section is explicitly superseded by it and isn't used.
 *
 * Every page follows the same six-slot template (HANDOFF.md §14: masthead,
 * at-a-glance, photograph, what-we-do, one navy detail band, siblings+CTA)
 * but Education's detail band is a stated quote + body paragraph rather
 * than the ruled-row list the other three use — reproduced as drawn, not
 * forced into one shape. Which shape each page's detail band uses is a
 * structural (non-translatable) fact, so it lives in
 * lib/ministries.ts's `ministryDetailBandKind`, not here.
 *
 * Repeated items (facts, activities, related links, detail-band rows) are
 * keyed objects, not arrays — Translated<T> (lib/i18n/types.ts) is a plain
 * mapped type with no special case for array/tuple members, matching every
 * other content file in this project (content/i18n/en/seminary.ts's
 * `subjects`/`facts`, content/i18n/en/about.ts's `ourStory.points`, etc.).
 * Display order for each keyed group is likewise structural, not content —
 * see the `*Keys` arrays in lib/ministries.ts.
 */
export const ministryPages = {
  shared: {
    whatHappensEyebrow: "What happens here",
    activitiesHeading: "Activities",
    relatedHeading: "Related",
    siblingsHeading: "The other ministries",
    viewAllLabel: "All ministries",
  },
  // Shown in every page's "The other ministries" siblings list — the same
  // title/description regardless of which page is doing the listing.
  siblings: {
    church: { title: "Bethlehem Church", description: "Worship, preaching and the Lord's Table, twice weekly" },
    seminary: {
      title: "Bethlehem Seminary",
      description: "Daily classes in Scripture, doctrine and pastoral practice",
    },
    publishing: {
      title: "Publishing & Christian Articles",
      description: "Articles, lectures and free books",
    },
    education: {
      title: "Education & community outreach",
      description: "Taking the light of knowledge to communities facing hardship",
    },
    childrensEducation: {
      title: "Children's Education",
      description: "Sunday School, free books and school-fee assistance",
    },
  },
  church: {
    breadcrumbLabel: "Church",
    eyebrow: "Ministry · Church",
    title: "Bethlehem Church",
    standfirst:
      "A Baptist congregation that gathers twice a week to worship, hear Scripture preached and receive Holy Communion monthly.",
    facts: {
      gathers: { label: "Gathers", value: "Twice weekly" },
      communion: { label: "Communion", value: "Monthly" },
      cities: { label: "Cities", value: "Karachi · Faisalabad" },
      serviceTimes: { label: "Service times", value: "[PLACEHOLDER — CONFIRM]" },
    },
    photoCaption: "congregation at worship",
    body: {
      heading: "Worship, preaching and the Lord's Table",
      intro:
        "The congregation meets twice each week for worship and preaching in the Baptist tradition. Holy Communion is observed monthly. Sunday School meets weekly for children, and is described on the Children's Education page.",
      placeholder: "[PSEUDO/PLACEHOLDER — FURTHER DESCRIPTION OF CHURCH LIFE TO BE SUPPLIED AND APPROVED BY THE ORGANIZATION.]",
      activities: {
        worship: "Worship services, twice weekly",
        preaching: "Preaching and teaching from Scripture",
        communion: "Holy Communion, monthly",
        baptism: "Baptism in the name of the Father, the Son and the Holy Spirit",
        prayer: "Prayer for the congregation and those who write in",
      },
    },
    rail: {
      practicalHeading: "Plan a visit",
      practicalBody:
        "Visitors are welcome at any service. Service times and addresses are being confirmed — call or message to ask.",
      primaryCta: "Directions & contact",
      secondaryCta: "WhatsApp 03442316634",
      related: {
        statementOfFaith: "Statement of faith",
        sermons: "Sermons",
        prayer: "Request prayer",
      },
    },
    detailBand: {
      eyebrow: "Weekly rhythm",
      note: "Exact days and times are confirmed with the ministry before publication.",
      rows: {
        worshipService: { label: "Worship service", value: "[day · time — CONFIRM]" },
        secondService: { label: "Second weekly service", value: "[day · time — CONFIRM]" },
        sundaySchool: { label: "Sunday School", value: "Weekly · [time — CONFIRM]" },
        communion: { label: "Holy Communion", value: "Monthly · [date — CONFIRM]" },
        seminaryClasses: { label: "Seminary classes", value: "Daily · see Seminary" },
      },
    },
    cta: {
      heading: "Come and worship with us",
      body: "Ask about service times in Karachi or Faisalabad, or send a prayer request to the pastor.",
      primaryLabel: "Contact the ministry",
      secondaryLabel: "Request prayer",
    },
  },
  publishing: {
    breadcrumbLabel: "Publishing & Christian Articles",
    eyebrow: "Ministry · Publishing",
    title: "Publishing & Christian Articles",
    standfirst:
      "The ministry writes Christian articles, delivers lectures and gives books away, so that people can read Scripture for themselves.",
    facts: {
      output: { label: "Output", value: "Articles · lectures" },
      books: { label: "Books", value: "Free" },
      languages: { label: "Languages", value: "Urdu · English" },
      titlesInPrint: { label: "Titles in print", value: "[PLACEHOLDER — CONFIRM]" },
    },
    photoCaption: "printed material and books",
    body: {
      heading: "Writing so that people can read for themselves",
      intro:
        "Articles are written for congregations and students, and lectures are delivered in person. Books are distributed without charge. The purpose behind all of it is the same one the ministry states for itself: helping people become familiar with God's Word and read the Bible themselves.",
      placeholder: "[PSEUDO/PLACEHOLDER — PUBLICATION HISTORY, TITLES AND DISTRIBUTION DETAIL TO BE SUPPLIED.]",
      activities: {
        writing: "Christian article writing",
        lectures: "Lectures",
        books: "Free books",
        material: "Christian educational material for congregations and students",
      },
    },
    rail: {
      practicalHeading: "Read the writing",
      practicalBody: "Articles and studies are published in the library, free to read and download.",
      primaryCta: "Browse articles",
      secondaryCta: "Ask for a printed book",
      related: {
        resourcesLibrary: "Resources library",
        bibleStudies: "Bible studies",
        seminary: "Seminary",
      },
    },
    detailBand: {
      eyebrow: "Recently published",
      note: "Pulled from the same content set as Resources, filtered to articles and books.",
      rows: {
        article: { label: "[Article title — to be supplied]", value: "Article · [date]" },
        book: { label: "[Book title — to be supplied]", value: "Book · اردو" },
        bibleStudy: { label: "[Bible study — to be supplied]", value: "Study · PDF" },
      },
    },
    cta: {
      heading: "Ask for printed material",
      body: "Books and study material are given without charge. Tell the ministry what you need and where you are.",
      primaryLabel: "Contact the ministry",
      secondaryLabel: "Browse the library",
    },
  },
  education: {
    breadcrumbLabel: "Education",
    eyebrow: "Ministry · Education",
    title: "Education & community outreach",
    standfirst:
      "Taking the light of knowledge to communities facing hardship, and teaching sustainable ways for people to improve their circumstances.",
    facts: {
      approach: { label: "Approach", value: "Teaching, not handouts" },
      cities: { label: "Cities", value: "Karachi · Faisalabad" },
      programmesAndReach: { label: "Programmes & reach", value: "[PLACEHOLDER — NO NUMBERS PUBLISHED UNTIL CONFIRMED]" },
    },
    photoCaption: "teaching in a community setting",
    body: {
      heading: "Knowledge that outlasts the visit",
      intro:
        "The ministry's vision is to take the light of knowledge to communities facing poverty and to teach sustainable ways for people to improve their livelihoods, rather than relying on short-term assistance alone. Education work sits alongside the church and the seminary rather than apart from them.",
      placeholder:
        "[PSEUDO/PLACEHOLDER — SPECIFIC PROGRAMMES, LOCATIONS AND PARTNERS TO BE SUPPLIED. No outcome claims or figures are published on this page until the organization supplies and approves them.]",
      activities: {
        education: "Christian education for adults and young people",
        teaching: "Teaching practical, sustainable ways to improve circumstances",
        lectures: "Lectures in communities and congregations",
        material: "Distribution of free educational material",
      },
    },
    rail: {
      practicalHeading: "Work with us",
      practicalBody: "If your community or congregation would like the ministry to teach, write to the pastor.",
      primaryCta: "Invite the ministry",
      secondaryCta: "Support this work",
      related: {
        childrensEducation: "Children's education",
        missionAndVision: "Mission & vision",
        supportTheMission: "Support the mission",
      },
    },
    detailBand: {
      eyebrow: "The vision, stated plainly",
      note: "The ministry's own words, edited only for clarity and approved before publication.",
      quote: "Educated children contributing to the advancement of the nation.",
      quoteBody:
        "Teaching a sustainable way forward is treated as part of the ministry's work, not a separate charity programme.",
    },
    cta: {
      heading: "Stand behind the teaching",
      body: "Support goes to teaching, books and school fees. Giving methods are published once the organization's payment arrangements are approved.",
      primaryLabel: "How you can help",
    },
  },
  childrensEducation: {
    breadcrumbLabel: "Children's Education",
    eyebrow: "Ministry · Children",
    title: "Children's Education",
    standfirst: "Sunday School each week, free books, and help with school fees so that a child stays in school.",
    facts: {
      sundaySchool: { label: "Sunday School", value: "Weekly" },
      books: { label: "Books", value: "Free" },
      schoolFees: { label: "School fees", value: "Assistance given" },
      childrenSupported: { label: "Children supported", value: "[PLACEHOLDER — NO FIGURE PUBLISHED UNTIL CONFIRMED]" },
    },
    photoCaption: "classroom or Sunday School",
    photoSecondaryCaption: "no identifiable child published without written permission",
    body: {
      heading: "A child in school today, a teacher tomorrow",
      intro:
        "Sunday School meets weekly. Beyond it, the ministry provides free books and helps families with school fees, because the cost of staying in school is what most often ends a child's education. The stated aim is for Christian children to receive an education and build a brighter future.",
      placeholder:
        "[PSEUDO/PLACEHOLDER — HOW FAMILIES APPLY FOR FEE ASSISTANCE, WHAT IS COVERED AND HOW DECISIONS ARE MADE, TO BE SUPPLIED AND APPROVED.]",
      activities: {
        sundaySchool: "Sunday School, weekly",
        books: "Free books for children and families",
        fees: "Assistance with school fees",
        teaching: "Christian teaching and training for children",
      },
    },
    rail: {
      practicalHeading: "For parents",
      practicalBody: "Ask about Sunday School times, books, or help with fees. Enquiries are handled by the pastor directly.",
      primaryCta: "Contact the ministry",
      secondaryCta: "WhatsApp 03442316634",
      photoPolicyHeading: "Photograph policy",
      photoPolicyBody:
        "No identifiable child appears on this website without written permission from a parent or guardian. Where permission is absent, the page uses a placeholder or shows children from behind.",
      related: {
        educationAndOutreach: "Education & outreach",
        church: "Church",
        supportTheMission: "Support the mission",
      },
    },
    detailBand: {
      eyebrow: "What support pays for",
      note: "Categories only. No amounts are published until the ministry confirms costs and accounting.",
      rows: {
        schoolFees: { label: "School fees for one child, one term", value: "[amount — CONFIRM]" },
        materials: { label: "Books and materials", value: "[amount — CONFIRM]" },
        sundaySchoolMaterial: { label: "Sunday School teaching material", value: "[amount — CONFIRM]" },
      },
    },
    cta: {
      heading: "Help a child stay in school",
      body: "Giving methods appear here once the organization's payment arrangements are approved. Until then, contact the ministry directly.",
      primaryLabel: "How you can help",
      secondaryLabel: "Contact the ministry",
    },
  },
} as const;

export type MinistryPagesStrings = typeof ministryPages;
export type MinistryPageKey = "church" | "publishing" | "education" | "childrensEducation";
export type MinistrySiblingKey = MinistryPageKey | "seminary";
