import * as React from "react";

export interface BottomNavItem {
  key: string;
  icon: string;
  label: string;
}

export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  items: BottomNavItem[];
  /** Key of the active item. */
  value: string;
  onChange?: (key: string) => void;
}

/** Mobile bottom navigation bar (amber active pill). */
export function BottomNav(props: BottomNavProps): JSX.Element;
