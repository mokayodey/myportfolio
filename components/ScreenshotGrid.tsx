import FullImage from "./FullImage";

export type Screenshot = {
  src: string;
  caption: string;
  alt?: string;
};

export default function ScreenshotGrid({
  items,
  cols = 3,
  frame = "phone",
}: {
  items: Screenshot[];
  cols?: 2 | 3 | 4;
  frame?: "phone" | "plain";
}) {
  const colsClass =
    cols === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : cols === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 gap-6 ${colsClass}`}>
      {items.map((item) => (
        <div key={item.src}>
          <div
            className={
              frame === "phone"
                ? "overflow-hidden rounded-[14px] bg-muted shadow-[0_12px_30px_rgba(12,14,12,.14)]"
                : "overflow-hidden rounded-md border border-ink/12"
            }
          >
            <FullImage src={item.src} alt={item.alt ?? item.caption} />
          </div>
          <div className="mt-2.5 text-center text-xs font-semibold leading-snug text-ink/60">
            {item.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
