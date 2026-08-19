import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/layout/CtaBand";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { NavyBand } from "@/components/layout/NavyBand";
import { PlaceholderTag } from "@/components/ui/PlaceholderTag";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { organization } from "@/lib/organization";
import { getContactContent, getCommonContent } from "@/lib/i18n/content-registry";
import { localizePath } from "@/lib/i18n/paths";
import { isLocale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/contact">): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "en";
  const strings = getContactContent(locale);

  return {
    title: strings.metadata.title,
    description: strings.metadata.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: "/en/contact", ur: "/ur/contact" },
    },
  };
}

/**
 * Dawn of Light - Contact.dc.html. Two design deviations, both deliberate
 * and flagged in the checkpoint report rather than silently resolved:
 * (1) the "Mobile 390 · WhatsApp first" frame's Send-a-message card omits
 * phone/subject/consent and shows only one city — read as an illustrative,
 * space-cropped preview of the same functional form HANDOFF.md §7
 * explicitly requires (Name, Email, Phone (optional), Subject, Message,
 * consent) rather than a genuinely different mobile field set, so mobile
 * keeps the full ContactForm and both city cards, just single-column.
 * (2) the Follow/Facebook & YouTube channel has no organization-supplied
 * URL (lib/organization.ts has no social links) — CLAUDE.md §32 forbids
 * inventing one, so it renders as non-interactive text rather than a
 * fabricated href.
 */
export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const isUrdu = locale === "ur";
  const t = getContactContent(locale);
  const common = getCommonContent(locale);
  const path = (segment: string) => localizePath(locale, segment);

  const cities = [t.cities.karachi, t.cities.faisalabad];
  const directionCities = [t.gettingThere.karachi, t.gettingThere.faisalabad];

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
            <p className={cn("text-body-long text-ink-body", isUrdu && "font-urdu-body")}>
              <span className="hidden sm:inline">{t.masthead.standfirst}</span>
              <span className="sm:hidden">{t.masthead.standfirstMobile}</span>
            </p>
          </div>
        </Container>
      </div>

      <section className="bg-surface">
        <Container>
          {/* Mobile: two prominent stacked actions — the design's own
              "WhatsApp first" mobile composition, not the desktop channel
              grid shrunk to one column. */}
          <Reveal className="flex flex-col gap-2.5 border-b border-border py-6 sm:hidden">
            <Button href={organization.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" className="w-full" isUrdu={isUrdu}>
              <span dir="ltr">
                {t.channels.whatsapp.heading} {organization.phone}
              </span>
            </Button>
            <Button href={`mailto:${organization.email}`} variant="secondary" className="w-full" isUrdu={isUrdu}>
              {t.channels.email.cta}
            </Button>
          </Reveal>

          <Reveal className="hidden grid-cols-3 divide-x divide-border border-b border-border sm:grid">
            <div className="py-8.5 pe-8">
              <p className="text-mono-label text-ink-ghost">{t.channels.whatsapp.kicker}</p>
              <p className={cn("text-card-title mt-2.5 mb-1.5 text-foreground", isUrdu && "font-urdu-display")}>
                {t.channels.whatsapp.heading}
              </p>
              <p className="text-body mb-4 text-foreground" dir="ltr">
                {organization.phone}
              </p>
              <Button href={organization.whatsappUrl} target="_blank" rel="noopener noreferrer" variant="primary" isUrdu={isUrdu}>
                {t.channels.whatsapp.cta}
              </Button>
            </div>
            <div className="px-8 py-8.5">
              <p className="text-mono-label text-ink-ghost">{t.channels.email.kicker}</p>
              <p className={cn("text-card-title mt-2.5 mb-1.5 text-foreground", isUrdu && "font-urdu-display")}>
                {t.channels.email.heading}
              </p>
              <p className="text-body mb-4 text-foreground" dir="ltr">
                {organization.email}
              </p>
              <Button href={`mailto:${organization.email}`} variant="secondary" isUrdu={isUrdu}>
                {t.channels.email.cta}
              </Button>
            </div>
            <div className="ps-8 py-8.5">
              <p className="text-mono-label text-ink-ghost">{t.channels.follow.kicker}</p>
              <p className={cn("text-card-title mt-2.5 mb-4 text-foreground", isUrdu && "font-urdu-display")}>
                {t.channels.follow.heading}
              </p>
              <div className="flex gap-2.5">
                <span className="border border-border-strong px-5 py-3 text-[0.9375rem] text-ink-faint">
                  {t.channels.follow.facebook}
                </span>
                <span className="border border-border-strong px-5 py-3 text-[0.9375rem] text-ink-faint">
                  {t.channels.follow.youtube}
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-14 py-16 lg:grid-cols-[1fr_620px] lg:gap-20 lg:py-24">
            <Reveal className="min-w-0">
              <p className={cn("text-eyebrow text-primary", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
                {t.cities.eyebrow}
              </p>
              <h2 className={cn("text-h3 mt-3 mb-5 text-foreground", isUrdu && "font-urdu-display")}>{t.cities.heading}</h2>
              <div className="flex flex-col gap-4">
                {cities.map((city) => (
                  <div key={city.name} className="border border-border">
                    <ImagePlaceholder caption={t.cities.imagePlaceholder} ratio="16:9" bordered={false} />
                    <div className="p-6">
                      <p className={cn("text-card-title mb-2.5 text-foreground", isUrdu && "font-urdu-display")}>
                        {city.name}
                      </p>
                      <div className="flex items-center justify-between border-b border-border-soft py-2 text-[0.9375rem]">
                        <span className="text-ink-muted">{city.addressLabel}</span>
                        <PlaceholderTag>{city.address}</PlaceholderTag>
                      </div>
                      <div className="flex items-center justify-between border-b border-border-soft py-2 text-[0.9375rem]">
                        <span className="text-ink-muted">{city.servicesLabel}</span>
                        <PlaceholderTag>{city.services}</PlaceholderTag>
                      </div>
                      <div className="flex items-center justify-between py-2 text-[0.9375rem]">
                        <span className="text-ink-muted">{city.thirdLabel}</span>
                        <span className="text-foreground">{city.thirdValue}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className={cn("text-small mt-3.5 text-ink-faint", isUrdu && "font-urdu-body text-base")}>{t.cities.note}</p>
            </Reveal>

            <Reveal className="min-w-0 border border-border bg-surface-warm p-7.5 sm:p-9">
              <p className={cn("text-card-title text-foreground", isUrdu && "font-urdu-display")}>{t.form.heading}</p>
              <p className={cn("text-small mt-1.5 mb-6.5 text-ink-muted", isUrdu && "font-urdu-body text-base")}>
                {t.form.subheading} <span dir="ltr">{organization.email}</span>.
              </p>
              <ContactForm strings={t} isUrdu={isUrdu} />
            </Reveal>
          </div>
        </Container>
      </section>

      <NavyBand containerClassName="grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <Reveal>
          <p className={cn("text-eyebrow text-dark-accent", isUrdu && "font-urdu-body text-base normal-case tracking-normal")}>
            {t.gettingThere.eyebrow}
          </p>
          <p className={cn("text-small mt-3 text-dark-body", isUrdu && "font-urdu-body text-base")}>{t.gettingThere.body}</p>
          <Button
            href={organization.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            brassFill
            className="mt-5"
            isUrdu={isUrdu}
          >
            {t.gettingThere.cta}
          </Button>
        </Reveal>
        <Reveal>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-11">
            {directionCities.map((city) => (
              <div key={city.name}>
                <p className={cn("text-card-title mb-4 text-dark-heading", isUrdu && "font-urdu-display")}>{city.name}</p>
                <div className="flex items-center justify-between border-b border-dark-border py-3 text-[0.96875rem]">
                  <span className="text-dark-heading">{city.streetLabel}</span>
                  <span className="text-dark-accent">{city.street}</span>
                </div>
                <div className="flex items-center justify-between border-b border-dark-border py-3 text-[0.96875rem]">
                  <span className="text-dark-heading">{city.landmarkLabel}</span>
                  <span className="text-dark-accent">{city.landmark}</span>
                </div>
                <div className="flex items-center justify-between border-b border-dark-border py-3 text-[0.96875rem]">
                  <span className="text-dark-heading">{city.transitLabel}</span>
                  <span className="text-dark-body">{city.transit}</span>
                </div>
                <div className="flex items-center justify-between py-3 text-[0.96875rem]">
                  <span className="text-dark-heading">{city.fourthLabel}</span>
                  <span className="text-dark-body">{city.fourthValue}</span>
                </div>
              </div>
            ))}
          </div>
          <p className={cn("text-small mt-6.5 border-s-[3px] border-dark-border-button ps-4.5 text-dark-body", isUrdu && "font-urdu-body text-base")}>
            {t.gettingThere.note}
          </p>
        </Reveal>
      </NavyBand>

      <CtaBand
        heading={t.prayerCta.heading}
        body={t.prayerCta.body}
        isUrdu={isUrdu}
        actions={
          <Button href={path("/prayer")} variant="secondary" isUrdu={isUrdu}>
            {t.prayerCta.cta}
          </Button>
        }
      />
    </main>
  );
}
