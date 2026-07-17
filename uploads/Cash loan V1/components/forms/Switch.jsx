import React from "react";

/** Toggle switch. On = green track, thumb slides right. */
export function Switch({ checked = false, onChange, disabled = false, label, style, ...rest }) {
  const toggle = () => { if (!disabled && onChange) onChange(!checked); };
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, ...style }}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={toggle}
        disabled={disabled}
        style={{
          position: "relative",
          width: 48,
          height: 28,
          flexShrink: 0,
          padding: 0,
          border: checked ? "none" : "2px solid var(--outline)",
          borderRadius: "var(--radius-full)",
          background: checked ? "var(--primary)" : "var(--surface-variant)",
          transition: "background-color .18s ease, border-color .18s ease",
          cursor: "inherit",
        }}
        {...rest}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: checked ? 24 : 4,
            transform: "translateY(-50%)",
            width: checked ? 20 : 16,
            height: checked ? 20 : 16,
            borderRadius: "var(--radius-full)",
            background: checked ? "var(--on-primary)" : "var(--outline)",
            transition: "left .18s ease, width .18s ease, height .18s ease, background-color .18s ease",
          }}
        />
      </button>
      {label && <span style={{ font: "var(--type-body-large)", color: "var(--on-surface)" }}>{label}</span>}
    </label>
  );
}
