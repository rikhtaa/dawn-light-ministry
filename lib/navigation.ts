export type NavKey =
  | "home"
  | "about"
  | "ministries"
  | "seminary"
  | "resources"
  | "events"
  | "prayer"
  | "support"
  | "contact";

export interface NavItem {
  key: NavKey;
  href: string;
}

/**
 * Header nav items, per PRD §7.1. Labels are resolved separately through
 * the i18n content system (content/i18n/en/common.ts and
 * content/i18n/ur/common.ts) — this file only defines structure and
 * routing, not copy.
 */
export const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "ministries", href: "/ministries" },
  { key: "seminary", href: "/ministries/seminary" },
  { key: "resources", href: "/resources" },
  { key: "events", href: "/events" },
  { key: "prayer", href: "/prayer" },
  { key: "support", href: "/support" },
  { key: "contact", href: "/contact" },
];
