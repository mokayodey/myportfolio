---
name: maendeleo-design
description: Use this skill to generate well-branded interfaces and assets for Maendeleo, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `readme.md` — full design guide: brand context, content voice, visual foundations, iconography.
- `styles.css` — single CSS entry point; link it to inherit all tokens (light + dark via `[data-theme="dark"]`).
- `tokens/` — colours, typography, spacing, elevation, fonts, base reset.
- `components/` — React primitives (Button, IconButton, Icon, Input, Checkbox, Switch, Card, ListItem, Rating, Badge, Chip, Avatar, Divider, TopAppBar, BottomNav, ProgressBar). Bundled on `window.MaendeleoDesignSystem_e7e7ed`.
- `foundations/` — specimen cards (colours, type, spacing, logo, icons).
- `ui_kits/mobile/` — full click-through discovery-app recreation.
- `assets/` — `logo/` (mark + wordmark SVG) and `icons/` (~40 line icons).

## Essentials

- **Brand green `#2F8822`** primary, **amber `#FFA90A`** secondary/selection accent, neutral-grey canvases, white cards.
- **Inter Tight** display/headline, **Inter** body/UI, **IBM Plex Mono** for meta/code.
- Pill buttons & chips (fully rounded), 16px cards, soft ambient shadows, 4px spacing grid.
- Sentence case, plain second-person copy, **no emoji** — icons carry expression.
- Icons render as inline SVG with `currentColor` (see the `Icon` component); never recolour via `<img>`.
