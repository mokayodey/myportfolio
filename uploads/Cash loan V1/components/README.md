# Maendeleo Components

Reusable React primitives. Each is a named export bundled into `_ds_bundle.js`
under `window.MaendeleoDesignSystem_e7e7ed`. They reference design tokens via CSS
custom properties — link `styles.css` and they pick up the theme (incl. dark via
`[data-theme="dark"]`).

## Usage in a card / page

```html
<link rel="stylesheet" href="../../styles.css" />
<script src="../../_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, ListItem, Icon } = window.MaendeleoDesignSystem_e7e7ed;
</script>
```

## Catalog

| Group | Component | Notes |
|---|---|---|
| core | `Icon` | Line icon via CSS mask; `name` + optional `base`/`size`/`label`. |
| core | `Button` | Pill button — primary / secondary / tertiary / ghost / error; 3 sizes; icons. |
| core | `IconButton` | Round icon-only — filled / outlined / ghost / tonal. |
| core | `Badge` | Status / count / dot — success / warning / critical / info / neutral / soft. |
| core | `Chip` | Selectable filter chip (amber when selected). |
| core | `Avatar` | Image or initials, circular. |
| core | `Divider` | 1px hairline, inset or vertical. |
| forms | `Input` | Labelled text field, icons, supporting/error text. |
| forms | `Checkbox` | Checkbox + label. |
| forms | `Switch` | On/off toggle. |
| surfaces | `Card` | elevated / outlined / filled; `interactive`. |
| surfaces | `Rating` | Star rating, read-only or interactive. |
| surfaces | `ListItem` | Discovery row: thumb · title · meta · rating · save. |
| navigation | `TopAppBar` | surface / brand variants, leading icon + actions. |
| navigation | `BottomNav` | Mobile tab bar, amber active pill. |
| navigation | `ProgressBar` | Linear determinate progress. |

Icons live in `../assets/icons/`. See each component's `.prompt.md` / `.d.ts` for
the full props contract.
