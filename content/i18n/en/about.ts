/**
 * Authoritative English About-page copy. PRD.md §8's own instruction
 * governs two sections here: "Our Story" presents only the supplied
 * history bullet points (education completed in 1997 · difficult
 * circumstances in Pakistan during that period · seminary education ·
 * extensive work with Scripture · ministry among non-Christian
 * communities · continuing ministry activity) without inventing
 * chronology or narrative connective tissue between them, because "the
 * supplied history is personal and partially ambiguous in chronology" and
 * needs organizational review before final wording; "Leadership" states
 * plainly "Do not invent biographies" — both roles ship as placeholders
 * per HANDOFF.md §25 items 5–6.
 */
export const about = {
  metadata: {
    title: "About — Dawn of Light Ministry",
    description:
      "Dawn of Light Ministry — a Baptist church, seminary and educational mission (Bethlehem Church, Seminary & Educational Mission) serving Karachi and Faisalabad, Pakistan since 1982. Our story, mission, statement of faith and leadership.",
  },
  masthead: {
    eyebrow: "About",
    title: "A Baptist church, seminary and educational mission, since 1982.",
    standfirst:
      "Dawn of Light Ministry — Bethlehem Church, Seminary & Educational Mission — serves Karachi and Faisalabad: preaching God's Word among Christians and non-Christians, training students at Bethlehem Seminary, and helping Christian children receive an education.",
  },
  rail: {
    label: "On this page",
    ourStory: "Our story",
    missionVision: "Mission & vision",
    statementOfFaith: "Statement of faith",
    leadership: "Leadership",
    // Shortened labels for the mobile scrolling tab strip (Dawn of Light -
    // About.dc.html "Mobile · 390") — "Our story"/"Leadership" already fit
    // as-is and reuse the fields above; only these two need a shorter form.
    missionVisionMobile: "Mission",
    statementOfFaithMobile: "Faith",
  },
  ourStory: {
    eyebrow: "Our story",
    heading: "Our story",
    standfirst:
      "[PSEUDO/PLACEHOLDER — FINAL WORDING TO BE APPROVED] The account below reflects what has been supplied so far. Because it is personal and partially ambiguous in chronology, the organization will review and approve final public wording before launch.",
    points: {
      education: "Theological education completed in 1997.",
      circumstances: "Ministry began amid difficult circumstances in Pakistan during that period.",
      seminary: "Seminary education and training in Scripture and doctrine.",
      scripture: "Extensive work with Scripture continuing through the ministry's life.",
      outreach: "Ministry among non-Christian communities, alongside the church's own congregation.",
      ongoing: "Ministry activity continuing to the present day, in Karachi and Faisalabad.",
    },
    note: "[CONTENT REQUIRED FROM ORGANIZATION] A fuller, approved account of the ministry's founding and history will replace this list once supplied.",
    imagePlaceholder: "Archive photograph — early ministry or church building",
    imageCaption: "[Caption to be supplied — subject, location, year]",
  },
  missionVision: {
    eyebrow: "Mission & vision",
    heading: "What we're here to do",
    missionLabel: "Mission",
    mission:
      "To preach God's Word among Christians and non-Christians, and to help Christian children receive an education and build a brighter future.",
    visionLabel: "Vision",
    vision: "Educated children contributing to the advancement of the nation.",
    body: "We work to take the light of knowledge into communities facing poverty, and to teach sustainable ways of improving life rather than relying on short-term assistance alone.",
    valuesLabel: "Core values",
  },
  statementOfFaith: {
    eyebrow: "Statement of faith",
    heading: "What we believe",
    trinityLabel: "The Trinity",
    trinity:
      "Dawn of Light Ministry holds to the Christian Trinity — God the Father, Son and Holy Spirit.",
    doctrineLabel: "Baptism",
    doctrine: "Baptism is administered in the name of the Father, Son and Holy Spirit.",
    note: "[PSEUDO/PLACEHOLDER — FINAL THEOLOGICAL WORDING TO BE APPROVED] This statement will be expanded and confirmed by the organization before launch.",
  },
  leadership: {
    eyebrow: "Leadership",
    heading: "Leadership",
    nayyer: {
      name: "Pastor Nayyer Gull",
      role: "[PSEUDO/PLACEHOLDER — FINAL ROLE TO BE CONFIRMED]",
      bio: "[PSEUDO/PLACEHOLDER — FINAL BIOGRAPHY TO BE SUPPLIED]",
      imagePlaceholder: "Pastor Nayyer Gull — portrait pending",
    },
    rahmat: {
      name: "Pastor Rahmat",
      role: "Founder",
      bio: "[PSEUDO/PLACEHOLDER — FINAL BIOGRAPHY TO BE SUPPLIED]",
      imagePlaceholder: "Pastor Rahmat — portrait pending",
    },
  },
  cta: {
    heading: "See the mission in its ministries",
    body: "Church, seminary, publishing, education and children's education — one mission, worked out across six ministries.",
    primaryCta: "Explore our ministries",
    secondaryCta: "Request prayer",
  },
} as const;

export type AboutStrings = typeof about;
