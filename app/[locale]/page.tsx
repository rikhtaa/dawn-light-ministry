import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { MissionSection } from "@/components/home/MissionSection";
import { MinistriesSection } from "@/components/home/MinistriesSection";
import { SeminarySection } from "@/components/home/SeminarySection";
import { ChildrenEducationSection } from "@/components/home/ChildrenEducationSection";
import { PrayerSection } from "@/components/home/PrayerSection";
import { EventsAndResourcesSection } from "@/components/home/EventsAndResourcesSection";
import { SupportSection } from "@/components/home/SupportSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { getHomeContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getHomeContent(locale);

  const path = (segment: string) => localizePath(locale, segment);

  return (
    <main className="flex flex-1 flex-col">
      <Hero
        strings={strings.hero}
        primaryCtaHref={path("/about#mission-vision")}
        secondaryCtaHref={path("/prayer")}
        isUrdu={isUrdu}
      />

      <MissionSection strings={strings.mission} ctaHref={path("/about#mission-vision")} isUrdu={isUrdu} />

      <MinistriesSection
        locale={locale}
        isUrdu={isUrdu}
        strings={strings.ministries}
        viewAllHref={path("/ministries")}
      />

      <SeminarySection
        strings={strings.seminary}
        primaryCtaHref={path("/ministries/seminary")}
        secondaryCtaHref={path("/contact")}
        isUrdu={isUrdu}
      />

      <ChildrenEducationSection strings={strings.childrenEducation} isUrdu={isUrdu} />

      <PrayerSection strings={strings.prayerCta} ctaHref={path("/prayer")} isUrdu={isUrdu} />

      <EventsAndResourcesSection
        eventsStrings={strings.events}
        eventsCtaHref={path("/contact")}
        eventsAllHref={path("/events")}
        resourcesStrings={strings.resources}
        resourcesAllHref={path("/resources")}
        isUrdu={isUrdu}
      />

      <SupportSection
        strings={strings.support}
        ctaHref={path("/support")}
        prayerHref={path("/prayer")}
        isUrdu={isUrdu}
      />

      <LocationsSection strings={strings.contact} isUrdu={isUrdu} />
    </main>
  );
}
