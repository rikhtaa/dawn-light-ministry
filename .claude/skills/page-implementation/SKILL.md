---
name: page-implementation
description: Implement a new page/route on the Dawn of Light Ministry site from the connected Claude Design project, following the established Next.js/i18n/motion architecture without redesigning anything. Use whenever a task asks to build, add, or implement a page or route.
---

# Page implementation

Implements one page/route end-to-end: design inspection → content → route
→ integration → validation → QA → checkpoint report. This is the
procedure behind almost every "build /whatever" task on this project.
CLAUDE.md holds the *rules*; this skill is the *steps*.

## 1. Read before touching anything

- `PRD.md` — the relevant section for this page (org facts, non-goals).
- `HANDOFF.md` — the page's entry in §14 "Page-by-page structure", plus
  any relevant token/component/motion sections it cross-references.
- `CLAUDE.md` — especially §7 (routing), §8-9 (content/i18n), §10
  (design authority), §11 (components), §12 (motion), §13 (page states).
- `git status` and `git log --oneline -10` — know what's already
  committed and what's mid-flight before adding to it.

## 2. Inspect the repository — do not guess

- `find app -name "page.tsx"` (or similar) to see what routes already
  exist. Confirm the page isn't already built, or partially built.
- Search `components/` for anything reusable for this page's shape
  (masthead pattern, form pattern, index pattern, detail pattern — see
  HANDOFF §14's "four body patterns" and CLAUDE.md §11's component list).
- Check `lib/navigation.ts` and `lib/i18n/content-registry.ts` for
  whether this route is already referenced (nav links, footer links)
  even though the page doesn't exist yet — a 404 you're about to fix.

## 3. Read the connected design fully

- Fetch the actual design file for this page (not a summary, not a
  different page's file) via the Claude Design MCP tools.
- Identify: the authoritative frame (desktop light, and dark/mobile/
  Urdu-RTL frames *if drawn*), every state the design shows (form states,
  empty/populated, status variants), exact copy, exact structure.
- Note explicitly which frames are **missing** (no dark frame, no mobile
  frame, no RTL frame) — you'll need to flag these as extrapolated in the
  checkpoint report, not silently invent them as if they were drawn.
- If HANDOFF.md and the design conflict, stop and say so — don't pick one
  silently (CLAUDE.md §10).

## 4. Content / i18n

Follow `i18n-content` skill in full for this step. In short: write the
English content module first (`content/i18n/en/<name>.ts`), register the
namespace in both `lib/i18n/content-registry.ts` and
`scripts/i18n/shared.ts`, then generate the Urdu stub (isolated
regeneration technique, not hand-authored). Preserve every
`[PSEUDO/PLACEHOLDER ...]`/`[CONFIRM]` marker from the design verbatim —
never resolve one into an invented fact.

## 5. Implement the route

- Server component by default (`async function Page({ params })`).
- Reuse existing shared components (masthead, `Card`, `Button`,
  `RuledRow`, `FormField`, etc.) before writing new markup.
- Only build a new shared component if the page-family genuinely needs
  one that doesn't exist yet (e.g. a form panel, a detail rail) — and say
  so explicitly, with the reuse reasoning, in the checkpoint report.
- Apply `Reveal` at the same granularity Home/About already use — see the
  `motion-system` skill; don't invent a different entrance treatment.
- Integrate navigation/footer links that should now resolve correctly —
  verify, don't just assume the existing links were pointed here already.

## 6. Explicitly prohibited

- Redesigning the connected design's layout, spacing, colors, or
  hierarchy because you think it reads better.
- Inventing organization facts, statistics, addresses, biographies, or
  service times not supplied (CLAUDE.md §32).
- Refactoring or "cleaning up" unrelated shared components as a side
  effect of this task.
- Treating a missing mobile/dark/RTL design frame as license to invent a
  new visual treatment — extrapolate from the *existing site-wide
  responsive/theme system* instead, and flag the gap.
- Building any part of a feature the task didn't ask for (e.g. State B of
  Support, real site search, a payment flow) just because the design
  shows it exists eventually.

## 7. Validate

```
npm run typecheck
npm run lint
npm run build
npm run i18n:check -- --locale=ur     (if i18n content changed)
```

Fix only errors caused by this page's implementation. Revert any
incidental file the build/dev process touches on its own (e.g.
`next-env.d.ts`) before finishing.

## 8. Visual QA

Hand off to the `design-qa` skill for the actual QA pass (desktop,
mobile, light/dark, Urdu/RTL, overflow, console errors, motion).

## 9. Checkpoint report

Use the `completion-and-git` skill's report format (also in CLAUDE.md
§16). Do not commit unless explicitly asked — a checkpoint report is not
a commit.
