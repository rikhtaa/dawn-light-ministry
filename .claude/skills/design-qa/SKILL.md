---
name: design-qa
description: Perform visual QA on a Dawn of Light Ministry page against its connected Claude Design frames — desktop, mobile 390px, light/dark, English/Urdu-RTL, overflow, motion, and console errors. Use after implementing a page, or whenever asked to verify an existing page matches its design.
---

# Design QA

Compares a rendered page against its **actual connected design frames**,
not against the implementer's own output or memory of the design. This
is the QA pass referenced by `page-implementation` and by
`completion-and-git`.

## Setup

Load the Chrome extension tools in one batch if not already loaded:
`select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__javascript_tool,mcp__claude-in-chrome__browser_batch,mcp__claude-in-chrome__tabs_close_mcp,mcp__claude-in-chrome__read_console_messages`

Start the dev server if not already running, or reuse an already-running
one (`curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/en`
to check before starting a redundant one).

## What to check, per page/state that changed

**Desktop** (compare against the design's 1440 frame):
- header/nav (active-item state correct), breadcrumb, masthead
  eyebrow/h1/standfirst, document width/measure, section order
- typography hierarchy, spacing, borders, dividers match the design's
  literal values (not an approximation)
- cards/buttons: correct variant, correct hover treatment (see Motion
  below)
- footer

**Mobile 390px** — inject a fixed-position iframe rather than relying on
`resize_window` (this environment's window resize is often unreliable):
```js
document.body.innerHTML = '';
const iframe = document.createElement('iframe');
iframe.id = 'mobile-preview';
iframe.style.cssText = 'position:fixed;top:0;left:0;width:390px;height:900px;border:none;z-index:99999;background:white;';
iframe.src = location.href; // or the target URL
document.body.appendChild(iframe);
```
If the design draws a **distinct mobile composition** (not just a
shrink), verify that exact composition — different element order,
different card-vs-row treatment, different copy. Remove the iframe when
done.

**Overflow** (don't eyeball it — measure it):
```js
document.documentElement.scrollWidth   // must be <= 
window.innerWidth                       // at every width checked, both locales
```
Inside the mobile iframe, use `iframe.contentDocument.documentElement.scrollWidth`
vs `iframe.contentWindow.innerWidth`.

**Light/dark** — toggle via the header's dark-mode control, or check
directly if the design has no dark frame for this page (in which case you
are verifying the *extrapolation* looks reasonable against the
established token system, not against a drawn frame — say so in the
report).

**Urdu/RTL** — navigate to the `/ur/...` equivalent URL. Verify: layout
mirrors (grid order, rail side, border sides), breadcrumb separator
direction, no hard-coded left/right artifacts, unpublished Urdu content
correctly falls back to English (expected, not a bug), no overflow.

**Motion** — don't rely on a screenshot alone:
```js
getComputedStyle(el).transitionProperty   // must include `translate`
                                            // if the element uses
                                            // -translate-y/translate-y
getComputedStyle(el).transitionDuration   // 0.3s / 0.35s / 0.4s per
                                            // CLAUDE.md §12's bands
```
A screenshot mid-transition (caught opacity/translate between states) is
actually good evidence the animation is *running*, not a bug — a static
screenshot alone can't distinguish "animating correctly" from "snapping
instantly," which is exactly the Tailwind v4 translate/transform pitfall
(CLAUDE.md §12) — check the computed property, not just the picture.

**Console errors** — `read_console_messages` with `onlyErrors: true`
after navigating. Distinguish a genuinely new error from a known
pre-existing one (e.g. this project has a known dev-only warning from
`app/[locale]/layout.tsx`'s theme-init `<script>` tag when a not-found/
error boundary re-renders the layout tree client-side — don't re-report
that as new unless you're specifically asked to fix it).

**404/500 specifically** — trigger a real not-found via a bad URL
(`/en/some-bad-path`), and a real error via a temporary throwing test
route (create `app/[locale]/qa-throw-test/page.tsx` that unconditionally
throws, check it, **delete it before finishing** — never leave a QA
throw-route committed). A folder name starting with `_` is a Next.js
*private folder*, excluded from routing entirely — don't use one for a
throw-test route, it will silently 404 instead of erroring.

## Comparing, not inventing

Every finding should cite what the design frame actually shows, not what
you think would look better. If a design ambiguity is genuine (missing
frame, contradictory instructions, an element that doesn't map cleanly to
an existing component), report it explicitly rather than silently
resolving it.

## Report

Fold findings into the `completion-and-git` skill's checkpoint format —
QA results are items 5-8 of that report (Desktop/Mobile/Light-dark/
Urdu-RTL QA).
