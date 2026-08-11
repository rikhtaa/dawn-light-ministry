# Dawn of Light Ministry --- Product Requirements Document

**Project:** Dawn of Light Ministry (DLM) --- نور کی صبح\
**Associated identity:** Bethlehem Church, Seminary & Educational
Mission\
**Primary locations:** Karachi, Sindh and Faisalabad, Punjab, Pakistan\
**Founded:** 1982\
**Tradition:** Baptist Christian tradition\
**Document status:** V1 working PRD\
**Implementation target:** Production-quality, mobile-first website
built with Claude Code\
**Content policy:** Real facts supplied by the organization are
authoritative. Missing facts are explicitly marked as
`[PSEUDO/PLACEHOLDER — REPLACE BEFORE LAUNCH]`.

------------------------------------------------------------------------

## 1. Product Overview

Dawn of Light Ministry is a Christian church, seminary, educational,
publishing/teaching and children-focused ministry serving communities in
Pakistan.

The website must communicate the ministry's Christian identity, mission,
educational emphasis and practical service work while providing clear
ways for visitors to learn, attend, request prayer, contact the
ministry, explore resources and, once legally and operationally
approved, support the work financially.

The website must feel:

-   Christian
-   trustworthy
-   warm
-   human
-   educational
-   locally grounded
-   dignified
-   modern but not corporate
-   culturally appropriate for Pakistan
-   accessible to Urdu-speaking and English-speaking visitors

### Core message

The organization's stated mission centers on helping people become
familiar with God's Word, encouraging people to read the Bible
themselves, improving children's education, and addressing spiritual and
educational needs.

The stated vision emphasizes taking the light of knowledge to
communities facing poverty and teaching sustainable ways to improve
livelihoods rather than relying only on short-term assistance.

### What the website is not

The website is not:

-   a generic SaaS landing page
-   an e-commerce store
-   a social network
-   a church-management ERP
-   a custom payment processor
-   a member-management platform
-   a custom video streaming service
-   an AI chatbot product
-   a replacement for professional pastoral or emergency services

------------------------------------------------------------------------

# 2. Product Goals

## 2.1 Primary goals

1.  Explain who Dawn of Light Ministry is within seconds.
2.  Clearly communicate its mission and vision.
3.  Present the church, seminary and educational mission.
4.  Present ministries and activities accurately.
5.  Help visitors find worship/service information.
6.  Provide a prayer-request pathway.
7.  Provide a contact pathway.
8.  Provide Christian educational resources.
9.  Present sermons/media when supplied.
10. Present events when supplied.
11. Provide a support/giving pathway after payment and legal approval.
12. Support English and Urdu.
13. Establish a credible online presence for Pakistan and international
    visitors.
14. Make the site fast and usable on low-to-moderate mobile connections.
15. Make future content updates straightforward.

## 2.2 UX goals

A first-time visitor should be able to:

-   understand what DLM is within approximately 5 seconds
-   identify its Christian identity
-   find the main ministry areas
-   find contact information
-   find worship/service information
-   request prayer
-   find resources
-   understand how to support the mission

## 2.3 Non-goals for V1

Do not build unless explicitly approved:

-   member accounts
-   member directory
-   church attendance tracking
-   accounting
-   donor CRM
-   custom payroll
-   custom LMS
-   complex CMS
-   custom payment processing
-   custom video hosting
-   live streaming infrastructure
-   advanced AI functionality
-   complex volunteer management
-   complex notification infrastructure

------------------------------------------------------------------------

# 3. Source-of-Truth Policy

## 3.1 Verified organization facts

The following came directly from the project owner:

-   Name: Dawn of Light Ministry
-   Urdu name: نور کی صبح
-   Short name: DLM
-   Associated identity: Bethlehem Church, Seminary & Educational
    Mission
-   Locations: Karachi and Faisalabad
-   Founded: 1982
-   Contact phone/WhatsApp: 03442316634
-   Contact email: pastornayyer@gmail.com
-   Social presence: Facebook and YouTube
-   Christian tradition: Baptist
-   Church services: twice weekly
-   Sunday School: weekly
-   Seminary classes: daily
-   Holy Communion: monthly
-   Christian article writing
-   Lectures
-   Free books
-   Educational-fee assistance for children
-   Leadership information supplied: Pastor Nayyer Gull; Founder Pastor
    Rahmat; leadership Nayyer Gull
-   Statement of faith: Christian Trinity
-   Doctrinal statement: baptism in the name of the Father, Son and Holy
    Spirit
-   Mission: preaching God's Word among Christians and non-Christians
    and helping Christian children receive education and build a
    brighter future
-   Vision: educated children contributing to the advancement of the
    nation
-   Core values supplied: faith in Christ, biblical truth, prayer, love,
    service, integrity, spiritual training, Christian education,
    children's education/training, helping those in need, and sharing
    God's Word
-   Bible usage: commonly used Urdu Bible translation

## 3.2 Pseudo/placeholder policy

Anything not supplied must be represented as:

`[PSEUDO/PLACEHOLDER — REPLACE BEFORE LAUNCH]`

Never silently turn placeholder information into a claimed fact.

Do not invent:

-   statistics
-   ministry impact numbers
-   testimonials
-   names
-   addresses
-   service times
-   legal registrations
-   donation credentials
-   bank accounts
-   payment numbers
-   partner organizations
-   photographs
-   quotes attributed to people
-   Bible quotations
-   financial claims

------------------------------------------------------------------------

# 4. Target Users

## Persona A --- Pakistani local visitor

Needs:

-   church information
-   service times
-   location
-   beliefs
-   ministries
-   prayer/contact
-   Urdu access

## Persona B --- Christian parent

Needs:

-   children's education information
-   Sunday School
-   Christian educational resources
-   ministry activities
-   contact information

## Persona C --- Student / seminary visitor

Needs:

-   seminary information
-   courses
-   schedule
-   educational resources
-   contact/application information if introduced later

## Persona D --- International supporter

Needs:

-   clear mission story
-   ministry areas
-   credible organizational information
-   photographs
-   stories
-   support/giving information
-   contact information

## Persona E --- Prayer requester

Needs:

-   simple prayer form
-   privacy explanation
-   confirmation
-   optional follow-up

------------------------------------------------------------------------

# 5. User Journeys

## Journey 1 --- First-time visitor

Home → Mission → Ministries → Service information → Contact / Visit

Success: Visitor understands the ministry and can take a next action.

## Journey 2 --- Prayer request

Home → Request Prayer → Form → Validation → Submission → Confirmation

Privacy: Prayer requests are private by default and are never publicly
displayed.

## Journey 3 --- Support

Home → Support the Mission → Why Support → Giving options → Secure
provider or approved payment instructions → Confirmation

Payment integration remains disabled until organizational eligibility,
banking and payment-provider approval are confirmed.

## Journey 4 --- Seminary

Home → Seminary → Program information → Schedule → Contact/application

## Journey 5 --- Resource discovery

Home → Resources/Sermons → Filter/search → Resource detail →
Watch/read/download

## Journey 6 --- Event

Home → Events → Event detail → Register/contact → Confirmation

------------------------------------------------------------------------

# 6. Sitemap

``` text
/
├── About
│   ├── Our Story
│   ├── Mission & Vision
│   ├── Statement of Faith
│   └── Leadership
│
├── Ministries
│   ├── Church
│   ├── Seminary
│   ├── Publishing & Christian Articles
│   ├── Education
│   └── Children's Education
│
├── Events
│   └── Event Detail
│
├── Sermons
│   └── Sermon Detail
│
├── Resources
│   └── Resource Detail
│
├── Prayer
│
├── Support
│
├── Contact
│
├── Privacy
├── Website Notice / Terms
└── 404
```

The route structure must remain extensible.

------------------------------------------------------------------------

# 7. Homepage Specification

## 7.1 Header

Desktop:

-   DLM logo
-   Home
-   About
-   Ministries
-   Seminary
-   Resources
-   Events
-   Prayer
-   Support
-   Contact
-   Language switcher
-   primary CTA

Mobile:

-   logo
-   menu button
-   accessible mobile drawer
-   primary CTA
-   language switcher

Behavior:

-   sticky header after scroll
-   visible focus states
-   active navigation state
-   no horizontal overflow
-   mobile menu closes on route change
-   Escape closes mobile menu
-   focus is managed correctly

## 7.2 Hero

Purpose: Immediately communicate the identity and mission.

Content:

`Dawn of Light Ministry`

`نور کی صبح`

Headline: `[PSEUDO/PLACEHOLDER — FINAL HERO COPY TO BE APPROVED]`

Supporting message should communicate:

-   God's Word
-   Christian education
-   children
-   service
-   hope
-   Pakistan

Primary CTA: `Learn About Our Mission`

Secondary CTA: `Request Prayer`

Visual: Use approved church/ministry photography supplied by the
organization.

Do not use generic AI-generated people.

## 7.3 Mission section

Present the organization's mission in concise language.

Include a link to the complete Mission & Vision page.

## 7.4 Ministry overview

Cards for:

-   Church
-   Seminary
-   Christian education
-   Children's education
-   Publishing/articles
-   Teaching/lectures

Only publish categories that are confirmed by the organization.

## 7.5 Education section

Emphasize the organization's educational mission, especially children's
education.

Do not publish unsupported numerical impact claims.

## 7.6 Prayer CTA

Headline: `Need Prayer?`

Provide direct access to the prayer form.

## 7.7 Events

Display upcoming events if event data exists.

If no events are available: show a graceful empty state rather than fake
events.

## 7.8 Resources

Show recent:

-   sermons
-   articles
-   Bible studies
-   educational resources

Only show content actually supplied.

## 7.9 Support

Explain how visitors can support the mission.

The giving mechanism must use an approved provider or approved
organizational payment instructions.

## 7.10 Location/contact

Display:

-   Karachi
-   Faisalabad
-   phone/WhatsApp
-   email

Exact addresses are placeholders until confirmed.

## 7.11 Footer

Include:

-   logo
-   short mission statement
-   navigation
-   ministries
-   contact
-   social links
-   prayer
-   support
-   privacy
-   website notice
-   copyright

------------------------------------------------------------------------

# 8. About

## Our Story

Use the supplied history:

-   education completed in 1997
-   difficult circumstances in Pakistan during that period
-   seminary education
-   extensive work with Scripture
-   ministry among non-Christian communities
-   continuing ministry activity

Because the supplied history is personal and partially ambiguous in
chronology, the final public wording must be reviewed by the
organization.

## Mission

Use the organization's supplied mission, edited only for clarity after
approval.

## Vision

Use the supplied vision.

## Statement of Faith

Current supplied belief:

-   Christian Trinity

## Doctrinal statement

Current supplied doctrine:

-   baptism in the name of the Father, Son and Holy Spirit

Before publication, the organization should approve the final
theological wording.

## Leadership

### Pastor Nayyer Gull

Role: `[PSEUDO/PLACEHOLDER — FINAL ROLE TO BE CONFIRMED]`

Biography: `[PSEUDO/PLACEHOLDER — FINAL BIO TO BE SUPPLIED]`

### Pastor Rahmat

Role: Founder

Biography: `[PSEUDO/PLACEHOLDER — FINAL BIO TO BE SUPPLIED]`

Do not invent biographies.

------------------------------------------------------------------------

# 9. Ministries

## 9.1 Church Ministry

Activities:

-   church services twice weekly
-   Holy Communion monthly
-   worship
-   preaching/teaching

Service time: `[PSEUDO/PLACEHOLDER — CONFIRM]`

## 9.2 Seminary

Activities:

-   daily seminary classes
-   biblical education
-   lectures

Course list: `[PSEUDO/PLACEHOLDER — CONFIRM]`

## 9.3 Christian Articles / Publishing

Activities:

-   Christian article writing
-   publication/distribution of Christian educational material

## 9.4 Children's Education

Activities:

-   Sunday School
-   educational support
-   free books
-   educational-fee assistance

Do not publish child-identifying information without appropriate
permission.

## 9.5 Community / Educational Outreach

Describe the mission's goal of taking knowledge and educational
opportunity to communities facing hardship.

Avoid unsupported claims about outcomes.

------------------------------------------------------------------------

# 10. Prayer Feature

Fields:

-   Name (optional)
-   Email (optional)
-   Prayer request
-   Permission to follow up
-   Privacy acknowledgement

Rules:

-   no public display
-   no public API exposure
-   no sensitive data in logs
-   server-side validation if backend exists
-   anti-spam protection
-   rate limiting where appropriate
-   success confirmation
-   error state

Recipient: `pastornayyer@gmail.com` unless changed by the organization.

Do not expose the email address in technical logs or client-side
configuration unnecessarily.

------------------------------------------------------------------------

# 11. Contact Feature

Fields:

-   Name
-   Email
-   Phone/WhatsApp (optional)
-   Subject
-   Message
-   Consent

Contact:

Phone/WhatsApp: 03442316634

Email: pastornayyer@gmail.com

Behavior:

-   validate
-   loading
-   success
-   error
-   anti-spam
-   prevent duplicate submission

------------------------------------------------------------------------

# 12. Events

Event schema:

``` text
id
title
slug
description
date
startTime
endTime
location
city
image
registrationUrl
contact
status
```

Supported states:

-   upcoming
-   registration open
-   registration closed
-   cancelled
-   completed

No fake events.

------------------------------------------------------------------------

# 13. Sermons / Resources

Content types:

-   sermons
-   Christian articles
-   Bible studies
-   educational material
-   PDFs
-   videos
-   audio

Schema:

``` text
title
slug
type
author/speaker
date
description
thumbnail
externalUrl
downloadUrl
scriptureReference
language
```

Use external video hosting where appropriate instead of storing large
video files on the web server.

------------------------------------------------------------------------

# 14. English + Urdu

The website must be architected for bilingual content.

English: `LTR`

Urdu: `RTL`

Requirements:

-   language switcher
-   `lang` metadata
-   correct `dir`
-   RTL layout support
-   Urdu-capable font
-   translated navigation
-   translated buttons
-   translated forms
-   translated SEO metadata
-   translated error/success messages

Do not rely on machine translation for final theological content.

All Urdu content must be reviewed by a fluent human before production.

------------------------------------------------------------------------

# 15. Donation / Payment Architecture

## Recommended approach

For a Pakistani organization, V1 should support a **local-first payment
strategy**.

### Primary candidate: PayFast

PayFast is currently attractive for this use case because its official
product information explicitly mentions NGO donation collection and
supports payments through mobile banking apps, internet banking, ATMs,
branch banking and over-the-counter locations. It also states that it is
a State Bank-licensed and regulated fintech.
citeturn0search6turn0search8

Official: https://gopayfast.com/

### Secondary/local option: Easypaisa

Easypaisa currently offers business payment collection, an online
payment gateway, payment links, QR functionality and donation collection
capabilities. Its official materials specifically describe donation
collection and online payment solutions.
citeturn1search0turn1search1turn1search2turn1search9

Official: https://easypaisa.com.pk/

### Additional local option: JazzCash

JazzCash currently provides corporate donation functionality and a
payment gateway, and its Raast QR offering allows customers using
participating bank apps/wallets to pay via QR.
citeturn0search0turn0search2

Official: https://www.jazzcash.com.pk/

## Recommended V1 architecture

``` text
Support the Mission
        |
        +-- Online payment gateway
        |       |
        |       └── PayFast
        |
        +-- Local wallet / payment option
        |       |
        |       ├── Easypaisa
        |       └── JazzCash / Raast where approved
        |
        +-- Bank transfer
        |
        └-- International support
                |
                └── Approved method after legal/banking review
```

### Important

Do not activate payments merely because a provider technically supports
them.

Before integration, the organization must confirm:

-   legal/organizational status
-   bank account ownership
-   KYC requirements
-   whether the entity is eligible for donation collection
-   donation receipt requirements
-   accounting process
-   refund process
-   supported countries
-   settlement currency
-   payment-provider contract
-   fees
-   tax/compliance requirements

### What not to do

Do not store card numbers.

Do not build a custom card-payment system.

Do not put payment credentials in frontend code.

Do not publish personal wallet numbers as official donation destinations
until the organization confirms ownership and accounting controls.

------------------------------------------------------------------------

# 16. Technical Architecture

Preferred:

-   Next.js
-   TypeScript
-   Tailwind CSS
-   shadcn/ui where useful
-   Lucide
-   Framer Motion only when justified
-   Git
-   GitHub
-   Vercel

Architecture principles:

-   reusable components
-   typed data
-   content separated from UI
-   server components by default where appropriate
-   client components only when interaction requires them
-   minimal dependencies
-   semantic HTML
-   accessible UI
-   optimized images
-   no unnecessary backend

------------------------------------------------------------------------

# 17. Suggested Repository

``` text
dawn-of-light-ministry/
├── app/
├── components/
├── content/
├── lib/
├── public/
│   ├── images/
│   ├── logo/
│   ├── videos/
│   └── documents/
├── styles/
├── types/
├── docs/
├── CLAUDE.md
├── PRD.md
├── README.md
├── .env.example
├── .gitignore
└── package.json
```

------------------------------------------------------------------------

# 18. Design System

## Visual direction

Warm Christian editorial aesthetic.

Use:

-   authentic photography
-   generous whitespace
-   strong readable typography
-   restrained color palette
-   subtle transitions
-   clear hierarchy

Avoid:

-   generic SaaS appearance
-   excessive gradients
-   excessive glassmorphism
-   excessive cards
-   fake 3D
-   over-animation
-   stock AI people
-   visual clutter

## Proposed placeholder palette

These are provisional until branding is supplied:

``` text
Background: #FAF9F6
Foreground: #1B1B1B
Muted: #6B6B6B
Primary: #7A2E2E
Secondary: #D7B56D
Surface: #FFFFFF
Border: #E7E2D9
Success: #2F6B4F
Warning: #9A6B16
Error: #A33A3A
```

The exact palette must be reviewed against the supplied logo.

------------------------------------------------------------------------

# 19. Responsive Design

Required test widths:

-   320px
-   375px
-   390px
-   768px
-   1024px
-   1280px
-   1440px
-   1920px

Requirements:

-   no horizontal overflow
-   readable text
-   touch-friendly controls
-   mobile navigation
-   responsive images
-   responsive forms
-   accessible spacing
-   RTL support on Urdu

------------------------------------------------------------------------

# 20. Accessibility

Target WCAG 2.2 AA where practical.

Requirements:

-   semantic HTML
-   correct heading hierarchy
-   keyboard navigation
-   visible focus
-   labels
-   accessible form errors
-   color contrast
-   alt text
-   reduced motion
-   accessible navigation
-   accessible dialogs
-   no hover-only functionality

------------------------------------------------------------------------

# 21. SEO

Every public page:

-   unique title
-   meta description
-   canonical URL
-   Open Graph metadata
-   semantic HTML
-   correct headings
-   internal linking
-   sitemap
-   robots configuration

Potential structured data:

-   Organization
-   Church
-   Event
-   Article

Only use facts actually verified.

------------------------------------------------------------------------

# 22. Local SEO

Target relevant searches around:

-   Dawn of Light Ministry
-   Dawn of Light Ministry Pakistan
-   Christian church Karachi
-   Baptist church Karachi
-   Christian ministry Karachi
-   Christian education Pakistan
-   Christian seminary Pakistan
-   Christian ministry Faisalabad

Do not keyword-stuff pages.

Add verified addresses and service times when supplied.

------------------------------------------------------------------------

# 23. Analytics

Use privacy-conscious analytics only after organizational approval.

Potential events:

``` text
page_view
hero_cta_clicked
prayer_started
prayer_submitted
contact_submitted
support_clicked
donation_started
donation_completed
event_viewed
resource_viewed
resource_downloaded
language_changed
whatsapp_clicked
```

Do not collect unnecessary personal data.

------------------------------------------------------------------------

# 24. Security

-   never commit secrets
-   `.env` and `.env.local` ignored
-   validate inputs
-   sanitize user content
-   rate-limit sensitive forms
-   secure server endpoints
-   no sensitive data in logs
-   no prayer requests in public APIs
-   no card data storage
-   HTTPS
-   dependency security checks
-   secure headers where appropriate

------------------------------------------------------------------------

# 25. Privacy

The website may process:

-   contact details
-   prayer requests
-   event registration data
-   donation information
-   analytics

Create a privacy page.

Before production, the organization must approve:

-   data collection
-   retention
-   recipients
-   deletion process
-   consent wording

Do not present placeholder legal text as legal advice.

------------------------------------------------------------------------

# 26. Image / Asset Strategy

Available asset categories:

1.  Logo
2.  Pastor photo
3.  Church photos
4.  Seminary photos
5.  Children/ministry photos
6.  Event photos
7.  Existing banners

Asset metadata should track:

``` text
filename
purpose
source
permission/license
alt text
approval status
language/context
```

Do not publish identifiable children's photographs without appropriate
permission.

------------------------------------------------------------------------

# 27. Domain Strategy

Preferred TLD: `.org`

Desired domain: `DawnOfLightMinistry.org` or an available shorter
approved `.org` variant.

Before purchase:

-   check availability
-   check spelling
-   check trademark/organizational conflicts
-   choose an organization-owned registrar account
-   enable 2FA
-   enable auto-renewal
-   document recovery access

The exact domain must be confirmed before production.

------------------------------------------------------------------------

# 28. Hosting Strategy

Preferred: Vercel for the Next.js site.

Development: localhost

Preview: Vercel preview deployment

Production: custom domain

Flow:

``` text
GitHub
  ↓
Vercel
  ↓
Preview
  ↓
QA
  ↓
Production
  ↓
Custom domain
```

Do not assume a free hosting plan is appropriate for an organizational
production website. Verify the current plan terms before launch.

------------------------------------------------------------------------

# 29. Domain / DNS

After Vercel project creation:

1.  connect GitHub
2.  deploy preview
3.  add custom domain
4.  use the DNS records provided by Vercel
5.  verify DNS
6.  verify HTTPS
7.  configure canonical hostname
8.  test www/non-www
9.  verify sitemap and robots
10. verify email DNS

IMPORTANT: If the domain has email, never delete MX records while
configuring website DNS.

------------------------------------------------------------------------

# 30. Email

Current official email:

`pastornayyer@gmail.com`

Potential future domain emails:

-   info@\[domain\]
-   prayer@\[domain\]
-   contact@\[domain\]
-   giving@\[domain\]

Do not create these until an email provider is selected.

------------------------------------------------------------------------

# 31. Git / GitHub

Use Git from the beginning.

Initial commits should be meaningful:

``` text
chore: initialize project
feat: add design system
feat: add responsive navigation
feat: build homepage
feat: add ministry pages
feat: add prayer request flow
feat: add resources
feat: add SEO
fix: correct mobile navigation
perf: optimize images
```

Avoid meaningless commit messages.

------------------------------------------------------------------------

# 32. Claude Code Development Workflow

``` text
PRD
 ↓
Repository inspection
 ↓
Architecture plan
 ↓
Small implementation task
 ↓
Run checks
 ↓
Review diff
 ↓
Git commit
 ↓
GitHub push
 ↓
Preview deployment
 ↓
QA
 ↓
Fix
 ↓
Next task
```

Claude must not attempt the entire website in one uncontrolled
operation.

------------------------------------------------------------------------

# 33. Claude Code Session Rules

At the start of every session:

1.  inspect repository
2.  read `CLAUDE.md`
3.  read relevant PRD sections
4.  inspect git status
5.  inspect recent commits
6.  understand current architecture
7.  state the plan
8.  implement only the requested scope

After changes:

1.  format
2.  lint
3.  type-check
4.  test
5.  build
6.  inspect diff
7.  check for secrets
8.  commit if requested

------------------------------------------------------------------------

# 34. Cost Planning

Use current pricing at purchase time.

Expected categories:

-   Claude subscription
-   domain registration/renewal
-   hosting
-   email
-   payment gateway fees
-   analytics if paid
-   CMS/database if later required
-   media hosting if later required

Initial architecture should minimize recurring costs.

Claude plan recommendation: Start with Claude Pro for a single developer
and upgrade only if usage limits repeatedly become a bottleneck. Claude
Pro, Max 5x and Max 20x are currently listed by Anthropic at
approximately \$20, \$100 and \$200 per month in the US respectively;
regional pricing/taxes and plan terms can differ. Verify current pricing
before purchase.

------------------------------------------------------------------------

# 35. Acceptance Criteria

AC-001 --- Required public pages exist.

AC-002 --- All navigation links work.

AC-003 --- No fictional organizational claims are published.

AC-004 --- All missing facts are clearly marked during development.

AC-005 --- No lorem ipsum remains in production.

AC-006 --- Site works at 320px.

AC-007 --- Site works at 375px.

AC-008 --- Site works at 768px.

AC-009 --- Site works at 1024px.

AC-010 --- Site works at 1440px.

AC-011 --- No horizontal overflow.

AC-012 --- Keyboard navigation works.

AC-013 --- Focus states are visible.

AC-014 --- Forms validate input.

AC-015 --- Forms show loading state.

AC-016 --- Forms show success state.

AC-017 --- Forms show error state.

AC-018 --- Prayer requests remain private.

AC-019 --- Sensitive information is not logged.

AC-020 --- Secrets are not committed.

AC-021 --- `.env` is ignored.

AC-022 --- Production build succeeds.

AC-023 --- Type checking succeeds.

AC-024 --- Lint succeeds.

AC-025 --- No critical console errors.

AC-026 --- Meaningful images have alt text.

AC-027 --- Public pages have SEO metadata.

AC-028 --- Sitemap works.

AC-029 --- robots.txt works.

AC-030 --- Open Graph metadata works.

AC-031 --- Canonical URLs work.

AC-032 --- HTTPS works.

AC-033 --- Custom domain works.

AC-034 --- GitHub contains source code.

AC-035 --- Git history is meaningful.

AC-036 --- Vercel preview deployment works.

AC-037 --- Production deployment works.

AC-038 --- README is complete.

AC-039 --- Organization owns critical accounts.

AC-040 --- Payment integration is not activated until approved.

AC-041 --- English and Urdu layouts are functional if bilingual V1 is
enabled.

AC-042 --- Urdu RTL layout has been tested.

------------------------------------------------------------------------

# 36. Definition of Done

``` text
[ ] Organization information verified
[ ] Logo integrated
[ ] Approved photographs integrated
[ ] Final content approved
[ ] Domain selected
[ ] Domain purchased
[ ] Domain account owned by organization
[ ] GitHub repository created
[ ] Vercel configured
[ ] Foundation built
[ ] Design system built
[ ] Homepage built
[ ] About built
[ ] Ministries built
[ ] Seminary built
[ ] Resources built
[ ] Events built if required
[ ] Prayer feature built
[ ] Contact feature built
[ ] Support page built
[ ] Payment provider approved
[ ] Payment integration tested if activated
[ ] English verified
[ ] Urdu verified
[ ] RTL verified
[ ] SEO complete
[ ] Accessibility reviewed
[ ] Performance reviewed
[ ] Security reviewed
[ ] Mobile QA complete
[ ] Desktop QA complete
[ ] Production build succeeds
[ ] GitHub clean
[ ] Vercel production deployment succeeds
[ ] DNS verified
[ ] HTTPS verified
[ ] Email DNS preserved
[ ] Analytics verified if approved
[ ] Privacy/legal content approved
[ ] Backup strategy documented
[ ] Ownership documented
[ ] Handover documentation complete
```

------------------------------------------------------------------------

# 37. Implementation Guardrails

1.  Do not invent organization facts.
2.  Do not invent people.
3.  Do not invent ministry statistics.
4.  Do not invent testimonials.
5.  Do not invent addresses.
6.  Do not invent service times.
7.  Do not invent payment credentials.
8.  Do not invent legal status.
9.  Do not invent theological claims beyond supplied/approved content.
10. Do not add pages outside the approved sitemap without justification.
11. Do not add dependencies unnecessarily.
12. Do not rewrite unrelated code.
13. Do not commit secrets.
14. Do not modify DNS blindly.
15. Do not delete MX records.
16. Do not expose prayer requests.
17. Do not expose sensitive contact data.
18. Do not use fake images.
19. Do not publish placeholder data as real data.
20. Do not use excessive animation.
21. Do not sacrifice accessibility for aesthetics.
22. Do not sacrifice performance for visual effects.
23. Test every interactive feature.
24. Prefer small reversible changes.
25. Keep commits meaningful.
26. Run project checks before completion.
27. Review every acceptance criterion before declaring the project done.

------------------------------------------------------------------------

# 38. Project Milestones

## M0 --- Discovery

-   verify organization content
-   inventory assets
-   verify leadership
-   verify addresses
-   verify service times
-   verify domain
-   verify payment eligibility
-   finalize architecture

## M1 --- Foundation

-   Next.js
-   TypeScript
-   Tailwind
-   Git
-   GitHub
-   README
-   CLAUDE.md
-   environment configuration

## M2 --- Design System

-   typography
-   colors
-   spacing
-   buttons
-   cards
-   forms
-   header
-   footer
-   bilingual foundations

## M3 --- Public Website

-   Home
-   About
-   Ministries
-   Seminary
-   Resources
-   Events
-   Contact

## M4 --- Mission Features

-   Prayer
-   Support
-   approved donation/payment pathway

## M5 --- Quality

-   SEO
-   accessibility
-   performance
-   security
-   responsive QA
-   Urdu RTL QA

## M6 --- Deployment

-   GitHub
-   Vercel
-   environment variables
-   domain
-   DNS
-   HTTPS

## M7 --- Launch

-   content approval
-   final QA
-   production deployment
-   monitoring
-   handover

------------------------------------------------------------------------

# 39. Handover Documentation

Required files:

``` text
README.md
CLAUDE.md
PRD.md

docs/
├── architecture.md
├── deployment.md
├── domain-dns.md
├── content-management.md
├── maintenance.md
├── payment-integration.md
└── project-ownership.md
```

No passwords or secrets may appear in documentation.

------------------------------------------------------------------------

# 40. Final Delivery Report

At completion, report:

-   completed work
-   incomplete work
-   known issues
-   technical debt
-   environment variables required
-   deployment status
-   domain status
-   DNS status
-   GitHub status
-   Vercel status
-   SEO status
-   accessibility status
-   performance status
-   form status
-   payment status
-   security status
-   remaining owner actions
-   remaining developer actions

------------------------------------------------------------------------

# 41. First Implementation Task

Do NOT start by building the homepage.

First:

1.  inspect repository
2.  inspect installed tools
3.  inspect Git
4.  inspect GitHub configuration
5.  determine whether a project exists
6.  determine Node/npm versions
7.  create a project plan
8.  create the project foundation
9.  create `PRD.md`
10. create `CLAUDE.md`
11. create `README.md`
12. establish Git
13. create the first commit

Only after the foundation is verified should UI implementation begin.
