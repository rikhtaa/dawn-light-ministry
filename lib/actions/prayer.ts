"use server";

import { getConfiguredEmailProvider } from "@/lib/email/provider";
import { organization } from "@/lib/organization";

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

  const request = String(formData.get("request") ?? "").trim();
  const consent = formData.get("consent") === "on";
  if (!request || !consent) {
    return { status: "validationError", requestError: !request, consentError: !consent };
  }

  const provider = getConfiguredEmailProvider();
  if (!provider) {
    console.error("[prayer] submission received but no email provider is configured");
    return { status: "failure" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const followUp = formData.get("followUp") === "on";

  try {
    await provider.send({
      to: organization.email,
      replyTo: email || undefined,
      subject: "Prayer request from the website",
      text: [
        `From: ${name || "(not given)"}`,
        `Email: ${email || "(not given)"}`,
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
