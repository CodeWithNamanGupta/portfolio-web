INTERACTION FIX — APPLY TO EXISTING PROJECT

Project folder:
C:\Users\DELL\Desktop\HTML\portfolio-web

This ZIP contains:
- app/components/ImageReveal.jsx
- app/components/CustomCursor.jsx
- app/portfolio5/page.css

Steps:
1. Extract this ZIP to a temporary folder (for example Downloads).
2. Open the extracted app folder.
3. Copy its components folder into your existing project\app folder.
4. Copy its portfolio5 folder into your existing project\app folder.
5. Choose Merge and Replace files when prompted.
6. Do not replace page.jsx; this patch does not include it.
7. Confirm these image files exist in project\public\images:
   - Naman.png
   - OctopusMan.png
8. Restart the dev server in VS Code:
   Ctrl+C
   npm run dev
9. Refresh /portfolio5 using Ctrl+Shift+R.

Expected behavior:
- Naman.png is the normal portrait.
- OctopusMan.png appears only in the circular area around the pointer.
- The custom cursor follows the pointer instead of staying at the page corner.

If the cursor still does not move, check whether another global CSS rule overrides
.custom-cursor; send the contents of app/globals.css for the next targeted fix.
