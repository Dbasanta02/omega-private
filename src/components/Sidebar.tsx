'use client';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-black text-white flex flex-col border-r border-gray-800">
      <div className="p-6 font-bold text-xl border-b border-gray-700">
        Omega AI
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link href="/" className="block hover:bg-gray-800 p-2 rounded">Home</Link>
        <Link href="/dashboard" className="block hover:bg-gray-800 p-2 rounded">Dashboard</Link>
        <Link href="/chart" className="block hover:bg-gray-800 p-2 rounded">Chart</Link>
        <Link href="/ai" className="block hover:bg-gray-800 p-2 rounded">AI Assistant</Link>
        <Link href="/settings" className="block hover:bg-gray-800 p-2 rounded">Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
