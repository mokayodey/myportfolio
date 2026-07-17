import * as React from "react";

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  /** Meta parts joined by a middle dot, e.g. ["Category", "$$", "1.2 mi away"]. */
  meta?: string[];
  /** Secondary supporting line (truncated). */
  supporting?: string;
  /** Star rating value (0–5); omit to hide. */
  rating?: number;
  /** Thumbnail: image URL or a React node (e.g. an Icon). */
  thumb?: string | React.ReactNode;
  /** Thumbnail background colour. */
  thumbColor?: string;
  favorite?: boolean;
  /** Pass to render + wire the favourite heart. */
  onToggleFavorite?: () => void;
}

/**
 * Discovery list row (thumbnail · title · meta · rating · save).
 * @startingPoint section="Surfaces" subtitle="Discovery list row with rating & save" viewport="700x110"
 */
export function ListItem(props: ListItemProps): JSX.Element;
