import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual role. Default "primary". */
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "error";
  /** Default "medium". */
  size?: "small" | "medium" | "large";
  /** Icon name (see Icon ICON_NAMES) shown before the label. */
  iconLeft?: string;
  /** Icon name shown after the label. */
  iconRight?: string;
  disabled?: boolean;
  /** Stretch to container width. */
  fullWidth?: boolean;
}

/**
 * Maendeleo pill button.
 * @startingPoint section="Core" subtitle="Pill button — 5 variants × 3 sizes" viewport="700x220"
 */
export function Button(props: ButtonProps): JSX.Element;
