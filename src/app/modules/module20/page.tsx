'use client';
import React from 'react';

export default function Module20() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-green-400 mb-6">
          💼 Omega Portfolio Manager
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Omega’s Portfolio Manager is a self-adaptive asset controller that allocates, rebalances, and compounds capital based on predicted market dynamics and internal profit targets.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-green-500 p-6 rounded-xl">
            <h2 className="text-xl text-green-300 font-semibold mb-2">📊 Allocation Engine</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Dynamic capital allocation across assets</li>
              <li>Powered by risk-reward projections</li>
              <li>Follows user-set or AI-optimized strategy</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-green-500 p-6 rounded-xl">
            <h2 className="text-xl text-green-300 font-semibold mb-2">♻️ Auto-Rebalancer</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Constant evaluation of portfolio drift</li>
              <li>Threshold-based intelligent rebalancing</li>
              <li>Market event aware — stops unnecessary churn</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-2xl transition duration-300">
            Open Portfolio Dashboard
          </button>
        </div>
      </section>
    </main>
  );
}
