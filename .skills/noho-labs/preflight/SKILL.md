---
name: preflight
description: >
  Runs the full build and lint pipeline for the Noho Labs project (TypeScript type-check,
  Vite build, ESLint), identifies all errors and warnings, and fixes them. Use before
  pushing code, opening a PR, or whenever the user wants to verify the project is clean.
license: MIT
compatibility: Requires Node.js and npm installed with project dependencies.
metadata:
  author: noho-labs
  version: "1.0"
allowed-tools: Bash(npm:*) Bash(npx:*)
---

# Preflight

Run the full build + lint pipeline, identify issues, and fix them.

## Inputs

- **--fix-only** (optional): If provided, only run the fixable steps (eslint --fix) without the full build.

## Instructions

### 1. Verify dependencies

Ensure node_modules exists. If not:

```bash
npm install
```

### 2. Run TypeScript type-check

```bash
npx tsc -b --noEmit
```

Collect all type errors. For each error, note the file, line number, and error message.

### 3. Run Vite build

```bash
npm run build
```

This runs `tsc -b && vite build`. Collect any build errors beyond what TypeScript caught.

### 4. Run ESLint

```bash
npm run lint
```

Collect all lint warnings and errors.

### 5. Categorize issues

Group all issues into:

| Category | Source | Severity |
|----------|--------|----------|
| Type errors | `tsc` | Must fix |
| Build errors | `vite build` | Must fix |
| Lint errors | `eslint` | Must fix |
| Lint warnings | `eslint` | Should fix |

### 6. Fix issues

For each issue, starting with the most critical:

1. Read the file at the reported line.
2. Understand the error in context.
3. Apply the fix.
4. For ESLint auto-fixable issues, run `npx eslint --fix <file>` first.

### 7. Verify fixes

After all fixes, re-run the full pipeline:

```bash
npm run build && npm run lint
```

Repeat fix cycle if new issues appear (max 3 iterations).

### 8. Report

Output a summary:

```
Preflight complete.
  TypeScript:  0 errors
  Build:       success
  ESLint:      0 errors, 0 warnings
  Files fixed: N
```

If issues remain after 3 iterations:

```
Preflight incomplete — manual review needed.
  Remaining:   N issues
  Files:       list of affected files
```

List each remaining issue with file, line, and description.
