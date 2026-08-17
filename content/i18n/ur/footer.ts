import type { Translated } from "@/lib/i18n/types";
import type { FooterStrings } from "@/content/i18n/en/footer";

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
export const footer: Translated<FooterStrings> = {
  missionStatement: { value: "1982ء سے کراچی اور فیصل آباد میں خدمت انجام دینے والی کلیسیا، سیمینری اور تعلیمی مشن۔", source: "author", published: true, reviewed: true, sourceHash: "3f537cd3c5430605" },
  navigateHeading: { value: "صفحہ جات", source: "author", published: true, reviewed: true, sourceHash: "5ea5fbe811dbe99a" },
  ministriesHeading: { value: "خدمتیں", source: "author", published: true, reviewed: true, sourceHash: "2886dec38d47fac0" },
  ministriesLinks: {
    church: { value: "کلیسیا", source: "author", published: true, reviewed: true, sourceHash: "837aa0d985b27908" },
    seminary: { value: "بیت لحم سیمینری", source: "author", published: true, reviewed: true, sourceHash: "0ee81d84a2c817e6" },
    childrensEducation: { value: "بچوں کی تعلیم", source: "author", published: true, reviewed: true, sourceHash: "340c6a743f4566b6" },
    christianArticles: { value: "مسیحی مضامین", source: "author", published: true, reviewed: true, sourceHash: "7757967b0b658586" },
    lectures: { value: "لیکچرز", source: "author", published: true, reviewed: true, sourceHash: "d953c00b4a161106" },
    outreach: { value: "ترویجی خدمت", source: "author", published: true, reviewed: true, sourceHash: "f9f5b81f2696fd5b" },
  },
  contactHeading: { value: "رابطہ", source: "author", published: true, reviewed: true, sourceHash: "2b5c3d26721ae9c3" },
  requestPrayerLabel: { value: "دعا کی درخواست", source: "author", published: true, reviewed: true, sourceHash: "f4559c3380c0d748" },
  socialHeading: { value: "سوشل میڈیا", source: "author", published: true, reviewed: true, sourceHash: "641d1ef657bdfd9f" },
  socialPending: { value: "روابط جلد دستیاب ہوں گے", source: "author", published: true, reviewed: true, sourceHash: "3d263460528e2321" },
  privacy: { value: "رازداری", source: "author", published: true, reviewed: true, sourceHash: "54a57c3147c49f33" },
  notice: { value: "ویب سائٹ کا اعلان", source: "author", published: true, reviewed: true, sourceHash: "202abbece3b3c093" },
  copyright: { value: "جملہ حقوق محفوظ ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "21f29224bb655170" },
};