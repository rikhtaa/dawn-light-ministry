import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { FeatureSection } from "@/components/home/FeatureSection";
import { MinistriesSection } from "@/components/home/MinistriesSection";
import { PrayerCtaBanner } from "@/components/home/PrayerCtaBanner";
import { EmptyStateSection } from "@/components/home/EmptyStateSection";
import { ContactSection } from "@/components/home/ContactSection";
import { resolveContent } from "@/lib/i18n/resolve";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { home as homeEn } from "@/content/i18n/en/home";
import { home as homeUr } from "@/content/i18n/ur/home";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = isUrdu ? resolveContent(homeEn, homeUr) : homeEn;

  const path = (segment: string) => localizePath(locale, segment);

  return (
    <main className="flex flex-1 flex-col">
      <Hero
        eyebrow={strings.hero.eyebrow}
        headline={strings.hero.headline}
        animatedWords={[
          strings.hero.animatedWords.ministry,
          strings.hero.animatedWords.church,
          strings.hero.animatedWords.seminary,
        ]}
        supportingMessage={strings.hero.supportingMessage}
        primaryCta={strings.hero.primaryCta}
        primaryCtaHref={path("/about/mission-vision")}
        secondaryCta={strings.hero.secondaryCta}
        secondaryCtaHref={path("/prayer")}
        isUrdu={isUrdu}
      />

      <FeatureSection
        eyebrow={strings.mission.eyebrow}
        heading={strings.mission.heading}
        body={strings.mission.body}
        ctaLabel={strings.mission.cta}
        ctaHref={path("/about/mission-vision")}
        background="default"
        isUrdu={isUrdu}
      />

      <MinistriesSection
        locale={locale}
        isUrdu={isUrdu}
        strings={strings.ministries}
        viewAllHref={path("/ministries")}
      />

      <FeatureSection
        eyebrow={strings.education.eyebrow}
        heading={strings.education.heading}
        body={strings.education.body}
        ctaLabel={strings.education.cta}
        ctaHref={path("/ministries/childrens-education")}
        background="muted"
        isUrdu={isUrdu}
      />

      <PrayerCtaBanner
        heading={strings.prayerCta.heading}
        body={strings.prayerCta.body}
        ctaLabel={strings.prayerCta.cta}
        ctaHref={path("/prayer")}
        isUrdu={isUrdu}
      />

      <EmptyStateSection
        eyebrow={strings.events.eyebrow}
        heading={strings.events.heading}
        message={strings.events.emptyState}
        ctaLabel={strings.events.cta}
        ctaHref={path("/events")}
        background="default"
        isUrdu={isUrdu}
      />

      <EmptyStateSection
        eyebrow={strings.resources.eyebrow}
        heading={strings.resources.heading}
        message={strings.resources.emptyState}
        ctaLabel={strings.resources.cta}
        ctaHref={path("/resources")}
        background="surface"
        isUrdu={isUrdu}
      />

      <FeatureSection
        eyebrow={strings.support.eyebrow}
        heading={strings.support.heading}
        body={strings.support.body}
        ctaLabel={strings.support.cta}
        ctaHref={path("/support")}
        background="muted"
        isUrdu={isUrdu}
      />

      <ContactSection
        strings={strings.contact}
        ctaHref={path("/contact")}
        isUrdu={isUrdu}
      />
    </main>
  );
}
