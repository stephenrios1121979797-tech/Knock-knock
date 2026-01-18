export default function ManagerDashboard() {
  const locations = [
    "Main Office",
    "North Branch",
    "South Branch"
  ];

  const agingRules = [
    { label: "Fresh", range: "0–7 days", color: "#22c55e" },
    { label: "Warming", range: "8–21 days", color: "#eab308" },
    { label: "Cold", range: "22+ days", color: "#ef4444" }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "20px",
        background: "#020617",
        color: "#f8fafc"
      }}
    >
      <h1 style={{ fontSize: "1.8rem", marginBottom: "6px" }}>
        Manager Dashboard
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "20px" }}>
        Territory freshness overview
      </p>

      {/* TERRITORY AGING RULES */}
      <section style={card}>
        <h3 style={{ marginBottom: "12px" }}>Territory Aging Rules</h3>

        {agingRules.map((rule) => (
          <div
            key={rule.label}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px"
            }}
          >
            <span
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "4px",
                background: rule.color,
                display: "inline-block",
                marginRight: "10px"
              }}
            />
            <span style={{ fontSize: "0.9rem" }}>
              {rule.label} ({rule.range})
            </span>
          </div>
        ))}
      </section>

      {/* LOCATIONS */}
      <h3 style={{ margin: "20px 0 10px" }}>Locations</h3>

      {locations.map((loc) => (
        <section key={loc} style={card}>
          <strong>{loc}</strong>
          <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
            Territory color based on last rep activity
          </p>
        </section>
      ))}

      <p style={{ marginTop: "24px", fontSize: "0.85rem", opacity: 0.6 }}>
        Map view will reflect these rules.
      </p>
    </main>
  );
}

const card = {
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "12px",
  padding: "16px",
  marginBottom: "12px"
};
