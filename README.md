# NXRSkyaa Labs — Landing Page

A premium, production-ready SaaS landing page built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

> Financial clarity for modern SaaS teams — connect your accounts, watch for problems, and know exactly where your money goes.

## Tech Stack

- **Next.js 14** — App Router, static export-ready
- **TypeScript** — strict mode
- **Tailwind CSS** — custom design tokens (ink/paper/brand palette)
- **Framer Motion** — page-load, scroll-in, hover, parallax & mobile-menu animations
- **lucide-react** — icons
- **geist** — font (Geist Sans)

No database. No backend. No paid APIs.

## Project Structure

```
app/
  layout.tsx          # metadata, fonts, root layout
  page.tsx            # assembles all sections
  globals.css         # design tokens, glass, grid, utilities
components/
  Brand.tsx           # logo lockup + mascot container
  Navbar.tsx          # sticky glass nav + animated mobile menu
  Hero.tsx            # headline, CTAs, glowing background
  DashboardMockup.tsx # realistic app UI w/ pointer parallax
  AboutSection.tsx    # "engineers at heart" + stats
  HowItWorks.tsx      # Connect / Detect / Forecast cards
  Integrations.tsx    # tabbed integration grid
  CTASection.tsx      # dark gradient call-to-action
  Footer.tsx          # link columns + legal
lib/
  motion.ts           # shared Framer Motion variants
public/
  nxr-logo.png        # NXR mascot logo
```

## Run Locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run lint
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects **Next.js** — no config needed.
4. Click **Deploy**.

Build command `next build` and output are detected automatically.

---

© NXRSkyaa Labs
