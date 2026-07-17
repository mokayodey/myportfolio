import * as React from "react";

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Selected state — fills amber and (by default) shows a check. */
  selected?: boolean;
  /** Icon name shown when not selected. */
  leadingIcon?: string;
  /** Replace leading icon with a check when selected. Default true. */
  showCheckWhenSelected?: boolean;
  disabled?: boolean;
}

/** Selectable filter / choice chip. */
export function Chip(props: ChipProps): JSX.Element;
