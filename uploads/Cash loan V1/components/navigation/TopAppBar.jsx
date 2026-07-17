import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Top app bar. `variant`:
 * - surface : white bar, dark title (default, scrolled state)
 * - brand   : green bar, white title (hero / home)
 * Pass `leadingIcon` (e.g. "chevron-left" or "menu") and `actions`
 * (array of { icon, label, onClick }).
 */
export function TopAppBar({
  title,
  subtitle,
  variant = "surface",
  leadingIcon,
  onLeading,
  actions = [],
  centerTitle = false,
  style,
  ...rest
}) {
  const brand = variant === "brand";
  const fg = brand ? "var(--on-primary)" : "var(--on-surface)";

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 64,
        padding: "0 8px 0 4px",
        background: brand ? "var(--primary)" : "var(--surface)",
        color: fg,
        boxShadow: brand ? "none" : "var(--elevation-1)",
        ...style,
      }}
      {...rest}
    >
      {leadingIcon && (
        <button onClick={onLeading} aria-label="Back" style={{ border: "none", background: "transparent", color: fg, cursor: "pointer", width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-full)" }}>
          <Icon name={leadingIcon} size={24} />
        </button>
      )}
      <div style={{ flex: 1, minWidth: 0, paddingLeft: leadingIcon ? 0 : 12, textAlign: centerTitle ? "center" : "left" }}>
        <div style={{ font: "var(--type-title-large)", color: fg, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</div>
        {subtitle && <div style={{ font: "var(--type-body-small)", color: brand ? "rgba(255,255,255,.82)" : "var(--on-surface-variant)" }}>{subtitle}</div>}
      </div>
      {actions.map((a, i) => (
        <button key={i} onClick={a.onClick} aria-label={a.label} style={{ border: "none", background: "transparent", color: fg, cursor: "pointer", width: 44, height: 44, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-full)" }}>
          <Icon name={a.icon} size={24} />
        </button>
      ))}
    </header>
  );
}
