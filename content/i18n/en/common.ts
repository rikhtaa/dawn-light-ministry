/**
 * Authoritative English UI strings. English is the source of truth for all
 * content — see lib/i18n/t.ts for how Urdu translations are resolved
 * against this file.
 */
export const common = {
  nav: {
    home: "Home",
    about: "About",
    ministries: "Ministries",
    seminary: "Seminary",
    sermons: "Sermons",
    resources: "Resources",
    events: "Events",
    prayer: "Prayer",
    support: "Support",
    contact: "Contact",
  },
  header: {
    // HANDOFF.md §8: the header's only CTA button; Prayer is a plain nav
    // link (see nav.prayer above), not a second header button.
    supportCta: "Support the mission",
    // The mobile drawer's own navy header strip title (Claude Design
    // mockup), distinct from menuOpen/menuClose (the trigger button's
    // accessible names).
    menuTitle: "Menu",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    primaryNavLabel: "Primary",
    mobileNavLabel: "Mobile navigation",
    languageSwitcherLabel: "Language",
    darkModeLabel: "Dark mode",
    lightModeLabel: "Light mode",
    themeToggleToLight: "Switch to light mode",
    themeToggleToDark: "Switch to dark mode",
  },
  utilityBar: {
    // HANDOFF.md §8 utility bar, left cluster.
    locations: "Karachi & Faisalabad, Pakistan",
    phoneLabel: "Phone / WhatsApp",
  },
} as const;

export type CommonStrings = typeof common;
