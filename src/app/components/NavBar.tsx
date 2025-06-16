'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className=\"w-full bg-black border-b border-neon-green py-4 px-6 flex justify-between items-center\">
      <div className=\"text-neon-green font-bold text-xl tracking-widest\">
        Ω OMEGA
      </div>
      <div className=\"flex gap-6 text-sm text-white\">
        <Link href=\"/\">Home</Link>
        <Link href=\"/modules/module1\">System Core</Link>
        <Link href=\"/modules/module3\">Enter Omega</Link>
        <Link href=\"/modules/module14\">Core Nexus</Link>
      </div>
    </nav>
  );
}
