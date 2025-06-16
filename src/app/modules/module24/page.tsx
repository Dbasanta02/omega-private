'use client';
import React from 'react';

export default function Module24() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-400 mb-6">
          🛡️ Omega Real-Time Risk Manager
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          This module continuously monitors Omega’s capital exposure, volatility patterns, regulatory thresholds, and trade confidence. It enforces safety overrides and intelligent stop-loss logic using real-time data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-red-500 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-red-300 mb-2">🔍 Risk Factors</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Real-time volatility scan</li>
              <li>Position leverage monitor</li>
              <li>Trade confidence analysis</li>
              <li>Liquidity heat zones</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-red-500 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-red-300 mb-2">🛑 Control Mechanisms</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>AI-powered stop-loss override</li>
              <li>Dynamic capital throttling</li>
              <li>Market freeze detection</li>
              <li>Legal compliance halt</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-red-500 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-red-300 mb-2">⚖️ Risk Metrics Displayed</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Value at Risk (VaR)</li>
              <li>Expected Shortfall (CVaR)</li>
              <li>Max Drawdown Realtime</li>
              <li>Stress Scenario Heatmap</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-black font-bold rounded-2xl transition duration-300">
            Analyze Risk Snapshot
          </button>
        </div>
      </section>
    </main>
  );
}
