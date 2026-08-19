/**
 * Authoritative English Resource-detail-page copy — transcribed from the
 * approved Claude Design mockup (Dawn of Light - Detail Templates.dc.html,
 * "04 — Resource detail"). Only page-level UI copy lives here; actual
 * resource records are structured data (lib/resources.ts's `Resource[]`),
 * matching how Sermons/Events are modelled. No resource has been supplied
 * yet, so /resources/[slug] currently renders lib/resources.ts's
 * `placeholderResources`.
 */
export const resources = {
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
