# Maendeleo Design System

**Maendeleo** (Swahili for *progress / development*) is a Material-3–based design
foundation for building clean, accessible, mobile-first product surfaces. Its
signature is a confident **forest-green** brand paired with a warm **amber**
accent, set in **Inter / Inter Tight**, on calm neutral-grey canvases with white
cards and soft ambient shadows.

This project is the machine-readable system: design tokens, reusable React
components, foundation specimen cards, and a mobile UI kit. Consumers link the
single root **`styles.css`**, then build with the tokens and components.

> **System at a glance:** 247 tokens · 18 components (`window.MaendeleoDesignSystem_e7e7ed`)
> · 17 Design-System cards (Colors / Type / Spacing / Brand / Components / Mobile)
> · 1 template (Mobile app shell) · ~43 line icons + logo. Light + dark themes.

> **Source of truth:** Figma file *“Maendeleo Foundation & Tokens”* (attached as a
> mounted virtual file system during authoring; not a public link). Token values,
> the type scale, the logo geometry, and component specs were extracted directly
> from that file’s Variables documentation and component frames. There is no
> associated code repository — the Figma file is the only upstream artifact.

---

## What this is for

Maendeleo styles **mobile product surfaces** — a generic local-discovery /
listings app pattern (browse places & items, see ratings and distance, save
favourites, leave reviews, manage an account). The example screens in the source
file are intentionally content-neutral (“Section title”, “List item”,
“Category · $$ · 1.2 miles away”), so the system reads as a flexible foundation
rather than a single finished product. The included UI kit recreates that pattern
faithfully.

---

## Index — what’s in this project

| Path | What |
|---|---|
| `styles.css` | **Root entry point.** `@import`s every token + base file. Consumers link this. |
| `tokens/colors.css` | Base colour scales (green/amber/red/blue/teal/neutral) + semantic roles, light & dark. |
| `tokens/typography.css` | M3 type scale, family tokens, `.m-*` utility classes. |
| `tokens/spacing.css` | 4px spacing scale, corner-radius tokens, hit-target floor. |
| `tokens/elevation.css` | 5-level soft ambient shadow ramp. |
| `tokens/fonts.css` | `@font-face` / webfont loading (Google Fonts). |
| `tokens/base.css` | Reset, document defaults, focus ring. |
| `assets/logo/` | `maendeleo-mark.svg` (three-bar mark), `maendeleo-wordmark.svg` (full lockup). |
| `assets/icons/` | ~40 line icons (currentColor filled-path SVGs) from the source icon set. |
| `components/` | Reusable React primitives (Button, IconButton, Input, Card, Badge, Chip, …). |
| `ui_kits/mobile/` | High-fidelity click-through recreation of the discovery app. |
| `templates/mobile-app/` | One-file starting point: phone shell + brand bar + bottom nav, ready to fill. |
| `foundations/` | Specimen cards rendered in the Design System tab. |
| `SKILL.md` | Agent-Skill manifest for portable use. |

### Components (18 exports on `window.MaendeleoDesignSystem_e7e7ed`)

`Icon` · `ICON_DATA` · `ICON_NAMES` · `Button` · `IconButton` · `Badge` · `Chip`
· `Avatar` · `Divider` (core) · `Input` · `Checkbox` · `Switch` (forms) · `Card`
· `Rating` · `ListItem` (surfaces) · `TopAppBar` · `BottomNav` · `ProgressBar`
(navigation). Full props in `components/README.md` and each `.d.ts`.

### Design System cards (17)

- **Colors:** Primary green scale · Secondary amber scale · Semantic roles · Neutrals & surfaces
- **Type:** Display & Headline · Title/Body/Label · Mono
- **Spacing:** Spacing scale · Corner radius · Elevation
- **Brand:** Logo · Iconography
- **Components:** Core · Forms · Surfaces · Navigation
- **Mobile:** Discovery app

### Template

- **Mobile app shell** (`templates/mobile-app/`) — phone frame + brand bar + bottom nav.

---

## CONTENT FUNDAMENTALS — how Maendeleo writes

The source file is a foundation, so copy is sparse and functional. The voice that
emerges from its examples and labels:

- **Plain, second-person, action-first.** UI copy addresses the user directly and
  leads with the verb: “Save”, “Leave a review”, “See all”, “Get directions”.
  Buttons are imperative, never “Click here”.
- **Sentence case everywhere.** Headings, buttons, labels, nav items all use
  sentence case (“Section title”, “Account details”), never Title Case or ALL CAPS.
  The only uppercase is the mono spacing/scale labels in documentation.
- **Concise, scannable metadata rows.** Supporting text is terse and separated by a
  middle dot: `Category · $$ · 1.2 miles away`. Distances, price tiers ($–$$$), and
  ratings are first-class.
- **Numerals stay numeric.** “5 miles”, “1.2 miles away”, “Version 1.0” — digits,
  not spelled out.
- **No emoji, ever.** Status and emphasis are carried by icons, colour, and badges —
  not emoji. Iconography is the system’s expressive layer.
- **Mono for the meta-layer.** Documentation, token names, and version strings are
  set in IBM Plex Mono (“Design system v1.0”, “Generated: 09/23/2025”) to visually
  separate “talking about the system” from “using the system”.
- **Tone:** calm, trustworthy, utilitarian-but-friendly. Progress-oriented (the
  name and the ascending-bars mark). Avoid hype, exclamation marks, and jargon.

Examples to imitate: `Within 5 miles · $$-$$$` · `Supporting line text…` ·
`Account details` · `Leave a review` · `Get directions`.

---

## VISUAL FOUNDATIONS

**Colour.** A green/amber duotone over neutral grey.
- **Primary = forest green `#2F8822`** (base `green/80`). This is the brand hero
  colour — cover, top bars, filled primary buttons, selected/active states, progress
  fills, the “success” role. On-primary is white.
- **Logo green `#39B54A`** is reserved for the mark itself.
- **Secondary = amber `#FFA90A`** (base `amber/50`). Warm accent for highlight
  chips, the active bottom-nav pill, secondary filled actions, and the “warning”
  role. On-amber is near-black `#291B00`.
- **Tertiary = dark neutral** for high-contrast filled chips / pills.
- **Error = `#D8392E`**, with a soft `#FDE9E8` container.
- **Neutrals** run cool-grey: page background is `#EEEFF0` (neutral/10), surfaces /
  cards are pure white, text is near-black `#17191C`, secondary text `#535A63`,
  hairline outlines `#DEE0E2`.
- A full **dark theme** is defined (`[data-theme="dark"]`): green brightens to
  `#47CC33`, surfaces go to `#17191C`/`#23262A`.
- Each colour ships a **16-step tonal scale** (10→98) so containers, hovers, and
  states are picked from real ramp steps, not ad-hoc tints.

**Type.** Material-3 type scale.
- **Inter Tight** for Display & Headline (expressive, tight `-0.25px` tracking on
  display). **Inter** for Title / Body / Label. **IBM Plex Mono** for code, token
  names, and documentation meta.
- Scale: Display 57/45/36 · Headline 32/28/24 · Title 22/16/14 · Body 16/14/12 ·
  Label 14/12/11 (px). Each role has a regular and an *emphasized* (heavier) weight.
- Body text is Regular (400); labels/titles are Medium–Semibold (500–600); display
  headers go Bold (700).

**Spacing & layout.** 4px base grid. Named scale 2→64. Mobile gutters are 16px;
section padding 24px; generous 32–64px between major blocks on marketing/spec
frames. Minimum touch target **44px**.

**Corner radius.** Soft but not pill-everything: cards & sheets use `16px`
(`radius-md`); inputs & small surfaces `8–12px`; **buttons and chips are fully
rounded pills** (`radius-full`); FABs and avatars are circular. Bottom sheets round
only the top corners (`28px`).

**Backgrounds.** Flat colour, never gradients. The hero/brand surface is solid
green; product canvases are solid neutral-grey with white cards floating on top.
Imagery (place photos, hero images) sits in `16px`-rounded containers, often
full-bleed at the top of a detail screen. No textures, no patterns, no noise.

**Elevation & shadows.** Soft, low-spread, **ambient** multi-layer shadows (e.g.
`0 1px 1px rgba(0,0,0,.03), 0 8px 7px rgba(0,0,0,.04), 0 22px 22px rgba(0,0,0,.06)`).
Cards rest at elevation 1–2; menus/sheets/dialogs at 3–5. Shadows are barely-there
and warm-neutral, never harsh. Many list cards use a **hairline divider** instead of
a shadow.

**Borders.** 1px hairlines in `--outline-variant` (`#DEE0E2`) for dividers and
input rests; inputs darken their border on focus and switch to the green focus ring.

**Hover / press / focus.**
- *Hover:* subtle state-layer — a translucent overlay of the content colour (≈8%),
  or step to the next-darker ramp value on filled buttons.
- *Press:* the green primary deepens toward `on-primary-container`; pills get a
  slightly darker fill. No scale-down/bounce — motion is restrained.
- *Focus-visible:* 2px green outline, 2px offset (defined globally in `base.css`).
- *Selected:* amber fill (chips, bottom-nav) or green for primary toggles.

**Motion.** Minimal and functional. Short (150–250ms) ease-out fades and slides;
bottom sheets slide up; dialogs fade+scale from 96%. No looping or decorative
animation. Respect `prefers-reduced-motion`.

**Transparency & blur.** Used sparingly: scrims behind sheets/dialogs are
`rgba(0,0,0,.4)`; state layers are low-opacity overlays. No glassmorphism/backdrop
blur as a brand motif.

**Imagery vibe.** Bright, natural, true-to-life photography in rounded containers —
warm and optimistic, matching the green/amber palette. No heavy filters, no
duotones, no black-and-white.

**Cards.** White surface, `16px` radius, elevation-1 shadow *or* a hairline border
(pick one, not both), 16px internal padding. Content-dense list cards favour the
hairline-divider treatment; standalone cards favour the soft shadow.

---

## ICONOGRAPHY

- **One coherent line-icon family** (~870 glyphs in the source) covers the system —
  an Untitled-UI-style set: **1.5px-equivalent stroke, rounded joins, 24px grid**,
  with a matching **filled** variant for active/selected states (e.g. a hollow
  heart for “save”, filled heart for “saved”; outline star vs filled star for
  ratings). Icons are monochromatic and inherit colour.
- **Format:** SVGs whose strokes are flattened to filled paths using
  `fill="currentColor"`. A curated ~40-icon subset lives in `assets/icons/`
  (home, search, heart/heart-filled, star, user, settings, bell, plus, check,
  chevron-{up,down,left,right}, arrow-{left,right}, x, marker, map, calendar,
  filter, share, edit, trash, menu, camera, message, phone, wallet, tag, clock,
  eye, lock, download, upload, globe, gift, info, send, coins, bar-chart, sliders,
  dots-vertical).
- **Recolouring:** because the SVGs use `currentColor`, render them so colour
  follows text — either inline the SVG, or use CSS `mask-image` + `background:
  currentColor` (the approach used by the `Icon` component). Do **not** drop them in
  an `<img>` if you need to recolour them.
- **No emoji and no Unicode-glyph icons** anywhere in the brand. Rating stars,
  price tiers, and statuses are drawn with the icon set, not characters.
- **Sizing:** 20px in dense rows, 24px default, 44px tap target around interactive
  icons (use `IconButton`).
- Need an icon not in the curated set? Pull it from the same source family by name
  to stay visually consistent; if unavailable, substitute the closest
  [Untitled UI / Lucide](https://lucide.dev) line icon (same 1.5px stroke) and flag
  the substitution.

---

## Substitutions & caveats

- **Fonts** are loaded from **Google Fonts** (Inter, Inter Tight, IBM Plex Mono) —
  all three are exact matches to the source, so this is robust, but swap in
  self-hosted binaries for production if your CDN policy requires it.
- **Elevation** levels 1–4 were interpolated to a consistent ramp; only level 5 was
  captured verbatim from the source.
- Semantic light-theme values are taken from the file’s default Variable mode; dark
  theme from its Dark mode column.
