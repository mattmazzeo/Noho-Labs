# Aluna Ads Knowledge Base

This folder is designed to be loaded into Claude Code (or any AI coding agent) alongside the Meta Ads CLI/MCP. It gives the agent full context on your business, competitors, compliance rules, and creative strategy so it can manage your Meta Ads account intelligently.

## Setup Instructions

1. **Clone or download this folder** to your local machine (or upload to Google Drive for access across devices).
2. **Place `CLAUDE.md` in your project root.** Claude Code automatically reads `CLAUDE.md` as its system prompt when you open a project.
3. **Connect the Meta Ads CLI:**
   ```bash
   npm install -g @anthropic-ai/meta-ads-cli
   meta auth login
   ```
4. **Open Claude Code in this directory.** It will automatically load the CLAUDE.md and have access to all knowledge base files.
5. **Start with the Workflow Playbook.** Open `Claude_Code_Workflow_Playbook.md` and copy/paste the prompts for your current phase.

## Folder Structure

```
aluna_knowledge_base/
├── CLAUDE.md                          ← System prompt (put in project root)
├── Claude_Code_Workflow_Playbook.md   ← Exact prompts to use in Claude Code
├── README.md                          ← This file
│
├── strategy/                          ← Business strategy & pricing
│   ├── Aluna_Meta_Ads_Launch_Strategy.md    (Full launch plan, geo-rollout, budgets)
│   ├── pricing_model.md                      (Pharmacy COGS, margin analysis)
│   └── strategic_matrix.md                   (SWOT, 90-day roadmap, budget model)
│
├── competitive_intel/                 ← Competitor research
│   ├── Noho_Labs_Aluna_Complete_Market_Intelligence_Report.md  (Master report)
│   ├── meta_ads_competitive_landscape.md     (Ad Library analysis)
│   ├── meta_ads_quantitative.md              (Ad volume, spend estimates)
│   ├── system_labs_analysis.md               (Direct competitor deep-dive)
│   ├── traffic_analysis.md                   (Similarweb data, 15 competitors)
│   └── funnel_teardowns.md                   (Conversion architecture analysis)
│
├── creative/                          ← Ad scripts, hooks, and creative strategy
│   ├── Aluna_Creative_Testing_Library.md     (Original 5 scripts)
│   ├── Aluna_Creative_Library_Expanded.md    (20 additional scripts + 30 hooks)
│   └── creative_teardowns.md                 (Competitor creative analysis)
│
├── compliance/                        ← Regulatory and policy rules
│   ├── regulatory_landscape.md               (FDA status by compound, Meta tiers)
│   └── licensing_analysis.md                 (State pharmacy licenses, rollout timeline)
│
└── data/                              ← Market data and audience research
    ├── market_sizing.md                      (TAM, Google Trends, growth data)
    ├── audience_psychographics.md            (Reddit analysis, customer personas)
    └── influencer_ecosystem.md               (50+ influencer targets with costs)
```

## How Claude Code Uses This

When you open Claude Code in this directory with the Meta CLI connected, it can:

- **Read any file** in this knowledge base for context before making decisions
- **Reference compliance rules** before creating ads (geo-targeting, age-gating, language)
- **Pull competitor data** to inform creative strategy and positioning
- **Follow the pricing model** to ensure ad copy reflects correct prices
- **Use the creative library** to generate new ad variations based on proven frameworks
- **Execute the workflow playbook** prompts for daily, weekly, and monthly operations

## Keeping It Updated

As your campaign evolves, update these files:
- Add new licensed states to `compliance/licensing_analysis.md` and update `CLAUDE.md`
- Add winning ad scripts to `creative/` when you find new performers
- Update `strategy/pricing_model.md` if pricing changes
- Add new competitor intelligence to `competitive_intel/` as you discover it
