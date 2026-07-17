import * as React from "react";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
  label?: string;
  leadingIcon?: string;
  trailingIcon?: string;
  supportingText?: string;
  error?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/**
 * Single-line text field.
 * @startingPoint section="Forms" subtitle="Labelled text field with icon & supporting text" viewport="700x140"
 */
export function Input(props: InputProps): JSX.Element;
