"use server";

import { getConfiguredEmailProvider } from "@/lib/email/provider";
import { organization } from "@/lib/organization";
import { stripNewlines } from "@/lib/forms/sanitize";
import { contactSubmissionSchema } from "@/lib/forms/schema";

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

  const parsed = contactSubmissionSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    consent: formData.get("consent") === "on",
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "validationError",
      errors: {
        name: !!fieldErrors.name,
        email: !!fieldErrors.email,
        message: !!fieldErrors.message,
        consent: !!fieldErrors.consent,
      },
    };
  }

  const provider = getConfiguredEmailProvider();
  if (!provider) {
    console.error("[contact] submission received but no email provider is configured");
    return { status: "failure" };
  }

  const name = stripNewlines(parsed.data.name);
  const email = stripNewlines(parsed.data.email);
  const phone = stripNewlines(parsed.data.phone);
  const subject = stripNewlines(parsed.data.subject) || "General enquiry";
  const { message } = parsed.data;

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
