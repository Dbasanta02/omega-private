'use client';
import React from 'react';

export default function Module13() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-red-400 mb-6">🌍 Omega World Event Reaction Engine</h1>
        <p className="text-lg text-gray-300 mb-10">
          Omega constantly monitors the globe for breaking events — war, elections, pandemics, natural disasters, policy shifts — and instantly recalibrates trading positions accordingly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 border border-red-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-red-300 mb-2">🌐 Sources Monitored</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>News APIs (Reuters, Bloomberg, AP, Al Jazeera)</li>
              <li>Twitter/X, Telegram channels, and intelligence feeds</li>
              <li>Government portals & public data</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-red-500 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-semibold text-red-300 mb-2">⚡ Real-Time Adjustment</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Position hedging and volatility modeling</li>
              <li>Risk-off reallocation & global macro posture shift</li>
              <li>Temporal logic recalibration</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-red-400 hover:bg-red-500 text-black font-semibold rounded-2xl shadow-md transition-all duration-200">
            Activate Global Watch Mode
          </button>
        </div>
      </section>
    </main>
  );
}
