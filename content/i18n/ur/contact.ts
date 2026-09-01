import type { Translated } from "@/lib/i18n/types";
import type { ContactStrings } from "@/content/i18n/en/contact";

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
export const contact: Translated<ContactStrings> = {
  metadata: {
    title: { value: "", source: "author", published: true, reviewed: true, sourceHash: "7cf3ea94d90f460a" },
    description: { value: "", source: "author", published: true, reviewed: true, sourceHash: "5ac502f18b665bb7" },
  },
  breadcrumbLabel: { value: "رابطہ", source: "author", published: true, reviewed: true, sourceHash: "2b5c3d26721ae9c3" },
  masthead: {
    eyebrow: { value: "رابطہ کریں", source: "author", published: true, reviewed: true, sourceHash: "115e410f01dc4013" },
    title: { value: "منسٹری سے رابطہ کریں", source: "author", published: true, reviewed: true, sourceHash: "e3d5ef30bc7323c9" },
    standfirst: { value: "عبادتی خدمات، سیمنری، بچوں کی تعلیم، یا کسی بھی شہر کے دورے کے بارے میں دریافت کریں۔ اردو میں پیغامات خوش آئند ہیں۔ دُعا کے لیے، دُعا کا صفحہ استعمال کریں — یہ مکمل طور پر نجی ہے۔", source: "author", published: true, reviewed: true, sourceHash: "e47f99fd22a1eca4" },
    standfirstMobile: { value: "اردو میں پیغامات خوش آئند ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "184787c0982c8f0c" },
  },
  channels: {
    whatsapp: {
      kicker: { value: "تیز ترین", source: "author", published: true, reviewed: true, sourceHash: "7ef7a92e55a79eba" },
      heading: { value: "واٹس ایپ", source: "author", published: true, reviewed: true, sourceHash: "6a40edf1fc87a29f" },
      cta: { value: "واٹس ایپ کھولیں", source: "author", published: true, reviewed: true, sourceHash: "5ac4b2d1103718bf" },
    },
    email: {
      kicker: { value: "ای میل", source: "author", published: true, reviewed: true, sourceHash: "969ccbd3cf6300ec" },
      heading: { value: "پاسٹر کو لکھیں", source: "author", published: true, reviewed: true, sourceHash: "d2bfea05843c6fc7" },
      cta: { value: "ای میل بھیجیں", source: "author", published: true, reviewed: true, sourceHash: "27ae627d4eaf54d0" },
    },
    follow: {
      kicker: { value: "فالو کریں", source: "author", published: true, reviewed: true, sourceHash: "641d1ef657bdfd9f" },
      heading: { value: "فیس بک اور یوٹیوب", source: "author", published: true, reviewed: true, sourceHash: "8aefca5f20075420" },
      facebook: { value: "", source: "author", published: true, reviewed: true, sourceHash: "d41f5b4977ee05c6" },
      youtube: { value: "", source: "author", published: true, reviewed: true, sourceHash: "fb7accfff8c6f8ea" },
    },
  },
  cities: {
    eyebrow: { value: "ہم کہاں ہیں", source: "author", published: true, reviewed: true, sourceHash: "1ba88b77ba0f6e0d" },
    heading: { value: "دو شہر", source: "author", published: true, reviewed: true, sourceHash: "5ce83724ce33299b" },
    imagePlaceholder: { value: "", source: "author", published: true, reviewed: true, sourceHash: "6d01691f5df72383" },
    note: { value: "", source: "author", published: true, reviewed: true, sourceHash: "39ef5d7851d2d22c" },
    karachi: {
      name: { value: "کراچی، سندھ", source: "author", published: true, reviewed: true, sourceHash: "1716b042913b57f3" },
      addressLabel: { value: "پتہ", source: "author", published: true, reviewed: true, sourceHash: "56ef8f20955f2564" },
      address: { value: "ناصری چرچ، N 164، اسٹریٹ 18، 50/A، کورنگی", source: "author", published: true, reviewed: true, sourceHash: "14daef77f1896b03" },
      servicesLabel: { value: "عبادتی خدمات", source: "author", published: true, reviewed: true, sourceHash: "604dce445e326d95" },
      services: { value: "اوقات: اتوار صبح 9 بجے · جمعہ رات 8 بجے", source: "author", published: true, reviewed: true, sourceHash: "9642c9af8304c432" },
      thirdLabel: { value: "سنڈے اسکول", source: "author", published: true, reviewed: true, sourceHash: "5cf4c50ea2b98000" },
      thirdValue: { value: "ہفتہ وار", source: "author", published: true, reviewed: true, sourceHash: "2975132481a7a695" },
    },
    faisalabad: {
      name: { value: "فیصل آباد، پنجاب", source: "author", published: true, reviewed: true, sourceHash: "174d449c475e7271" },
      addressLabel: { value: "پتہ", source: "author", published: true, reviewed: true, sourceHash: "56ef8f20955f2564" },
      address: { value: "خنوآنہ، فیصل آباد", source: "author", published: true, reviewed: true, sourceHash: "14daef77f1896b03" },
      servicesLabel: { value: "عبادتی خدمات", source: "author", published: true, reviewed: true, sourceHash: "604dce445e326d95" },
      services: { value: "اوقات: اتوار صبح 9 بجے · جمعہ رات 8 بجے", source: "author", published: true, reviewed: true, sourceHash: "9642c9af8304c432" },
      thirdLabel: { value: "سیمنری", source: "author", published: true, reviewed: true, sourceHash: "72be8da89808691c" },
      thirdValue: { value: "ہفتے میں دو بار", source: "author", published: true, reviewed: true, sourceHash: "a6af944b15616a23" },
    },
  },
  form: {
  heading: { value: "پیغام بھیجیں", source: "author", published: true, reviewed: true, sourceHash: "56e541ad86e099c0" },
  subheading: { value: "منسٹری کی جانب سے pastornayyer@gmail.com سے جواب دیا جاتا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "ded698ec9f1ddea8" },
  nameLabel: { value: "نام", source: "author", published: true, reviewed: true, sourceHash: "dcd1d5223f73b3a9" },
  namePlaceholder: { value: "اپنا نام", source: "author", published: true, reviewed: true, sourceHash: "2c6b2e253c01fb2e" },
  emailLabel: { value: "ای میل", source: "author", published: true, reviewed: true, sourceHash: "969ccbd3cf6300ec" },
  emailPlaceholder: { value: "you@example.com", source: "author", published: true, reviewed: true, sourceHash: "53e6cdc30765aade" },
  phoneLabel: { value: "فون / واٹس ایپ", source: "author", published: true, reviewed: true, sourceHash: "2e2c97ab4237fe1b" },
  phoneOptional: { value: "(اختیاری)", source: "author", published: true, reviewed: true, sourceHash: "0059798b7f7023e4" },
  phonePlaceholder: { value: "03xx xxxxxxx", source: "author", published: true, reviewed: true, sourceHash: "cff6aea694f5be3d" },
  subjectLabel: { value: "موضوع", source: "author", published: true, reviewed: true, sourceHash: "68971283841aecdf" },
  subjectHelp: { value: "عمومی معلومات · کلیسیا اور عبادتی خدمات · سیمنری · بچوں کی تعلیم · وسائل · مشن کی معاونت", source: "author", published: true, reviewed: true, sourceHash: "c5de6e26c83bb1ba" },
  subjectOptions: {
    general: { value: "عمومی معلومات", source: "author", published: true, reviewed: true, sourceHash: "b780f79758b34c40" },
    church: { value: "کلیسیا اور عبادتی خدمات", source: "author", published: true, reviewed: true, sourceHash: "c3c55793ba48d3a4" },
    seminary: { value: "سیمنری", source: "author", published: true, reviewed: true, sourceHash: "72be8da89808691c" },
    childrensEducation: { value: "بچوں کی تعلیم", source: "author", published: true, reviewed: true, sourceHash: "340c6a743f4566b6" },
    resources: { value: "وسائل", source: "author", published: true, reviewed: true, sourceHash: "e89b30aa1dc30a6a" },
    support: { value: "مشن کی معاونت", source: "author", published: true, reviewed: true, sourceHash: "dae003904a947b1a" },
  },
  messageLabel: { value: "پیغام", source: "author", published: true, reviewed: true, sourceHash: "2f77668a9dfbf8d5" },
  messagePlaceholder: { value: "یہاں لکھیں — اردو یا انگریزی", source: "author", published: true, reviewed: true, sourceHash: "4883d9025077ec7f" },
  consentLabel: { value: "میں متفق ہوں کہ خدمت (منسٹری) ان تفصیلات کو میرے پیغام کا جواب دینے کے لیے استعمال کر سکتی ہے۔", source: "author", published: true, reviewed: true, sourceHash: "3fd6eb8e23b5fc29" },
  submitLabel: { value: "پیغام بھیجیں", source: "author", published: true, reviewed: true, sourceHash: "93a26b1eaff99b3a" },
  submitLabelSending: { value: "بھیجا جا رہا ہے…", source: "author", published: true, reviewed: true, sourceHash: "b8ed5279e897be5d" },
  footerNote: { value: "خودکار پیغامات (Spam) سے محفوظ۔ دُعا کی درخواستیں دُعا کے صفحے کے ذریعے بھیجی جانی چاہئیں، جہاں وہ صیغہ راز میں رہتی ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "1727dc5b1aed156a" },
  errors: {
    name: { value: "براہِ کرم اپنا نام درج کریں۔", source: "author", published: true, reviewed: true, sourceHash: "f9b561ae22951d84" },
    email: { value: "براہِ کرم اپنا ای میل درج کریں۔", source: "author", published: true, reviewed: true, sourceHash: "2401f704eb9f6b64" },
    message: { value: "براہِ کرم بھیجنے سے پہلے اپنا پیغام لکھیں۔", source: "author", published: true, reviewed: true, sourceHash: "2429ad8fd0446fdf" },
    consent: { value: "براہِ کرم بھیجنے سے پہلے تصدیق کریں۔", source: "author", published: true, reviewed: true, sourceHash: "4dd46afd786a9710" },
  },
},
success: {
  heading: { value: "آپ کا پیغام بھیج دیا گیا ہے۔", source: "author", published: true, reviewed: true, sourceHash: "cb93b4a42931e02c" },
  body: { value: "منسٹری کی جانب سے pastornayyer@gmail.com سے جواب دیا جائے گا، عموماً آپ کے فراہم کردہ ای میل پتے پر۔", source: "author", published: true, reviewed: true, sourceHash: "158c6dba508ecba9" },
  sendAnother: { value: "ایک اور پیغام بھیجیں", source: "author", published: true, reviewed: true, sourceHash: "c6ce3f02499ce3bb" },
  returnHome: { value: "ہوم پیج پر واپس جائیں", source: "author", published: true, reviewed: true, sourceHash: "bbcc935e4263ac40" },
},
failure: {
  heading: { value: "ہم آپ کا پیغام نہیں بھیج سکے۔", source: "author", published: true, reviewed: true, sourceHash: "22bb94e3c1601e08" },
  body: { value: "آپ کا پیغام ابھی فارم میں موجود ہے۔ براہِ کرم دوبارہ کوشش کریں، یا واٹس ایپ کے ذریعے براہِ راست خدمت (منسٹری) سے رابطہ کریں:", source: "author", published: true, reviewed: true, sourceHash: "d42bf4bde6de3e9e" },
},
gettingThere: {
    eyebrow: { value: "یہاں کیسے پہنچیں", source: "author", published: true, reviewed: true, sourceHash: "1258a77d6e5cd4b3" },
    body: { value: "اگر آپ پہلی بار ہمارے پاس آ رہے ہیں تو ہمیں بتائیں کہ آپ کس عبادتی خدمت میں شرکت کا ارادہ رکھتے ہیں، اور کوئی آپ کے استقبال کے لیے موجود ہوگا۔ ہر مقام پر بغیر سیڑھیوں کے رسائی اور دستیاب سہولیات کے بارے میں معلومات درخواست پر فراہم کی جاتی ہیں۔ کسی مخصوص مقام تک پہنچنے کے لیے واٹس ایپ پر ہم سے رابطہ کریں اور ہم آپ کو لوکیشن پن بھیج دیں گے۔", source: "author", published: true, reviewed: true, sourceHash: "c7054e78cedb890b" },
    cta: { value: "واٹس ایپ پر راستہ معلوم کریں", source: "author", published: true, reviewed: true, sourceHash: "e83a6e93561e8497" },
    karachi: {
      name: { value: "کراچی، سندھ", source: "author", published: true, reviewed: true, sourceHash: "1716b042913b57f3" },
      streetLabel: { value: "گلی کا پتہ", source: "author", published: true, reviewed: true, sourceHash: "8a386dd14cb9a70f" },
      street: { value: "N 164, St 18, 50/A, کورنگی", source: "author", published: true, reviewed: true, sourceHash: "14daef77f1896b03" },
      landmarkLabel: { value: "قریبی مشہور جگہ", source: "author", published: true, reviewed: true, sourceHash: "a10ff7ba34445c30" },
      landmark: { value: "خلفائے راشدین فیملی پارک۔", source: "author", published: true, reviewed: true, sourceHash: "14daef77f1896b03" },
      transitLabel: { value: "بس یا رکشہ کے ذریعے", source: "author", published: true, reviewed: true, sourceHash: "9e8fdf6e388c73ac" },
      transit: { value: "کورنگی 50/A کے لیے مقامی راستہ", source: "author", published: true, reviewed: true, sourceHash: "3abbc18ad6309cf0" },
      fourthLabel: { value: "پارکنگ", source: "author", published: true, reviewed: true, sourceHash: "4a64d6c849df0110" },
      fourthValue: { value: "قریب ہی دستیاب ہے", source: "author", published: true, reviewed: true, sourceHash: "14daef77f1896b03" },
    },
    faisalabad: {
      name: { value: "فیصل آباد، پنجاب", source: "author", published: true, reviewed: true, sourceHash: "174d449c475e7271" },
      streetLabel: { value: "گلی کا پتہ", source: "author", published: true, reviewed: true, sourceHash: "8a386dd14cb9a70f" },
      street: { value: "کھنوآنہ، فیصل آباد", source: "author", published: true, reviewed: true, sourceHash: "14daef77f1896b03" },
      landmarkLabel: { value: "قریبی مشہور جگہ", source: "author", published: true, reviewed: true, sourceHash: "a10ff7ba34445c30" },
      landmark: { value: "-", source: "author", published: true, reviewed: true, sourceHash: "14daef77f1896b03" },
      transitLabel: { value: "بس یا رکشہ کے ذریعے", source: "author", published: true, reviewed: true, sourceHash: "9e8fdf6e388c73ac" },
      transit: { value: "کھنوآنہ کے لیے مقامی راستہ", source: "author", published: true, reviewed: true, sourceHash: "3abbc18ad6309cf0" },
      fourthLabel: { value: "سیمنری کا داخلہ", source: "author", published: true, reviewed: true, sourceHash: "9b6d33ce19948c9d" },
      fourthValue: { value: "مرکزی دروازہ", source: "author", published: true, reviewed: true, sourceHash: "14daef77f1896b03" },
    },
    note: { value: "اگر آپ پہلی بار آ رہے ہیں تو ہمیں بتائیں کہ آپ کس عبادتی خدمت میں شرکت کا ارادہ رکھتے ہیں، اور کوئی آپ کے استقبال کے لیے موجود ہوگا۔ ہر مقام پر رسائی اور دستیاب سہولیات کے بارے میں معلومات درخواست پر فراہم کی جاتی ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "c9796ef76e59fa8d" },
  },
  prayerCta: {
    heading: { value: "کیا آپ دعا کی درخواست کرنا چاہیں گے؟", source: "author", published: true, reviewed: true, sourceHash: "136a079570f05636" },
    body: { value: "دعا کی درخواستیں صیغہ راز میں رکھی جاتی ہیں اور کبھی شائع نہیں کی جاتیں۔", source: "author", published: true, reviewed: true, sourceHash: "27a9b6a0c9c43246" },
    cta: { value: "دعا کی درخواست کریں", source: "author", published: true, reviewed: true, sourceHash: "f4559c3380c0d748" },
  }
};
