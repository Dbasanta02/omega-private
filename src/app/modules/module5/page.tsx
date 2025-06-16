'use client';
import React, { useEffect, useState } from 'react';

interface Alert {
  id: number;
  time: string;
  source: string;
  type: 'ALERT' | 'NEWS' | 'PATTERN';
  message: string;
}

export default function Module5() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const dummyAlerts: Alert[] = [
      {
        id: 1,
        time: new Date().toLocaleTimeString(),
        source: 'Omega AI',
        type: 'NEWS',
        message: 'Whale spotted buying > 1M USDT in BTC',
      },
      {
        id: 2,
        time: new Date().toLocaleTimeString(),
        source: 'Omega AI',
        type: 'ALERT',
        message: 'CPI data release imminent',
      },
    ];
    setAlerts(dummyAlerts);
  }, []);

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Omega Live Intelligence Feed</h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="border border-white/30 rounded-lg p-3 bg-white/10">
            <div className="text-sm text-gray-300">{alert.time} — {alert.source}</div>
            <div className="font-semibold">{alert.type}: {alert.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
