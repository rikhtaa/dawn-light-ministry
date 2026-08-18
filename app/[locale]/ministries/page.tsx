import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { NavyBand } from "@/components/layout/NavyBand";
import { Button } from "@/components/ui/Button";
import { MinistryRow } from "@/components/ui/MinistryRow";
import { Reveal } from "@/components/ui/Reveal";
import { ministryItems, ministryMetaUnconfirmedByKey, ministryTopRuleByKey } from "@/lib/ministries";
import { getMinistriesContent, getCommonContent, getHomeContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/ministries">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getMinistriesContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/ministries`,
      languages: { en: "/en/ministries", ur: "/ur/ministries" },
    },
  };
}

export default async function MinistriesPage({ params }: PageProps<"/[locale]/ministries">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getMinistriesContent(locale);
  const common = getCommonContent(locale);
  // The six ministries' own substantive copy is the same authoritative
  // content Home's own MinistriesSection reads (content/i18n/en/home.ts)
  // — reused here rather than duplicated so the two listings can never
  // drift apart.
  const ministriesStrings = getHomeContent(locale).ministries;

  const path = (segment: string) => localizePath(locale, segment);

  return (
    <main className="flex flex-1 flex-col">
      {/*
       * Not PageMasthead — the approved mockup (Dawn of Light -
       * Ministries.dc.html) sets this page's masthead apart from About's:
       * eyebrow+h1 in a left column, the standfirst paragraph beside it in
       * a right column, bottom-aligned, not stacked full-width below the
       * heading. Breadcrumb/Container/typography tokens are still reused.
       */}
      <div className="border-b border-border bg-paper py-10 md:py-14">
        <Container>
          <Breadcrumb
            items={[
              { label: common.nav.home, href: path("/") },
              { label: common.nav.ministries },
            ]}
            isUrdu={isUrdu}
            className="mb-5"
          />
          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_440px] lg:gap-14">
            <div>
              <p
                className={cn(
                  "text-eyebrow text-primary",
                  isUrdu && "font-urdu-body text-base normal-case tracking-normal",
                )}
              >
                {strings.masthead.eyebrow}
              </p>
              <h1
                className={cn(
                  "text-h1 mt-3 text-foreground",
                  isUrdu && "font-urdu-display",
                )}
              >
                {strings.masthead.title}
              </h1>
            </div>
            <p
              className={cn(
                "text-body-long text-ink-muted",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.masthead.standfirst}
            </p>
          </div>
        </Container>
      </div>

      <section className="bg-paper">
        <Container>
          <div className="py-2 lg:py-6">
            {ministryItems.map((item, i) => (
              <Reveal key={item.key} index={i}>
                <MinistryRow
                  kicker={ministriesStrings.items[item.key].kicker}
                  title={ministriesStrings.items[item.key].title}
                  description={ministriesStrings.items[item.key].description}
                  meta={ministriesStrings.items[item.key].meta}
                  metaUnconfirmed={ministryMetaUnconfirmedByKey[item.key]}
                  imagePlaceholder={strings.rows[item.key].imagePlaceholder}
                  href={path(item.href)}
                  linkLabel={strings.rows[item.key].linkLabel}
                  accent={ministryTopRuleByKey[item.key]}
                  isUrdu={isUrdu}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <NavyBand size="section">
        <Reveal className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p
              className={cn(
                "text-eyebrow text-dark-accent",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.connect.eyebrow}
            </p>
            <h2
              className={cn(
                "text-h3 mt-3 text-dark-heading",
                isUrdu && "font-urdu-display",
              )}
            >
              {strings.connect.heading}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href={path("/support")} variant="primary" isUrdu={isUrdu}>
              {strings.connect.primaryCta}
            </Button>
            <Button href={path("/prayer")} variant="secondary" tone="on-navy" isUrdu={isUrdu}>
              {strings.connect.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </NavyBand>
    </main>
  );
}
