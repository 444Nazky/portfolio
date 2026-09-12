# Portfolio

A modern, high-performance single-page developer portfolio built for **Narutama Nazril Khairrazky** — Linux-enthusiast backend developer focused on offensive security and infrastructure hardening.

---

## Technical Overview

- **Aesthetic:** Ultra-dark cyber theme (`#0D0D0D` base with `#C6FF00` neon accents)
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Typography:** Archivo (Geometric Display) & Inter (Body) via Google Fonts

---

## Architecture & Project Structure

The codebase is structured logically with custom reusable components and theme definitions:

```text
3rddummy/
├── app/
│   ├── globals.css        # Theme tokens, keyframes, custom utilities
│   ├── layout.tsx         # Root layout, typography, metadata
│   └── page.tsx           # Single-page layout composition
├── components/
│   ├── Navbar.tsx         # Sticky header, scrollspy, responsive drawer
│   ├── Hero.tsx           # Hero section & pure CSS globe orb
│   ├── About.tsx          # Bio, stats counter, marquee ticker
│   ├── TechStacks.tsx     # Animated accordion & tech badges
│   ├── Certificates.tsx   # Responsive certificate grid
│   ├── Experience.tsx     # Interactive career timeline
│   ├── Awards.tsx         # Categorized awards listing
│   ├── Footer.tsx         # Contact CTA & navigational links
│   ├── NewsletterForm.tsx # Subscription form handling
│   └── SectionHeading.tsx # Reusable section title component
├── public/                # Static assets & media
└── package.json           # Dependency management
