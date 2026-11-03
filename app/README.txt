DIRECT CLIP-PATH FIX

I inspected the current files you uploaded. Your current ImageReveal.jsx still uses
CSS mask-image, while page.css contains multiple old mask/clip-path rules. This
patch removes the mask-image dependency and uses a direct inline clip-path update.

Copy:
- app/components/ImageReveal.jsx
- app/portfolio5/page.css

Into:
C:\Users\DELL\Desktop\HTML\portfolio-web

Merge folders and replace those two files only.

Then restart:
Ctrl+C
npm run dev

Hard refresh:
Ctrl+Shift+R

Check that these files exist:
public/images/Naman.png
public/images/OctopusMan.png

Naman stays visible. OctopusMan is clipped to a 145px circle following the pointer.
