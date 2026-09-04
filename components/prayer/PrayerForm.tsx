"use client";

import { useActionState, useLayoutEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/Button";
import { FormField, inputClasses } from "@/components/ui/FormField";
import { submitPrayerRequest, type PrayerFormState } from "@/lib/actions/prayer";
import { organization } from "@/lib/organization";
import type { PrayerStrings } from "@/content/i18n/en/prayer";
import { cn } from "@/lib/cn";

const prayerFormInitialState: PrayerFormState = { status: "idle" };

interface PrayerFormProps {
  strings: PrayerStrings;
  isUrdu?: boolean;
}

function SubmitButton({
  label,
  sendingLabel,
}: {
  label: string;
  sendingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button
        type="submit"
        variant="primary"
        className="w-full"
        disabled={pending}
      >
        {pending ? sendingLabel : label}
      </Button>

      {pending ? (
        <div
          className="mt-2.5 h-0.5 overflow-hidden bg-border-soft"
          aria-hidden="true"
        >
          <div className="h-full w-[45%] animate-pulse bg-accent" />
        </div>
      ) : null}
    </div>
  );
}

export function PrayerForm({
  strings: t,
  isUrdu = false,
}: PrayerFormProps) {
  const [state, formAction] = useActionState(
    submitPrayerRequest,
    prayerFormInitialState,
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [followUp, setFollowUp] = useState(false);
  const [consent, setConsent] = useState(false);

  const followUpRef = useRef<HTMLInputElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (followUpRef.current) {
      followUpRef.current.checked = followUp;
    }

    if (consentRef.current) {
      consentRef.current.checked = consent;
    }
  });

  if (state.status === "success") {
    return (
      <div className="border-s-[3px] border-success bg-success/10 px-6 py-6 sm:px-7">
        <p
          className={cn(
            "text-card-title text-success",
            isUrdu && "font-urdu-display",
          )}
        >
          {t.success.heading}
        </p>

        <p
          className={cn(
            "text-body mt-2.5 text-ink-body",
            isUrdu && "font-urdu-body",
          )}
        >
          {t.success.body}
        </p>

        <div className="mt-4.5 flex flex-wrap gap-2.5">
          <Button
            href={isUrdu ? "/ur/prayer" : "/en/prayer"}
            variant="secondary"
            isUrdu={isUrdu}
          >
            {t.success.sendAnother}
          </Button>

          <Button
            href={isUrdu ? "/ur" : "/en"}
            variant="secondary"
            isUrdu={isUrdu}
          >
            {t.success.returnHome}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-border bg-paper p-9 dark:border-dark-border dark:bg-dark-ground">
      <p
        className={cn(
          "text-card-title text-foreground",
          isUrdu && "font-urdu-display",
        )}
      >
        {t.form.heading}
      </p>

      <p
        className={cn(
          "text-small mt-1.5 mb-6.5 text-ink-muted",
          isUrdu && "font-urdu-body text-base",
        )}
      >
        {t.form.subheading}
      </p>

      {state.status === "failure" ? (
        <div
          className="mb-5 border-s-[3px] border-error bg-error/10 px-5 py-5"
          role="alert"
        >
          <p
            className={cn(
              "text-card-title text-primary",
              isUrdu && "font-urdu-display",
            )}
          >
            {t.failure.heading}
          </p>

          <p
            className={cn(
              "text-small mt-1.5 text-ink-body",
              isUrdu && "font-urdu-body",
            )}
          >
            {t.failure.body} {organization.phone}.
          </p>
        </div>
      ) : null}

      <form action={formAction} className="flex flex-col gap-5">
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="prayer-website">Website</label>
          <input
            id="prayer-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <FormField
          label={t.form.nameLabel}
          htmlFor="prayer-name"
          optionalLabel={t.form.nameOptional}
          isUrdu={isUrdu}
        >
          <input
            id="prayer-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t.form.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={cn(
              inputClasses(),
              isUrdu && "font-urdu-body text-right",
            )}
          />
        </FormField>

        <FormField
          label={t.form.emailLabel}
          htmlFor="prayer-email"
          optionalLabel={t.form.emailOptional}
          isUrdu={isUrdu}
        >
          <input
            id="prayer-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.form.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses()}
            dir="ltr"
          />
        </FormField>

        <FormField
          label={t.form.requestLabel}
          htmlFor="prayer-request"
          error={
            state.status === "validationError" && state.requestError
              ? t.form.requestErrorEmpty
              : undefined
          }
          isUrdu={isUrdu}
        >
          <textarea
            id="prayer-request"
            name="request"
            required
            rows={6}
            maxLength={2000}
            placeholder={t.form.requestPlaceholder}
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            aria-invalid={
              state.status === "validationError" && state.requestError
                ? true
                : undefined
            }
            className={cn(
              inputClasses(
                state.status === "validationError" &&
                  !!state.requestError,
              ),
              "min-h-[150px] resize-y",
              isUrdu && "font-urdu-body text-right",
            )}
          />
        </FormField>

        <label className="flex items-start gap-3">
          <input
            ref={followUpRef}
            type="checkbox"
            name="followUp"
            checked={followUp}
            onChange={(e) => setFollowUp(e.target.checked)}
            className="mt-0.5 h-[18px] w-[18px] shrink-0 border border-border-strong bg-surface accent-primary dark:bg-background"
          />

          <span
            className={cn(
              "text-small text-ink-body",
              isUrdu && "font-urdu-body text-base",
            )}
          >
            {t.form.followUpLabel}
          </span>
        </label>

        <div>
          <label className="flex items-start gap-3">
            <input
              ref={consentRef}
              type="checkbox"
              name="consent"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              aria-invalid={
                state.status === "validationError" &&
                state.consentError
                  ? true
                  : undefined
              }
              className={cn(
                "mt-0.5 h-[18px] w-[18px] shrink-0 border bg-surface accent-primary dark:bg-background",
                state.status === "validationError" &&
                  state.consentError
                  ? "border-error"
                  : "border-border-strong",
              )}
            />

            <span
              className={cn(
                "text-small text-ink-body",
                isUrdu && "font-urdu-body text-base",
              )}
            >
              {t.form.consentLabel}
            </span>
          </label>

          {state.status === "validationError" &&
          state.consentError ? (
            <p
              role="alert"
              className="mt-1.5 flex items-start gap-1.5 text-small text-error"
            >
              <span aria-hidden="true" className="font-semibold">
                !
              </span>

              <span className={isUrdu ? "font-urdu-body" : undefined}>
                {t.form.consentErrorEmpty}
              </span>
            </p>
          ) : null}
        </div>

        <SubmitButton
          label={t.form.submitLabel}
          sendingLabel={t.form.submitLabelSending}
        />

        <p
          className={cn(
            "text-caption text-ink-faint",
            isUrdu && "font-urdu-body text-sm",
          )}
        >
          {t.form.footerNote}
        </p>
      </form>
    </div>
  );
}