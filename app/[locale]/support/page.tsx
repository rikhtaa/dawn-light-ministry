import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { NavyBand } from "@/components/layout/NavyBand";
import { Reveal } from "@/components/ui/Reveal";
import { organization } from "@/lib/organization";
import { getSupportContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/support">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getSupportContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/support`,
      languages: { en: "/en/support", ur: "/ur/support" },
    },
  };
}

/**
 * Dawn of Light - Support.dc.html "State A · launch — giving pending
 * approval" only. State B (the post-approval giving/payment block) is not
 * built here at all — HANDOFF.md §18 is explicit that payment processing
 * must not be implemented before the organization confirms legal/banking/
 * provider approval, and the task's own instruction is that State B must
 * never be the page's default. The design's "Before giving opens" checklist
 * card carries its own footnote that it's "shown here for the client
 * review only — it will not be published on the live site unless the
 * organization wants it visible"; it's rendered as drawn (removing content
 * from a production-state frame is itself a scope decision this task
 * didn't ask for) but that self-contradiction — a checklist visible to
 * live visitors captioned as maybe-not-for-visitors — needs the
 * organization's explicit call, flagged in the checkpoint report rather
 * than resolved silently either way. The design has no dark-mode frame for
 * this page; dark styling below extrapolates from the same tokens used
 * elsewhere on the site.
 */
export default async function SupportPage({ params }: PageProps<"/[locale]/support">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const t = getSupportContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);

  const costs = [t.whereSupportGoes.costs.schoolFees, t.whereSupportGoes.costs.books, t.whereSupportGoes.costs.teaching];
  const checklist = Object.values(t.beforeGivingOpens.checklist);

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
              <h1 className={cn("text-h1 mt-3 text-foreground", isUrdu && "font-urdu-display")}>
                {t.masthead.title}
              </h1>
            </div>
            <p className={cn("text-body-long text-ink-body", isUrdu && "font-urdu-body")}>
              <span className="hidden sm:inline">{t.masthead.standfirst}</span>
              <span className="sm:hidden">{t.masthead.standfirstMobile}</span>
            </p>
          </div>
        </Container>
      </div>

      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            <Card topRule="oxblood" tone="surface">
              <p className="text-mono-label text-ink-ghost">{t.cards.pray.kicker}</p>
              <p className={cn("text-card-title mt-3.5 text-foreground", isUrdu && "font-urdu-display")}>
                {t.cards.pray.heading}
              </p>
              <p className={cn("text-small mt-2.5 mb-6 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                {t.cards.pray.body}
              </p>
              <Button href={path("/prayer")} variant="primary" isUrdu={isUrdu}>
                {t.cards.pray.cta}
              </Button>
            </Card>

            <Card topRule="navy" tone="surface">
              <p className="text-mono-label text-ink-ghost">{t.cards.share.kicker}</p>
              <p className={cn("text-card-title mt-3.5 text-foreground", isUrdu && "font-urdu-display")}>
                {t.cards.share.heading}
              </p>
              <p className={cn("text-small mt-2.5 mb-6 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                {t.cards.share.body}
              </p>
              <Button href={organization.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="secondary" isUrdu={isUrdu}>
                <span className="hidden sm:inline">{t.cards.share.cta}</span>
                <span className="sm:hidden" dir="ltr">
                  {t.cards.share.ctaMobile} {organization.phone}
                </span>
              </Button>
            </Card>

            <Card topRule="brass" tone="surface-warm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-mono-label text-ink-ghost">{t.cards.give.kicker}</p>
                <span className="border border-warning/35 bg-warning/10 px-2.5 py-1 text-[0.6875rem] tracking-[0.1em] text-warning uppercase">
                  {t.cards.give.badge}
                </span>
              </div>
              <p className={cn("text-card-title mt-3.5 text-foreground", isUrdu && "font-urdu-display")}>
                {t.cards.give.heading}
              </p>
              <p className={cn("text-small mt-2.5 mb-6 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                <span className="hidden sm:inline">{t.cards.give.body}</span>
                <span className="sm:hidden">{t.cards.give.bodyMobile}</span>
              </p>
              <span
                aria-disabled="true"
                className={cn(
                  "inline-flex min-h-12 w-full items-center justify-center border border-border bg-disabled-bg px-6 py-3.5 text-center text-[0.9375rem] font-medium text-disabled-fg sm:w-auto",
                  isUrdu && "font-urdu-body",
                )}
              >
                {t.cards.give.cta}
              </span>
            </Card>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16 lg:mt-20">
            <Reveal className="min-w-0">
              <p className={cn("text-eyebrow text-primary", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
                {t.whereSupportGoes.eyebrow}
              </p>
              <h2 className={cn("text-h3 mt-3 text-foreground", isUrdu && "font-urdu-display")}>
                {t.whereSupportGoes.heading}
              </h2>
              <div className="mt-4.5 border-t-2 border-ink dark:border-dark-accent">
                {costs.map((cost) => (
                  <div key={cost.label} className="border-b border-border-soft py-4">
                    <p className={cn("text-card-title text-[1.1875rem] text-foreground", isUrdu && "font-urdu-display")}>
                      {cost.label}
                    </p>
                    <p className={cn("text-small mt-1 text-ink-muted", isUrdu && "font-urdu-body text-base")}>{cost.body}</p>
                  </div>
                ))}
              </div>
              <p className={cn("text-small mt-4.5 text-ink-faint", isUrdu && "font-urdu-body text-base")}>
                {t.whereSupportGoes.note}
              </p>
            </Reveal>

            <Reveal className="min-w-0 border border-border bg-surface-warm p-7.5 sm:p-8">
              <p className={cn("text-card-title text-foreground", isUrdu && "font-urdu-display")}>
                {t.beforeGivingOpens.heading}
              </p>
              <p className={cn("text-small mt-2 mb-5 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                {t.beforeGivingOpens.body}
              </p>
              <div className="flex flex-col">
                {checklist.map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-border-soft py-2.75 last:border-b-0">
                    <span className="h-4 w-4 shrink-0 border border-border-strong" aria-hidden="true" />
                    <span className={cn("text-small text-ink-body", isUrdu && "font-urdu-body text-base")}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <NavyBand>
        <Reveal className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className={cn("text-eyebrow text-dark-accent", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
              {t.inTheMeantime.eyebrow}
            </p>
            <h2 className={cn("text-h3 mt-3.5 text-dark-heading", isUrdu && "font-urdu-display")}>
              {t.inTheMeantime.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Button href={organization.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" brassFill isUrdu={isUrdu}>
              <span dir="ltr">
                {t.inTheMeantime.whatsappCta} {organization.phone}
              </span>
            </Button>
            <Button href={`mailto:${organization.email}`} variant="secondary" tone="on-navy" isUrdu={isUrdu}>
              {t.inTheMeantime.emailCta}
            </Button>
          </div>
        </Reveal>
      </NavyBand>
    </main>
  );
}
