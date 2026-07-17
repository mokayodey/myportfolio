import React from "react";
import { Icon } from "./Icon.jsx";

/**
 * Filter / choice chip. When `selected`, fills with the amber secondary
 * (the system's selection accent) and shows a leading check.
 */
export function Chip({
  selected = false,
  leadingIcon,
  showCheckWhenSelected = true,
  children,
  disabled = false,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    height: 36,
    padding: "0 16px",
    borderRadius: "var(--radius-full)",
    font: "var(--type-label-large)",
    letterSpacing: "var(--tracking-label)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.38 : 1,
    transition: "background-color .16s ease, border-color .16s ease, color .16s ease",
    userSelect: "none",
  };

  const unselected = {
    background: "transparent",
    color: "var(--on-surface)",
    border: "1px solid var(--outline)",
  };
  const selectedStyle = {
    background: "var(--secondary)",
    color: "var(--on-secondary)",
    border: "1px solid var(--secondary)",
  };

  return (
    <button
      aria-pressed={selected}
      disabled={disabled}
      style={{ ...base, ...(selected ? selectedStyle : unselected), ...style }}
      {...rest}
    >
      {selected && showCheckWhenSelected
        ? <Icon name="check" size={18} />
        : leadingIcon && <Icon name={leadingIcon} size={18} />}
      {children}
    </button>
  );
}
