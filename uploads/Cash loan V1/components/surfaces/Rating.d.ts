import * as React from "react";

export interface RatingProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Current value (0–max). */
  value?: number;
  /** Number of stars. Default 5. */
  max?: number;
  /** Star px size. Default 18. */
  size?: number;
  /** Show numeric value beside the stars. */
  showValue?: boolean;
  /** Make interactive — called with the clicked star (1-based). */
  onRate?: (n: number) => void;
}

/** Star rating, read-only or interactive. */
export function Rating(props: RatingProps): JSX.Element;
