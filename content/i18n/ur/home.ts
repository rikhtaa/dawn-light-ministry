import type { Translated } from "@/lib/i18n/types";
import type { HomeStrings } from "@/content/i18n/en/home";

/**
 * See content/i18n/ur/common.ts for the placeholder policy this file
 * follows: untranslated, unapproved, and never hand-written here.
 */
const pending = { value: "", source: "machine", approved: false } as const;

export const home: Translated<HomeStrings> = {
  underConstruction: { ...pending },
};
