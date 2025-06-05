'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-neon-green mb-6 tracking-wide">
        WELCOME TO OMEGA
      </h1>
      <p className="text-xl text-gray-400 max-w-xl text-center mb-10">
        The World’s Most Advanced AI Trading System.
      </p>
      <div className="flex gap-4">
        <Link href="/modules/module3">
          <button className="px-6 py-3 bg-neon-green hover:bg-neon-blue text-black font-semibold rounded-2xl shadow-lg transition-all duration-200">
            Enter Omega
          </button>
        </Link>
        <Link href="/modules/module1">
          <button className="px-6 py-3 border border-neon-green text-neon-green hover:text-black hover:bg-neon-green rounded-2xl transition-all duration-200">
            System Core
          </button>
        </Link>
      </div>
    </main>
  );
}
