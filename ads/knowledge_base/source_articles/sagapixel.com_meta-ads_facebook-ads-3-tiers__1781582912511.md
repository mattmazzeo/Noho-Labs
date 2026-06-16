Skip to content

Frank Olivo

Frank Olivo is the founder of Sagapixel. He writes on a number of topics related to digital marketing, but focuses mostly on SEO.

# Meta’s 3-Tier Data Restrictions for Healthcare Ads: What You Need to Know

Category: [Meta Ads](https://sagapixel.com/category/meta-ads/)

Table of Contents

|**Key Takeaways**

* **Meta now restricts healthcare advertisers across three tiers** — Core Setup (least restrictive), Mid-Restricted, and Full-Restricted — each limiting what data your pixel and Conversions API can send back to Meta.
* **This is not the same as Special Ad Categories.** These are separate data-level restrictions that affect your conversion tracking, audience building, and campaign optimization, even if you’ve already set up Special Ad Categories correctly.
* **Even the least restrictive tier (Core Setup) blocks some data** , including custom parameters and URL query strings, which can quietly degrade your custom audiences and reporting.
* **Mid-Restricted properties lose access to Purchase and Lead event optimization** , forcing a shift to upper-funnel metrics like PageView and ViewContent.
* **Full-Restricted properties lose conversion tracking entirely** — no optimization, no retargeting from pixel data, and minimal reporting in Events Manager.
* **If you’ve been incorrectly flagged** , you can appeal through Meta Business Help, but expect slow response times and plan to adapt your campaigns in the meantime.
* **These restrictions are expanding, not shrinking.** Meta is expected to extend limitations to additional conversion events like Schedule, Lead, and CompleteRegistration through 2026. |
| --- |

If you run Meta ads for a healthcare business and you’ve noticed your conversion tracking stopped working, your custom audiences shrank overnight, or your optimization options disappeared from Ads Manager, you’re not imagining things.

Meta has rolled out a tiered data restriction system specifically targeting health and wellness advertisers, and it’s affecting everything from pixel tracking to campaign optimization.

The frustrating part is that Meta doesn’t always notify you clearly when these restrictions hit your account.

You might just see performance decline and wonder what changed.

This article breaks down exactly what’s happening, how Meta’s three-tier restriction system works, how to figure out which tier you’ve been placed in, and what to do about it — whether you’ve been correctly classified or flagged by mistake.

## Why Meta Is Restricting Healthcare Ad Data

This isn’t about ad creative or what you’re allowed to say in your copy. These restrictions are about data — specifically, the health-related data that flows from your website back to Meta through the pixel and Conversions API (CAPI).

Meta is responding to increasing regulatory pressure around health data privacy.

In the wake of FTC enforcement actions and growing scrutiny over how platforms handle sensitive health information, Meta made the decision to limit what healthcare-related properties can share through their tracking infrastructure. The goal, from Meta’s perspective, is to prevent sensitive health data — things like medical conditions, prescription information, or patient status — from being transmitted to their ad platform.

The important distinction here is that this is a completely separate system from Special Ad Categories. You might already have your campaigns set up under the correct Special Ad Category for healthcare. That doesn’t matter. These data restrictions apply at the pixel and domain level, and they can hit your account regardless of how your campaigns are configured.

Meta uses a combination of automated classification and manual review to determine whether your website or app handles health-related data, and then assigns your property to one of three restriction tiers.

## The Three Tiers of Restriction

Meta’s system classifies healthcare-related properties into three tiers, each with progressively stricter limitations on what data you can collect, what audiences you can build, and how you can optimize your campaigns.

Your tier determines the ceiling of what’s possible with your Meta advertising — and for many healthcare advertisers, that ceiling dropped significantly starting in early 2025.

Here’s how each tier works.

### Tier 1: Core Setup (Least Restrictive)

Core Setup is the lightest level of restriction, but don’t let the name fool you — even at this tier, Meta is blocking data that many advertisers rely on.

**What’s blocked at Core Setup:**

Custom parameters and URL components — including query strings and product names — are stripped from the data your pixel sends to Meta. This means if your tracking relied on URL parameters to distinguish between different services, appointment types, or patient flows, that data is no longer getting through. Automatic advanced matching may also be unavailable, and certain information in Events Manager will be less visible than you’re used to.

**What still works:**

You can still use the standard Meta pixel and Conversions API without major restrictions.

You can optimize for purchase conversions, build custom audiences from website visitors, and create lookalike audiences from customer lists. For most practical purposes, your campaigns can still function close to normal — the biggest risk is that custom audiences quietly degrade over time as they lose access to the data they were built on.

**Who typically lands in Tier 1:**

General wellness product retailers, fitness coaching services, non-prescription supplement brands, wellness education platforms, and non-medical health tracking apps.

Basically, if your business doesn’t deal directly with medical conditions, patient data, or prescription products, you’re more likely to land here.

### Tier 2: Mid-Restricted Properties

This is where things start to hurt. Tier 2 strips away the conversion events that most healthcare advertisers depend on to drive ROI.

**What’s blocked at Tier 2:**

Meta blocks optimization toward Purchase and Lead events.

If you were running campaigns optimized for booked appointments, completed purchases, or lead form submissions, those optimization options are gone.

You can no longer use conversion-based bidding strategies that target these lower-funnel actions.

**What still works:**

You can still track and optimize toward PageView and ViewContent events.

Traffic campaigns still function.

You can still run ads and drive people to your website — you just can’t tell Meta’s algorithm to find people who are most likely to convert once they get there.

This is a significant handicap. Without lower-funnel optimization, you’re essentially asking Meta to send you traffic without any signal about what “good” traffic looks like for your business.

Expect higher costs per acquisition and the need to rely more heavily on your own landing page optimization and follow-up processes to convert that traffic.

**Who typically falls in Tier 2:**

Telehealth consultation services, online mental health platforms, hormone therapy programs, weight loss services, and health supplement brands that make condition-specific claims.

If your business sits in the gray area between general wellness and direct medical care, you’re likely here.

### Tier 3: Full-Restricted Properties

Tier 3 is the most severe classification, and it essentially removes Meta’s algorithmic advantage from the equation entirely.

**What’s blocked at Tier 3:**

No conversion tracking of any kind.

No algorithmic optimization.

No retargeting from pixel data.

Reporting in Events Manager is stripped to the bare minimum. You’re forced into broad demographic targeting with no ability to leverage Meta’s machine learning to find your best audience.

At this tier, Meta ads become a pure awareness play.

You can show ads to broad audiences, but you have almost no ability to measure what happens after someone clicks, optimize toward meaningful actions, or build audiences based on website behavior.

**Who gets placed in Tier 3:**

Patient portal services, prescription drug sellers, condition-specific medical practices (think “knee replacement surgeon” or “diabetes management clinic”), healthcare providers with authenticated patient relationships, and mental health platforms that handle patient data.

If your website involves any kind of patient login, medical record access, or condition-specific treatment, expect to land here.

## How to Check Your Restriction Tier

Meta doesn’t send you a notification that says “you’ve been placed in Tier 2.” The signs are more subtle, and you’ll usually notice them in one of three places:

1. **In Events Manager:** Look at your pixel’s event tracking. If events you previously tracked — like Purchase or Lead — are no longer firing or are grayed out, that’s a strong indicator of Tier 2 or 3 restrictions. You may also see warnings or notices about “restricted data” or “health and wellness” classifications on your pixel overview page.
2. **In Ads Manager:** When building a campaign, check your optimization options. If you can no longer select “Conversions” as a campaign objective with your usual conversion events, or if your event dropdown is missing events that were previously available, your property has been restricted.
3. **In your audience tools:** If custom audiences you’ve been using suddenly show significantly reduced sizes, or if Meta flags specific audiences as containing “sensitive” data, your account is being affected by these restrictions.

The most reliable check is to go directly to Events Manager, select your pixel, and look for any banners or notices about health and wellness data restrictions. Meta has been adding these notices, though they’re not always prominent.

## What to Do If You’ve Been Incorrectly Flagged

Meta’s automated classification system isn’t perfect.

Fitness brands get flagged as medical providers.

Wellness coaches get lumped in with prescription drug sellers.

If you believe your property has been placed in a more restrictive tier than it should be, here’s what to do.

**Step 1: Document your case.** Before you file anything, get clear on why you believe the classification is wrong. Be specific: “We sell fitness coaching programs, not medical services. We do not collect patient data, handle prescriptions, or treat medical conditions.” The more concrete you can be about what your business does and doesn’t do, the stronger your appeal.

**Step 2: Submit a request through Meta Business Help.** Go to Meta Business Help Center and file a request for review of your data restriction classification. Include your pixel ID, a description of your business, and your argument for why the current classification doesn’t fit. You can also reach out through your Meta Business representative if you have one — this tends to move faster.

**Step 3: Set realistic expectations.** Meta’s review process is not fast. Expect weeks, not days. During this time, your restrictions remain in place, so you’ll need to adapt your campaigns to work within your current tier while you wait.

**Step 4: Adapt in the meantime.** Don’t pause your advertising while waiting for a review. Shift your campaigns to work within your current restrictions — run traffic campaigns, focus on upper-funnel metrics, and use the workarounds described in the next section. You can always scale back up once your classification is corrected.

**Step 5: Monitor for re-classification.** Even if you win your appeal, Meta’s automated systems may re-flag your property in the future, especially if you make changes to your website or add new content that triggers their health-related classifiers. Keep an eye on your Events Manager for any new restriction notices.

## How to Adapt Your Strategy

Whether you’ve been correctly classified or you’re waiting on an appeal, you need a strategy that works within your restriction tier. Here’s what’s working for healthcare advertisers right now.

**Shift to upper-funnel optimization.** If you’ve lost access to Purchase or Lead optimization, shift your campaigns to optimize for Traffic or Landing Page Views. Yes, this means Meta’s algorithm has less signal to work with, but it’s better than not running campaigns at all. Pair this with strong landing page experiences and robust follow-up sequences (email, SMS, phone) to convert the traffic you’re driving.

**Restructure your conversion events.** Audit which events are still available to you and build your campaign strategy around them. If ViewContent still works, make sure it’s firing correctly on your key pages and optimize toward it. The goal is to give Meta’s algorithm whatever signal you’re still allowed to pass.

**Clean up your audiences proactively.** Meta has been scanning and disabling custom audiences that contain sensitive health-related traits. Go through your existing audiences and remove any that reference conditions, symptoms, medications, or other health-specific terms. It’s better to rebuild them with compliant data than to have Meta disable them without warning.

**Leverage server-side CAPI configurations carefully.** The Conversions API gives you more control over what data gets sent to Meta compared to the browser-based pixel. Work with your development team to configure CAPI in a way that maximizes the data you’re allowed to send while staying within your tier’s restrictions. This won’t override your tier, but it can help you get more value out of the data you’re still permitted to share.

**Diversify beyond Meta.** This is the most important long-term takeaway. If Meta’s restrictions are significantly limiting your healthcare advertising, it’s time to invest in channels that aren’t subject to the same constraints. Google Ads, programmatic display, connected TV, and organic content strategies all offer ways to reach healthcare audiences without the same data restrictions. Don’t put all your eggs in a basket that keeps getting smaller.

**Budget for higher costs.** Advertisers in Tier 2 and Tier 3 should expect to spend 20–40% more to maintain the same volume of appointments or leads they were getting before. Without lower-funnel optimization, your cost per acquisition will rise. Factor this into your planning rather than being surprised by it.

## Conclusion

Meta’s three-tier restriction system for healthcare advertisers is not a temporary inconvenience — it’s the new landscape. These restrictions have been expanding since early 2025, and all signs point to further tightening through 2026, with additional conversion events likely to be restricted.

The healthcare advertisers who will come out ahead are the ones who understand their tier, adapt their strategy to work within it, appeal incorrect classifications promptly, and diversify their marketing mix so they’re not dependent on any single platform’s rules.

If your campaigns have been underperforming and you weren’t sure why, now you know where to look. Check your Events Manager, assess your tier, and start building a strategy that accounts for these restrictions rather than fighting against them.

## book a time with us

Schedule A Call

Budget

My Monthly Marketing Budget Is <$1000/mo $1000 - $5000 $5000 - $15000 $15000+

Message

SCHEDULE A CALL

Important Links

* [About](https://sagapixel.com/industries/)
* [Careers](https://www.linkedin.com/company/12khz-seo-web-design-ppc/jobs/)
* [privacy policy & disclaimer](https://sagapixel.com/privacy-policy/)
* [html sitemap](https://sagapixel.com/html-sitemap/)

A few of the industries we serve:

* [Plastic surgery marketing agency](https://sagapixel.com/plastic-surgery-marketing-agency/)
* [Dermatology marketing agency](https://sagapixel.com/dermatologists/)
* [Med spa marketing agency](https://sagapixel.com/medspa-marketing-agency/)
* [Home care marketing agency](https://sagapixel.com/home-care-marketing-agency/)

All rights reserved.

[Facebook](https://www.facebook.com/sagapixel) [Youtube](https://www.youtube.com/@sagapixel) [Linkedin](https://www.linkedin.com/company/12khz-seo-web-design-ppc/) [Instagram](https://www.instagram.com/SagaPixel/)

[](https://www.semrush.com/agencies/sagapixel-seo/)

Sagapixel is a Google Premier Partner:

[](https://www.google.com/partners/agency?id=1115618496)

Schedule a call with us