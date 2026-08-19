import type { Translated } from "@/lib/i18n/types";
import type { EventsStrings } from "@/content/i18n/en/events";

/**
 * GENERATED FILE — do not hand-edit the structure or add entries by hand.
 * Produced by `npm run i18n:generate -- --locale=ur`
 * (scripts/i18n/generate.ts), which calls the configured TranslationProvider
 * (lib/i18n/translation-provider.ts) for any entry whose sourceHash no
 * longer matches its English source. Regenerating preserves every entry
 * whose sourceHash still matches exactly, byte-for-byte — it never
 * overwrites an existing translation on its own.
 *
 * `published` controls whether this value renders on the live site at all
 * (see lib/i18n/t.ts); `reviewed` records whether a fluent human has
 * actually checked it. No tier auto-publishes — every machine translation,
 * including "label" (pure UI chrome), is written `published: false`. A
 * human has to review it and flip both `reviewed` and `published` here
 * by hand before it reaches visitors. scripts/i18n/shared.ts's
 * `contentTiers` ("label"/"content"/"sensitive"/"critical") only affects
 * review *priority* in `npm run i18n:review -- --locale=ur`, not
 * whether something publishes. See HANDOFF.md §21.
 */
export const events: Translated<EventsStrings> = {
  detail: {
    status: {
      open: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "86babcde8afda2a3" },
      closed: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c21ead0614e7e1b7" },
      cancelled: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d353a99eb4556847" },
      completed: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "22a970d2e5b1cc23" },
    },
    meta: {
      date: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "99c40ab405926cb5" },
      time: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "33b93476cf597a33" },
      location: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "15b61974b2707a7b" },
    },
    datePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "80502bc1a158f94a" },
    timePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2045cecfa57fbab5" },
    action: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1ad345d68ed2b4ce" },
      register: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bb7234ec12451361" },
      whatsapp: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bd630e62beeac823" },
      closedNote: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "406aea5b6c4686dd" },
      cancelledHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e01adbb52a811322" },
      completedHeading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bdd508f1f26e42c5" },
      completedNote: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7e45e7973d519f06" },
    },
    about: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3cae814cc8c2d447" },
      fallbackBody: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "03627a19784b4fc4" },
    },
    programme: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "30556a7a38a54f79" },
    },
    facts: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "45989de49fb7f66d" },
      date: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "99c40ab405926cb5" },
      time: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "33b93476cf597a33" },
      location: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "15b61974b2707a7b" },
      city: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fc33f73246f48295" },
      status: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "920e413c7d411b61" },
    },
    gettingThere: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1258a77d6e5cd4b3" },
      addressPlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e8998b1b35436aa6" },
      directions: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "46bfe9d078931026" },
    },
    contact: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2b5c3d26721ae9c3" },
      body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "69c0a80b6e77d34c" },
      cta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e3d5ef30bc7323c9" },
    },
    related: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7ff1614ef5051acb" },
    },
    backToEvents: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "20b8487b38046360" },
  },
};
