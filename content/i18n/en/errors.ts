/**
 * Authoritative English 404/500 copy (Dawn of Light - Utility
 * Pages.dc.html §03). The design's fixed Urdu line under the 404 heading
 * (یہ صفحہ موجود نہیں ہے) is drawn identically regardless of site locale —
 * same convention as LogoLockup's "نور کی صبح" — so it is hardcoded as a
 * literal constant in components/errors/NotFoundContent.tsx rather than
 * run through this translated content tree.
 *
 * "Search this site" (design: a muted, non-interactive-looking span, not a
 * real search box) renders as a disabled input — this project has no site
 * search feature/index built anywhere; building one now would be scope
 * beyond what "implement the Utility pages" asked for. Flagged in the
 * checkpoint report as a known, deliberate gap.
 */
export const errors = {
  notFound: {
    metadata: {
      title: "Page not found — Dawn of Light Ministry",
      description: "The page you're looking for could not be found.",
    },
    monoLabel: "Error 404 · page not found",
    heading: "This page is not here.",
    body: "The address may be mistyped, or the page may have moved. Here is where most people are heading.",
    bodyMobile: "Try one of these instead.",
    cards: {
      serviceTimes: {
        heading: "Service times",
        body: "When and where the church gathers.",
        linkLabel: "Church",
      },
      prayer: {
        heading: "Request prayer",
        body: "Private, and read by the pastor.",
        linkLabel: "Prayer",
      },
      library: {
        heading: "Sermons & resources",
        body: "Preaching, articles and free books.",
        linkLabel: "Library",
      },
      talk: {
        heading: "Talk to someone",
        body: "WhatsApp 03442316634.",
        linkLabel: "Contact",
      },
    },
    homeCta: "Back to the homepage",
    searchPlaceholder: "Search this site",
  },
  serverError: {
    metadata: {
      title: "Something went wrong — Dawn of Light Ministry",
      description: "Something went wrong at our end.",
    },
    monoLabel: "Error 500 · something went wrong",
    heading: "Something went wrong at our end.",
    body: "This is not your mistake. Try again in a moment, or reach the ministry directly on WhatsApp — that always works.",
    tryAgainCta: "Try again",
    whatsappCta: "WhatsApp",
    footnote: "No technical detail, stack trace or internal error text is ever shown to a visitor. Errors are logged server-side without the contents of any form submission.",
  },
} as const;

export type ErrorsStrings = typeof errors;
