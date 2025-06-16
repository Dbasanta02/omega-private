'use client';
import React from 'react';

const coreSystems = [
  { name: 'Sentience Engine', status: 'Active', description: 'Processes market states and initiates cognitive actions.' },
  { name: 'Strategy Generator', status: 'Active', description: 'Formulates optimal trading strategies in real-time.' },
  { name: 'Self-Healing Loop', status: 'Active', description: 'Detects and resolves internal errors autonomously.' },
  { name: 'Market Pattern Analyzer', status: 'Active', description: 'Identifies high-probability setups across all assets.' },
  { name: 'Risk Calibration Engine', status: 'Active', description: 'Dynamically adjusts position size and exposure.' }
];

export default function Module1() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-neon-green">Omega Core Intelligence</h1>
      <p className="text-gray-400 mb-10 text-center max-w-3xl">
        These are the real-time active neural layers powering Omega’s ultra-intelligent decision-making and precision trading.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {coreSystems.map((sys, i) => (
          <div key={i} className="border border-neon-green rounded-2xl p-4 hover:bg-neon-green hover:text-black transition">
            <h2 className="text-xl font-semibold">{sys.name}</h2>
            <p className="text-sm mt-1 text-gray-300">{sys.description}</p>
            <p className="mt-2 text-neon-green">Status: {sys.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
