import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Rating } from "./Rating.jsx";

/**
 * The signature discovery list row: square thumbnail, title + meta, optional
 * rating and supporting line, and a tap-to-save favourite heart.
 * Meta parts are joined with a middle dot (e.g. ["Category", "$$", "1.2 mi"]).
 */
export function ListItem({
  title,
  meta = [],
  supporting,
  rating,
  thumb,
  thumbColor = "var(--surface-variant)",
  favorite = false,
  onToggleFavorite,
  onClick,
  style,
  ...rest
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        gap: 16,
        padding: "12px 4px",
        alignItems: "flex-start",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "var(--radius-sm)",
          background: thumbColor,
          flexShrink: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {thumb && (typeof thumb === "string"
          ? <img src={thumb} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          : thumb)}
      </div>

      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 3 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <span style={{ font: "var(--type-title-medium)", color: "var(--on-surface)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {title}
          </span>
          {rating != null && <Rating value={rating} size={16} />}
        </div>
        {meta.length > 0 && (
          <span style={{ font: "var(--type-body-medium)", color: "var(--on-surface-variant)" }}>
            {meta.join("  ·  ")}
          </span>
        )}
        {supporting && (
          <span style={{ font: "var(--type-body-medium)", color: "var(--on-surface-variant)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {supporting}
          </span>
        )}
      </div>

      {onToggleFavorite && (
        <button
          aria-label={favorite ? "Remove from saved" : "Save"}
          onClick={(e) => { e.stopPropagation(); onToggleFavorite(); }}
          style={{
            border: "none", background: "transparent", cursor: "pointer", padding: 4, flexShrink: 0,
            color: favorite ? "var(--error)" : "var(--on-surface-variant)",
          }}
        >
          <Icon name={favorite ? "heart-filled" : "heart"} size={22} />
        </button>
      )}
    </div>
  );
}
