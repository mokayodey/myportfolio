import React from "react";
import { Icon } from "./Icon.jsx";

const SIZES = {
  small:  { height: 32, padX: 16, font: "var(--type-label-large)", icon: 18, gap: 6 },
  medium: { height: 40, padX: 20, font: "var(--type-label-large)", icon: 20, gap: 8 },
  large:  { height: 48, padX: 24, font: "var(--type-title-medium)", icon: 20, gap: 8 },
};

/**
 * Pill button. Variants map to the Maendeleo button roles.
 * - primary   : filled green
 * - secondary : outlined green
 * - tertiary  : soft green-tint fill
 * - ghost     : text only
 * - error     : filled red (destructive)
 */
export function Button({
  variant = "primary",
  size = "medium",
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;

  const variants = {
    primary: {
      background: "var(--primary)", color: "var(--on-primary)", border: "none",
    },
    secondary: {
      background: "transparent", color: "var(--primary)",
      border: "1px solid var(--primary)",
    },
    tertiary: {
      background: "var(--primary-container)", color: "var(--on-primary-container)",
      border: "none",
    },
    ghost: {
      background: "transparent", color: "var(--primary)", border: "none",
    },
    error: {
      background: "var(--error)", color: "var(--on-error)", border: "none",
    },
  };

  const v = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        height: s.height,
        padding: `0 ${s.padX}px`,
        width: fullWidth ? "100%" : "auto",
        font: s.font,
        letterSpacing: "var(--tracking-label)",
        whiteSpace: "nowrap",
        borderRadius: "var(--radius-full)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background-color .18s ease, color .18s ease, border-color .18s ease, opacity .18s ease",
        opacity: disabled ? 0.38 : 1,
        ...v,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.filter = "brightness(0.94)"; }}
      onMouseUp={(e) => { e.currentTarget.style.filter = "none"; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}
