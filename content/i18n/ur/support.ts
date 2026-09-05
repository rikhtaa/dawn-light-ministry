import type { Translated } from "@/lib/i18n/types";
import type { SupportStrings } from "@/content/i18n/en/support";

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
export const support: Translated<SupportStrings> = {
  metadata: {
    title: { value: "مشن میں تعاون کریں — ڈان آف لائٹ منسٹری", source: "author", published: true, reviewed: true, sourceHash: "b350b20d98ff7a41" },
    description: { value: "دعا، اشتراک، اور ایزی پیسہ یا بینک ٹرانسفر کے ذریعے عطیہ دینا آج ڈان آف لائٹ منسٹری کا ساتھ دینے کے عملی طریقے ہیں۔ جب تنظیم کے بینکنگ اور فراہم کنندہ کے انتظامات منظور ہو جائیں گے تو خودکار آن لائن عطیات کا آغاز ہو جائے گا۔", source: "author", published: true, reviewed: true, sourceHash: "eb9ac3b0b5a1162b" },
  },
  breadcrumbLabel: { value: "تعاون", source: "author", published: true, reviewed: true, sourceHash: "be91940b79f46910" },
  masthead: {
    eyebrow: { value: "منسٹری کے ساتھ کھڑے ہوں", source: "author", published: true, reviewed: true, sourceHash: "be53da061f77c93f" },
    title: { value: "تعاون تدریس، کتب اور اسکول کی فیسوں پر صرف ہوتا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "db5cd60220c00f87" },
    standfirst: { value: "مدد کا صرف ایک طریقہ نہیں ہے، اور منسٹری صرف پیسوں میں تعاون کا حساب نہیں لگاتی۔ دعا اور وقت بھی اتنی ہی اہمیت رکھتے ہیں جتنا کہ عطیہ دینا۔", source: "author", published: true, reviewed: true, sourceHash: "e399ced65ec37543" },
    standfirstMobile: { value: "دعا اور وقت اتنے ہی اہم ہیں جتنے کہ پیسےـ", source: "author", published: true, reviewed: true, sourceHash: "0b38212aded4539e" },
  },
  cards: {
    pray: {
      kicker: { value: "01 · دعا", source: "author", published: true, reviewed: true, sourceHash: "95c6165d302e9317" },
      heading: { value: "ہمارے ساتھ دعا کریں", source: "author", published: true, reviewed: true, sourceHash: "46fb31bb840fe763" },
      body: { value: "منسٹری سے پوچھیں کہ کس چیز کے لیے دعا کرنی ہے، اور اپنی درخواستیں بھیجیں۔ یہ وہ تعاون ہے جس کی منسٹری سب سے پہلے درخواست کرتی ہے۔", source: "author", published: true, reviewed: true, sourceHash: "0ca8da3dc306112f" },
      cta: { value: "دعا کی درخواست کریں", source: "author", published: true, reviewed: true, sourceHash: "f4559c3380c0d748" },
    },
    share: {
      kicker: { value: "02 · شیئر اور خدمت کریں", source: "author", published: true, reviewed: true, sourceHash: "f29dd87b82488458" },
      heading: { value: "کام کو آگے بڑھائیں، اپنا وقت دیں", source: "author", published: true, reviewed: true, sourceHash: "1fe11e2d2fcc8371" },
      body: { value: "دوسروں کو سیمنری اور بچوں کی تعلیم کے کام کے بارے میں بتائیں، یا ذاتی طور پر مدد کرنے کے بارے میں پاسبان سے بات کریں۔", source: "author", published: true, reviewed: true, sourceHash: "dcbb3bfc2ec33ae7" },
      cta: { value: "پاسبان سے بات کریں", source: "author", published: true, reviewed: true, sourceHash: "0253821a7fc67ef3" },
      ctaMobile: { value: "واٹس ایپ", source: "author", published: true, reviewed: true, sourceHash: "6a40edf1fc87a29f" },
    },
    give: {
      kicker: { value: "03 · عطیہ دیں", source: "author", published: true, reviewed: true, sourceHash: "c540e5515a6d6e1d" },
      badge: { value: "دستی ادائیگی", source: "author", published: true, reviewed: true, sourceHash: "900363bc5b8bf5f1" },
      heading: { value: "تعلیم کے لیے عطیہ دیں", source: "author", published: true, reviewed: true, sourceHash: "f53a8be087ec7d17" },
      body: { value: "ذیل میں ایزی پیسہ یا بینک ٹرانسفر کے ذریعے براہِ راست اپنا تحفہ بھیجیں۔ جب تنظیم کے بینکنگ اور ادائیگی فراہم کرنے والے کے انتظامات منظور ہو جائیں گے تو خودکار آن لائن عطیات کا آغاز ہو جائے گا۔", source: "author", published: true, reviewed: true, sourceHash: "0cb774d66b8f2653" },
      bodyMobile: { value: "ذیل میں ایزی پیسہ یا بینک ٹرانسفر کے ذریعے عطیہ دیں۔ منظوری کے بعد آن لائن عطیات شروع ہوں گے۔", source: "author", published: true, reviewed: true, sourceHash: "8db62fbce1fc5c10" },
      cta: { value: "ادائیگی کی تفصیلات دیکھیں", source: "author", published: true, reviewed: true, sourceHash: "0c40dfa3459a9a3b" },
    },
  },
  manualGiving: {
    eyebrow: { value: "براہِ راست عطیہ دیں", source: "author", published: true, reviewed: true, sourceHash: "e32be4cb4d6adc06" },
    heading: { value: "منسٹری کا تعاون کریں", source: "author", published: true, reviewed: true, sourceHash: "849fccbadd1158fb" },
    intro: { value: "یہ دستی ادائیگی کے طریقے ہیں۔ ذیل کی تفصیلات استعمال کرتے ہوئے براہِ راست اپنا تحفہ بھیجیں، پھر منسٹری کو مطلع کریں تاکہ اس کی رسید دی جا سکے — کوئی رقم طے شدہ نہیں ہے اور اس سائیٹ پر کچھ بھی خودکار طور پر پراسیس نہیں ہوتا۔", source: "author", published: true, reviewed: true, sourceHash: "dc0f8439fd4d65c4" },
    easypaisa: {
      heading: { value: "ایزی پیسہ", source: "author", published: true, reviewed: true, sourceHash: "9be65d57c8691b35" },
      accountHolderLabel: { value: "اکاؤنٹ ہولڈر", source: "author", published: true, reviewed: true, sourceHash: "53477ca834fa478d" },
      numberLabel: { value: "ایزی پیسہ نمبر", source: "author", published: true, reviewed: true, sourceHash: "5bb58b8e6f48c195" },
      instruction: { value: "ایزی پیسہ کا استعمال کرتے ہوئے اپنا تعاون بھیجیں۔", source: "author", published: true, reviewed: true, sourceHash: "46e5ec2956139e1f" },
      qrAlt: { value: "نیر گل کے اکاؤنٹ کے لیے ایزی پیسہ کی QR کوڈ", source: "author", published: true, reviewed: true, sourceHash: "eff9e58a2832c4a4" },
    },
    bankTransfer: {
      heading: { value: "بینک ٹرانسفر", source: "author", published: true, reviewed: true, sourceHash: "ee82ae2801cf9097" },
      accountHolderLabel: { value: "اکاؤنٹ ہولڈر", source: "author", published: true, reviewed: true, sourceHash: "53477ca834fa478d" },
      bankLabel: { value: "بینک", source: "author", published: true, reviewed: true, sourceHash: "676c471bc8dc3d13" },
      accountNumberLabel: { value: "اکاؤنٹ نمبر", source: "author", published: true, reviewed: true, sourceHash: "f7573b7f5db0b550" },
      ibanLabel: { value: "آئی بی اے این (IBAN)", source: "author", published: true, reviewed: true, sourceHash: "7e345c3ba789219b" },
      branchLabel: { value: "برانچ", source: "author", published: true, reviewed: true, sourceHash: "52656e8104eef3fd" },
      instruction: { value: "اپنا تعاون براہِ راست بینک اکاؤنٹ میں منتقل کریں۔", source: "author", published: true, reviewed: true, sourceHash: "235ee57a955453c4" },
      qrAlt: { value: "نیر کے اکاؤنٹ کے لیے HBL بینک ٹرانسفر کا QR کوڈ", source: "author", published: true, reviewed: true, sourceHash: "964e6814e4e7c57b" },
    },
    copyLabel: { value: "کاپی کریں", source: "author", published: true, reviewed: true, sourceHash: "e21f935f11d7e966" },
    copiedLabel: { value: "کاپی ہو گیا", source: "author", published: true, reviewed: true, sourceHash: "8d525e5f158b9afe" },
    afterGiving: { value: "اپنا تحفہ بھیجنے کے بعد، منسٹری کو واٹس ایپ پیغام یا ای میل کرنا اس بات کی تصدیق کرنے میں مدد کرتا ہے کہ یہ موصول ہو گیا تھا۔", source: "author", published: true, reviewed: true, sourceHash: "32feb3ef2fda8ba1" },
  },
  whereSupportGoes: {
    eyebrow: { value: "تعاون کہاں صرف ہوتا ہے", source: "author", published: true, reviewed: true, sourceHash: "a4c6fda1d6895291" },
    heading: { value: "تین اخراجات جو منسٹری اٹھاتی ہے", source: "author", published: true, reviewed: true, sourceHash: "b58b2c6f23abdaf2" },
    costs: {
      schoolFees: {
        label: { value: "اسکول کی فیس", source: "author", published: true, reviewed: true, sourceHash: "4af4ff3233484ed3" },
        body: { value: "مسیحی بچوں کو تعلیم جاری رکھنے میں مدد دینا", source: "author", published: true, reviewed: true, sourceHash: "5c6ff90e2ab56111" },
      },
      books: {
        label: { value: "مفت کتابیں", source: "author", published: true, reviewed: true, sourceHash: "27f098b67115bb69" },
        body: { value: "بائبل اور مسیحی تعلیمی مواد، جو بالکل مفت فراہم کیا جاتا ہے", source: "author", published: true, reviewed: true, sourceHash: "19902f69915d036c" },
      },
      teaching: {
        label: { value: "تدریس", source: "author", published: true, reviewed: true, sourceHash: "63c34f0d4cc58d7e" },
        body: { value: "سیمنری کی کلاسیں، لیکچرز اور مضامین کی تحریر", source: "author", published: true, reviewed: true, sourceHash: "552f76d281f5163a" },
      },
    },
    note: { value: "اخراجات کی کوئی تفصیلی فہرست، کل جمع شدہ رقم، یا مدد پانے والے بچوں کی تعداد شائع نہیں کی جاتی۔ منسٹری نے یہ اعداد و شمار فراہم نہیں کیے ہیں، اور نہ ہی کوئی اندازہ لگایا جائے گا۔", source: "author", published: true, reviewed: true, sourceHash: "a82afc284783036c" },
  },
  beforeGivingOpens: {
    heading: { value: "آن لائن عطیات شروع ہونے سے پہلے", source: "author", published: true, reviewed: true, sourceHash: "5e55363444a3c306" },
    body: { value: "تنظیم ان اقدامات پر کام کر رہی ہے جو کسی خودکار آن لائن ادائیگی کے طریقے کو شائع کرنے سے پہلے ضروری ہیں۔ دریں اثنا، دستی ایزی پیسہ اور بینک ٹرانسفر اوپر دستیاب ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "46bebf495b1c9cbd" },
    checklist: {
      legal: { value: "قانونی اور تنظیمی حیثیت کی تصدیق", source: "author", published: true, reviewed: true, sourceHash: "da7e9aaf499f9639" },
      kyc: { value: "بینک اکاؤنٹ کی ملکیت اور کے وائی سی (KYC) کی تکمیل", source: "author", published: true, reviewed: true, sourceHash: "6f9ae353d074ff95" },
      eligibility: { value: "عطیات جمع کرنے کی اہلیت کی تصدیق", source: "author", published: true, reviewed: true, sourceHash: "5232d59dd229ceca" },
      receipts: { value: "رسیدوں اور اکاؤنٹنگ کے عمل پر اتفاق", source: "author", published: true, reviewed: true, sourceHash: "3c90e6225d5c69bf" },
      contract: { value: "ادائیگی فراہم کرنے والے ادارے کے ساتھ معاہدے پر دستخط", source: "author", published: true, reviewed: true, sourceHash: "9dc74b447cffe159" },
    },
  },
  inTheMeantime: {
    eyebrow: { value: "اس دوران", source: "author", published: true, reviewed: true, sourceHash: "ed893e683f08b9f6" },
    heading: { value: "کام میں تعاون کے سلسلے میں براہِ راست پاسبان نیر گل سے بات کریں۔", source: "author", published: true, reviewed: true, sourceHash: "5df2f03f1f75cba3" },
    whatsappCta: { value: "واٹس ایپ", source: "author", published: true, reviewed: true, sourceHash: "6a40edf1fc87a29f" },
    emailCta: { value: "ای میل بھیجیں", source: "author", published: true, reviewed: true, sourceHash: "27ae627d4eaf54d0" },
  },
};