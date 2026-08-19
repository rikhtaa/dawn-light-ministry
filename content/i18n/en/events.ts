/**
 * Authoritative English Events copy — transcribed from the approved
 * Claude Design mockup (Dawn of Light - Events.dc.html for the index;
 * Detail Templates.dc.html "02 — Event detail" for `detail`, below). Only
 * page-level UI copy lives here; actual event records are structured data
 * (lib/events.ts's `Event[]`), matching how Sermons is modelled.
 *
 * The index's two states are both real: Events.dc.html's own text is
 * explicit that "the page ships empty by default, because inventing
 * events would be worse than having none" and labels the empty state
 * "the launch state" — unlike Sermons/Resources, whose designs show no
 * separate empty composition. So /events reads `events` only (no
 * `placeholderEvents` fallback): empty today, and the empty state is the
 * intended shipped behaviour, not a placeholder for missing content.
 */
export const events = {
  metadata: {
    title: "Events — Dawn of Light Ministry",
    description:
      "Special gatherings, lectures and seminary occasions from Dawn of Light Ministry in Karachi and Faisalabad, Pakistan — listed here when scheduled.",
  },
  masthead: {
    eyebrow: "Gatherings",
    title: "Events",
    standfirst:
      "Special gatherings, lectures and seminary occasions are listed here when they are scheduled. Regular worship and classes continue whether or not anything appears below.",
  },
  emptyState: {
    kicker: "Nothing scheduled",
    heading: "No events are scheduled at the moment.",
    body: "When the ministry announces a gathering it will appear here. In the meantime, services and classes run to their weekly rhythm, and you are welcome to join.",
    primaryCta: "Contact the ministry",
    secondaryCta: "See our ministries",
  },
  // Mobile empty state uses shorter copy in the design; body text otherwise stays one shared string.
  emptyStateMobile: {
    heading: "Nothing scheduled right now.",
    body: "Services and classes continue as usual.",
  },
  weeklyRhythm: {
    heading: "The weekly rhythm",
    note: "Times to be confirmed by the ministry",
    churchServices: { label: "Church services", value: "Twice weekly" },
    sundaySchool: { label: "Sunday School", value: "Weekly" },
    seminaryClasses: { label: "Seminary classes", value: "Daily" },
    holyCommunion: { label: "Holy Communion", value: "Monthly" },
    confirmSuffix: "[CONFIRM]",
  },
  filters: {
    upcoming: "Upcoming",
    past: "Past",
    karachi: "Karachi",
    faisalabad: "Faisalabad",
  },
  row: {
    register: "Register",
    details: "Details",
    noLongerTakingPlace: "No longer taking place",
    dateDayPlaceholder: "[00]",
    dateMonthPlaceholder: "[Mon]",
  },
  pagination: {
    showing: "Showing",
    of: "of",
    eventsLabel: "events",
  },
  detail: {
    status: {
      open: "Registration open",
      closed: "Closed",
      cancelled: "Cancelled",
      completed: "Completed",
    },
    meta: {
      date: "Date",
      time: "Time",
      location: "Location",
    },
    datePlaceholder: "[date]",
    timePlaceholder: "[time]",
    action: {
      heading: "Attend",
      register: "Register",
      whatsapp: "Ask via WhatsApp",
      closedNote: "Registration is closed for this event.",
      cancelledHeading: "This event has been cancelled",
      completedHeading: "This event has concluded",
      completedNote: "Thank you to everyone who attended.",
    },
    about: {
      heading: "About this event",
      fallbackBody: "[PSEUDO/PLACEHOLDER — EVENT DESCRIPTION TO BE SUPPLIED]",
    },
    programme: {
      heading: "Programme",
    },
    facts: {
      heading: "Details",
      date: "Date",
      time: "Time",
      location: "Location",
      city: "City",
      status: "Status",
    },
    gettingThere: {
      heading: "Getting there",
      addressPlaceholder: "[PSEUDO/PLACEHOLDER — ADDRESS TO BE CONFIRMED]",
      directions: "Get directions",
    },
    contact: {
      heading: "Contact",
      body: "Questions about this event can be sent directly to the ministry.",
      cta: "Contact the ministry",
    },
    related: {
      heading: "Other events",
    },
    backToEvents: "All events",
  },
} as const;

export type EventsStrings = typeof events;
