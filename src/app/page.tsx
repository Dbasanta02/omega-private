// File: src/app/page.tsx
"use client";

import Sidebar from "./components/Sidebar";
import TradingPanel from "./components/TradingPanel";
import OmegaPanel from "./components/OmegaPanel";
import AlertConsole from "./components/AlertConsole";
import OrdersFeed from "./components/OrdersFeed";
import StrategySwitcher from "./components/StrategySwitcher";
import OmegaChat from "./components/OmegaChat";
import PerformancePanel from "./components/PerformancePanel";
import BacktestConsole from "./components/BacktestConsole";
import AITrainingMonitor from "./components/AITrainingMonitor";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans flex">
      <Sidebar />
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <TradingPanel />
        <PerformancePanel />
        <OrdersFeed />
        <StrategySwitcher />
        <OmegaPanel />
        <BacktestConsole />
        <AlertConsole />
        <AITrainingMonitor />
        <OmegaChat />
      </div>
    </main>
  );
}
