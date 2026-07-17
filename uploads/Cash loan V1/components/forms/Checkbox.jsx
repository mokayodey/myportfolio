import React from "react";
import { Icon } from "../core/Icon.jsx";

/** Checkbox with label. Checked fills green with a white check. */
export function Checkbox({ checked = false, onChange, label, disabled = false, error = false, style, ...rest }) {
  const box = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    borderRadius: 6,
    flexShrink: 0,
    transition: "background-color .14s ease, border-color .14s ease",
    border: checked ? "none" : `2px solid ${error ? "var(--error)" : "var(--outline)"}`,
    background: checked ? (error ? "var(--error)" : "var(--primary)") : "transparent",
    color: error ? "var(--on-error)" : "var(--on-primary)",
  };
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, ...style }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={box}>{checked && <Icon name="check" size={16} />}</span>
      {label && <span style={{ font: "var(--type-body-large)", color: "var(--on-surface)" }}>{label}</span>}
    </label>
  );
}
