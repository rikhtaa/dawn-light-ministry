---
name: completion-and-git
description: Finish a Dawn of Light Ministry task properly — validate, QA, report, and (only when explicitly asked) commit and push. Use at the end of any implementation task, and specifically whenever the user says "commit" or "push."
---

# Completion and git

How this project finishes a task. Two distinct endings, don't conflate
them: a **checkpoint report** (always, at the end of implementation work)
and an **actual commit/push** (only when explicitly asked — never assume
it from "looks done").

## 1. `git status` and full diff review

Before anything else, know exactly what's uncommitted:
```
git status
git diff --stat
```
For each changed/new file, confirm it's actually part of *this* task's
legitimate work — not a leftover from a different session, not an
accidental edit. If genuinely-unrelated pre-existing changes are sitting
in the working tree, name them explicitly rather than folding them into
this commit or discarding them.

Explicitly scan for anything that must never be committed:
- secrets, `.env`/`.env.local` (check they're not in the diff at all —
  `.gitignore` should already exclude them, but verify)
- temporary QA/debug files — a throw-test route created for `design-qa`
  (`app/[locale]/qa-throw-test/` or similar), a `_tmp-gen-*.ts` i18n
  script, screenshots saved to disk
- Delete any of the above before staging, don't just leave them untracked
  hoping they won't get added.

## 2. Validate

Run all four (background them if slow — this project's `npm run build`
and `typecheck` can take over the default 2-minute tool timeout; use
`run_in_background: true` and wait for the notification rather than
polling with `sleep`):
```
npm run typecheck
npm run lint
npm run build
npm run i18n:check -- --locale=ur     (if any i18n content changed)
```
Fix only errors genuinely caused by the current work — never suppress
with `as any`, never weaken a type globally, never make an unrelated
"while I'm here" cleanup change.

After `npm run build`/`npm run dev`, check whether `next-env.d.ts` was
auto-touched (`git status`) and revert it if so — it's a dev-vs-build
type-reference artifact, not real work:
```
git checkout -- next-env.d.ts
```

## 3. QA (if UI changed)

Hand off to the `design-qa` skill. Don't skip this because validation
passed — typecheck/lint/build verify code correctness, not that the page
actually matches the design or renders correctly in the browser.

## 4. Checkpoint report

Give this every time implementation work finishes, whether or not a
commit follows:

1. Routes implemented
2. Files created/modified
3. Design source/frame used per page/state
4. Implementation summary
5. Desktop QA
6. Mobile QA
7. Light/dark QA
8. Urdu/RTL QA
9. Validation results
10. Genuine design ambiguities found
11. Shared-component changes and why
12. Confirmation unrelated pages/files untouched
13. Current `git status`

A checkpoint report is not a commit. Do not commit unless the user
explicitly asks for it in this task, even if everything above passed.

## 5. Commit — only when explicitly asked

Do not stop at "ready to commit." If asked to commit, actually commit:

1. Stage specific paths (review `git status` first) — never blind
   `git add .`/`-A` without having looked at what it would sweep in.
   ```
   git add <path> <path> ...
   ```
2. Write a conventional, specific commit message —
   `feat: ...`/`fix: ...`/`refactor: ...`/`perf: ...`/`chore: ...`, via
   heredoc so multi-line bodies format correctly:
   ```
   git commit -m "$(cat <<'EOF'
   feat: concise summary of what changed and why

   Longer explanation if the change is non-trivial — what was
   implemented, any real bug found and fixed, what's still a known gap.

   Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
   EOF
   )"
   ```
   Never `update`/`changes`/`stuff`/`work`/`fixes` as the whole message.
3. `git status` again — confirm the working tree is clean (or confirm
   exactly what's still uncommitted and why).
4. Report the commit hash and message back to the user.

Never rewrite shared history, `--amend` a commit from a prior session, or
force-push, unless explicitly asked.

## 6. Push — only when explicitly asked

```
git push origin main
```
Confirm the push result (the `<old>..<new> main -> main` line, or the
actual error if it failed — e.g. a non-fast-forward rejection means
`origin/main` moved; don't force-push to resolve it without asking).
Then `git status` again and report the final state.

## Final report shape (commit/push tasks)

- Commit hash
- Commit message
- What was included (file count/summary)
- Validation results
- Push result
- Final `git status`
- Explicit confirmation the working tree is clean (or explicit list of
  what's intentionally still uncommitted)
