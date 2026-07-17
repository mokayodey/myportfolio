import React from "react";

/** 1px hairline divider. `inset` indents the left edge for list rows. */
export function Divider({ inset = false, vertical = false, style, ...rest }) {
  if (vertical) {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        style={{ display: "inline-block", width: 1, alignSelf: "stretch", background: "var(--outline-variant)", ...style }}
        {...rest}
      />
    );
  }
  return (
    <hr
      style={{
        border: "none",
        height: 1,
        margin: 0,
        marginLeft: inset ? 72 : 0,
        background: "var(--outline-variant)",
        ...style,
      }}
      {...rest}
    />
  );
}
