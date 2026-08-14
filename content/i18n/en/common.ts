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
    resources: "Resources",
    events: "Events",
    prayer: "Prayer",
    support: "Support",
    contact: "Contact",
  },
  header: {
    primaryCta: "Request Prayer",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    primaryNavLabel: "Primary",
    mobileNavLabel: "Mobile navigation",
    languageSwitcherLabel: "Language",
    themeToggleToLight: "Switch to light mode",
    themeToggleToDark: "Switch to dark mode",
  },
} as const;

export type CommonStrings = typeof common;
