const { TopAppBar, Button, Rating, Avatar, Divider, Card, Icon } = window.MaendeleoDesignSystem_e7e7ed;

function ReviewsScreen({ go, placeId }) {
  const data = window.MK_DATA;
  const p = data.places.find(x => x.id === placeId) || data.places[0];
  const [draft, setDraft] = React.useState(0);

  const dist = [78, 14, 5, 2, 1];
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "var(--background)" }}>
      <TopAppBar title="Reviews" subtitle={p.name} leadingIcon="chevron-left" onLeading={() => go("detail", p.id)} />

      <div style={{ flex: 1, overflowY: "auto", padding: "16px" }}>
        <Card variant="elevated" style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div className="m-display-small" style={{ color: "var(--on-surface)" }}>{p.rating.toFixed(1)}</div>
            <Rating value={p.rating} size={16} />
            <div style={{ font: "var(--type-body-small)", color: "var(--on-surface-variant)", marginTop: 4 }}>{p.reviews} reviews</div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
            {dist.map((pct, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ font: "var(--type-body-small)", color: "var(--on-surface-variant)", width: 10 }}>{5 - i}</span>
                <span style={{ flex: 1, height: 6, borderRadius: "var(--radius-full)", background: "var(--outline-variant)", overflow: "hidden" }}>
                  <span style={{ display: "block", width: pct + "%", height: "100%", background: "var(--secondary)" }} />
                </span>
              </div>
            ))}
          </div>
        </Card>

        <div style={{ background: "var(--surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-1)", padding: "16px", margin: "16px 0" }}>
          <div style={{ font: "var(--type-title-medium)", color: "var(--on-surface)", marginBottom: 8 }}>Rate your visit</div>
          <Rating value={draft} size={32} onRate={setDraft} />
          <Button variant="primary" fullWidth iconLeft="edit" style={{ marginTop: 14 }} disabled={draft === 0}>
            {draft === 0 ? "Tap a star to begin" : "Write a review"}
          </Button>
        </div>

        <div style={{ background: "var(--surface)", borderRadius: "var(--radius-md)", boxShadow: "var(--elevation-1)", padding: "4px 16px" }}>
          {data.reviews.map((r, i) => (
            <React.Fragment key={r.id}>
              <div style={{ padding: "14px 0" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <Avatar name={r.name} size={40} />
                  <div style={{ flex: 1 }}>
                    <div style={{ font: "var(--type-title-small)", color: "var(--on-surface)" }}>{r.name}</div>
                    <span style={{ font: "var(--type-body-small)", color: "var(--on-surface-variant)" }}>{r.when}</span>
                  </div>
                  <Rating value={r.rating} size={14} />
                </div>
                <p style={{ margin: "8px 0 0", font: "var(--type-body-medium)", color: "var(--on-surface-variant)" }}>{r.text}</p>
              </div>
              {i < data.reviews.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

window.ReviewsScreen = ReviewsScreen;
