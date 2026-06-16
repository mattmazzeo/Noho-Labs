# Meta Ads Launch Strategy: Noho Labs & Aluna Science

**Prepared by:** Manus AI  
**Date:** June 16, 2026

## Executive Summary

As first-time advertisers on Meta, launching Noho Labs and Aluna Science requires navigating a complex and highly regulated environment. The peptide and telehealth space has experienced explosive growth, but Meta has responded with strict policy updates, specifically the November 2025 rollout of the 3-Tier Health & Wellness Restriction System [1]. This system fundamentally changes how health brands can track conversions and optimize campaigns.

This document outlines a comprehensive, compliance-first Meta Ads strategy. It covers the technical setup required to bypass tracking restrictions, the specific creative approaches needed to avoid ad disapprovals, and a modern account structure designed to scale efficiently in 2026.

## 1. Current Account Status & Technical Foundation

Based on an audit of your Meta Business Manager, you currently have two active ad accounts:
- **NOHO Account** (act_887229630436102): Created June 15, 2026. Currently active with zero spend and no active campaigns.
- **Matt Mazzeo Account** (act_1466617185264915): Active, but no campaigns found.

Before spending any budget, the technical foundation must be addressed. As a peptide telehealth brand, Noho Labs will likely be classified under Meta's **Tier 2 or Tier 3 restrictions** [1]. This classification blocks lower-funnel optimization events like "Purchase" and "Lead" from standard pixel tracking.

### The Required Tracking Infrastructure

To successfully track conversions and train Meta's algorithm, standard pixel implementation is insufficient. The following infrastructure is required:

| Component | Purpose | Implementation Strategy |
| :--- | :--- | :--- |
| **Clean Intermediary Domain** | Prevents domain-level health classification | Set up a separate domain (e.g., *trynoholabs.com*) exclusively for ad landing pages. This domain must not contain condition-specific language or medical claims [2]. |
| **Server-Side Event Routing** | Bypasses browser-level tracking restrictions | Implement Meta Conversions API (CAPI) using a server-side container (like Stape or a HIPAA-compliant vendor like Freshpaint) [1]. |
| **Payload Cleansing** | Ensures compliance with Meta's data policies | Strip all health-related parameters, URL query strings, and product names from the data payload before it reaches Meta [2]. |

Implementing this infrastructure allows your Event Match Quality to recover, enabling the algorithm to find high-intent buyers rather than just driving low-quality traffic [2].

## 2. Compliance-First Creative Strategy

Creative is your primary performance lever. Meta's policies strictly prohibit claims that a product cures, treats, or prevents diseases [3]. The difference between an approved ad and a rejected one often comes down to specific word choices.

### Copywriting Guardrails

You must transition from "disease and treatment" language to "structure and function" language.

- **Prohibited Language:** Do not use words like "cures," "treats," "prevents," "heals," or "eliminates" [3]. Avoid implied diagnoses such as "Suffering from fatigue?"
- **Approved Language:** Use supportive verbs. For example, "Supports immune function," "Helps maintain healthy energy levels," or "Formulated to support recovery and vitality" [3].

### Visual and Hook Strategies

The visual component of your ads must also adhere to strict guidelines. Meta is highly sensitive to appearance and weight-related content.

- **Avoid Before-and-After Imagery:** Do not use dramatic transformations or zoomed-in "problem area" shots [3].
- **Leverage Process Reveals:** Show the patient journey. A simple sequence (e.g., "1. Online consult, 2. Get a plan, 3. Receive treatment") builds trust and sets expectations without making medical claims [1].
- **Use Educational Hooks:** Qualify your audience by addressing symptoms rather than conditions. A hook like "Tired of waiting weeks for an appointment?" works better than "Cure your anxiety" [1].

## 3. Full-Funnel Marketing Approach

Peptide therapy is a high-consideration purchase. Many potential patients are searching for solutions to symptoms (fatigue, slow recovery) but are unaware that peptides are the answer [4].

### Top of Funnel (Awareness)
At this stage, capture the symptom, not the solution. Your creative should validate the patient's frustration. Use short-form video and educational carousels that address topics like "Why you're still exhausted after 8 hours of sleep" [4]. The goal is to earn the click and drive traffic to your educational landing pages.

### Middle of Funnel (Education)
Once they are in your ecosystem, bridge the knowledge gap. Address common questions: "What are peptides?", "Is it safe?", and "Do I need a prescription?" [4]. Use retargeting ads featuring myth-busting content and explanations of what a consultation looks like.

### Bottom of Funnel (Conversion)
Connect the solution to their initial pain point. Your landing pages must mirror the ad's messaging, state the prescription requirements clearly, and provide a frictionless booking experience [4]. The call-to-action must be direct, such as "Book your consultation."

## 4. Campaign Structure & Budget Allocation

In 2026, Meta's Andromeda algorithm rewards creative diversity and campaign simplicity [5]. Complex, highly segmented campaign structures are outdated and inefficient.

### The "Test and Scale" Architecture

We recommend a consolidated, two-campaign structure for Noho Labs:

1. **The Sandbox (Testing Campaign):**
   - **Budget:** Allocate 20-30% of your total daily budget here [6].
   - **Structure:** Group ad sets by distinct creative themes (e.g., Founder Story, UGC Testimonial, Process Explainer).
   - **Optimization:** Use Campaign Budget Optimization (CBO) to allow Meta to allocate spend to the best-performing concepts [6].
   - **Cadence:** Launch 5-10 new ads weekly. Let them run untouched for 7 days before evaluating [5].

2. **The Scale (Winners Campaign):**
   - **Budget:** Allocate 70-80% of your budget to this campaign.
   - **Structure:** Consolidate your top-performing ads from the Sandbox into a single ad set.
   - **Targeting:** Utilize Broad Targeting and Advantage+ Targeting. Let the creative dictate the audience [6].

### Initial Budget Recommendation
For a new account, start with a daily budget of $50 to $100. This provides enough data for the algorithm to learn without overexposing you to risk. As you identify winning creatives and your Customer Acquisition Cost (CAC) stabilizes, scale the budget by 20-30% weekly [5].

## 5. Measurement and Success Metrics

Due to tracking restrictions, relying solely on Meta's reported Return on Ad Spend (ROAS) will be misleading [1]. You must adopt blended metrics to evaluate true business impact.

- **Cost per 1,000 Reach (CPMr):** Monitor this closely. A rising CPMr indicates creative fatigue. When it spikes, refresh your creative rather than adjusting bids [5].
- **Blended Customer Acquisition Cost (CAC):** Calculate this by dividing your total marketing spend by the total number of new customers acquired [1].
- **Marketing Efficiency Ratio (MER):** This is your total revenue divided by your total marketing spend. It provides a holistic view of how efficiently your marketing dollars are driving revenue [1].

## Next Steps

1. **Implement Tracking Infrastructure:** Set up the clean intermediary domain and server-side tracking before launching any campaigns.
2. **Develop Initial Creative Batch:** Produce 5-10 distinct ad concepts adhering to the compliance guidelines outlined above.
3. **Launch the Sandbox Campaign:** Begin testing with a conservative daily budget to identify winning angles.

***

## References

[1] Flighted. "Meta Ads Strategy For Telehealth Brands in 2026." https://www.flighted.co/blog/meta-ads-strategy-for-telehealth-brands-in-2026

[2] Zappush. "Meta Pixel Health & Wellness Restrictions 2026: Myths vs Reality." https://www.zappush.com/blog/meta-pixel-health-wellness-restrictions-2026-myth-vs-reality

[3] Forge Digital Marketing. "How to Advertise Supplements on Meta Without Getting Disapproved (2026 Edition)." https://forgedigitalmarketing.com/how-to-advertise-supplements-on-meta/

[4] OpenLoop Health. "How to Market Your Peptide Therapy Program (Tips & Strategies)." https://openloophealth.com/blog/how-to-market-peptide-therapy-program

[5] Anchour. "The Meta Reset: How to Win Paid Social in 2026." https://www.anchour.com/articles/meta-ads-2026-playbook/

[6] Flighted. "The Best Meta Ads Account Structure In 2026." https://www.flighted.co/blog/best-meta-ads-account-structure-2026
