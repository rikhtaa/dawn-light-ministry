"use server";

import { getConfiguredEmailProvider } from "@/lib/email/provider";
import { organization } from "@/lib/organization";

export interface ContactFormState {
  status: "idle" | "validationError" | "success" | "failure";
  errors?: { name?: boolean; email?: boolean; message?: boolean; consent?: boolean };
}

/**
 * HANDOFF.md §18: "Contact form — same mechanics [as Prayer], plus
 * subject routing and duplicate-submission prevention." Contact.dc.html
 * draws only the default composition (no dedicated validation/sending/
 * success/failure frames of its own) — this reuses Prayer's proven state
 * shape rather than inventing a second one, per that explicit "same
 * mechanics" instruction.
 */
export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const errors: ContactFormState["errors"] = {};
  if (!name) errors.name = true;
  if (!email) errors.email = true;
  if (!message) errors.message = true;
  if (!consent) errors.consent = true;

  if (!name || !email || !message || !consent) {
    return { status: "validationError", errors };
  }

  const provider = getConfiguredEmailProvider();
  if (!provider) {
    console.error("[contact] submission received but no email provider is configured");
    return { status: "failure" };
  }

  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "General enquiry").trim();

  try {
    await provider.send({
      to: organization.email,
      replyTo: email,
      subject: `Contact form: ${subject}`,
      text: [`From: ${name}`, `Email: ${email}`, `Phone: ${phone || "(not given)"}`, `Subject: ${subject}`, "", message].join(
        "\n",
      ),
    });
    return { status: "success" };
  } catch (error) {
    console.error("[contact] email delivery failed", error instanceof Error ? error.message : error);
    return { status: "failure" };
  }
}
