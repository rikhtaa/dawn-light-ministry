import type { Locale } from "@/lib/i18n/types";
import type { ArticleBlockDef } from "@/lib/article";

/**
 * Resource records — structured data, not translatable UI copy
 * (HANDOFF.md §16, mirroring lib/sermons.ts / lib/events.ts). `resources`
 * is empty: no resource has been supplied yet. Neither a Resources index
 * page nor real resource data exists in this codebase yet — this file
 * exists so /resources/[slug] (Dawn of Light - Detail Templates.dc.html
 * "04 — Resource detail") has something real to route to, on the same
 * placeholder-composition basis as Sermons/Events.
 */
/**
 * "biography" is a distinct content type from the other five — a
 * leadership biography detail page (lib/resources.ts's `leadershipResources`
 * below), not a downloadable/watchable resource. app/[locale]/resources/
 * [slug]/page.tsx keys its content-type-specific exception (no "Get this
 * resource" action card, no Details/Related rail — see that file's
 * `isBiography` check) off `resource.type === "biography"`, so any future
 * biography-style resource gets the same treatment automatically just by
 * being given this type — no slug-based special-casing.
 */
export type ResourceType = "article" | "study" | "book" | "pdf" | "video" | "biography";

export interface Resource {
  title: string;
  /**
   * Urdu translation of `title`. Optional because most entries below are
   * real external videos/articles whose actual published title is English
   * (or already Urdu, per `language`) and must not be re-translated — set
   * this only where the ministry's own Urdu wording for the title is
   * actually known, e.g. the leadership biographies below. The detail page
   * picks this on the Urdu route via `resourceTitle()`, falling back to
   * `title` when absent — same fallback shape as `bodyBlocksUr`/
   * `bodyBlocksEn`.
   */
  titleUr?: string;
  slug: string;
  type: ResourceType;
  author?: string;
  /** Urdu translation of `author` — same optionality/fallback shape as `titleUr`, via `resourceAuthor()`. */
  authorUr?: string;
  /** ISO 8601 date. Omit when not yet known. */
  date?: string;
  description?: string;
  thumbnail?: string;
  externalUrl?: string;
  downloadUrl?: string;
  scriptureReference?: string;
  language: Locale;
  pages?: number;
  /** 22px serif lede paragraph at the top of the body. */
  standfirst?: string;
  /** "What it covers" ruled list. */
  covers?: string[];
  /**
   * Full structured body (heading/subheading/paragraph/list), restructured
   * from the ARTICLES source document, for a resource whose content is a
   * genuinely bilingual long-form article rather than a single-language
   * upload — e.g. the two leadership biographies linked from the About
   * page's "Read more". Stored as plain literal text per language, the
   * same granularity as every other field on this record (lib/resources.ts
   * is structural/content data, not routed through the Translated<T>
   * i18n system — see CLAUDE.md §8). When present, the detail page renders
   * `bodyBlocksEn`/`bodyBlocksUr` (matched to the current route locale,
   * falling back to whichever language is actually supplied) via
   * ArticleBody through `bodyBlockDefs`, instead of the plain `description`
   * paragraph.
   */
  bodyBlockDefs?: ArticleBlockDef[];
  bodyBlocksEn?: Record<string, string>;
  bodyBlocksUr?: Record<string, string>;
}

/**
 * Article 9 of the ARTICLES source document ("Lectures & Biblical
 * Teaching") — restructured into blocks (see lib/article.ts), same
 * pattern as the leadership biographies below. Declared before
 * `resources` because it's referenced from within that array's literal.
 */
const lecturesBiblicalTeachingBlockDefs: ArticleBlockDef[] = [
  { key: "dek", kind: "subheading" },
  { key: "leadP1", kind: "paragraph" },
  { key: "leadP2", kind: "paragraph" },
  { key: "leadP3", kind: "paragraph" },
  { key: "leadP4", kind: "paragraph" },
  { key: "leadP5", kind: "paragraph" },
  { key: "churchCommunitiesHeading", kind: "heading" },
  { key: "churchCommunitiesP1", kind: "paragraph" },
  { key: "churchCommunitiesP2", kind: "paragraph" },
  { key: "churchCommunitiesP3", kind: "paragraph" },
  { key: "churchCommunitiesP4", kind: "paragraph" },
  {
    key: "churchCommunitiesList",
    kind: "list",
    itemKeys: [
      "churchCommunitiesItem1",
      "churchCommunitiesItem2",
      "churchCommunitiesItem3",
      "churchCommunitiesItem4",
      "churchCommunitiesItem5",
      "churchCommunitiesItem6",
      "churchCommunitiesItem7",
      "churchCommunitiesItem8",
    ],
  },
  { key: "churchCommunitiesP5", kind: "paragraph" },
  { key: "needsHeading", kind: "heading" },
  { key: "needsP1", kind: "paragraph" },
  { key: "needsP2", kind: "paragraph" },
  { key: "needsP3", kind: "paragraph" },
  { key: "needsP4", kind: "paragraph" },
  { key: "needsP5", kind: "paragraph" },
  { key: "discipleshipHeading", kind: "heading" },
  { key: "discipleshipP1", kind: "paragraph" },
  { key: "discipleshipP2", kind: "paragraph" },
  { key: "discipleshipP3", kind: "paragraph" },
  { key: "discipleshipP4", kind: "paragraph" },
  { key: "discipleshipP5", kind: "paragraph" },
  { key: "discipleshipP6", kind: "paragraph" },
  { key: "discipleshipP7", kind: "paragraph" },
  { key: "discipleshipP8", kind: "paragraph" },
  { key: "beyondChurchHeading", kind: "heading" },
  { key: "beyondChurchP1", kind: "paragraph" },
  { key: "beyondChurchP2", kind: "paragraph" },
  { key: "beyondChurchP3", kind: "paragraph" },
  { key: "beyondChurchP4", kind: "paragraph" },
  { key: "beyondChurchP5", kind: "paragraph" },
  { key: "thousandsHeading", kind: "heading" },
  { key: "thousandsP1", kind: "paragraph" },
  { key: "thousandsP2", kind: "paragraph" },
  { key: "thousandsP3", kind: "paragraph" },
  { key: "thousandsP4", kind: "paragraph" },
  { key: "thousandsP5", kind: "paragraph" },
  { key: "dialogueHeading", kind: "heading" },
  { key: "dialogueP1", kind: "paragraph" },
  { key: "dialogueP2", kind: "paragraph" },
  { key: "dialogueP3", kind: "paragraph" },
  { key: "dialogueP4", kind: "paragraph" },
  { key: "dialogueP5", kind: "paragraph" },
  { key: "purposeHeading", kind: "heading" },
  { key: "purposeP1", kind: "paragraph" },
  { key: "purposeP2", kind: "paragraph" },
  { key: "purposeP3", kind: "paragraph" },
  {
    key: "purposeList",
    kind: "list",
    itemKeys: [
      "purposeItem1",
      "purposeItem2",
      "purposeItem3",
      "purposeItem4",
      "purposeItem5",
      "purposeItem6",
      "purposeItem7",
    ],
  },
  { key: "purposeP4", kind: "paragraph" },
  { key: "purposeP5", kind: "paragraph" },
  { key: "journeyHeading", kind: "heading" },
  { key: "journeyP1", kind: "paragraph" },
  { key: "journeyP2", kind: "paragraph" },
  { key: "journeyP3", kind: "paragraph" },
  { key: "journeyP4", kind: "paragraph" },
  { key: "journeyP5", kind: "paragraph" },
  { key: "journeyP6", kind: "paragraph" },
  { key: "journeyP7", kind: "paragraph" },
  { key: "journeyP8", kind: "paragraph" },
  { key: "journeyP9", kind: "paragraph" },
  { key: "journeyP10", kind: "paragraph" },
  { key: "journeyP11", kind: "paragraph" },
];

/**
 * Real external videos, lectures, debates, and articles supplied via the
 * ministry's own Links document — every title and URL transcribed
 * verbatim, nothing invented (CLAUDE.md §32). `language` is inferred only
 * from the supplied title's own script/wording (Urdu script, or an
 * explicit "Urdu Debate" in the title) — not from verifying the actual
 * audio/article language — so treat it as a first-pass tag, not a
 * ministry-confirmed classification.
 */
export const resources: Resource[] = [
  {
    title: "OUR MISSIONARY VISIT OF DIFFERENT CITIES IN PAKISTAN",
    slug: "missionary-visit-different-cities-pakistan",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/TJJSu7W792s?si=4LjGJyc1EXE3UD0K",
  },
  {
    title: "An Exposition on the Establishment and Theological Foundations of the Bethlehem Biblical Seminary",
    slug: "exposition-bethlehem-biblical-seminary",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/FXE23ydBGmk?si=ytgxV289ZV3ncKMl",
  },
  {
    title: "دروازۂ درحیات | New Official Intro 2026",
    slug: "darwaza-dar-e-hayat-intro-2026",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/n1GdYAlfNQk?si=hTmVKdzP-s3sEOBz",
  },
  {
    title: "Duniya Ka Sardar Prince Of The World Pr Nayyer Gull Khan & Adnan Khadim Solangi Urdu Debate Munazra",
    slug: "duniya-ka-sardar-debate-munazra",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/_m4hfYEjKWo?si=3Nj_vCZR9RkRFnW7",
  },
  {
    title: "What Is Logos Ps Nayyer Vs Ps Zahid sep16 2025",
    slug: "what-is-logos-debate",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/2H7WMnYntUg?si=X1aPt6oRgkamxwh1",
  },
  {
    title: "Can people dance during worship according to the Bible?",
    slug: "dance-during-worship-bible",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/PE21HTZCfdQ?si=fXL-TpJ7O810w6RY",
  },
  {
    title: "Fasting in Islam & Christianity",
    slug: "fasting-islam-christianity",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/wikX72SsgQY?si=cXU801YgHa7EdBaK",
  },
  {
    title: "Scripture About Fasting",
    slug: "scripture-about-fasting",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/9jX1YncygNk?si=LadHAr5mTSRBtOnq",
  },
  {
    title: "What Is the Truth of Rosary?",
    slug: "truth-of-rosary",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/UAfdpS4vEWM?si=9cOgvyabHWKh-37R",
  },
  {
    title: "Are Evangelical Events About Jesus Reliable?",
    slug: "evangelical-events-about-jesus-reliable",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/ncfoc5Q92yI?si=o-d5RPAQsjLvFkEA",
  },
  {
    title: "Quran and the Prophet of Islam Confirm the Bible?",
    slug: "quran-prophet-confirm-bible",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/y3sZCa-Scq8?si=TrPlfy8wZtFtOGB0",
  },
  {
    title: "Conclusive Evidence for the Existence of God?",
    slug: "evidence-existence-of-god",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/EQRt-DkLRwQ?si=_UIaL7E3PNDdGcvg",
  },
  {
    title: "The Bible About Dinosaurs",
    slug: "bible-about-dinosaurs",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/zckVTBmyYS8?si=7g8yFPisEcEpX1Xw",
  },
  {
    title: "Science and God",
    slug: "science-and-god",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/rmkl7YpDyvY?si=UoK9ASbdhGAE7Fy0",
  },
  {
    title: "Historical Evidence of the Existence of the Holy Jesus Christ?",
    slug: "historical-evidence-jesus-christ",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/dfkbuVMUFSI?si=UjRak8uf6-TbCdBb",
  },
  {
    title: "Who Is Jesus?",
    slug: "who-is-jesus",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/PYb3SVGA32Q?si=M8oyfJhm4PS5upkr",
  },
  {
    title: "Fake Gospel of Barnabas",
    slug: "fake-gospel-of-barnabas",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/KL70OBWjS_8?si=V9n5sYsH188Xvsus",
  },
  {
    title: "How Can I Understand the Book of Revelation?",
    slug: "understanding-book-of-revelation",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/3yAYfzIJwqs?si=VbxdJA1QpQaYB7oZ",
  },
  {
    title: "What Happened to the Ark of the Covenant?",
    slug: "ark-of-the-covenant",
    type: "video",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/SdrPnu4q0PQ?si=v0jCJrhpcjE9R0yj",
  },
  {
    title: "Has the Bible Been Changed? Episode №1",
    slug: "has-the-bible-been-changed-episode-1",
    type: "article",
    author: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl:
      "https://medium.com/@pastornayyer/%DA%A9%DB%8C%D8%A7-%D8%A8%D8%A7%D8%A6%D8%A8%D9%84-%D8%A8%D8%AF%D9%84-%DA%AF%D8%A6%DB%8C-%DB%81%DB%92-%D9%82%D8%B3%D8%B7-%D9%86%D9%85%D8%A8%D8%B11-5c134fd3cfcf?sharedUserId=pastornayyer",
  },
  {
    title: "Has the Bible Been Changed? Episode №2",
    slug: "has-the-bible-been-changed-episode-2",
    type: "article",
    author: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl:
      "https://medium.com/@pastornayyer/%DA%A9%DB%8C%D8%A7-%D8%A8%D8%A7%D8%A6%D8%A8%D9%84-%D8%A8%D8%AF%D9%84-%DA%AF%D8%A6%DB%8C-%DB%81%DB%92-%D9%82%D8%B3%D8%B7-%D9%86%D9%85%D8%A8%D8%B12-d1955857ef97?sharedUserId=pastornayyer",
  },
  {
    title: "The Holy Gospel in the Qur'an",
    slug: "holy-gospel-in-the-quran",
    type: "article",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://medium.com/@pastornayyer/the-holy-gospel-in-the-quran-0e412460e4f1?sharedUserId=pastornayyer",
  },
  {
    title: "Did Jesus Christ Call a Canaanite Woman from Among the Gentiles a \"Dog\"?",
    slug: "canaanite-woman-dog-question",
    type: "article",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://medium.com/@pastornayyer/article-type-biblical-questions-answers-ee79b6ea303f?sharedUserId=pastornayyer",
  },
  {
    title: "The Historical and Spiritual Reality of the Rosary",
    slug: "historical-spiritual-reality-of-the-rosary",
    type: "article",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl:
      "https://medium.com/@pastornayyer/the-historical-and-spiritual-reality-of-the-rosary-a-research-based-examination-in-the-light-of-1b02596146ca?sharedUserId=pastornayyer",
  },
  {
    title: "The Biblical Truth About Baptism and a Scholarly Examination of Infant Baptism",
    slug: "biblical-truth-about-baptism",
    type: "article",
    author: "Pastor Nayyer Gull",
    language: "en",
    externalUrl:
      "https://medium.com/@pastornayyer/the-biblical-truth-about-baptism-and-a-scholarly-examination-of-infant-baptism-8472e9686682?sharedUserId=pastornayyer",
  },
  {
    title: "Lectures & Biblical Teaching",
    slug: "lectures-and-biblical-teaching",
    type: "article",
    author: "Pastor Nayyer Gull",
    language: "en",
    standfirst: "Teaching God's Word, Equipping Disciples, and Preparing the Next Generation",
    bodyBlockDefs: lecturesBiblicalTeachingBlockDefs,
    bodyBlocksEn: {
      dek: "Teaching God's Word, Equipping Disciples, and Preparing the Next Generation",
      leadP1:
        "My journey in teaching and preaching developed gradually, beginning during my seminary education and becoming a central part of my ministry after completing my graduation in 2005 from LBI.",
      leadP2:
        "During my seminary training, I had opportunities to teach and deliver biblical lectures. After returning home in 2005, I began taking greater responsibility in the local church. In the beginning, my ministry involved shorter messages and sermons in the Church.",
      leadP3:
        "Like many ministers beginning their public ministry, I initially needed time to develop confidence and experience in communicating God's Word. Over the first several months, through regular preaching and teaching, I gradually developed greater confidence and clarity in presenting biblical subjects.",
      leadP4:
        "As opportunities increased, I began sharing God's Word not only in the Church but also in informal gatherings with friends and young people. These opportunities gradually developed into a broader teaching ministry.",
      leadP5:
        "Over time, teaching became one of the central parts of my ministry. I have had the opportunity to speak on a wide range of biblical, theological, doctrinal, and practical subjects, and I continue to teach wherever God provides an opportunity.",
      churchCommunitiesHeading: "From the Local Church to Communities Across Pakistan",
      churchCommunitiesP1: "As the ministry developed, opportunities arose to travel beyond Karachi and serve in different parts of Pakistan.",
      churchCommunitiesP2:
        "I began visiting friends, pastors, and ministry workers in different cities and communities, particularly in Punjab, including Faisalabad, Lahore, and surrounding areas.",
      churchCommunitiesP3:
        "These visits provided opportunities to preach, teach, answer questions, study Scripture with believers, and encourage young people and ministry workers.",
      churchCommunitiesP4:
        "As these opportunities continued, the teaching ministry expanded from ordinary sermons to more detailed forms of biblical instruction, including:",
      churchCommunitiesItem1: "Biblical teaching",
      churchCommunitiesItem2: "Expository preaching",
      churchCommunitiesItem3: "Doctrinal teaching",
      churchCommunitiesItem4: "Theological lectures",
      churchCommunitiesItem5: "Bible studies",
      churchCommunitiesItem6: "Question-and-answer sessions",
      churchCommunitiesItem7: "Teaching on specific biblical and theological subjects",
      churchCommunitiesItem8: "Evangelistic messages",
      churchCommunitiesP5: "The subjects have varied according to the needs of the people and the circumstances in which the teaching was given.",
      needsHeading: "Teaching According to the Needs of the People",
      needsP1:
        "One of the important lessons of ministry has been learning to understand the people being served and communicate God's Word in a way that addresses their actual questions, circumstances, and needs.",
      needsP2:
        "In some communities, I have had the opportunity to teach on subjects such as witchcraft and superstition, where people were living under fear or strong beliefs surrounding such practices.",
      needsP3:
        "In other communities, I encountered groups where there was little or no established Christian ministry and where questions surrounding water baptism were significant. In these places, I taught on the biblical understanding of baptism and, where appropriate, had the opportunity to baptize young people and remain in contact with them as they continued growing in their faith.",
      needsP4: "The goal of such ministry has never been simply to deliver a sermon and leave.",
      needsP5: "The goal is to teach, disciple, encourage, and prepare people to become faithful servants who can carry God's Word to others.",
      discipleshipHeading: "Raising Disciples Through Teaching",
      discipleshipP1: "One of the greatest rewards of teaching is seeing students and young people take what they have learned and use it to serve others.",
      discipleshipP2:
        "Over the years, many people who have listened to these teachings have continued to study Scripture, remain in contact, ask questions, and grow in their understanding of the Christian faith.",
      discipleshipP3: "Some of these students and ministry workers are now serving in different parts of Pakistan.",
      discipleshipP4: "Teaching therefore becomes more than a single lecture.",
      discipleshipP5: "One lesson can become another person's ministry.",
      discipleshipP6: "A message heard in one Church can later be taught by a student in another community.",
      discipleshipP7: "A question answered today can equip someone to answer the same question tomorrow.",
      discipleshipP8:
        "This multiplication of biblical teaching is one of the reasons we place such importance on lectures, preaching, theological education, and discipleship.",
      beyondChurchHeading: "Teaching Beyond the Church Building",
      beyondChurchP1: "The teaching ministry is not limited to a physical Church building.",
      beyondChurchP2:
        "Students and ministry workers from different parts of Pakistan remain connected through telephone communication, written articles, online learning, and other forms of direct contact.",
      beyondChurchP3:
        "When students encounter a difficult biblical or theological question, they may contact me directly, and I continue to provide teaching and discussion on a wide range of subjects.",
      beyondChurchP4: "This has allowed the teaching ministry to extend beyond geographical boundaries.",
      beyondChurchP5: "The same biblical instruction can now reach someone in another city without requiring them to travel.",
      thousandsHeading: "Thousands of Messages, One Purpose",
      thousandsP1: "Over the years, I have had the opportunity to preach and teach on a very wide range of subjects.",
      thousandsP2:
        "Many of these messages were delivered before systematic recording became readily available, so a large part of the earlier ministry was not preserved in audio or video form.",
      thousandsP3: "Nevertheless, the teaching itself continued.",
      thousandsP4:
        "From local Church gatherings to ministry meetings, from villages to larger cities, from biblical studies to theological discussions, the purpose remained consistent:",
      thousandsP5: "to faithfully teach God's Word and equip people to understand, live, and communicate it.",
      dialogueHeading: "Teaching Through Dialogue and Debate",
      dialogueP1: "Another important dimension of this ministry has been engagement with non-Christian communities through dialogue and theological debate.",
      dialogueP2:
        "When conversations with people of other faiths raise serious questions about Christianity, Scripture, Jesus Christ, doctrine, or Christian belief, I seek to respond through respectful discussion, biblical explanation, and reasoned theological engagement.",
      dialogueP3:
        "These encounters have provided opportunities not only to defend biblical teaching but also to explain the Christian faith to people who may have had little previous opportunity to hear it carefully presented.",
      dialogueP4: "The purpose of debate is not simply to win an argument.",
      dialogueP5: "The purpose is to communicate truth clearly, answer genuine questions, and bear faithful witness to Jesus Christ.",
      purposeHeading: "The Purpose of Our Lectures",
      purposeP1: "The purpose behind our lectures and teaching ministry can be summarized in one conviction:",
      purposeP2: "We teach so that others may learn, grow, serve, and teach others.",
      purposeP3: "We desire to see:",
      purposeItem1: "Believers grow deeper in their understanding of Scripture.",
      purposeItem2: "Young people become grounded in biblical truth.",
      purposeItem3: "Students develop the ability to study Scripture seriously.",
      purposeItem4: "Pastors and ministry workers become better equipped for service.",
      purposeItem5: "New disciples grow into mature followers of Christ.",
      purposeItem6: "Students take what they have learned and communicate God's Word to others.",
      purposeItem7: "The Church become stronger through sound biblical teaching.",
      purposeP4: "Ultimately, our goal is not to build a reputation around a speaker.",
      purposeP5: "Our desire is to see the Word of God take root in people's lives and become a source of faithful service to others.",
      journeyHeading: "The Journey Continues",
      journeyP1:
        "From the early messages I preached after graduating in 2005, to teaching in churches, gatherings, villages, cities, seminaries, telephone conversations, and online settings, this ministry of teaching has continued to develop.",
      journeyP2: "The methods may change.",
      journeyP3: "The locations may change.",
      journeyP4: "The audience may change.",
      journeyP5: "But the purpose remains the same:",
      journeyP6: "To proclaim God's Word faithfully, teach biblical truth clearly, equip disciples, prepare servants, and help carry the message of Christ to others.",
      journeyP7: "Every lecture is an opportunity to teach.",
      journeyP8: "Every question is an opportunity to explain.",
      journeyP9: "Every student is a potential servant.",
      journeyP10: "And every servant who faithfully teaches another person becomes part of a continuing chain of biblical ministry.",
      journeyP11: "We teach today so that others may faithfully teach tomorrow.",
    },
    bodyBlocksUr: {
      dek: "خدا کے کلام کی تعلیم، شاگردوں کی تربیت اور اگلی نسل کی تیاری",
      leadP1:
        "میرا تعلیم دینے اور منادی کرنے کا سفر میری سیمنری کی تعلیم کے دوران بتدریج شروع ہوا اور 2005 میں LBI سے گریجویشن مکمل کرنے کے بعد میری خدمت کا ایک مرکزی حصہ بن گیا۔",
      leadP2:
        "سیمنری کی تربیت کے دوران مجھے بائبلی لیکچرز اور تعلیم دینے کے مواقع ملتے رہے۔ 2005 میں واپس گھر آنے کے بعد میں نے مقامی کلیسیا کی زیادہ ذمہ داری سنبھالنا شروع کی۔ ابتدا میں میری خدمت میں کلیسیا کے اندر مختصر پیغامات اور وعظ شامل تھے۔",
      leadP3:
        "بہت سے خادمین کی طرح جو اپنی عوامی خدمت کا آغاز کرتے ہیں، مجھے بھی خدا کے کلام کو لوگوں کے سامنے بیان کرنے میں اعتماد اور تجربہ پیدا کرنے کے لیے کچھ وقت درکار تھا۔ ابتدائی چند ماہ میں مسلسل منادی اور تعلیم کے ذریعے آہستہ آہستہ خداوند نے مجھے بائبلی موضوعات کو زیادہ اعتماد اور وضاحت کے ساتھ پیش کرنے کی صلاحیت عطا کی۔",
      leadP4:
        "جیسے جیسے مواقع بڑھتے گئے، میں نے نہ صرف کلیسیا میں بلکہ دوستوں اور نوجوانوں کے ساتھ غیر رسمی اجتماعات میں بھی خدا کے کلام کو بانٹنا شروع کیا۔ یہ مواقع رفتہ رفتہ ایک وسیع تر تعلیمی خدمت کی شکل اختیار کرتے گئے۔",
      leadP5:
        "وقت کے ساتھ ساتھ تعلیم دینا میری خدمت کے مرکزی حصوں میں شامل ہو گیا۔ مجھے بائبلی، الٰہیاتی، اعتقادی اور عملی موضوعات کی ایک وسیع تعداد پر تعلیم دینے کا موقع ملا ہے، اور جہاں کہیں خداوند موقع فراہم کرتا ہے، میں آج بھی تعلیم دیتا ہوں۔",
      churchCommunitiesHeading: "مقامی کلیسیا سے پاکستان کی مختلف کمیونٹیز تک",
      churchCommunitiesP1: "جیسے جیسے خدمت آگے بڑھی، کراچی سے باہر نکل کر پاکستان کے مختلف علاقوں میں خدمت کرنے کے مواقع پیدا ہوئے۔",
      churchCommunitiesP2:
        "میں نے مختلف شہروں اور کمیونٹیز میں دوستوں، پاسٹرز اور خادمین سے ملاقاتیں شروع کیں، خصوصاً پنجاب میں، جس میں فیصل آباد، لاہور اور گردونواح کے علاقے شامل ہیں۔",
      churchCommunitiesP3: "ان دوروں کے دوران منادی، تعلیم، سوالات کے جوابات، ایمانداروں کے ساتھ کتابِ مقدس کا مطالعہ اور نوجوانوں اور خادمین کی حوصلہ افزائی کے مواقع حاصل ہوئے۔",
      churchCommunitiesP4:
        "جیسے جیسے یہ مواقع بڑھتے گئے، تعلیم دینے کی خدمت عام وعظ سے آگے بڑھ کر بائبلی تعلیم کی زیادہ تفصیلی صورتوں تک پہنچی، جن میں شامل ہیں:",
      churchCommunitiesItem1: "بائبلی تعلیم",
      churchCommunitiesItem2: "تفسیری منادی",
      churchCommunitiesItem3: "اعتقادی تعلیم",
      churchCommunitiesItem4: "الٰہیاتی لیکچرز",
      churchCommunitiesItem5: "بائبل اسٹڈیز",
      churchCommunitiesItem6: "سوال و جواب کے سیشنز",
      churchCommunitiesItem7: "مخصوص بائبلی اور الٰہیاتی موضوعات پر تعلیم",
      churchCommunitiesItem8: "انجیلی پیغامات",
      churchCommunitiesP5: "موضوعات لوگوں کی ضروریات اور اُن حالات کے مطابق مختلف رہے جن میں یہ تعلیم دی گئی۔",
      needsHeading: "لوگوں کی ضروریات کے مطابق تعلیم",
      needsP1:
        "خدمت کے دوران ایک اہم سبق یہ ملا کہ جن لوگوں کی خدمت کی جا رہی ہو، اُنہیں سمجھنا اور خدا کے کلام کو اس انداز میں بیان کرنا ضروری ہے جو اُن کے حقیقی سوالات، حالات اور ضروریات سے متعلق ہو۔",
      needsP2: "کچھ کمیونٹیز میں مجھے جادوگری اور توہم پرستی جیسے موضوعات پر تعلیم دینے کا موقع ملا، جہاں لوگ خوف یا ان اعمال سے متعلق مضبوط عقائد کے زیرِ اثر زندگی گزار رہے تھے۔",
      needsP3:
        "دیگر کمیونٹیز میں مجھے ایسے گروہوں کے درمیان جانے کا موقع ملا جہاں باقاعدہ مسیحی خدمت بہت محدود یا موجود نہیں تھی اور جہاں پانی کے بپتسمہ سے متعلق سوالات اہم تھے۔ ان مقامات پر میں نے بپتسمہ کی بائبلی تفہیم پر تعلیم دی اور، جہاں مناسب موقع ملا، نوجوانوں کو بپتسمہ بھی دیا اور اُن کے ساتھ رابطہ برقرار رکھا تاکہ وہ اپنے ایمان میں ترقی کرتے رہیں۔",
      needsP4: "ایسی خدمت کا مقصد کبھی صرف وعظ سنانا اور وہاں سے چلے آنا نہیں رہا۔",
      needsP5: "مقصد تعلیم دینا، شاگرد بنانا، حوصلہ افزائی کرنا اور لوگوں کو ایسے وفادار خادم بننے کے لیے تیار کرنا ہے جو خدا کے کلام کو دوسروں تک پہنچا سکیں۔",
      discipleshipHeading: "تعلیم کے ذریعے شاگرد تیار کرنا",
      discipleshipP1: "تعلیم دینے کی خدمت کی سب سے بڑی خوشیوں میں سے ایک یہ دیکھنا ہے کہ طلبہ اور نوجوان جو کچھ سیکھتے ہیں، اسے دوسروں کی خدمت کے لیے استعمال کرتے ہیں۔",
      discipleshipP2:
        "گزشتہ برسوں کے دوران بہت سے لوگ جنہوں نے یہ تعلیمات سنیں، کتابِ مقدس کا مطالعہ جاری رکھتے رہے، رابطے میں رہے، سوالات کرتے رہے اور مسیحی ایمان کی اپنی سمجھ میں ترقی کرتے رہے۔",
      discipleshipP3: "ان میں سے بعض طلبہ اور خادمین آج پاکستان کے مختلف علاقوں میں خدمت کر رہے ہیں۔",
      discipleshipP4: "اس لیے تعلیم دینا صرف ایک لیکچر تک محدود نہیں رہتا۔",
      discipleshipP5: "ایک سبق کسی دوسرے شخص کی خدمت بن سکتا ہے۔",
      discipleshipP6: "ایک کلیسیا میں سنا گیا پیغام بعد میں کسی دوسرے علاقے میں ایک طالب علم کے ذریعے سکھایا جا سکتا ہے۔",
      discipleshipP7: "آج دیا گیا ایک جواب کسی شخص کو کل وہی سوال کسی اور کے جواب دینے کے لیے تیار کر سکتا ہے۔",
      discipleshipP8: "بائبلی تعلیم کی یہی افزائش اُن وجوہات میں سے ایک ہے جن کی بنا پر ہم لیکچرز، منادی، الٰہیاتی تعلیم اور شاگردی کو بہت اہمیت دیتے ہیں۔",
      beyondChurchHeading: "کلیسیا کی عمارت سے باہر تعلیم",
      beyondChurchP1: "تعلیم دینے کی یہ خدمت صرف کسی فزیکل کلیسیا کی عمارت تک محدود نہیں ہے۔",
      beyondChurchP2: "پاکستان کے مختلف علاقوں سے طلبہ اور خادمین ٹیلی فون، تحریری مضامین، آن لائن تعلیم اور براہِ راست رابطے کے دیگر ذرائع کے ذریعے جڑے رہتے ہیں۔",
      beyondChurchP3:
        "جب طلبہ کو کسی مشکل بائبلی یا الٰہیاتی سوال کا سامنا ہوتا ہے تو وہ براہِ راست مجھ سے رابطہ کر سکتے ہیں، اور میں مختلف موضوعات پر اُنہیں تعلیم اور گفتگو کے ذریعے رہنمائی فراہم کرتا رہتا ہوں۔",
      beyondChurchP4: "اس طرح تعلیم دینے کی یہ خدمت جغرافیائی حدود سے آگے بڑھنے کے قابل ہوئی ہے۔",
      beyondChurchP5: "اب یہی بائبلی تعلیم کسی دوسرے شہر میں موجود شخص تک بھی پہنچ سکتی ہے، اور اسے لازماً سفر کرنے کی ضرورت نہیں پڑتی۔",
      thousandsHeading: "ہزاروں پیغامات، ایک مقصد",
      thousandsP1: "گزشتہ برسوں میں مجھے بہت وسیع تعداد میں مختلف موضوعات پر منادی اور تعلیم دینے کا موقع ملا ہے۔",
      thousandsP2:
        "ان میں سے بہت سے پیغامات اُس دور میں دیے گئے جب باقاعدہ ریکارڈنگ کے وسائل آسانی سے دستیاب نہیں تھے، اس لیے ابتدائی خدمت کا ایک بڑا حصہ آڈیو یا ویڈیو کی صورت میں محفوظ نہیں ہو سکا۔",
      thousandsP3: "اس کے باوجود تعلیم کا کام جاری رہا۔",
      thousandsP4: "مقامی کلیسیائی اجتماعات سے لے کر خادمی ملاقاتوں تک، دیہات سے بڑے شہروں تک، بائبلی مطالعات سے الٰہیاتی گفتگو تک، مقصد ہمیشہ ایک ہی رہا:",
      thousandsP5: "خدا کے کلام کو وفاداری سے سکھانا اور لوگوں کو اسے سمجھنے، اس کے مطابق زندگی گزارنے اور اسے دوسروں تک پہنچانے کے لیے تیار کرنا۔",
      dialogueHeading: "گفتگو اور مناظرے کے ذریعے تعلیم",
      dialogueP1: "اس خدمت کا ایک اہم پہلو غیرمسیحی کمیونٹیز کے ساتھ گفتگو اور الٰہیاتی مناظرے بھی رہے ہیں۔",
      dialogueP2:
        "جب دوسرے مذاہب سے تعلق رکھنے والے لوگوں کے ساتھ گفتگو میں مسیحیت، کتابِ مقدس، یسوع مسیح، عقائد یا مسیحی ایمان سے متعلق سنجیدہ سوالات سامنے آتے ہیں تو میں احترام پر مبنی گفتگو، بائبلی وضاحت اور مدلل الٰہیاتی انداز کے ذریعے جواب دینے کی کوشش کرتا ہوں۔",
      dialogueP3:
        "ان مواقع نے نہ صرف بائبلی تعلیم کا دفاع کرنے بلکہ اُن لوگوں کے سامنے مسیحی ایمان کو واضح طور پر بیان کرنے کے مواقع بھی فراہم کیے ہیں جنہیں شاید اس سے پہلے مسیحی ایمان کو سنجیدگی سے سمجھنے کا موقع نہ ملا ہو۔",
      dialogueP4: "مناظرے کا مقصد محض بحث جیتنا نہیں ہے۔",
      dialogueP5: "مقصد سچائی کو واضح طور پر بیان کرنا، حقیقی سوالات کا جواب دینا اور یسوع مسیح کے بارے میں وفادار گواہی دینا ہے۔",
      purposeHeading: "ہمارے لیکچرز کا مقصد",
      purposeP1: "ہمارے لیکچرز اور تعلیم دینے کی خدمت کا مقصد ایک بنیادی یقین میں خلاصہ کیا جا سکتا ہے:",
      purposeP2: "ہم اس لیے تعلیم دیتے ہیں تاکہ دوسرے سیکھیں، ترقی کریں، خدمت کریں اور دوسروں کو تعلیم دیں۔",
      purposeP3: "ہم چاہتے ہیں کہ:",
      purposeItem1: "ایماندار کتابِ مقدس کی اپنی سمجھ میں گہرے ہوں۔",
      purposeItem2: "نوجوان بائبلی سچائی میں مضبوط بنیاد حاصل کریں۔",
      purposeItem3: "طلبہ سنجیدگی کے ساتھ کتابِ مقدس کا مطالعہ کرنے کی صلاحیت پیدا کریں۔",
      purposeItem4: "پاسٹرز اور خادمین خدمت کے لیے بہتر طور پر تیار ہوں۔",
      purposeItem5: "نئے شاگرد مسیح کے پختہ پیروکار بنیں۔",
      purposeItem6: "طلبہ جو کچھ سیکھیں اسے دوسروں تک پہنچائیں۔",
      purposeItem7: "کلیسیا مضبوط بائبلی تعلیم کے ذریعے مزید مضبوط ہو۔",
      purposeP4: "بالآخر ہمارا مقصد کسی مقرر کے گرد شہرت پیدا کرنا نہیں ہے۔",
      purposeP5: "ہماری خواہش یہ ہے کہ خدا کا کلام لوگوں کی زندگیوں میں جڑ پکڑے اور دوسروں کے لیے وفادار خدمت کا ذریعہ بن جائے۔",
      journeyHeading: "یہ سفر جاری ہے",
      journeyP1:
        "2005 میں گریجویشن کے بعد دیے جانے والے ابتدائی پیغامات سے لے کر کلیسیاؤں، اجتماعات، دیہات، شہروں، سیمنری، ٹیلی فون پر گفتگو اور آن لائن تعلیم تک، تعلیم دینے کی یہ خدمت مسلسل ترقی کرتی رہی ہے۔",
      journeyP2: "طریقے بدل سکتے ہیں۔",
      journeyP3: "مقامات بدل سکتے ہیں۔",
      journeyP4: "سامعین بدل سکتے ہیں۔",
      journeyP5: "لیکن مقصد وہی رہتا ہے:",
      journeyP6: "خدا کے کلام کی وفاداری سے منادی کرنا، بائبلی سچائی کو واضح طور پر سکھانا، شاگردوں کو تیار کرنا، خادمین کی تربیت کرنا اور مسیح کے پیغام کو دوسروں تک پہنچانے میں مدد دینا۔",
      journeyP7: "ہر لیکچر تعلیم دینے کا ایک موقع ہے۔",
      journeyP8: "ہر سوال وضاحت کرنے کا ایک موقع ہے۔",
      journeyP9: "ہر طالب علم ایک ممکنہ خادم ہے۔",
      journeyP10: "اور ہر وہ خادم جو وفاداری سے کسی دوسرے شخص کو تعلیم دیتا ہے، بائبلی خدمت کے ایک مسلسل سلسلے کا حصہ بن جاتا ہے۔",
      journeyP11: "ہم آج اس لیے تعلیم دیتے ہیں تاکہ دوسرے کل وفاداری سے تعلیم دے سکیں۔",
    },
  },
];

const nayyerGullBlockDefs: ArticleBlockDef[] = [
  { key: "dek", kind: "subheading" },
  { key: "leadP1", kind: "paragraph" },
  { key: "educationHeading", kind: "heading" },
  { key: "educationP1", kind: "paragraph" },
  { key: "educationP2", kind: "paragraph" },
  { key: "educationP3", kind: "paragraph" },
  { key: "educationP4", kind: "paragraph" },
  { key: "educationP5", kind: "paragraph" },
  { key: "restorationHeading", kind: "heading" },
  { key: "restorationP1", kind: "paragraph" },
  { key: "restorationP2", kind: "paragraph" },
  { key: "restorationP3", kind: "paragraph" },
  { key: "restorationP4", kind: "paragraph" },
  { key: "institutionHeading", kind: "heading" },
  { key: "institutionP1", kind: "paragraph" },
  { key: "institutionList", kind: "list", itemKeys: ["institutionItem1", "institutionItem2", "institutionItem3"] },
  { key: "institutionP2", kind: "paragraph" },
  { key: "seminaryHeading", kind: "heading" },
  { key: "seminaryP1", kind: "paragraph" },
  { key: "seminaryP2", kind: "paragraph" },
  { key: "seminaryP3", kind: "paragraph" },
  { key: "seminaryP4", kind: "paragraph" },
  { key: "newMeansHeading", kind: "heading" },
  { key: "newMeansP1", kind: "paragraph" },
  { key: "newMeansP2", kind: "paragraph" },
  { key: "newMeansP3", kind: "paragraph" },
  { key: "newMeansP4", kind: "paragraph" },
  { key: "writtenHeading", kind: "heading" },
  { key: "writtenP1", kind: "paragraph" },
  { key: "writtenP2", kind: "paragraph" },
  { key: "writtenP3", kind: "paragraph" },
  { key: "childrenHeading", kind: "heading" },
  { key: "childrenP1", kind: "paragraph" },
  { key: "childrenP2", kind: "paragraph" },
  { key: "childrenP3", kind: "paragraph" },
  { key: "generationsHeading", kind: "heading" },
  { key: "generationsP1", kind: "paragraph" },
  { key: "generationsP2", kind: "paragraph" },
  { key: "generationsP3", kind: "paragraph" },
  { key: "familyHeading", kind: "heading" },
  { key: "familyP1", kind: "paragraph" },
  { key: "familyP2", kind: "paragraph" },
  { key: "journeyHeading", kind: "heading" },
  { key: "journeyP1", kind: "paragraph" },
  { key: "journeyP2", kind: "paragraph" },
  { key: "journeyP3", kind: "paragraph" },
];

const rahmatMasihBlockDefs: ArticleBlockDef[] = [
  { key: "dek", kind: "subheading" },
  { key: "leadP1", kind: "paragraph" },
  { key: "leadP2", kind: "paragraph" },
  { key: "karachiHeading", kind: "heading" },
  { key: "karachiP1", kind: "paragraph" },
  { key: "karachiP2", kind: "paragraph" },
  { key: "karachiP3", kind: "paragraph" },
  { key: "faithfulnessHeading", kind: "heading" },
  { key: "faithfulnessP1", kind: "paragraph" },
  { key: "faithfulnessP2", kind: "paragraph" },
  { key: "faithfulnessP3", kind: "paragraph" },
  { key: "faithfulnessP4", kind: "paragraph" },
  { key: "movingForwardHeading", kind: "heading" },
  { key: "movingForwardP1", kind: "paragraph" },
  { key: "movingForwardP2", kind: "paragraph" },
  { key: "movingForwardP3", kind: "paragraph" },
  { key: "legacyHeading", kind: "heading" },
  { key: "legacyP1", kind: "paragraph" },
  { key: "legacyP2", kind: "paragraph" },
  { key: "legacyP3", kind: "paragraph" },
  { key: "legacyP4", kind: "paragraph" },
];

/**
 * Real, ministry-supplied content — Articles 3 and 4 of the ARTICLES source
 * document, restructured into blocks (see lib/article.ts). Linked from the
 * About page's leadership cards via "Read more" (the full text is too long
 * for that teaser card — CLAUDE.md's long-article/read-more rule).
 *
 * Deliberately kept OUT of `resources` (the public Resources-library
 * array) — these are About/leadership content that reuses the
 * /resources/[slug] detail *template*, not items that belong in the
 * Resources index's sermon/article/study listing. Keeping them separate
 * means adding them doesn't flip the index page's "empty → show
 * placeholders" fallback (`resources.length > 0 ? resources :
 * placeholderResources`) into showing just these two entries instead.
 */
export const leadershipResources: Resource[] = [
  {
    title: "Pastor Nayyer Gull",
    titleUr: "پاسٹر نیر گل",
    slug: "pastor-nayyer-gull",
    type: "biography",
    author: "Pastor Nayyer Gull",
    authorUr: "پاسٹر نیر گل",
    language: "en",
    standfirst: "A Continuing Journey of Faith, Service, Education, and the Advancement of God's Word",
    bodyBlockDefs: nayyerGullBlockDefs,
    bodyBlocksEn: {
      dek: "A Continuing Journey of Faith, Service, Education, and the Advancement of God's Word",
      leadP1:
        "Pastor Nayyer Gull was born on January 22, 1982. The central focus of his life and ministry has been the Word of God, church ministry, Christian education, the training of ministers, written ministry, and providing educational support for children. His ministry has never been limited merely to caring for a local church; rather, its broader purpose has been to make the Word of God accessible to as many people as possible, prepare Christian workers for ministry, guide and equip young people, and establish a strong educational and spiritual foundation for future generations.",
      educationHeading: "Education and the Responsibility of Ministry",
      educationP1:
        "In 2005, Pastor Nayyer Gull completed his seminary education at Lahore Bible Institute (LBI) and received his graduation certificate from American missionary Jim Pearson. After completing his studies, he returned to Karachi and became more actively involved in the ongoing church ministry alongside his father, Pastor Rahmat Masih.",
      educationP2:
        "During this period, his father's health gradually began to deteriorate, and a significant portion of the practical responsibilities of the church came to rest upon Pastor Nayyer Gull's shoulders. Despite the difficult circumstances in Karachi and the weakened condition of the church, he accepted this responsibility with faith, trusting in the grace of God.",
      educationP3: "This period of his ministry was founded upon prayer, fasting, and the Word of God. The question recorded in Romans 8:35 remained a continual source of encouragement and faith for him:",
      educationP4: "\"Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or peril, or sword?\"",
      educationP5: "With this conviction, he faced the challenges before him and continued working faithfully for the restoration of the church.",
      restorationHeading: "Restoration and Reconstruction of the Church",
      restorationP1:
        "When Pastor Nayyer Gull assumed responsibility for the church, the congregation was facing a number of difficulties. Over time, the church building had also become severely deteriorated, reaching a condition in which it required complete reconstruction.",
      restorationP2:
        "Through prayer, fasting, and sustained effort, he began the work of restoring and rebuilding the church. The old building was completely removed and a new building was constructed, providing a renewed foundation for the church's future ministry.",
      restorationP3:
        "At the same time, he gave special attention to ministry among young people. Various groups were established for young people, involving them in the Word of God and in the life and service of the church. Over time, many young people who had been part of these groups went on to serve the Lord in different places. Many of them later became Pastor Nayyer Gull's students and disciples, and today they are serving the Lord in different parts of Pakistan.",
      restorationP4: "The fruit of this ministry can still be seen today in the lives of those who were shaped through the training, prayer, and labor that began among young people many years ago.",
      institutionHeading: "A Registered Institution and Three Primary Areas of Ministry",
      institutionP1:
        "Under the leadership of Pastor Nayyer Gull, this ministry gradually developed into an organized institutional structure. The institution is registered under Registration No. 183 and operates through three primary areas of ministry:",
      institutionItem1: "Nasri Baptist Church — worship, spiritual care, the proclamation of the Gospel, and local and broader church ministry.",
      institutionItem2: "Bethlehem Theological Seminary — the training and preparation of students and Christian workers through biblical and theological education.",
      institutionItem3: "Let the Children Come — laying a foundation for a better and brighter future for children in need through education and educational assistance.",
      institutionP2: "Together, these three areas represent different expressions of one broader vision: building the church, training Christian workers, and educating future generations.",
      seminaryHeading: "Bethlehem Theological Seminary",
      seminaryP1:
        "Alongside his church ministry, Pastor Nayyer Gull increasingly carried a burden for the biblical and theological training of Christian workers. He prayed for a long period of time concerning the establishment of a seminary and spent approximately one to two years seeking the Lord's guidance regarding this matter.",
      seminaryP2:
        "Following this period of prayer, he formally began the seminary ministry around 2014. During its initial period, a number of students received education and training and went on to serve in different capacities. However, because of the changing and difficult circumstances in Karachi, it was not possible to continue the work for an extended period at that time.",
      seminaryP3:
        "Even after the seminary's formal activities were suspended, Pastor Nayyer Gull maintained contact with his former students and continued to provide them with regular teaching and guidance from the Word of God. Later, a new team was formed and efforts were made to reorganize the seminary ministry.",
      seminaryP4:
        "Today, Bethlehem Theological Seminary serves as a place of education and training not only for Christian students but also for individuals who do not come from a Christian background. In this way, the work of extending biblical education and making the Word of God accessible to wider communities continues.",
      newMeansHeading: "Taking the Word of God to People Through New Means",
      newMeansP1: "Around 2021, Pastor Nayyer Gull increasingly recognized the need to use new means of reaching people with the Word of God, particularly those who were difficult to reach through traditional methods.",
      newMeansP2: "Many people living in rural and remote areas of Pakistan have limited access to the internet and other modern resources. For communities with limited resources in particular, access to education and spiritual resources remains a significant challenge.",
      newMeansP3:
        "In response to this need, an educational and evangelistic platform was established through WhatsApp, making it possible to bring the Word of God and Christian teaching to people more easily. An important purpose of this effort was also to reach people who do not come from a Christian background with the message of the Word of God.",
      newMeansP4: "This ministry continues with the conviction that the Word of God is not restricted by geographical, economic, or technological barriers, and that available means should be used wherever possible to make it accessible to every person.",
      writtenHeading: "Written and Academic Ministry",
      writtenP1:
        "Pastor Nayyer Gull's formal written ministry began on August 17, 2016, through Facebook. Before this, he had already been engaged in discussions with Christians and non-Christians concerning biblical questions and the Word of God, but from this date onward, he began developing his written ministry in a more organized manner.",
      writtenP2: "Initially, the work began with short writings. Over time, this written journey expanded into longer writings, biblical and theological discussions, debates, books, and detailed articles.",
      writtenP3:
        "This written ministry became an important part of his broader Christian ministry, through which biblical teaching, Christian doctrine, and discussions concerning various religious and intellectual questions were made accessible to a wider readership.",
      childrenHeading: "Children's Education and Laying a Foundation for a Brighter Future",
      childrenP1: "An important aspect of Pastor Nayyer Gull's ministry is children's education. He believes that a strong foundation for the future of the Christian community cannot be established merely through temporary assistance, but through education.",
      childrenP2:
        "With this vision, practical efforts were initiated through Let the Children Come to support the education of children in need. Assistance has been provided to help numerous children attend school and continue their education. This ministry includes providing books and school uniforms for children and offering educational assistance to certain families with their educational expenses.",
      childrenP3: "This work continues with the conviction that education is a lasting means of helping children move toward a better future and giving them the opportunity to develop and use their abilities.",
      generationsHeading: "A Ministry Reaching Across Generations",
      generationsP1: "As a result of Pastor Nayyer Gull's church, educational, written, and training ministries, the number of students and Christian workers associated with his ministry has continued to grow. Many of his students are now serving the Lord in different parts of Pakistan.",
      generationsP2:
        "The ministry of Nasri Baptist Church has also, over time, become known beyond its immediate local setting and has gained recognition in different parts of Pakistan. Pastor Nayyer Gull is also known in educational and teaching circles as Professor Nayyer Gull, particularly among students and Christian workers who have received Christian education and training from him.",
      generationsP3:
        "Behind all these areas of ministry is one central purpose: to understand the Word of God faithfully, teach it faithfully, make it accessible to as many people as possible, and contribute to raising a generation that can serve the Lord with faith, knowledge, and character.",
      familyHeading: "Family and Personal Life",
      familyP1: "Alongside his ministry, Pastor Nayyer Gull also places great importance on his responsibilities toward his family. His wife, Kausar, has been a faithful companion in his life and ministry, standing with him through difficult circumstances and various trials.",
      familyP2: "They have three children, two sons and one daughter. They continue to pursue their education, work diligently, and prepare for their future, which is a source of gratitude and thanksgiving to God for the family.",
      journeyHeading: "The Journey of Ministry Continues",
      journeyP1:
        "The life and ministry of Pastor Nayyer Gull reflect a journey that began with a local church responsibility and has grown to encompass church development, youth training, theological education, written ministry, the use of digital means, and educational support for children.",
      journeyP2: "The Word of God remains at the center of his ministry. Through prayer, education, and practical service, he continues to labor to advance this work, trusting that God uses His Word and His servants according to His will and for His glory.",
      journeyP3: "This journey is not one that ends at any particular stage; rather, by the grace of God, it is an ongoing ministry—a ministry committed to strengthening the foundations of faith, education, and the Word of God for generations to come.",
    },
    bodyBlocksUr: {
      dek: "ایمان، خدمت، تعلیم اور خدا کے کلام کے فروغ کا ایک مسلسل سفر",
      leadP1:
        "پاسٹر نیر گل 22 جنوری 1982 کو پیدا ہوئے۔ ان کی زندگی اور خدمت کا بنیادی مرکز خدا کا کلام، کلیسیائی خدمت، مسیحی تعلیم، خادمین کی تربیت، تحریری خدمت اور بچوں کی تعلیم مدد فراہم کرنا رہا ہے۔ ان کی خدمت کا مقصد محض ایک مقامی کلیسیا کی دیکھ بھال تک محدود نہیں رہا، بلکہ خدا کے کلام کو زیادہ سے زیادہ لوگوں تک پہنچانا، خادمین کو تیار کرنا، نوجوانوں کی رہنمائی کرنا اور آنے والی نسلوں کے لیے ایک مضبوط تعلیمی و روحانی بنیاد قائم کرنا رہا ہے۔",
      educationHeading: "تعلیم اور خدمت کی ذمہ داری",
      educationP1: "پاسٹر نیر گل نے 2005 میں لاہور بائبل انسٹی ٹیوٹ (LBI) سے اپنی سیمنری کی تعلیم مکمل کی اور اپنی گریجویشن کی سند امریکی مشنری جم پرسن سے حاصل کی۔ اپنی تعلیم مکمل کرنے کے بعد وہ کراچی واپس آئے اور اپنے والد، پاسٹر رحمت مسیح، کے ساتھ جاری کلیسیائی خدمت میں زیادہ فعال کردار ادا کیا۔",
      educationP2: "اسی دوران ان کے والد کی صحت بتدریج کمزور ہونے لگی اور کلیسیا کی عملی ذمہ داریاں بڑی حد تک پاسٹر نیر گل کے کندھوں پر آ گئیں۔ کراچی کے مشکل حالات اور کلیسیا کی کمزور ہوتی ہوئی حالت کے باوجود انہوں نے اس ذمہ داری کو خدا کے فضل پر بھروسا کرتے ہوئے قبول کیا۔",
      educationP3: "ان کی خدمت کے اس دور کی بنیاد دعا، روزہ اور خدا کے کلام پر قائم رہی۔ رومیوں 8: 35 کا یہ سوال ان کے لیے مسلسل حوصلے اور ایمان کا باعث رہا:",
      educationP4: "\"ہمیں مسیح کی محبت سے کون جدا کرے گا؟ کیا مصیبت یا تنگی یا ایذا یا کال یا ننگ یا خطرہ یا تلوار؟\"",
      educationP5: "اسی یقین کے ساتھ انہوں نے مشکلات کا سامنا کیا اور کلیسیا کی بحالی کے لیے مسلسل محنت کی۔",
      restorationHeading: "کلیسیا کی بحالی اور تعمیرِ نو",
      restorationP1: "جب پاسٹر نیر گل نے کلیسیا کی ذمہ داری سنبھالی تو کلیسیا مختلف مشکلات سے گزر رہی تھی۔ وقت کے ساتھ کلیسیا کی عمارت بھی انتہائی خستہ حال ہو چکی تھی اور اس کی حالت ایسی تھی کہ اسے ازسرِنو تعمیر کرنے کی ضرورت تھی۔",
      restorationP2: "دعا، روزے اور مسلسل محنت کے ساتھ انہوں نے کلیسیا کی بحالی اور تعمیرِ نو کا کام شروع کیا۔ پرانی عمارت کو مکمل طور پر ختم کرکے نئی عمارت تعمیر کی گئی، جس نے کلیسیا کی آئندہ خدمت کے لیے ایک نئی بنیاد فراہم کی۔",
      restorationP3:
        "اس کے ساتھ ساتھ انہوں نے نوجوانوں کی خدمت پر خصوصی توجہ دی۔ نوجوانوں کے لیے مختلف گروپس تشکیل دیے گئے اور انہیں خدا کے کلام اور کلیسیائی خدمت میں شامل کیا گیا۔ وقت کے ساتھ ان گروپس سے وابستہ بہت سے نوجوان آگے بڑھ کر مختلف مقامات پر خداوند کی خدمت کرنے لگے۔ ان میں سے بہت سے افراد بعد میں پاسٹر نیر گل کے شاگرد اور طالب علم بھی بنے اور آج پاکستان کے مختلف علاقوں میں خداوند کی خدمت انجام دے رہے ہیں۔",
      restorationP4: "یہ خدمت آج بھی اس تربیت، دعا اور محنت کے ثمرات میں دکھائی دیتی ہے جو برسوں پہلے نوجوانوں کے درمیان شروع کی گئی تھی۔",
      institutionHeading: "ایک رجسٹرڈ ادارہ اور تین بنیادی شعبہ ہائے خدمت",
      institutionP1: "پاسٹر نیر گل کی زیرِ قیادت یہ خدمت وقت کے ساتھ ایک منظم ادارہ جاتی شکل اختیار کرتی گئی۔ یہ ادارہ رجسٹریشن نمبر 183 کے تحت رجسٹرڈ ہے اور اس کے تحت خدمت کے تین بنیادی شعبے قائم ہیں:",
      institutionItem1: "Nasri Baptist Church — کلیسیائی عبادت، روحانی نگہداشت، انجیل کی منادی اور مقامی و وسیع تر کلیسیائی خدمت۔",
      institutionItem2: "Bethlehem Theological Seminary — بائبلی اور الٰہیاتی تعلیم کے ذریعے طلبہ اور خادمین کی تربیت اور تیاری۔",
      institutionItem3: "Let the Children Come — بچوں کی تعلیم اور تعلیمی معاونت کے ذریعے ضرورت مند بچوں کے لیے بہتر اور روشن مستقبل کی بنیاد رکھنا۔",
      institutionP2: "یہ تینوں شعبے دراصل ایک ہی وسیع تر وژن کے مختلف پہلو ہیں: کلیسیا کی تعمیر، خادمین کی تربیت اور آنے والی نسلوں کی تعلیم۔",
      seminaryHeading: "بیت الحم تھیالوجیکل سیمنری",
      seminaryP1: "کلیسیائی خدمت کے ساتھ ساتھ پاسٹر نیر گل کے دل میں مسیحی خادمین کی بائبلی اور الٰہیاتی تربیت کا بوجھ بھی بڑھتا گیا۔ انہوں نے سیمنری کے آغاز کے لیے طویل عرصے تک دعا کی اور تقریباً ایک سے دو سال تک اس معاملے میں خداوند کی رہنمائی کے طالب رہے۔",
      seminaryP2: "دعا کے بعد انہوں نے تقریباً 2014 میں سیمنری کی باقاعدہ خدمت کا آغاز کیا۔ اس ابتدائی دور میں متعدد طلبہ نے تعلیم حاصل کی اور تربیت حاصل کرکے آگے بڑھے، تاہم کراچی کے بدلتے ہوئے اور مشکل حالات کے باعث اس کام کو اس وقت طویل عرصے تک جاری رکھنا ممکن نہ رہا۔",
      seminaryP3: "سیمنری کی باقاعدہ سرگرمیاں رکنے کے باوجود پاسٹر نیر گل نے اپنے سابق طلبہ سے رابطہ برقرار رکھا اور انہیں باقاعدگی سے خدا کے کلام کی تعلیم اور رہنمائی فراہم کرتے رہے۔ بعد ازاں ایک نئی ٹیم تشکیل دی گئی اور سیمنری کی خدمت کو دوبارہ منظم کیا گیا۔",
      seminaryP4: "آج Bethlehem Theological Seminary مسیحی طلبہ کے ساتھ ساتھ ایسے افراد کے لیے بھی تعلیم و تربیت کا ذریعہ ہے جو مسیحی پس منظر سے تعلق نہیں رکھتے۔ اس طرح بائبلی تعلیم اور خدا کے کلام کی رسائی کو وسیع تر حلقوں تک پہنچانے کی کوشش جاری ہے۔",
      newMeansHeading: "خدا کے کلام کو نئی راہوں سے لوگوں تک پہنچانا",
      newMeansP1: "2021 کے قریب پاسٹر نیر گل نے خدا کے کلام کو ایسے لوگوں تک پہنچانے کے لیے نئے ذرائع اختیار کرنے کی ضرورت کو زیادہ شدت سے محسوس کیا جن تک روایتی ذرائع سے پہنچنا مشکل تھا۔",
      newMeansP2: "پاکستان کے دیہی اور دور دراز علاقوں میں بہت سے ایسے لوگ رہتے ہیں جہاں انٹرنیٹ اور دیگر جدید ذرائع کی سہولیات محدود ہیں۔ خاص طور پر کم وسائل رکھنے والی آبادیوں کے لیے تعلیم اور روحانی وسائل تک رسائی ایک اہم چیلنج ہے۔",
      newMeansP3: "اسی ضرورت کے پیش نظر واٹس ایپ کے ذریعے ایک ایسا تعلیمی اور تبلیغی پلیٹ فارم قائم کیا گیا جس کے ذریعے خدا کے کلام اور مسیحی تعلیم کو لوگوں تک نسبتاً آسانی سے پہنچایا جا سکے۔ اس کوشش کا ایک اہم مقصد ایسے افراد تک بھی خدا کے کلام کا پیغام پہنچانا تھا جو مسیحی پس منظر سے تعلق نہیں رکھتے۔",
      newMeansP4: "یہ خدمت اس یقین کے ساتھ جاری ہے کہ خدا کا کلام جغرافیائی، معاشی اور تکنیکی رکاوٹوں کا پابند نہیں، بلکہ جہاں تک ممکن ہو اسے ہر انسان تک پہنچانے کے لیے دستیاب ذرائع کو استعمال کیا جانا چاہیے۔",
      writtenHeading: "تحریری اور علمی خدمت",
      writtenP1: "پاسٹر نیر گل کی تحریری خدمت کا باقاعدہ آغاز 17 اگست 2016 کو فیس بک کے ذریعے ہوا۔ اس سے پہلے بھی وہ مسیحیوں اور غیر مسیحیوں کے ساتھ بائبلی سوالات اور خدا کے کلام سے متعلق گفتگو کرتے رہے تھے، لیکن اس تاریخ سے انہوں نے اپنی تحریری خدمت کو ایک منظم انداز میں آگے بڑھانا شروع کیا۔",
      writtenP2: "ابتدائی طور پر یہ کام مختصر تحریروں سے شروع ہوا۔ وقت کے ساتھ یہ تحریری سفر وسیع ہوتا گیا اور بڑی تحریروں، بائبلی و الٰہیاتی مباحث، مناظرات، کتابوں اور تفصیلی مضامین تک پہنچا۔",
      writtenP3: "یہ تحریری خدمت ان کی مجموعی مسیحی خدمت کا ایک اہم حصہ بن گئی، جس کے ذریعے بائبلی تعلیم، مسیحی عقیدہ اور مختلف مذہبی و فکری سوالات پر گفتگو کو وسیع تر قارئین تک پہنچایا گیا۔",
      childrenHeading: "بچوں کی تعلیم اور روشن مستقبل کی بنیاد",
      childrenP1: "پاسٹر نیر گل کی خدمت کا ایک اہم پہلو بچوں کی تعلیم بھی ہے۔ ان کے نزدیک مسیحی برادری کے مستقبل کی مضبوط بنیاد محض وقتی امداد سے نہیں بلکہ تعلیم کے ذریعے قائم کی جا سکتی ہے۔",
      childrenP2: "اسی وژن کے تحت Let the Children Come کے ذریعے ضرورت مند بچوں کی تعلیم کے لیے عملی اقدامات شروع کیے گئے۔ متعدد بچوں کو اسکول تک پہنچانے اور ان کی تعلیم جاری رکھنے میں مدد فراہم کی گئی۔ اس خدمت میں بچوں کے لیے کتابیں اور یونیفارم فراہم کرنا اور بعض خاندانوں کو تعلیمی اخراجات میں معاونت دینا شامل ہے۔",
      childrenP3: "یہ کام اس یقین کے ساتھ جاری ہے کہ تعلیم ایک ایسا مستقل ذریعہ ہے جو بچوں کو بہتر مستقبل کی طرف لے جا سکتا ہے اور انہیں اپنی صلاحیتوں کو بروئے کار لانے کا موقع فراہم کرتا ہے۔",
      generationsHeading: "ایک خدمت جو نسلوں تک پہنچ رہی ہے",
      generationsP1: "پاسٹر نیر گل کی کلیسیائی، تعلیمی، تحریری اور تربیتی خدمات کے نتیجے میں ان کے ساتھ وابستہ طلبہ اور خادمین کی تعداد میں اضافہ ہوا۔ ان کے بہت سے طلبہ آج پاکستان کے مختلف علاقوں میں خداوند کی خدمت انجام دے رہے ہیں۔",
      generationsP2: "ناصر بپٹسٹ چرچ کی خدمت بھی وقت کے ساتھ اپنے مقامی دائرے سے آگے بڑھ کر پاکستان کے مختلف علاقوں میں پہچانی جانے لگی۔ اسی طرح پاسٹر نیر گل کو کلیسیائی خدمت کے ساتھ ساتھ Professor Nayyer Gull کے نام سے بھی تعلیمی اور تدریسی حوالے سے جانا جاتا ہے، خصوصاً ان طلبہ اور خادمین کے حلقوں میں جو ان سے مسیحی تعلیم حاصل کر چکے ہیں۔",
      generationsP3: "ان تمام خدمات کے پیچھے بنیادی مقصد ایک ہی ہے: خدا کے کلام کو وفاداری کے ساتھ سمجھنا، سکھانا اور زیادہ سے زیادہ لوگوں تک پہنچانا، اور ایسی نسل کی تیاری میں حصہ لینا جو ایمان، علم اور کردار کے ساتھ خداوند کی خدمت کر سکے۔",
      familyHeading: "خاندان اور ذاتی زندگی",
      familyP1: "پاسٹر نیر گل اپنی خدمت کے ساتھ اپنی خاندانی ذمہ داریوں کو بھی اہمیت دیتے ہیں۔ ان کی اہلیہ، کوثر، ان کی زندگی اور خدمت میں ایک وفادار ساتھی رہی ہیں اور مشکل حالات اور مختلف آزمائشوں میں ان کے ساتھ کھڑی رہی ہیں۔",
      familyP2: "ان کے تین بچے ہیں، دو بیٹے اور ایک بیٹی۔ وہ اپنی تعلیم، محنت اور مستقبل کی تیاری میں آگے بڑھ رہے ہیں اور خاندان کے لیے یہ خدا کے فضل اور شکرگزاری کا باعث ہے۔",
      journeyHeading: "خدمت کا سفر جاری ہے",
      journeyP1: "پاسٹر نیر گل کی زندگی اور خدمت ایک ایسے سفر کی عکاسی کرتی ہے جو ایک مقامی کلیسیائی ذمہ داری سے شروع ہو کر کلیسیائی تعمیر، نوجوانوں کی تربیت، الٰہیاتی تعلیم، تحریری خدمت، ڈیجیٹل ذرائع کے استعمال اور بچوں کی تعلیمی معاونت تک پھیل چکا ہے۔",
      journeyP2: "ان کی خدمت کا مرکز آج بھی خدا کا کلام ہے۔ دعا، تعلیم اور عملی خدمت کے ذریعے وہ اس کام کو آگے بڑھانے کے لیے کوشاں ہیں، اس یقین کے ساتھ کہ خدا اپنے کلام اور اپنے خادموں کو اپنی مرضی اور اپنے جلال کے لیے استعمال کرتا ہے۔",
      journeyP3: "یہ سفر کسی ایک مرحلے پر ختم ہونے والا سفر نہیں، بلکہ خدا کے فضل سے مسلسل جاری رہنے والی خدمت ہے—ایک ایسی خدمت جس کا مقصد آنے والی نسلوں کے لیے ایمان، تعلیم اور خدا کے کلام کی بنیاد کو مزید مضبوط کرنا ہے۔",
    },
  },
  {
    title: "Pastor Rahmat Masih",
    titleUr: "پاسٹر رحمت مسیح",
    slug: "pastor-rahmat-masih",
    type: "biography",
    author: "Dawn of Light Ministry",
    authorUr: "ڈان آف لائٹ منسٹری",
    language: "en",
    standfirst: "A Life Marked by Faithful Service and the Proclamation of the Gospel",
    bodyBlockDefs: rahmatMasihBlockDefs,
    bodyBlocksEn: {
      dek: "A Life Marked by Faithful Service and the Proclamation of the Gospel",
      leadP1:
        "Pastor Rahmat Masih was a faithful servant of God whose life was marked by faith, perseverance, prayer, and a steadfast commitment to proclaiming the Word of God. His ministry was carried out during a time when Christian service often required significant sacrifice and involved considerable difficulties, and his life became a testimony to remaining steadfast in faith despite challenging circumstances.",
      leadP2:
        "Pastor Rahmat Masih was born on January 1, 1947. He received his theological education at Lahore Bible Institute in Sheikhupura, Punjab, Pakistan, where he completed the institute's prescribed three-year course of study in 1979. This theological and academic training provided an important foundation for the ministry that would later become the central focus of his life.",
      karachiHeading: "The Beginning of Ministry in Karachi",
      karachiP1:
        "In 1982, Pastor Rahmat Masih came to Karachi from Sheikhupura through an American missionary, Mr. Coleman. Mr. Coleman had met him and had been impressed by Pastor Rahmat Masih's commitment to Christian ministry. In search of a faithful servant who could minister among the people, Mr. Coleman brought Rahmat Masih to Karachi, where a new chapter of his ministry began.",
      karachiP2:
        "After arriving in Karachi, Pastor Rahmat Masih devoted himself to preaching and teaching the Word of God. His ministry was not centered on personal recognition or material resources, but on faithfulness to the Gospel and a willingness to serve wherever God opened an opportunity for ministry.",
      karachiP3:
        "Alongside his employment, he continued serving in the church and remained actively engaged in preaching and ministry within the congregation. Prayer was also a significant part of his life. He regularly set aside time for prayer and fasting, seeking God's guidance and strength for his family, the church, and the ministry entrusted to him by God.",
      faithfulnessHeading: "Faithfulness in Difficult Circumstances",
      faithfulnessP1:
        "The early years of his ministry were lived in simple circumstances and with limited resources. The family had very limited material means, yet Rahmat Masih and his wife remained faithful in serving God. Their early life in Karachi reflected the experience of a family that chose to remain steadfast in faith and continue serving God despite difficult circumstances.",
      faithfulnessP2:
        "He also fulfilled his responsibilities toward his family with diligence and integrity. He worked hard to provide for his household and continued his ministry in the church after completing his employment. In this way, he faithfully carried both his responsibilities toward his family and his calling to Christian ministry.",
      faithfulnessP3:
        "His commitment was also evident during periods of political unrest and curfew. Even when movement was restricted and security forces were present on the streets, he continued to go out to proclaim the Word of God. His bicycle was one of the simple means by which he traveled to different places to preach the Word of God. He was willing to face difficulties, uncertainty, and personal hardship, but he did not allow difficult circumstances to silence his witness.",
      faithfulnessP4:
        "These were not years of comfort and abundance, but years of scarcity and sacrifice. The family had very few material resources, yet they continued to trust in God and serve faithfully. Rahmat Masih and his wife served God together, demonstrating that Christian ministry was not merely a public responsibility but also a way of life embraced within their household.",
      movingForwardHeading: "A Ministry That Continued to Move Forward",
      movingForwardP1: "Pastor Rahmat Masih's ministry laid an important foundation for the work that would continue after him. As his health began to decline, his son, Pastor Nayyer Gull, gradually assumed greater responsibilities in the ministry.",
      movingForwardP2:
        "By 2005, when Pastor Nayyer Gull had completed his seminary education, Rahmat Masih entrusted him with significant responsibilities for the ministry, including the church and the buildings that existed at that time. This transition was not the end of the ministry that Rahmat Masih had begun; rather, it became an important stage in the continuation and development of that ministry.",
      movingForwardP3:
        "Under the leadership of Pastor Nayyer Gull, the work continued and expanded into additional areas of Christian ministry, including theological education, Bible school ministry, Christian literature, books, articles, and responses to biblical and theological questions. These developments represent the continuation and expansion of the foundation that Pastor Rahmat Masih established through his early and faithful preaching and church ministry.",
      legacyHeading: "A Legacy That Continues Today",
      legacyP1: "Pastor Rahmat Masih passed away on June 4, 2014, after a life devoted to his faith, his family, and the service of the church. His earthly life and personal ministry came to an end, but the work to which he had devoted his life did not.",
      legacyP2:
        "The ministry in which he played a foundational role continued after his death and remains active today. The work has grown beyond the limited circumstances of its early years, expanding into broader areas of Christian education, theological training, literature, and ministry. In this sense, Pastor Rahmat Masih's legacy is not remembered merely as a chapter of the past, but as a foundation upon which the work of ministry has continued to be built across generations.",
      legacyP3: "His life stands as a testimony to faithful service: a ministry that began with limited resources, was sustained through prayer and perseverance, and was passed from one generation to the next and carried forward.",
      legacyP4:
        "The ministry of Pastor Rahmat Masih reminds us that the measure of lasting ministry is not only what a person builds during his lifetime, but also how faithfully he establishes a foundation for those who come after him so that they may continue the work.",
    },
    bodyBlocksUr: {
      dek: "وفادار خدمت اور انجیل کی منادی سے عبارت زندگی",
      leadP1:
        "پادری رحمت مسیح خدا کے ایک وفادار خادم تھے، جن کی زندگی ایمان، ثابت قدمی، دعا اور خدا کے کلام کی منادی کے عزم سے عبارت تھی۔ ان کی خدمت ایسے دور میں انجام پائی جب مسیحی خدمت کے لیے اکثر بڑی قربانی اور مشکلات کا سامنا کرنا پڑتا تھا، اور ان کی زندگی مشکل حالات کے باوجود ثابت قدم رہنے کی گواہی بن گئی۔",
      leadP2:
        "پاسٹر رحمت مسیح یکم جنوری 1947 کو پیدا ہوئے۔ انہوں نے لاہور بائبل انسٹی ٹیوٹ، شیخوپورہ (شیخوپورہ پنجاب پاکستان) سے علمِ الٰہیات کی تعلیم حاصل کی، جہاں انہوں نے 1979 میں ادارے کے مقررہ تین سالہ کورسِ تعلیم کو مکمل کیا۔ ان کی یہ علمی و الٰہیاتی تربیت اس خدمت کے لیے ایک اہم بنیاد ثابت ہوئی جو بعد ازاں ان کی زندگی کا مرکزی مقصد بن گئی۔",
      karachiHeading: "کراچی میں خدمت کا آغاز",
      karachiP1:
        "1982 پاسٹر رحمت مسیح شیخوپورہ سے ایک امریکی مشنری، مسٹر کول مین، کے ذریعے کراچی آئے۔ مسٹر کول مین کی ان سے ملاقات ہوئی تھی اور وہ پاسٹر رحمت مسیح کی مسیحی خدمت کے لیے وابستگی سے متاثر ہوئے تھے۔ ایک ایسے وفادار خادم کی تلاش میں جو لوگوں کے درمیان خدمت کر سکے، مسٹر کول مین رحمت مسیح کو کراچی لے آئے، جہاں ان کی خدمتِ خداوندی کے ایک نئے دور کا آغاز ہوا۔",
      karachiP2:
        "کراچی پہنچنے کے بعد پاسٹر رحمت مسیح نے اپنے آپ کو خدا کے کلام کی منادی اور تعلیم دینے کے لیے وقف کر دیا۔ ان کی خدمت ذاتی شہرت یا مادی وسائل کے گرد نہیں گھومتی تھی بلکہ انجیل کے ساتھ وفاداری اور جہاں کہیں خدا خدمت کا دروازہ کھولتا، وہاں خدمت کرنے کی آمادگی کے گرد قائم تھی۔",
      karachiP3:
        "وہ اپنی ملازمت کے ساتھ چرچ میں خدمت کو جاری رکھے ہوئے تھے اور کلیسیا میں منادی اور خدمت میں مصروف رہتے۔ دعا بھی ان کی زندگی کا ایک نمایاں حصہ تھی۔ وہ باقاعدگی سے دعا اور روزے کے لیے وقت نکالتے اور اپنے خاندان، کلیسیا اور خدا کی طرف سے سونپی گئی خدمت کے لیے خدا کی رہنمائی اور قوت کے طالب رہتے تھے۔",
      faithfulnessHeading: "مشکل حالات میں وفاداری",
      faithfulnessP1:
        "ان کی خدمت کے ابتدائی سال سادہ حالات اور محدود وسائل میں گزرے۔ خاندان کے پاس مادی وسائل بہت محدود تھے، لیکن اس کے باوجود رحمت مسیح اور ان کی اہلیہ خدا کی خدمت کے لیے وفادار رہے۔ کراچی میں ان کی ابتدائی زندگی ایک ایسے خاندان کی حقیقت کی عکاسی کرتی ہے جس نے مشکلات کے باوجود ایمان میں ثابت قدم رہنے اور خدا کی خدمت جاری رکھنے کا فیصلہ کیا۔",
      faithfulnessP2:
        "وہ خاندانی زندگی کی ذمہ داریاں بھی پوری محنت اور دیانت داری سے نبھاتے رہے۔ انہوں نے اپنے گھرانے کی ضروریات پوری کرنے کے لیے محنت کی اور ملازمت مکمل کرنے کے بعد بھی اپنی کلیسیائی خدمت جاری رکھی۔ اس طرح انہوں نے اپنے خاندان کی ذمہ داری اور مسیحی خدمت کی اپنی بلاہٹ، دونوں کو وفاداری سے نبھایا۔",
      faithfulnessP3:
        "سیاسی بے چینی اور کرفیو کے ادوار میں بھی ان کی وابستگی نمایاں طور پر سامنے آئی۔ ایسے وقت میں بھی جب نقل و حرکت محدود ہوتی اور سکیورٹی فورسز سڑکوں پر موجود ہوتیں، وہ خدا کے کلام کی منادی کے لیے باہر نکلتے رہے۔ ان کی سائیکل ان سادہ ذرائع میں سے ایک تھی جس کے ذریعے وہ مختلف مقامات پر جاتے اور خدا کے کلام کی منادی کرتے تھے۔ وہ مشکلات، غیر یقینی حالات اور ذاتی تکالیف کا سامنا کرنے کے لیے تیار رہتے تھے، لیکن مشکل حالات کو اپنی گواہی کو خاموش کرنے کی اجازت نہیں دیتے تھے۔",
      faithfulnessP4:
        "یہ سال آسائش اور فراوانی کے نہیں بلکہ کمی اور قربانی کے سال تھے۔ خاندان کے پاس بہت کم وسائل تھے، لیکن اس کے باوجود وہ خدا پر بھروسا کرتے اور وفاداری سے خدمت کرتے رہے۔ رحمت مسیح اور ان کی اہلیہ نے مل کر خدمتِ خداوندی میں حصہ لیا اور یہ ظاہر کیا کہ مسیحی خدمت محض ایک عوامی ذمہ داری نہیں بلکہ ان کے گھرانے کے اندر اختیار کیا جانے والا طرزِ زندگی بھی تھی۔",
      movingForwardHeading: "ایک خدمت جو آگے بڑھتی رہی",
      movingForwardP1: "پاسٹر رحمت مسیح کی خدمت نے اس کام کے لیے ایک اہم بنیاد فراہم کی جو ان کے بعد بھی جاری رہنا تھا۔ جب ان کی صحت کمزور ہونے لگی تو ان کے بیٹے، پاسٹر نیر گل، کو بتدریج خدمت کی زیادہ ذمہ داریاں سونپی جانے لگیں۔",
      movingForwardP2:
        "2005 تک، جب پاسٹر نیر گل نے اپنی سیمنری کی تعلیم مکمل کر لی، رحمت مسیح نے انہیں اس وقت موجود کلیسیا اور اس کی عمارات سمیت خدمت کی اہم ذمہ داریاں سونپ دیں۔ یہ منتقلی رحمت مسیح کی شروع کی ہوئی خدمت کا اختتام نہیں تھی بلکہ اس خدمت کے تسلسل اور ترقی کا ایک اہم مرحلہ ثابت ہوئی۔",
      movingForwardP3:
        "پاسٹر نیر گل کی قیادت میں یہ کام جاری رہا اور مسیحی خدمت کے مزید شعبوں تک وسعت اختیار کرتا گیا، جن میں علمِ الٰہیات کی تعلیم، بائبل اسکول کی خدمت، مسیحی لٹریچر، کتابیں، مضامین، اور بائبلی و الٰہیاتی سوالات کے جوابات شامل ہیں۔ یہ تمام پیش رفت اس بنیاد کی توسیع اور تسلسل کی نمائندگی کرتی ہے جو پاسٹر رحمت مسیح نے اپنی ابتدائی اور وفادار منادی اور کلیسیائی خدمت کے ذریعے قائم کی تھی۔",
      legacyHeading: "ایک ایسا ورثہ جو آج بھی جاری ہے",
      legacyP1: "پاسٹر رحمت مسیح 4 جون 2014 کو اپنے ایمان، اپنے خاندان اور کلیسیا کی خدمت کے لیے وقف زندگی گزارنے کے بعد وفات پا گئے۔ ان کی زمینی زندگی اور شخصی خدمت کا اختتام ہوا، لیکن وہ کام جس کے لیے انہوں نے اپنی زندگی وقف کی تھی، ختم نہیں ہوا۔",
      legacyP2:
        "انہوں نے جس خدمت کو قائم کرنے میں اپنا کردار ادا کیا تھا، وہ ان کی وفات کے بعد بھی جاری رہی اور آج بھی فعال ہے۔ یہ کام اپنے ابتدائی دور کے محدود حالات سے آگے بڑھتے ہوئے مسیحی تعلیم، علمِ الٰہیات کی تربیت، لٹریچر اور خدمت کے وسیع تر میدانوں تک پھیل چکا ہے۔ اس لحاظ سے پاسٹر رحمت مسیح کی میراث کو محض ماضی کے ایک باب کے طور پر یاد نہیں کیا جاتا بلکہ اسے ایک ایسی بنیاد کے طور پر دیکھا جاتا ہے جس پر آنے والی نسلوں میں خدمت کا کام مسلسل تعمیر ہوتا رہا ہے۔",
      legacyP3: "ان کی زندگی وفادار خدمت کی ایک گواہی ہے: ایک ایسی خدمت جو محدود وسائل سے شروع ہوئی، دعا اور ثابت قدمی کے ذریعے قائم رہی، اور ایک نسل سے دوسری نسل تک منتقل ہو کر آگے بڑھتی رہی۔",
      legacyP4:
        "پاسٹر رحمت مسیح کی خدمت ہمیں یاد دلاتی ہے کہ دیرپا خدمت کا معیار صرف یہ نہیں کہ انسان اپنی زندگی میں کیا تعمیر کرتا ہے، بلکہ یہ بھی ہے کہ وہ آنے والوں کے لیے بنیاد کتنی وفاداری سے قائم کرتا ہے تاکہ وہ اس کام کو آگے جاری رکھ سکیں۔",
    },
  },
];

/**
 * The design's own bracket-placeholder resource, transcribed verbatim —
 * not invented content. "Pastor Nayyer Gull" reused only where already an
 * approved org fact (CLAUDE.md §3), exactly as lib/sermons.ts does.
 */
export const placeholderResources: Resource[] = [
  {
    title: "[RESOURCE TITLE — TO BE SUPPLIED]",
    slug: "placeholder-study",
    type: "study",
    author: "Pastor Nayyer Gull",
    language: "ur",
    standfirst: "[PSEUDO/PLACEHOLDER — STANDFIRST TO BE SUPPLIED]",
    description:
      "[PSEUDO/PLACEHOLDER — BODY TEXT SUPPLIED WITH THE RESOURCE. No summary is written on the ministry's behalf.]",
    covers: ["[topic]", "[topic]", "[topic]"],
  },
  {
    title: "[Resource title — to be supplied]",
    slug: "placeholder-article",
    type: "article",
    author: "[author]",
    language: "en",
  },
  {
    title: "[Resource title — to be supplied]",
    slug: "placeholder-book",
    type: "book",
    author: "[author]",
    language: "ur",
  },
];

export function findResourceBySlug(slug: string): Resource | undefined {
  return (
    resources.find((r) => r.slug === slug) ??
    placeholderResources.find((r) => r.slug === slug) ??
    leadershipResources.find((r) => r.slug === slug)
  );
}

export function getAllResourceSlugs(): string[] {
  return [...(resources.length > 0 ? resources : placeholderResources), ...leadershipResources].map(
    (r) => r.slug,
  );
}

export function getRelatedResources(slug: string, limit = 3): Resource[] {
  const pool = resources.length > 0 ? resources : placeholderResources;
  return pool.filter((r) => r.slug !== slug).slice(0, limit);
}

/**
 * Locale-aware display title for a Resource: `titleUr` on the Urdu route
 * when supplied, `title` (English) otherwise — same fallback shape as
 * `bodyBlocksUr`/`bodyBlocksEn`. The single place that should ever read
 * `resource.title`/`resource.titleUr` for display, so every future
 * resource with a `titleUr` gets locale-correct rendering automatically,
 * with no per-resource special-casing in page components.
 */
export function resourceTitle(resource: Resource, locale: Locale): string {
  return locale === "ur" ? (resource.titleUr ?? resource.title) : resource.title;
}

/**
 * Locale-aware display author for a Resource — `authorUr` on the Urdu
 * route when supplied, `author` (English) otherwise. Mirrors
 * `resourceTitle()`'s fallback shape exactly; `author` itself stays
 * optional (some external links have none), so this can return undefined.
 */
export function resourceAuthor(resource: Resource, locale: Locale): string | undefined {
  return locale === "ur" ? (resource.authorUr ?? resource.author) : resource.author;
}
