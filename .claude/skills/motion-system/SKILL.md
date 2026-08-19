---
name: motion-system
description: Apply or audit the Dawn of Light Ministry site's existing, approved motion system (Reveal entrance animation, Button/Card hover) established on Home and About. Use whenever asked to add entrance or hover motion to a page, or to verify existing motion is correct.
---

# Motion system

There is exactly one motion system on this site, established on Home and
About and deliberately extended everywhere else. This skill is how to
apply or verify it — never invent a second one.

## Source of truth

`components/ui/Reveal.tsx`, `components/ui/Button.tsx`,
`components/ui/Card.tsx`. Inspect these directly before writing any new
motion — don't work from memory of what they do.

## The bands (fixed — do not invent a different value)

| What | Duration | Notes |
| --- | --- | --- |
| Links, buttons, toggles, nav underline | 300ms | `ease-out` |
| Interactive/clickable cards and rows | 350ms | `ease-out` |
| Entrance reveal | 400ms | `ease-out`, fade + 8px rise |
| Entrance stagger | 100ms per item | capped at `MAX_STAGGER_INDEX = 2` in `Reveal.tsx` — a 4th+ item shares the 3rd's delay |
| Hover lift | ~2px (`-translate-y-0.5`) | soft color-tinted shadow, never grey |

No scale, no rotation, no bounce, anywhere (the nav-underline `scale-x`
grow-in is a pre-existing 1D width reveal via Tailwind's built-in
`transition-transform`, not a target of this rule). Static/tertiary
content (breadcrumbs, footer links, static info cards, tertiary text
links) stays color-only at 300ms — no lift, no shadow; hover motion is
reserved for things that are actually clickable as one unit.

## Applying `Reveal` to new content

Match Home/About's actual granularity — don't over- or under-animate:

- **One section = one `Reveal`.** A section's whole content (heading +
  body + list) is wrapped in a single `<Reveal>` with no `index` — see
  `MissionSection.tsx`, `SeminarySection.tsx`. Don't wrap every paragraph
  individually.
- **A grid/row of repeated items = one `Reveal` per item, `index={i}`.**
  Ministry cards, location panels, leadership cards, destination cards —
  see `MinistriesSection.tsx`, `LocationsSection.tsx`. This is what
  produces the stagger.
- **Page masthead / breadcrumb / "On this page" rail never get `Reveal`.**
  This is the established convention from `PageMasthead`/
  `OnThisPageRail` on About — masthead content appears immediately on
  load with no scroll wait, so animating it adds flicker risk without
  benefit. Only body sections below the masthead get wrapped. Match this
  on new pages, including inline (non-`PageMasthead`) mastheads.
- `Reveal` already reveals immediately (no scroll wait) for anything
  already on screen at mount — this is why Home's `Hero` can use `Reveal`
  even though it's always above the fold.

## Applying hover to a new clickable element

- The **whole element is a link/button** → use `Button` or wrap in `Card
  interactive` (see `MinistryCard.tsx` for the pattern: `<Link><Card
  interactive>...</Card></Link>`).
- The element **contains** a link/button but isn't itself clickable (an
  info panel with a button inside) → the panel stays a plain `Card` with
  no `interactive`, only the inner `Button` gets hover.
- A **list of linked rows** → `components/ui/RuledRow.tsx`
  (`RuledList`/`RuledRow` with `asLink`), not a card grid — this project
  prefers ruled rows to cards for lists (HANDOFF §6). If a design's
  responsive shape genuinely doesn't fit `RuledRow`'s own breakpoint
  behavior (e.g. a composition that must stay one row at every width,
  where `RuledRow` would stack to a column below `sm`), reuse the exact
  same hover **values** (`transition-colors duration-300
  hover:bg-black/[0.02] dark:hover:bg-white/[0.03]`) directly rather than
  forcing the component — and say so in a comment.

## The Tailwind v4 translate/transform pitfall — check this every time

Tailwind v4's `-translate-y-*`/`translate-y-*` utilities compile to the
standalone CSS `translate` property, **not** `transform`:
```css
.hover\:-translate-y-0\.5:hover { translate: var(--tw-translate-x) var(--tw-translate-y); }
```
An arbitrary `transition-[background-color,border-color,transform,box-shadow]`
list does **not** cover that change — the element's y-position snaps
instantly instead of easing, with no visual error, no console warning.
This has already been found and fixed once across `Button.tsx`,
`Card.tsx`, `Reveal.tsx`, and `SupportSection.tsx` — don't reintroduce it
in a new component.

Whenever you write or touch a `transition-[...]` arbitrary property list
that sits alongside a `translate-y`/`-translate-y` utility:
- list `translate`, not `transform`, in that property list; or
- use Tailwind's own `transition-transform` utility instead of an
  arbitrary list — it already expands to `transform, translate, scale,
  rotate` correctly.

**Verify, don't assume.** After writing or changing motion, check the
live computed style rather than trusting the class name:
```js
getComputedStyle(el).transitionProperty  // must list `translate`
getComputedStyle(el).transitionDuration  // 0.3s / 0.35s / 0.4s
```

## Reduced motion

Already handled globally — `app/globals.css`'s
`@media (prefers-reduced-motion: reduce)` block forces every
`transition-duration`/`animation-duration` to `0.01ms !important`
site-wide, and `Reveal.tsx` additionally skips its scroll-triggered delay
entirely via its own `matchMedia` check. New motion that reuses `Reveal`/
`Button`/`Card` inherits this automatically — don't add a new
per-element `motion-reduce:`/`motion-safe:` variant.

## Do not

- Use the `motion` (Framer Motion) npm package, or extend
  `components/ui/layout-text-flip.tsx` / `components/ui/aurora-background.tsx`
  — these are unused scaffold leftovers from an abandoned pre-Direction-B
  prototype, not part of the approved system (see CLAUDE.md §6).
- Add parallax, carousels, auto-advancing anything, scroll-jacking, or a
  hero/page-transition animation — explicitly ruled out by HANDOFF §11.
- Invent a different duration, easing, or stagger value "because it looks
  better" — the bands above are frozen (HANDOFF §11's 2026-08-18
  Amendment is the last approved revision).
