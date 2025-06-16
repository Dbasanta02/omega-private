'use client';
import React from 'react';

export default function Module12() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">💬 Omega AI Sentiment Aggregator</h1>
        <p className="text-lg text-gray-300 mb-10">
          Omega continuously absorbs global sentiment from news, Twitter, Reddit, financial forums, and newswires — converting emotional tone into tradable insight.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 border border-yellow-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">📥 Data Sources</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>News headlines & financial articles</li>
              <li>Social media (X/Twitter, Reddit)</li>
              <li>Earnings call transcripts & CEO tone</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-yellow-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">📈 Sentiment Scoring Engine</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>LLM-powered tone detection</li>
              <li>Real-time heatmaps and scorecards</li>
              <li>Behavioral alpha tracking</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-2xl shadow-md transition-all duration-200">
            Scan Global Sentiment
          </button>
        </div>
      </section>
    </main>
  );
}
