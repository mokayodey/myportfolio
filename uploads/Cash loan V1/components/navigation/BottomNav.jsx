import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Bottom navigation bar. `items` = [{ key, icon, label }].
 * The active item gets an amber pill behind the icon (the system's
 * selection accent) and an amber label.
 */
export function BottomNav({ items = [], value, onChange, style, ...rest }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        height: 72,
        padding: "8px 4px",
        background: "var(--surface)",
        borderTop: "1px solid var(--outline-variant)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const active = it.key === value;
        return (
          <button
            key={it.key}
            onClick={() => onChange && onChange(it.key)}
            style={{
              flex: 1,
              border: "none",
              background: "transparent",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              color: active ? "var(--on-secondary-container)" : "var(--on-surface-variant)",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 30,
                borderRadius: "var(--radius-full)",
                background: active ? "var(--secondary-container)" : "transparent",
                transition: "background-color .16s ease",
              }}
            >
              <Icon name={it.icon} size={22} />
            </span>
            <span style={{ font: "var(--type-label-medium)", letterSpacing: "var(--tracking-label)", fontWeight: active ? "var(--weight-semibold)" : "var(--weight-medium)" }}>
              {it.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
