import type { Translated } from "@/lib/i18n/types";
import type { CommonStrings } from "@/content/i18n/en/common";

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
export const common: Translated<CommonStrings> = {
  nav: {
    home: { value: "ہوم", source: "author", published: true, reviewed: true, sourceHash: "3a78695388b38b5c" },
    about: { value: "ہمارے بارے میں", source: "author", published: true, reviewed: true, sourceHash: "4efca0d10c5feb8e" },
    ministries: { value: "خدمتیں", source: "author", published: true, reviewed: true, sourceHash: "2886dec38d47fac0" },
    seminary: { value: "سیمینری", source: "author", published: true, reviewed: true, sourceHash: "72be8da89808691c" },
    sermons: { value: "واعظ", source: "author", published: true, reviewed: true, sourceHash: "37ad9d4c407fd2cd" },
    resources: { value: "وسائل", source: "author", published: true, reviewed: true, sourceHash: "e89b30aa1dc30a6a" },
    events: { value: "تقاریب", source: "author", published: true, reviewed: true, sourceHash: "8d14f6e72de8f18a" },
    prayer: { value: "دعا", source: "author", published: true, reviewed: true, sourceHash: "6e399f2787a0602f" },
    support: { value: "تعاون", source: "author", published: true, reviewed: true, sourceHash: "be91940b79f46910" },
    contact: { value: "رابطہ", source: "author", published: true, reviewed: true, sourceHash: "2b5c3d26721ae9c3" },
  },
  header: {
    supportCta: { value: "مشن کی حمایت کریں", source: "author", published: true, reviewed: true, sourceHash: "49b50063628cfcd3" },
    menuTitle: { value: "مینو", source: "author", published: true, reviewed: true, sourceHash: "99af6606ff9d6cd5" },
    menuOpen: { value: "مینو کھولیں", source: "author", published: true, reviewed: true, sourceHash: "b40b3713b43dc702" },
    menuClose: { value: "مینو بند کریں", source: "author", published: true, reviewed: true, sourceHash: "6ccd5c7856042d36" },
    primaryNavLabel: { value: "بنیادی نیویگیشن", source: "author", published: true, reviewed: true, sourceHash: "efe10c80ec8a9f38" },
    mobileNavLabel: { value: "موبائل نیویگیشن", source: "author", published: true, reviewed: true, sourceHash: "806f228ffbd42e4e" },
    languageSwitcherLabel: { value: "زبان", source: "author", published: true, reviewed: true, sourceHash: "a4fe65264ef7dbb3" },
    darkModeLabel: { value: "ڈارک موڈ", source: "author", published: true, reviewed: true, sourceHash: "9b7878aef90b527c" },
    lightModeLabel: { value: "لائٹ موڈ", source: "author", published: true, reviewed: true, sourceHash: "b4fcfbee4fb937d7" },
    themeToggleToLight: { value: "لائٹ موڈ فعال کریں", source: "author", published: true, reviewed: true, sourceHash: "bfa0cab91d75f7a4" },
    themeToggleToDark: { value: "ڈارک موڈ فعال کریں", source: "author", published: true, reviewed: true, sourceHash: "fc43ea9804c7f5da" },
  },
  utilityBar: {
    locations: { value: "کراچی اور فیصل آباد، پاکستان میں", source: "author", published: true, reviewed: true, sourceHash: "1b4a2b114e583e10" },
    phoneLabel: { value: "فون / واٹس ایپ", source: "author", published: true, reviewed: true, sourceHash: "2e2c97ab4237fe1b" },
  },
};