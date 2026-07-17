import React from "react";

/**
 * Status badge / count pill. Tones map to semantic roles.
 * `dot` renders a small standalone indicator; numbers render a count chip.
 */
export function Badge({ tone = "neutral", dot = false, children, style, ...rest }) {
  const tones = {
    success:  { bg: "var(--primary)",        fg: "var(--on-primary)" },
    warning:  { bg: "var(--secondary)",      fg: "var(--on-secondary)" },
    critical: { bg: "var(--error)",          fg: "var(--on-error)" },
    info:     { bg: "var(--info)",           fg: "var(--on-primary)" },
    neutral:  { bg: "var(--tertiary)",       fg: "var(--on-tertiary)" },
    soft:     { bg: "var(--primary-container)", fg: "var(--on-primary-container)" },
  };
  const t = tones[tone] || tones.neutral;

  if (dot) {
    return (
      <span
        style={{ display: "inline-block", width: 8, height: 8, borderRadius: "var(--radius-full)", background: t.bg, ...style }}
        {...rest}
      />
    );
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 20,
        height: 20,
        padding: "0 7px",
        borderRadius: "var(--radius-full)",
        background: t.bg,
        color: t.fg,
        font: "var(--type-label-small)",
        letterSpacing: "var(--tracking-label)",
        fontWeight: "var(--weight-semibold)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
