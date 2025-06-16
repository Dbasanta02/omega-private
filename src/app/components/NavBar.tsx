'use client';
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className='p-4 bg-black/20 text-white flex gap-4'>
      <Link href='/'>Home</Link>
      <Link href='/modules/module1'>Core</Link>
      <Link href='/modules/module2'>Sentience</Link>
    </nav>
  );
}
