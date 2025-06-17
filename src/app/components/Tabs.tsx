'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const tabs = [
  { name: 'Home', href: '/' },
  { name: 'Modules', href: '/modules' },
  { name: 'Core Nexus', href: '/core' },
];

export default function Tabs() {
  const pathname = usePathname();

  return (
    <nav className='flex flex-wrap gap-2 mb-6'>
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={\ounded-xl px-4 py-2 text-sm font-semibold transition-all hover:bg-white/10 \}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
