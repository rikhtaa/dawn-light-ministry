import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type { HomeStrings } from "@/content/i18n/en/home";

interface PrayerSectionProps {
  strings: HomeStrings["prayerCta"];
  ctaHref: string;
  isUrdu: boolean;
}

/**
 * The mockup's form panel is a visual preview, not the real thing — the
 * functional prayer form (server-side validation, anti-spam, rate
 * limiting, all six states) belongs to the dedicated /prayer page
 * (HANDOFF.md §23 step 8 / PRD §10), not the homepage. The field mockups
 * below are decorative (`aria-hidden`) so no non-working form controls
 * reach keyboard/screen-reader users; the one real, accessible control is
 * the submit button, which links through to /prayer.
 */
export function PrayerSection({ strings, ctaHref, isUrdu }: PrayerSectionProps) {
  return (
    <section className="border-t border-border bg-band py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_520px] lg:gap-16">
          <div className="min-w-0">
            <p
              className={cn(
                "text-eyebrow text-primary",
                isUrdu && "font-urdu-body text-base normal-case tracking-normal",
              )}
            >
              {strings.eyebrow}
            </p>
            <h2 className={cn("text-h2 mt-4 text-foreground", isUrdu && "font-urdu-display")}>
              {strings.heading}
            </h2>
            <p
              className={cn(
                "text-body measure mt-5 text-ink-body",
                isUrdu && "font-urdu-body",
              )}
            >
              {strings.body}
            </p>
            <p
              className={cn(
                "text-small mt-5 border-s-[3px] border-accent ps-4 text-ink-muted",
                isUrdu && "font-urdu-body text-base",
              )}
            >
              {strings.note}
            </p>
          </div>

          <div className="min-w-0 border border-border bg-surface p-8" aria-hidden="true">
            <p className="font-serif text-[1.3125rem] text-foreground">{strings.formTitle}</p>
            <div className="mt-6 flex flex-col gap-4">
              <PreviewField label={strings.nameLabel} optional placeholder={strings.namePlaceholder} />
              <PreviewField label={strings.emailLabel} optional placeholder={strings.emailPlaceholder} />
              <PreviewField label={strings.requestLabel} placeholder={strings.requestPlaceholder} tall />
              <PreviewCheckbox label={strings.followUpLabel} />
              <PreviewCheckbox label={strings.consentLabel} checked />
            </div>
          </div>
        </div>

        <div className="mt-8 lg:ms-auto lg:w-[520px]">
          <Button href={ctaHref} variant="primary" isUrdu={isUrdu} className="w-full">
            {strings.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}

function PreviewField({
  label,
  optional = false,
  placeholder,
  tall = false,
}: {
  label: string;
  optional?: boolean;
  placeholder: string;
  tall?: boolean;
}) {
  return (
    <div>
      <p className="text-[0.8125rem] font-medium text-ink-body">
        {label} {optional ? <span className="font-normal text-ink-ghost">(optional)</span> : null}
      </p>
      <div
        className={cn(
          "mt-1.5 border border-input-border bg-surface-warm px-3.5 py-3 text-small text-ink-disabled",
          tall && "min-h-[88px]",
        )}
      >
        {placeholder}
      </div>
    </div>
  );
}

function PreviewCheckbox({ label, checked = false }: { label: string; checked?: boolean }) {
  return (
    <div className="flex items-start gap-2.5">
      <div
        className={cn(
          "mt-0.5 h-[17px] w-[17px] shrink-0 border",
          checked ? "border-primary bg-primary" : "border-ink-disabled",
        )}
      />
      <p className="text-[0.84375rem] leading-[1.55] text-ink-muted">{label}</p>
    </div>
  );
}
