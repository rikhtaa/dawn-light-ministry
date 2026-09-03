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
import { getHomeContent, getEventsContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { publishedEvents } from "@/lib/events";
import { publishedSermons } from "@/lib/sermons";
import { publishedResources, resourceTitle, resourceAuthor } from "@/lib/resources";

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const strings = getHomeContent(locale);
  const eventStatusLabels = getEventsContent(locale).detail.status;

  const path = (segment: string) => localizePath(locale, segment);

  // `strings.events.heading` ("Upcoming events") is a fixed label — every
  // real event is currently `status: "completed"`, so each row's own
  // status label (reusing the same translated word the Events page shows)
  // is appended to `meta` rather than leaving the heading's "Upcoming"
  // unqualified next to events that already happened.
  const homeEvents = publishedEvents.slice(0, 3).map((event) => ({
    title: event.title,
    meta: [event.city, eventStatusLabels[event.status] as string].filter(Boolean).join(" · "),
  }));

  const latestSermon = publishedSermons[0];
  const sampleArticle = publishedResources.find((r) => r.type === "article");
  const sampleStudy = publishedResources.find((r) => r.type === "study");
  const sampleBook = publishedResources.find((r) => r.type === "book");
  const resourceItems: { kicker: string; title: string; meta: string }[] = [
    latestSermon && {
      kicker: strings.resources.items.sermon.kicker as string,
      title: latestSermon.title,
      meta: latestSermon.speaker,
    },
    sampleArticle && {
      kicker: strings.resources.items.article.kicker as string,
      title: resourceTitle(sampleArticle, locale),
      meta: resourceAuthor(sampleArticle, locale) ?? "",
    },
    sampleStudy && {
      kicker: strings.resources.items.study.kicker as string,
      title: resourceTitle(sampleStudy, locale),
      meta: resourceAuthor(sampleStudy, locale) ?? "",
    },
    sampleBook && {
      kicker: strings.resources.items.book.kicker as string,
      title: resourceTitle(sampleBook, locale),
      meta: resourceAuthor(sampleBook, locale) ?? "",
    },
  ].filter((item): item is { kicker: string; title: string; meta: string } => Boolean(item));

  return (
    <main className="flex flex-1 flex-col">
      <Hero
        strings={strings.hero}
        primaryCtaHref={path("/about#mission-vision")}
        secondaryCtaHref={path("/prayer")}
        isUrdu={isUrdu}
        imageSrc="/images/home/hero.png"
        imageAlt="Congregation processing through a street carrying palm branches, with two children among the group"
        imageObjectPosition="center 60%"
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
        imageSrc="/images/ministries/seminary.png"
        imageAlt="A teacher addressing seated students in a seminary classroom"
      />

      <ChildrenEducationSection strings={strings.childrenEducation} isUrdu={isUrdu} />

      <PrayerSection strings={strings.prayerCta} ctaHref={path("/prayer")} isUrdu={isUrdu} />

      <EventsAndResourcesSection
        eventsStrings={strings.events}
        eventsCtaHref={path("/contact")}
        eventsAllHref={path("/events")}
        events={homeEvents}
        resourcesStrings={strings.resources}
        resourcesAllHref={path("/resources")}
        resourceItems={resourceItems}
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
