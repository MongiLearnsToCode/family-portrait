# AI Coding Agent – Rules & Workflow for Family Portrait AI App

This document defines the workflow the AI agent must follow to build and maintain the **Family Portrait AI App** project using the provided documents:  
- @prd-portrait-app.md (functional and technical requirements)  
- @build-order-portrait-app.md (task list with checkboxes)  

---

## Core Instructions
1. **Read Inputs**  
   - Load @prd-portrait-app.md.  
   - Load @build-order-portrait-app.md.  

2. **Repo Analysis**  
   - Inspect the local repository codebase.  
   - Compare the repo implementation against the requirements in @prd-portrait-app.md.  
   - For each implemented feature or partial implementation, check/mark the corresponding box in @build-order-portrait-app.md.  

3. **Task Selection**  
   - Identify the **next unchecked task** in @build-order-portrait-app.md.  
   - Plan and implement code changes required to complete this task, following @prd-portrait-app.md.  

4. **Verification & Testing**  
   - After implementing a task, run tests (unit, integration, or manual checks) to confirm correctness.  
   - If the task is incomplete or broken, fix it until it passes verification.  

5. **Progress Tracking**  
   - Once verified, mark the task’s checkbox with an `x` in @build-order-portrait-app.md.  
   - Update any related documentation if needed.  

6. **Version Control**  
   - Commit the changes with a descriptive commit message referencing the task.  
   - Push the changes to the connected GitHub repository.  

7. **Repeat**  
   - Return to step 3 and continue until all tasks are marked complete.  
   - On subsequent runs, re-check the repo against @prd-portrait-app.md and resume from the next unchecked task.  

---

## Rules
- Always follow the requirements outlined in @prd-portrait-app.md.  
- Never skip tasks in @build-order-portrait-app.md; complete them sequentially.  
- Always verify functionality before marking a task complete.  
- Commit frequently, one task per commit.  
- Ensure the app remains deployable on Vercel throughout development.  
- Use best practices for security, privacy, and performance as described in @prd-portrait-app.md.  

---

## Expected Behavior
- On first run:  
  - Analyze repo → mark existing completed tasks → begin with first incomplete task.  
- On later runs (after project has been paused):  
  - Re-analyze repo → update build order status → resume next unchecked task.  

---

## Completion
The project is considered complete when:  
- All checkboxes in @build-order-portrait-app.md are marked with `x`.  
- The implementation fully matches the specifications in @prd-portrait-app.md.  
- All tests pass and the app is verified as production-ready.  

