import type { Translated } from "@/lib/i18n/types";
import type { FooterStrings } from "@/content/i18n/en/footer";

/**
 * See content/i18n/ur/home.ts — same placeholder policy applies here.
 */
const pending = { value: "", source: "machine", approved: false } as const;

export const footer: Translated<FooterStrings> = {
  missionStatement: { ...pending },
  navHeading: { ...pending },
  ministriesHeading: { ...pending },
  contactHeading: { ...pending },
  legalHeading: { ...pending },
  phoneLabel: { ...pending },
  emailLabel: { ...pending },
  privacy: { ...pending },
  notice: { ...pending },
  socialHeading: { ...pending },
  socialPending: { ...pending },
  copyright: { ...pending },
};
