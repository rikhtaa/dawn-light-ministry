"use client";

import { useActionState, useLayoutEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/Button";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { submitContactMessage, type ContactFormState } from "@/lib/actions/contact";
import { organization } from "@/lib/organization";
import type { ContactStrings } from "@/content/i18n/en/contact";
import { cn } from "@/lib/cn";

const contactFormInitialState: ContactFormState = { status: "idle" };

interface ContactFormProps {
  strings: ContactStrings;
  isUrdu?: boolean;
  /** Compact — mobile's narrower single-column card treatment (same fields, tighter spacing). */
  variant?: "default" | "compact";
}

function SubmitButton({ label, sendingLabel }: { label: string; sendingLabel: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" className="w-full" disabled={pending}>
      {pending ? sendingLabel : label}
    </Button>
  );
}

const DEFAULT_FIELDS = { name: "", email: "", phone: "", message: "" };

/**
 * HANDOFF.md §18: "Contact form — same mechanics [as Prayer]." Reuses
 * Prayer's own success/failure visual treatment (see components/prayer/
 * PrayerForm.tsx) rather than a second invented state design, per that
 * instruction — Contact.dc.html draws no state frames of its own. Fields
 * are controlled (see PrayerForm.tsx's own comment) so the design's
 * "failure — the form is preserved" behaviour survives the browser's
 * native post-action form reset, which would otherwise silently clear
 * everything the visitor typed.
 */
export function ContactForm({ strings: t, isUrdu = false, variant = "default" }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactMessage, contactFormInitialState);
  const compact = variant === "compact";

  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [subject, setSubject] = useState<string>(t.form.subjectOptions.general);
  const [consent, setConsent] = useState(false);
  const consentRef = useRef<HTMLInputElement>(null);

  // See components/prayer/PrayerForm.tsx's own comment: React 19's native
  // post-action form reset can desync a controlled checkbox's DOM state
  // from React state without firing onChange — re-asserted every render.
  useLayoutEffect(() => {
    if (consentRef.current) consentRef.current.checked = consent;
  });

  function setField<K extends keyof typeof DEFAULT_FIELDS>(key: K, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function resetFields() {
    setFields(DEFAULT_FIELDS);
    setSubject(t.form.subjectOptions.general);
    setConsent(false);
  }

  if (state.status === "success") {
    return (
      <div className="border-s-[3px] border-success bg-success/10 px-6 py-6 sm:px-7">
        <p className={cn("text-card-title text-success", isUrdu && "font-urdu-display")}>{t.success.heading}</p>
        <p className={cn("text-body mt-2.5 text-ink-body", isUrdu && "font-urdu-body")}>{t.success.body}</p>
        <div className="mt-4.5 flex flex-wrap gap-2.5">
          <Button type="button" variant="secondary" onClick={resetFields} isUrdu={isUrdu}>
            {t.success.sendAnother}
          </Button>
          <Button href="/" variant="secondary" isUrdu={isUrdu}>
            {t.success.returnHome}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {state.status === "failure" ? (
        <div className="mb-5 border-s-[3px] border-error bg-error/10 px-5 py-5" role="alert">
          <p className={cn("text-card-title text-primary", isUrdu && "font-urdu-display")}>{t.failure.heading}</p>
          <p className={cn("text-small mt-1.5 text-ink-body", isUrdu && "font-urdu-body")}>
            {t.failure.body} {organization.phone}.
          </p>
        </div>
      ) : null}

      <form action={formAction} className={cn("flex flex-col", compact ? "gap-3.5" : "gap-4.5")}>
        {/* See components/prayer/PrayerForm.tsx's own comment: `sr-only`,
            not an off-screen `left` offset, to avoid inflating
            document.scrollWidth under `dir="rtl"`. */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className={cn(!compact && "grid grid-cols-1 gap-4 sm:grid-cols-2")}>
          <FormField
            label={t.form.nameLabel}
            htmlFor="contact-name"
            error={state.status === "validationError" && state.errors?.name ? t.form.errors.name : undefined}
            isUrdu={isUrdu}
          >
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={t.form.namePlaceholder}
              value={fields.name}
              onChange={(e) => setField("name", e.target.value)}
              aria-invalid={state.status === "validationError" && state.errors?.name ? true : undefined}
              className={cn(
                inputClasses(state.status === "validationError" && !!state.errors?.name),
                isUrdu && "font-urdu-body text-right",
              )}
            />
          </FormField>

          <FormField
            label={t.form.emailLabel}
            htmlFor="contact-email"
            error={state.status === "validationError" && state.errors?.email ? t.form.errors.email : undefined}
            isUrdu={isUrdu}
          >
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.form.emailPlaceholder}
              value={fields.email}
              onChange={(e) => setField("email", e.target.value)}
              dir="ltr"
              aria-invalid={state.status === "validationError" && state.errors?.email ? true : undefined}
              className={inputClasses(state.status === "validationError" && !!state.errors?.email)}
            />
          </FormField>
        </div>

        <FormField
          label={t.form.phoneLabel}
          htmlFor="contact-phone"
          optionalLabel={t.form.phoneOptional}
          isUrdu={isUrdu}
        >
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={t.form.phonePlaceholder}
            value={fields.phone}
            onChange={(e) => setField("phone", e.target.value)}
            dir="ltr"
            className={inputClasses()}
          />
        </FormField>

        <FormField label={t.form.subjectLabel} htmlFor="contact-subject" help={t.form.subjectHelp} isUrdu={isUrdu}>
          <div className="relative">
            <select
              id="contact-subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={cn(
                inputClasses(),
                "appearance-none pe-10",
                isUrdu && "font-urdu-body text-right",
              )}
            >
              <option value={t.form.subjectOptions.general}>{t.form.subjectOptions.general}</option>
              <option value={t.form.subjectOptions.church}>{t.form.subjectOptions.church}</option>
              <option value={t.form.subjectOptions.seminary}>{t.form.subjectOptions.seminary}</option>
              <option value={t.form.subjectOptions.childrensEducation}>{t.form.subjectOptions.childrensEducation}</option>
              <option value={t.form.subjectOptions.resources}>{t.form.subjectOptions.resources}</option>
              <option value={t.form.subjectOptions.support}>{t.form.subjectOptions.support}</option>
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 end-4 flex items-center text-ink-disabled"
            >
              ▾
            </span>
          </div>
        </FormField>

        <FormField
          label={t.form.messageLabel}
          htmlFor="contact-message"
          error={state.status === "validationError" && state.errors?.message ? t.form.errors.message : undefined}
          isUrdu={isUrdu}
        >
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder={t.form.messagePlaceholder}
            value={fields.message}
            onChange={(e) => setField("message", e.target.value)}
            aria-invalid={state.status === "validationError" && state.errors?.message ? true : undefined}
            className={cn(
              inputClasses(state.status === "validationError" && !!state.errors?.message),
              "min-h-[130px] resize-y",
              isUrdu && "font-urdu-body text-right",
            )}
          />
        </FormField>

        <div>
          <label className="flex items-start gap-3">
            <input
              ref={consentRef}
              type="checkbox"
              name="consent"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              aria-invalid={state.status === "validationError" && state.errors?.consent ? true : undefined}
              className={cn(
                "mt-0.5 h-[18px] w-[18px] shrink-0 border bg-surface accent-primary dark:bg-background",
                state.status === "validationError" && state.errors?.consent ? "border-error" : "border-border-strong",
              )}
            />
            <span className={cn("text-small text-ink-body", isUrdu && "font-urdu-body text-base")}>
              {t.form.consentLabel}
            </span>
          </label>
          {state.status === "validationError" && state.errors?.consent ? (
            <p role="alert" className="mt-1.5 flex items-start gap-1.5 text-small text-error">
              <span aria-hidden="true" className="font-semibold">
                !
              </span>
              <span className={isUrdu ? "font-urdu-body" : undefined}>{t.form.errors.consent}</span>
            </p>
          ) : null}
        </div>

        <SubmitButton label={t.form.submitLabel} sendingLabel={t.form.submitLabelSending} />

        <p className={cn("text-caption text-ink-faint", isUrdu && "font-urdu-body text-sm")}>{t.form.footerNote}</p>
      </form>
    </>
  );
}
