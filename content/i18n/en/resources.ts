/**
 * Authoritative English Resources copy — transcribed from the approved
 * Claude Design mockup (Dawn of Light - Resources.dc.html for the index;
 * Detail Templates.dc.html "04 — Resource detail" for `detail`, below).
 * Only page-level UI copy lives here; actual resource records are
 * structured data (lib/resources.ts's `Resource[]`), matching how
 * Sermons/Events are modelled.
 *
 * Resources.dc.html draws no separate empty-state composition — its one
 * populated frame is the only frame given — so, like Sermons (and unlike
 * Events, whose own design explicitly frames an empty state as "the
 * launch state"), /resources falls back to `placeholderResources` when
 * `resources` is empty, rather than showing nothing.
 *
 * HANDOFF.md §13 conflict (reported, not silently resolved — see the
 * implementation's final report): HANDOFF states "Resources keeps a
 * 'Sermons' filter chip that links to /sermons rather than duplicating
 * the archive," but Resources.dc.html's own populated frame draws a
 * sermon as its first row, inline, with its own "Watch on YouTube"
 * action — not just a filter chip. The index reproduces the design
 * (a live sermon row, sourced from lib/sermons.ts, not a duplicated
 * record) while keeping the "Sermons" filter chip HANDOFF also expects.
 */
export const resources = {
  metadata: {
    title: "Resources — Dawn of Light Ministry",
    description:
      "Sermons, Christian articles, Bible studies and educational material published by Dawn of Light Ministry, in Urdu and English — everything free.",
  },
  masthead: {
    eyebrow: "Library",
    title: "Resources",
    standfirst:
      "Sermons, Christian articles, Bible studies and educational material published by the ministry, in Urdu and English. Everything here is free.",
  },
  filters: {
    all: "All",
    sermons: "Sermons",
    articles: "Articles",
    bibleStudies: "Bible studies",
    educationalMaterial: "Educational material",
    books: "Books",
    english: "English",
    urdu: "اردو",
    searchPlaceholder: "Search title, speaker or Scripture",
  },
  row: {
    watchOnYouTube: "Watch on YouTube",
    read: "Read",
    downloadPdf: "Download PDF",
    askForCopy: "Ask for a copy",
    articleFallbackDescription: "Written by the ministry for congregations and students.",
    bibleStudyFallbackDescription: "Prepared for group or personal study using the commonly used Urdu Bible translation.",
    bookFallbackDescription: "Distributed without charge by the ministry. Ask for a printed copy at the church.",
    thumbnailPlaceholder: "thumbnail 16:9",
    pagesPlaceholder: "[pages]",
  },
  pagination: {
    showing: "Showing",
    of: "of",
    resourcesLabel: "resources",
    previous: "Previous",
    next: "Next",
  },
  cta: {
    heading: "Looking for something specific?",
    body: "The ministry can send printed material or point you to a recording. Ask the pastor directly.",
    primaryCta: "Contact the ministry",
  },
  detail: {
    type: {
      article: "Article",
      study: "Bible study",
      book: "Book",
      pdf: "PDF",
    },
    format: {
      download: "PDF",
      online: "Online",
    },
    meta: {
      author: "Author",
      date: "Date",
      pages: "Pages",
      free: "Free",
    },
    datePlaceholder: "[date]",
    pagesPlaceholder: "[pages]",
    covers: {
      heading: "What it covers",
    },
    printedNotice: {
      heading: "Printed copies are free",
      body: "Printed copies of this resource are provided at no cost. Ask the ministry when requesting one.",
    },
    action: {
      heading: "Get this resource",
      download: "Download",
      askForCopy: "Ask for a printed copy",
    },
    facts: {
      heading: "Details",
      author: "Author",
      date: "Date",
      pages: "Pages",
      language: "Language",
      scripture: "Scripture",
    },
    related: {
      heading: "Related",
      empty: "[PSEUDO/PLACEHOLDER — RELATED RESOURCES TO BE LINKED ONCE SUPPLIED]",
    },
    moreFromLibrary: {
      heading: "More from the library",
    },
    backToResources: "All resources",
  },
} as const;

export type ResourcesStrings = typeof resources;
