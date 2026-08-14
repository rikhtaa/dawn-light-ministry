import type { Translated } from "@/lib/i18n/types";
import type { CommonStrings } from "@/content/i18n/en/common";

/**
 * Urdu UI strings.
 *
 * Basic navigation/UI labels (nav.* and header.primaryCta) were supplied
 * and approved directly by the organization for testing the bilingual
 * interface, so they carry `source: "author"` / `approved: true` and
 * render as-is on /ur.
 *
 * Everything else remains an untranslated placeholder —
 * `{ value: "", source: "machine", approved: false }` — until the
 * translation workflow (a translation API run, not hand-authored here)
 * fills in `value` and a fluent human reviewer approves it. lib/i18n/t.ts
 * only ever renders an entry when `approved` is true, so unreviewed
 * entries always fall back to the authoritative English string in
 * content/i18n/en/common.ts. Do not hand-write additional Urdu values
 * into this file — populate them via the translation workflow instead.
 */

const pending = { value: "", source: "machine", approved: false } as const;

export const common: Translated<CommonStrings> = {
  nav: {
    home: { value: "گھر", source: "author", approved: true },
    about: { value: "ہمارے بارے میں", source: "author", approved: true },
    ministries: { value: "خدمتیں", source: "author", approved: true },
    seminary: { value: "سیمنری", source: "author", approved: true },
    resources: { value: "وسائل", source: "author", approved: true },
    events: { value: "تقریبات", source: "author", approved: true },
    prayer: { value: "دعا", source: "author", approved: true },
    support: { value: "تعاون", source: "author", approved: true },
    contact: { value: "رابطہ", source: "author", approved: true },
  },
  header: {
    primaryCta: {
      value: "دعا کی درخواست",
      source: "author",
      approved: true,
    },
    menuOpen: { ...pending },
    menuClose: { ...pending },
    primaryNavLabel: { ...pending },
    mobileNavLabel: { ...pending },
    languageSwitcherLabel: { ...pending },
  },
};
