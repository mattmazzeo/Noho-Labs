# Claude Code Bootstrap Prompt

Copy-paste this entire prompt into a new Claude Code session in any project repository. Claude will analyze your codebase and set up the complete configuration automatically.

---

## The Prompt

```
I need you to set up a complete Claude Code configuration for this project. This is a one-time setup to make you a persistent, context-aware AI teammate instead of a generic assistant.

## Step 1: Analyze the codebase

Before creating anything, thoroughly explore:
- The full directory structure
- package.json / config files to understand the tech stack
- Key source files to understand architecture and patterns
- Existing tests to understand testing patterns
- Any existing AI config files (.cursorrules, .github/copilot-instructions.md, etc.)
- .gitignore to understand what's excluded

## Step 2: Create the configuration

Based on your analysis, create ALL of the following:

### 2a. CLAUDE.md (project root)
Project-specific context containing:
- Tech stack with versions
- Architecture overview and directory structure
- Available npm/build/test commands
- Code conventions you observed (naming, patterns, organization)
- Key files and what they do
- Any important architectural decisions evident from the code
- Use @path/to/file imports for any existing docs worth referencing

Keep it CONCISE. Only include things you couldn't infer from the code. Each line should prevent a mistake.

### 2b. .claude/rules/ (path-scoped rules)
Create separate rule files for each major technology/area in the project. Each file must have `paths:` frontmatter scoping it to relevant file patterns.

Examples of rules to create based on what you find:
- TypeScript rules for *.ts, *.tsx files
- React/component rules for component directories
- API/backend rules for server code
- Test rules for *.test.ts, *.spec.ts files
- Styling rules if using Tailwind/CSS-in-JS
- Database/ORM rules if applicable

Make rules SPECIFIC to this codebase's patterns, not generic boilerplate.

### 2c. .claude/commands/ (custom slash commands)
Create these markdown files:

**review.md** — Full codebase audit:
- Type safety, accessibility, performance, responsiveness
- Run lint and build to verify no errors
- Report: file:line — issue — fix — severity

**catchup.md** — Context reload after /clear:
- Read all uncommitted changes and recent modifications
- Summarize current state, incomplete work, next steps

**commit.md** — Smart commit workflow:
- Review changes, run lint + build, fix errors
- Create conventional commit message (feat/fix/refactor/etc.)
- Support $ARGUMENTS for custom message guidance

**handoff.md** — End-of-session brain dump:
- What was accomplished, current state, in-progress work
- What was tried but didn't work, recommended next steps
- Write to CLAUDE.local.md session notes section

**improve.md** — Proactive analysis:
- Performance, accessibility, design, code quality, UX
- Prioritize by user-visible impact
- Support $ARGUMENTS for targeting specific areas

### 2d. .claude/agents/ (custom subagents)
Create agents that make sense for this specific project. Common patterns:
- Code reviewer agent (read-only, checks quality/standards)
- Performance auditor agent (checks bundle, renders, lazy loading)
- Test writer agent (generates tests matching existing patterns)

Use this frontmatter format:
```yaml
---
name: agent-name
description: What this agent does (Claude uses this to decide when to invoke it)
tools: Read, Glob, Grep
model: sonnet
---
System prompt for the agent goes here.
```

### 2e. .claude/settings.json (permissions)
```json
{
  "permissions": {
    "allow": [
      "Read", "Glob", "Grep",
      "Bash(npm run *)", "Bash(npx *)",
      "Bash(git status*)", "Bash(git diff*)", "Bash(git log*)",
      "Bash(git branch*)", "Bash(git add *)", "Bash(git commit *)",
      "Bash(git checkout *)", "Bash(git stash*)",
      "Bash(git fetch*)", "Bash(git pull*)", "Bash(git push*)",
      "Bash(ls *)", "Bash(node *)", "Bash(which *)"
    ],
    "deny": [
      "Bash(rm -rf *)", "Bash(sudo *)",
      "Bash(git push --force*)", "Bash(git reset --hard*)",
      "Bash(git clean -f*)", "Read(.env*)"
    ]
  }
}
```

Adjust the allow list based on the project's actual tooling (yarn, pnpm, cargo, etc.).

### 2f. CLAUDE.local.md (gitignored template)
```markdown
# Session Notes

## Current Work
<!-- /project:handoff writes here -->

## Local Environment
<!-- Your local setup notes -->

## Experiments
<!-- Track experimental work -->
```

### 2g. Update .gitignore
Add these if not already present:
```
CLAUDE.local.md
.claude/settings.local.json
```

## Step 3: Verify

After creating everything:
1. Run `npm run lint` (or equivalent) to verify nothing broke
2. Run `npm run build` (or equivalent) to verify the project builds
3. Show me a summary of everything created with file paths

## Important constraints

- Make rules SPECIFIC to this project's actual patterns — don't create generic rules
- Keep CLAUDE.md under 100 lines — conciseness is critical
- Only create rules for technologies actually used in the project
- Agents should match the project's actual needs (don't create a "database agent" if there's no database)
- Commands should reference the project's actual lint/build/test commands
```

---

## After Running the Bootstrap

1. **Review what Claude created** — make sure the rules match your preferences
2. **Set up your global config** at `~/.claude/CLAUDE.md` with your personal identity and preferences (see the setup guide)
3. **Commit the shared files** — CLAUDE.md, .claude/settings.json, .claude/rules/, .claude/commands/, .claude/agents/
4. **Test the commands** — try `/project:review` and `/project:catchup`
5. **Iterate** — every time Claude makes a mistake, add a rule to prevent it

---

## Optional: Global Setup (One-Time, All Projects)

Before running the bootstrap, set up your global identity:

```bash
mkdir -p ~/.claude
```

Create `~/.claude/CLAUDE.md` with your personal preferences (coding style, communication preferences, quality standards). This loads in every project.

Create `~/.claude/settings.json` with your personal permission defaults.

---

*See docs/CLAUDE_CODE_SETUP_GUIDE.md for the full reference guide.*
