export type NavKey =
  | "home"
  | "about"
  | "ministries"
  | "seminary"
  | "sermons"
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
 * Header nav items, per HANDOFF.md §8: "Home · About · Ministries ·
 * Seminary · Sermons · Resources · Events · Prayer · Contact", then the
 * Support CTA rendered separately (not a plain nav link — see
 * components/layout/SiteHeader.tsx). Labels are resolved separately
 * through the i18n content system (content/i18n/en/common.ts and
 * content/i18n/ur/common.ts) — this file only defines structure and
 * routing, not copy.
 */
export const navItems: NavItem[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "ministries", href: "/ministries" },
  { key: "seminary", href: "/ministries/seminary" },
  { key: "sermons", href: "/sermons" },
  { key: "resources", href: "/resources" },
  { key: "events", href: "/events" },
  { key: "prayer", href: "/prayer" },
  { key: "contact", href: "/contact" },
];
