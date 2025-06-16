'use client';
import React from 'react';

export default function Module9() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">📊 Omega Visual Trading Intelligence Panel</h1>
        <p className="text-lg text-gray-300 mb-10">
          A futuristic data visualization engine built for real-time intelligence. Omega sees markets not as numbers — but as living ecosystems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 border border-cyan-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">📈 Strategy Overlay Panel</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Layered strategy performance</li>
              <li>Live vs. backtest overlays</li>
              <li>Dynamic PnL heatmaps</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-cyan-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-cyan-300 mb-2">🧠 AI Sentiment Stream</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Live sentiment visualization</li>
              <li>Topic clustering & impact factor</li>
              <li>Volatility predictor gauges</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold rounded-2xl shadow-md transition-all duration-200">
            Launch Intelligence Panel
          </button>
        </div>
      </section>
    </main>
  );
}
