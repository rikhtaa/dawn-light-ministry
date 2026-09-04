/**
 * Authoritative English Sermons-page copy — transcribed from the approved
 * Claude Design mockup (Dawn of Light - Sermons.dc.html). This file holds
 * only page-level UI copy; actual sermon records are structured data
 * (lib/sermons.ts's `Sermon[]`), not translatable strings, matching how
 * Event/Resource are modelled. `sermons` now holds real, organization-
 * supplied entries.
 */
export const sermons = {
  metadata: {
    title: "Sermons — Dawn of Light Ministry",
    description:
      "Preaching from Baptist Church, part of Dawn of Light Ministry — recorded when possible and published free, archived by series and Scripture.",
  },
  masthead: {
    eyebrow: "Preaching",
    title: "Sermons",
    standfirst:
      "Preaching from Baptist Church, recorded when possible and published free. Services are held twice weekly; Holy Communion is observed monthly.",
  },
  latest: {
    label: "Most recent",
    imagePlaceholder: "Latest sermon — YouTube embed",
    datePlaceholder: "[date]",
    watchOnYouTube: "Watch on YouTube",
  },
  filters: {
    all: "All sermons",
    english: "English",
    urdu: "اردو",
    searchPlaceholder: "Search title, speaker or Scripture",
    noResults: "No sermons match your filters.",
  },
  actions: {
    watch: "Watch",
    listen: "Listen",
    read: "Read",
  },
  row: {
    kicker: "Sermon",
    formatVideo: "Video",
    formatAudio: "Audio",
    formatText: "Text",
  },
  pagination: {
    showing: "Showing",
    of: "of",
    sermonsLabel: "sermons",
    previous: "Previous",
    next: "Next",
  },
  emptyState: {
    heading: "No recordings published yet",
    body: "Sermons will appear here as they are recorded. In the meantime, the ministry's articles and Bible studies are available in Resources.",
    browseResources: "Browse resources",
    askForRecording: "Ask for a recording",
  },
  visitCta: {
    heading: "Hear the Preaching in Person",
    bodyPrefix: "Baptist Church meets twice weekly in",
    locationNote: "Service times: Sunday 9 AM · Friday 8 PM",
    bodySuffix: "Visitors are welcome.",
    visitUs: "Visit us",
    contactTheMinistry: "Contact the ministry",
  },
} as const;

export type SermonsStrings = typeof sermons;
