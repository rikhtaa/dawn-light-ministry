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
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7cf3ea94d90f460a" },
    description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5ac502f18b665bb7" },
  },
  breadcrumbLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2b5c3d26721ae9c3" },
  masthead: {
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "115e410f01dc4013" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e3d5ef30bc7323c9" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e47f99fd22a1eca4" },
    standfirstMobile: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "184787c0982c8f0c" },
  },
  channels: {
    whatsapp: {
      kicker: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "7ef7a92e55a79eba" },
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6a40edf1fc87a29f" },
      cta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5ac4b2d1103718bf" },
    },
    email: {
      kicker: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "969ccbd3cf6300ec" },
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d2bfea05843c6fc7" },
      cta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "27ae627d4eaf54d0" },
    },
    follow: {
      kicker: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "641d1ef657bdfd9f" },
      heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8aefca5f20075420" },
      facebook: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d41f5b4977ee05c6" },
      youtube: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fb7accfff8c6f8ea" },
    },
  },
  cities: {
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1ba88b77ba0f6e0d" },
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5ce83724ce33299b" },
    imagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6d01691f5df72383" },
    note: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "39ef5d7851d2d22c" },
    karachi: {
      name: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1716b042913b57f3" },
      addressLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "56ef8f20955f2564" },
      address: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14daef77f1896b03" },
      servicesLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "604dce445e326d95" },
      services: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9642c9af8304c432" },
      thirdLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "5cf4c50ea2b98000" },
      thirdValue: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2975132481a7a695" },
    },
    faisalabad: {
      name: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "174d449c475e7271" },
      addressLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "56ef8f20955f2564" },
      address: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14daef77f1896b03" },
      servicesLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "604dce445e326d95" },
      services: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9642c9af8304c432" },
      thirdLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "72be8da89808691c" },
      thirdValue: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a6af944b15616a23" },
    },
  },
  form: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "56e541ad86e099c0" },
    subheading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ded698ec9f1ddea8" },
    nameLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "dcd1d5223f73b3a9" },
    namePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2c6b2e253c01fb2e" },
    emailLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "969ccbd3cf6300ec" },
    emailPlaceholder: { value: "you@example.com", source: "machine", published: true, reviewed: false, sourceHash: "53e6cdc30765aade" },
    phoneLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2e2c97ab4237fe1b" },
    phoneOptional: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0059798b7f7023e4" },
    phonePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "cff6aea694f5be3d" },
    subjectLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "68971283841aecdf" },
    subjectHelp: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c5de6e26c83bb1ba" },
    subjectOptions: {
      general: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b780f79758b34c40" },
      church: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c3c55793ba48d3a4" },
      seminary: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "72be8da89808691c" },
      childrensEducation: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "340c6a743f4566b6" },
      resources: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e89b30aa1dc30a6a" },
      support: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "dae003904a947b1a" },
    },
    messageLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2f77668a9dfbf8d5" },
    messagePlaceholder: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4883d9025077ec7f" },
    consentLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3fd6eb8e23b5fc29" },
    submitLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "93a26b1eaff99b3a" },
    submitLabelSending: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b8ed5279e897be5d" },
    footerNote: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1727dc5b1aed156a" },
    errors: {
      name: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f9b561ae22951d84" },
      email: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2401f704eb9f6b64" },
      message: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2429ad8fd0446fdf" },
      consent: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4dd46afd786a9710" },
    },
  },
  success: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "cb93b4a42931e02c" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "158c6dba508ecba9" },
    sendAnother: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c6ce3f02499ce3bb" },
    returnHome: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "bbcc935e4263ac40" },
  },
  failure: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "22bb94e3c1601e08" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "d42bf4bde6de3e9e" },
  },
  gettingThere: {
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1258a77d6e5cd4b3" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c7054e78cedb890b" },
    cta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "e83a6e93561e8497" },
    karachi: {
      name: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "1716b042913b57f3" },
      streetLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8a386dd14cb9a70f" },
      street: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14daef77f1896b03" },
      landmarkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a10ff7ba34445c30" },
      landmark: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14daef77f1896b03" },
      transitLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9e8fdf6e388c73ac" },
      transit: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3abbc18ad6309cf0" },
      fourthLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4a64d6c849df0110" },
      fourthValue: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14daef77f1896b03" },
    },
    faisalabad: {
      name: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "174d449c475e7271" },
      streetLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8a386dd14cb9a70f" },
      street: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14daef77f1896b03" },
      landmarkLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a10ff7ba34445c30" },
      landmark: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14daef77f1896b03" },
      transitLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9e8fdf6e388c73ac" },
      transit: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3abbc18ad6309cf0" },
      fourthLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9b6d33ce19948c9d" },
      fourthValue: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "14daef77f1896b03" },
    },
    note: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c9796ef76e59fa8d" },
  },
  prayerCta: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "136a079570f05636" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "27a9b6a0c9c43246" },
    cta: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f4559c3380c0d748" },
  },
};
