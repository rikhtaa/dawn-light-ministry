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
    title: "Bethlehem Theological Seminary — Dawn of Light Ministry",
    description:
      "Bethlehem Theological Seminary — Twice-weekly classes on Wednesdays and Thursdays in Scripture, doctrine, and pastoral practice, taught so that congregations in Pakistan are led by individuals trained in God's Word.",
  },
  masthead: {
    eyebrow: "Theological education",
    title: "Bethlehem Theological Seminary",
    standfirst:
      "Twice-weekly classes on Wednesdays and Thursdays in Scripture, doctrine, and pastoral practice, taught so that congregations in Pakistan are led by individuals trained in God's Word.",
    primaryCta: "Inquire About Classes",
    secondaryCta: "Ask a Question",
    imagePlaceholder: "Seminary classroom photograph",
    imageCaption: "[Caption to be supplied — class, city, year]",
  },
  programme: {
    eyebrow: "The programme",
    heading: "Biblical Education Within Reach",
    /**
     * Restructured from the ARTICLES source document (Article 6 —
     * "Bethlehem Theological Seminary"), which is authoritative over the
     * old single flattened `body` string this replaces — see
     * lib/seminary.ts's `programmeBodyBlocks` for the block order/kind
     * this flat dictionary is rendered through (ArticleBody component).
     * Wording is unchanged from the previous `body` string; only the
     * structure (headings vs paragraphs vs list items) is restored.
     */
    blocks: {
      dek: "Biblical Education Within Reach",
      introP1:
        "Bethlehem Theological Seminary was established with a particular purpose: to make biblical and theological education accessible to people who may not be able to attend a traditional seminary, Bible college, church-based institution, or physical classroom.",
      introP2:
        "In Pakistan, many people, particularly those living in villages, remote areas, and communities where access to Christian institutions is limited, may find it difficult to travel to a seminary or formally enroll in a conventional educational institution. For some non-Christian people who are interested in learning about the Bible and Christianity, entering a Christian institution can be even more difficult.",
      introP3:
        "For this reason, we developed a WhatsApp-based seminary model that brings biblical education directly to the student's mobile phone.",
      introP4: "Our vision is simple:",
      introP5:
        "The Seminary should be within reach of the student, not the student within reach of the Seminary.",
      introP6:
        "Because WhatsApp is widely used throughout Pakistan, students from different cities, towns, villages, and communities can participate in biblical education without needing to travel to a physical campus.",
      introP7:
        "Our long-term vision is to develop this model further through a dedicated mobile application so that biblical and theological education can become even more accessible through smartphones and other mobile devices.",

      whoHeading: "Who Do We Train?",
      whoP1: "Our Seminary serves both Christians and non-Christians.",
      whoP2:
        "We provide biblical education to Christians who desire to grow in their knowledge of Scripture and prepare themselves for Christian ministry. We also welcome non-Christian learners who wish to study the Bible, understand its message, and learn about the Christian faith.",
      whoP3:
        "Our students may come from different cities, communities, and backgrounds. The WhatsApp-based model makes it possible for people who might otherwise remain disconnected from formal Christian education to participate in structured biblical study.",
      whoP4:
        "Our particular emphasis is on reaching people who have limited access to traditional Christian educational institutions.",

      howHeading: "How Does the Seminary Work?",
      howP1: "Our primary method of instruction is through WhatsApp-based online learning.",
      howP2: "Students receive structured written lessons through WhatsApp. Each lesson may include:",
      howItem1: "A detailed biblical study article",
      howItem2: "Introduction to relevant biblical persons and subjects",
      howItem3: "Study of the biblical text and its context",
      howItem4: "Written assignments for students",
      howItem5: "Submission and review of assignments",
      howItem6: "Academic records of student participation and progress",
      howP3:
        "Students study the assigned material, prepare their assignments, and return their work for review. Their participation and academic work are recorded as part of their ongoing training.",
      howP4:
        "In this way, the Seminary provides a structured learning process without requiring students to be physically present in a seminary building.",

      courseHeading: "Our Course Structure",
      courseP1: "Our courses follow a systematic, book-by-book and chapter-by-chapter study of the Bible.",
      courseP2:
        "Each biblical book is developed as a structured course or module. The course is divided into individual lessons, and each lesson consists of a written study and an assignment.",
      courseP3:
        "For example, our current study of Genesis is being developed lesson by lesson. The course began with an introduction to the Book of Genesis and has continued through detailed biblical studies and the study of relevant biblical persons.",
      courseP4:
        "At present, 14 lessons/articles have been completed in the Genesis study, covering the material from the introduction to Genesis through the early account of Cain and Abel. Students receive these studies and prepare assignments based upon them.",
      courseP5: "Thus, the basic learning structure is:",
      courseP6:
        "Biblical Book → Chapter/Passage → Study Article → Biblical/Character Study → Student Assignment → Submission & Record",
      courseP7:
        "This approach allows students to study Scripture systematically rather than receiving disconnected individual lessons.",

      pentateuchHeading: "Foundation in the Pentateuch",
      pentateuchP1:
        "The first major section of the curriculum is designed around the five books of Moses, known as the Pentateuch.",
      pentateuchP2: "1. Genesis",
      pentateuchP3: "Central themes: Creation, humanity and sin, covenant, and the patriarchs.",
      pentateuchP4: "2. Exodus",
      pentateuchP5: "Central themes: Redemption, Israel's deliverance, the Law, covenant, and the Tabernacle.",
      pentateuchP6: "3. Leviticus",
      pentateuchP7:
        "Central themes: Sacrifice, holiness, worship, priesthood, and the laws governing Israel's life before God.",
      pentateuchP8: "4. Numbers",
      pentateuchP9:
        "Central themes: Israel's journey through the wilderness, faith, obedience, rebellion, and testing.",
      pentateuchP10: "5. Deuteronomy",
      pentateuchP11:
        "Central themes: Renewal of the covenant, remembrance of God's faithfulness, obedience, and preparation for life in the Promised Land.",
      pentateuchP12: "Together, these five courses form our foundational study:",
      pentateuchP13: "Foundation in the Pentateuch",

      genesisHeading: "Current Course: The Study of Genesis",
      genesisP1: "Our current course is the Study of Genesis.",
      genesisP2:
        "Rather than treating Genesis as a collection of isolated passages, we are studying the book systematically, developing written lessons and related studies of biblical persons and subjects.",
      genesisP3: "The course currently includes 14 completed lessons/articles, with corresponding assignments for students.",
      genesisP4:
        "The study begins with an introduction to Genesis and proceeds through the biblical text in a structured sequence. As the course develops, students are expected not merely to read the material but to demonstrate their understanding through written assignments.",
      genesisP5:
        "Student assignments are submitted back to the Seminary, and records of their work and progress are maintained.",

      purposeHeading: "Our Educational Purpose",
      purposeP1: "The purpose of the Seminary is not simply to distribute information about the Bible.",
      purposeP2: "We seek to help students:",
      purposeItem1: "Understand Scripture systematically",
      purposeItem2: "Develop a stronger foundation in biblical truth",
      purposeItem3: "Study biblical persons and events in their proper context",
      purposeItem4: "Engage seriously with biblical and theological subjects",
      purposeItem5: "Develop the ability to study Scripture independently",
      purposeItem6: "Apply biblical knowledge responsibly in Christian life and ministry",
      purposeItem7: "Prepare for faithful service within the Church and Christian ministry",
      purposeP3:
        "Through this approach, we seek to equip Christians for deeper biblical understanding while also making the message and teaching of Scripture accessible to non-Christian learners who desire to study it.",

      reachHeading: "A Seminary Within Reach",
      reachP1: "Bethlehem Theological Seminary represents our commitment to removing unnecessary barriers to biblical education.",
      reachP2:
        "A student should not have to leave their city, travel to another province, or enter a physical institution simply to begin studying the Bible.",
      reachP3: "Through WhatsApp, the Seminary can reach students where they are.",
      reachP4:
        "Our vision is to place biblical education within reach of every person who desires to study God's Word, whether in a major city, a small town, or a remote community.",
      reachP5:
        "As God provides the necessary resources, we hope to develop this work further through digital platforms and a dedicated mobile application, expanding access to structured biblical and theological education throughout Pakistan.",
      reachP6: "Biblical education should not be limited by geography. Our desire is to bring the Seminary closer to the student.",
    },
    subjects: {
      scripture: {
        title: "Systematic Study of Scripture",
        description: "A structured, book-by-book and chapter-by-chapter study of the Bible. Each course develops written biblical studies, contextual study of biblical persons and subjects, and student assignments designed to promote a systematic understanding of Scripture.",
        meta: "1hr",
      },
      doctrine: {
        title: "Foundations in Biblical and Theological Understanding",
        description:
          "Study designed to help students develop a strong foundation in biblical truth, understand Scripture in its proper context, and engage seriously with biblical and theological subjects. Courses are developed systematically to strengthen students’ understanding of Scripture and equip them for responsible Christian life and ministry.",
      },
      pastoralPractice: {
        title: "Preparation for Christian Life and Ministry",
        description: "Training designed to help students apply biblical knowledge responsibly in Christian life and ministry, develop the ability to study Scripture independently, and prepare for faithful service within the Church and Christian ministry. Instruction is provided through structured written studies, student assignments, submission and review of academic work, and records of student participation and progress.",
      },
      lectures: {
        title: "Public Biblical Teaching",
        description: "Public teaching sessions designed to make biblical and theological education accessible to congregations, visitors, and interested learners. These lectures provide an opportunity for people to engage with biblical subjects without requiring enrollment in a physical seminary.",
        meta: "Open",
      },
    },
  },
  facts: {
    heading: "Programme facts",
    classes: { label: "Classes", value: "Twice a Week" },
    instruction: { label: "Instruction", value: "Urdu & English" },
    bible: { label: "Bible", value: "Urdu translation" },
    tradition: { label: "Tradition", value: "Baptist" },
    cities: { label: "Cities", value: "Karachi, Faisalabad" },
    duration: { label: "Duration", value: "1Yr" },
    fees: { label: "Fees", value: "No Fees" },
  },
  enquiry: {
    heading: "Inquire About Studying",
    body: "Contact the seminary about joining a class. All inquiries are routed to our main contact address.",
    primaryCta: "Send an Inquiry",
    secondaryCta: "WhatsApp +92 3442316634",
  },
  prospectus: {
    heading: "Prospectus",
    body: "The full Bethlehem Theological Seminary prospectus — vision, curriculum, admission and enrollment information.",
    downloadLabel: "Download the prospectus (PDF)",
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
