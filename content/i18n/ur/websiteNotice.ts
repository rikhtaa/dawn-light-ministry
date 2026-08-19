import type { Translated } from "@/lib/i18n/types";
import type { WebsiteNoticeStrings } from "@/content/i18n/en/websiteNotice";

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
export const websiteNotice: Translated<WebsiteNoticeStrings> = {
  metadata: {
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4cc2ebe9b4684ade" },
    description: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fab4ec434a693068" },
  },
  breadcrumbLabel: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "202abbece3b3c093" },
  masthead: {
    eyebrow: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "4787eaf7c938045f" },
    title: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "377dcfa0b27efb52" },
    standfirst: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "fab4ec434a693068" },
    lastUpdated: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0df9e13249a610da" },
  },
  toc: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b5658fc8edda24f9" },
    whoPublishes: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8912f1436e941de7" },
    useOfContent: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "40eb0894c7aa4bfc" },
    copyright: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6bf8821b44d5a090" },
    externalLinks: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2cedb069633746f4" },
    accuracy: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ac991dd3c2d928da" },
    notPastoral: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f12ecbcaa43def18" },
    giving: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0f4bb05368c2f34f" },
    languageVersions: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3ab422374252349d" },
  },
  lead: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "b2d58cdf546ac725" },
  whoPublishes: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "8912f1436e941de7" },
    body1: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ff4dedfd6a34c758" },
    body2: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "c2a42237a76ca558" },
  },
  useOfContent: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "40eb0894c7aa4bfc" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "764cf6e7bd2adae0" },
  },
  copyright: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "6bf8821b44d5a090" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "aa6ae127917d6afa" },
  },
  externalLinks: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "2cedb069633746f4" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "9b624ed6e9fedcde" },
  },
  accuracy: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "ac991dd3c2d928da" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "747968dbcb5d1be6" },
  },
  notPastoral: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "f12ecbcaa43def18" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "79de05e888dbe3b8" },
  },
  giving: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "0f4bb05368c2f34f" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "44b2757ebd1e9a25" },
  },
  languageVersions: {
    heading: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "3ab422374252349d" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "42096ee4ac472a9c" },
  },
  beforeLaunch: {
    kicker: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "eedadb1e01b0f137" },
    body: { value: "", source: "machine", published: false, reviewed: false, sourceHash: "a88467264f18df3e" },
  },
};
