"use client";
import { useState } from "react";

const tabs = ["Overview", "Trading", "Analytics", "Settings"];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#111] p-6 rounded-xl border border-[#39FFBE] shadow-lg">
                <h3 className="text-lg font-bold neon-text">Modules Online</h3>
                <p className="text-3xl font-bold text-white">33</p>
                <p className="text-sm text-gray-400">All core systems active</p>
              </div>
              <div className="bg-[#111] p-6 rounded-xl border border-[#39FFBE] shadow-lg">
                <h3 className="text-lg font-bold neon-text">Uptime</h3>
                <p className="text-3xl font-bold text-white">99.998%</p>
                <p className="text-sm text-gray-400">Stable for 188 hours</p>
              </div>
            </div>

            <div className="bg-[#111] p-6 rounded-xl border border-[#39FFBE] shadow-lg">
              <h3 className="text-xl font-bold neon-text mb-2">System Logs</h3>
              <ul className="text-sm text-gray-300 list-disc pl-4 space-y-1">
                <li>Neural Core booted successfully</li>
                <li>Connected to trading feed</li>
                <li>Memory modules synchronized</li>
              </ul>
            </div>
          </div>
        );

      case "Trading":
        return (
          <div className="bg-[#111] p-6 rounded-xl border border-[#437EFF] shadow-lg">
            <h2 className="text-xl font-bold neon-text-blue mb-4">Active Trades</h2>
            <table className="w-full text-left text-sm text-white">
              <thead>
                <tr className="text-[#39FFBE] border-b border-[#39FFBE]">
                  <th className="p-2">Asset</th>
                  <th className="p-2">Position</th>
                  <th className="p-2">PnL</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#222] hover:bg-[#222]">
                  <td className="p-2">BTC/USDT</td>
                  <td className="p-2">Long</td>
                  <td className="p-2 text-green-400">+3.24%</td>
                  <td className="p-2">Active</td>
                </tr>
                <tr className="border-b border-[#222] hover:bg-[#222]">
                  <td className="p-2">ETH/USDT</td>
                  <td className="p-2">Short</td>
                  <td className="p-2 text-red-400">-1.12%</td>
                  <td className="p-2">Monitoring</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "Analytics":
        return (
          <div className="bg-[#111] p-6 rounded-xl border border-purple-500 shadow-lg">
            <h2 className="text-xl font-bold neon-text-purple mb-2">Market Analytics</h2>
            <div className="text-gray-300">
              📈 Graph module not yet connected. Placeholder loaded.
            </div>
            <div className="mt-4 h-40 bg-[#222] rounded-md border border-dashed border-purple-600 flex items-center justify-center text-purple-300">
              [ Chart Placeholder ]
            </div>
          </div>
        );

      case "Settings":
        return (
          <div className="bg-[#111] p-6 rounded-xl border border-yellow-300 shadow-lg space-y-4">
            <h2 className="text-xl font-bold neon-text-yellow mb-2">System Settings</h2>

            <div className="flex justify-between items-center">
              <label className="text-white">Enable Auto-Trading</label>
              <input type="checkbox" className="accent-[#39FFBE] w-5 h-5" defaultChecked />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-white">Use Shadow Simulation</label>
              <input type="checkbox" className="accent-[#39FFBE] w-5 h-5" />
            </div>

            <div>
              <label className="text-white block mb-1">Memory Backup Path</label>
              <input
                type="text"
                className="w-full p-2 bg-[#000] border border-[#555] rounded text-white"
                placeholder="e.g., /omega/backups/matrix.json"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4 py-8">
      <h1 className="text-4xl font-extrabold neon-text mb-6">
        🚀 Omega Dashboard
      </h1>

      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full border ${
              activeTab === tab
                ? "bg-[#39FFBE] text-black font-bold"
                : "bg-transparent text-white border-white hover:bg-white hover:text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="w-full max-w-4xl">{renderTabContent()}</div>
    </main>
  );
}
