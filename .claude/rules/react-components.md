---
paths:
  - "src/components/**/*.tsx"
---
# React Component Rules

- Every component must be a named export (no default exports)
- Props interface named `{ComponentName}Props`
- Use `AnimatedSection` from `shared/` for any scroll-triggered content
- Use `Container` from `shared/` for consistent max-width and padding
- Use `Button` from `shared/` — never create one-off button styles
- All interactive elements need hover/focus states with Framer Motion
- Images must have descriptive `alt` text
- Sections must have `aria-label` or `aria-labelledby`
- Mobile-first: start with mobile layout, then add `md:` and `lg:` breakpoints
