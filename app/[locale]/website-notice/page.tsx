import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument, type LegalTocItem } from "@/components/legal/LegalDocument";
import { BeforeLaunchNotice } from "@/components/legal/BeforeLaunchNotice";
import { getWebsiteNoticeContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/website-notice">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getWebsiteNoticeContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/website-notice`,
      languages: { en: "/en/website-notice", ur: "/ur/website-notice" },
    },
  };
}

/**
 * Dawn of Light - Utility Pages.dc.html §02 — "/website-notice · same
 * template, body only" as Privacy (shares LegalDocument; no
 * "Questions?" card, per the design — Privacy has one, this page doesn't).
 */
export default async function WebsiteNoticePage({
  params,
}: PageProps<"/[locale]/website-notice">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const t = getWebsiteNoticeContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);

  const tocItems: LegalTocItem[] = [
    { id: "who-publishes", label: t.toc.whoPublishes },
    { id: "use-of-content", label: t.toc.useOfContent },
    { id: "copyright", label: t.toc.copyright },
    { id: "external-links", label: t.toc.externalLinks },
    { id: "accuracy", label: t.toc.accuracy },
    { id: "not-pastoral", label: t.toc.notPastoral },
    { id: "giving", label: t.toc.giving },
    { id: "language-versions", label: t.toc.languageVersions },
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
      isUrdu={isUrdu}
    >
      <p className={cn("text-standfirst mb-7.5 text-foreground", isUrdu && "font-urdu-display")}>{t.lead}</p>

      <h2 id="who-publishes" className={heading}>
        {t.whoPublishes.heading}
      </h2>
      <p className={body}>{t.whoPublishes.body1}</p>
      <p className={body}>{t.whoPublishes.body2}</p>

      <h2 id="use-of-content" className={heading}>
        {t.useOfContent.heading}
      </h2>
      <p className={body}>{t.useOfContent.body}</p>

      <h2 id="copyright" className={heading}>
        {t.copyright.heading}
      </h2>
      <p className={body}>{t.copyright.body}</p>

      <h2 id="external-links" className={heading}>
        {t.externalLinks.heading}
      </h2>
      <p className={body}>{t.externalLinks.body}</p>

      <h2 id="accuracy" className={heading}>
        {t.accuracy.heading}
      </h2>
      <p className={body}>{t.accuracy.body}</p>

      <div
        id="not-pastoral"
        className="mb-6.5 scroll-mt-28 border border-border border-s-[3px] border-s-primary bg-surface-warm p-6.5"
      >
        <h2 className={cn("text-h3 mb-2.5 text-[1.5rem] text-foreground", isUrdu && "font-urdu-display")}>
          {t.notPastoral.heading}
        </h2>
        <p className={cn("text-body-long text-ink-body", isUrdu && "font-urdu-body")}>{t.notPastoral.body}</p>
      </div>

      <h2 id="giving" className={heading}>
        {t.giving.heading}
      </h2>
      <p className={body}>{t.giving.body}</p>

      <h2 id="language-versions" className={heading}>
        {t.languageVersions.heading}
      </h2>
      <p className={body}>{t.languageVersions.body}</p>

      <BeforeLaunchNotice kicker={t.beforeLaunch.kicker} body={t.beforeLaunch.body} isUrdu={isUrdu} />
    </LegalDocument>
  );
}
