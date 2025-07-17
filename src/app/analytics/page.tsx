// analytics/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function AnalyticsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 text-white">
          <h1 className="text-3xl font-bold mb-4">Analytics</h1>
          <p className="text-gray-400">Performance analytics and metrics coming soon...</p>
        </main>
      </div>
    </div>
  );
}
