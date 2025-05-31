'use client';

import Sidebar from './components/Sidebar';
import TradingPanel from './components/TradingPanel';

export default function Home() {
  return (
    <main className="flex h-screen w-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow p-4">
        <TradingPanel />
      </div>
    </main>
  );
}
