import { ReactNode } from "react";

export default function Section({
  label,
  children,
  bg = "canvas",
  inverted = false,
  className = "",
}: {
  label: string;
  children: ReactNode;
  bg?: "canvas" | "muted" | "ink";
  inverted?: boolean;
  className?: string;
}) {
  const bgClass =
    bg === "muted" ? "bg-muted" : bg === "ink" ? "bg-ink" : "bg-canvas";
  const textClass = inverted ? "text-canvas" : "";
  const labelClass = inverted ? "text-accent" : "text-ink/50";

  return (
    <div
      className={`border-b border-ink/12 px-4 py-14 sm:px-5 md:px-14 md:py-20 ${bgClass} ${textClass} ${className}`}
    >
      <div
        className={`mb-6 text-xs font-semibold uppercase leading-none tracking-[.14em] ${labelClass}`}
      >
        {label}
      </div>
      {children}
    </div>
  );
}
