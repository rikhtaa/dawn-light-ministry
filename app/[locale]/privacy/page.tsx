import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument, type LegalTocItem } from "@/components/legal/LegalDocument";
import { BeforeLaunchNotice } from "@/components/legal/BeforeLaunchNotice";
import { getPrivacyContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getPrivacyContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { en: "/en/privacy", ur: "/ur/privacy" },
    },
  };
}

/**
 * Dawn of Light - Utility Pages.dc.html §01 — "/privacy · legal-document
 * template". Every [PSEUDO/PLACEHOLDER — ...] paragraph below is the
 * design's own drafting text, preserved verbatim (see
 * content/i18n/en/privacy.ts's own note) — CLAUDE.md §11/§32: this is
 * explicitly not approved policy, and nothing here is presented as fact.
 */
export default async function PrivacyPage({ params }: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const t = getPrivacyContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);

  const tocItems: LegalTocItem[] = [
    { id: "what-we-collect", label: t.toc.whatWeCollect },
    { id: "prayer-requests", label: t.toc.prayerRequests },
    { id: "how-we-use-it", label: t.toc.howWeUseIt },
    { id: "who-sees-it", label: t.toc.whoSeesIt },
    { id: "how-long-we-keep-it", label: t.toc.howLongWeKeepIt },
    { id: "children", label: t.toc.children },
    { id: "cookies-and-analytics", label: t.toc.cookiesAndAnalytics },
    { id: "contact-us", label: t.toc.contactUs },
  ];

  const heading = cn("text-h3 mt-9 mb-3 scroll-mt-28 text-foreground first:mt-0", isUrdu && "font-urdu-display");
  const body = cn("text-body-long mb-4 text-ink-body", isUrdu && "font-urdu-body");

  return (
    <LegalDocument
      homeLabel={common.nav.home}
      homeHref={path("/")}
      breadcrumbLabel={t.breadcrumbLabel}
      eyebrow={t.masthead.eyebrow}
      title={t.masthead.title}
      standfirst={t.masthead.standfirst}
      lastUpdated={t.masthead.lastUpdated}
      tocHeading={t.toc.heading}
      tocItems={tocItems}
      questionsCard={t.questionsCard}
      isUrdu={isUrdu}
    >
      <p className={cn("text-standfirst mb-7.5 text-foreground", isUrdu && "font-urdu-display")}>{t.lead}</p>

      <h2 id="what-we-collect" className={heading}>
        {t.whatWeCollect.heading}
      </h2>
      <p className={body}>{t.whatWeCollect.body1}</p>
      <p className={body}>{t.whatWeCollect.body2}</p>

      <div
        id="prayer-requests"
        className="mb-6.5 scroll-mt-28 border border-border border-s-[3px] border-s-primary bg-surface-warm p-6.5"
      >
        <h2 className={cn("text-h3 mb-2.5 text-[1.5rem] text-foreground", isUrdu && "font-urdu-display")}>
          {t.prayerRequests.heading}
        </h2>
        <p className={cn("text-body-long mb-2.5 text-ink-body last:mb-0", isUrdu && "font-urdu-body")}>
          {t.prayerRequests.body1}
        </p>
        <p className={cn("text-body-long text-ink-body", isUrdu && "font-urdu-body")}>{t.prayerRequests.body2}</p>
      </div>

      <h2 id="how-we-use-it" className={heading}>
        {t.howWeUseIt.heading}
      </h2>
      <p className={body}>{t.howWeUseIt.body}</p>

      <h2 id="who-sees-it" className={heading}>
        {t.whoSeesIt.heading}
      </h2>
      <p className={body}>{t.whoSeesIt.body1}</p>
      <p className={body}>{t.whoSeesIt.body2}</p>

      <h2 id="how-long-we-keep-it" className={heading}>
        {t.howLongWeKeepIt.heading}
      </h2>
      <p className={body}>{t.howLongWeKeepIt.body}</p>

      <h2 id="children" className={heading}>
        {t.children.heading}
      </h2>
      <p className={body}>{t.children.body}</p>

      <h2 id="cookies-and-analytics" className={heading}>
        {t.cookiesAndAnalytics.heading}
      </h2>
      <p className={body}>{t.cookiesAndAnalytics.body1}</p>
      <p className={body}>{t.cookiesAndAnalytics.body2}</p>

      <h2 id="contact-us" className={heading}>
        {t.contactUs.heading}
      </h2>
      <p className={body}>{t.contactUs.body}</p>

      <BeforeLaunchNotice kicker={t.beforeLaunch.kicker} body={t.beforeLaunch.body} isUrdu={isUrdu} />
    </LegalDocument>
  );
}
