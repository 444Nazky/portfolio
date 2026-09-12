# NAZKY — Developer Portfolio

> **Build to break. Break to build.**

A modern, single-page developer portfolio for **Narutama Nazril Khairrazky** — Linux-enthusiast backend developer focused on offensive security and infrastructure hardening.

**Theme:** Ultra-dark cyber · **Framework:** Next.js 16 · **Styling:** Tailwind CSS v4 · **Language:** TypeScript

---

## Features

- **Ultra-dark cyber aesthetic** — `#0D0D0D` base with high-contrast neon green (`#C6FF00`) accents
- **Fully responsive** — mobile, tablet, and desktop viewports
- **CSS-only globe orb** in the hero — animated orbit rings, floating tech chips, no external assets
- **Animated marquee ticker** — `Designer • Engineer • Cybsec`
- **Tech stack accordion** — smooth `grid-template-rows` animation, brand-tinted badges
- **Scrollspy navigation** — active link highlighting + translucent sticky header
- **Pure CSS animations** — respects `prefers-reduced-motion`

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org) | React framework (App Router, Turbopack) |
| [React 19](https://react.dev) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling |
| [TypeScript](https://www.typescriptlang.org) | Typed JavaScript |
| [Archivo](https://fonts.google.com/specimen/Archivo) | Geometric display font |
| [Inter](https://fonts.google.com/specimen/Inter) | Body font (via `next/font/google`) |

## Project Structure

```
3rddummy/
├── app/
│   ├── globals.css        # Theme tokens, keyframes, custom utilities
│   ├── layout.tsx         # Root layout + fonts + metadata
│   └── page.tsx           # Single-page composition
├── components/
│   ├── Navbar.tsx         # Sticky nav, scrollspy, mobile menu
│   ├── Hero.tsx           # PORT/FOLIO + CSS globe orb
│   ├── About.tsx          # Bio, stats, marquee
│   ├── TechStacks.tsx     # Accordion + badges
│   ├── Certificates.tsx   # Card grid + See More
│   ├── Experience.tsx     # Timeline
│   ├── Awards.tsx         # Year-grouped awards
│   ├── Footer.tsx         # LET'S TALK CTA + links
│   ├── NewsletterForm.tsx
│   └── SectionHeading.tsx
└── package.json
```

## Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the page hot-reloads as you edit.

### Production Build

```bash
npm run build   # type-checks + builds
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Customization

- **Colors** — edit the CSS variables in `app/globals.css` (`--neon`, `--background`, `--card`, and others)
- **Fonts** — swap `Archivo` / `Inter` in `app/layout.tsx`
- **Content** — every section's data (certifications, experience, awards, links) lives at the top of its component file
- **Headshot** — the About card uses a designed placeholder; drop a photo in `public/` and update `components/About.tsx`
- **Real links** — replace the placeholder social links in `components/Hero.tsx` and `components/Footer.tsx`

## Deployment

Deploy to [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) directly, or from the CLI:

```bash
npm i -g vercel
vercel
```

**Notes:** the project is not yet a git repository. Run `git init` at the project root to silence the `package-lock.json` warning, or set `turbopack.root` in `next.config.ts`.

## Credits

- **Design & Build** — [Narutama Nazril Khairrazky](mailto:naruzky.naz@gmail.com) (Nazky)
- **Framework** — [Next.js](https://nextjs.org) by Vercel
- **Styling** — [Tailwind CSS](https://tailwindcss.com)
- **Fonts** — [Archivo](https://fonts.google.com/specimen/Archivo) and [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Icons** — hand-rolled inline SVGs
- **Content** — certification and award copy is placeholder data; replace with real credentials

## License

MIT — free to use, learn, and extend. Built for the RPL "Dummies" learning series.

---

© 2026 **NAZKY**. Crafted with Next.js, styled with Tailwind, powered by 10,459 ML of caffeine.