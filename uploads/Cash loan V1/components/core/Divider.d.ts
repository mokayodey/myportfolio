import * as React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Indent the left edge (aligns under list-row text). */
  inset?: boolean;
  /** Render a vertical rule instead of horizontal. */
  vertical?: boolean;
}

/** 1px hairline divider. */
export function Divider(props: DividerProps): JSX.Element;
