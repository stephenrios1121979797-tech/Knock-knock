export default function RepDashboard() {
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
        Rep Dashboard
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "24px" }}>
        Log door activity manually.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px"
        }}
      >
        <button style={buttonStyle}>Knock</button>
        <button style={buttonStyle}>Talk</button>
        <button style={buttonStyle}>Walk</button>
        <button style={buttonStyleAlt}>No Answer</button>
      </div>

      <p style={{ marginTop: "24px", fontSize: "0.9rem", opacity: 0.6 }}>
        * Walk can only be logged after a Talk (enforced later)
      </p>
    </main>
  );
}

const buttonStyle = {
  padding: "18px",
  borderRadius: "12px",
  fontSize: "1rem",
  fontWeight: "600",
  border: "none",
  background: "#22c55e",
  color: "#022c22"
};

const buttonStyleAlt = {
  ...buttonStyle,
  background: "#334155",
  color: "#f8fafc"
};
