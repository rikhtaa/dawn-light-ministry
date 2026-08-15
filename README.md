# Dawn of Light Ministry — Website

Dawn of Light Ministry (DLM) — نور کی صبح — is the website for the
Bethlehem Church, Seminary & Educational Mission, serving communities in
Karachi and Faisalabad, Pakistan since 1982.

This project is under active development. See [`PRD.md`](./PRD.md) for
the full product requirements and [`CLAUDE.md`](./CLAUDE.md) for the
engineering conventions and guardrails this project follows.

## Status

Foundation stage. The design system tokens (colour, typography, spacing,
grid, radius, borders) for the approved **Direction B — "The
Institution"** design, specified in `HANDOFF.md`, are configured in
`app/globals.css`. Public pages, bilingual (English/Urdu) support, and
prayer/contact forms described in `PRD.md` have not been built yet.

Note: `components/` currently also contains an earlier prototype header,
footer and homepage built before Direction B was frozen. They still
render (using compatibility aliases in `app/globals.css`) but use a
different palette, type pairing and motion than the approved design, and
are scheduled to be rebuilt against the Direction B tokens per
`HANDOFF.md` §23 Step 2 onward.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org) (strict mode)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org)

## Getting started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
npm run dev        # start the development server
npm run build       # production build
npm run start        # run the production build
npm run lint         # run ESLint
npm run typecheck    # run the TypeScript compiler with no output
```

## Environment variables

No environment variables are currently required. Copy
[`.env.example`](./.env.example) to `.env.local` and fill in real values
only once a feature that needs them is implemented. Never commit
`.env.local`.

## Project structure

```
app/            Next.js App Router routes and layouts
public/         Static assets
PRD.md          Product requirements document
CLAUDE.md       Engineering conventions and guardrails for this project
```

`components/`, `content/`, `lib/`, and `types/` directories will be added
as corresponding features are implemented (see `PRD.md` §17 for the
target structure).

## Contributing

Read `CLAUDE.md` before making changes — it defines the engineering
guardrails (no invented organization facts, accessibility and security
requirements, git workflow, etc.) that apply to this repository.
