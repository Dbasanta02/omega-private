'use client';
import React from 'react';

export default function Module3() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">🚀 Omega Mission Control</h1>
        <p className="text-lg text-gray-300 mb-6">
          This is the central command interface where all modules, diagnostics, and live controls are initiated. Omega receives strategic directives and executes operational flows from this interface.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-xl p-6 border border-blue-500 shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">🧠 Intelligence Modules</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Sentience Core</li>
              <li>Reinforcement Engine</li>
              <li>Prediction Matrix</li>
              <li>Self-Repair Subsystem</li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-blue-500 shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">📡 System Controls</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Live Market Activation</li>
              <li>Macro/Micro Strategy Sync</li>
              <li>Neural-Logic Calibration</li>
              <li>Safety Compliance Protocol</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-2xl shadow-lg transition-all duration-200">
            Launch Omega Sequence
          </button>
        </div>
      </section>
    </main>
  );
}
