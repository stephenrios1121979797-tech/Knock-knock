export default function ManagerDashboard() {
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

      <p style={{ opacity: 0.8, marginBottom: "24px" }}>
        Team and territory overview.
      </p>

      <section style={card}>
        <h3>Active Locations</h3>
        <p>Multiple locations supported</p>
      </section>

      <section style={card}>
        <h3>Rep Activity</h3>
        <p>Manual door logs only</p>
      </section>

      <section style={card}>
        <h3>Territory Status</h3>
        <p>Color-coded by last visit</p>
      </section>
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
