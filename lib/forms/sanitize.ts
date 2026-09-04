/**
 * Shared input-hardening helpers for lib/actions/{prayer,contact}.ts, used
 * after lib/forms/schema.ts's Zod schemas have already done the
 * structural validation (required-ness, length caps, email format). What
 * remains here is defense specific to how a value is *used* afterward —
 * stripping newlines before a string goes into an outgoing email's
 * subject/from-style line, and a loose email check for Prayer's
 * optional-and-never-hard-rejected email field.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_PATTERN.test(value);
}

/**
 * Strips CR/LF from a field before it's used as an email subject or
 * reply-to address. A naive EmailProvider implementation could otherwise
 * be tricked into injecting extra headers via a crafted submission
 * (classic email header injection) — collapsing to a single space instead
 * of rejecting keeps the field usable while removing the injection
 * vector, since no concrete provider exists yet to test against directly.
 */
export function stripNewlines(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}
