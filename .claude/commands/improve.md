Proactively analyze the specified area of the codebase and suggest improvements. Look for:

1. **Performance** — Unnecessary re-renders, missing lazy loading, large imports that could be code-split
2. **Accessibility** — Missing ARIA labels, keyboard traps, color contrast issues, missing focus states
3. **Design quality** — Inconsistencies with DESIGN_PREFERENCES.md, missing hover states, animation gaps
4. **Code quality** — Repeated patterns that should be abstracted, overly complex logic, missing types
5. **UX polish** — Loading states, error states, empty states, transition smoothness
6. **SEO/Meta** — Missing meta tags, Open Graph data, semantic structure
7. **Mobile experience** — Touch targets too small, horizontal scroll, text too small

For each finding:
- Severity: critical / important / nice-to-have
- Current state vs. ideal state
- Concrete fix with code

Prioritize by impact. Focus on changes that a user would actually notice.

Area to analyze: $ARGUMENTS
