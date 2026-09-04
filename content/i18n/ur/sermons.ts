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
 * actually checked it. No tier auto-publishes — every machine translation,
 * including "label" (pure UI chrome), is written `published: false`. A
 * human has to review it and flip both `reviewed` and `published` here
 * by hand before it reaches visitors. scripts/i18n/shared.ts's
 * `contentTiers` ("label"/"content"/"sensitive"/"critical") only affects
 * review *priority* in `npm run i18n:review -- --locale=ur`, not
 * whether something publishes. See HANDOFF.md §21.
 */
export const sermons: Translated<SermonsStrings> = {
  metadata: {
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b1a731519bf14763" },
    description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b395b4d0756c55f3" },
  },
  masthead: {
    eyebrow: { value: "پیغامات", source: "author", published: true, reviewed: true, sourceHash: "5001a2d78b5f8517" },
    title: { value: "منادی", source: "author", published: true, reviewed: true, sourceHash: "37ad9d4c407fd2cd" },
    standfirst: { value: " بپٹسٹ چرچ کی منادی، جسے ممکن ہونے پر ریکارڈ کیا جاتا ہے اور بالکل مفت شائع کیا جاتا ہے۔ عبادتی خدمات ہفتے میں دو بار منعقد کی جاتی ہیں؛ عشائے ربانی ہر ماہ منایا جاتا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "04e05b4d29d733c9" },

  },
  latest: {
    label: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7459b8690410d3da" },
    imagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f88d1eaa724f09fe" },
    datePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "80502bc1a158f94a" },
    watchOnYouTube: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "818cd7480430ffb4" },
  },
  filters: {
    all: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9b20aebb22d0288e" },
    english: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ba118bf7fc9c1aed" },
    urdu: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "234d81e4dcbe229b" },
    searchPlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c24cfde743ee1217" },
    noResults: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "687640def40d590e" },
  },
  actions: {
    watch: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a71e757324467ccf" },
    listen: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "225d29f6201e1a63" },
    read: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9b9a8d05a7ec353b" },
  },
  row: {
    kicker: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "297147cc3b99f084" },
    formatVideo: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d534be829e32196b" },
    formatAudio: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bc1b88907d3b748a" },
    formatText: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "71988c4d8e0803ba" },
  },
  pagination: {
    showing: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d604310a789a1848" },
    of: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "28391d3bc64ec15c" },
    sermonsLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7ea72ef5af0cae3a" },
    previous: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a57b08a480b822a0" },
    next: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1ff57a29d7c9d11b" },
  },
  emptyState: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1bcb47336c62e593" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b293041a2f0e4ba6" },
    browseResources: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b396823cf1fe2168" },
    askForRecording: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2bbbbe16a861ac23" },
  },
  visitCta: {
    heading: { value: "ذاتی طور پر آ کر منادی سنیں", source: "author", published: true, reviewed: true, sourceHash: "05a164960135f431" },
    bodyPrefix: { value: "بپٹسٹ کلیسیا ہفتے میں دو مرتبہ منعقد ہوتی ہے", source: "author", published: true, reviewed: true, sourceHash: "9233ab76bb2ab3cd" },
    locationNote: { value: "اتوار صبح 9 بجے · جمعہ رات 8 بجے", source: "author", published: true, reviewed: true, sourceHash: "0c106256227e7c24" },
    bodySuffix: { value: "تمام آنے والوں کو خوش آمدید کہا جاتا ہے", source: "author", published: true, reviewed: true, sourceHash: "6ad92ac1cf926895" },
    visitUs: { value: "ہم سے ملیں", source: "author", published: true, reviewed: true, sourceHash: "f605f9278e51f5bf" },
    contactTheMinistry: { value: "منسٹری سے رابطہ کریں", source: "author", published: true, reviewed: true, sourceHash: "e3d5ef30bc7323c9" },
  },
};
