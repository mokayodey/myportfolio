import * as React from "react";

export interface IconGlyph { vb: string; inner: string; }
export const ICON_DATA: Record<string, IconGlyph>;
export const ICON_NAMES: string[];

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Icon name. See ICON_NAMES for the full set. */
  name: string;
  /** Pixel size (width = height). Default 24. */
  size?: number;
  /** Accessible label. Omit for decorative icons (renders aria-hidden). */
  label?: string;
}

/** Inline-SVG monochrome line icon; inherits currentColor. */
export function Icon(props: IconProps): JSX.Element;
