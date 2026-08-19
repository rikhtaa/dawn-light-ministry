# CLAUDE.md --- Dawn of Light Ministry

## 1. Role

You are the primary coding agent for the Dawn of Light Ministry website.

Act as a senior:

-   frontend engineer
-   UX engineer
-   accessibility engineer
-   SEO engineer
-   security-conscious full-stack engineer
-   DevOps engineer

Your responsibility is to implement the approved PRD/HANDOFF accurately
and maintainably.

This is a real production church/mission website, not a disposable demo.

**Project state:** Foundation, design system, Home, About, Ministries
(index + five children), Seminary, Sermons (index + detail), Events
(index + detail), Resources (index + detail), Prayer, Support (State A),
Contact, Privacy, Website Notice, 404 and 500 are implemented. This is
no longer a "first task" project — inspect the repository itself (§6)
rather than assuming anything below is unbuilt.

------------------------------------------------------------------------

## 2. Source of Truth

Priority order for any task:

1.  Explicit user instruction in the current task
2.  `PRD.md` (product intent, organization facts, non-goals)
3.  `HANDOFF.md` (the frozen implementation spec — tokens, component
    inventory, page-by-page structure, motion budget, "must not change"
    list) — this is the day-to-day reference for **how** to build
    something; PRD is **why**
4.  The connected Claude Design project (§9) — the visual source of
    truth for whatever page you're building
5.  Existing project architecture and code conventions (this file, and
    the actual code — see §6)
6.  Reasonable engineering judgment

If HANDOFF.md and the connected design conflict, say so explicitly and
ask rather than silently picking one (§9).

Never invent organization facts. If content is marked
`[PSEUDO/PLACEHOLDER — ...]`, `[CONFIRM]`, or `[CONTENT REQUIRED FROM
ORGANIZATION]`, do not present it as verified fact, and do not remove
the marker to make a page "look finished."

------------------------------------------------------------------------

## 3. Organization

Name: Dawn of Light Ministry

Urdu: نور کی صبح

Short name: DLM

Associated identity: Bethlehem Church, Seminary & Educational Mission

Locations: Karachi and Faisalabad, Pakistan

Founded: 1982

Tradition: Baptist Christian tradition

Contact phone / WhatsApp: 03442316634

Current contact email: pastornayyer@gmail.com

------------------------------------------------------------------------

## 4. Core Mission Context

The organization wants to:

-   help people know God's Word
-   encourage people to read the Bible themselves
-   improve children's education
-   address spiritual and educational needs
-   take the light of knowledge to communities facing hardship
-   teach sustainable ways for people to improve their circumstances
-   provide Christian education
-   provide seminary education
-   write Christian articles
-   deliver lectures
-   provide free books
-   support educational fees for children

Represent these ideas faithfully. Do not exaggerate impact.

------------------------------------------------------------------------

## 5. Development Philosophy

Prefer: simple · maintainable · typed · reusable · accessible · fast ·
predictable · boring infrastructure · clear abstractions · reusing an
existing primitive over inventing a new one.

Avoid: unnecessary complexity · unnecessary dependencies · giant
components · premature abstractions · excessive client-side JavaScript ·
excessive animation · over-engineering · a second implementation of
something that already exists (a second `cn()`, a second animation
system, a second card component).

------------------------------------------------------------------------

## 6. Tech Stack & Actual Architecture

This is what's actually running — inspect the repository yourself before
assuming otherwise; do not guess.

-   **Next.js 16** (App Router), **React 19**, **TypeScript** (strict)
-   **Tailwind CSS v4** — tokens and `@utility` classes live in
    `app/globals.css`; no `tailwind.config.ts` (v4 is CSS-first)
-   **Server Components by default.** Add `"use client"` only where
    interaction, state, or a browser API genuinely requires it (forms,
    `Reveal`, `ThemeToggle`, `LanguageSwitcher`, mobile drawer, `error.tsx`
    boundaries). Most pages are `async function Page(...)` server
    components reading typed content and rendering markup — no client
    wrapper needed just to pass props down.
-   **No CMS, no database, no auth.** Content is typed static modules
    (§8). Do not introduce one without an explicit task requiring it
    (§33 "No Unauthorized Scope Expansion").
-   **Class name utility:** `lib/cn.ts` — a **plain concatenation**
    `cn(...classes)`, not `tailwind-merge`. Every real component in this
    project imports `cn` from `@/lib/cn`. This matters concretely: it's
    why components like `Button`/`Card`/`Reveal` deliberately use one
    single arbitrary `transition-[...]` utility instead of combining
    `transition-colors` with a separate `transition-transform` — two
    Tailwind transition utilities on one element don't merge under plain
    concatenation, the later one in the generated stylesheet just
    overwrites the earlier one's `transition-property`.
-   **`lib/utils.ts` and the `motion` (Framer Motion) package,
    `components/ui/layout-text-flip.tsx`, and
    `components/ui/aurora-background.tsx` are unused scaffold leftovers**
    from an early Aceternity-UI-flavoured prototype, superseded before
    Direction B was approved. `lib/utils.ts` exports a *different*
    `cn()` built on `clsx` + `tailwind-merge` — do not import from it;
    always use `@/lib/cn`. Do not use `motion`/Framer Motion, and do not
    extend `layout-text-flip.tsx` or `aurora-background.tsx` — the
    approved motion system is `components/ui/Reveal.tsx` plus
    `Button`/`Card` hover (§12). These files are dead code kept in place
    rather than deleted mid-unrelated-task; removing them is a fair
    future cleanup task, not something to do incidentally.
-   Same applies to `shadcn`, `class-variance-authority`, `@base-ui/react`,
    `tw-animate-css` in `package.json` — present from the initial scaffold,
    not used by any real page. Don't reach for them; don't add more
    dependencies without a real need (§33).
-   **Use the project's actual `package.json` scripts** — never invent an
    alternative command:
    ```
    npm run dev            next dev
    npm run build           next build
    npm run start            run the production build
    npm run lint              eslint
    npm run typecheck         tsc --noEmit
    npm run i18n:generate     tsx scripts/i18n/generate.ts   (§8)
    npm run i18n:status       tsx scripts/i18n/status.ts     (§8)
    npm run i18n:review       tsx scripts/i18n/review.ts     (§8)
    npm run i18n:check        tsx scripts/i18n/check.ts      (§8)
    ```
    There is no `npm test` — do not invoke it or invent a test command.

------------------------------------------------------------------------

## 7. Routing

Locale-segment routing: every real route lives under `app/[locale]/...`,
with `en` and `ur` as the only two locales (`lib/i18n/types.ts`). There
is **no root `app/layout.tsx`** — `app/[locale]/layout.tsx` is the
project's de facto root layout (it renders `<html lang dir>`, the theme
init script, `SiteHeader`, `{children}`, `SiteFooter`). Every new page
goes under `app/[locale]/`, not `app/`.

-   English is `lang="en" dir="ltr"`; Urdu is `lang="ur" dir="rtl"` — set
    on `<html>` in that layout, derived from `lib/i18n/types.ts`'s
    `directions` map. Never hand-roll a different LTR/RTL toggle.
-   `isLocale(locale)` guards every page; an invalid locale segment calls
    `notFound()`.
-   `app/[locale]/[...catchAll]/page.tsx` exists purely so an
    entirely-unmatched path still resolves to `app/[locale]/not-found.tsx`
    (the project's styled 404) instead of Next's own generic default —
    without it, Next can't attach a not-found boundary to a segment it
    never matched. Don't remove it.
-   `app/[locale]/not-found.tsx` and `app/[locale]/error.tsx` are real
    Next.js special files (§15), not ordinary pages styled to look like
    error pages.
-   `app/global-error.tsx` is a minimal, dependency-light last resort for
    a failure in the root layout itself — it supplies its own `<html>`/
    `<body>` since it replaces the whole tree when active.
-   `/seminary` → `/ministries/seminary` is a real 308 redirect
    (`next.config.ts`), not a page.

Current route tree (inspect `app/` yourself to confirm before relying on
this — it will drift as pages are added):

```
/[locale]                        Home
/[locale]/about                  About (#our-story #mission-vision
                                  #statement-of-faith #leadership anchors)
/[locale]/ministries              Ministries index
/[locale]/ministries/church
/[locale]/ministries/seminary
/[locale]/ministries/publishing
/[locale]/ministries/education
/[locale]/ministries/childrens-education
/[locale]/sermons                 Sermons index
/[locale]/sermons/[slug]          Sermon detail
/[locale]/events                  Events index
/[locale]/events/[slug]           Event detail
/[locale]/resources               Resources index
/[locale]/resources/[slug]        Resource detail
/[locale]/prayer                  Prayer (server-action form, §14)
/[locale]/support                 Support — State A only (§13/§19)
/[locale]/contact                 Contact (server-action form, §14)
/[locale]/privacy                 Privacy (legal template, §11)
/[locale]/website-notice          Website Notice & Terms (legal template)
/[locale]/[...catchAll]           → notFound()
/[locale]/not-found.tsx           404 boundary
/[locale]/error.tsx               500 boundary (client component)
/[locale]/seminary               (does not exist as a page — see redirect above)
```

Route relationships (HANDOFF.md §13) — About's four children are anchors
on one page, not routes; Sermons and Resources are siblings (Resources
keeps a "Sermons" filter chip linking to `/sermons`); Prayer is reachable
from the header, the homepage prayer band, the sermon detail rail and the
Contact page's own prayer CTA — always the same route, never duplicated;
Contact is the destination for every "directions"/"visit"/"enquire"
action site-wide; every detail page's breadcrumb is `Home / [Section] /
[Item]`.

------------------------------------------------------------------------

## 8. Content Architecture

V1 uses **typed static content modules**, not a CMS. Do not move content
into a CMS or database unless a task explicitly requires it.

```
content/
  i18n/
    en/     authoritative English source — one file per namespace
    ur/     generated/reconciled Urdu — same namespaces, same shape
lib/
  events.ts, sermons.ts, resources.ts, ministries.ts, seminary.ts
                          structured, non-translatable data (dates,
                          slugs, status enums) — separate from the
                          translatable UI copy in content/i18n/
  navigation.ts            nav item order/routes (labels come from
                            content/i18n via getCommonContent)
  organization.ts          verified, locale-invariant facts (phone,
                            WhatsApp URL, email) — not routed through i18n
```

English is the source of truth for every namespace. Urdu is maintained
entirely through the project's translation/reconciliation architecture
(§9) — never hand-authored to match the English file's shape from
scratch.

------------------------------------------------------------------------

## 9. i18n Architecture — read this before touching any bilingual content

This is the most load-bearing piece of custom architecture in the
project. The implementation lives in:

```
lib/i18n/types.ts               Locale, TranslatedString, Translated<T>
lib/i18n/t.ts                   t() — resolves one string, publish-gated
lib/i18n/resolve.ts             resolveContent() — resolves a whole tree
lib/i18n/hash.ts                hashSource() — sourceHash fingerprint
lib/i18n/translation-provider.ts Google/LibreTranslate providers + the
                                 "unconfigured → null" contract
lib/i18n/content-registry.ts    the ONE place mapping locale → resolved
                                 content per namespace (getXContent())
scripts/i18n/shared.ts          namespaces[], contentTiers, reconcileTree,
                                 renderGeneratedFile — the CLI's shared core
scripts/i18n/generate.ts        npm run i18n:generate -- --locale=<code>
scripts/i18n/check.ts           npm run i18n:check -- --locale=<code>
scripts/i18n/review.ts          npm run i18n:review -- --locale=<code>
scripts/i18n/status.ts          npm run i18n:status -- --locale=<code>
```

**The `Translated<T>` shape.** For any English content module
`export const x = {...} as const; export type XStrings = typeof x;`,
the generated Urdu file has type `Translated<XStrings>` — every string
leaf becomes a `TranslatedString`:

```ts
interface TranslatedString {
  value: string;
  source: "author" | "machine";
  published: boolean;
  reviewed: boolean;
  sourceHash: string;
}
```

**The rules, as actually implemented — not aspirational:**

1.  English content is authoritative. Every `content/i18n/en/*.ts` file
    is hand-written; nothing generates it.
2.  Every `content/i18n/ur/*.ts` file has the exact same nested key
    structure as its English source, but every leaf is a
    `TranslatedString` object, not a plain string.
3.  **Generated Urdu files are reconciliation output, not hand-authored
    prose.** They carry a `GENERATED FILE — do not hand-edit the
    structure` header. You may hand-edit a leaf's `value`/`published`/
    `reviewed` (that's how review approval actually happens — see rule
    13), but never restructure the tree by hand.
4.  Do not fabricate a generated Urdu file's structure yourself. If a
    namespace has no `ur/` file yet, generate it (§ "workflow" below) —
    never write one from scratch to "match the shape."
5.  When English source text changes, re-run
    `npm run i18n:generate -- --locale=ur`. Do not hand-patch the Urdu
    file to compensate.
6.  `sourceHash` = `hashSource()` of the English string a translation was
    made from. Staleness is derived by comparing it to
    `hashSource(currentEnglish)` — there's no separate boolean to keep in
    sync.
7.  `reconcileTree()` (`scripts/i18n/shared.ts`) preserves any existing
    entry whose `sourceHash` still matches, byte-for-byte, on every
    regeneration. It never overwrites a still-valid translation.
8.  Do not overwrite an existing human-reviewed (`reviewed: true`)
    translation just because you're touching the file for an unrelated
    reason. Regeneration already protects this automatically as long as
    you go through `npm run i18n:generate`, not manual editing.
9.  `source` is `"author"` (a person wrote it) or `"machine"` (came from
    the configured `TranslationProvider`). There is no third value in the
    actual type.
10. `published` is the **render gate** — `lib/i18n/t.ts`'s `t()` only
    returns `entry.value` when `entry.published && entry.value`;
    otherwise it falls back to the English string. This is the *only*
    path by which Urdu reaches the page.
11. `reviewed` records that a fluent human actually checked the value —
    independent of whether it's published. A string can be
    `published: true, reviewed: false` (live, unreviewed machine
    translation of ordinary copy) or `published: false, reviewed: false`
    (blocked pending review).
12. **Machine-translated content is never auto-published as a policy
    decision that already burned this project once**: `scripts/i18n/
    generate.ts` writes every machine translation — including "label"
    tier, pure UI chrome — as `published: false, reviewed: false`. A real
    LibreTranslate run produced wrong output even for short label-tier
    text (e.g. "WhatsApp" → "misunderstanding" in Urdu), which is why no
    tier is trusted to auto-publish. If you write a generation path that
    sets `published: true` on a fresh machine translation, you are
    reintroducing a bug this project already hit and fixed — don't.
13. A human reviews by hand-editing the generated `content/i18n/ur/*.ts`
    file directly (`npm run i18n:review` only *lists* what needs it —
    it never writes), setting `value`, `published: true`, `reviewed:
    true`, then re-running `npm run i18n:generate -- --locale=ur` to
    confirm nothing else changed.
14. `scripts/i18n/shared.ts`'s `contentTiers` (`label` / `content` /
    `sensitive` / `critical`) affects **review priority only** — what
    `npm run i18n:review` lists first. It has no effect on whether
    something publishes; rule 12 applies uniformly regardless of tier.
15. Commands, exactly as defined in `package.json` — don't invent flags
    or alternatives:
    -   `npm run i18n:generate -- --locale=ur` — reconcile + translate
        pending entries (needs `TRANSLATION_PROVIDER` env vars set, or it
        reconciles-only and reports what's blocked)
    -   `npm run i18n:check -- --locale=ur [--strict]` — CI-friendly
        gate; **non-zero exit only on `stale > 0` or `orphaned > 0`**,
        `missing` alone doesn't fail unless `--strict`. Run this whenever
        i18n content changed, before calling a task done.
    -   `npm run i18n:review -- --locale=ur [--namespace=home]` —
        read-only worklist for a human reviewer
    -   `npm run i18n:status -- --locale=ur` — read-only published/
        machine/reviewed/untranslated/stale/orphaned counts
16. Do not weaken `Translated<T>` globally to accommodate one awkwardly
    shaped content file. Fix the content file's shape instead.
17. Never use `as any` or another TypeScript suppression to bypass i18n
    typing.
18. `Translated<T>` has no special case for arrays or tuples. Repeated
    content (ministry facts, form options, card lists) must be a
    **keyed object** (`{ church: {...}, seminary: {...} }`), never an
    array — this has been hit and fixed before; don't reintroduce it.
19. **Every new namespace must be registered in both**
    `lib/i18n/content-registry.ts` (import both locale files, add a
    `getXContent(locale)` function) **and** `scripts/i18n/shared.ts`
    (import the English file, add a `namespaces[]` entry, add a
    `contentTiers` entry — even if it's just an empty `Map()` with a
    one-line comment on why). The namespace's `name` field must exactly
    equal its content file's basename (camelCase) — `loadExistingModule()`
    imports `content/i18n/${locale}/${namespace}` by that exact string.
20. Run `npm run i18n:check -- --locale=ur` whenever you touch i18n
    content, even if the change looks trivial.

**Provenance, in plain terms:**

| State | Meaning |
| --- | --- |
| `source: "author"` | A person wrote this value directly (English source is always this, implicitly, by not going through the Translated wrapper at all) |
| `source: "machine"` | Came from `TranslationProvider.translateBatch()` |
| `published: false` | Never rendered to a visitor — `t()` always falls back to English |
| `published: true, reviewed: false` | Live now, not yet human-checked (only reachable via manual review edit, per rule 12 — nothing gets here automatically) |
| `published: true, reviewed: true` | Live, human-approved |
| `[PSEUDO/PLACEHOLDER ...]` / `[CONFIRM]` in the **English** value itself | A factual placeholder, not a translation-workflow state — preserved verbatim in Urdu too; never resolve it into an invented fact in either language |

**Isolated regeneration technique:** running `npm run i18n:generate`
touches every namespace's file (harmless — unchanged entries round-trip
identically — but noisy in a diff). To generate only the namespace(s)
you just added without touching unrelated files' timestamps, write a
throwaway script importing `namespaces`, `contentTiers`, `reconcileTree`,
`renderGeneratedFile`, `emptyStats` from `./shared`, filter to your
namespace name(s), run it with `npx tsx`, then delete it. Never leave a
`_tmp-*.ts` script committed.

------------------------------------------------------------------------

## 10. Design Source of Truth & Workflow

For any page-level visual work, the **connected Claude Design project**
is authoritative — not your own visual judgment, not a prior page's
pattern applied by assumption.

1.  Inspect the relevant connected design file fully before implementing
    — read the actual frame(s) for the page/state you're building, not a
    summary or a different page's file.
2.  Follow the design. Do not redesign, reinterpret, simplify, or
    "improve" an approved design.
3.  Match: typography, spacing, dimensions, borders, colors, hierarchy,
    imagery/placeholders, section ordering, buttons, cards, navigation,
    footer, and the actual responsive composition drawn.
4.  If a dedicated mobile frame exists, implement **that composition** —
    not a CSS shrink of the desktop layout. If no mobile frame exists for
    a page, use the established site-wide responsive system (existing
    breakpoint conventions, existing component responsive behavior)
    rather than inventing a new mobile treatment from scratch.
5.  If light and dark frames both exist, follow each directly. If no dark
    frame exists for a page, use the established semantic theme tokens
    (`app/globals.css`'s `--color-*` custom properties, already mapped
    for both modes) and the patterns already used elsewhere — don't
    invent a new palette or one-off colors.
6.  If a design shows multiple states (form validation/loading/success/
    error, event status variants, etc.), implement the states the design
    actually draws — don't invent extra ones, don't skip ones that are
    there.
7.  Illustrative placeholder content in a design frame (a demo event, a
    sample sermon) is not organizational fact — don't promote it into
    real content (§4/§32 hallucination policy still applies inside a
    design frame too).
8.  If HANDOFF.md and the connected design conflict, **say so explicitly
    and ask** — don't silently pick one. If multiple design files
    conflict with each other, check HANDOFF.md's own file table (§2 there)
    for which is authoritative/historical (e.g. `Dawn of Light -
    Directions.dc.html` is explicitly marked historical-only) before
    guessing.
9.  A design file marked historical/superseded never overrides the
    current authoritative one.

------------------------------------------------------------------------

## 11. Component Architecture

Search `components/` before creating anything. The actual, current
reusable inventory (not an aspirational list — confirm against the repo,
it grows):

**Layout/chrome:** `SiteHeader`, `MobileHeader`, `MobileDrawer`,
`UtilityBar`, `SiteFooter`, `FooterCompact`, `LanguageSwitcher`,
`ThemeToggle`, `Breadcrumb`, `PageMasthead`, `SectionHeader`, `NavyBand`,
`CtaBand`, `OnThisPageRail`, `Container`, `LogoLockup`/`LogoMark`

**UI primitives:** `Button` (primary/secondary/tertiary), `Card`
(`topRule`, `interactive`), `MinistryCard`, `MinistryRow`, `RuledRow`/
`RuledList`, `FactTable`, `FormField` (+ `inputClasses()`),
`ImagePlaceholder`, `PlaceholderTag`, `Reveal` (§12)

**Page-family components:** `components/ministries/*`,
`components/events/EventRow`, `components/resources/ResourceRow`,
`components/sermons/{SermonRow,LatestSermonBand}`,
`components/detail/{DetailLayout,EventStatusBadge}`,
`components/legal/{LegalDocument,BeforeLaunchNotice}`,
`components/errors/{NotFoundContent,ServerErrorContent}`,
`components/prayer/PrayerForm`, `components/contact/ContactForm`

Do not create a second version of any of these. If an existing component
is close but not exact, extend it with a new prop (documented, backward-
compatible) rather than forking it — and explain why in the checkpoint
report (§16).

`lib/utils.ts`, `layout-text-flip.tsx`, `aurora-background.tsx` are **not**
part of this inventory — see §6.

------------------------------------------------------------------------

## 12. Motion System

The motion system was established on Home and About, then deliberately
extended site-wide — it is the same system everywhere, not a per-page
choice. Source of truth: `components/ui/Reveal.tsx`,
`components/ui/Button.tsx`, `components/ui/Card.tsx`.

**Timing bands (all `ease-out`, all fixed by HANDOFF.md §11's
2026-08-18 Amendment — do not invent a different value):**

-   Links, buttons, toggles, nav underline: **300ms**
-   Interactive/clickable cards and rows: **350ms**
-   Entrance reveal: **400ms**, staggered **100ms** per item, capped at
    `MAX_STAGGER_INDEX = 2` in `Reveal.tsx` (i.e. at most 3 distinct
    delays — a 4th+ item shares the 3rd's delay, it doesn't keep
    compounding)
-   Hover lift where used: **~2px** (`-translate-y-0.5`), with a soft
    color-tinted shadow — never a grey generic shadow
-   **No scale, no rotation, no bounce, anywhere.** (The one exception is
    the nav active/hover underline's `scale-x` grow-in — that's a 1D
    width reveal via Tailwind's own `transition-transform`, not the
    "no scale" rule's target; it already existed before this rule was
    written and stays as-is.)
-   Static/tertiary content (breadcrumbs, footer links, tertiary text
    buttons, static info cards) keeps **color-only** transitions at
    300ms — no lift, no shadow. Hover motion is reserved for things that
    are actually clickable as a whole unit.
-   `Reveal` reveals immediately (no scroll wait) for anything already on
    screen at mount; otherwise it triggers once via `IntersectionObserver`
    the first time it scrolls into view.

**Reuse `Reveal`/`Button`/`Card` for any new motion. Do not add a second
animation system** (do not reach for the unused `motion` package — see
§6 — and do not hand-roll a new `transition-[...]` pattern when an
existing primitive already does the job).

**The Tailwind v4 translate/transform pitfall (already hit and fixed
once — do not reintroduce it):** Tailwind v4's `-translate-y-*`/
`translate-y-*` utilities compile to the standalone CSS `translate`
property (`translate: var(--tw-translate-x) var(--tw-translate-y);`),
**not** `transform`. An arbitrary `transition-[...,transform,...]` list
does *not* cover a `translate-y` change — it will snap instantly instead
of easing, silently. When writing or reviewing any hover-lift or
entrance-rise motion:

-   list `translate` (not `transform`) in the `transition-[...]` property
    list if the element uses `-translate-y`/`translate-y` utilities;
-   or use Tailwind's own named `transition-transform` utility, which
    already correctly expands to `transform, translate, scale, rotate`;
-   verify with the browser's computed style
    (`getComputedStyle(el).transitionProperty`) when in doubt — don't
    assume from the class name alone.

**Reduced motion:** `app/globals.css` has a blanket
`@media (prefers-reduced-motion: reduce)` rule forcing every
`transition-duration`/`animation-duration` to `0.01ms !important` for
`*`. Combined with `Reveal.tsx`'s own `matchMedia` check (skips the
scroll-triggered delay entirely under reduced motion), this covers every
motion in the system automatically. New motion work should rely on this
existing mechanism — don't add a new per-element `motion-reduce:`/
`motion-safe:` variant unless something genuinely can't be covered by the
blanket rule.

------------------------------------------------------------------------

## 13. Page States

Every page/section that can be non-trivially empty or pending must
distinguish, and never blur together:

-   **Real published data** — from `lib/events.ts`, `lib/sermons.ts`,
    `lib/resources.ts`, etc., actually supplied by the organization.
-   **Empty state** — the design's own drawn empty-state composition
    (e.g. Events ships empty by design intent — "the launch state" — with
    no placeholder fallback). Never invent a fake event/sermon/resource
    to make a page look populated.
-   **Design placeholder state** — a design frame's own generic/bracketed
    demo content (e.g. Resources/Sermons fall back to a
    `placeholderResources`/similar array built from the design's own
    bracket text, when the site precedent allows a populated-frame
    fallback). This is still not real content — every field stays a
    `[PLACEHOLDER — ...]` marker, never an invented specific.
-   **Loading / sending state** — client form states (§14).
-   **Success / failure state** — client form states (§14); "the form is
    preserved on failure" means fields must stay populated after a failed
    submit, not reset — this requires *controlled* form fields in React
    19, since an uncontrolled `<form action={...}>` is reset by the
    browser's own post-action behavior even on failure.
-   **Future/unpublished state** — e.g. Support's State B (giving, after
    payment approval) exists in the design but must not be the default
    rendered page; do not build even a flagged mockup of it without an
    explicit task asking for that (§19).

If a design explicitly defines a launch/empty state, implement that
state — don't quietly substitute a populated mockup. If a design uses
placeholder data as an illustrative populated frame and there's existing
site precedent for following that (Sermons/Resources), follow the
precedent rather than inventing a new empty-vs-placeholder policy
per page.

------------------------------------------------------------------------

## 14. Forms

Required forms: **Contact** and **Prayer**. Both are real Next.js Server
Actions (`lib/actions/prayer.ts`, `lib/actions/contact.ts`), not client-
only form handlers.

Every form implements six states: default, validating, loading/sending,
success, error/failure, disabled. Errors are announced to screen readers
and shown as text plus color, never color alone.

**Email delivery:** `lib/email/provider.ts` mirrors
`lib/i18n/translation-provider.ts`'s own shape — `getConfiguredEmailProvider()`
returns `null` until a real vendor is wired up (none is chosen yet; see
`.env.example`'s `EMAIL_PROVIDER_API_KEY`/`EMAIL_FROM`/`EMAIL_TO`). Server
actions honestly return a `"failure"` state when no provider is
configured, mapped to the design's own drawn failure UI — never fabricate
a fake success. When a real provider is selected, implement it inside
`lib/email/provider.ts` only; no other file should need to change.

**Prayer requests are private.** Never:

-   log the contents of a prayer request or contact message (server
    actions only `console.error` structural outcomes, never field values)
-   expose them in a public API response
-   store them in `localStorage`
-   include them in analytics or error-report payloads
-   render them anywhere on the public site

Anti-spam: a honeypot field (name `website`, visually hidden via `sr-only`
— **not** an off-screen `left`/`right` offset, which inflates
`document.scrollWidth` under `dir="rtl"` and causes real horizontal
overflow; this has been hit and fixed once). Real rate limiting is a
known, documented gap (no shared store like Redis exists yet) — don't
claim it works if it doesn't.

Recipient for both forms: `pastornayyer@gmail.com`
(`lib/organization.ts`).

------------------------------------------------------------------------

## 15. Error Pages — 404 / 500

These must be **real Next.js App Router error/not-found handling**, not
ordinary routes styled to resemble error pages:

-   `app/[locale]/not-found.tsx` — triggered by any `notFound()` call
    under `/[locale]/...` (every page's own `if (!isLocale(locale))
    notFound()` guard included) and by the `[...catchAll]` route (§7).
    Locale-aware via `params` (guard against `params` itself being
    `undefined` — Next also prerenders this file as the segment's generic
    fallback outside any specific request, where params genuinely isn't
    populated).
-   `app/[locale]/error.tsx` — a **Client Component** (Next.js requires
    this), catching render errors under `/[locale]/...`. Doesn't receive
    route `params` the way a page does — read the locale from
    `usePathname()`'s first segment instead. Wire "Try again" to the
    `reset()` prop.
-   `app/global-error.tsx` — last resort for a failure in the root layout
    itself; supplies its own complete `<html>`/`<body>`, kept minimal and
    English-only by design (can't rely on the rest of the app rendering
    correctly).

No technical detail, stack trace, or internal error text is ever shown to
a visitor on either page — errors are logged server-side
(`console.error`) without form contents. Visual treatment follows the
connected Utility Pages design exactly (§10).

------------------------------------------------------------------------

## 16. QA / Checkpoint Report Workflow

For any substantial UI or content task:

1.  Inspect the connected design fully (§10).
2.  Implement.
3.  `npm run typecheck`
4.  `npm run lint`
5.  `npm run build`
6.  `npm run i18n:check -- --locale=ur` if i18n content changed
7.  Browser visual QA against the actual design (not your own rendered
    output as the reference) — desktop, mobile (390px where a mobile
    frame exists, otherwise the established responsive system), light,
    dark, English, Urdu/RTL, as applicable to what changed.
8.  Check for horizontal overflow (`document.documentElement.scrollWidth`
    vs `window.innerWidth`), not just a visual glance.
9.  Check browser console for new errors.
10. `git status` / `git diff` — confirm no unrelated files changed, no
    stray temp/QA files left behind (delete any throwaway test route you
    created for QA before finishing).
11. Report genuine design ambiguities explicitly rather than silently
    resolving them.

**Checkpoint report format** (use this consistently — don't ask the user
to re-specify it each time):

1.  Routes implemented
2.  Files created/modified
3.  Design source/frame used per page/state
4.  Implementation summary
5.  Desktop QA
6.  Mobile QA
7.  Light/dark QA
8.  Urdu/RTL QA
9.  Validation results (the four commands above)
10. Genuine design ambiguities found
11. Shared-component changes made and why (with backward-compatibility
    confirmation)
12. Confirmation that unrelated pages/files were not touched
13. Current `git status`

Do not commit as part of a checkpoint report unless explicitly asked to.

------------------------------------------------------------------------

## 17. Git / Commit Workflow

Before starting work: `git status`.

After coherent implementation: inspect the diff, run the validation
suite (§16), perform QA, verify scope, then commit **only if asked**.

Commit messages: conventional, concise, specific —
`feat: ...` / `fix: ...` / `refactor: ...` / `perf: ...` / `chore: ...`.
Never `update`, `changes`, `stuff`, `work`, `fixes`.

**When explicitly asked to commit:** actually commit — don't stop at
"ready to commit." Stage specific files/paths (review `git status` first;
never blind `git add .`/`-A` without having looked at what it would
include). After committing, run `git status` again and report the commit
hash and message.

**When explicitly asked to push:** run `git push origin main`, confirm
the result, then run `git status` again.

Never commit: secrets, `.env`/`.env.local`, temporary QA/debug files
(delete any throwaway `qa-*`/`_tmp-*` route or script before staging),
screenshots, or unrelated accidental changes. If genuinely-unrelated
pre-existing changes are sitting in the working tree, call them out
explicitly and leave them uncommitted rather than folding them in or
discarding them.

Never rewrite shared history, force-push, or amend a commit other than
the one you just made in this session with explicit user awareness.

------------------------------------------------------------------------

## 18. Skills

Repeated workflows are captured as Claude Code skills in
`.claude/skills/`. Use the matching skill instead of re-deriving the
process from this file every time:

-   **`page-implementation`** — implementing a new page/route from the
    connected design (§10). Use for any "build /whatever" task.
-   **`design-qa`** — the visual QA pass itself (§16, steps 7-9). Use
    after implementing, or whenever asked to verify an existing page
    against its design.
-   **`i18n-content`** — adding or changing bilingual content (§9). Use
    whenever a task touches `content/i18n/`, adds a namespace, or asks
    for Urdu content.
-   **`motion-system`** — applying or auditing the motion system (§12).
    Use when asked to add entrance/hover motion to something, or to
    verify the existing motion is correct.
-   **`completion-and-git`** — finishing, validating, reporting, and
    (only when asked) committing/pushing (§16/§17). Use at the end of
    any task, and specifically whenever the user says "commit" or "push."

This file (`CLAUDE.md`) holds the permanent rules and architecture. The
skills hold the detailed step-by-step procedure for each recurring
workflow — don't duplicate the same checklist in both places; when they'd
overlap, the skill is the detailed version and this file just says when
to reach for it.

------------------------------------------------------------------------

## 19. Placeholder Rules

Allowed: `[PSEUDO/PLACEHOLDER — REPLACE BEFORE LAUNCH]`, `[CONFIRM]`,
`[CONTENT REQUIRED FROM ORGANIZATION]`.

Not allowed: invented factual content disguised as real information, or
silently dropping a placeholder marker to make a page look finished.

If a page needs an address, a biography, a service time, or any other
unsupplied fact, use a clear, visible placeholder — never a plausible-
sounding invention.

------------------------------------------------------------------------

## 20. Images

Use supplied organization assets whenever available. Categories: logo,
pastor photo, church photos, seminary photos, children's/ministry photos,
event photos, banners.

Do not invent people. Do not use generic AI-generated people for real
ministry representation. Do not expose children unnecessarily — no
identifiable child without written organizational permission. Use
appropriate alt text. Where a photograph is missing, ship the
established marked placeholder (`ImagePlaceholder` component, diagonal-
stripe fill, mono caption naming what belongs there) — never a decorative
gradient standing in for a real photo.

------------------------------------------------------------------------

## 21. Responsive / RTL / Accessibility

**Responsive.** HANDOFF.md §10's full test matrix is 320 · 375 · 390 ·
768 · 1024 · 1280 · 1440 · 1920, and "no horizontal overflow at any
width" is an absolute rule. In practice, the connected designs draw
frames at 1440 (desktop) and 390 (mobile) — those two are the primary
checkpoints for any given page; the full matrix matters most for the
shared chrome (header, footer, nav) that every page inherits. Where the
design supplies a mobile frame, compare against **that composition**
directly, not a shrunk desktop layout (§10).

**RTL.** Use logical CSS properties (`ps-*`/`pe-*`/`border-s-*`, not
`pl-*`/`pr-*`/`border-l-*`) and let flex/grid direction follow `dir`
naturally, rather than scattering manual `dir === "rtl" ? ... : ...`
left/right conditionals. Test every page that changed, in Urdu, not just
English. Numerals and Latin names stay LTR inside an RTL run
(`dir="ltr"` on the specific span). A fixed bilingual element that isn't
meant to translate (e.g. the logo's نور کی صبح subtitle, the 404 page's
fixed Urdu line) is a literal constant in the component, not routed
through the translated-content system (§9) — don't try to make it
"translatable" when the design itself shows it as fixed regardless of
locale.

**Accessibility.** WCAG 2.2 AA where practical: keyboard access, visible
focus (2px oxblood outline, 2px offset, never removed), semantic HTML,
correct heading hierarchy (one `<h1>` per page; breadcrumbs/eyebrows/mono
labels are not headings), labels always present and associated with their
field, errors announced and never color-only, `prefers-reduced-motion`
respected (§12), touch targets ≥44px / form controls ≥48px, contrast
checked (especially any brass-on-light-background combination — brass is
a rule or a fill behind navy text, never light text on brass). Never
create hover-only functionality.

------------------------------------------------------------------------

## 22. Donation / Payments

Payment functionality is sensitive. Support ships **State A only**
(prayer/share/volunteer routes, no giving control) — do not build any
part of State B (amount selection, provider handoff) even behind a flag,
unless a task explicitly asks for that specific piece.

Do not implement payment processing until the organization approves the
provider, KYC/eligibility is confirmed, the receiving account is
confirmed, accounting procedures exist, and donation receipt requirements
are understood.

Preferred candidates for Pakistan (PRD §15): 1. PayFast 2. Easypaisa
3. JazzCash/Raast where approved.

Do not store card information. Do not implement custom payment
processing. Do not commit payment credentials. Do not publish a personal
wallet number as an official donation destination until ownership and
accounting controls are confirmed.

------------------------------------------------------------------------

## 23. Environment Variables

Never commit secrets. Maintain `.env.example` (already documents the
anticipated i18n-generation and email-provider variables — add new
anticipated variables there, not committed real values). `.env` and
`.env.local` are gitignored. Only use environment variables for values
that actually need them. Never print secret values in terminal output or
logs.

------------------------------------------------------------------------

## 24. GitHub

The repository should be owned by the church/mission organization or its
designated organization account, not a developer's personal account
alone.

Before pushing: inspect the diff, check `.gitignore`, check for secrets,
check for personal credentials, check for unnecessary files.

------------------------------------------------------------------------

## 25. Branching

For meaningful work, feature branches are the documented default
(`feature/homepage`, `feature/prayer`, etc.), but in practice this
project has been developed directly on `main` with reviewed, validated
commits per task. Follow whichever the user's current instruction implies;
don't invent a branch unprompted. Never force-push or rewrite shared
history without explicit instruction.

------------------------------------------------------------------------

## 26. SEO

For every public page: unique title, meta description, canonical URL
(`alternates.canonical` + `languages` for both locales — the pattern
every existing page's `generateMetadata` already follows), Open Graph
metadata, correct heading hierarchy, internal links, structured data only
where facts are actually verified. Do not put unsupported claims into
structured data.

------------------------------------------------------------------------

## 27. Performance

Prefer Next.js image optimization, optimized image sizes, lazy loading,
server rendering (§6), minimal client components, minimal third-party
scripts. Avoid huge background videos/images, unnecessary animation
libraries (§6/§12), unnecessary hydration, excessive JavaScript.

------------------------------------------------------------------------

## 28. Security

Never expose secrets, trust client-only authorization, store sensitive
data unnecessarily, log sensitive submissions (§14), expose internal
errors to visitors (§15), or add arbitrary third-party scripts. Validate
user input. Sanitize user-generated content. Keep dependencies current —
but see §6 on not adding new ones without need.

------------------------------------------------------------------------

## 29. Deployment

```
Local → GitHub → Vercel Preview → QA → Vercel Production → Custom Domain
```

Do not deploy directly to production without testing the preview. Use
Vercel environment variables. Never hardcode production secrets.

------------------------------------------------------------------------

## 30. Domain / DNS

Do not make DNS changes unless explicitly requested and the current DNS
records have been reviewed. If email exists on the domain, **never
delete MX records accidentally**. Use the DNS records Vercel provides at
deployment time. Verify root domain, www, HTTPS, canonical hostname,
email DNS, sitemap, robots.txt.

------------------------------------------------------------------------

## 31. Account Ownership

The organization should control: domain registrar, GitHub, Vercel,
email, analytics, payment provider, CMS/database. Do not make yourself
or the developer the sole owner.

------------------------------------------------------------------------

## 32. No Hallucination Policy

Never invent: church statistics, number of children helped, number of
churches planted, number of people reached, staff, leaders, addresses,
dates, partner organizations, donations received, financial figures,
testimonials, ministry outcomes.

If needed, write `[CONTENT REQUIRED FROM ORGANIZATION]`.

------------------------------------------------------------------------

## 33. No Unauthorized Scope Expansion

Do not decide on your own to add: authentication, database, CMS, CRM,
payments, AI, admin dashboard, member portal, subscriptions, a site-search
feature (none exists today — the 404 page's search box is deliberately
rendered `disabled`, matching the design's own muted treatment, rather
than building search), or a new npm dependency — unless the PRD/HANDOFF
and the current task explicitly require it.

------------------------------------------------------------------------

## 34. Do Not Destroy Existing Work

Never use destructive commands casually. Before deleting directories,
replacing configuration, migrating frameworks, changing package managers,
changing database schemas, or rewriting Git history, explain the reason
and scope — and prefer a reversible action (rename, move aside) over
deletion when unsure whether something is intentionally there.

------------------------------------------------------------------------

## 35. Final Review Before Completion

Before saying a task is complete: inspect the git diff, run the
validation suite (§16), verify no secrets, verify no accidental files,
verify responsive/accessibility behavior, verify the requested
functionality, verify relevant PRD/HANDOFF acceptance criteria. Then give
the checkpoint report (§16).
