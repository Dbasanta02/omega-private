// frontend.tsx – Omega Regulatory Alert UI (Module 34)
"use client";

import React, { useState } from "react";

const Module34 = () => {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [headline, setHeadline] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");

  const handleSimulateEvent = async () => {
    const event = {
      headline,
      tags: tags.split(",").map(tag => tag.trim()),
      content
    };

    try {
      const response = await fetch("/api/module34/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(event)
      });

      const result = await response.json();
      setAlerts(result.alerts);
    } catch (err) {
      console.error("Simulation error:", err);
    }
  };

  return (
    <div className="p-6 rounded-xl shadow-xl bg-black text-white space-y-4">
      <h2 className="text-xl font-bold">🛡️ Regulatory Alert System</h2>

      <input
        type="text"
        className="w-full p-2 rounded bg-gray-800 text-white"
        placeholder="Headline (e.g., SEC issues new rule)"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-2 rounded bg-gray-800 text-white"
        placeholder="Tags (comma-separated, e.g., SEC, compliance)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <textarea
        className="w-full p-2 rounded bg-gray-800 text-white"
        placeholder="Event Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleSimulateEvent}
        className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-800"
      >
        Simulate Alert Event
      </button>

      {alerts.length > 0 && (
        <div className="mt-4 bg-gray-900 p-4 rounded-xl max-h-64 overflow-auto">
          <h3 className="font-semibold">Triggered Alerts:</h3>
          <ul className="space-y-2 text-sm">
            {alerts.map((a, i) => (
              <li key={i}>
                <strong>{a.rule}</strong>: {a.event.headline}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Module34;
