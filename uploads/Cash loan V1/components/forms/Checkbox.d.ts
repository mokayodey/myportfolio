import * as React from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
  checked?: boolean;
  label?: string;
  disabled?: boolean;
  error?: boolean;
  style?: React.CSSProperties;
}

/** Checkbox with optional label. */
export function Checkbox(props: CheckboxProps): JSX.Element;
