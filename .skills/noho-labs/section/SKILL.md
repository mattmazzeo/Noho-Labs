---
name: section
description: >
  Scaffolds a new landing page section or full variation for the Noho Labs project,
  following established conventions: React + TypeScript, Framer Motion animations,
  Tailwind CSS v4 styling, AnimatedSection wrappers, and the project's dark-mode-first
  design system. Use when the user wants to create a new section, component, or
  landing page variation.
license: MIT
compatibility: Requires the Noho Labs project with its existing component structure.
metadata:
  author: noho-labs
  version: "1.0"
allowed-tools: Read Write Edit Glob Grep
---

# Section

Scaffold a new landing page section or full variation following Noho Labs conventions.

## Inputs

- **Section name** (required): e.g., "PricingSection", "TeamSection", "FAQSection"
- **Variation** (optional): Which variation to add it to (A, B, C, or new). If "new", create an entire new variation.
- **Description** (optional): What the section should contain and its purpose.

## Instructions

Before generating anything, read the project's design preferences and conventions:

1. Read `DESIGN_PREFERENCES.md` for design rules.
2. Read the [conventions reference](references/conventions.md) for code patterns.

### 1. Determine scope

- **Single section**: Create one new section component within an existing variation.
- **New variation**: Create a full landing page (Hero + 3-5 sections + CTA) with its own route.

### 2. Create the section component

Every section file follows this structure:

```tsx
import { motion } from 'framer-motion';
import { AnimatedSection, Container } from '../../shared';
// Additional imports from '../../../lib/animations' as needed

// Data arrays (if the section is data-driven)
const items = [
  { /* ... */ },
];

const SectionName = () => {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      {/* Optional background effects */}
      <Container size="xl">
        <AnimatedSection animation="fadeUp">
          {/* Section header: tagline + headline + description */}
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.2}>
          {/* Main content */}
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default SectionName;
```

### 3. Apply design rules

Follow these strictly (from DESIGN_PREFERENCES.md):

**Always do:**
- Dark mode first — backgrounds use `bg-[#0a0a0b]` or similar deep blacks
- Scroll-triggered animations via `<AnimatedSection>` with staggered delays (0.1-0.2s increments)
- `motion.div` / `motion.section` for hover and interactive animations
- Generous whitespace: `py-32 sm:py-40` for section padding
- Gradient text for emphasis: `text-gradient bg-gradient-to-r from-{color} via-{color} to-{color}`
- Responsive typography: `text-3xl sm:text-4xl lg:text-5xl`
- Text opacity hierarchy: headings at `text-white`, body at `text-white/70`, muted at `text-white/50`
- Professional copy — no lorem ipsum
- At least one "delighter" animation per section

**Never do:**
- Generic three-column icon grids
- Stock photo placeholders
- Carousel/slider testimonials
- Random floating gradient blobs
- Static, unanimated content
- More than 3 accent colors per variation

**Accent colors by variation:**
- Variation A (Editorial): amber, orange, red
- Variation B (Product-Led): cyan, blue, indigo
- Variation C (Social Proof): pink, purple, violet

### 4. Wire it up

After creating the section file:

1. **Import** the section in the variation's `index.tsx`.
2. **Place** it in the component hierarchy (between existing sections, maintaining visual flow).
3. If creating a **new variation**:
   - Create `src/components/landing-pages/VariationX/index.tsx` with all sections.
   - Add a lazy import in `src/App.tsx`.
   - Add a `<Route>` wrapped in `<PreviewWrapper>`.
   - Add a card in `src/components/directory/DirectoryView.tsx`.

### 5. Verify

After scaffolding, confirm:
- The file uses TypeScript (`.tsx` extension, typed props if any).
- All animations use variants from `src/lib/animations.ts` or inline Framer Motion props.
- The section is wrapped in `<AnimatedSection>` for scroll-triggered entry.
- Tailwind classes follow the project's design token system.
- No unused imports or variables.

## Output format

```
Section created: PricingSection
  File:       src/components/landing-pages/VariationB/PricingSection.tsx
  Wired into: src/components/landing-pages/VariationB/index.tsx
  Animation:  fadeUp with 0.2s staggered delays
  Colors:     cyan → blue → indigo gradient
```
