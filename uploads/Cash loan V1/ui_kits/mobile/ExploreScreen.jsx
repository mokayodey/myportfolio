const { TopAppBar, Chip, ListItem, Divider, Icon } = window.MaendeleoDesignSystem_e7e7ed;

function ExploreScreen({ go, saved, toggleSave }) {
  const { Photo } = window;
  const data = window.MK_DATA;
  const [cat, setCat] = React.useState("All");
  const [q, setQ] = React.useState("");

  const list = data.places.filter(p =>
    (cat === "All" || p.cat === cat) &&
    (q === "" || p.name.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ background: "var(--primary)", flexShrink: 0 }}>
        <TopAppBar variant="brand" title="Maendeleo" subtitle="Within 5 miles · Nairobi"
          actions={[{ icon: "bell", label: "Alerts", onClick: () => go("alerts") }]} />
        <div style={{ padding: "0 16px 18px" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, height: 48, padding: "0 16px",
            background: "var(--surface)", borderRadius: "var(--radius-full)", boxShadow: "var(--elevation-2)",
          }}>
            <Icon name="search" size={20} style={{ color: "var(--on-surface-variant)" }} />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search places & services"
              style={{ flex: 1, border: "none", outline: "none", background: "transparent", font: "var(--type-body-large)", color: "var(--on-surface)" }} />
            <Icon name="sliders" size={20} style={{ color: "var(--primary)" }} />
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ display: "flex", gap: 8, padding: "16px", overflowX: "auto" }}>
          {data.categories.map(c => (
            <div key={c} style={{ flexShrink: 0 }}>
              <Chip selected={cat === c} showCheckWhenSelected={false} onClick={() => setCat(c)}>{c}</Chip>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", padding: "0 16px 4px" }}>
          <span className="m-headline-small" style={{ color: "var(--on-background)" }}>Near you</span>
          <span style={{ font: "var(--type-label-large)", color: "var(--primary)" }}>See all</span>
        </div>

        <div style={{ background: "var(--surface)", margin: "8px 12px 16px", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-1)", padding: "4px 14px" }}>
          {list.map((p, i) => (
            <React.Fragment key={p.id}>
              <ListItem
                title={p.name}
                meta={[p.cat, p.price, p.dist]}
                supporting={p.blurb}
                rating={p.rating}
                thumb={<Photo hue={p.hue} height={72} icon="image" />}
                favorite={!!saved[p.id]}
                onToggleFavorite={() => toggleSave(p.id)}
                onClick={() => go("detail", p.id)}
              />
              {i < list.length - 1 && <Divider inset />}
            </React.Fragment>
          ))}
          {list.length === 0 && (
            <div style={{ padding: "40px 8px", textAlign: "center", color: "var(--on-surface-variant)", font: "var(--type-body-medium)" }}>
              No places match “{q}”.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

window.ExploreScreen = ExploreScreen;
