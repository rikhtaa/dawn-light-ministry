import { createHash } from "node:crypto";

/**
 * Stable content fingerprint for an English source string. Every
 * translated leaf stores the hash of the English text it was translated
 * from (`sourceHash`); comparing that against `hashSource(currentEnglish)`
 * is how staleness is detected when the English source changes — no
 * separate "stale" flag to keep in sync, just a derived comparison.
 *
 * Not a security hash — just needs to be stable and cheap to compute over
 * a few hundred short strings, so a truncated sha256 hex digest is enough.
 */
export function hashSource(text: string): string {
  return createHash("sha256").update(text, "utf8").digest("hex").slice(0, 16);
}
