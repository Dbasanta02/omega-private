'use client';
import React from 'react';

export default function Header() {
  return (
    <header className=\"w-full bg-black border-b border-gray-800 p-4 flex justify-between items-center shadow-md\">
      <h1 className=\"text-3xl font-bold text-neon-green tracking-widest\">OMEGA</h1>
      <div className=\"text-sm text-gray-400\">AI Status: <span className=\"text-neon-blue font-medium\">LIVE</span></div>
    </header>
  );
}
