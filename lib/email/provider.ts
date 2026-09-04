/**
 * Email delivery for the Prayer and Contact forms (HANDOFF.md §18: "server
 * action; validates; sends to pastornayyer@gmail.com"). Mirrors
 * lib/i18n/translation-provider.ts's own shape deliberately — same
 * "getConfigured*() returns null when nothing is set up" contract.
 *
 * Resend is the configured provider (a REST API called with plain
 * `fetch` — no SDK dependency needed). `getConfiguredEmailProvider()`
 * returns null whenever `EMAIL_PROVIDER_API_KEY`/`EMAIL_FROM` aren't both
 * set, and the server actions in lib/actions/ handle that by returning an
 * honest failure result (mapped to the design's own "We could not send
 * your request" state) rather than claiming a message was delivered when
 * nothing actually sends it anywhere. Real delivery requires real
 * credentials in `.env.local` — see `.env.example` for exactly which
 * variables and what `EMAIL_FROM` needs to be (a sender Resend has
 * verified for this account). Swapping providers later only touches this
 * file — no other file should need to change.
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

const RESEND_ENDPOINT = "https://api.resend.com/emails";

class ResendEmailProvider implements EmailProvider {
  readonly name = "resend";

  constructor(
    private readonly apiKey: string,
    private readonly from: string,
  ) {}

  async send(message: EmailMessage): Promise<void> {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: this.from,
        to: [message.to],
        reply_to: message.replyTo,
        subject: message.subject,
        text: message.text,
      }),
    });

    if (!response.ok) {
      // Never logs the response body — Resend's own validation errors
      // can echo back submitted field values (e.g. a rejected address),
      // which would defeat the "never log submission contents" rule.
      throw new Error(`Resend API responded with status ${response.status}`);
    }
  }
}

export function getConfiguredEmailProvider(): EmailProvider | null {
  const apiKey = process.env.EMAIL_PROVIDER_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) return null;
  return new ResendEmailProvider(apiKey, from);
}
