import type { Translated } from "@/lib/i18n/types";
import type { EventsStrings } from "@/content/i18n/en/events";

// /**
//  * GENERATED FILE — do not hand-edit the structure or add entries by hand.
//  * Produced by `npm run i18n:generate -- --locale=ur`
//  * (scripts/i18n/generate.ts), which calls the configured TranslationProvider
//  * (lib/i18n/translation-provider.ts) for any entry whose sourceHash no
//  * longer matches its English source. Regenerating preserves every entry
//  * whose sourceHash still matches exactly, byte-for-byte — it never
//  * overwrites an existing translation on its own.
//  *
//  * `published` controls whether this value renders on the live site at all
//  * (see lib/i18n/t.ts); `reviewed` records whether a fluent human has
//  * actually checked it. No tier auto-publishes — every machine translation,
//  * including "label" (pure UI chrome), is written `published: false`. A
//  * human has to review it and flip both `reviewed` and `published` here
//  * by hand before it reaches visitors. scripts/i18n/shared.ts's
//  * `contentTiers` ("label"/"content"/"sensitive"/"critical") only affects
//  * review *priority* in `npm run i18n:review -- --locale=ur`, not
//  * whether something publishes. See HANDOFF.md §21.
//  */
export const events: Translated<EventsStrings> = {
  metadata: {
    title: { value: "تقریبات — ڈان آف لائٹ منسٹری", source: "author", published: true, reviewed: true, sourceHash: "d2f11617e5a108ba" },
    description: { value: "پاکستان کے شہروں کراچی اور فیصل آباد میں ڈان آف لائٹ منسٹری کی طرف سے خصوصی اجتماعات، لیکچرز اور سیمنری کے مواقع — جب طے پائیں تو یہاں درج ہوتے ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "c9cd068788a3dbd5" },
  },
  masthead: {
    eyebrow: { value: "اجتماعات", source: "author", published: true, reviewed: true, sourceHash: "e8da9e2b1edffc7c" },
    title: { value: "تقریبات", source: "author", published: true, reviewed: true, sourceHash: "8d14f6e72de8f18a" },
    standfirst: { value: "جب بھی خصوصی اجتماعات، لیکچرز اور سیمنری کی تقریبات طے پاتی ہیں، تو انہیں یہاں درج کیا جاتا ہے۔ باقاعدہ عبادات اور کلاسیں اپنے معمول کے مطابق جاری رہتی ہیں، چاہے نیچے کوئی تقریب ظاہر ہو یا نہ ہو۔", source: "author", published: true, reviewed: true, sourceHash: "bfcbd26a98b6b888" },
  },
  emptyState: {
    kicker: { value: "کوئی تقریب طے شدہ نہیں", source: "author", published: true, reviewed: true, sourceHash: "61c8091bab4aa222" },
    heading: { value: "اس وقت کوئی تقریب طے شدہ نہیں ہے۔", source: "author", published: true, reviewed: true, sourceHash: "0e2d0edf69f73afa" },
    body: { value: "جب منسٹری کسی اجتماع کا اعلان کرے گی تو وہ یہاں ظاہر ہوگا۔ اس دوران، عبادات اور کلاسیں اپنے ہفتہ وار معمول کے مطابق جاری ہیں، اور آپ شامل ہونے کے لیے خوش آمدید ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "15ae811de24a5f62" },
    primaryCta: { value: "منسٹری سے رابطہ کریں", source: "author", published: true, reviewed: true, sourceHash: "e3d5ef30bc7323c9" },
    secondaryCta: { value: "ہماری وزارتیں دیکھیں", source: "author", published: true, reviewed: true, sourceHash: "5be3e085225688b8" },
  },
  emptyStateMobile: {
    heading: { value: "اس وقت کوئی تقریب طے شدہ نہیں ہے۔", source: "author", published: true, reviewed: true, sourceHash: "fac7756de4730144" },
    body: { value: "عبادات اور کلاسیں حسبِ معمول جاری ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "9a5bb9562c7d2b01" },
  },
  weeklyRhythm: {
    heading: { value: "ہفتہ وار نظام الاوقات", source: "author", published: true, reviewed: true, sourceHash: "5a3b15c3d1d7e306" },
    churchServices: {
      label: { value: "کلیسیا کی عبادتی خدمات", source: "author", published: true, reviewed: true, sourceHash: "d689dfc65f73423c" },
      value: { value: "ہفتے میں دو مرتبہ", source: "author", published: true, reviewed: true, sourceHash: "9271d038d4dfaec3" },
    },
    sundaySchool: {
      label: { value: "سنڈے اسکول", source: "author", published: true, reviewed: true, sourceHash: "5cf4c50ea2b98000" },
      value: { value: "ہفتہ وار", source: "author", published: true, reviewed: true, sourceHash: "2975132481a7a695" },
    },
    seminaryClasses: {
      label: { value: "سیمنری کی کلاسیں", source: "author", published: true, reviewed: true, sourceHash: "f3e921d9206c90c4" },
      value: { value: "ہفتے میں تین مرتبہ", source: "author", published: true, reviewed: true, sourceHash: "4dcffcb5fb7eaeb7" },
    },
    holyCommunion: {
      label: { value: "مقدس عشائے ربانی", source: "author", published: true, reviewed: true, sourceHash: "46097bcaa37d2034" },
      value: { value: "ماہانہ", source: "author", published: true, reviewed: true, sourceHash: "9b11f6b707d2a03e" },
    },
    confirmSuffix: { value: "", source: "author", published: true, reviewed: true, sourceHash: "e3b0c44298fc1c14" },
  },
  filters: {
    upcoming: { value: "آنے والے", source: "author", published: true, reviewed: true, sourceHash: "5f1a2542e4e4ca5e" },
    past: { value: "ماضی", source: "author", published: true, reviewed: true, sourceHash: "ca1530e8d7017547" },
  },
  row: {
    register: { value: "رجستر کریں", source: "author", published: true, reviewed: true, sourceHash: "bb7234ec12451361" },
    details: { value: "تفصیلات", source: "author", published: true, reviewed: true, sourceHash: "45989de49fb7f66d" },
    noLongerTakingPlace: { value: "مزید منعقد نہیں ہو رہا", source: "author", published: true, reviewed: true, sourceHash: "5657919ec1c4d990" },
  },
  pagination: {
    showing: { value: "دکھایا جا رہا ہے", source: "author", published: true, reviewed: true, sourceHash: "d604310a789a1848" },
    of: { value: "میں سے", source: "author", published: true, reviewed: true, sourceHash: "28391d3bc64ec15c" },
    eventsLabel: { value: "تقریبات", source: "author", published: true, reviewed: true, sourceHash: "862417b9e7c3720b" },
  },
  detail: {
    status: {
      open: { value: "رجستریشن جاری ہے", source: "author", published: true, reviewed: true, sourceHash: "86babcde8afda2a3" },
      closed: { value: "بند ہے", source: "author", published: true, reviewed: true, sourceHash: "c21ead0614e7e1b7" },
      cancelled: { value: "منسوخ", source: "author", published: true, reviewed: true, sourceHash: "d353a99eb4556847" },
      completed: { value: "مکمل شدہ", source: "author", published: true, reviewed: true, sourceHash: "22a970d2e5b1cc23" },
    },
    meta: {
      date: { value: "تاریخ", source: "author", published: true, reviewed: true, sourceHash: "99c40ab405926cb5" },
      time: { value: "وقت", source: "author", published: true, reviewed: true, sourceHash: "33b93476cf597a33" },
      location: { value: "مقام", source: "author", published: true, reviewed: true, sourceHash: "15b61974b2707a7b" },
    },
    action: {
      heading: { value: "شرکت کریں", source: "author", published: true, reviewed: true, sourceHash: "1ad345d68ed2b4ce" },
      register: { value: "رجستر کریں", source: "author", published: true, reviewed: true, sourceHash: "bb7234ec12451361" },
      whatsapp: { value: "واٹس ایپ کے ذریعے پوچھیں", source: "author", published: true, reviewed: true, sourceHash: "bd630e62beeac823" },
      closedNote: { value: "اس تقریب کے لیے رجستریشن بند ہے۔", source: "author", published: true, reviewed: true, sourceHash: "406aea5b6c4686dd" },
      cancelledHeading: { value: "یہ تقریب منسوخ کر دی گئی ہے", source: "author", published: true, reviewed: true, sourceHash: "e01adbb52a811322" },
      completedHeading: { value: "یہ تقریب اختتام پذیر ہو چکی ہے", source: "author", published: true, reviewed: true, sourceHash: "bdd508f1f26e42c5" },
      completedNote: { value: "تشریف لانے والے تمام احباب کا شکریہ۔", source: "author", published: true, reviewed: true, sourceHash: "7e45e7973d519f06" },
    },
    about: {
      heading: { value: "اس تقریب کے بارے میں", source: "author", published: true, reviewed: true, sourceHash: "3cae814cc8c2d447" },
      fallbackBody: { value: "[فرضی/پہلے سے طے شدہ — تقریب کی تفصیل فراہم کی جانی ہے]", source: "author", published: true, reviewed: true, sourceHash: "03627a19784b4fc4" },
    },
    programme: {
      heading: { value: "پروگرام", source: "author", published: true, reviewed: true, sourceHash: "30556a7a38a54f79" },
    },
    facts: {
      heading: { value: "تفصیلات", source: "author", published: true, reviewed: true, sourceHash: "45989de49fb7f66d" },
      date: { value: "تاریخ", source: "author", published: true, reviewed: true, sourceHash: "99c40ab405926cb5" },
      time: { value: "وقت", source: "author", published: true, reviewed: true, sourceHash: "33b93476cf597a33" },
      location: { value: "مقام", source: "author", published: true, reviewed: true, sourceHash: "15b61974b2707a7b" },
      city: { value: "شہر", source: "author", published: true, reviewed: true, sourceHash: "fc33f73246f48295" },
      status: { value: "حالت", source: "author", published: true, reviewed: true, sourceHash: "920e413c7d411b61" },
    },
    contact: {
      heading: { value: "رابطہ", source: "author", published: true, reviewed: true, sourceHash: "2b5c3d26721ae9c3" },
      body: { value: "اس تقریب سے متعلق سوالات براہِ راست منسٹری کو بھیجے جا سکتے ہیں۔", source: "author", published: true, reviewed: true, sourceHash: "69c0a80b6e77d34c" },
      cta: { value: "منسٹری سے رابطہ کریں", source: "author", published: true, reviewed: true, sourceHash: "e3d5ef30bc7323c9" },
    },
    related: {
      heading: { value: "دیگر تقریبات", source: "author", published: true, reviewed: true, sourceHash: "7ff1614ef5051acb" },
    },
    backToEvents: { value: "تمام تقریبات", source: "author", published: true, reviewed: true, sourceHash: "20b8487b38046360" },
  },
};