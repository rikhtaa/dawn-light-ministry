---
name: i18n-content
description: Safely add or change bilingual (English/Urdu) content on the Dawn of Light Ministry site using its typed Translated<T> reconciliation architecture. Use whenever a task touches content/i18n/, adds a new content namespace, or needs Urdu text generated or reviewed.
---

# i18n content

The primary reference for the project's bilingual content system. Read
this before writing or editing anything under `content/i18n/`.

## The actual architecture (verify against the repo — this drifts)

```
lib/i18n/types.ts                Locale, TranslatedString, Translated<T>
lib/i18n/t.ts                    t() — resolves one string, publish-gated
lib/i18n/resolve.ts              resolveContent() — resolves a whole tree
lib/i18n/hash.ts                 hashSource()
lib/i18n/translation-provider.ts Google/LibreTranslate providers
lib/i18n/content-registry.ts     locale → resolved content, per namespace
scripts/i18n/shared.ts           namespaces[], contentTiers, reconcileTree
scripts/i18n/generate.ts         npm run i18n:generate
scripts/i18n/check.ts            npm run i18n:check
scripts/i18n/review.ts           npm run i18n:review
scripts/i18n/status.ts           npm run i18n:status
content/i18n/en/*.ts              hand-written source
content/i18n/ur/*.ts              generated/reconciled — never hand-authored from scratch
```

## Adding a new namespace (e.g. for a new page)

1.  Write `content/i18n/en/<name>.ts`:
    ```ts
    export const <name> = { ... } as const;
    export type <Name>Strings = typeof <name>;
    ```
    - Use **keyed objects for repeated content**, never arrays/tuples —
      `Translated<T>` has no special case for them. `{ church: {...},
      seminary: {...} }`, not `[{...}, {...}]`.
    - Preserve every `[PSEUDO/PLACEHOLDER ...]`/`[CONFIRM]` marker from
      the design verbatim.
    - A fixed bilingual literal that never varies by locale (e.g. a
      hardcoded Urdu subtitle the design shows regardless of site
      language) does **not** go through this system — it's a plain
      string constant in the component, not a content-module leaf.

2.  Register the namespace in **both** places:
    - `lib/i18n/content-registry.ts` — import the English and Urdu
      modules, add `export function get<Name>Content(locale): <Name>Strings`
      following the exact pattern of every existing `getXContent`.
    - `scripts/i18n/shared.ts` — import the English module, add a
      `namespaces[]` entry (`name` must exactly equal the file's
      camelCase basename — `loadExistingModule()` imports by that
      literal string), add a `contentTiers` entry (an empty `Map()` with
      a one-line comment is fine if nothing in the namespace is
      sensitive/critical).

3.  Generate the Urdu stub — **isolated regeneration**, not a full
    `npm run i18n:generate` run (which touches every namespace's file,
    noisy in a diff even though harmless):
    ```ts
    // scripts/i18n/_tmp-gen-<name>-ur.ts — delete after running
    import { writeFileSync, mkdirSync } from "node:fs";
    import path from "node:path";
    import { fileURLToPath } from "node:url";
    import { namespaces, contentTiers, reconcileTree, renderGeneratedFile, emptyStats } from "./shared";
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const repoRoot = path.resolve(__dirname, "../..");
    const locale = "ur";
    const targetNames = new Set(["<name>"]);
    async function main() {
      const outDir = path.join(repoRoot, "content", "i18n", locale);
      mkdirSync(outDir, { recursive: true });
      for (const ns of namespaces) {
        if (!targetNames.has(ns.name)) continue;
        const existing = await ns.loadExisting(locale);
        const stats = emptyStats();
        const { tree } = reconcileTree(ns.english, existing, stats, contentTiers[ns.name]);
        const source = renderGeneratedFile({ namespace: ns.name, typeName: ns.typeName, locale, tree });
        writeFileSync(path.join(outDir, `${ns.name}.ts`), source, "utf8");
      }
    }
    main().catch((e) => { console.error(e); process.exit(1); });
    ```
    Run with `npx tsx scripts/i18n/_tmp-gen-<name>-ur.ts`, then **delete
    the script**. With no `TRANSLATION_PROVIDER` configured (the normal
    state in this project), every entry is written with an empty value,
    `published: false, reviewed: false`, and a stamped `sourceHash` — the
    same honest "nothing translated yet" shape `generate.ts` itself
    writes when its provider is unavailable. This is expected and fine.

4.  `npm run i18n:check -- --locale=ur` — must pass (non-zero exit only
    on `stale > 0` or `orphaned > 0`; `missing` alone doesn't fail unless
    `--strict`, and a brand-new namespace is expected to show `missing`
    until a provider or a human translates it).

## Changing existing English content

1.  Edit the `content/i18n/en/<name>.ts` value directly.
2.  Re-run `npm run i18n:generate -- --locale=ur` (full run is fine here
    — you want reconciliation to detect the staleness across the whole
    tree) or the isolated technique above scoped to the changed
    namespace. The changed key's `sourceHash` will no longer match,
    marking it stale/pending; every other entry whose hash still matches
    is preserved byte-for-byte.
3.  `npm run i18n:check -- --locale=ur` — must show `Stale: 0` when done.

## Human review (approving a machine translation)

- `npm run i18n:review -- --locale=ur [--namespace=<name>]` lists what
  needs review (read-only — it never writes).
- Approve by hand-editing the generated `content/i18n/ur/<name>.ts` file
  directly: set `value`, `published: true`, `reviewed: true` on the
  specific leaf. This is the **one** legitimate case for hand-editing a
  generated file — a single leaf's fields, never the tree structure.
- Re-run `npm run i18n:generate -- --locale=ur` afterward to confirm
  nothing else changed.

## Rules that must not be violated

- English is always authoritative; never derive it from Urdu.
- Never hand-fabricate a generated Urdu file's *structure* — only
  `npm run i18n:generate` (or the isolated technique above, which calls
  the same `reconcileTree`) produces it.
- Never set `published: true` on a fresh machine translation yourself,
  and never write a generation path that does — this project already hit
  a real translation-quality incident this way (LibreTranslate mangled
  even short UI-chrome strings) and the fix was "no tier auto-publishes,
  ever." Content tiers (`label`/`content`/`sensitive`/`critical`) only
  affect review *priority*, never publish status.
- Never weaken `Translated<T>` globally to fit one content file — fix the
  file's shape (keyed object, not array).
- Never use `as any` or another suppression to bypass i18n typing.
- Always run `npm run i18n:check -- --locale=ur` after any i18n change.
