import type { Translated } from "@/lib/i18n/types";
import type { MinistriesStrings } from "@/content/i18n/en/ministries";

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
export const ministries: Translated<MinistriesStrings> = {
  metadata: {
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6241acbbe6a55576" },
    description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "849f2f863ab610b9" },
  },
  masthead: {
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fc967e87a6e80cd0" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7bf47f5c97114fc7" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "043dee570bbeacad" },
  },
  rows: {
    church: {
      imagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "195beac897414922" },
      linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "837aa0d985b27908" },
    },
    seminary: {
      imagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "63eca384093d33f4" },
      linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "72be8da89808691c" },
    },
    childrensEducation: {
      imagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6a8731515f45a78d" },
      linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3583a358a585b13b" },
    },
    publishing: {
      imagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ba6c040fb33a13d9" },
      linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "26c81739396ded64" },
    },
    teachingLectures: {
      imagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5728d0443e77e8c7" },
      linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d953c00b4a161106" },
    },
    outreach: {
      imagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "80e7ac336c741b5d" },
      linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a5803fdf10e57e66" },
    },
  },
  connect: {
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "118e6465f3274709" },
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "48c04bda44f1eab3" },
    primaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "49b50063628cfcd3" },
    secondaryCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f4559c3380c0d748" },
  },
};
