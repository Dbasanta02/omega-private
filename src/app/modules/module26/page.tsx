'use client';
import React from 'react';

export default function Module26() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-16">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-yellow-400 mb-6">
          🧬 Omega Trade Memory Codex
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          This codex retains every executed trade, simulated backtest, and pattern discovery. Omega uses this module to analyze historical results, learn from mistakes, and enhance future execution logic in real time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-yellow-500 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">📊 Stored Trade Intelligence</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Trade entry/exit memory chains</li>
              <li>Profit/loss learning matrix</li>
              <li>High-volatility context tagging</li>
              <li>Cross-market memory alignment</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-yellow-500 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">🧠 Recall & Replay Engine</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Replay of all trade decisions</li>
              <li>Neural pattern recognition</li>
              <li>Similarity comparison system</li>
              <li>Emotionless trade review</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-2xl transition duration-300">
            View Historical Trade Codex
          </button>
        </div>
      </section>
    </main>
  );
}
