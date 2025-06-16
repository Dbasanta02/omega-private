'use client';
import React, { useState } from 'react';

type Simulation = {
  id: number;
  asset: string;
  strategy: string;
  predictedMove: string;
  execution: string;
};

export default function Module4() {
  const [simulations, setSimulations] = useState<Simulation[]>([
    {
      id: 1,
      asset: 'NASDAQ: TSLA',
      strategy: 'Momentum + Volume Spike',
      predictedMove: 'Bullish breakout after consolidation',
      execution: 'Buy @ \.50 → Target \.00'
    },
    {
      id: 2,
      asset: 'CRYPTO: ETHUSDT',
      strategy: 'Mean Reversion + Bollinger Bands',
      predictedMove: 'Reversal to mid-band zone',
      execution: 'Long @ \ → Exit \'
    },
    {
      id: 3,
      asset: 'FOREX: EUR/USD',
      strategy: 'MACD Divergence + Fibonacci',
      predictedMove: 'Pullback before breakout',
      execution: 'Buy @ 1.072 → TP 1.084'
    }
  ]);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-neon-green mb-4">Tactical Execution Simulator</h1>
      <p className="text-gray-400 max-w-2xl mb-8">
        This module simulates Omega’s tactical execution across global assets using advanced algorithmic logic.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {simulations.map((sim) => (
          <div key={sim.id} className="border border-neon-green rounded-2xl p-4 hover:bg-neon-green hover:text-black transition">
            <h2 className="text-xl font-semibold mb-1">{sim.asset}</h2>
            <p className="text-sm mb-1 text-gray-300">Strategy: {sim.strategy}</p>
            <p className="text-sm mb-1 text-gray-300">Prediction: {sim.predictedMove}</p>
            <p className="text-sm text-neon-green font-bold">Execution: {sim.execution}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
