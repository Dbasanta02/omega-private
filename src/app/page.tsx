'use client';

import dynamic from "next/dynamic";
import { useState } from "react";
import AssistantChat from "@/components/AssistantChat";

const ChartWrapper = dynamic(() => import("@/components/ChartWrapper"), { ssr: false });

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("Chart");

  return (
    <div className="flex h-screen w-screen bg-black text-white">
      <div className="w-64 bg-gray-900 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-green-400">O Omega</h1>
        <ul className="space-y-2">
          <li><button onClick={() => setSelectedTab('Chart')} className="w-full px-2 py-1 hover:bg-gray-700">Chart</button></li>
          <li><button onClick={() => setSelectedTab('Analytics')} className="w-full px-2 py-1 hover:bg-gray-700">Analytics</button></li>
          <li><button onClick={() => setSelectedTab('Settings')} className="w-full px-2 py-1 hover:bg-gray-700">Settings</button></li>
        </ul>
      </div>

      <div className="flex-1 p-4">
        {selectedTab === 'Chart' && <ChartWrapper />}
        {selectedTab === 'Analytics' && <div className="text-xl text-gray-400">Analytics Coming Soon...</div>}
        {selectedTab === 'Settings' && <div className="text-xl text-gray-400">Settings Coming Soon...</div>}
      </div>

      <AssistantChat />
    </div>
  );
}
