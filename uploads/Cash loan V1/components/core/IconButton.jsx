import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = { small: 32, medium: 40, large: 48 };
const ICONSIZE = { small: 18, medium: 20, large: 24 };

/**
 * Square-ish round icon-only button.
 * Variants: filled (surface container), outlined (green ring), ghost (transparent).
 */
export function IconButton({
  icon,
  variant = "ghost",
  size = "medium",
  disabled = false,
  label,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.medium;

  const variants = {
    filled:   { background: "var(--surface-container-high)", color: "var(--on-surface)", border: "none" },
    outlined: { background: "transparent", color: "var(--primary)", border: "1px solid var(--primary)" },
    ghost:    { background: "transparent", color: "var(--on-surface)", border: "none" },
    tonal:    { background: "var(--primary-container)", color: "var(--on-primary-container)", border: "none" },
  };
  const v = variants[variant] || variants.ghost;

  return (
    <button
      aria-label={label}
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: dim,
        height: dim,
        borderRadius: "var(--radius-full)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.38 : 1,
        transition: "background-color .18s ease, filter .12s ease",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.filter = "brightness(0.92)"; }}
      onMouseUp={(e) => { e.currentTarget.style.filter = "none"; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
      {...rest}
    >
      <Icon name={icon} size={ICONSIZE[size] || 20} label={label} />
    </button>
  );
}
