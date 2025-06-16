'use client';
import React from 'react';

export default function Module6() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">📰 Omega Global News Intelligence</h1>
        <p className="text-lg text-gray-300 mb-8">
          This engine scans and decodes global news, macroeconomic triggers, and regulatory developments in real-time. All extracted intelligence is routed into Omega's strategy system to adapt instantly to external shocks.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400 shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">🌍 Global Macro Feed</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Economic Policy Updates</li>
              <li>War/Conflict Alerts</li>
              <li>Regulatory Announcements</li>
              <li>Global Market Sentiment</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400 shadow-lg">
            <h2 className="text-2xl font-semibold text-yellow-300 mb-2">📈 Financial Impact Analysis</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>News Sentiment Score</li>
              <li>Predicted Market Volatility</li>
              <li>Sectoral Risk Assessment</li>
              <li>Currency and Index Response</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-2xl shadow-lg transition-all duration-200">
            Scan Global News
          </button>
        </div>
      </section>
    </main>
  );
}
