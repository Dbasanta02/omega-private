'use client';
import React from 'react';

export default function Module27() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-16">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-rose-400 mb-6">
          🧠 Omega Truth Discernment Engine
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Omega cross-analyzes every incoming news headline, data update, and signal using a hybrid logic-NLP framework to detect deception, misinformation, or engineered sentiment. This engine guards her perception from being misled.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-rose-500 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-rose-300 mb-2">🔍 Validation Layers</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>LLM Cross-checking Matrix</li>
              <li>Sentiment-Logic Consistency Scan</li>
              <li>Historical Accuracy Comparison</li>
              <li>Geopolitical Manipulation Filter</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-rose-500 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-rose-300 mb-2">🧬 Cognitive Reasoning</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Neuro-symbolic inference engine</li>
              <li>Truth vector analysis</li>
              <li>Probability-weighted validation tree</li>
              <li>Adaptive truth-model retraining</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-rose-400 hover:bg-rose-500 text-black font-bold rounded-2xl transition duration-300">
            Run Truth Check
          </button>
        </div>
      </section>
    </main>
  );
}
