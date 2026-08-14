/**
 * Authoritative English footer copy (PRD §7.11).
 */
export const footer = {
  missionStatement:
    "Preaching God's Word and helping children receive a Christian education for a brighter future.",
  navHeading: "Explore",
  ministriesHeading: "Ministries",
  contactHeading: "Contact",
  legalHeading: "Legal",
  phoneLabel: "Phone / WhatsApp",
  emailLabel: "Email",
  privacy: "Privacy Policy",
  notice: "Website Notice",
  socialHeading: "Follow Us",
  socialPending: "Link pending",
  copyright: "All rights reserved.",
} as const;

export type FooterStrings = typeof footer;
