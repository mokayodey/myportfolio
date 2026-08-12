M-KOPA Cash Loan — Test Launcher (RESPONSIVE / full-screen build)
================================================================

This is the same prototype as the standard deploy, plus:
  • Responsive mode — on a phone the prototype FILLS the real screen
    (the fake phone bezel only shows on desktop, ≥601px wide).
  • Installable — "Add to Home Screen" launches it chromeless (standalone),
    like a native app, via manifest.webmanifest + app icons.

HOW TO DEPLOY
-------------
Option A — drag & drop (fastest):
  1. Zip the CONTENTS of this folder (index.html at the zip root).
  2. Go to https://app.netlify.com/drop
  3. Drag the zip (or folder) on. Netlify returns a live URL.

Option B — Netlify CLI:
  netlify deploy --dir=. --prod

TRY FULL-SCREEN ON A PHONE
--------------------------
  1. Open the Netlify URL in the phone browser (Safari iOS / Chrome Android).
  2. Share / menu → "Add to Home Screen".
  3. Open it from the new home-screen icon → it runs full-screen, no browser
     bar, M-KOPA icon and splash. Pick a flow and test.

  (Just opening the URL in the browser also fills the screen now — the
   home-screen install only removes the remaining browser chrome.)

WHAT'S INSIDE
-------------
  index.html                  Test launcher (site home).
  Cash Loan - ABC Hi-fi.html  The prototype (?flow=A|B|C|D).
  styles.css + tokens/        Maendeleo design-system tokens.
  assets/                     Illustration, benefit icons, app icons.
  manifest.webmanifest        PWA manifest (standalone display).
  _redirects                  Keeps the old launcher URL working.

Fonts load from Google Fonts, so first view needs internet.
