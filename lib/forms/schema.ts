import { z } from "zod";

/**
 * Server-side validation for the Prayer form — the authoritative check,
 * since a raw POST can skip the browser's own `required`/`maxLength`
 * entirely. `name`/`email` stay genuinely optional here (the design's own
 * "may be sent anonymously"); a malformed email is treated by the caller
 * as "not given" rather than a hard validation error, since a reply is
 * optional too — so this schema itself doesn't reject email format.
 */
export const prayerSubmissionSchema = z.object({
  request: z.string().trim().min(1, "Request is required").max(4000, "Request is too long"),
  name: z.string().trim().max(200, "Name is too long").default(""),
  email: z.string().trim().max(320, "Email is too long").default(""),
  followUp: z.boolean().default(false),
  consent: z.literal(true, "Consent is required"),
});

export type PrayerSubmission = z.infer<typeof prayerSubmissionSchema>;

/**
 * Server-side validation for the Contact form. Unlike Prayer, email here
 * is required and must be well-formed — the ministry needs a working
 * address to reply to a general enquiry.
 */
export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200, "Name is too long"),
  email: z.string().trim().max(320, "Email is too long").email("Enter a valid email"),
  phone: z.string().trim().max(50, "Phone is too long").default(""),
  subject: z.string().trim().max(200, "Subject is too long").default("General enquiry"),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message is too long"),
  consent: z.literal(true, "Consent is required"),
});

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
