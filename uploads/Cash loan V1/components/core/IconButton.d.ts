import * as React from "react";

export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  /** Icon name (see Icon ICON_NAMES). */
  icon: string;
  /** Default "ghost". */
  variant?: "filled" | "outlined" | "ghost" | "tonal";
  /** Default "medium". */
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  /** Accessible label (required for icon-only buttons). */
  label?: string;
}

/** Round, icon-only button. */
export function IconButton(props: IconButtonProps): JSX.Element;
