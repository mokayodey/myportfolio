import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Star rating. Read-only by default; pass `onRate` to make it interactive.
 * Renders the brand star icon (filled vs outline) — never a Unicode glyph.
 */
export function Rating({ value = 0, max = 5, size = 18, showValue = false, onRate, style, ...rest }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: showValue ? 6 : 2, color: "var(--rating)", ...style }} {...rest}>
      <span style={{ display: "inline-flex", gap: 2 }}>
        {Array.from({ length: max }).map((_, i) => {
          const filled = i < Math.round(value);
          return (
            <Icon
              key={i}
              name="star"
              size={size}
              label={`${i + 1} star`}
              onClick={onRate ? () => onRate(i + 1) : undefined}
              style={{
                color: filled ? "var(--rating)" : "var(--outline)",
                cursor: onRate ? "pointer" : "default",
              }}
            />
          );
        })}
      </span>
      {showValue && (
        <span style={{ font: "var(--type-label-large)", color: "var(--on-surface-variant)" }}>
          {value.toFixed(1)}
        </span>
      )}
    </span>
  );
}
