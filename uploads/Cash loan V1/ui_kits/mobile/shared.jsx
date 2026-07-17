// Shared UI-kit helpers, exported to window for the other babel scripts.
const { Icon, Badge } = window.MaendeleoDesignSystem_e7e7ed;

/** Faux place photo: a soft duotone block keyed off the place hue. */
function Photo({ hue = 140, radius = 0, height = 200, icon = "image", style }) {
  return (
    <div style={{
      height, borderRadius: radius, position: "relative", overflow: "hidden",
      background: `linear-gradient(135deg, hsl(${hue} 45% 82%), hsl(${hue} 38% 68%))`,
      display: "flex", alignItems: "center", justifyContent: "center", ...style,
    }}>
      <Icon name={icon} size={Math.min(48, height * 0.3)} style={{ color: `hsl(${hue} 40% 42%)`, opacity: 0.7 }} />
    </div>
  );
}

/** iOS-style status bar to sell the mobile frame. */
function StatusBar({ dark = false }) {
  const c = dark ? "#fff" : "var(--on-surface)";
  return (
    <div style={{
      height: 44, display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 22px 0 26px", color: c, font: "var(--type-label-large)", flexShrink: 0,
    }}>
      <span style={{ fontWeight: 600 }}>9:41</span>
      <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
        <span style={{ width: 17, height: 11, border: `1.5px solid ${c}`, borderRadius: 3, opacity: 0.9, display: "inline-block" }} />
      </span>
    </div>
  );
}

Object.assign(window, { Photo, StatusBar });
