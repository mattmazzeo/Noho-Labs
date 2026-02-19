Review all staged and unstaged changes, then create a well-structured commit:

1. Run `git status` and `git diff` to understand all changes
2. Run `npm run lint` and `npm run build` to verify no errors
3. If there are lint or build errors, fix them before committing
4. Group related changes logically — don't mix unrelated changes in one commit
5. Write a commit message following this format:
   - Type prefix: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`
   - Concise subject line (under 72 characters)
   - Blank line, then body explaining WHY, not WHAT
6. Stage the appropriate files (avoid staging unrelated changes)
7. Create the commit

If $ARGUMENTS is provided, use it as guidance for the commit message.

$ARGUMENTS
