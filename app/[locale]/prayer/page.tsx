import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PrayerForm } from "@/components/prayer/PrayerForm";
import { organization } from "@/lib/organization";
import { getPrayerContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/prayer">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getPrayerContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/prayer`,
      languages: { en: "/en/prayer", ur: "/ur/prayer" },
    },
  };
}

/**
 * Dawn of Light - Prayer.dc.html. The design draws no mobile-390 frame for
 * this page (unlike Support/Contact, which both do) — the two-column
 * "How this works" + form layout below collapses to a single stacked
 * column under `lg:`, the same responsive rule every other two-column page
 * in this project already uses, rather than inventing a bespoke mobile
 * composition with nothing to verify it against.
 */
export default async function PrayerPage({ params }: PageProps<"/[locale]/prayer">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const t = getPrayerContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);

  const steps = [t.howThisWorks.steps.write, t.howThisWorks.steps.receive, t.howThisWorks.steps.pray];

  return (
    <main className="flex flex-1 flex-col">
      <div className="border-b border-border bg-paper py-10 md:py-14">
        <Container>
          <Breadcrumb
            items={[{ label: common.nav.home, href: path("/") }, { label: t.breadcrumbLabel }]}
            isUrdu={isUrdu}
            className="mb-6"
          />
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_520px] lg:gap-14">
            <div>
              <p className={cn("text-eyebrow text-primary", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
                {t.masthead.eyebrow}
              </p>
              <h1 className={cn("text-h1 mt-3 text-foreground", isUrdu && "font-urdu-display")}>{t.masthead.title}</h1>
            </div>
            <p className={cn("text-body-long text-ink-body", isUrdu && "font-urdu-body")}>{t.masthead.standfirst}</p>
          </div>
        </Container>
      </div>

      <section className="bg-surface py-16 lg:py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_620px] lg:gap-20">
          <Reveal className="min-w-0">
            <h2 className={cn("text-h3 text-foreground", isUrdu && "font-urdu-display")}>{t.howThisWorks.heading}</h2>
            <div className="mt-4 border-t-2 border-ink dark:border-dark-accent">
              {steps.map((step) => (
                <div key={step.title} className="flex gap-5 border-b border-border-soft py-5">
                  <span className="min-w-8 pt-1 text-mono-label text-accent">{step.number}</span>
                  <div>
                    <p className={cn("text-card-title mb-1 text-[1.1875rem] text-foreground", isUrdu && "font-urdu-display")}>
                      {step.title}
                    </p>
                    <p className={cn("text-small text-ink-muted", isUrdu && "font-urdu-body text-base")}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-s-[3px] border-accent py-2 ps-5">
              <p className={cn("text-body text-ink-body", isUrdu && "font-urdu-body")}>{t.urgentNotice}</p>
            </div>

            <div className="mt-8 border border-border bg-surface-warm p-6">
              <p className={cn("text-card-title mb-2 text-foreground", isUrdu && "font-urdu-display")}>
                {t.speakToSomeone.heading}
              </p>
              <p className={cn("text-small text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                {t.speakToSomeone.body}{" "}
                <a href={organization.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-foreground" dir="ltr">
                  {organization.phone}
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal className="min-w-0">
            <PrayerForm strings={t} isUrdu={isUrdu} />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
