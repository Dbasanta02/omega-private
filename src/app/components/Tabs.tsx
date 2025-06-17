'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: 'Home', href: '/' },
  { name: 'Core Mind', href: '/modules/module1' },
  { name: 'Strategy Engine', href: '/modules/module2' },
  { name: 'Self-Healing AI', href: '/modules/module3' },
  { name: 'Memory Router', href: '/modules/module4' },
  { name: 'Live Feed', href: '/modules/module5' },
  { name: 'Sentiment Brain', href: '/modules/module6' },
  { name: 'Quantum Logic', href: '/modules/module7' },
  { name: 'Execution Layer', href: '/modules/module8' },
  { name: 'Risk Engine', href: '/modules/module9' },
  { name: 'Macro Scanner', href: '/modules/module10' },
  { name: 'Symbolic Reasoning', href: '/modules/module11' },
  { name: 'Anomaly Detector', href: '/modules/module12' },
  { name: 'Regulatory Mind', href: '/modules/module13' },
  { name: 'Divine Nexus', href: '/modules/module14' },
];

export default function Tabs() {
  const pathname = usePathname();
  return (
    <nav className='flex flex-wrap gap-2 mb-6'>
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={\px-4 py-2 rounded-full text-sm font-semibold \}
        >
          {tab.name}
        </Link>
      ))}
    </nav>
  );
}
