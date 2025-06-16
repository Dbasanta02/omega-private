'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function SideBar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={\\ bg-gray-900 min-h-screen text-white transition-all duration-300 flex flex-col\}>
      <button 
        onClick={() => setOpen(!open)} 
        className=\"p-3 focus:outline-none hover:bg-gray-800 border-b border-gray-700\"
      >
        {open ? '<' : '>'}
      </button>
      <div className=\"p-4 flex flex-col gap-4 text-sm\">
        <Link href=\"/\" className=\"hover:text-neon-green\">🏠 Dashboard</Link>
        <Link href=\"/modules/module1\" className=\"hover:text-neon-green\">🧠 Core Mind</Link>
        <Link href=\"/modules/module14\" className=\"hover:text-neon-green\">🔁 Core Nexus</Link>
        <Link href=\"/modules/module5\" className=\"hover:text-neon-green\">📡 Market Feed</Link>
        <Link href=\"/modules/module20\" className=\"hover:text-neon-green\">🛡️ Trade Safety</Link>
        <Link href=\"/modules/module32\" className=\"hover:text-neon-green\">⚡ Quantum Engine</Link>
      </div>
    </div>
  );
}
