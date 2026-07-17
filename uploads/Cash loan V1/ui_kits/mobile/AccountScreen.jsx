const { TopAppBar, Avatar, Switch, Divider, Badge, Icon, Button } = window.MaendeleoDesignSystem_e7e7ed;

function AccountScreen({ go, saved }) {
  const data = window.MK_DATA;
  const [push, setPush] = React.useState(true);
  const [loc, setLoc] = React.useState(true);
  const savedCount = Object.values(saved).filter(Boolean).length;

  const Row = ({ icon, label, trailing, onClick }) => (
    <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 4px", cursor: onClick ? "pointer" : "default" }}>
      <span style={{ width: 40, height: 40, borderRadius: "var(--radius-full)", background: "var(--primary-container)", color: "var(--on-primary-container)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <Icon name={icon} size={20} />
      </span>
      <span style={{ flex: 1, font: "var(--type-body-large)", color: "var(--on-surface)" }}>{label}</span>
      {trailing}
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--background)" }}>
      <TopAppBar variant="brand" title="Account" />
      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, background: "var(--surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-1)", padding: "18px" }}>
          <Avatar name="Amani Juma" size={56} />
          <div style={{ flex: 1 }}>
            <div className="m-title-large" style={{ color: "var(--on-surface)" }}>Amani Juma</div>
            <div style={{ font: "var(--type-body-medium)", color: "var(--on-surface-variant)" }}>amani.juma@example.com</div>
          </div>
          <Icon name="edit" size={20} style={{ color: "var(--on-surface-variant)" }} />
        </div>

        <div style={{ display: "flex", gap: 12, margin: "16px 0" }}>
          {[["Saved", savedCount, "heart"], ["Reviews", 12, "star"], ["Points", 340, "coins"]].map(([k, v, ic]) => (
            <div key={k} style={{ flex: 1, background: "var(--surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-1)", padding: "14px", textAlign: "center" }}>
              <Icon name={ic} size={20} style={{ color: "var(--primary)" }} />
              <div className="m-title-large" style={{ color: "var(--on-surface)", marginTop: 4 }}>{v}</div>
              <div style={{ font: "var(--type-body-small)", color: "var(--on-surface-variant)" }}>{k}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "var(--surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-1)", padding: "4px 16px" }}>
          <Row icon="heart" label="Saved places" trailing={<Badge tone="soft">{savedCount}</Badge>} onClick={() => go("explore")} />
          <Divider inset />
          <Row icon="bell" label="Push notifications" trailing={<Switch checked={push} onChange={setPush} />} />
          <Divider inset />
          <Row icon="marker" label="Location services" trailing={<Switch checked={loc} onChange={setLoc} />} />
          <Divider inset />
          <Row icon="wallet" label="Payment methods" trailing={<Icon name="chevron-right" size={20} style={{ color: "var(--on-surface-variant)" }} />} onClick={() => {}} />
          <Divider inset />
          <Row icon="settings" label="Settings" trailing={<Icon name="chevron-right" size={20} style={{ color: "var(--on-surface-variant)" }} />} onClick={() => {}} />
        </div>

        <Button variant="secondary" fullWidth iconLeft="lock" style={{ marginTop: 16 }}>Sign out</Button>
      </div>
    </div>
  );
}

window.AccountScreen = AccountScreen;
