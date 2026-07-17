import React from "react";

/** Linear progress bar. Determinate when `value` (0–100) is set. */
export function ProgressBar({ value = 0, height = 8, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        width: "100%",
        height,
        borderRadius: "var(--radius-full)",
        background: "var(--outline-variant)",
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          borderRadius: "var(--radius-full)",
          background: "var(--primary)",
          transition: "width .3s ease",
        }}
      />
    </div>
  );
}
