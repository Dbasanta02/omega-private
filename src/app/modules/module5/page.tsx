'use client';
import React from 'react';

const alerts = [
  {
    id: 1,
    source: 'Omega AI',
    type: ['ALERT', 'NEWS', 'PATTERN'][Math.floor(Math.random() * 3)] as any,
    message: [
      'Whale spotted buying >',
      'High-impact CPI data incoming',
      'S&P 500 triple top forming',
      'Oil Futures breakout detected'
    ][Math.floor(Math.random() * 4)],
  },
];

export default function Module5() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Omega Intelligence Alerts</h1>
      <ul className="space-y-4">
        {alerts.map(alert => (
          <li key={alert.id} className="bg-black bg-opacity-30 p-4 rounded-xl border border-neon-blue">
            <p><strong>Type:</strong> {alert.type}</p>
            <p><strong>Message:</strong> {alert.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
