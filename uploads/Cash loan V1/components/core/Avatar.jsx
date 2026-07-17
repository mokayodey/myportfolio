import React from "react";

/** Circular avatar. Renders an image, or initials on a tinted surface. */
export function Avatar({ src, name = "", size = 40, style, ...rest }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-full)",
        overflow: "hidden",
        flexShrink: 0,
        background: "var(--primary-container)",
        color: "var(--on-primary-container)",
        font: "var(--type-label-large)",
        fontWeight: "var(--weight-semibold)",
        ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        : (initials || null)}
    </span>
  );
}
