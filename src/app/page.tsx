'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-10'>
      <h1 className='text-5xl md:text-6xl font-bold text-neon-green mb-4 animate-pulse'>
        WELCOME TO OMEGA
      </h1>
      <p className='text-xl md:text-2xl text-gray-400 max-w-2xl text-center mb-10'>
        The World’s Most Advanced AI Trading System — Built for Absolute Perfection.
      </p>
      <div className='flex flex-wrap justify-center gap-6'>
        <Link href='/modules/module3'>
          <button className='px-8 py-4 text-black bg-neon-green hover:bg-neon-blue font-semibold rounded-2xl shadow-neon transition-all duration-300'>
            Enter Omega Intelligence
          </button>
        </Link>
        <Link href='/modules/module1'>
          <button className='px-8 py-4 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black rounded-2xl shadow-neon transition-all duration-300'>
            System Core
          </button>
        </Link>
        <Link href='/modules/module5'>
          <button className='px-8 py-4 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black rounded-2xl shadow-neon transition-all duration-300'>
            Global Strategy Engine
          </button>
        </Link>
      </div>
    </main>
  );
}
