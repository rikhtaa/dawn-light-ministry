import type { Translated } from "@/lib/i18n/types";
import type { SermonsStrings } from "@/content/i18n/en/sermons";

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
 * actually checked it. No tier auto-publishes — every author translation,
 * including "label" (pure UI chrome), is written `published: true`. A
 * human has to review it and flip both `reviewed` and `published` here
 * by hand before it reaches visitors. scripts/i18n/shared.ts's
 * `contentTiers` ("label"/"content"/"sensitive"/"critical") only affects
 * review *priority* in `npm run i18n:review -- --locale=ur`, not
 * whether something publishes. See HANDOFF.md §21.
 */
export const sermons: Translated<SermonsStrings> = {
  metadata: {
    title: { value: "", source: "author", published: true, reviewed: true, sourceHash: "b1a731519bf14763" },
    description: { value: "", source: "author", published: true, reviewed: true, sourceHash: "106f85e7b82a415d" },
  },
  masthead: {
    eyebrow: { value: "پیغامات", source: "author", published: true, reviewed: true, sourceHash: "5001a2d78b5f8517" },
    title: { value: "منادی", source: "author", published: true, reviewed: true, sourceHash: "37ad9d4c407fd2cd" },
    standfirst: { value: " بپٹسٹ چرچ کی منادی، جسے ممکن ہونے پر ریکارڈ کیا جاتا ہے اور بالکل مفت شائع کیا جاتا ہے۔ عبادتی خدمات ہفتے میں دو بار منعقد کی جاتی ہیں؛ عشائے ربانی ہر ماہ منایا جاتا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "8e2e2e7e9f65c7fb" },
  },
  latest: {
    label: { value: "", source: "author", published: true, reviewed: true, sourceHash: "7459b8690410d3da" },
    imagePlaceholder: { value: "", source: "author", published: true, reviewed: true, sourceHash: "f88d1eaa724f09fe" },
    datePlaceholder: { value: "", source: "author", published: true, reviewed: true, sourceHash: "80502bc1a158f94a" },
    watchOnYouTube: { value: "", source: "author", published: true, reviewed: true, sourceHash: "818cd7480430ffb4" },
    sermonDetail: { value: "", source: "author", published: true, reviewed: true, sourceHash: "ca42065581dd74c0" },
  },
  filters: {
    all: { value: "", source: "author", published: true, reviewed: true, sourceHash: "9b20aebb22d0288e" },
    bySeries: { value: "", source: "author", published: true, reviewed: true, sourceHash: "4462eaaa0c3bff8b" },
    byScripture: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a3099f36ed2fdc83" },
    bySpeaker: { value: "", source: "author", published: true, reviewed: true, sourceHash: "3478e1cb9a8eba87" },
    english: { value: "", source: "author", published: true, reviewed: true, sourceHash: "ba118bf7fc9c1aed" },
    urdu: { value: "", source: "author", published: true, reviewed: true, sourceHash: "234d81e4dcbe229b" },
    searchPlaceholder: { value: "", source: "author", published: true, reviewed: true, sourceHash: "c24cfde743ee1217" },
  },
  actions: {
    watch: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a71e757324467ccf" },
    listen: { value: "", source: "author", published: true, reviewed: true, sourceHash: "225d29f6201e1a63" },
    read: { value: "", source: "author", published: true, reviewed: true, sourceHash: "9b9a8d05a7ec353b" },
  },
  row: {
    kicker: { value: "", source: "author", published: true, reviewed: true, sourceHash: "297147cc3b99f084" },
    formatVideo: { value: "", source: "author", published: true, reviewed: true, sourceHash: "d534be829e32196b" },
    formatAudio: { value: "", source: "author", published: true, reviewed: true, sourceHash: "bc1b88907d3b748a" },
    formatText: { value: "", source: "author", published: true, reviewed: true, sourceHash: "71988c4d8e0803ba" },
    dateDay: { value: "", source: "author", published: true, reviewed: true, sourceHash: "e68e0187110c7eb0" },
    dateMonthYear: { value: "", source: "author", published: true, reviewed: true, sourceHash: "b273140ed6bdfdba" },
    dateCompact: { value: "", source: "author", published: true, reviewed: true, sourceHash: "d91e8f72c43e12b8" },
  },
  pagination: {
    showing: { value: "", source: "author", published: true, reviewed: true, sourceHash: "d604310a789a1848" },
    of: { value: "", source: "author", published: true, reviewed: true, sourceHash: "28391d3bc64ec15c" },
    sermonsLabel: { value: "", source: "author", published: true, reviewed: true, sourceHash: "7ea72ef5af0cae3a" },
    previous: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a57b08a480b822a0" },
    next: { value: "", source: "author", published: true, reviewed: true, sourceHash: "1ff57a29d7c9d11b" },
  },
  emptyState: {
    heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "1bcb47336c62e593" },
    body: { value: "", source: "author", published: true, reviewed: true, sourceHash: "b293041a2f0e4ba6" },
    browseResources: { value: "", source: "author", published: true, reviewed: true, sourceHash: "b396823cf1fe2168" },
    askForRecording: { value: "", source: "author", published: true, reviewed: true, sourceHash: "2bbbbe16a861ac23" },
  },
  visitCta: {
    heading: { value: "ذاتی طور پر آ کر منادی سنیں", source: "author", published: true, reviewed: true, sourceHash: "6a3ef40c6cdae0fc" },
    bodyPrefix: { value: "بپٹسٹ کلیسیا ہفتے میں دو مرتبہ منعقد ہوتی ہے", source: "author", published: true, reviewed: true, sourceHash: "1814b78356d5ace4" },
    locationNote: { value: "اتوار صبح 9 بجے · جمعہ رات 8 بجے", source: "author", published: true, reviewed: true, sourceHash: "32bfe15022753775" },
    bodySuffix: { value: "تمام آنے والوں کو خوش آمدید کہا جاتا ہے", source: "author", published: true, reviewed: true, sourceHash: "6ad92ac1cf926895" },
    visitUs: { value: "ہم سے ملیں", source: "author", published: true, reviewed: true, sourceHash: "f605f9278e51f5bf" },
    contactTheMinistry: { value: "منسٹری سے رابطہ کریں", source: "author", published: true, reviewed: true, sourceHash: "e3d5ef30bc7323c9" },
  },
  detail: {
    kicker: { value: "", source: "author", published: true, reviewed: true, sourceHash: "297147cc3b99f084" },
    meta: {
      speaker: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a9e0c70585121f5f" },
      date: { value: "", source: "author", published: true, reviewed: true, sourceHash: "99c40ab405926cb5" },
      scripture: { value: "", source: "author", published: true, reviewed: true, sourceHash: "9bfc2da1e0c7827e" },
      series: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a8295e08ff7a961c" },
    },
    datePlaceholder: { value: "", source: "author", published: true, reviewed: true, sourceHash: "80502bc1a158f94a" },
    actions: {
      watchOnYouTube: { value: "", source: "author", published: true, reviewed: true, sourceHash: "818cd7480430ffb4" },
      downloadAudio: { value: "", source: "author", published: true, reviewed: true, sourceHash: "23a715d0aece4d42" },
      sermonNotes: { value: "", source: "author", published: true, reviewed: true, sourceHash: "ddbe0b5417aa588e" },
    },
    scripture: {
      heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "d12be6f0c1beae35" },
      note: { value: "", source: "author", published: true, reviewed: true, sourceHash: "7978704bd9eebe4c" },
    },
    about: {
      heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "9a8bddd784e8112c" },
      fallbackBody: { value: "", source: "author", published: true, reviewed: true, sourceHash: "2cdd2607872b74fd" },
    },
    facts: {
      heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "45989de49fb7f66d" },
      speaker: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a9e0c70585121f5f" },
      date: { value: "", source: "author", published: true, reviewed: true, sourceHash: "99c40ab405926cb5" },
      series: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a8295e08ff7a961c" },
      scripture: { value: "", source: "author", published: true, reviewed: true, sourceHash: "9bfc2da1e0c7827e" },
      length: { value: "", source: "author", published: true, reviewed: true, sourceHash: "adc95605a1b30c73" },
      language: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a4fe65264ef7dbb3" },
      seriesPlaceholder: { value: "", source: "author", published: true, reviewed: true, sourceHash: "75a7c9302945f3b6" },
      lengthPlaceholder: { value: "", source: "author", published: true, reviewed: true, sourceHash: "4adf5d5f3f4f31ac" },
      scripturePlaceholder: { value: "", source: "author", published: true, reviewed: true, sourceHash: "f9af6aa10f506345" },
    },
    series: {
      heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "fef7614002576242" },
      empty: { value: "", source: "author", published: true, reviewed: true, sourceHash: "d05061405f3f001a" },
    },
    prayer: {
      heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "361aca69c0be0a9f" },
      body: { value: "", source: "author", published: true, reviewed: true, sourceHash: "e924e91b82facd58" },
      cta: { value: "", source: "author", published: true, reviewed: true, sourceHash: "f4559c3380c0d748" },
    },
    related: {
      heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "28b499a8c09bf74a" },
    },
    backToSermons: { value: "", source: "author", published: true, reviewed: true, sourceHash: "9b20aebb22d0288e" },
  },
};
