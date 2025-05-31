'use client';

import Sidebar from './components/Sidebar';
import TradingPanel from './components/TradingPanel';

export default function HomePage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-50 p-6 overflow-auto">
        <TradingPanel />
      </div>
    </div>
  );
}
