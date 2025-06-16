'use client';
import React, { useState, useEffect } from 'react';

type MarketSignal = {
  id: number;
  source: string;
  type: 'ALERT' | 'NEWS' | 'PATTERN';
  message: string;
  confidence: string;
};

export default function Module5() {
  const [signals, setSignals] = useState<MarketSignal[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const simulatedSignal: MarketSignal = {
        id: Date.now(),
        source: 'Omega AI',
        type: ['ALERT', 'NEWS', 'PATTERN'][Math.floor(Math.random() * 3)] as any,
        message: [
          'Whale spotted buying  > \',
          'High-impact CPI data incoming',
          'S&P 500 triple top forming',
          'Oil Futures breakout detected'
        ][Math.floor(Math.random() * 4)],
        confidence: ['High', 'Medium', 'Critical'][Math.floor(Math.random() * 3)]
      };
      setSignals((prev) => [simulatedSignal, ...prev.slice(0, 9)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-neon-green mb-4">Omega Market Sentience</h1>
      <p className="text-gray-400 mb-6 max-w-2xl">
        Omega's radar continuously scans financial terrain across all assets and regions. This module shows her current live assessments.
      </p>
      <ul className="space-y-4">
        {signals.map((signal) => (
          <li key={signal.id} className="border border-neon-green rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{signal.source}</span>
              <span className={	ext-sm font-bold }>
                {signal.confidence}
              </span>
            </div>
            <div className="text-lg">{signal.message}</div>
            <div className="text-sm text-neon-blue mt-1">{signal.type}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
