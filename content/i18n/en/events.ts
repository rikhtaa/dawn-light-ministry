/**
 * Authoritative English Event-detail-page copy — transcribed from the
 * approved Claude Design mockup (Dawn of Light - Detail Templates.dc.html,
 * "02 — Event detail"). Only page-level UI copy lives here; actual event
 * records are structured data (lib/events.ts's `Event[]`), matching how
 * Sermons is modelled. No event has been supplied yet, so /events/[slug]
 * currently renders lib/events.ts's `placeholderEvents`.
 */
export const events = {
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
