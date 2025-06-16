'use client';
import React from 'react';

export default function Module8() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-400 mb-6">🧬 Omega Reinforcement Learning Feedback Engine</h1>
        <p className="text-lg text-gray-300 mb-10">
          This engine enables Omega to learn from every trade, improve future decisions, and reinforce profitable behavior while eliminating flawed logic in real time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-emerald-400 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-emerald-300 mb-2">🔁 Live Reward Evaluation</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Profit-based reward scoring</li>
              <li>Risk-adjusted feedback loop</li>
              <li>Positive/negative reinforcement map</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-emerald-400 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-emerald-300 mb-2">📈 Trade Memory Encoding</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Every trade stored with context</li>
              <li>Linked to strategy, signal, and market mood</li>
              <li>Memory access accelerates learning curve</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-2xl shadow-md transition-all duration-200">
            Activate Reinforcement Protocol
          </button>
        </div>
      </section>
    </main>
  );
}
