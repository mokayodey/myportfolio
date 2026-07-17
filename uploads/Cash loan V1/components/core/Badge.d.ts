import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Default "neutral". */
  tone?: "success" | "warning" | "critical" | "info" | "neutral" | "soft";
  /** Render a small indicator dot instead of a label. */
  dot?: boolean;
}

/** Status badge, count chip, or indicator dot. */
export function Badge(props: BadgeProps): JSX.Element;
