'use client';
import React from 'react';

export default function Module7() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-6">♟️ Omega Strategy Generation Engine</h1>
        <p className="text-lg text-gray-300 mb-10">
          Omega autonomously crafts trading strategies using global data, deep financial models, game theory, and reinforcement learning.
          This engine ensures each strategy is optimized for maximum profit, minimal risk, and alignment with real-time market conditions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-blue-400 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-300 mb-2">🎯 Objective-Aware Strategy Builder</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Profit Maximization</li>
              <li>Capital Protection</li>
              <li>Volatility Shielding</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-blue-400 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-300 mb-2">🧠 AI-Powered Logic Trees</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Game Theory + Decision Trees</li>
              <li>Multi-layered Reinforcement Learning</li>
              <li>Macro-Micro Signal Fusion</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-blue-400 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-blue-300 mb-2">🔀 Dynamic Strategy Switching</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Instant Adaptation to News</li>
              <li>Strategy Mutation & Recombination</li>
              <li>Smart Stop-Loss Rules</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-blue-400 hover:bg-blue-500 text-black font-semibold rounded-2xl shadow-md transition-all duration-200">
            Generate New Strategy
          </button>
        </div>
      </section>
    </main>
  );
}
