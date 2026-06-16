# Aluna Meta Ads: Claude Code Workflow Playbook

This playbook contains the exact natural language prompts you should copy and paste into Claude Code (running the Meta Ads CLI) to manage your Aluna campaigns. Because Claude Code has access to the `CLAUDE.md` system prompt and your knowledge base, it understands your business logic, margins, and compliance rules.

## Phase 1: Campaign Creation (Launch Day)

When your landing pages and creatives are ready, use this prompt to have Claude Code build your entire initial campaign structure.

**Prompt to copy/paste into Claude Code:**
> "I am ready to launch the Aluna injectable NAD+ campaigns. Based on the CLAUDE.md guidelines and the geo-rollout plan in the knowledge base, please use the Meta CLI to create our initial campaign structure. 
> 
> 1. Create a campaign called 'Aluna - Sandbox - Wave 1 States'. Set the objective to Conversions/Purchases.
> 2. Inside this campaign, create two ad sets:
>    - Ad Set 1: 'Broad - Men 30-55 - Wave 1'. Target only men ages 30-55 in AZ, CO, UT, MT, ID, WI, WY, NM, FL, NY, OK. Set daily budget to $50.
>    - Ad Set 2: 'Broad - Women 30-55 - Wave 1'. Target only women ages 30-55 in the same states. Set daily budget to $50.
> 3. For both ad sets, ensure the audience is restricted to 18+ for compliance.
> 4. Create placeholder ads in these ad sets for Scripts 1, 2, 3, 4, and 5 from our creative library.
> 5. Ensure everything is created in a PAUSED state.
> 
> Please output a summary of what you are going to build, wait for my confirmation, and then execute the API calls."

---

## Phase 2: Daily Optimization (The "Morning Coffee" Routine)

Run this prompt every morning to have Claude act as your media buyer, analyzing yesterday's data and making tactical adjustments.

**Prompt to copy/paste into Claude Code:**
> "Good morning. Please pull a performance report for all active Aluna campaigns over the last 3 days. 
> 
> Analyze the data based on our optimization rules in CLAUDE.md:
> 1. Identify any ads in the Sandbox campaign with a CTR below 0.8% or a CPM above $25 that have spent at least $50. Propose pausing them.
> 2. Identify any winning ads (CAC under $150, strong spend allocation from the algorithm). Propose graduating them to the Scale campaign.
> 3. Check the Scale campaign for creative fatigue (frequency > 3.5 and declining CTR).
> 
> Give me a bulleted summary of your findings and the specific CLI commands you propose running. Wait for my 'approved' before executing any changes."

---

## Phase 3: Scaling Winners (Bi-Weekly)

When you find an ad that works, you need to scale its budget without resetting Meta's learning phase. Claude handles this delicate math for you.

**Prompt to copy/paste into Claude Code:**
> "Let's review the 'Aluna - Scale' campaign. Please identify the top 3 performing ad sets based on the lowest Cost Per Purchase over the last 7 days. 
> 
> For any ad set that is consistently acquiring customers below our $150 CAC target, prepare a CLI command to increase its daily budget by 20%. Do not increase budgets on ad sets that have been adjusted in the last 48 hours.
> 
> Show me the current budget, the proposed new budget, and the recent CAC for each before executing."

---

## Phase 4: Creative Refresh (Weekly)

When performance dips, it's usually because the audience is tired of seeing the same videos. Use this prompt to cycle in new variations.

**Prompt to copy/paste into Claude Code:**
> "Our frequency is creeping up and performance is dipping on our winning 'Skeptic Convert' ad. We need to test new hook variations.
> 
> Please review the Hook Variations Bank in our creative library document. Select 3 new 'Price Disruption' hooks and 2 new 'Symptom-First' hooks. 
> 
> Then, use the CLI to create 5 new ads in our Sandbox campaign using these new hooks as the primary text/headline variations. Set them to PAUSED so I can upload the corresponding video files in Ads Manager later."

---

## Phase 5: Expanding Territories (As Licenses Clear)

As your pharmacy gets licensed in new states (e.g., Texas, California), you need to update your targeting.

**Prompt to copy/paste into Claude Code:**
> "Our pharmacy license just cleared for Texas, Washington, and Nevada. 
> 
> Please use the CLI to update all active ad sets in both the Sandbox and Scale campaigns. Add TX, WA, and NV to the existing geographic targeting. 
> 
> Because we are expanding our audience size significantly, please also prepare a command to increase the daily budget on all active ad sets by 15% to capture this new volume. Show me the summary before executing."

---

## Troubleshooting & Diagnostics

If performance suddenly drops and you don't know why, let Claude diagnose the account.

**Prompt to copy/paste into Claude Code:**
> "Our blended CAC spiked over the last 48 hours. Please run a full diagnostic on the account using the CLI.
> 
> 1. Check signal health and Conversions API status. Are events tracking correctly?
> 2. Look for delivery anomalies—did CPMs spike suddenly in a specific demographic or state?
> 3. Did any of our top-spending ads suddenly stop getting reach?
> 
> Give me a hypothesis for why performance dropped and 3 actionable steps we can take to fix it."
