'use client';
import React from 'react';

export default function Module16() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-orange-400 mb-6 tracking-wide">
          🌍 Omega News Scanner
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Omega scans global news 24/7 — processing geopolitical shifts, economic headlines, regulatory shocks, and sentiment flows. Every headline is fuel for smarter trades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-orange-400 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-orange-300 mb-2">📰 Real-Time Global Intake</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Streams from financial, political & economic sources</li>
              <li>Sentiment tagging using LLM-based NLP</li>
              <li>Shock detection with threshold triggers</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-orange-400 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-orange-300 mb-2">📡 Strategy Feedback Loop</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>News mapped to asset classes & trade plans</li>
              <li>Dynamic reallocation of attention & risk</li>
              <li>Self-training based on verified signal accuracy</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-orange-400 hover:bg-orange-500 text-black font-bold rounded-2xl shadow-lg transition duration-300">
            Activate Global Feed
          </button>
        </div>
      </section>
    </main>
  );
}
