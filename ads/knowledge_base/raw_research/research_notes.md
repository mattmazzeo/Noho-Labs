# Research Notes: Meta Ads Strategy for Noho Labs / Aluna Science

## Brand Overview

### Noho Labs (noholabs.com)
- Concierge wellness service focused on peptide therapy
- Membership model: Quiz → Clinician consultation → Personalized peptide protocol → Ongoing support
- Categories: Energy & Performance, Immune Support, Mood & Sleep, Healthy Aging, Beauty
- Peptides sourced from FDA-inspected facilities
- LegitScript approved
- Has testimonials from real patients
- Clinical services provided by licensed clinicians
- FDA disclaimer present: products not intended to diagnose, treat, cure, or prevent disease

### Aluna Science (alunascience.com)
- "Launching Soon" page only
- No product details yet
- Just email capture form

## Meta Ads Policy Landscape (2026)

### November 2025 Policy Update - 3-Tier Restriction System
- **Tier 1**: Full optimization access (general wellness, fitness) - can use standard pixel/CAPI
- **Tier 2**: Partial restrictions - blocks Purchase/Lead events, permits PageView/ViewContent
- **Tier 3**: Severe limitations (mental health, addiction, reproductive health)

### Noho Labs likely classification: Tier 2 (telehealth consultations)
- Can still track traffic but may lose ability to optimize directly for conversions
- Custom audiences from website activity may be limited
- Need to use server-side events or alternative tracking

### Key Compliance Rules for Health/Peptide Ads
1. NO disease claims - can't say "cures," "treats," "prevents," "heals"
2. Use structure-function language: "supports," "helps maintain," "helps promote"
3. No before/after imagery
4. No implied diagnosis ("Suffering from...?")
5. No specific outcome guarantees ("Increase energy by 30%")
6. Must target 18+ audiences
7. No body-shaming imagery
8. Include FDA disclaimers on landing pages
9. Frame benefits around convenience, privacy, access rather than health outcomes
10. Avoid expert endorsements tied to specific health outcomes

### Safe Language Examples
- "Supports immune function"
- "Helps maintain healthy energy levels"
- "Supports recovery and vitality"
- "Get care from home"
- "Personalized wellness protocols"

### Risky Language to Avoid
- "Cure your fatigue"
- "Fight off illness"
- "Finally get relief from..."
- "Guaranteed results"

## Campaign Structure Best Practices (2026)

### Account Structure (Test + Scale)
1. **Test Campaign** (25% of budget): Group ad sets by creative themes, use CBO
2. **Scale/Winners Campaign**: Consolidate proven winners into single adset, test audiences
3. **Retargeting Campaign**: View Content + ATC + engaged audiences

### Audience Targeting Options
- Broad Targeting (no interests/lookalikes)
- Advantage+ Targeting (Meta's automated expansion)
- Interest stacks (themed)
- Lookalike audiences (1-3% work best)
- Purchaser lookalikes (2-5%)

### Budget Recommendations
- Start with $15-$20/day per campaign for testing
- Need enough budget for 7+ conversions per week per ad set
- Set aside 20-40% of budget for creative testing
- Scale 20-30% weekly only if CAC holds

### Creative Strategy
- Creative diversity is key (not just hook variations)
- Launch 5-10 new ads weekly
- Let run 7 days untouched
- Kill losers, scale winners
- Vertical (9x16) format for 90% of inventory
- Types: UGC testimonials, founder stories, educational explainers, lifestyle imagery

### Key Metrics
- CPMr (Cost per 1,000 reach) - early warning for fatigue
- Blended CAC: Total Marketing Spend / Total New Customers
- MER: Total Revenue / Total Marketing Spend
- Don't rely solely on in-platform ROAS

## Peptide Marketing Funnel Strategy

### Top of Funnel: Capture the Symptom
- Lead with feelings, not clinical terminology
- Target symptom searches: "Why am I always tired?" "How to increase energy naturally?"
- Short-form social, educational content

### Middle of Funnel: Educate
- Answer: "What are peptides?" "Is this safe?" "Do I need a prescription?"
- Email nurture sequences
- Retargeting with educational content
- Case studies / patient journey stories

### Bottom of Funnel: Convert
- Mirror original pain point
- Clear CTA ("Book your consultation")
- Process transparency (1. Consult → 2. Plan → 3. Treatment)
- Social proof
- Minimal friction intake

## Workarounds for Tier 2 Restrictions
- HIPAA-compliant vendors (Freshpaint, Ours Privacy) - $25k+ implementation
- Server-side events with custom conversion names via CAPI
- Domain swap method
- Optimize for upper-funnel events (ViewContent, PageView) as proxy
