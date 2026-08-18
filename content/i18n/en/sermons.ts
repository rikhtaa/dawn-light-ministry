/**
 * Authoritative English Sermons-page copy — transcribed from the approved
 * Claude Design mockup (Dawn of Light - Sermons.dc.html). This file holds
 * only page-level UI copy; actual sermon records are structured data
 * (lib/sermons.ts's `Sermon[]`), not translatable strings, matching how
 * Event/Resource are modelled. No sermon has been supplied yet, so the
 * page currently renders lib/sermons.ts's `placeholderSermons` — the
 * design's own bracket-placeholder composition, not fabricated content.
 */
export const sermons = {
  metadata: {
    title: "Sermons — Dawn of Light Ministry",
    description:
      "Preaching from Bethlehem Church, part of Dawn of Light Ministry — recorded when possible and published free, archived by series and Scripture.",
  },
  masthead: {
    eyebrow: "Preaching",
    title: "Sermons",
    standfirst:
      "Preaching from Bethlehem Church, recorded when possible and published free. Services are held twice weekly; Holy Communion is observed monthly.",
  },
  latest: {
    label: "Most recent",
    imagePlaceholder: "Latest sermon — YouTube embed",
    datePlaceholder: "[date]",
    watchOnYouTube: "Watch on YouTube",
    sermonDetail: "Sermon detail",
  },
  filters: {
    all: "All sermons",
    bySeries: "By series",
    byScripture: "By Scripture",
    bySpeaker: "By speaker",
    english: "English",
    urdu: "اردو",
    searchPlaceholder: "Search title, speaker or Scripture",
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
    dateDay: "[dd]",
    dateMonthYear: "[mon yyyy]",
    dateCompact: "[dd mon yyyy]",
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
    heading: "Hear the preaching in person",
    bodyPrefix: "Bethlehem Church meets twice weekly in",
    locationNote: "[PSEUDO/PLACEHOLDER — CITY AND SERVICE TIMES TO BE CONFIRMED]",
    bodySuffix: "Visitors are welcome.",
    visitUs: "Visit us",
    contactTheMinistry: "Contact the ministry",
  },
} as const;

export type SermonsStrings = typeof sermons;
