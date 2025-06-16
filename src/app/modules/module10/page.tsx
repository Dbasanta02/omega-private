'use client';
import React from 'react';

export default function Module10() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">🔗 Omega Inter-Asset Correlation Core</h1>
        <p className="text-lg text-gray-300 mb-10">
          This system allows Omega to see the invisible forces linking assets together — across stocks, crypto, forex, commodities, and indices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 border border-yellow-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">🌍 Cross-Market Insight</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Detects multi-asset correlations in real-time</li>
              <li>Volatility bleed-through prediction</li>
              <li>Sector contagion heatmaps</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-yellow-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">🔁 Predictive Reaction Engine</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Maps domino effects of news or price shock</li>
              <li>Inter-asset sentiment ripple detection</li>
              <li>Policy and macro factor co-movement</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-2xl shadow-md transition-all duration-200">
            Run Correlation Analysis
          </button>
        </div>
      </section>
    </main>
  );
}
