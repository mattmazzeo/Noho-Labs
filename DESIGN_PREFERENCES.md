# Design Preferences

This file accumulates user feedback and design preferences for the Noho Labs landing page showcase. **Before generating any new landing page, read this file and apply all learned preferences.**

---

## Typography

- **Primary Sans:** Inter (weights 300-900)
- **Display Font:** Space Grotesk (for headlines and emphasis)
- **Monospace:** JetBrains Mono (for code examples)
- Headlines should use tight letter-spacing (-0.02em to -0.05em)
- Large headlines preferred (text-5xl to text-8xl responsive scale)
- Mixed font weights within headlines create visual interest
- Body text line-height: 1.6-1.7 for readability

---

## Colors & Mood

### Primary Palette
- **Background:** Deep blacks (#0a0a0b, #050505, #0a0608)
- **Text Primary:** Near-white (#fafafa)
- **Text Secondary:** 70% opacity white
- **Text Muted:** 50% opacity white

### Accent Gradients by Variation
- **Editorial/Storytelling:** Amber → Orange → Red (warm, editorial feel)
- **Product-Led:** Cyan → Blue → Indigo (tech, precise feel)
- **Social Proof:** Pink → Purple → Violet (trust, premium feel)

### Visual Style
- Dark mode first
- Subtle gradient backgrounds with blur effects
- Noise/grain texture overlays at very low opacity (0.02-0.03)
- Glassmorphism used sparingly for floating elements
- Glow effects on hover states

---

## Layout Patterns

### Liked
- [x] Large hero sections with oversized typography
- [x] Generous whitespace (80px+ section padding)
- [x] Editorial-style grid layouts (12-column based)
- [x] Bento box feature grids
- [x] Floating/overlapping elements for depth
- [x] Sticky sidebar navigation for long-form content
- [x] Pull quotes with left border accents
- [x] Asymmetric layouts over centered symmetry

### Disliked
- [ ] Generic three-column icon grids
- [ ] Stock photo heroes
- [ ] Carousel/slider testimonials with circular headshots
- [ ] Gradient blobs floating randomly
- [ ] Cookie-cutter pricing tables
- [ ] "As seen in" logo bars with grayscale logos

---

## Specific Elements

### Always Include
- Scroll-triggered fade-up animations
- Hover state animations on all interactive elements
- At least one "delighter" moment per page
- Clear visual hierarchy through size, weight, and opacity
- Subtle parallax effects for depth
- Responsive design considerations
- Professional, compelling copy (no lorem ipsum)

### Always Avoid
- Default browser hover states
- Static, unanimated content
- Lorem ipsum or placeholder text
- Generic stock imagery
- Overly busy or cluttered layouts
- More than 3 accent colors per variation

---

## Copy & Voice

### Tone
- Professional but not corporate
- Confident without being arrogant
- Technical credibility through clarity
- Action-oriented CTAs

### Headlines
- Lead with outcomes, not features
- Use specific numbers when possible
- Create emotional resonance
- Vary structure (questions, statements, challenges)

### Body Copy
- Short paragraphs (2-3 sentences max)
- Clear value propositions
- Specific details over generic claims
- Benefits over features

---

## Animations & Interactions

### Required Animations
1. **Scroll-triggered:** fadeInUp, slideIn, scaleIn
2. **Hover states:** lift, scale, glow, color shift
3. **Transitions:** smooth 300ms ease-out
4. **Parallax:** subtle background movement

### Animation Timing
- **Fast:** 150ms (micro-interactions)
- **Base:** 250-300ms (most transitions)
- **Slow:** 400-500ms (page transitions)
- Stagger children by 100-150ms

### Delighter Ideas Used
- Floating badges with gentle bounce animations
- Animated chart/graph reveals
- Code typing animations
- Number counting animations
- Magnetic hover effects on buttons
- Subtle cursor interactions

---

## Feedback History

### Initial Build (January 2025)
- Created 3 distinct variations: Editorial, Product-Led, Social Proof
- Each variation explores fundamentally different creative direction
- Implemented comprehensive animation system
- Dark mode first approach with premium feel

---

## Notes for Future Variations

When creating new landing pages:

1. **Research first** - Check current design trends
2. **Read this file** - Apply all accumulated preferences
3. **Propose directions** - Present 2-3 concepts before building
4. **Ask clarifying questions** if brand styling unclear:
   - What's the brand personality?
   - Any established colors/fonts/styles?
   - Who's the target audience?
   - What's the primary action goal?
   - Any landing pages to emulate?

---

*Last updated: January 2025*
