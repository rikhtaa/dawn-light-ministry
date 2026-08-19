/**
 * Email delivery for the Prayer and Contact forms (HANDOFF.md §18: "server
 * action; validates; sends to pastornayyer@gmail.com"). Mirrors
 * lib/i18n/translation-provider.ts's own shape deliberately — same
 * "getConfigured*() returns null when nothing is set up" contract — since
 * .env.example already anticipated this exact gap ("Prayer / Contact form
 * email delivery (not yet implemented)": EMAIL_PROVIDER_API_KEY,
 * EMAIL_FROM, EMAIL_TO).
 *
 * No concrete vendor (Resend, SendGrid, Postmark, …) has been chosen, and
 * picking one here would be inventing a dependency CLAUDE.md §33 doesn't
 * authorize. `getConfiguredEmailProvider()` therefore returns null
 * unconditionally today — the server actions in lib/actions/ handle that
 * by returning an honest failure result (mapped to the design's own "We
 * could not send your request" state) rather than claiming a message was
 * delivered when nothing actually sends it anywhere. Once the
 * organization/developer selects a provider, implement an `EmailProvider`
 * here and return it from this function — no other file changes.
 */
export interface EmailMessage {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
}

export interface EmailProvider {
  readonly name: string;
  send(message: EmailMessage): Promise<void>;
}

export function getConfiguredEmailProvider(): EmailProvider | null {
  return null;
}
