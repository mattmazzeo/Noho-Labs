Create a new landing page variation for the Noho Labs showcase. Before building anything:

1. Read `DESIGN_PREFERENCES.md` to understand all design requirements
2. Review existing variations (VariationA, VariationB, VariationC) to understand the established patterns
3. Propose 2-3 distinct creative directions with:
   - Theme/concept name
   - Color palette (must not overlap existing variations)
   - Key differentiating design elements
   - Target audience/emotional tone
4. Wait for approval before building

When building:
- Follow the directory structure pattern: `src/components/landing-pages/Variation{X}/`
- Create `index.tsx` as the entry point
- Create separate files for Hero, each section, and CTA
- Add the route in `App.tsx`
- Add the card in `DirectoryView.tsx`
- Use shared components from `src/components/shared/`
- Use animation variants from `src/lib/animations.ts`
- All copy must be real, compelling content — no placeholders

Direction/theme requested: $ARGUMENTS
