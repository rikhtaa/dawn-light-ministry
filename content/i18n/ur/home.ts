import type { Translated } from "@/lib/i18n/types";
import type { HomeStrings } from "@/content/i18n/en/home";

/**
 * Homepage copy has no organization-approved Urdu yet, so every entry is
 * an untranslated placeholder — see content/i18n/ur/common.ts for the
 * placeholder policy this file follows. lib/i18n/t.ts falls back to the
 * authoritative English string in content/i18n/en/home.ts for anything
 * unapproved, so the Urdu homepage currently reads in English for this
 * content (the header nav remains Urdu, since those specific strings were
 * separately supplied and approved).
 */
const pending = { value: "", source: "machine", approved: false } as const;

export const home: Translated<HomeStrings> = {
  hero: {
    eyebrow: { ...pending },
    // PRD §3/§7.2: the organization's own verified Urdu name — supplied
    // and approved directly, not a machine draft. Left as the full,
    // previously-approved name rather than re-split to match the English
    // "Dawn of Light" + animatedWords structure, since that split has no
    // organization-approved Urdu equivalent yet.
    headline: { value: "نور کی صبح", source: "author", approved: true },
    animatedWords: {
      ministry: { ...pending },
      church: { ...pending },
      seminary: { ...pending },
    },
    supportingMessage: { ...pending },
    primaryCta: { ...pending },
    // Identical phrase to common.header.primaryCta, whose Urdu was
    // already supplied and approved directly — reusing that approved
    // value rather than leaving an approved English phrase untranslated.
    secondaryCta: {
      value: "دعا کی درخواست",
      source: "author",
      approved: true,
    },
  },
  mission: {
    eyebrow: { ...pending },
    heading: { ...pending },
    body: { ...pending },
    cta: { ...pending },
  },
  ministries: {
    eyebrow: { ...pending },
    heading: { ...pending },
    body: { ...pending },
    cta: { ...pending },
    learnMore: { ...pending },
    items: {
      church: {
        title: { ...pending },
        description: { ...pending },
      },
      seminary: {
        title: { ...pending },
        description: { ...pending },
      },
      christianEducation: {
        title: { ...pending },
        description: { ...pending },
      },
      childrensEducation: {
        title: { ...pending },
        description: { ...pending },
      },
      publishing: {
        title: { ...pending },
        description: { ...pending },
      },
      teachingLectures: {
        title: { ...pending },
        description: { ...pending },
      },
    },
  },
  education: {
    eyebrow: { ...pending },
    heading: { ...pending },
    body: { ...pending },
    cta: { ...pending },
  },
  prayerCta: {
    heading: { ...pending },
    body: { ...pending },
    cta: { ...pending },
  },
  events: {
    eyebrow: { ...pending },
    heading: { ...pending },
    emptyState: { ...pending },
    cta: { ...pending },
  },
  resources: {
    eyebrow: { ...pending },
    heading: { ...pending },
    emptyState: { ...pending },
    cta: { ...pending },
  },
  support: {
    eyebrow: { ...pending },
    heading: { ...pending },
    body: { ...pending },
    cta: { ...pending },
  },
  contact: {
    eyebrow: { ...pending },
    heading: { ...pending },
    body: { ...pending },
    addressPending: { ...pending },
    phoneLabel: { ...pending },
    emailLabel: { ...pending },
    cta: { ...pending },
    cities: {
      karachi: { ...pending },
      faisalabad: { ...pending },
    },
  },
};
