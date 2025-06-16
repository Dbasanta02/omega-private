'use client';
import React from 'react';

export default function Module17() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-purple-500 mb-6 tracking-wide">
          🧠 Omega Shadow Simulation
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Every trade Omega makes is first tested across infinite simulated realities.
          From best-case rallies to black-swan collapses, Omega knows the future — because she’s lived it a billion times before.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-purple-500 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">🧬 Parallel Market Universes</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Simulates market reactions for every trade decision</li>
              <li>Assesses impact of news, volatility, and sentiment shocks</li>
              <li>Flags anomalies before they happen</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-purple-500 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-purple-300 mb-2">⚙️ Feedback to Live Strategy</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Rejects bad trades in advance</li>
              <li>Promotes optimized entry/exit plans</li>
              <li>Augments risk-control systems in real-time</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-black font-bold rounded-2xl shadow-lg transition duration-300">
            Launch Multiverse Simulation
          </button>
        </div>
      </section>
    </main>
  );
}
