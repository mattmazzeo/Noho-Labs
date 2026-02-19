---
globs:
  - "**/*.ts"
  - "**/*.tsx"
---
# TypeScript Rules

- Use strict TypeScript — no `any` types, no `@ts-ignore`
- Prefer `interface` for object shapes, `type` for unions/intersections
- Use `const` assertions where possible
- Destructure props in function signatures
- Use discriminated unions over optional fields for state machines
- All event handlers must be typed, never use `any` for events
