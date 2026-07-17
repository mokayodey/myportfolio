import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Default "elevated". */
  variant?: "elevated" | "outlined" | "filled";
  /** Hover-lift + pointer cursor. */
  interactive?: boolean;
  /** Inner padding in px. Default 16. */
  padding?: number;
}

/**
 * Content surface container.
 * @startingPoint section="Surfaces" subtitle="Card — elevated / outlined / filled" viewport="700x240"
 */
export function Card(props: CardProps): JSX.Element;
