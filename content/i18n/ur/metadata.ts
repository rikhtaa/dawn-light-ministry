import type { Translated } from "@/lib/i18n/types";
import type { MetadataStrings } from "@/content/i18n/en/metadata";

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
export const metadata: Translated<MetadataStrings> = {
  title: { value: "نور کی صبح", source: "author", published: true, reviewed: true, sourceHash: "5571411e1357d4a4" },
  description: { value: "نور کی صبح کی وزارت — بیت لحم کلیسیا، سیمنری اور تعلیمی مشن، جو 1982ء سے کراچی اور فیصل آباد، پاکستان میں خدمت کر رہا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "4d9b651be9b73b63" },
};