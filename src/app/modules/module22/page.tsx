'use client';
import React from 'react';

export default function Module22() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-pink-400 mb-6">
          📚 Omega NLP Knowledge Extractor
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Omega’s NLP module reads and understands global financial documents to extract key insights. This allows her to act faster than any human analyst.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-pink-500 p-6 rounded-xl">
            <h2 className="text-xl text-pink-300 font-semibold mb-2">🧠 Document Types</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>SEC Filings (10-K, 8-K, S-1)</li>
              <li>Central Bank reports (FOMC, ECB)</li>
              <li>Annual reports, earnings calls</li>
              <li>Economic whitepapers & treaties</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-pink-500 p-6 rounded-xl">
            <h2 className="text-xl text-pink-300 font-semibold mb-2">📤 Extracted Intelligence</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Sentiment trends</li>
              <li>Macro signals (inflation, GDP, labor)</li>
              <li>Hidden risks or bullish patterns</li>
              <li>Executive tone shift and alert triggers</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-black font-bold rounded-2xl transition duration-300">
            Upload & Parse File
          </button>
        </div>
      </section>
    </main>
  );
}
