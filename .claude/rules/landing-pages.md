---
paths:
  - "src/components/landing-pages/**/*.tsx"
---
# Landing Page Variation Rules

IMPORTANT: Always read DESIGN_PREFERENCES.md before modifying any landing page.

- Each variation must have a distinct color palette — never reuse another variation's accent colors
- Every page needs: Hero, at least 3 content sections, and a CTA section
- Each page must have at least one "delighter" animation moment
- Copy must be real, compelling, and action-oriented — never placeholder text
- Follow the established pattern: `index.tsx` re-exports the page, individual section files
- Sections should be independently scrollable with their own enter animations
- Each variation directory should be self-contained — no cross-variation imports
- Shared elements come from `src/components/shared/` only
