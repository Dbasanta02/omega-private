'use client';
import React from 'react';

export default function Module11() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-400 mb-6">🧠 Omega AI Trade Commentary Engine</h1>
        <p className="text-lg text-gray-300 mb-10">
          Omega explains every trade with transparent, real-time commentary — revealing the logic, risks, probabilities, and expected returns behind each action.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 border border-pink-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-pink-300 mb-2">📊 Live Trade Justification</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Real-time explanation of every executed trade</li>
              <li>Probability reasoning and confidence levels</li>
              <li>Linked back to data, models, and news input</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-pink-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-pink-300 mb-2">🧩 Model Commentary Fusion</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>LLM-powered clarity in human-readable form</li>
              <li>Uses symbolic + probabilistic logic</li>
              <li>Translates complex systems into intuition</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-pink-400 hover:bg-pink-500 text-black font-semibold rounded-2xl shadow-md transition-all duration-200">
            Generate Commentary
          </button>
        </div>
      </section>
    </main>
  );
}
