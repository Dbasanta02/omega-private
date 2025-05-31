'use client';

import { useState } from 'react';

export default function TradingPanel() {
  const [log, setLog] = useState<string[]>([]);

  const executeMockTrade = () => {
    const trade = `?? Omega executed trade at ${new Date().toLocaleTimeString()}`;
    setLog(prev => [trade, ...prev]);
  };

  return (
    <div className="flex flex-col w-full h-full p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">?? Live Trade Panel</h2>
        <p className="text-gray-600">Simulate or view live trades below.</p>
        <button
          onClick={executeMockTrade}
          className="mt-4 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-900 transition"
        >
          Execute Mock Trade
        </button>
      </div>
      <div className="bg-gray-100 p-4 rounded-xl overflow-auto h-96">
        <h3 className="text-lg font-semibold mb-2">?? Trade Log</h3>
        <ul className="space-y-2 text-sm text-gray-800">
          {log.map((entry, index) => (
            <li key={index} className="border-b pb-1">{entry}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
