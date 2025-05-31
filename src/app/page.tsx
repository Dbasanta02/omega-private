'use client';

import Sidebar from './components/Sidebar';
import TradingPanel from './components/TradingPanel';
import AlertConsole from './components/AlertConsole';
import OrdersFeed from './components/OrdersFeed';
import StrategySwitcher from './components/StrategySwitcher';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="col-span-2">
            <TradingPanel />
          </div>
          <div className="flex flex-col gap-4">
            <StrategySwitcher />
            <AlertConsole />
            <OrdersFeed />
          </div>
        </div>
      </main>
    </div>
  );
}
