import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * Text field with floating-ish top label, optional leading icon,
 * supporting/error text. Rests on a hairline, focuses to green.
 */
export function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  leadingIcon,
  trailingIcon,
  supportingText,
  error = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const borderColor = error
    ? "var(--error)"
    : focused
    ? "var(--primary)"
    : "var(--outline)";

  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%", ...style }}>
      {label && (
        <span style={{ font: "var(--type-label-large)", letterSpacing: "var(--tracking-label)", color: error ? "var(--error)" : "var(--on-surface-variant)" }}>
          {label}
        </span>
      )}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          height: 48,
          padding: "0 16px",
          borderRadius: "var(--radius-sm)",
          background: disabled ? "var(--surface-variant)" : "var(--surface)",
          border: `1.5px solid ${borderColor}`,
          transition: "border-color .16s ease",
          opacity: disabled ? 0.5 : 1,
        }}
      >
        {leadingIcon && <Icon name={leadingIcon} size={20} style={{ color: "var(--on-surface-variant)" }} />}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            font: "var(--type-body-large)",
            color: "var(--on-surface)",
          }}
          {...rest}
        />
        {trailingIcon && <Icon name={trailingIcon} size={20} style={{ color: "var(--on-surface-variant)" }} />}
      </span>
      {supportingText && (
        <span style={{ font: "var(--type-body-small)", color: error ? "var(--error)" : "var(--on-surface-variant)" }}>
          {supportingText}
        </span>
      )}
    </label>
  );
}
