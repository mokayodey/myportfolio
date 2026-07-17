M-KOPA Cash Loan — Test Launcher (Netlify deploy)
=================================================

HOW TO DEPLOY
-------------
Option A — drag & drop (fastest):
  1. Zip the CONTENTS of this folder (so index.html sits at the zip root,
     not inside a sub-folder).
  2. Go to https://app.netlify.com/drop
  3. Drag the zip (or this folder) onto the page.
  4. Netlify gives you a live URL. Done.

Option B — Netlify CLI:
  netlify deploy --dir=. --prod

WHAT'S INSIDE
-------------
  index.html                  The test launcher (site home). Lists flows A–D.
  Cash Loan - ABC Hi-fi.html  The prototype. Opens a flow via ?flow=A|B|C|D.
  styles.css + tokens/        Maendeleo design-system tokens (fonts, colours…).
  assets/                     Landing illustration + benefit icons.
  _redirects                  Keeps the old launcher URL working.

Fonts load from Google Fonts, so the site needs internet on first view.

NAVIGATION
----------
  Launcher → pick a flow → Android home → tap the M-KOPA app → the flow.
  Inside a flow, the "All flows" app icon returns to the launcher.
