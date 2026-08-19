import type { Translated } from "@/lib/i18n/types";
import type { PrayerStrings } from "@/content/i18n/en/prayer";

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
export const prayer: Translated<PrayerStrings> = {
  metadata: {
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9fd36c59d55eb9b5" },
    description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f9241123435c0efa" },
  },
  breadcrumbLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6e399f2787a0602f" },
  masthead: {
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6e399f2787a0602f" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "361aca69c0be0a9f" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c15366a02f30ecd7" },
  },
  howThisWorks: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bdbd7706de64ff6a" },
    steps: {
      write: {
        number: { value: "01", source: "machine", published: true, reviewed: false, sourceHash: "938db8c9f82c8cb5" },
        title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c304911f6e67f417" },
        body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8f63dd2f4e1bdaeb" },
      },
      receive: {
        number: { value: "02", source: "machine", published: true, reviewed: false, sourceHash: "a953f09a1b6b6725" },
        title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c93a6e325bfb06a4" },
        body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "60c5d9240762bcf8" },
      },
      pray: {
        number: { value: "03", source: "machine", published: true, reviewed: false, sourceHash: "0b8efa5a3bf10441" },
        title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4ff9ba3121aef0b4" },
        body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "577c526cb91b834d" },
      },
    },
  },
  urgentNotice: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0b226e3e59ea3ee6" },
  speakToSomeone: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e8bcb0a5f7af83f8" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8e7bbe4f2b2ea768" },
  },
  form: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f4559c3380c0d748" },
    subheading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "128b12853c41f696" },
    nameLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "dcd1d5223f73b3a9" },
    nameOptional: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0059798b7f7023e4" },
    namePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2c6b2e253c01fb2e" },
    emailLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "969ccbd3cf6300ec" },
    emailOptional: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4c9d4e8200d44ea2" },
    emailPlaceholder: { value: "you@example.com", source: "machine", published: true, reviewed: false, sourceHash: "53e6cdc30765aade" },
    requestLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "63c6f063fef2eaca" },
    requestPlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4883d9025077ec7f" },
    requestErrorEmpty: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7f03f75bd3fd5dc5" },
    followUpLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b56b0f0a01341d18" },
    consentLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "17177edbe0cb0123" },
    consentErrorEmpty: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4eb22ff8709cf72c" },
    submitLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4d3f1f9688155d39" },
    submitLabelSending: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b8ed5279e897be5d" },
    sendingNote: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a8fb19d8875ece07" },
    footerNote: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "202fbbd21eb222a1" },
  },
  success: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b50e69820c559fb4" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "253650ce251fcc45" },
    sendAnother: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "50b6a80f6a986778" },
    returnHome: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bbcc935e4263ac40" },
  },
  failure: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "da6b0554d86a57f6" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d42bf4bde6de3e9e" },
  },
};
