'use client';
import React from 'react';
import { initializeOmegaCoreMind } from './backend/module1_backend';

export default function Module1Page() {
  const omegaStatus = initializeOmegaCoreMind();
  return (
    <div className='card-glass p-6 text-neon-cyan'>
      <h1 className='text-2xl font-bold neon-glow mb-4'>Omega Core Mind</h1>
      <p>{omegaStatus}</p>
    </div>
  );
}
