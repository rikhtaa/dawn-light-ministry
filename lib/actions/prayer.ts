"use server";

import { getConfiguredEmailProvider } from "@/lib/email/provider";
import { organization } from "@/lib/organization";
import { isValidEmail, stripNewlines } from "@/lib/forms/sanitize";
import { prayerSubmissionSchema } from "@/lib/forms/schema";

export interface PrayerFormState {
  status: "idle" | "validationError" | "success" | "failure";
  requestError?: boolean;
  consentError?: boolean;
}

/**
 * HANDOFF.md §18: "server action; validates; sends to
 * pastornayyer@gmail.com; honeypot + rate limit; success and error
 * states." §7's six required states map onto this action's three outcomes
 * plus the client's own pending/disabled handling (components/prayer/PrayerForm.tsx):
 * validationError ~ "validating", a thrown/caught failure ~ "error", and
 * "loading"/"disabled" are the client disabling the submit button while
 * this action is in flight — there's no separate fourth server outcome to
 * invent for them.
 *
 * CLAUDE.md §18/HANDOFF.md §18: prayer requests are private — this
 * function never logs field contents, only structural outcomes.
 *
 * No real rate limiting is implemented — a per-request in-memory counter
 * doesn't survive across serverless invocations, and a real limiter needs
 * a shared store (e.g. Upstash Redis) this project doesn't have yet. The
 * honeypot field is real; rate limiting is a known gap, not silently
 * pretended to exist.
 */
export async function submitPrayerRequest(
  _prevState: PrayerFormState,
  formData: FormData,
): Promise<PrayerFormState> {
  // Honeypot: a field real visitors never see or fill (hidden via CSS in
  // the form, not `type="hidden"`, since some bots skip genuinely hidden
  // inputs). A filled value means a bot — report success without sending
  // anything, so the bot gets no signal that it was caught.
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success" };
  }

  // Zod is the authoritative check — a raw POST can skip the browser's
  // own `required`/`maxLength` entirely.
  const parsed = prayerSubmissionSchema.safeParse({
    request: String(formData.get("request") ?? ""),
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    followUp: formData.get("followUp") === "on",
    consent: formData.get("consent") === "on",
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "validationError",
      requestError: !!fieldErrors.request,
      consentError: !!fieldErrors.consent,
    };
  }

  const provider = getConfiguredEmailProvider();
  if (!provider) {
    console.error("[prayer] submission received but no email provider is configured");
    return { status: "failure" };
  }

  const { request, followUp } = parsed.data;
  const name = stripNewlines(parsed.data.name);
  const rawEmail = stripNewlines(parsed.data.email);
  // Email is optional here — a malformed value is treated as not given
  // (never passed to the provider as replyTo) rather than blocking
  // submission over an optional field.
  const email = rawEmail && isValidEmail(rawEmail) ? rawEmail : "";

  try {
    await provider.send({
      to: organization.email,
      replyTo: email || undefined,
      subject: "Prayer request from the website",
      text: [
        `From: ${name || "(not given)"}`,
        `Email: ${rawEmail || "(not given)"}`,
        `Follow-up permitted: ${followUp ? "yes" : "no"}`,
        "",
        request,
      ].join("\n"),
    });
    return { status: "success" };
  } catch (error) {
    console.error("[prayer] email delivery failed", error instanceof Error ? error.message : error);
    return { status: "failure" };
  }
}
