---
paths:
  - "src/lib/animations.ts"
  - "src/components/**/*.tsx"
---
# Animation Rules

- Reuse animation variants from `src/lib/animations.ts` — don't create inline variants
- If a new animation pattern is needed, add it to `animations.ts` first
- Scroll animations: use `whileInView` with `viewport={{ once: true, amount: 0.3 }}`
- Hover animations: use `whileHover` with `transition={{ duration: 0.3 }}`
- Stagger children by 100-150ms using `staggerChildren` in parent variants
- Respect `prefers-reduced-motion` — provide fallbacks
- Keep transitions under 500ms — anything longer feels sluggish
