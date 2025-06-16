'use client';
import React from 'react';

const trades = [
  {
    id: 1,
    asset: 'CRYPTO: BTCUSDT',
    strategy: 'MACD Cross + RSI Oversold',
    predictedMove: 'Upward breakout',
    execution: 'Long @ ,300 → Exit @ ,500'
  },
  {
    id: 2,
    asset: 'CRYPTO: ETHUSDT',
    strategy: 'Mean Reversion + Bollinger Bands',
    predictedMove: 'Reversal to mid-band zone',
    execution: 'Long @ ,400 → Exit @ ,700'
  },
  {
    id: 3,
    asset: 'CRYPTO: SOLUSDT',
    strategy: 'Volume Spike Detection',
    predictedMove: 'Sharp upward breakout',
    execution: 'Long @  → Exit @ '
  },
];

export default function Module4() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Omega Crypto Trade Insights</h1>
      <ul className="space-y-4">
        {trades.map(trade => (
          <li key={trade.id} className="bg-black bg-opacity-30 p-4 rounded-xl border border-neon-green">
            <p><strong>Asset:</strong> {trade.asset}</p>
            <p><strong>Strategy:</strong> {trade.strategy}</p>
            <p><strong>Prediction:</strong> {trade.predictedMove}</p>
            <p><strong>Execution:</strong> {trade.execution}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
