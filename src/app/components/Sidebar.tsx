'use client';

import { useState } from 'react';
import { LayoutDashboard, Settings, Cpu, Flame } from 'lucide-react';

export default function Sidebar() {
  const [active, setActive] = useState('dashboard');

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard />, key: 'dashboard' },
    { name: 'Modules', icon: <Cpu />, key: 'modules' },
    { name: 'Optimizer', icon: <Flame />, key: 'optimizer' },
    { name: 'Settings', icon: <Settings />, key: 'settings' },
  ];

  return (
    <aside className="w-60 h-screen bg-black text-white flex flex-col shadow-2xl p-4">
      <h1 className="text-2xl font-bold mb-8">?? OMEGA</h1>
      <nav className="space-y-3">
        {navItems.map(item => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
              active === item.key ? 'bg-white text-black' : 'hover:bg-gray-800'
            }`}
          >
            {item.icon}
            <span className="font-semibold">{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
