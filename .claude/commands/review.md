Review the current codebase changes thoroughly. Check for:

1. **Type safety** — Any `any` types, missing interfaces, or unsafe casts?
2. **Design system compliance** — Are shared components being used? Read DESIGN_PREFERENCES.md and verify adherence.
3. **Accessibility** — Semantic HTML, ARIA attributes, keyboard navigation, focus management?
4. **Performance** — Unnecessary re-renders, missing memoization, large bundle imports?
5. **Responsiveness** — Does it work on mobile (375px), tablet (768px), and desktop (1280px+)?
6. **Animation quality** — Are animations using shared variants from `lib/animations.ts`?
7. **Code organization** — Files under 300 lines? Clear separation of concerns?

Run `npm run lint` and `npm run build` to verify there are no errors.

For each issue found, provide:
- File and line number
- What's wrong
- How to fix it
- Severity (critical / warning / suggestion)

$ARGUMENTS
