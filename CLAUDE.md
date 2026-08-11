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

Your responsibility is to implement the approved PRD accurately and
maintainably.

This is a real production church/mission website, not a disposable demo.

------------------------------------------------------------------------

## 2. Source of Truth

Read `PRD.md` before implementing substantial features.

Priority order:

1.  Explicit user instruction in the current task
2.  `PRD.md`
3.  Existing project architecture
4.  Existing code conventions
5.  Reasonable engineering judgment

Never invent organization facts.

If the PRD says `[PSEUDO/PLACEHOLDER — REPLACE BEFORE LAUNCH]`, do not
present that information as verified fact.

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

Represent these ideas faithfully.

Do not exaggerate impact.

------------------------------------------------------------------------

## 5. Development Philosophy

Prefer:

-   simple
-   maintainable
-   typed
-   reusable
-   accessible
-   fast
-   predictable
-   boring infrastructure
-   clear abstractions

Avoid:

-   unnecessary complexity
-   unnecessary dependencies
-   giant components
-   premature abstractions
-   excessive client-side JavaScript
-   excessive animation
-   over-engineering

------------------------------------------------------------------------

## 6. Before Every Task

Before changing code:

1.  Read the relevant PRD section.
2.  Inspect the repository.
3.  Run `git status`.
4.  Inspect relevant files.
5.  Search for existing components/utilities.
6.  Determine whether the requested functionality already partially
    exists.
7.  Explain the implementation plan briefly.
8.  Implement only the requested scope.

Do not blindly rewrite the project.

------------------------------------------------------------------------

## 7. Task Scope

Each task should have:

-   objective
-   files likely affected
-   implementation
-   validation
-   result

Do not combine unrelated features simply because they are convenient.

If the user asks for a homepage change, do not refactor the entire
application.

------------------------------------------------------------------------

## 8. Code Standards

Use TypeScript.

Prefer:

-   strict typing
-   explicit interfaces/types where useful
-   semantic HTML
-   reusable components
-   small functions
-   descriptive names
-   predictable state management
-   server components by default where appropriate

Avoid:

-   `any` unless genuinely justified
-   duplicated constants
-   magic numbers
-   dead code
-   commented-out abandoned code
-   unnecessary global state

------------------------------------------------------------------------

## 9. Component Rules

Before creating a component, search for an existing component that could
be reused.

Create reusable components for repeated UI.

Examples:

-   Button
-   Card
-   SectionHeader
-   FormField
-   Modal
-   Alert
-   MinistryCard
-   EventCard
-   ResourceCard

Do not create five slightly different versions of the same component.

------------------------------------------------------------------------

## 10. Content Rules

Content is separate from UI where practical.

Use structured content for:

-   ministries
-   events
-   sermons
-   resources
-   navigation metadata

Never hardcode large content blocks inside complex React components when
a content/data layer is more appropriate.

------------------------------------------------------------------------

## 11. Placeholder Rules

Allowed:

`[PSEUDO/PLACEHOLDER — REPLACE BEFORE LAUNCH]`

Not allowed:

invented factual content disguised as real information.

If a page needs an address and none has been supplied, use a clear
placeholder.

If a page needs a biography and none has been supplied, use a clear
placeholder.

------------------------------------------------------------------------

## 12. Images

Use supplied organization assets whenever available.

Asset categories:

-   logo
-   pastor photo
-   church photos
-   seminary photos
-   children's/ministry photos
-   event photos
-   banners

Do not invent people.

Do not use generic AI-generated people for real ministry representation.

Do not expose children unnecessarily.

Use appropriate alt text.

Do not publish identifiable children without appropriate organizational
permission.

------------------------------------------------------------------------

## 13. Design

The visual identity should be:

-   warm
-   Christian
-   human
-   educational
-   dignified
-   modern
-   restrained

Avoid:

-   generic SaaS aesthetics
-   excessive gradients
-   excessive glassmorphism
-   excessive rounded cards
-   visual clutter
-   fake 3D
-   excessive animation
-   AI-looking stock imagery

Use authentic photography.

Do not make the site look like a template.

------------------------------------------------------------------------

## 14. Responsive Design

Always test:

-   320px
-   375px
-   390px
-   768px
-   1024px
-   1280px
-   1440px

No horizontal overflow.

Mobile is a first-class experience.

------------------------------------------------------------------------

## 15. Accessibility

Target WCAG 2.2 AA where practical.

Always consider:

-   keyboard access
-   focus visibility
-   screen readers
-   semantic HTML
-   heading hierarchy
-   labels
-   errors
-   contrast
-   reduced motion
-   touch targets

Never create hover-only functionality.

------------------------------------------------------------------------

## 16. Urdu / RTL

The site supports English and Urdu.

English: LTR

Urdu: RTL

When implementing bilingual features:

-   set correct language metadata
-   set correct direction
-   test RTL layout
-   use appropriate fonts
-   translate UI strings
-   translate form states
-   translate SEO metadata

Do not machine-translate final theological content without human review.

------------------------------------------------------------------------

## 17. Forms

All forms must define:

-   default
-   validation
-   loading
-   success
-   error
-   disabled

Required forms:

-   Contact
-   Prayer

Potential future:

-   event registration
-   volunteer
-   donation

Use server-side validation when a backend exists.

Do not log prayer requests or sensitive form contents.

------------------------------------------------------------------------

## 18. Prayer Requests

Prayer requests are private.

Never:

-   expose them publicly
-   put them into public API responses
-   log them
-   store them in localStorage
-   include them in analytics events

Use anti-spam protection.

Default recipient:

`pastornayyer@gmail.com`

Do not expose operational secrets.

------------------------------------------------------------------------

## 19. Donation / Payments

Payment functionality is sensitive.

Do not implement payment processing until:

-   the organization approves the provider
-   KYC/eligibility is confirmed
-   the receiving account is confirmed
-   accounting procedures exist
-   donation receipt requirements are understood

Preferred candidates for Pakistan:

1.  PayFast
2.  Easypaisa
3.  JazzCash / Raast where approved

Do not store card information.

Do not implement custom payment processing.

Do not commit payment credentials.

------------------------------------------------------------------------

## 20. Environment Variables

Never commit secrets.

Maintain:

`.env.example`

Ignore:

`.env` `.env.local`

Only use environment variables for values that actually need them.

Never print secret values in terminal output or logs.

------------------------------------------------------------------------

## 21. Git Workflow

Use Git continuously.

Before changes:

`git status`

After coherent work:

-   inspect diff
-   run checks
-   commit

Preferred commit style:

``` text
feat: add responsive header
feat: add ministry cards
feat: add prayer request form
fix: correct Urdu navigation direction
fix: prevent duplicate prayer submissions
perf: optimize hero images
chore: update dependencies
```

Avoid:

``` text
update
changes
stuff
fixes
work
```

Never commit secrets.

------------------------------------------------------------------------

## 22. GitHub

The repository should be owned by the church/mission organization or its
designated organization account.

Do not make a developer's personal GitHub account the sole owner of the
project.

Before pushing:

-   inspect diff
-   check `.gitignore`
-   check for secrets
-   check for personal credentials
-   check for unnecessary files

------------------------------------------------------------------------

## 23. Branching

For meaningful work use feature branches:

``` text
main
feature/homepage
feature/prayer
feature/events
feature/resources
feature/urdu
feature/seo
```

Small safe changes may be committed directly according to the project's
agreed workflow.

Never force-push or rewrite shared history without explicit instruction.

------------------------------------------------------------------------

## 24. Validation

After meaningful changes run the project's actual scripts from
`package.json`.

Typical checks may include:

``` text
npm run lint
npm run typecheck
npm test
npm run build
```

Do not assume these scripts exist. Inspect `package.json`.

If a command fails:

1.  understand the error
2.  fix the root cause
3.  rerun
4.  report remaining issues

Never hide failures.

------------------------------------------------------------------------

## 25. Browser / UI QA

For UI work verify:

-   desktop
-   mobile
-   keyboard
-   focus
-   forms
-   loading
-   error
-   empty
-   success
-   Urdu RTL if applicable

Check for:

-   overflow
-   clipped text
-   broken images
-   bad contrast
-   inaccessible buttons
-   layout shift
-   console errors

------------------------------------------------------------------------

## 26. SEO

For every public page consider:

-   title
-   description
-   canonical
-   Open Graph
-   headings
-   internal links
-   structured data where appropriate

Do not put unsupported claims into structured data.

------------------------------------------------------------------------

## 27. Performance

Prefer:

-   Next.js image optimization
-   optimized image sizes
-   lazy loading
-   server rendering where useful
-   limited client components
-   minimal third-party scripts

Avoid:

-   huge background videos
-   unnecessary animation libraries
-   huge images
-   unnecessary hydration
-   excessive JavaScript

------------------------------------------------------------------------

## 28. Security

Never:

-   expose secrets
-   trust client-only authorization
-   store sensitive data unnecessarily
-   log sensitive submissions
-   expose internal errors
-   add arbitrary third-party scripts

Validate user input.

Sanitize user-generated content.

Keep dependencies current.

------------------------------------------------------------------------

## 29. Deployment

Production architecture:

``` text
Local
  ↓
GitHub
  ↓
Vercel Preview
  ↓
QA
  ↓
Vercel Production
  ↓
Custom Domain
```

Do not deploy directly to production without testing the preview.

Use Vercel environment variables.

Never hardcode production secrets.

------------------------------------------------------------------------

## 30. Domain / DNS

Do not make DNS changes unless explicitly requested and the current DNS
records have been reviewed.

If email exists on the domain:

NEVER delete MX records accidentally.

Use the DNS records provided by Vercel at deployment time.

Verify:

-   root domain
-   www
-   HTTPS
-   canonical hostname
-   email DNS
-   sitemap
-   robots.txt

------------------------------------------------------------------------

## 31. Account Ownership

The organization should control:

-   domain registrar
-   GitHub
-   Vercel
-   email
-   analytics
-   payment provider
-   CMS/database

Do not make yourself or the developer the sole owner.

------------------------------------------------------------------------

## 32. No Hallucination Policy

Never invent:

-   church statistics
-   number of children helped
-   number of churches planted
-   number of people reached
-   staff
-   leaders
-   addresses
-   dates
-   partner organizations
-   donations received
-   financial figures
-   testimonials
-   ministry outcomes

If needed, write:

`[CONTENT REQUIRED FROM ORGANIZATION]`

------------------------------------------------------------------------

## 33. No Unauthorized Scope Expansion

Do not decide on your own to add:

-   authentication
-   database
-   CMS
-   CRM
-   payments
-   AI
-   admin dashboard
-   member portal
-   subscriptions

unless the PRD and current task explicitly require them.

------------------------------------------------------------------------

## 34. Do Not Destroy Existing Work

Never use destructive commands casually.

Before:

-   deleting directories
-   replacing configuration
-   migrating frameworks
-   changing package managers
-   changing database schemas
-   rewriting Git history

explain the reason and scope.

------------------------------------------------------------------------

## 35. Final Review Before Completion

Before saying a task is complete:

1.  inspect git diff
2.  run relevant checks
3.  verify no secrets
4.  verify no accidental files
5.  verify responsive behavior
6.  verify accessibility
7.  verify requested functionality
8.  verify PRD acceptance criteria relevant to the task

Then report:

``` text
Implemented:
[list]

Validated:
[list]

Tests/checks:
[list]

Known issues:
[list]

Next recommended task:
[task]
```

------------------------------------------------------------------------

## 36. First Task

The first coding task is FOUNDATION ONLY.

Do not build the full website.

First inspect:

-   current repository
-   Node version
-   npm/pnpm/yarn
-   Git
-   GitHub
-   existing files
-   existing framework
-   existing dependencies

Then:

1.  establish the project foundation
2.  create `PRD.md`
3.  create `CLAUDE.md`
4.  create `README.md`
5.  create `.env.example`
6.  create `.gitignore`
7.  configure Git
8.  verify local development
9.  run the project checks
10. make a meaningful initial commit

After foundation is verified, stop and report the result.

Do not proceed to large UI implementation without the next explicit
task.
