import type { Locale } from "@/lib/i18n/types";
import { isPublished, warnOnDuplicateSlugs, type Publishable } from "@/lib/content-status";

/**
 * Sermon records — structured data, not translatable UI copy (mirrors
 * Event/Resource in HANDOFF.md §16's own content/data model exactly).
 * Real entries transcribed from the organization-supplied sermons
 * document (see the Step 5 content-integration report for exactly what
 * was and wasn't imported, and the judgment calls made on `speaker` and
 * `language`). The empty-state card in app/[locale]/sermons/page.tsx
 * stays in the code for a genuinely empty list — e.g. a future filtered
 * view with zero results — not because `sermons` is expected to be empty.
 */
export interface Sermon extends Publishable {
  title: string;
  /**
   * Urdu title, only where the ministry's own source document actually
   * supplied one — most entries below pair an English question with its
   * own literal Urdu translation in the same YouTube title (e.g. "Can
   * people dance during worship according to the Bible? 15Nov2023
   * دورانِ پرستش لوگ ناچ سکتے ہیں؟"), so `title`/`titleUr` here are that
   * same pair, split apart into two fields rather than one string —
   * every character on both sides is exactly as supplied, nothing
   * translated, reworded, or invented. Omitted for the one entry with no
   * Urdu text in its source title at all. Same fallback shape as
   * `Resource.titleUr` in lib/resources.ts, via `sermonTitle()` below.
   */
  titleUr?: string;
  slug: string;
  speaker: string;
  /** ISO 8601 date (e.g. "2026-03-01"). Omit when not yet known — components render the design's own bracketed date placeholder instead of a computed one. */
  date?: string;
  scriptureReference?: string;
  series?: string;
  language: Locale;
  externalUrl?: string;
  audioUrl?: string;
  notesUrl?: string;
  description?: string;
  format: "video" | "audio" | "text";
  /** mm:ss, e.g. "38:12" — HANDOFF.md §16's `duration` field. Omit when not yet known. */
  duration?: string;
}

/**
 * Real sermon data, transcribed from the organization-supplied "YouTube
 * links of articles, sermons and debates" document (the "Sermons:"
 * section specifically — the document's other sections, five additional
 * videos and six Medium articles, are out of scope for this import and
 * intentionally not included here; see the Step 5 content-integration
 * report for why). The same document (Google Doc, linked from the
 * language-display task) is also the authoritative source for each
 * entry's `title`/`titleUr` split below: every title that source gives as
 * one English clause plus one Urdu clause in the same line is split at
 * that exact language boundary into `title` (English) and `titleUr`
 * (Urdu) — both sides copied verbatim, nothing translated or reworded.
 *
 * `speaker` is attributed to Pastor Nayyer Gull for every entry: the
 * document is his own YouTube collection, its first entry credits him by
 * name, and no other speaker is named anywhere in it — not a per-entry
 * fact stated in the source, but the only defensible reading of who is
 * speaking, consistent with how this same name is already treated as a
 * known organizational fact elsewhere (content/i18n/en/home.ts).
 *
 * `language` is inferred from each title's own script: "ur" wherever the
 * source title includes Urdu text (the large majority — several
 * explicitly pair an English question with a full Urdu translation, and
 * one is literally tagged "Urdu/H[indi]" in the source), "en" for the one
 * title supplied with no Urdu text at all. Not a fact stated per-entry in
 * the source, either — a judgment call, flagged here and in the report.
 *
 * `date` is set only for the one entry where the source gives a complete
 * day/month/year ("15Nov2023"). Several others give only a bare year
 * ("2021") — that's preserved in the title text itself (as written in the
 * source) rather than forced into the `date` field, which the site's own
 * date formatter parses as a full calendar date; a bare year would either
 * crash it or silently synthesize a January 1st that was never stated.
 * No Scripture reference, series, or description is given for any entry,
 * so those fields are left absent rather than invented.
 */
export const sermons: Sermon[] = [
  {
    title: "Can people dance during worship according to the Bible? 15Nov2023",
    titleUr: "دورانِ پرستش لوگ ناچ سکتے ہیں؟",
    slug: "can-people-dance-during-worship",
    speaker: "Pastor Nayyer Gull",
    date: "2023-11-15",
    language: "ur",
    externalUrl: "https://youtu.be/PE21HTZCfdQ?si=fXL-TpJ7O810w6RY",
    format: "video",
  },
  {
    title: "Fasting in Islam & Christianity",
    titleUr: "اسلام اور مسیحیت میں روزہ",
    slug: "fasting-in-islam-and-christianity",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/wikX72SsgQY?si=cXU801YgHa7EdBaK",
    format: "video",
  },
  {
    title: "scripture about fasting",
    titleUr: "پاک کلام میں رو‌زہ رکھنے کے بارے میں کیا بتایا گیا ہے؟",
    slug: "scripture-about-fasting",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/9jX1YncygNk?si=LadHAr5mTSRBtOnq",
    format: "video",
  },
  {
    title: "1. What is the truth of rosary? 2. What does its existence mean? 3. And should we read it?",
    slug: "the-truth-of-rosary",
    speaker: "Pastor Nayyer Gull",
    language: "en",
    externalUrl: "https://youtu.be/UAfdpS4vEWM?si=9cOgvyabHWKh-37R",
    format: "video",
  },
  {
    title: "Are evangelical events about Jesus reliable? 2021",
    titleUr: "کیا یسوع کے متعلق انجیلی واقعات قابل اعتماد ہیں؟",
    slug: "are-evangelical-events-about-jesus-reliable",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/ncfoc5Q92yI?si=o-d5RPAQsjLvFkEA",
    format: "video",
  },
  {
    title: "Quran and the Prophet of Islam confirm the Bible? 2021",
    titleUr: "قرآن اور پیغمبرِ اسلام بائبل کی تصدیق کرتے ہیں",
    slug: "quran-and-the-prophet-confirm-the-bible",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/y3sZCa-Scq8?si=TrPlfy8wZtFtOGB0",
    format: "video",
  },
  {
    title: "conclusive evidence for the existence of God? 2021",
    titleUr: "کیا خُدا کے وجود کا کوئی فیصلہ کن ثبوت موجود ہے؟",
    slug: "conclusive-evidence-for-the-existence-of-god",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/EQRt-DkLRwQ?si=_UIaL7E3PNDdGcvg",
    format: "video",
  },
  {
    title: "The Bible about dinosaurs 2021",
    titleUr: "کیا بائبل میں ڈائنوساروں کا ذکر ہے؟",
    slug: "the-bible-about-dinosaurs",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/zckVTBmyYS8?si=7g8yFPisEcEpX1Xw",
    format: "video",
  },
  {
    title: "Science and God 2021",
    titleUr: "کیا خُدا پر ایمان اور سائنس ایک دوسرے کی تردید کرتے ہیں؟",
    slug: "science-and-god",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/rmkl7YpDyvY?si=UoK9ASbdhGAE7Fy0",
    format: "video",
  },
  {
    title: "Historical evidence of the existence of the Holy Jesus Christ?",
    titleUr: "المسیح کےوجود کا کوئی تاریخی ثبوت",
    slug: "historical-evidence-of-jesus-christ",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/dfkbuVMUFSI?si=UjRak8uf6-TbCdBb",
    format: "video",
  },
  {
    title: "Who is Jesus?",
    titleUr: "مقدس حضرت یسوع المسیح کون ہے؟ 2021",
    slug: "who-is-jesus",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/PYb3SVGA32Q?si=M8oyfJhm4PS5upkr",
    format: "video",
  },
  {
    title: "Fake Gospel of Barnabas",
    titleUr: "جعلی انجیل برنباس 2021",
    slug: "fake-gospel-of-barnabas",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/KL70OBWjS_8?si=V9n5sYsH188Xvsus",
    format: "video",
  },
  {
    title: "How Can I Understand the Book of Revelation? 2021",
    titleUr: "مَیں مکاشفہ کی کتاب کو کیسے سمجھ سکتا ہوں؟ Urdu/H",
    slug: "how-can-i-understand-the-book-of-revelation",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/3yAYfzIJwqs?si=VbxdJA1QpQaYB7oZ",
    format: "video",
  },
  {
    title: "What happened to the ark of the covenant? 2021",
    titleUr: "عہد کے صندوق کے ساتھ کیا ہوا ؟ مسیح کا گم نام شاگرد",
    slug: "what-happened-to-the-ark-of-the-covenant",
    speaker: "Pastor Nayyer Gull",
    language: "ur",
    externalUrl: "https://youtu.be/SdrPnu4q0PQ?si=v0jCJrhpcjE9R0yj",
    format: "video",
  },
];
warnOnDuplicateSlugs(sermons, "lib/sermons.ts sermons");

/** `sermons`, filtered to entries that are actually publishable (see lib/content-status.ts). Every page/lookup below reads this, never the raw array, so an item staged with `published: false` is fully hidden — index, detail route, and related-content lists alike. */
export const publishedSermons: Sermon[] = sermons.filter(isPublished);

/**
 * Locale-aware display title for a Sermon: `titleUr` on the Urdu route
 * when the source document actually supplied one, `title` (English)
 * otherwise — on either route. Mirrors `resourceTitle()` in
 * lib/resources.ts exactly. The single place that should ever read
 * `sermon.title`/`sermon.titleUr` for display.
 */
export function sermonTitle(sermon: Sermon, locale: Locale): string {
  return locale === "ur" && sermon.titleUr ? sermon.titleUr : sermon.title;
}

/**
 * The thumbnail YouTube auto-generates for every uploaded video, at a
 * fixed, always-available URL — no API call or key needed. Used in place
 * of the sermon-thumbnail placeholder wherever a sermon has a YouTube
 * `externalUrl`. Returns undefined for a non-YouTube URL or no URL at
 * all, rather than guessing.
 */
export function getYouTubeThumbnailUrl(url?: string): string | undefined {
  if (!url) return undefined;
  let videoId: string | null = null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.endsWith("youtube.com")) {
      videoId = parsed.searchParams.get("v");
    }
  } catch {
    return undefined;
  }
  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : undefined;
}
