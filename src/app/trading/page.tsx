// trading/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function TradingPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 text-white">
          <h1 className="text-3xl font-bold mb-4">Trading</h1>
          <p className="text-gray-400">Live trading terminal coming soon...</p>
        </main>
      </div>
    </div>
  );
}
