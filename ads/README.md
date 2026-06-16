# Noho Labs / Aluna — Paid Advertising Operations

This directory contains the full AI-powered advertising infrastructure for Noho Labs and Aluna Science. It is designed to be used with **Claude Code** (or any AI coding agent) connected to the **Meta Ads CLI/MCP** for programmatic campaign management.

## Quick Start

```bash
# 1. Install Meta Ads CLI
npm install -g @anthropic-ai/meta-ads-cli

# 2. Authenticate with your Meta Business account
meta auth login

# 3. Open Claude Code in this directory
# Claude Code auto-reads CLAUDE.md as its system prompt

# 4. Start managing campaigns with natural language
# See Claude_Code_Workflow_Playbook.md for exact prompts
```

## Directory Structure

```
ads/
├── CLAUDE.md                          ← System prompt for Claude Code
├── Claude_Code_Workflow_Playbook.md   ← Copy/paste prompts for campaign management
├── README.md                          ← This file
│
├── knowledge_base/                    ← Research, strategy, and competitive intel
│   ├── strategy/                      (Launch plan, pricing, roadmap)
│   ├── competitive_intel/             (30+ competitor profiles, traffic, ad analysis)
│   ├── creative/                      (25 ad scripts, 30 hooks, teardowns)
│   ├── compliance/                    (FDA, Meta policies, state licenses)
│   └── data/                          (Market sizing, audience, influencers)
│
├── dashboards/                        ← Ad performance dashboards (future)
│   └── (coming soon)
│
└── scripts/                           ← Automation scripts (future)
    └── (coming soon)
```

## What This Enables

| Capability | How |
|---|---|
| **Campaign Creation** | Tell Claude Code to build campaigns → it uses Meta CLI → creates in PAUSED state |
| **Daily Optimization** | Morning prompt pulls performance data, flags losers, proposes budget changes |
| **Creative Testing** | Reference the creative library to generate new ad variations |
| **Territory Expansion** | Update licensed states → Claude Code updates all ad set targeting |
| **Troubleshooting** | Ask Claude Code to diagnose CAC spikes, signal issues, creative fatigue |

## Future Additions

- [ ] Performance dashboard (React + Meta Marketing API)
- [ ] Automated daily reporting script (cron + CLI)
- [ ] Creative performance tracker (which hooks/scripts are winning)
- [ ] A/B test log and results database
- [ ] Webhook for Slack notifications on performance anomalies
- [ ] Multi-brand support (Aluna + Noho Labs campaigns)

## Brands

| Brand | Domain | Product | Ad Strategy |
|---|---|---|---|
| **Aluna** | alunascience.com | Injectable NAD+ (Rx, telehealth) | DTC, land-grab pricing, UGC + physician creative |
| **Noho Labs** | noholabs.com | Full peptide protocols (Sermorelin, stacks) | Premium positioning, education-first, cross-sell from Aluna |
