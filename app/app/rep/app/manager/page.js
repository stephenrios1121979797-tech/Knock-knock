export default function ManagerDashboard() {
  const locations = [
    "Main Office",
    "North Branch",
    "South Branch"
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
        Location activity overview
      </p>

      {locations.map((loc) => (
        <section key={loc} style={card}>
          <h3 style={{ marginBottom: "6px" }}>{loc}</h3>
          <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
            Activity logged by reps
          </p>
        </section>
      ))}

      <p style={{ marginTop: "24px", fontSize: "0.85rem", opacity: 0.6 }}>
        Detailed stats and maps coming next.
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
