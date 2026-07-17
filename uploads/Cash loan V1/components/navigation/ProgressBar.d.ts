import * as React from "react";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress percentage 0–100. */
  value?: number;
  /** Track height in px. Default 8. */
  height?: number;
}

/** Linear determinate progress bar. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
