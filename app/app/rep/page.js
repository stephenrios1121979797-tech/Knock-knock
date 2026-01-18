"use client";

import { useState } from "react";

const LOCATIONS = [
  "Main Office",
  "North Branch",
  "South Branch"
];

export default function RepDashboard() {
  const [location, setLocation] = useState("");
  const [counts, setCounts] = useState({
    knock: 0,
    talk: 0,
    walk: 0,
    noAnswer: 0
  });

  const confirmAndLog = (type) => {
    if (!location) {
      alert("Select a location before logging doors.");
      return;
    }

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

    const confirmed = confirm(`Confirm ${labelMap[type]} at ${location}?`);
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

      <p style={{ opacity: 0.8, marginBottom: "12px" }}>
        Select your location before logging doors
      </p>

      {/* LOCATION SELECT */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          marginBottom: "20px",
          background: "#020617",
          color: "#f8fafc",
          border: "1px solid #334155"
        }}
      >
        <option value="">Select location…</option>
        {LOCATIONS.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

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
        Location required. Walks require a Talk.
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
