# Claude Code Setup Guide — Noho Labs Engineering

This guide covers how to configure Claude Code to be a true AI extension of yourself, not just a reactive chatbot. Follow it end-to-end and you'll go from "hey Claude, fix this bug" to having a persistent, context-aware AI teammate that knows your codebase, your standards, and your preferences.

---

## Table of Contents

1. [The Mental Model](#the-mental-model)
2. [The Memory Hierarchy](#the-memory-hierarchy)
3. [Setting Up Your Global Config](#1-global-config-claude)
4. [Setting Up Your Project Config](#2-project-config)
5. [Path-Scoped Rules](#3-path-scoped-rules)
6. [Custom Slash Commands](#4-custom-slash-commands)
7. [Custom Subagents](#5-custom-subagents)
8. [Permissions & Safety](#6-permissions--safety)
9. [MCP Servers](#7-mcp-servers-external-tools)
10. [Hooks](#8-hooks-deterministic-automation)
11. [Workflow Patterns](#9-workflow-patterns-that-compound)
12. [The Bootstrap Prompt](#10-the-bootstrap-prompt)

---

## The Mental Model

Stop thinking of Claude Code as a chatbot. Think of it as a **system** you configure:

| Layer | Analogy | What It Does |
|-------|---------|--------------|
| `CLAUDE.md` | Brain | Persistent knowledge about you, your project, your standards |
| `.claude/rules/` | Instincts | Context-specific rules that activate only when relevant |
| `.claude/commands/` | Muscle memory | Repeatable workflows you trigger with `/command` |
| `.claude/agents/` | Specialists | Domain experts you delegate to for focused work |
| `settings.json` | Immune system | Permissions and safety guardrails |
| Hooks | Reflexes | Deterministic actions that always happen (formatting, linting) |
| MCP Servers | Senses | Connections to external tools (GitHub, Figma, databases) |

The core principle: **Claude gets smarter the more you configure it.** Every correction you make should become a rule. Every workflow you repeat should become a command. Every specialist task should become an agent.

---

## The Memory Hierarchy

Claude Code loads context from multiple locations, in order. All levels are additive — they stack, they don't replace.

```
┌──────────────────────────────────────────────────┐
│  ~/.claude/CLAUDE.md          (YOU — all projects)│
│  Your identity, preferences, communication style  │
├──────────────────────────────────────────────────┤
│  ./CLAUDE.md                  (PROJECT — shared)  │
│  Architecture, stack, conventions, commands        │
├──────────────────────────────────────────────────┤
│  .claude/rules/*.md           (RULES — conditional)│
│  Path-scoped rules that load only when relevant    │
├──────────────────────────────────────────────────┤
│  ./CLAUDE.local.md            (YOU — this project) │
│  Personal overrides, session notes (gitignored)    │
├──────────────────────────────────────────────────┤
│  Auto Memory                  (CLAUDE — automatic) │
│  Claude's own notes at ~/.claude/projects/<hash>/  │
└──────────────────────────────────────────────────┘
```

**Key insight:** Global (`~/.claude/CLAUDE.md`) loads in EVERY project. This is where your identity goes. Project `CLAUDE.md` loads for this repo only. This is where architecture goes. `CLAUDE.local.md` is gitignored — for your personal session notes.

---

## 1. Global Config (`~/.claude/`)

This is YOUR identity as an engineer. It follows you across every project.

### Create `~/.claude/CLAUDE.md`

```markdown
# My Engineering Preferences

## Who I Am
- [Your role, what you're building, your context]

## Code Preferences
- TypeScript strict mode, always
- Functional components with hooks
- Tailwind CSS for styling
- ESM modules, never CommonJS
- Named exports over default exports
- Keep files under 300 lines

## Communication Style
- Be direct and concise
- Show code over describing code
- Challenge my assumptions when you see a better path
- If something will break, lead with that

## Quality Standards
- IMPORTANT: Every component must be responsive (mobile-first)
- IMPORTANT: Accessibility matters — semantic HTML, ARIA labels
- IMPORTANT: Performance matters — lazy load, code split
- Never ship placeholder content

## Learning
- When I correct you, remember it permanently
- When a pattern works well, note it for reuse
- Proactively flag when current work contradicts past preferences
```

**Why this matters:** Without this file, Claude starts every session as a generic assistant. With it, Claude starts as YOUR assistant.

### Create `~/.claude/settings.json`

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Bash(npm run *)",
      "Bash(npx *)",
      "Bash(git status*)",
      "Bash(git diff*)",
      "Bash(git log*)",
      "Bash(git branch*)",
      "Bash(git add *)",
      "Bash(git commit *)",
      "Bash(git stash*)",
      "Bash(git fetch*)",
      "Bash(git pull*)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(sudo *)",
      "Bash(git push --force*)",
      "Bash(git reset --hard*)"
    ]
  }
}
```

---

## 2. Project Config

### `./CLAUDE.md` (checked into git, shared with team)

This is your project's brain. It should contain everything Claude can't infer from the code itself.

```markdown
# Project Name

## Tech Stack
- Framework, build tool, styling, key libraries

## Architecture
- Directory structure (what lives where)
- Key files and their purpose
- Routing structure

## Commands
- `npm run dev` — Start dev server
- `npm run build` — TypeScript check + build
- `npm run lint` — Linting
- `npm run test` — Run tests

## Conventions
- [Naming patterns, file organization, import rules]
- [Testing requirements]
- [PR/commit message format]

## Important Files
- @DESIGN_PREFERENCES.md (use @ to import other docs)
- @docs/API_REFERENCE.md
```

**Pro tip:** Use the `@path/to/file` syntax to import other documents. This lets you keep CLAUDE.md concise while referencing detailed docs. Up to 5 levels of recursive imports supported.

### `./CLAUDE.local.md` (gitignored, personal)

```markdown
# Session Notes
<!-- Updated by /project:handoff command at end of each session -->

## Current Work
- Working on feature X, branch Y
- Left off at: [description]

## Local Environment
- Dev server on port 5173
- Using Node v22
```

---

## 3. Path-Scoped Rules

Rules in `.claude/rules/` are the secret weapon. Instead of stuffing everything into CLAUDE.md, you create focused rule files that only load when Claude is working on matching files.

### Directory structure

```
.claude/rules/
  typescript.md          # Loads for *.ts, *.tsx files
  react-components.md    # Loads for src/components/**/*.tsx
  api-routes.md          # Loads for src/api/**/*.ts
  testing.md             # Loads for **/*.test.ts, **/*.spec.ts
  styling.md             # Loads for files using Tailwind
```

### Format

```markdown
---
paths:
  - "src/components/**/*.tsx"
  - "src/hooks/**/*.ts"
---
# React Rules

- Every component must be a named export
- Props interface named `{ComponentName}Props`
- Use `AnimatedSection` wrapper for scroll-triggered content
- Mobile-first: start with mobile layout, then add `md:` and `lg:` breakpoints
```

**Rules without `paths:` load every session.** Rules with `paths:` load only when Claude works on matching files.

**Why this matters:** A monorepo with backend, frontend, and infra code can have rules for each. When Claude is editing a React component, it gets React rules. When editing a database migration, it gets SQL rules. No wasted context.

---

## 4. Custom Slash Commands

Commands are saved prompts you invoke with `/project:command-name`. They live in `.claude/commands/` as markdown files.

### Must-have commands

**`/project:review`** — Full codebase audit
```markdown
<!-- .claude/commands/review.md -->
Review the current changes for: type safety, design compliance,
accessibility, performance, responsiveness, animation quality,
and code organization.

Run `npm run lint` and `npm run build` to verify no errors.

For each issue: file:line — what's wrong — how to fix — severity.

$ARGUMENTS
```

**`/project:catchup`** — Reload context after `/clear`
```markdown
<!-- .claude/commands/catchup.md -->
Read all uncommitted changes and recently modified files.
Summarize: what's changed, what's incomplete, current branch,
and suggest next steps. This is a context reload.
```

**`/project:commit`** — Smart commit workflow
```markdown
<!-- .claude/commands/commit.md -->
Review changes, run lint + build, fix any errors,
then create a commit with conventional message format.
$ARGUMENTS
```

**`/project:handoff`** — End-of-session brain dump
```markdown
<!-- .claude/commands/handoff.md -->
Create a handoff doc: what was accomplished, current state,
what's in progress, what was tried, recommended next steps.
Write to CLAUDE.local.md session notes section.
```

**`/project:improve`** — Proactive analysis
```markdown
<!-- .claude/commands/improve.md -->
Analyze the specified area and suggest improvements:
performance, accessibility, design, code quality, UX polish.
Prioritize by user-visible impact.
$ARGUMENTS
```

### How `$ARGUMENTS` works

Whatever you type after the command name becomes `$ARGUMENTS`:
```
/project:review the Hero section accessibility
```
Claude receives the full prompt with "the Hero section accessibility" replacing `$ARGUMENTS`.

---

## 5. Custom Subagents

Subagents are specialists that run in their own context window. They're perfect for tasks that need focused expertise without polluting your main conversation.

### Create `.claude/agents/design-reviewer.md`

```yaml
---
name: design-reviewer
description: Reviews components for design system compliance and accessibility
tools: Read, Glob, Grep
model: sonnet
---
You are a design system reviewer. Read DESIGN_PREFERENCES.md and
the shared components, then audit the specified files for:
design token compliance, shared component usage, animation quality,
visual hierarchy, responsive design, accessibility, dark mode consistency.
```

### Create `.claude/agents/performance-auditor.md`

```yaml
---
name: performance-auditor
description: Audits for performance issues, bundle size, rendering efficiency
tools: Read, Glob, Grep, Bash
model: sonnet
---
You are a React performance specialist. Check for:
unnecessary re-renders, bundle size issues, animation performance,
missing lazy loading, code splitting opportunities.
```

Claude automatically uses these agents when the task matches their description. You can also explicitly request them: "Use the design-reviewer agent to check VariationA."

---

## 6. Permissions & Safety

### `.claude/settings.json` (checked into git)

```json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Bash(npm run *)",
      "Bash(npx *)",
      "Bash(git status*)",
      "Bash(git diff*)",
      "Bash(git log*)",
      "Bash(git branch*)",
      "Bash(git add *)",
      "Bash(git commit *)",
      "Bash(git checkout *)",
      "Bash(git stash*)",
      "Bash(git fetch*)",
      "Bash(git pull*)",
      "Bash(git push*)",
      "Bash(ls *)",
      "Bash(node *)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(sudo *)",
      "Bash(git push --force*)",
      "Bash(git reset --hard*)",
      "Bash(git clean -f*)",
      "Read(.env*)"
    ]
  }
}
```

**Deny rules are absolute** — they can never be overridden by allow rules at any level.

### `.claude/settings.local.json` (gitignored, personal)

```json
{
  "permissions": {
    "allow": [
      "Bash(docker *)",
      "Bash(aws *)"
    ]
  },
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

---

## 7. MCP Servers (External Tools)

MCP (Model Context Protocol) connects Claude to external services. Configure in `~/.claude.json` (user) or `.mcp.json` (project).

### Recommended MCP servers

| Server | Why |
|--------|-----|
| **Context7** | Live library docs instead of stale training data |
| **Playwright** | Visual verification — Claude can screenshot and inspect your pages |
| **GitHub** | Manage PRs, issues, branches without leaving the terminal |
| **Figma** | Read designs directly from Figma files |
| **Sentry** | Debug production errors with full stack traces |

### Example: `.mcp.json` (project root, checked in)

```json
{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@context7/mcp-server"]
    }
  }
}
```

### Example: `~/.claude.json` (user-level, for API keys)

```json
{
  "mcpServers": {
    "github": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "${GITHUB_TOKEN}" }
    }
  }
}
```

---

## 8. Hooks (Deterministic Automation)

Hooks are commands/prompts that execute automatically at specific lifecycle points. Unlike CLAUDE.md instructions (advisory), hooks are **guaranteed to run**.

### Add to `settings.json`

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write \"$TOOL_INPUT_FILE_PATH\" 2>/dev/null || true",
            "statusMessage": "Formatting..."
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "npx tsc --noEmit 2>&1 | tail -20",
            "statusMessage": "Type checking..."
          }
        ]
      }
    ]
  }
}
```

### Common hook patterns

| Hook Event | Use Case |
|------------|----------|
| `PostToolUse` on `Write\|Edit` | Auto-format with Prettier after every file change |
| `Stop` | Run type checker after every Claude response |
| `PreToolUse` on `Bash` | Block dangerous commands |
| `SessionStart` | Verify project builds, install deps |

---

## 9. Workflow Patterns That Compound

### Pattern 1: The Handoff Loop
```
[Work session] → /project:handoff → /clear → [New session] → /project:catchup → [Continue]
```
Never lose context between sessions. The handoff writes to `CLAUDE.local.md`, and catchup reads it back.

### Pattern 2: Autonomous Completion
Instead of:
> "Add a contact form"

Say:
> "Add a contact form. Iterate until: the build passes with zero errors, lint shows no warnings, it's responsive from 375px to 1440px, and all interactive elements have proper focus states."

This triggers Claude's autonomous loop — it'll keep fixing issues until your criteria are met.

### Pattern 3: Parallel Agents
Run multiple Claude Code sessions in tmux/iTerm2:
- **Session 1:** Building new feature on branch `feature-x`
- **Session 2:** Writing tests for existing code
- **Session 3:** Doing a design review with `/project:review`

Or enable Agent Teams (`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`) for coordinated multi-agent work.

### Pattern 4: Build Your CLAUDE.md from Mistakes
Every time Claude does something wrong:
1. Correct it
2. Add a rule to prevent it from happening again
3. Choose the right place: CLAUDE.md (always), rules/ (conditional), hook (guaranteed)

Your config should grow organically from real failures, not hypothetical ones.

### Pattern 5: Context Window Hygiene
- Run `/context` to check usage mid-session
- At 50-70% context: be attentive, focus tasks
- At 70%+: run `/project:handoff` then `/clear`
- **Never** let context hit 90% — hallucinations spike

---

## 10. The Bootstrap Prompt

Copy-paste this into a new Claude Code session in any project to have Claude set up the entire configuration for you:

```
I need you to set up a complete Claude Code configuration for this project.
Analyze the codebase first, then create:

1. A CLAUDE.md at the project root with: tech stack, architecture, directory
   structure, available commands, and conventions you can infer from the code.

2. Path-scoped rules in .claude/rules/ for each major technology/area in the
   project. Use `paths:` frontmatter to scope them to relevant file patterns.

3. Custom commands in .claude/commands/:
   - review.md — full codebase audit (types, a11y, perf, responsive)
   - catchup.md — reload context after /clear
   - commit.md — lint + build + smart commit
   - handoff.md — end-of-session brain dump to CLAUDE.local.md
   - improve.md — proactive improvement suggestions

4. A .claude/settings.json with sensible permissions:
   - Allow: read tools, npm/git commands
   - Deny: rm -rf, sudo, force push, hard reset, reading .env files

5. A CLAUDE.local.md template for personal session notes (gitignored).

6. Update .gitignore to exclude CLAUDE.local.md and .claude/settings.local.json.

Read every file in the project before generating anything. Make rules specific to
what you find, not generic boilerplate. The CLAUDE.md should be concise — only
include things you couldn't infer from the code itself.
```

---

## Quick Reference

### File Locations

| File | Location | Shared? | Purpose |
|------|----------|---------|---------|
| `CLAUDE.md` | `~/.claude/` | Personal | Your identity (all projects) |
| `CLAUDE.md` | Project root | Team | Project architecture & conventions |
| `CLAUDE.local.md` | Project root | No (gitignored) | Personal session notes |
| `settings.json` | `.claude/` | Team | Permissions & hooks |
| `settings.local.json` | `.claude/` | No (gitignored) | Personal permission overrides |
| `rules/*.md` | `.claude/rules/` | Team | Path-scoped coding rules |
| `commands/*.md` | `.claude/commands/` | Team | Custom slash commands |
| `agents/*.md` | `.claude/agents/` | Team | Custom subagent specialists |
| `.mcp.json` | Project root | Team | MCP server config (no secrets) |
| `.claude.json` | `~/` | Personal | MCP servers with API keys |

### Essential Slash Commands

| Command | What It Does |
|---------|--------------|
| `/init` | Generate starter CLAUDE.md from your codebase |
| `/context` | Check context window usage |
| `/clear` | Clear context, start fresh |
| `/compact` | Summarize conversation to free context |
| `/project:review` | Full codebase audit |
| `/project:catchup` | Reload context from uncommitted work |
| `/project:commit` | Smart lint + build + commit |
| `/project:handoff` | End-of-session brain dump |
| `/project:improve` | Proactive improvement suggestions |

### The Golden Rule

**If Claude makes a mistake twice, it's your config's fault, not Claude's.** Add a rule, add a hook, or refine your CLAUDE.md. Your setup should learn from every failure and compound over time.

---

*Last updated: February 2026*
