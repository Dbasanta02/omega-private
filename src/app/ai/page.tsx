"use client";

import React from "react";
import AssistantChat from "@/components/AssistantChat";

export default function AIPage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Omega AI Assistant</h1>
      <AssistantChat />
    </div>
  );
}
