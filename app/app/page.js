export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0f172a",
        color: "#f8fafc",
        padding: "24px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "2.2rem", marginBottom: "12px" }}>
        Knock Knock
      </h1>

      <p style={{ maxWidth: "420px", opacity: 0.9 }}>
        Door-to-door roofing sales tracking for reps and managers.
      </p>

      <div style={{ marginTop: "32px", width: "100%" }}>
        <button
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "12px",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "none",
            background: "#22c55e",
            color: "#022c22",
            fontWeight: "600"
          }}
        >
          Rep Login
        </button>

        <button
          style={{
            width: "100%",
            padding: "14px",
            fontSize: "1rem",
            borderRadius: "10px",
            border: "1px solid #334155",
            background: "transparent",
            color: "#f8fafc"
          }}
        >
          Manager Login
        </button>
      </div>
    </main>
  );
}
