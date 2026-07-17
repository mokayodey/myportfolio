const { BottomNav, TopAppBar, ListItem, Divider, Icon, Button, Badge } = window.MaendeleoDesignSystem_e7e7ed;

function SavedScreen({ go, saved, toggleSave }) {
  const { Photo } = window;
  const data = window.MK_DATA;
  const list = data.places.filter(p => saved[p.id]);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--background)" }}>
      <TopAppBar variant="brand" title="Saved" subtitle={`${list.length} places`} />
      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
        {list.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 24px", color: "var(--on-surface-variant)" }}>
            <Icon name="heart" size={40} style={{ color: "var(--outline)" }} />
            <p className="m-title-medium" style={{ color: "var(--on-surface)", margin: "12px 0 4px" }}>Nothing saved yet</p>
            <p style={{ font: "var(--type-body-medium)", margin: 0 }}>Tap the heart on any place to save it here.</p>
            <Button variant="primary" style={{ marginTop: 18 }} onClick={() => go("explore")}>Explore places</Button>
          </div>
        ) : (
          <div style={{ background: "var(--surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-1)", padding: "4px 14px" }}>
            {list.map((p, i) => (
              <React.Fragment key={p.id}>
                <ListItem title={p.name} meta={[p.cat, p.price, p.dist]} supporting={p.blurb} rating={p.rating}
                  thumb={<Photo hue={p.hue} height={72} />} favorite onToggleFavorite={() => toggleSave(p.id)}
                  onClick={() => go("detail", p.id)} />
                {i < list.length - 1 && <Divider inset />}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AlertsScreen() {
  const items = [
    { icon: "tag", tone: "soft", title: "Karibu Market", text: "20% off fresh produce this weekend.", when: "1h" },
    { icon: "star", tone: "soft", title: "New review", text: "Your review of Tausi Café got 3 likes.", when: "5h" },
    { icon: "gift", tone: "soft", title: "Points earned", text: "You earned 40 points for visiting Jiko Kitchen.", when: "1d" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--background)" }}>
      <TopAppBar variant="brand" title="Alerts" />
      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
        <div style={{ background: "var(--surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-1)", padding: "4px 16px" }}>
          {items.map((n, i) => (
            <React.Fragment key={i}>
              <div style={{ display: "flex", gap: 14, padding: "14px 0", alignItems: "flex-start" }}>
                <span style={{ width: 40, height: 40, borderRadius: "var(--radius-full)", background: "var(--primary-container)", color: "var(--on-primary-container)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={n.icon} size={20} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ font: "var(--type-title-small)", color: "var(--on-surface)" }}>{n.title}</span>
                    <span style={{ font: "var(--type-body-small)", color: "var(--on-surface-variant)" }}>{n.when}</span>
                  </div>
                  <p style={{ margin: "2px 0 0", font: "var(--type-body-medium)", color: "var(--on-surface-variant)" }}>{n.text}</p>
                </div>
              </div>
              {i < items.length - 1 && <Divider inset />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [stack, setStack] = React.useState([{ screen: "explore" }]);
  const [saved, setSaved] = React.useState({ karibu: true, afya: true });
  const top = stack[stack.length - 1];

  const go = (screen, placeId) => {
    const tabs = ["explore", "saved", "alerts", "account"];
    if (tabs.includes(screen)) setStack([{ screen }]);
    else setStack(s => [...s, { screen, placeId }]);
  };
  const toggleSave = (id) => setSaved(s => ({ ...s, [id]: !s[id] }));

  const tab = ["explore", "saved", "alerts", "account"].includes(top.screen) ? top.screen : null;
  const showNav = tab !== null;
  const onGreen = tab !== null;          // tab screens have a green brand bar
  const statusBg = onGreen ? "var(--primary)" : "var(--surface)";

  let body;
  if (top.screen === "explore") body = <ExploreScreen go={go} saved={saved} toggleSave={toggleSave} />;
  else if (top.screen === "saved") body = <SavedScreen go={go} saved={saved} toggleSave={toggleSave} />;
  else if (top.screen === "alerts") body = <AlertsScreen />;
  else if (top.screen === "account") body = <AccountScreen go={go} saved={saved} />;
  else if (top.screen === "detail") body = <DetailScreen go={go} placeId={top.placeId} saved={saved} toggleSave={toggleSave} />;
  else if (top.screen === "reviews") body = <ReviewsScreen go={go} placeId={top.placeId} />;

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ background: statusBg, flexShrink: 0 }}>
        <window.StatusBar dark={onGreen} />
      </div>
      <div style={{ flex: 1, minHeight: 0 }}>{body}</div>
      {showNav && (
        <BottomNav
          value={tab}
          onChange={(k) => go(k)}
          items={[
            { key: "explore", icon: "search", label: "Explore" },
            { key: "saved", icon: "heart", label: "Saved" },
            { key: "alerts", icon: "bell", label: "Alerts" },
            { key: "account", icon: "user", label: "Account" },
          ]}
        />
      )}
    </div>
  );
}

window.App = App;
