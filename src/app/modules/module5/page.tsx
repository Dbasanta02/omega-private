'use client'

import React, { useState, useEffect } from 'react';

type AlertType = 'ALERT' | 'NEWS' | 'PATTERN';
type NewsAlert = {
  id: number;
  source: string;
  type: AlertType;
  message: string;
};

export default function Module5() {
  const [alerts, setAlerts] = useState<NewsAlert[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert: NewsAlert = {
        id: Date.now(),
        source: 'Omega AI',
        type: ['ALERT', 'NEWS', 'PATTERN'][Math.floor(Math.random() * 3)] as AlertType,
        message: [
          'Whale spotted buying > &#39;',
          'High-impact CPI data incoming',
          'S&P 500 triple top forming',
          'Oil Futures breakout detected'
        ][Math.floor(Math.random() * 4)],
      };
      setAlerts((prev) => [...prev.slice(-4), newAlert]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Omega Live Intelligence Feed</h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={p-4 border-l-4  bg-white/10 rounded}
          >
            <p className="text-sm text-gray-400">Source: {alert.source}</p>
            <p className="font-medium">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
