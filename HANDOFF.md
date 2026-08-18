#  Dawn of Light Ministry

**Implementation specification for Claude Code.**
Design phase complete. Approved direction: **Direction B — The Institution.**

This document tells you what the approved designs mean in code. It is extracted from
the design files in this project plus `uploads/PRD.md` and `uploads/CLAUDE.md`. It
introduces no new design decisions.

**Precedence:** explicit user instruction → `PRD.md` → `CLAUDE.md` → this document →
the design files → engineering judgement. Where a fact is missing it is marked
`[CONFIRM]`; never invent it.

**Contents**
1. Organization facts · 2. Design files · 3. Stack & repository · 4. Design tokens ·
5. Buttons & CTA rules · 6. Cards, lists & imagery · 7. Forms · 8. Navigation &
footer · 9. Light/dark mode · 10. Responsive · 11. Motion & interaction · 12. Logo &
assets · 13. Sitemap & routes · 14. Page-by-page structure · 15. Component
inventory · 16. Content & data model · 17. Required images & assets · 18. Dynamic
functionality · 19. Accessibility · 20. SEO · 21. Bilingual & RTL · 22. Constraints ·
23. Implementation order · 24. Must not change · 25. Content required

---

## 1. Organization facts (verified — use verbatim)

| Field | Value |
| --- | --- |
| Name | Dawn of Light Ministry |
| Urdu name | نور کی صبح |
| Short name | DLM |
| Associated identity | Bethlehem Church, Seminary & Educational Mission |
| Locations | Karachi (Sindh) and Faisalabad (Punjab), Pakistan |
| Founded | 1982 |
| Tradition | Baptist Christian |
| Phone / WhatsApp | 03442316634 |
| Email | pastornayyer@gmail.com |
| Social | Facebook and YouTube (URLs `[CONFIRM]`) |
| Rhythm | Church services twice weekly · Sunday School weekly · Seminary classes daily · Holy Communion monthly |
| Leadership | Pastor Nayyer Gull (leadership; role `[CONFIRM]`) · Pastor Rahmat (founder) |
| Faith | Christian Trinity; baptism in the name of the Father, Son and Holy Spirit |
| Mission | Preaching God's Word among Christians and non-Christians, and helping Christian children receive education and build a brighter future |
| Vision | Educated children contributing to the advancement of the nation |
| Bible | Commonly used Urdu translation, cited by reference |

Footer copyright line as designed: `© 1982–2026 Dawn of Light Ministry. All rights reserved.`

---

## 2. Design files

Read the file for the page you are building. This document summarises the rules; the
files carry the layout.

| File | Contents |
| --- | --- |
| `Dawn of Light - Final Design.dc.html` | **Start here.** Foundations (colour, type, spacing, buttons, cards, motion), homepage desktop light + dark, tablet/mobile/Urdu RTL, the page system, and section 06 "Rules that keep it coherent" |
| `Dawn of Light - Logo Assets.dc.html` | Approved lockup, mark, light/dark/on-dark variants, geometry |
| `Dawn of Light - Homepage Design.dc.html` | Homepage detail, both modes |
| `Dawn of Light - About.dc.html` | About: four anchored sections, article pattern, dark + mobile |
| `Dawn of Light - Ministries.dc.html` | Ministries index (parent landing page) |
| `Dawn of Light - Ministry Pages.dc.html` | Shared ministry template + the five children |
| `Dawn of Light - Seminary.dc.html` | Seminary page detail |
| `Dawn of Light - Sermons.dc.html` | Sermons index, latest band, archive rows, empty state, mobile |
| `Dawn of Light - Resources.dc.html` | Resources index, filters, rows, mobile |
| `Dawn of Light - Events.dc.html` | Events index and states |
| `Dawn of Light - Detail Templates.dc.html` | Shared detail skeleton + Event / Sermon / Resource detail + event status variants + shared rules |
| `Dawn of Light - Prayer.dc.html` | Prayer form, "How this works", all form states, dark, Urdu RTL |
| `Dawn of Light - Support.dc.html` | Support State A (giving pending approval) and State B (after approval) |
| `Dawn of Light - Contact.dc.html` | Channels, form, two cities, directions band, dark, mobile |
| `Dawn of Light - Utility Pages.dc.html` | Privacy, Website Notice & Terms, 404, 500 |
| `Dawn of Light - Directions.dc.html` | **Historical only.** The three-direction study that produced Direction B. Not a site page. |

Design frames are drawn at 1440 (desktop), 768 (tablet) and 390 (mobile). The
canvas ground `#EFECE6` and the 1px `#DCD6CA` frame borders are presentation
chrome, not site colours.

---

## 3. Stack & repository

Per `PRD.md` §16–17: Next.js (App Router), TypeScript strict, Tailwind CSS,
shadcn/ui only where it saves real work, Lucide for icons, no animation library.
Server components by default; client components only where interaction requires it.
Git from the first commit, GitHub, Vercel.

```
dawn-of-light-ministry/
├── app/            routes (see §13), route groups per locale
├── components/     see §15
├── content/        typed content: ministries, sermons, events, resources, nav
├── lib/            formatters, validation schemas, i18n helpers
├── public/
│   ├── logo/       from brand/
│   ├── images/
│   └── documents/  PDFs
├── styles/
├── types/
├── docs/
├── CLAUDE.md  PRD.md  README.md  HANDOFF.md
├── .env.example  .gitignore  package.json
```

No npm dependency beyond this list without asking. No CMS, no database, no auth, no
payment SDK in V1.

---

## 4. Design tokens

Encode these in the Tailwind theme. **Do not introduce a colour that is not here.**

### 4.1 Light mode

```
paper            #FAF9F6   default page ground
surface          #FFFFFF   content sections, cards
surface-warm     #FCFBF8   inset cards, form grounds
band             #F4F1EA   quiet CTA bands
ink              #122536   navy — all headings, dark bands, footer
ink-body         #3E3A33   body copy
ink-muted        #5A5449   secondary copy
ink-faint        #7C7466   metadata, captions, breadcrumb
ink-ghost        #8A8375   mono labels
ink-disabled     #A29A8A   placeholder text
disabled-bg      #E7E2D9   disabled button fill
disabled-fg      #9B948A   disabled button text
primary          #7A2E2E   oxblood — primary action, section eyebrows
primary-hover    #5C2222
accent           #C89B4A   brass — 3px rules, education accent
border           #E2DDD3   default 1px rule
border-soft      #EFEAE1   inner list rules
border-strong    #C4BCAC   secondary button outline
input-border     #D8D2C6
success          #2F6B4F   registration open
warning          #9A6B16   [CONFIRM] markers, closed state
error            #A33A3A   cancelled, form errors
```

Meaning, from the foundations sheet: ink navy is the institutional voice and carries
all headings. Oxblood is reserved for primary action and section eyebrows. Brass
appears only against navy or as a 3px rule — **never as a large fill**, which is what
makes a site read as a template.

### 4.2 Dark mode (designed, not inverted)

```
dark-ground      #0E1A24   deep blue-black, warmer than grey
dark-surface     #152531
dark-band        #122536
dark-border      #2A3A47
dark-border-2    #38495A  (inputs)  #46596A  (buttons)
dark-heading     #F0EDE6   soft parchment white, not #FFF
dark-body        #A9B8C4   8.6:1 against ground
dark-faint       #7E90A0
dark-accent      #E0B872   brass — primary action fill in dark
dark-clay        #C9847C   replaces oxblood for accents
dark-success     #6FAE8C
utility-bar-fg   #B9C6D2
```

Oxblood is too dark at low luminance, so **primary action moves to brass with navy
text** and clay replaces oxblood for accents.

### 4.3 Typography

| Role | Family | Weights |
| --- | --- | --- |
| Headings, standfirsts, card titles, pull quotes | Source Serif 4 | 400, 600 |
| Body, UI, navigation, forms | IBM Plex Sans | 400, 500, 600 |
| Eyebrows, metadata, labels, code | IBM Plex Mono | 400, 500 |
| Urdu | Noto Nastaliq Urdu | 400 |

Scale (desktop / tablet / mobile):

| Role | Size | Detail |
| --- | --- | --- |
| Display h1 | 56 / 44 / 34 | Source Serif 600, line-height 1.08, tracking −.022em |
| Page h1 (interior) | 52 / 44 / 32 | line-height 1.1, tracking −.022em |
| Section h2 | 34–44 / 30 / 26 | 600, line-height 1.15–1.2, tracking −.015 to −.02em |
| Sub-head h3 | 26–32 / 24 / 22 | 600 |
| Serif standfirst | 22–25 | 400, line-height 1.55–1.6 |
| Card title | 19–22 | Source Serif 400/600 |
| Body | 17/1.7 (long-form 17.5–18/1.75–1.8) | IBM Plex Sans 400 |
| Small / meta | 14.5–15.5 | |
| Caption / breadcrumb | 13–14 | ink-faint |
| Eyebrow | 12 · 600 · .18em · uppercase | primary (dark: accent) |
| Mono label | 10.5–11 · .14–.16em · uppercase | ink-ghost |

Rules: serif speaks, sans navigates. Measure capped at **68ch** (legal pages 70ch).
**Never below 15px anywhere on the site** (mono labels excepted at 10.5–12 for
non-essential labels). `text-wrap: pretty` on every heading and standfirst. Negative
tracking only on serif above 30px.

Urdu: Noto Nastaliq Urdu, `line-height` 2.0–2.2 minimum, **+2px size** against
Latin, no uppercase, no letter-spacing.

### 4.4 Spacing, grid, shape

```
scale       4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
section     desktop 128 top/bottom · tablet 88 · mobile 64
            (band sections as drawn: 88–96 desktop, 56–72 tablet, 30–40 mobile)
container   1240 max · gutter 40 desktop / 32 tablet / 20 mobile
grid        12 col desktop · 8 col tablet · 4 col mobile · 24 gutter
gaps        cards 20–24 · rail stack 14 · inline actions 12
radius      0 everywhere, except pills on language chips and 2px on inputs
borders     1px #E2DDD3 · accent rules 3px · page-section top rules 2px #122536
shadow      none, anywhere
```

Common column splits, as drawn: masthead `1fr 520–560px` gap 72; article `260px 1fr`
gap 72; ministry body `1fr 380px` gap 72; detail `1fr 300px` gap 36; form page
`1fr 620px` gap 80.

---

## 5. Buttons & CTA rules

| Variant | Light | Dark |
| --- | --- | --- |
| Primary | `#7A2E2E` fill, `#fff`, 15px/500, padding 14×24 | `#E0B872` fill, `#122536`, 600 |
| Primary hover | `#5C2222` fill | brass darkened; fill only |
| Secondary | 1px `#C4BCAC`, `#122536`, padding 13×24 | 1px `#46596A`, `#E8EBEE` |
| Tertiary link | `#7A2E2E`, 1.5px underline, 3px offset, trailing `→` | `#E0B872` same |
| Disabled | `#E7E2D9` fill, `#9B948A` text, reason stated beside it | equivalent |

Square corners, no gradient. Minimum target **48×48 on touch**. Focus is a
**2px oxblood outline with 2px offset**, on every control, never removed.
~~Hover changes fill or colour only — nothing moves or scales.~~ **Revised
2026-08-18 — see §11 "Amendment":** primary/secondary hover now also lifts 2px
with a soft tinted shadow, settling back on press. Tertiary (a text link, not a
box) is unchanged — colour-only.

CTA hierarchy (from the coherence rules): **one oxblood primary per section, at
most.** Prayer and Support are the only CTAs allowed twice on a page — once in the
header, once in their own section. Giving language stays plain: no urgency, no
counters, no "donate now".

Large action bands sit on `#F4F1EA` with a heading, one line of copy, and one or two
buttons right-aligned on desktop, stacked full-width on mobile.

---

## 6. Cards, lists & imagery

**Cards are flat and bordered.** 1px `#E2DDD3`, ground `#FCFBF8` or `#FFFFFF`,
padding 20–26. A **3px coloured top border identifies the family**: oxblood for
church/action, navy for seminary/institutional, brass for education/children.
~~Elevation is a rule, never a shadow.~~ **Revised 2026-08-18 — see §11
"Amendment":** true only for *static* cards now. A card that's itself a link
(e.g. a ministry card) lifts 2px with a soft shadow on hover, settling back on
press. A card that only displays information (e.g. a contact panel) stays flat
and shadow-free, exactly as before — hover motion is reserved for things that
are actually clickable.

**Prefer ruled rows to cards for lists.** The default list primitive is
`border-top: 1px #E2DDD3` on the container with `border-bottom: 1px #EFEAE1` per row,
padding 13–18px vertical. Index pages (Sermons, Resources, Events) use ruled rows,
not card grids. Related strips: max 3 rows, same type, omitted below 2 items.

**Imagery.** Real ministry photography only, warm colour grade, cropped 3:2, 16:9 or
21:9, **always captioned in the organization's own words**. No stock, no AI people,
no filters, no text baked into images, no identifiable children without written
permission. Where a photograph is missing a **marked placeholder ships** — diagonal
stripe fill `repeating-linear-gradient(135deg,#E8E2D6 0 10px,#DFD8CA 10px 20px)` with
a mono caption naming what belongs there — **never a decorative gradient**.

Only one section per page may carry a photograph at full bleed.

---

## 7. Forms

Field pattern: label above (13.5px/500, `#3E3A33`), control with 1px `#D8D2C6`
border, white ground, 14–15px padding, 15.5px text, 2px radius. Optional fields say
`(optional)` in the label. Help text 13px `#7C7466` below. Panels: 1px `#E2DDD3` on
`#FAF9F6`, padding 36.

**Every form defines six states:** default, validating, loading, success, error,
disabled. Prayer's states are drawn in its file — follow them. Errors are text plus
`#A33A3A`, never colour alone, and are announced to screen readers. Loading disables
the submit and states what is happening. Success replaces the panel with a
confirmation that repeats what happens next.

**Contact fields:** Name, Email, Phone/WhatsApp (optional), Subject (select: General
enquiry · Church & services · Seminary · Children's education · Resources ·
Supporting the mission), Message, consent checkbox. Copy: "I agree that the ministry
may use these details to reply to my message."

**Prayer fields:** Name (optional), Email (optional), Prayer request (required —
"Only the request itself is required"), permission to follow up, privacy
acknowledgement. Urdu or English accepted.

Server-side validation; honeypot plus rate limiting; prevent duplicate submission.
Never log form contents.

---

## 8. Navigation & footer

**Utility bar** (navy `#122536`, `#B9C6D2`, 12.5px, padding 10×40): left — "Karachi
& Faisalabad, Pakistan", "Phone / WhatsApp 03442316634", "pastornayyer@gmail.com";
right — English / اردو / divider / Dark mode.

**Header** (white, 1px bottom border, padding 20×40): logo lockup left — 46px brass
outlined square mark, 16px gap, "Dawn of Light Ministry" in Source Serif 21/600, and
"BETHLEHEM CHURCH, SEMINARY & EDUCATIONAL MISSION" at 11.5px/.09em uppercase
`#7C7466`. Right: nav at 14px `#4B4A45`, then the Support CTA.

Nav order: **Home · About · Ministries · Seminary · Sermons · Resources · Events ·
Prayer · Contact**, then `Support the mission` (oxblood, 14.5px/500, padding 13×20).
Active item: 14px/600 `#122536` with a **2px brass underline, 5px offset**.

Behaviour: sticky after scroll (the only sticky element besides the article rail);
visible focus; active state per route; mobile drawer closes on route change; Escape
closes; focus trapped while open and returned on close. Mobile header: 36px mark, two
-line wordmark, 3-bar button in a 1px bordered box.

**Footer** (navy, `#A9B8C4`, padding 40): logo and one-line mission, then columns —
About (Our story, Mission & vision, Statement of faith, Leadership), Ministries (the
five children), Resources/Sermons/Events, Contact block with phone, WhatsApp, email
and both cities, and social links. Bottom row: copyright left; `Privacy · Website
notice · English / اردو` right. Compact footer variant (padding 32–40, single row)
is used on form and utility pages, as drawn.

---

## 9. Light/dark mode behaviour

Dark mode is a **designed theme**, toggled from the utility bar, persisted, and
respecting `prefers-color-scheme` on first visit. Use the §4.2 tokens.

Mapping: page ground `#FAF9F6` → `#0E1A24`; white surfaces → `#152531`; navy bands
stay `#122536` (they read as a lift rather than a drop); headings → `#F0EDE6`; body →
`#A9B8C4`; borders → `#2A3A47`; primary buttons → brass with navy text; eyebrows →
`#E0B872`; Urdu accent → `#C9847C`.

**Two background colours per page maximum** in either mode (paper/white + one navy
band). Sections alternate paper, white and **one navy band per page — never two navy
bands in sequence.** Each section opens with an eyebrow and a serif heading.

Logo swaps to the on-dark variant (brass mark and rule, `#F0EDE6` wordmark,
`#8FA0AE` descriptor). Image placeholders darken to
`repeating-linear-gradient(135deg,#1B3145 0 10px,#16293A 10px 20px)`.

---

## 10. Responsive behaviour

Test **320 · 375 · 390 · 768 · 1024 · 1280 · 1440 · 1920**. No horizontal overflow at
any width. Mobile is a first-class experience.

| Range | Behaviour |
| --- | --- |
| ≥1280 | Full design. Container 1240 max, 40 gutters. Section rhythm 128. Detail rail 300px sticky; article rail 260px sticky. |
| 1024–1279 | Grids hold; section rhythm 88–96; rail 280px. |
| 768–1023 | Two columns become one. Gutter 32. Nav collapses to the drawer. Article `OnThisPage` rail becomes a horizontal scrolling tab strip below the masthead. Detail rail **unstacks**: action card moves *above* the body, facts and context below. Fact strips wrap 2×2. Masthead standfirst drops below the h1. |
| <768 | Single column, 20px gutters, section rhythm 64 (bands 30–40 padding). Filter chips become a horizontal scroll row. Ruled rows stack: media, kicker, title, meta, then a **full-width action button**. Tables become label/value stacks. |

Mobile specifics: touch targets ≥44px, form controls 48px+; primary action
full-width; **WhatsApp is the first action on Contact**; on Sermons the latest-sermon
band sits above the archive; images keep their ratio and never crop faces.

---

## 11. Motion & interaction rules

One idea: **content settles, nothing performs.**

- ~~Entry: fade-and-rise 8px over 240ms, once, staggered 60ms across at most
  three items.~~ **Revised 2026-08-18 — see §11 "Amendment":** 400ms / 100ms
  stagger, to match the site's revised link/button/card hover timing.
- ~~Hover: 120ms colour only. Nothing moves, scales or lifts.~~ **Revised
  2026-08-18 — see §11 "Amendment":** 300ms colour (links/buttons/toggles),
  or colour + lift + shadow at 350ms for clickable cards.
- Focus: instant, 2px oxblood outline, 2px offset.
- Sticky: the header, and the article rail on ≥1024. Nothing else.
- **No parallax, carousels, counters, hero animation, auto-advancing anything,
  scroll-jacking, or number roll-ups.**
- Accordions/tabs (Ministries index, mobile anchor strip): instant or ≤160ms
  height/colour change, no bounce.
- All motion disabled under `prefers-reduced-motion`, including entry animation.
- Video: click-to-play facade only; no autoplay, no background video.

### Amendment (2026-08-18) — hover lift/shadow approved for clickable elements

The original "hover: colour only, nothing moves/scales/lifts" rule above was a
deliberate Direction B choice, applied faithfully through two implementation
passes. The organization then explicitly requested a more tactile hover
feel — lift and soft shadow on buttons and on clickable cards — and, when told
this conflicted with the frozen rule, confirmed they wanted the rule overridden
rather than worked around. This amendment supersedes the "nothing moves, scales
or lifts" line for interactive elements only; it does not reopen anything else
in this document.

- **Buttons (primary/secondary), links and nav/toggle controls**: hover lift
  (buttons) plus any colour/underline change is **300ms ease-out** (site-wide
  250-300ms links/buttons band, refined same day from an initial 150-200ms
  pass once every hover across the site was in place — see the timing note
  below).
- **Clickable cards** (a card that's itself a link, e.g. a ministry card, a
  bordered link-panel like a Support row): hover lifts **2px**
  (`translateY(-2px)`) with a **soft, colour-tinted shadow** (each
  button/card's own fill or ink tone, not a generic grey), `active:` settles
  back to baseline for a pressed feel. Timing **350ms ease-out** (site-wide
  300-400ms cards band — slightly slower than buttons/links so a card's
  larger surface doesn't feel like it's snapping), covering colour +
  transform + shadow together (not colour alone).
- **Tertiary buttons** (text links) and **static cards** (display-only, not a
  link — e.g. a contact-info panel) are unchanged in kind: colour-only, no
  lift, no shadow. Hover motion stays reserved for things that are actually
  clickable; their colour transition still runs at the same 300ms as every
  other link (static cards' colour transition — a theme-switch smoothing,
  not a hover — sits at the low end of the cards band, 300ms).
- **Ruled rows** (§6 "Prefer ruled rows to cards for lists") are unchanged too —
  they're deliberately a different pattern from cards; giving them the card
  lift/shadow would blur that distinction. Background-colour hover only.
- **Nav-link active/hover indicator** (header): now one `scale-x` transform
  instead of a static bar swapped for a hover-only one — it visibly grows into
  place (`transform-origin: center`, so it grows identically under Urdu/RTL)
  rather than appearing instantly, both on hover and when the active route
  changes.
- **Entry animation**: fade-and-rise 8px over **400ms**, staggered **100ms**
  across at most three items (`components/ui/Reveal.tsx`) — revised same day
  from the first bullet's original 240ms/60ms figures once the site-wide
  timing pass below was applied, so entry motion reads at the same
  deliberate pace as the new hover timings rather than snappier than them.
  Still the only *scroll-triggered* motion on the site, still once per
  element, still skipped for anything already on screen at mount.
- `prefers-reduced-motion` is still respected, by the same mechanism as
  everywhere else on the site: app/globals.css's blanket rule forces every
  `transition-duration`/`animation-duration` to ~0ms, so hover lift/shadow/
  underline-growth still occur but snap instead of animating. No new
  per-element `motion-reduce:`/`motion-safe:` handling was added — this keeps
  the new hover motion consistent with how every pre-existing hover effect on
  the site already complies.
---

## 12. Logo & asset usage

Approved artwork in `brand/` → copy to `public/logo/`:

```
dlm-mark.svg                 dlm-logo-horizontal.svg
dlm-mark-light.svg           dlm-logo-horizontal-light.svg
dlm-mark-dark.svg            dlm-logo-horizontal-dark.svg
dlm-mark-on-dark.svg         dlm-logo-horizontal-on-dark.svg
```

Geometry (frozen): 46×46 square, **1.5px brass `#C89B4A` outline**, Latin cross in
oxblood `#7A2E2E` — vertical bar 3.2×23.5 at top 10.5, crossbar 14.8×3.2 at top 17.4,
both centred. Lockup: mark, 16px gap, wordmark "Dawn of Light Ministry" in Source
Serif 4 600/21px, tracking −.01em, `#122536`, line-height 1.25; descriptor
"Bethlehem Church, Seminary & Educational Mission" at 11.5px, .09em, uppercase,
`#7C7466`.

On dark: outline and cross both `#E0B872`, wordmark `#F0EDE6`, descriptor `#8FA0AE`.
Mobile: 36px mark with proportional cross (2.5×18.4 and 11.6×2.5), two-line wordmark.

Rules: never recolour, rotate, add effects to, or place the mark on a busy
photograph; keep clear space equal to the mark's stroke square; use the mark alone
below 120px lockup width. Favicon and app icons derive from `dlm-mark`. The cross is
built from rectangles — reproduce it as SVG, not as a font glyph or emoji.

---

## 13. Sitemap & routes

```
/                                Home
/about                           About  #our-story #mission-vision
                                        #statement-of-faith #leadership
/ministries                      Ministries index (parent landing page)
/ministries/church               Church
/ministries/seminary             Bethlehem Seminary
/ministries/publishing           Publishing & Christian Articles
/ministries/education            Education & community outreach
/ministries/childrens-education  Children's Education
/seminary                        308 → /ministries/seminary  (header link kept)
/sermons                         Sermons index
/sermons/[slug]                  Sermon detail
/events                          Events index
/events/[slug]                   Event detail
/resources                       Resources index
/resources/[slug]                Resource detail
/prayer                          Prayer
/support                         Support
/contact                         Contact  (includes directions; no /directions route)
/privacy                         Privacy
/website-notice                  Website Notice & Terms
404 · 500                        Error pages
```

Urdu mirrors the whole tree under a locale segment (`/ur/...`) with translated
metadata; slugs may stay Latin.

**Route relationships**
- About's four sitemap children are anchors on one page, not routes. Deep links must
  work and the rail must reflect the active anchor.
- Sermons and Resources are **siblings**. Resources keeps a "Sermons" filter chip
  that links to `/sermons` rather than duplicating the archive.
- Publishing pulls its "Recently published" band from the same content set as
  Resources, filtered to articles and books.
- Ministries index links to all five children; its teaching/lectures card links to
  Sermons.
- Children's Education and Education cross-link; both link to Support.
- Prayer is reachable from the header, the homepage prayer section, the sermon detail
  rail and the Contact footer band — always the same route.
- Every detail page's breadcrumb is `Home / [Section] / [Item]`.
- Contact is the destination for every "directions", "visit", "enquire" and "ask for
  a copy" action across the site.

---

## 14. Page-by-page structure

Every page: utility bar → header → masthead (breadcrumb, eyebrow, h1, standfirst) →
body → CTA band → footer. Four body patterns only: **index** (filters + ruled rows),
**article** (rail + prose), **detail** (main + rail), **form** (intro + panel).

### Home
1. Hero — split `1.05fr 1fr`: eyebrow "A Baptist church, seminary and educational
   mission · since 1982", h1 "God's Word taught, …" (56px), Urdu نور کی صبح at 24px
   in oxblood, standfirst `[FINAL HERO COPY TO BE APPROVED]`, primary
   `Learn about our mission` + secondary `Request prayer`, then a three-cell fact rail
   (1982 Founded · Daily Seminary classes · Baptist Tradition). Right: one photograph
   with a captioned navy strip.
2. Mission — `340px 1fr`, eyebrow + 48×3 brass rule, mission prose, link to Mission & Vision.
3. Ministries — "Six ministries, one mission" + `All ministries →`, 3-column cards
   with coloured top rules.
4. Seminary — **navy band**, `Theological education, taught daily`, facts list
   (Classes · Instruction · Statement of faith · Courses & schedule), two actions.
5. Children & education — image left, prose right, ruled list of what support pays for.
6. Prayer — `#F4F1EA` band: "Need prayer?", privacy sentence, note that Urdu is
   welcome and name/email are optional, primary to `/prayer`.
7. Events — ruled rows or empty state + `All events →`.
8. Resources — ruled rows + `All resources →`.
9. Support — "Support goes to teaching, books and school fees", `How you can help`.
10. Location/contact — "Two cities, one ministry", three panels (Karachi,
    Faisalabad, contact channels).
11. Footer.

### About (article pattern)
Masthead → sticky `On this page` rail (Our story · Mission & vision · Statement of
faith · Leadership) → **Our story** (serif standfirst then prose, history placeholder)
→ **Mission & vision** (2px navy top rule, brass-bordered quote block) → **Statement
of faith** navy band (`250px 1fr 320px`: Trinity statement, then the baptism doctrine
in a bordered aside) → **Leadership** (white, two portrait cards: Pastor Nayyer Gull,
Pastor Rahmat — founder; role and bios placeholder) → footer. Below 1024 the rail
becomes a scrolling tab strip.

### Ministries index
Masthead → six cards with coloured top rules (Church, Bethlehem Seminary, Children's
education, Publishing & articles, Teaching & lectures → Sermons, Educational
outreach) → navy band → CTA → footer. Stays the parent landing page.

### Ministry child pages (×5) — one template, six slots
1. Masthead: breadcrumb, `Ministry · [Name]` eyebrow, h1, serif standfirst (22px).
2. At-a-glance: 3–4 ruled facts across the full width; unconfirmed values in
   `#9A6B16` `[CONFIRM]`.
3. Photograph: full content width, 21:9, captioned placeholder.
4. What we do: `1fr 380px` — prose at 68ch, `Activities` ruled list; rail carries the
   practical card (3px navy top border) plus a Related card.
5. **One navy band** carrying this page's most important thing: Church → weekly
   rhythm; Seminary → courses & schedule; Publishing → recently published; Education
   → the vision stated plainly; Children's → what support pays for.
6. Siblings (the other four as ruled rows) + one CTA band.

Per-page content is in `Dawn of Light - Ministry Pages.dc.html`. Children's Education
additionally carries a **photograph-policy card** in the rail.

### Seminary
As `/ministries/seminary` above; `Dawn of Light - Seminary.dc.html` holds the
extended treatment. Course names, length, level, intake and fees are `[CONFIRM]`.

### Sermons (index)
Masthead → **navy latest-sermon band** (`640px 1fr`: YouTube facade + `Most recent`
eyebrow, title, meta, description, brass `Watch on YouTube` + `Sermon detail`) →
filter row (All sermons · By series · By Scripture · By speaker | English · اردو |
search) → archive rows with a **150px date rail** (day large, `mon yyyy` in mono),
kicker `SERMON · language · format`, title, meta, action (Watch/Listen/Read) →
count + pagination → "Hear the preaching in person" band → footer.
Empty state: outlined cross, "No recordings published yet", two actions.

### Resources (index)
Masthead → filter row (All · Sermons · Articles · Bible studies · Educational
material · Books | English · اردو | search) → rows with a 180×112 thumbnail, kicker,
title, description, meta, action (Watch on YouTube / Read / Download PDF / Ask for a
copy) → count + pagination → "Looking for something specific?" band → footer.

### Events (index)
Masthead → upcoming rows with status badges → **graceful empty state, never fake
events** → contact band → footer.

### Detail templates (Event · Sermon · Resource)
Shared skeleton: breadcrumb → kicker → h1 (38–44, max 22ch) → metadata row (3–4
facts, gap 22) → main column (hero media 16:9, then prose at 68ch with 23px
sub-heads) + 300px rail → related strip (max 3 ruled rows, same type).

Rail order is **fixed**: action card (3px navy top border) → facts table → context.

- **Event** — parchment header, status badge (`Registration open` `#2F6B4F`, `Closed`
  `#9A6B16`, `Cancelled` `#A33A3A`, `Completed` outlined), Attend card, About,
  Programme (time/session rows), rail: Details, Getting there (static map + address),
  Contact. Status variants: closed → disabled button with the reason stated;
  cancelled → notice replaces the action card, page stays online; completed → action
  card becomes a link to photographs or a recording.
- **Sermon** — **navy** header band, YouTube facade + Watch / Download audio /
  Sermon notes, Scripture block with a 3px brass left border (**reference only — Bible
  text is not reproduced**), About this sermon, rail: Details, In this series, Prayer
  card.
- **Resource** — parchment header, serif standfirst, body (articles publish full text;
  studies, books and documents publish a description plus a download), What it
  covers, "Printed copies are free" note, rail: Get this resource (Download PDF / Ask
  for a printed copy), Details, Related.

### Prayer (form pattern)
Masthead → `1fr 620px`: left "How this works" as numbered ruled steps plus the
privacy statement; right the form panel ("Request prayer", "Only the request itself
is required"). All six states drawn. Dark and Urdu RTL variants drawn.

### Support
**State A (launch):** masthead "Support goes to teaching, books and school fees" →
"Three costs the ministry carries" ruled list → ways to help that are not money
(pray, share, volunteer) → contact routes → **no payment control**. A visible notice
explains that giving methods appear once the organization's arrangements are
approved.
**State B (after approval only):** the giving block — amount options, provider
handoff, and the line that the ministry never sees or stores card details. Build A;
keep B behind a flag, unbuilt until §18 conditions are met.

### Contact
Masthead → three channel panels (WhatsApp `Fastest` / Email / Follow: Facebook &
YouTube) → `1fr 620px`: two city panels (photo or map, address `[CONFIRM]`, services
`[CONFIRM]`, Sunday School / Seminary) with the note that maps appear only once
addresses are confirmed; form panel on the right → **navy "Getting there" band**
(`280px 1fr`: WhatsApp-for-a-pin action; per-city street address, nearest landmark,
transport note, parking / seminary entrance; plus the "a first-time visitor should be
met" note and access `[CONFIRM]`) → prayer band → compact footer.

### Privacy · Website Notice & Terms
Legal template: masthead with `Last updated [DATE] · Version [n]` → `260px 1fr`,
sticky contents rail + a "Questions?" card, body at **70ch**, no photography, no CTA
band. Sections as drawn: Privacy — What we collect · **Prayer requests** (oxblood
left border) · How we use it · Who sees it · How long we keep it · Children ·
Cookies & analytics · Contact us about your data. Notice — Who publishes this site ·
Use of the content · Copyright & permissions · External links · Accuracy · **Not
pastoral or emergency care** · Giving & donations · Language versions. Each ends with
a "Before launch" box listing what needs approval.

### 404 · 500
404: mono `Error 404 · page not found`, h1 "This page is not here.", the Urdu line
`یہ صفحہ موجود نہیں ہے`, one line of copy, then **four destination cards** (Service
times → Church · Request prayer · Sermons & resources · Talk to someone / WhatsApp),
`Back to the homepage` + site search. 500: same layout, "Something went wrong at our
end.", Try again + WhatsApp. **No technical detail, stack trace or internal error
text is ever shown to a visitor.**

---

## 15. Component inventory

Build once, reuse. Names are suggestions; the split is not.

**Chrome & layout**
`UtilityBar` · `SiteHeader` · `MobileHeader` · `MobileDrawer` · `SiteFooter` ·
`FooterCompact` · `LanguageSwitcher` · `ThemeToggle` · `Breadcrumb` ·
`PageMasthead` · `SectionHeader` (eyebrow + h2 + optional right link) · `NavyBand` ·
`CtaBand` · `OnThisPageRail` · `Container`

**Content primitives**
`Button` (primary · secondary · tertiary · disabled, each light/dark) · `FactStrip` ·
`FactTable` · `RuledList` / `RuledRow` · `Card` (with `topRule` colour) ·
`MinistryCard` · `MediaCard` · `SermonRow` · `ResourceRow` · `EventRow` ·
`EventStatusBadge` · `DateRail` · `FilterChips` · `SearchField` · `Pagination` ·
`ImagePlaceholder` · `Figure` (image + caption) · `VideoFacade` · `Quote` ·
`ScriptureRef` · `PlaceholderTag` · `EmptyState` · `RelatedStrip` · `NoticeBox`
(before-launch / policy)

**Forms**
`FormField` · `Select` · `Textarea` · `Checkbox` · `SubmitButton` · `FormError` ·
`FormSuccess` · `Honeypot` · `FormPanel`

**Detail pages**
`DetailLayout` (main + 300px rail, rail unstacks <1024) · `DetailHeader`
(parchment | navy) · `DetailActionCard` · `DetailMetaRow`

`PlaceholderTag` renders `[CONFIRM]` / `[PSEUDO/PLACEHOLDER …]` in `#9A6B16`. It must
be impossible to miss in development and must never present placeholder text as fact.

Do not create five variants of the same component. Search before adding.

---

## 16. Content & data model

Content lives in `content/` as typed data, separate from UI. No large content blocks
hard-coded inside components.

```ts
type Language = 'en' | 'ur';

interface Ministry {
  slug: 'church' | 'seminary' | 'publishing' | 'education' | 'childrens-education';
  name: string; standfirst: string;
  facts: { label: string; value: string; unconfirmed?: boolean }[];
  activities: string[];
  band: { kind: 'schedule' | 'courses' | 'published' | 'vision' | 'costs'; rows?: {label:string; value:string}[]; body?: string };
  image?: ImageRef; related: string[];
}

interface Event {
  id: string; title: string; slug: string; description: string;
  date: string; startTime?: string; endTime?: string;
  location: string; city: 'Karachi' | 'Faisalabad';
  image?: ImageRef; registrationUrl?: string; contact?: string;
  programme?: { time: string; session: string }[];
  status: 'upcoming' | 'registration-open' | 'registration-closed' | 'cancelled' | 'completed';
  language: Language;
}

interface Sermon {
  title: string; slug: string; speaker: string; date: string;
  scriptureReference?: string; series?: string; language: Language;
  thumbnail?: ImageRef; externalUrl?: string; audioUrl?: string;
  notesUrl?: string; duration?: string; description?: string;
  format: 'video' | 'audio' | 'text';
}

interface Resource {
  title: string; slug: string;
  type: 'sermon' | 'article' | 'bible-study' | 'educational' | 'book';
  author?: string; date?: string; description: string;
  thumbnail?: ImageRef; externalUrl?: string; downloadUrl?: string;
  scriptureReference?: string; language: Language; pages?: number;
  fileSize?: string; sections?: string[];
}

interface ImageRef { src: string; alt: string; caption: string; permission: 'granted' | 'pending'; }
```

Rules: an item missing required fields is **not published** — the index shows its
empty state instead. `permission: 'pending'` renders the placeholder, not the image.
Navigation metadata is data too (labels, order, translations).

---

## 17. Required images & assets

Nothing is invented; every slot ships as a marked placeholder until supplied.

| Slot | Ratio | Where |
| --- | --- | --- |
| Church / congregation at worship | 16:9 hero, 21:9 band | Home hero, `/ministries/church` |
| Seminary class in session | 21:9 | Seminary pages, Home navy band |
| Classroom / Sunday School | 21:9 | Children's Education (no identifiable child without written permission) |
| Printed material and books | 21:9 | Publishing |
| Teaching in a community setting | 21:9 | Education |
| Pastor portrait ×2 | 3:2 | About leadership |
| Church exterior or map ×2 | 3:2 | Contact city panels |
| Event photographs | 16:9 | Event detail |
| Sermon thumbnails | 16:9 | Sermons, Resources |
| Static city maps ×2 | 4:3 | Event detail, Contact — only after addresses are confirmed |

Also required: logo SVGs (in place), favicon set from `dlm-mark`, OG image per page
type, PDFs for studies and books in `public/documents/`, YouTube video IDs, Facebook
and YouTube profile URLs.

Every image needs alt text plus a caption in the ministry's words, and tracked
metadata: filename, purpose, source, permission, alt, approval status, language.

---

## 18. Dynamic functionality

**Prayer form** — server action; validates; sends to `pastornayyer@gmail.com`;
honeypot + rate limit; success and error states. **Prayer requests are private:**
never rendered publicly, never in a public API response, never logged, never in
localStorage, never in analytics or error reports. If follow-up is permitted, the
pastor replies using the details given.

**Contact form** — same mechanics, plus subject routing and duplicate-submission
prevention.

**Payments — do not build.** Support ships in State A. No provider integration until
the organization confirms legal/organizational status, bank account ownership, KYC,
donation eligibility, receipts, accounting, refunds, settlement currency, fees and
the provider contract. Candidates recorded in the PRD: PayFast, then Easypaisa, then
JazzCash/Raast. Never store card data, never build custom card processing, never put
credentials in frontend code, never publish a personal wallet number as an official
destination.

**Filters, search, pagination** — Sermons and Resources filter by type, language and
(sermons) series/Scripture/speaker; search over title, speaker and Scripture.
Prefer URL state so results are linkable and work without JS where practical.

**Media** — YouTube behind a click-to-play facade; nothing loads before the click.
PDFs served from the site. No self-hosted video, no streaming infrastructure.

**Theme and language** — persisted, no flash of the wrong theme, no layout shift.

**Analytics** — none until approved. If approved, privacy-conscious only, and never
carrying prayer content or personal data.

**Errors** — user-facing pages show nothing technical; log server-side without form
contents.

---

## 19. Accessibility

Target WCAG 2.2 AA (PRD §20).

- Semantic HTML; landmarks; **one `<h1>` per page** — breadcrumbs, eyebrows and mono
  labels are not headings. Body sub-heads are `<h2>`/`<h3>` in source order even
  where the visual size is smaller.
- Keyboard operable throughout: drawer (Escape, focus trap, focus return), filters,
  anchor rail, video facade, forms.
- Focus visible everywhere: 2px oxblood outline, 2px offset. Never removed.
- Contrast: body `#3E3A33` on `#FAF9F6` and `#A9B8C4` on `#0E1A24` (8.6:1) both pass;
  check every brass usage — brass is a rule or a fill behind navy text, never light
  text on brass.
- Touch targets ≥44px, form controls 48px+.
- Alt text on every meaningful image; decorative placeholders marked appropriately.
- Form labels always present; errors announced and associated with their field;
  never colour-only status. Disabled controls carry the reason in text.
- `prefers-reduced-motion` disables all entry and hover motion.
- **No hover-only functionality anywhere.**
- Never use `scrollIntoView`; anchor navigation uses standard fragment behaviour with
  `scroll-margin-top` for the sticky header.

---

## 20. SEO (per PRD §21–22)

Every public page: unique title, meta description, canonical URL, Open Graph
metadata, semantic headings, internal links. Sitemap and robots.txt. Both locales
get translated metadata and correct `hreflang`.

Structured data only with verified facts: Organization and Church for the ministry;
Event for real published events; Article for published articles. Do not put
unsupported claims into structured data.

Local SEO targets, without keyword stuffing: Dawn of Light Ministry, Dawn of Light
Ministry Pakistan, Christian church Karachi, Baptist church Karachi, Christian
ministry Karachi, Christian education Pakistan, Christian seminary Pakistan,
Christian ministry Faisalabad. Add verified addresses and service times when
supplied — not before.

---

## 21. Bilingual English/Urdu and RTL

- English `lang="en" dir="ltr"`; Urdu `lang="ur" dir="rtl"`. Set both on `<html>`.
- Translate navigation, buttons, form labels and states, error and success messages,
  and SEO metadata. Numerals and Latin names stay LTR inside RTL runs.
- Mirror layout wholesale: grid order, rail side, borders (`border-left` accents
  become `border-right`), arrow glyphs (`→` becomes `←`), breadcrumb separators,
  padding asymmetry. Use logical CSS properties (`padding-inline-start`, `border-inline-start`).
- Urdu type: Noto Nastaliq Urdu, line-height 2.0–2.2 minimum, +2px against Latin, no
  uppercase, no letter-spacing. Urdu never sits in an uppercase eyebrow — use
  sentence case at the same position.
- The Urdu wordmark نور کی صبح appears in oxblood on light, clay `#C9847C` on dark.
- Test every page in both directions at every breakpoint.
- **Do not machine-translate theological content.** All Urdu must be reviewed by a
  fluent human before production. Until reviewed, the Urdu route may exist but must
  not publish unreviewed theological text.

---

## 22. Implementation constraints

From `CLAUDE.md`, restated because they bind every task:

- Never invent organization facts: no statistics, impact numbers, children helped,
  churches planted, people reached, staff, leaders, addresses, service times, dates,
  partners, testimonials, donations, financial figures or outcomes. Write
  `[CONTENT REQUIRED FROM ORGANIZATION]`.
- Placeholders stay visible. Never silently promote a placeholder to a fact.
- No scope expansion: no auth, database, CMS, CRM, payments, AI, admin dashboard,
  member portal or subscriptions unless the PRD and the current task require them.
- No pages outside the approved sitemap without justification.
- Read the relevant PRD section, inspect the repo, state a short plan, implement only
  the requested scope, run the project's real scripts, review the diff, then commit.
- Commits are meaningful (`feat: add responsive header`). Never commit secrets.
  `.env` and `.env.local` ignored; maintain `.env.example`.
- Do not deploy to production without testing the Vercel preview. Do not touch DNS
  unprompted, and never delete MX records.
- The organization — not a developer — owns domain, GitHub, Vercel, email, analytics
  and any payment provider.
- Never log or store prayer-request contents.

---

## 23. Recommended implementation order

1. **Foundation only.** Next.js + TypeScript + Tailwind theme from §4, fonts, Git,
   README, `.env.example`, `.gitignore`, verify dev server and checks, first
   meaningful commit. **Stop and report.**
2. Chrome and primitives: `UtilityBar`, `SiteHeader`, `MobileDrawer`, `SiteFooter`,
   `Button`, `RuledRow`, `FactTable`, `Card`, `ImagePlaceholder`, `PlaceholderTag`,
   `Container`, theme toggle.
3. Home.
4. About (article pattern + anchor rail).
5. Ministries index, then the five children from the shared template.
6. Sermons, Resources and Events indexes.
7. The three detail templates.
8. Prayer, then Contact — all six form states each.
9. Support State A, Privacy, Website Notice, 404, 500.
10. Urdu locale and RTL pass.
11. SEO, accessibility audit, performance, responsive QA at all eight widths.
12. Deployment: GitHub → Vercel preview → QA → production → domain → DNS/HTTPS
    verification.

Do step 1 and stop. Do not combine unrelated steps, and do not build UI before the
foundation is verified.

---

## 24. Must not change during implementation

1. The palette in §4.1–4.2. No new colours, no gradients, no tints.
2. **Two background colours per page maximum**; one navy band per page; never two
   navy bands in sequence.
3. Type pairing: Source Serif 4 + IBM Plex Sans + IBM Plex Mono + Noto Nastaliq Urdu.
   No substitutions, no Inter, no Roboto.
4. **Radius 0** (language pills and 2px inputs excepted, unchanged). Elevation is a
   1px rule or a 3px coloured top border by default; §11 "Amendment (2026-08-18)"
   adds a soft hover shadow, but only on things that are actually clickable
   (buttons, clickable cards) — static content stays flat and shadow-free.
5. Brass is never a large fill; oxblood is never a body-text colour; navy carries all
   headings.
6. One oxblood primary per section. Prayer and Support are the only twice-per-page
   CTAs.
7. Motion budget: 8px / 400ms entry once, 100ms stagger (max 3 items); hover is
   colour at 300ms (links/buttons/toggles) or, per §11 "Amendment", colour +
   a 2px lift and soft shadow at 350ms (clickable cards only). No
   parallax, carousels, counters or hero animation. Header is the only sticky element
   besides the article rail.
8. The logo lockup geometry, colours and descriptor line in §12.
9. Ruled rows over card grids on index pages.
10. Detail rail order: action card → facts → context; unstacks above the body <1024.
11. Real photography only, always captioned; marked placeholders where missing; no
    identifiable child without written permission.
12. Header nav order and the Support CTA position.
13. Prayer privacy rules and the "no payment until approved" rule.
14. Scripture is cited by reference, never reproduced at length.
15. Home and About are approved and frozen — do not redesign them.

If a constraint blocks an implementation, stop and ask. Do not resolve it by changing
the design.

---

## 25. Content required from the organization

Nothing here may be invented. Until each item arrives, the page shows a visible
placeholder.

**Blocking launch**
1. Service days and times, Karachi and Faisalabad
2. Street addresses for both cities, plus nearest landmark, transport note, parking,
   seminary entrance, and step-free access details
3. Sunday School and Holy Communion timing
4. Photographs with permissions (§17) — **written parental permission for any
   identifiable child**
5. Approved wording of the ministry's history (the supplied account is personal and
   partly ambiguous in chronology)
6. Pastor Nayyer Gull's role, and biographies for him and Pastor Rahmat
7. Final theological wording for the statement of faith and doctrinal statement
8. Registered organization name, legal status, registered address
9. Privacy decisions: retention periods for contact messages and prayer requests,
   deletion process, response window, consent wording, hosting and email providers,
   whether data leaves Pakistan
10. Qualified review of Privacy and Website Notice, including the jurisdiction clause
11. Urdu review by a fluent speaker, every page
12. Final hero copy approval

**Needed before the relevant page is complete**
13. Seminary course names, length, level, daily class time, intake process, fees
14. Publication titles, distribution detail, titles in print
15. Named education programmes and locations
16. Fee-assistance process: how families apply, what is covered, how decisions are made
17. Per-item support costs (school fees per term, books, teaching material)
18. Sermon metadata and YouTube URLs; whether audio-only and text sermons exist;
    whether sermon notes exist
19. PDFs for Bible studies and books
20. Event details: venue, contact, registration destination (form or WhatsApp)
21. Facebook and YouTube URLs
22. Domain decision, then DNS
23. Payment provider decision and the approvals in §18

**Never publish without confirmation:** statistics, children helped, churches
planted, people reached, testimonials, partner organizations, financial figures,
ministry outcomes, service times, addresses, payment credentials, legal status,
Bible quotations, quotes attributed to people.
