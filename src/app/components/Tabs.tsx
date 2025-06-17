'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: 'Dashboard', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Settings', href: '/settings' },
];

export default function Tabs() {
  const pathname = usePathname();

  return (
    <nav className='flex flex-wrap gap-2 mb-6'>
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`rounded-lg px-3 py-1 text-sm font-medium transition-all ${
            pathname === tab.href
              ? 'bg-white text-black shadow'
              : 'text-zinc-500 hover:text-zinc-900'
          }`}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
