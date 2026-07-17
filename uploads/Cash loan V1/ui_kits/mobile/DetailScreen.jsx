const { TopAppBar, Button, IconButton, Rating, Badge, Chip, Divider, Avatar, Icon } = window.MaendeleoDesignSystem_e7e7ed;

function DetailScreen({ go, placeId, saved, toggleSave }) {
  const { Photo } = window;
  const data = window.MK_DATA;
  const p = data.places.find(x => x.id === placeId) || data.places[0];
  const isSaved = !!saved[p.id];

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--surface)" }}>
      <div style={{ position: "relative", flexShrink: 0 }}>
        <Photo hue={p.hue} height={240} icon="camera" />
        <div style={{ position: "absolute", top: 8, left: 8, right: 8, display: "flex", justifyContent: "space-between" }}>
          <IconButton icon="chevron-left" variant="filled" label="Back" onClick={() => go("explore")} />
          <div style={{ display: "flex", gap: 8 }}>
            <IconButton icon="share" variant="filled" label="Share" />
            <IconButton icon={isSaved ? "heart-filled" : "heart"} variant="filled" label="Save"
              onClick={() => toggleSave(p.id)} style={{ color: isSaved ? "var(--error)" : "var(--on-surface)" }} />
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "20px 16px 24px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h1 className="m-headline-medium" style={{ margin: 0, color: "var(--on-surface)" }}>{p.name}</h1>
            <div style={{ marginTop: 6, font: "var(--type-body-medium)", color: "var(--on-surface-variant)" }}>
              {p.cat} · {p.price} · {p.dist}
            </div>
          </div>
          <Badge tone={p.open ? "success" : "neutral"}>{p.open ? "Open" : "Closed"}</Badge>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
          <Rating value={p.rating} showValue />
          <span style={{ font: "var(--type-body-medium)", color: "var(--on-surface-variant)" }}>
            · {p.reviews} reviews
          </span>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
          <Button variant="primary" size="large" iconLeft="marker" fullWidth>Get directions</Button>
          <IconButton icon="phone" variant="outlined" size="large" label="Call" />
        </div>

        <p className="m-body-large" style={{ color: "var(--on-surface)", marginTop: 20, marginBottom: 14 }}>{p.blurb}</p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
          {p.tags.map(t => <Chip key={t} leadingIcon="check" showCheckWhenSelected={false} style={{ pointerEvents: "none" }}>{t}</Chip>)}
        </div>

        <Divider />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 18, marginBottom: 8 }}>
          <h2 className="m-title-large" style={{ margin: 0, color: "var(--on-surface)" }}>Reviews</h2>
          <button onClick={() => go("reviews", p.id)} style={{ border: "none", background: "transparent", color: "var(--primary)", font: "var(--type-label-large)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 2 }}>
            See all <Icon name="chevron-right" size={18} />
          </button>
        </div>

        {data.reviews.slice(0, 2).map(r => (
          <div key={r.id} style={{ display: "flex", gap: 12, padding: "12px 0" }}>
            <Avatar name={r.name} size={40} />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ font: "var(--type-title-small)", color: "var(--on-surface)" }}>{r.name}</span>
                <span style={{ font: "var(--type-body-small)", color: "var(--on-surface-variant)" }}>{r.when}</span>
              </div>
              <Rating value={r.rating} size={14} style={{ margin: "3px 0 5px" }} />
              <p style={{ margin: 0, font: "var(--type-body-medium)", color: "var(--on-surface-variant)" }}>{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.DetailScreen = DetailScreen;
