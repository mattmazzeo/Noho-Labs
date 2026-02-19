# Noho Labs — Landing Page Showcase

## Project Overview
A design showcase SPA for Noho Labs featuring three distinct landing page variations. Each variation explores a different creative direction (Editorial, Product-Led, Social Proof) with shared design system components.

## Tech Stack
- **Framework:** React 19 + TypeScript (strict)
- **Build:** Vite 7
- **Styling:** Tailwind CSS 4
- **Animation:** Framer Motion 12
- **Routing:** React Router DOM 7
- **Fonts:** Inter (primary), Space Grotesk (display), JetBrains Mono (code)

## Architecture

### Directory Structure
```
src/
  App.tsx                    # Routes and layout
  main.tsx                   # Entry point
  lib/animations.ts          # Shared animation variants
  components/
    shared/                  # Design system primitives
    directory/               # Main directory/navigation view
    landing-pages/
      VariationA/            # Editorial/Storytelling (amber/orange)
      VariationB/            # Product-Led/Interactive (cyan/blue)
      VariationC/            # Social Proof/Trust (pink/purple)
```

### Routes
- `/` — DirectoryView (variation picker)
- `/preview/editorial` — VariationA
- `/preview/product-led` — VariationB
- `/preview/social-proof` — VariationC

## Commands
- `npm run dev` — Start dev server
- `npm run build` — TypeScript check + Vite build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

## Design System
IMPORTANT: Read @DESIGN_PREFERENCES.md before creating or modifying any visual component. It contains accumulated design feedback and brand guidelines that must be followed.

## Code Conventions
- All components use functional React with TypeScript
- Animation variants are defined in `src/lib/animations.ts` — reuse them
- Shared UI primitives live in `src/components/shared/` — check there before creating new ones
- Each landing page variation is self-contained in its own directory with an `index.tsx` entry point
- Use Tailwind utility classes, no custom CSS files
- Dark mode is the only mode — no light mode toggle needed
- All sections must use `AnimatedSection` wrapper for scroll animations

## When Adding a New Variation
1. Read `DESIGN_PREFERENCES.md` for current design standards
2. Create a new directory under `src/components/landing-pages/`
3. Follow the pattern of existing variations (Hero, sections, CTA)
4. Add a new route in `App.tsx`
5. Add a card in `DirectoryView.tsx`
6. Use a distinct color palette that doesn't overlap existing ones
7. Reuse shared components from `src/components/shared/`
