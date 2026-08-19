import { notFound } from "next/navigation";

/**
 * Without this catch-all, a URL with no matching route file at all (e.g.
 * `/en/some-typo`) never reaches `app/[locale]/not-found.tsx` — Next.js
 * only attaches a not-found boundary to a segment it actually matched, so
 * an unmatched path falls through to Next's own generic built-in 404
 * instead of this project's styled one. This file exists purely to give
 * every `/[locale]/...` path *something* to match, so `notFound()` always
 * resolves against `app/[locale]/not-found.tsx`. Lower priority than any
 * specific static/dynamic route, so it never shadows a real page.
 */
export default function CatchAll() {
  notFound();
}
