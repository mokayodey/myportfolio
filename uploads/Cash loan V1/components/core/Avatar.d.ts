import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when omitted. */
  src?: string;
  /** Full name — used for initials and alt text. */
  name?: string;
  /** Diameter in px. Default 40. */
  size?: number;
}

/** Circular user avatar (image or initials). */
export function Avatar(props: AvatarProps): JSX.Element;
