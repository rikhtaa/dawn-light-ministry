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
    title: { value: "", source: "author", published: true, reviewed: true, sourceHash: "9fd36c59d55eb9b5" },
    description: { value: "", source: "author", published: true, reviewed: true, sourceHash: "f9241123435c0efa" },
  },
  breadcrumbLabel: { value: "دُعا", source: "author", published: true, reviewed: true, sourceHash: "6e399f2787a0602f" },
  masthead: {
    eyebrow: { value: "دُعا", source: "author", published: true, reviewed: true, sourceHash: "6e399f2787a0602f" },
    title: { value: "کیا آپ کو دُعا کی ضرورت ہے؟", source: "author", published: true, reviewed: true, sourceHash: "361aca69c0be0a9f" },
    standfirst: { value: "پاسٹر کو لکھیں۔ خدمت (منسٹری) کی جانب سے تمام درخواستیں محفوظ طریقے سے موصول کی جاتی ہیں، پڑھی جاتی ہیں اور ان کے لیے دُعا کی جاتی ہے۔ انہیں مکمل طور پر صیغہ راز میں رکھا جاتا ہے اور کبھی بھی ویب سائٹ پر ظاہر یا کسی کے ساتھ شیئر نہیں کیا جاتا۔", source: "author", published: true, reviewed: true, sourceHash: "c15366a02f30ecd7" },
  },
  howThisWorks: {
    heading: { value: "یہ کیسے کام کرتا ہے", source: "author", published: true, reviewed: true, sourceHash: "bdbd7706de64ff6a" },
    steps: {
      write: {
        number: { value: "01", source: "author", published: true, reviewed: true, sourceHash: "938db8c9f82c8cb5" },
        title: { value: "آپ لکھتے ہیں", source: "author", published: true, reviewed: true, sourceHash: "c304911f6e67f417" },
        body: { value: "اردو یا انگریزی میں۔ آپ کا نام اور ای میل دینا لازمی نہیں — درخواست گمنام طور پر بھی بھیجی جا سکتی ہے۔", source: "author", published: true, reviewed: true, sourceHash: "8f63dd2f4e1bdaeb" },
      },
      receive: {
        number: { value: "02", source: "author", published: true, reviewed: true, sourceHash: "a953f09a1b6b6725" },
        title: { value: " منسٹری اسے نجی طور پر وصول کرتی ہے", source: "author", published: true, reviewed: true, sourceHash: "c93a6e325bfb06a4" },
        body: { value: " یہ براہ راست پاسٹر تک پہنچتی ہے۔ اسے نہ تو شائع کیا جاتا ہے، نہ فہرست میں شامل کیا جاتا ہے اور نہ ہی کسی اور تک پہنچایا جاتا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "60c5d9240762bcf8" },
      },
      pray: {
        number: { value: "03", source: "author", published: true, reviewed: true, sourceHash: "0b8efa5a3bf10441" },
        title: { value: " ہم دُعا کرتے ہیں", source: "author", published: true, reviewed: true, sourceHash: "4ff9ba3121aef0b4" },
        body: { value: "اگر آپ جوابی رابطے کی درخواست کرتے ہیں اور اپنا ای میل فراہم کرتے ہیں، تو منسٹری کا کوئی نمائندہ آپ کو جواب دے سکتا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "577c526cb91b834d" },
      },
    },
  },
  urgentNotice: { value: "اگر آپ کی صورتحال ہنگامی یا خطرناک ہے، تو براہِ کرم مقامی ایمرجنسی سروسز سے رابطہ کریں۔ یہ ویب سائٹ کوئی ایمرجنسی سروس نہیں ہے اور ہو سکتا ہے کہ درخواستیں فوری طور پر نہ پڑھی جائیں۔", source: "author", published: true, reviewed: true, sourceHash: "0b226e3e59ea3ee6" },
  speakToSomeone: {
    heading: { value: "کیا آپ کسی سے بات کرنا پسند کریں گے؟", source: "author", published: true, reviewed: true, sourceHash: "e8bcb0a5f7af83f8" },
    body: { value: "", source: "author", published: true, reviewed: true, sourceHash: "8e7bbe4f2b2ea768" },
  },
  form: {
    heading: { value: "دُعا کی درخواست کریں", source: "author", published: true, reviewed: true, sourceHash: "f4559c3380c0d748" },
    subheading: { value: "صرف دُعا کی درخواست لکھنا لازمی ہے۔", source: "author", published: true, reviewed: true, sourceHash: "128b12853c41f696" },
    nameLabel: { value: "نام", source: "author", published: true, reviewed: true, sourceHash: "dcd1d5223f73b3a9" },
    nameOptional: { value: "اختیاری", source: "author", published: true, reviewed: true, sourceHash: "0059798b7f7023e4" },
    namePlaceholder: { value: "آپ کا نام", source: "author", published: true, reviewed: true, sourceHash: "2c6b2e253c01fb2e" },
    emailLabel: { value: "ای میل", source: "author", published: true, reviewed: true, sourceHash: "969ccbd3cf6300ec" },
    emailOptional: { value: "اختیاری — صرف اس صورت میں اگر آپ جواب چاہتے ہیں)", source: "author", published: true, reviewed: true, sourceHash: "4c9d4e8200d44ea2" },
    emailPlaceholder: { value: "you@example.com", source: "author", published: true, reviewed: true, sourceHash: "53e6cdc30765aade" },
    requestLabel: { value: "آپ کی دُعا کی درخواست", source: "author", published: true, reviewed: true, sourceHash: "63c6f063fef2eaca" },
    requestPlaceholder: { value: "یہاں لکھیں — اردو یا انگریزی میں", source: "author", published: true, reviewed: true, sourceHash: "4883d9025077ec7f" },
    requestErrorEmpty: { value: "", source: "author", published: true, reviewed: true, sourceHash: "7f03f75bd3fd5dc5" },
    followUpLabel: { value: "آپ اس درخواست کے حوالے سے مجھ سے رابطہ کر سکتے ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "b56b0f0a01341d18" },
    consentLabel: { value: "میں سمجھتا/سمجھتی ہوں کہ یہ درخواست نجی طور پر خدمت (منسٹری) کو بھیجی جا رہی ہے اور اسے شائع نہیں کیا جائے گا۔", source: "author", published: true, reviewed: true, sourceHash: "17177edbe0cb0123" },
    consentErrorEmpty: { value: "", source: "author", published: true, reviewed: true, sourceHash: "4eb22ff8709cf72c" },
    submitLabel: { value: "دُعا کی درخواست بھیجیں", source: "author", published: true, reviewed: true, sourceHash: "4d3f1f9688155d39" },
    submitLabelSending: { value: "", source: "author", published: true, reviewed: true, sourceHash: "b8ed5279e897be5d" },
    sendingNote: { value: "", source: "author", published: true, reviewed: true, sourceHash: "a8fb19d8875ece07" },
    footerNote: { value: " (Spam) سے محفوظ۔ آپ کی درخواست آپ کے براؤزر میں محفوظ نہیں ہوتی اور نہ ہی اسے اینالیٹکس (Analytics) کا حصہ بنایا جاتا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "202fbbd21eb222a1" },
  },
  success: {
    heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "b50e69820c559fb4" },
    body: { value: "", source: "author", published: true, reviewed: true, sourceHash: "253650ce251fcc45" },
    sendAnother: { value: "", source: "author", published: true, reviewed: true, sourceHash: "50b6a80f6a986778" },
    returnHome: { value: "", source: "author", published: true, reviewed: true, sourceHash: "bbcc935e4263ac40" },
  },
  failure: {
    heading: { value: "", source: "author", published: true, reviewed: true, sourceHash: "da6b0554d86a57f6" },
    body: { value: "", source: "author", published: true, reviewed: true, sourceHash: "d42bf4bde6de3e9e" },
  },
};
