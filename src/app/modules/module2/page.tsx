'use client';
import React from 'react';
import { generateTradeStrategies } from './backend/module2_backend';

export default function Module2Page() {
  const strategies = generateTradeStrategies();
  return (
    <div className='card-glass p-6 text-neon-purple'>
      <h1 className='text-2xl font-bold neon-glow mb-4'>Omega Strategic Engine</h1>
      <ul className='list-disc list-inside'>
        {strategies.map((strat, idx) => (
          <li key={idx}>{strat}</li>
        ))}
      </ul>
    </div>
  );
}
