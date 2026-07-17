import React from "react";

/**
 * Surface container. `variant`:
 * - elevated : white surface + soft shadow (default)
 * - outlined : white surface + hairline border
 * - filled   : tinted surface, no shadow
 * `interactive` adds hover lift + pointer.
 */
export function Card({
  variant = "elevated",
  interactive = false,
  padding = 16,
  children,
  style,
  ...rest
}) {
  const variants = {
    elevated: { background: "var(--surface)", boxShadow: "var(--elevation-1)", border: "none" },
    outlined: { background: "var(--surface)", boxShadow: "none", border: "1px solid var(--outline-variant)" },
    filled:   { background: "var(--surface-variant)", boxShadow: "none", border: "none" },
  };
  const v = variants[variant] || variants.elevated;

  return (
    <div
      style={{
        borderRadius: "var(--radius-md)",
        padding,
        transition: "box-shadow .18s ease, transform .18s ease",
        cursor: interactive ? "pointer" : "default",
        ...v,
        ...style,
      }}
      onMouseEnter={interactive ? (e) => { e.currentTarget.style.boxShadow = "var(--elevation-3)"; } : undefined}
      onMouseLeave={interactive ? (e) => { e.currentTarget.style.boxShadow = v.boxShadow; } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
