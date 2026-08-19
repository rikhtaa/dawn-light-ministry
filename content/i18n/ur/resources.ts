import type { Translated } from "@/lib/i18n/types";
import type { ResourcesStrings } from "@/content/i18n/en/resources";

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
export const resources: Translated<ResourcesStrings> = {
  detail: {
    type: {
      article: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "29d94922512b93e8" },
      study: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5660b0573fe8e31a" },
      book: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "909cb81127c5e194" },
      pdf: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1d393b0081b632c5" },
    },
    format: {
      download: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1d393b0081b632c5" },
      online: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0d21bd52022ca7f7" },
    },
    meta: {
      author: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d95082a2ee57f3e4" },
      date: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "99c40ab405926cb5" },
      pages: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9046da16aea909ba" },
      free: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f411a1fb62758b4c" },
    },
    datePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "80502bc1a158f94a" },
    pagesPlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "cf4f25be3620a639" },
    covers: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "edbce190de65ae2c" },
    },
    printedNotice: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d6ffcd498e9b16ee" },
      body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6c5a6d1a726021c0" },
    },
    action: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a6be1e0c1bdbe01a" },
      download: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d6eafe8235910042" },
      askForCopy: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "17dda4e67e792af7" },
    },
    facts: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "45989de49fb7f66d" },
      author: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d95082a2ee57f3e4" },
      date: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "99c40ab405926cb5" },
      pages: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9046da16aea909ba" },
      language: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a4fe65264ef7dbb3" },
      scripture: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9bfc2da1e0c7827e" },
    },
    related: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "45ca56d179d4788c" },
      empty: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ed9f16c177e4cadd" },
    },
    moreFromLibrary: {
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3e8c5f7b6f56f20c" },
    },
    backToResources: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "dd036462e6ce556d" },
  },
};
