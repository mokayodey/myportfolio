# Maendeleo Mobile — Discovery UI kit

A high-fidelity, click-through recreation of the Maendeleo mobile product: a
local **discovery / listings app** (browse nearby places, view details, read &
leave reviews, manage an account). Built entirely from the design-system
components and tokens — no bespoke UI.

## Run

Open `index.html`. It renders inside a 390×844 phone frame (full-bleed on small
screens). State is in-memory React; refresh resets it.

## Screens & flow

| File | Screen | Highlights |
|---|---|---|
| `ExploreScreen.jsx` | Explore (home) | Brand app bar, floating search, filter chips, “Near you” list of `ListItem`s. Tap a row → Detail. |
| `DetailScreen.jsx` | Place detail | Photo header with overlay actions, rating, Get-directions / call, tags, review preview. |
| `ReviewsScreen.jsx` | Reviews | Rating summary + distribution, interactive “Rate your visit” stars, review list. |
| `AccountScreen.jsx` | Account | Profile, stat tiles, settings rows with `Switch`es, sign-out. |
| `App.jsx` | Router + Saved + Alerts | Bottom-nav tabs, navigation stack, the saved/favourite state shared across screens. |

Interactions wired: switch tabs, search & filter, save/unsave (heart) syncs
between Explore · Detail · Saved · Account, drill into Detail → Reviews, rate
with stars, toggle settings.

## Composition

`data.js` holds mock places & reviews. `shared.jsx` provides the `Photo`
placeholder and `StatusBar`. Each screen reads components from
`window.MaendeleoDesignSystem_e7e7ed` and exports itself to `window` (separate
Babel scopes). Place imagery uses tasteful duotone placeholders keyed off a per-
place hue — swap `Photo` for real `<img>`s in production.
