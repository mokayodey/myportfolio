import * as React from "react";

export interface TopBarAction {
  icon: string;
  label: string;
  onClick?: () => void;
}

export interface TopAppBarProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  /** "surface" (white) or "brand" (green). Default "surface". */
  variant?: "surface" | "brand";
  /** Leading icon name (e.g. "chevron-left", "menu"). */
  leadingIcon?: string;
  onLeading?: () => void;
  actions?: TopBarAction[];
  centerTitle?: boolean;
}

/** Top app bar. */
export function TopAppBar(props: TopAppBarProps): JSX.Element;
