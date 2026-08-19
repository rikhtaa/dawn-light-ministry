import type { Translated } from "@/lib/i18n/types";
import type { ErrorsStrings } from "@/content/i18n/en/errors";

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
export const errors: Translated<ErrorsStrings> = {
  notFound: {
    metadata: {
      title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d64dded9149f9cef" },
      description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1e3677b8ffcd90f7" },
    },
    monoLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0f24231f2f857d01" },
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3ba2f76d61dd06e7" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f32cd63975c8d0a1" },
    bodyMobile: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e9ded2b95e90dec7" },
    cards: {
      serviceTimes: {
        heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f756b529807299ce" },
        body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8663b69b921d4f00" },
        linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "837aa0d985b27908" },
      },
      prayer: {
        heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f4559c3380c0d748" },
        body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c88739e37a800e69" },
        linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6e399f2787a0602f" },
      },
      library: {
        heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "19176d9a74c31bcc" },
        body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "68c71484d683f314" },
        linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "dc20b3d5d2cddf82" },
      },
      talk: {
        heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "581e743c1af3d3a4" },
        body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "20e9ee71e8faa5e6" },
        linkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2b5c3d26721ae9c3" },
      },
    },
    homeCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3fa375267baa2687" },
    searchPlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ce970a2013d00e8a" },
  },
  serverError: {
    metadata: {
      title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "565825b80000cf80" },
      description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "662ec4037e287960" },
    },
    monoLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "500f977b493749f2" },
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "662ec4037e287960" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1994f4309529a078" },
    tryAgainCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d8b8392e2c542950" },
    whatsappCta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6a40edf1fc87a29f" },
    footnote: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e3941ff84c85bbc5" },
  },
};
