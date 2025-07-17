// assistant/page.tsx
"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import AssistantChat from "@/components/AssistantChat";

export default function AssistantPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-6 text-white relative">
          <h1 className="text-3xl font-bold mb-4">Omega Assistant</h1>
          <p className="text-gray-400 mb-8">Ask questions, get trading insights, and interact with Omega’s brain.</p>

          {/* Floating Chat UI */}
          <AssistantChat />
        </main>
      </div>
    </div>
  );
}
