// page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import ChartDemo from "@/components/ChartDemo";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 bg-black text-white p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">📈 Omega Trading Dashboard</h1>
        <p className="mb-6">Welcome to Omega. The most powerful AI trading system in the universe.</p>

        {/* Chart Area */}
        <div className="bg-gray-900 rounded-lg p-4 shadow-lg">
          <ChartDemo />
        </div>
      </div>
    </div>
  );
}
