export default function Stat({
  value,
  label,
  size = "md",
  inverted = false,
}: {
  value: string;
  label: string;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}) {
  const sizeClass =
    size === "lg"
      ? "text-3xl md:text-[56px]"
      : size === "sm"
        ? "text-xl md:text-[26px]"
        : "text-2xl md:text-[32px]";
  return (
    <div>
      <div
        className={`font-archivo-expanded font-extrabold leading-none ${sizeClass} ${inverted ? "text-canvas" : "text-accent"}`}
      >
        {value}
      </div>
      <div
        className={`mt-2 text-xs font-medium leading-snug ${inverted ? "text-canvas/60" : "text-ink/55"}`}
      >
        {label}
      </div>
    </div>
  );
}
