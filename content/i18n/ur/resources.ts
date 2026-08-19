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
  metadata: {
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "631b4b739dac8bf4" },
    description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4e968fe580f74313" },
  },
  masthead: {
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "dc20b3d5d2cddf82" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e89b30aa1dc30a6a" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "41645f31d3365e30" },
  },
  filters: {
    all: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a52ace420f2175d0" },
    sermons: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "37ad9d4c407fd2cd" },
    articles: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b14ac78a46e90b71" },
    bibleStudies: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fd51e22f54a9327f" },
    educationalMaterial: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "90a3218579745d61" },
    books: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9da7f76bc81d2f4e" },
    english: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ba118bf7fc9c1aed" },
    urdu: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "234d81e4dcbe229b" },
    searchPlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c24cfde743ee1217" },
  },
  row: {
    watchOnYouTube: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "818cd7480430ffb4" },
    read: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9b9a8d05a7ec353b" },
    downloadPdf: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6183be0883d2a89c" },
    askForCopy: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d91f1b519929346a" },
    articleFallbackDescription: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1cbfd1f1ac1cd4a8" },
    bibleStudyFallbackDescription: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8ac4ac57e0393092" },
    bookFallbackDescription: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "28e9393be1fab965" },
    thumbnailPlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d01f83fe11852c32" },
    pagesPlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "cf4f25be3620a639" },
  },
  pagination: {
    showing: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d604310a789a1848" },
    of: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "28391d3bc64ec15c" },
    resourcesLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "41d311a605520fc7" },
    previous: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a57b08a480b822a0" },
    next: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1ff57a29d7c9d11b" },
  },
  cta: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ee1a8cbaccdc141c" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c671a9c27249778e" },
    primaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e3d5ef30bc7323c9" },
  },
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
