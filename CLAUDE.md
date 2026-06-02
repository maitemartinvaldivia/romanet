# CLAUDE.md — RomaNET Project

## Project Overview

**Project name:** RomaNET  
**URL:** sinai.uajen.es/romanet  
**Type:** Landing page (EU Co-funded Project)  
**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, shadcn/ui  
**Purpose:** Fight hate speech and hate crimes against Roma communities, using AI to create positive counter-narratives.
NEVER modify deploy.sh 
---

## Core Rules — ALWAYS Follow

### 1. Multilingual (i18n)

The site **must always support exactly these 4 languages**, with no exceptions:

| Code | Language  |
|------|-----------|
| `en` | English   |
| `es` | Espanol   |
| `it` | Italiano  |
| `el` | Ellinika  |

- All user-facing text **must** be defined in translation objects — never hardcoded in a single language.
- The active language is toggled via the language selector (globe icon + language code, top-right corner of the navbar).
- Default language: `en` (English).
- When adding or editing any text content, **provide translations for all 4 languages**.
- Language switcher must always show all 4 options in a dropdown.

> **Current state:** The `Header` component has a `language` state and a working UI switcher, but **translations are not yet wired up**. All page content is currently hardcoded in English. New text must be extracted into a translation system (e.g., `lib/i18n.ts` or `translations/*.json`) and consumed by components.

**Expected translation pattern:**
```ts
const translations = {
  en: { hero_title: "We Stand United Against Discrimination", ... },
  es: { hero_title: "Unidos Contra la Discriminacion", ... },
  it: { hero_title: "Uniti Contro la Discriminazione", ... },
  el: { hero_title: "Enomenoi Kata ton Diakriseon", ... },
};
```

---

### 2. Responsive Design

The layout **must always be fully responsive** across all breakpoints:

| Breakpoint | Tailwind prefix | Width         | Notes                          |
|------------|-----------------|---------------|--------------------------------|
| Mobile     | (default)       | < 640px       | Single column, stacked nav     |
| Tablet     | `md:`           | 640px–1024px  | Adjusted grid, hamburger menu  |
| Desktop    | `lg:`           | > 1024px      | Full nav, multi-column layouts |

- Use Tailwind utility classes for all layouts (`flex`, `grid`, `container`, etc.).
- Navigation collapses to a Sheet (hamburger) on mobile via `lg:hidden` / `hidden lg:flex`.
- Buttons and CTAs are full-width on mobile (`flex-col sm:flex-row`) and horizontally aligned on desktop.
- Test every new component or section at all three breakpoints.

---

### 3. Preserve Code Format & Structure

**Always maintain the existing code format and conventions:**

- 2-space indentation, no semicolons, single quotes where possible.
- Preserve the existing component/file structure — do not reorganize without being asked.
- Keep CSS variable naming conventions consistent (`--color-primary`, `--color-secondary`, etc.).
- Use `className` with Tailwind utilities; avoid arbitrary values unless necessary.
- Preserve module patterns and import styles.
- Do not introduce new libraries or frameworks without explicit approval.
- Comment style: minimal; only explain non-obvious logic.

---

## Tech Stack

| Technology        | Version | Purpose                          |
|-------------------|---------|----------------------------------|
| Next.js           | 16.2.6  | Framework (App Router)           |
| React             | 19      | UI library                       |
| TypeScript        | 5.7.3   | Type safety                      |
| Tailwind CSS      | 4.2.0   | Styling                          |
| shadcn/ui         | latest  | Component primitives             |
| Radix UI          | various | Headless UI primitives           |
| Lucide React      | 0.564.0 | Icons                            |
| next-themes       | 0.4.6   | Light/dark theme support         |
| @vercel/analytics | 1.6.1   | Production analytics             |

---

## Design System

### Colors (OKLCH — Roma flag inspired palette)

All colors are defined as CSS custom properties in `app/globals.css` using OKLCH for perceptual uniformity.

| Token                 | Light mode value                | Dark mode value                 | Usage                              |
|-----------------------|----------------------------------|----------------------------------|------------------------------------|
| `--background`        | `oklch(0.98 0.005 90)`          | `oklch(0.18 0.02 250)`          | Page background                    |
| `--foreground`        | `oklch(0.25 0.02 250)`          | `oklch(0.95 0.005 90)`          | Primary text                       |
| `--primary`           | `oklch(0.55 0.12 250)`          | `oklch(0.7 0.12 250)`           | Main CTA buttons, accents          |
| `--primary-foreground`| `oklch(0.99 0 0)`               | `oklch(0.15 0.02 250)`          | Text on primary backgrounds        |
| `--secondary`         | `oklch(0.85 0.08 145)`          | `oklch(0.35 0.06 145)`          | Soft green accents                 |
| `--secondary-foreground`| `oklch(0.25 0.05 145)`        | `oklch(0.95 0.02 145)`          | Text on secondary backgrounds      |
| `--accent`            | `oklch(0.88 0.1 75)`            | `oklch(0.45 0.1 75)`            | Soft gold / wheel highlight        |
| `--accent-foreground` | `oklch(0.35 0.08 75)`           | `oklch(0.95 0.02 75)`           | Text on accent backgrounds         |
| `--destructive`       | `oklch(0.65 0.18 25)`           | `oklch(0.5 0.18 25)`            | Report / danger actions            |
| `--muted`             | `oklch(0.96 0.01 90)`           | `oklch(0.28 0.02 250)`          | Subtle backgrounds                 |
| `--muted-foreground`  | `oklch(0.45 0.02 250)`          | `oklch(0.7 0.02 90)`            | Secondary / placeholder text       |
| `--border`            | `oklch(0.92 0.01 250)`          | `oklch(0.32 0.02 250)`          | Borders, dividers                  |
| `--card`              | `oklch(1 0 0)`                  | `oklch(0.22 0.02 250)`          | Card backgrounds                   |
| `--ring`              | `oklch(0.55 0.12 250)`          | `oklch(0.7 0.12 250)`           | Focus rings                        |
| `--radius`            | `1.5rem`                        | —                               | Global border-radius (very rounded)|

**Tailwind mapping:** These variables are mapped inside `@theme inline` in `globals.css` so they can be used as utilities: `bg-primary`, `text-muted-foreground`, `border-border`, etc.

### Typography

- **Font:** Quicksand (Google Fonts), loaded via `next/font/google` in `app/layout.tsx`.
- **Headings:** Bold, large (`text-3xl` to `text-6xl`), dark (`text-foreground`).
- **Accent word:** Colored with `text-primary` (e.g., "Discrimination" in hero).
- **Body text:** Regular weight, centered in hero, `max-w-2xl` / `max-w-3xl`.
- **Badge/pill text:** `text-sm font-medium`, rounded-full, colored backgrounds (`bg-primary/10 text-primary`).

### Component Patterns

- **Cards:** `rounded-3xl`, `border-0`, `shadow-lg`, `bg-card`. Often with hover `shadow-xl` transitions.
- **Buttons:** `rounded-full` everywhere. Sizes: `size="lg"` for CTAs with `px-8 py-6`.
- **Icon containers:** `w-14 h-14 rounded-2xl` with colored backgrounds (`bg-primary/10`, `bg-secondary`, etc.).
- **Sections:** `py-20 lg:py-28`, `container mx-auto px-4 lg:px-8`.
- **Decorative blurs:** Absolute positioned `rounded-full bg-primary/5 blur-3xl` for background ambiance.

---

## File Structure

```
romanet/
├── app/
│   ├── layout.tsx              # Root layout (Quicksand font, metadata, Analytics)
│   ├── page.tsx                # Homepage (Hero, Mission, WhatWeDo, GetInvolved)
│   ├── globals.css             # Tailwind v4 entry + OKLCH theme variables
│   ├── about/
│   │   └── page.tsx            # About RomaNET (objectives, timeline, work packages, ethics)
│   ├── ai-against-hate/
│   │   └── page.tsx            # AI methodology, counter-narratives, privacy
│   ├── hate-speech-crimes/
│   │   └── page.tsx            # Educational resource (definitions, rights, reporting)
│   ├── news/
│   │   └── page.tsx            # News page
│   ├── partners/
│   │   └── page.tsx            # Partners page
│   └── results/
│       └── page.tsx            # Results & documentation page
├── components/
│   ├── header.tsx              # Sticky navbar + language switcher + mobile Sheet menu
│   ├── footer.tsx              # EU banner, links, partners grid, social links
│   ├── hero-section.tsx        # Homepage hero with CTAs
│   ├── mission-section.tsx     # 3-card mission grid
│   ├── what-we-do-section.tsx  # Bento grid of activities
│   ├── get-involved-section.tsx# 3 CTA cards
│   ├── theme-provider.tsx      # next-themes wrapper
│   └── ui/                     # shadcn/ui components (Button, Card, Sheet, DropdownMenu, Accordion, etc.)
├── lib/
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
├── public/
│   ├── icon-light-32x32.png
│   ├── icon-dark-32x32.png
│   ├── icon.svg
│   ├── apple-icon.png
│   ├── placeholder*.png|svg|jpg
│   └── logos/                # Partner logos + project branding
│       ├── RomaNet Logo (1).png              # Main project logo / favicon source
│       ├── EN_FundedbytheEU_RGB_POS (1).png  # EU "Funded by" badge
│       ├── Kamira Logo S (1).JPG             # Kamira partner logo
│       ├── MEDROMA LOGO wo background (1).png# MedRoma partner logo
│       ├── romni logo (1).JPG                # Romni APS partner logo
│       └── UJA_Logo (1).jpg                  # University of Jaen partner logo
├── next.config.mjs             # unoptimized images, ignoreBuildErrors
├── tsconfig.json               # Strict TS, path alias `@/*`
├── package.json
└── CLAUDE.md                   # this file
```

---

## Component Inventory

### Navbar (`components/header.tsx`)
- **Logo:** Circle avatar `R` + "RomaNET" text (top-left).
- **Nav links:** `Home`, `Project` (DropdownMenu with 5 items), `Report & Support`, `News`.
- **Language selector:** Globe icon + language code + chevron (top-right). Dropdown shows all 4 languages; active one highlighted with `bg-secondary`.
- **Mobile:** Hamburger opens a Sheet (`side="right"`, `w-80`, `rounded-l-3xl`) with vertical nav links.

### Hero Section (`components/hero-section.tsx`)
- EU badge: Pill-style `bg-primary/10`, dot with `animate-pulse`.
- H1: Two-line headline, accent word in `text-primary`.
- Subtitle: Centered, `max-w-2xl`, `text-muted-foreground`.
- CTA buttons (3, horizontal on desktop `sm:flex-row`, stacked on mobile):
  1. `Know Your Rights` — filled primary (`bg-primary`)
  2. `Report Hate Speech` — outline destructive (`border-destructive/50 text-destructive`)
  3. `Explore Counter-Narratives` — outline secondary (`border-secondary`)

### Mission Section (`components/mission-section.tsx`)
- Section header with uppercase `text-primary` overline.
- 3-column grid (`md:grid-cols-3`) of cards with large icons.

### What We Do Section (`components/what-we-do-section.tsx`)
- Bento grid: `lg:col-span-2` for the first (Monitor and Report) card, rest are standard.
- Cards have `group-hover:scale-110` on icons.

### Get Involved Section (`components/get-involved-section.tsx`)
- 3 cards with `ArrowRight` animated on hover (`group-hover/btn:translate-x-1`).
- Bottom CTA buttons inside a gradient card.

### Footer (`components/footer.tsx`)
- **EU Funding Banner:** Must display the real EU badge image (`logos/EN_FundedbytheEU_RGB_POS (1).png`) alongside the programme identifier.
- **Programme Identifier (all 4 languages):**
  - EN: `Programme: CERV-2024-CHAR-LITI-SPEECH`
  - ES: `Programa: CERV-2024-CHAR-LITI-SPEECH`
  - IT: `Programma: CERV-2024-CHAR-LITI-SPEECH`
  - EL: `Πρόγραμμα: CERV-2024-CHAR-LITI-SPEECH`
- **EU Disclaimer (all 4 languages):**
  - **EN:** *Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.*
  - **ES:** *Financiado por la Unión Europea. Sin embargo, los puntos de vista y las opiniones expresadas son únicamente los del autor o autores y no reflejan necesariamente los de la Unión Europea o de la Agencia Ejecutiva Europea de Educación y Cultura (EACEA). Ni la Unión Europea ni la EACEA pueden ser consideradas responsables de ellas.*
  - **IT:** *Finanziato dall'Unione europea. Tuttavia, i punti di vista e le opinioni espresse sono esclusivamente quelli dell'autore o degli autori e non riflettono necessariamente quelli dell'Unione europea o dell'Agenzia esecutiva europea per l'istruzione e la cultura (EACEA). Né l'Unione europea né l'EACEA possono essere ritenute responsabili.*
  - **EL:** *Χρηματοδοτείται από την Ευρωπαϊκή Ένωση. Οι απόψεις και οι γνώμες που εκφράζονται αντιπροσωπεύουν όμως μόνο τους συντάκτες και δεν αντανακλούν απαραίτητα εκείνες της Ευρωπαϊκής Ένωσης ή του Ευρωπαϊκού Εκτελεστικού Οργανισμού Εκπαίδευσης και Πολιτισμού (EACEA). Ούτε η Ευρωπαϊκή Ένωση ούτε ο EACEA μπορούν να θεωρηθούν υπεύθυνοι.*
- **Partner Logos:** Must be rendered as actual images from `public/logos/` (not text placeholders). Files to use:
  - `RomaNet Logo (1).png` — project branding
  - `Kamira Logo S (1).JPG`
  - `MEDROMA LOGO wo background (1).png`
  - `romni logo (1).JPG`
  - `UJA_Logo (1).jpg`
- **Quick Links:** Home, About, Hate Speech, Report & Support, News.
- **Social:** Instagram, TikTok (custom SVG), Facebook.
- **Bottom bar:** Copyright with `new Date().getFullYear()`.
- **Favicon source:** `logos/RomaNet Logo (1).png` should be used as the basis for site favicon / app icons.

---

## Routing

| Path                  | Page file                        | Description                          |
|-----------------------|-----------------------------------|--------------------------------------|
| `/`                   | `app/page.tsx`                    | Homepage                             |
| `/about`              | `app/about/page.tsx`              | Project overview, objectives, WPs    |
| `/hate-speech-crimes` | `app/hate-speech-crimes/page.tsx` | Educational resource on hate speech  |
| `/ai-against-hate`    | `app/ai-against-hate/page.tsx`    | AI methodology & counter-narratives  |
| `/news`               | `app/news/page.tsx`               | News page                            |
| `/partners`           | `app/partners/page.tsx`           | Partners page                        |
| `/results`            | `app/results/page.tsx`            | Results & documentation              |
| `/report-support`     | *(not yet implemented)*           | Planned: Report & Support form       |

> **Note:** Some footer/nav links reference `/hate-speech` and `/report-support`, but the actual pages are at `/hate-speech-crimes` and `/report-support` does not yet exist. Keep links consistent when editing.

---

## Content Guidelines

- Language must be **inclusive, empowering, and non-stigmatizing** toward Roma communities.
- Avoid sensationalist language around hate crimes.
- CTAs should feel actionable and supportive, not alarming.
- When translating, use professional/formal register for all 4 languages.

---

## Checklist Before Every Edit

- [ ] All new text is translated in all 4 languages (`en`, `es`, `it`, `el`) — or at minimum extracted into a translation-ready structure.
- [ ] Layout tested / verified responsive (mobile, tablet, desktop).
- [ ] Code format matches existing file conventions (2 spaces, single quotes, no semicolons).
- [ ] No hardcoded language strings in JSX without a translation key.
- [ ] Language switcher still works correctly after changes.
- [ ] No new dependencies added without approval.
- [ ] Dark mode colors verified if adding new UI surfaces.
- [ ] Existing links and routes remain valid.
