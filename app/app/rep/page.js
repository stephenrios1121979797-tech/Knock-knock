"use client";

import { useState } from "react";

export default function RepDashboard() {
  const [counts, setCounts] = useState({
    knock: 0,
    talk: 0,
    walk: 0,
    noAnswer: 0
  });

  const confirmAndLog = (type) => {
    // Enforce Walk rule
    if (type === "walk" && counts.talk === 0) {
      alert("You must log a Talk before logging a Walk.");
      return;
    }

    const labelMap = {
      knock: "Knock",
      talk: "Talk",
      walk: "Walk (Roof)",
      noAnswer: "No Answer"
    };

    const confirmed = confirm(`Confirm ${labelMap[type]}?`);
    if (!confirmed) return;

    setCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

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

      <p style={{ opacity: 0.8, marginBottom: "16px" }}>
        Manual door logging with confirmation
      </p>

      {/* COUNTERS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginBottom: "24px"
        }}
      >
        <Stat label="Knocks" value={counts.knock} />
        <Stat label="Talks" value={counts.talk} />
        <Stat label="Walks" value={counts.walk} />
        <Stat label="No Answer" value={counts.noAnswer} />
      </section>

      {/* ACTION BUTTONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px"
        }}
      >
        <button style={greenBtn} onClick={() => confirmAndLog("knock")}>
          Knock
        </button>

        <button style={greenBtn} onClick={() => confirmAndLog("talk")}>
          Talk
        </button>

        <button style={greenBtn} onClick={() => confirmAndLog("walk")}>
          Walk (Roof)
        </button>

        <button style={grayBtn} onClick={() => confirmAndLog("noAnswer")}>
          No Answer
        </button>
      </div>

      <p style={{ marginTop: "20px", fontSize: "0.85rem", opacity: 0.6 }}>
        Walks require a Talk. All actions require confirmation.
      </p>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div
      style={{
        background: "#020617",
        border: "1px solid #1e293b",
        borderRadius: "12px",
        padding: "14px",
        textAlign: "center"
      }}
    >
      <div style={{ fontSize: "1.4rem", fontWeight: "700" }}>{value}</div>
      <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>{label}</div>
    </div>
  );
}

const greenBtn = {
  padding: "18px",
  borderRadius: "12px",
  fontSize: "1rem",
  fontWeight: "600",
  border: "none",
  background: "#22c55e",
  color: "#022c22"
};

const grayBtn = {
  ...greenBtn,
  background: "#334155",
  color: "#f8fafc"
};
