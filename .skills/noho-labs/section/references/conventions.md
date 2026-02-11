# Noho Labs Code Conventions

Quick reference for component patterns used throughout the project.

## File Structure

```
src/
  components/
    landing-pages/
      VariationX/          # PascalCase folder
        index.tsx           # Composes all sections, default export
        Hero.tsx            # Each section is its own file
        SectionName.tsx
    shared/
      index.ts             # Barrel exports
      ComponentName.tsx
  lib/
    animations.ts           # All reusable animation variants
```

## Component Pattern

```tsx
// 1. Imports
import { motion } from 'framer-motion';
import { AnimatedSection, Container } from '../../shared';

// 2. Types (if needed)
interface ItemType {
  title: string;
  description: string;
}

// 3. Data arrays (if data-driven)
const items: ItemType[] = [
  { title: 'Example', description: 'Description' },
];

// 4. Component
const SectionName = () => {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      <Container size="xl">
        <AnimatedSection animation="fadeUp">
          {/* Content */}
        </AnimatedSection>
      </Container>
    </section>
  );
};

// 5. Default export
export default SectionName;
```

## Shared Components API

### AnimatedSection
```tsx
<AnimatedSection
  animation="fadeUp"  // fadeUp | fadeIn | slideLeft | slideRight | scaleIn | blurIn | custom
  delay={0.2}         // seconds
  duration={0.6}      // seconds (optional)
  threshold={0.2}     // viewport intersection ratio
  triggerOnce={true}   // animate only on first scroll
  as="div"            // div | section | article | span | p | h1 | h2 | h3
  className=""
>
```

### Container
```tsx
<Container
  size="xl"           // sm (max-w-2xl) | md (max-w-4xl) | lg (max-w-5xl) | xl (max-w-7xl) | 2xl | full
  as="div"            // semantic HTML element
  className=""
>
```

### Button
```tsx
<Button
  variant="primary"   // primary | secondary | ghost | outline
  size="md"           // sm | md | lg
  icon={<Icon />}     // optional icon
  iconPosition="left" // left | right
  fullWidth={false}
  loading={false}
>
```

## Animation Library (src/lib/animations.ts)

Available variants to import:
- `fadeInUp`, `fadeIn`, `scaleIn`, `slideInLeft`, `slideInRight`, `blurIn`, `rotateIn`
- `staggerContainer`, `staggerContainerSlow`
- `cardHover`, `buttonHover`
- `textRevealContainer`, `textRevealChild`
- `drawLine`
- `springTransition`, `gentleSpring`, `bouncySpring`
- `getParallaxValues(scrollY, rate)`

## Variation Index Pattern

```tsx
import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero from './Hero';
import SectionOne from './SectionOne';
// ... more sections

const VariationX = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Fixed animated background gradient */}
      <motion.div className="fixed inset-0 pointer-events-none" style={{ y: backgroundY }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-gradient-to-b from-{accent}-900/20 via-{accent}-900/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.015]">
        <svg className="w-full h-full">
          <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Sections */}
      <Hero />
      <SectionOne />
      {/* ... */}
    </div>
  );
};

export default VariationX;
```

## Routing (App.tsx)

New variations need:
1. Lazy import: `const VariationX = lazy(() => import('./components/landing-pages/VariationX'));`
2. Route: `<Route path="/preview/slug" element={<PreviewWrapper><VariationX /></PreviewWrapper>} />`

## Tailwind Design Tokens

- Backgrounds: `bg-[#0a0a0b]`, `bg-[#111113]`, `bg-white/5`
- Borders: `border-white/10`, `border-{accent}-500/20`
- Text: `text-white`, `text-white/70`, `text-white/50`, `text-white/30`
- Gradients: `bg-gradient-to-r from-{accent}-400 via-{accent2}-400 to-{accent3}-400`
- Gradient text: apply `text-gradient` class + `bg-gradient-to-r` + gradient stops
- Glass: `backdrop-blur-xl bg-white/5 border border-white/10`
- Glow: `shadow-lg shadow-{accent}-500/20`
- Section padding: `py-32 sm:py-40`
- Responsive text: `text-3xl sm:text-4xl lg:text-5xl`
