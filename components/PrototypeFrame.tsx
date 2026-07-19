import type { CSSProperties } from "react";

// The prototype's device mockup is a fixed 372×788 box that only fits its
// natural layout (no squished/clipped content) at something close to its
// own 430×860 natural iframe size. Rendering it at that size and then
// CSS-scaling the whole iframe down to fit a compact card — instead of
// shrinking the iframe's own box, which triggers flexbox-driven squish
// inside the prototype — keeps every screen fully legible. The desktop
// scale swap lives in globals.css (.prototype-frame-iframe media query),
// driven by the --proto-desktop-scale custom property set below.
const NATURAL_WIDTH = 430;
const NATURAL_HEIGHT = 860;

export default function PrototypeFrame({
  src,
  screen,
  title,
  mobileHeight = 400,
  desktopHeight = 540,
  className = "",
}: {
  src: string;
  screen?: string;
  title: string;
  mobileHeight?: number;
  desktopHeight?: number;
  className?: string;
}) {
  const mobileScale = mobileHeight / NATURAL_HEIGHT;
  const desktopScale = desktopHeight / NATURAL_HEIGHT;

  return (
    <div
      className={`flex items-start justify-center overflow-hidden rounded-md bg-muted ${className}`}
      style={
        {
          height: mobileHeight,
          "--proto-desktop-scale": desktopScale,
        } as CSSProperties
      }
    >
      <iframe
        src={src}
        title={title}
        data-deep-screen={screen}
        scrolling="no"
        loading="lazy"
        width={NATURAL_WIDTH}
        height={NATURAL_HEIGHT}
        className="prototype-frame-iframe origin-top border-0"
        style={{ transform: `scale(${mobileScale})` }}
      />
    </div>
  );
}
