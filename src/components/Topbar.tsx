// Topbar.tsx
"use client";

export default function Topbar() {
  return (
    <header className="w-full h-16 bg-gray-950 border-b border-gray-800 px-6 flex items-center justify-between">
      <div className="text-xl font-semibold text-white tracking-wide">
        Omega Brain 👁️‍🗨️ Live Interface
      </div>
      <div className="text-sm text-gray-400">
        Alpha Status: <span className="text-green-400">Online</span>
      </div>
    </header>
  );
}
