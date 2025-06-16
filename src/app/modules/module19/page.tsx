'use client';
import React from 'react';

export default function Module19() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-400 mb-6">
          🌐 Omega Market Intelligence Feed
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Omega is plugged into every market nerve ending. From news headlines and macroeconomic data to whale alerts and live price feeds — everything is captured, understood, and acted upon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-blue-500 p-6 rounded-xl">
            <h2 className="text-xl text-blue-300 font-semibold mb-2">📰 Live News & Headlines</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>24/7 scanning of top financial sources (Bloomberg, Reuters, etc.)</li>
              <li>Headline impact estimation using sentiment models</li>
              <li>Feeds directly into trading logic</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-blue-500 p-6 rounded-xl">
            <h2 className="text-xl text-blue-300 font-semibold mb-2">📈 Real-Time Price Feeds</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Streaming price data for stocks, crypto, and forex</li>
              <li>Zero-latency feed processing and signal generation</li>
              <li>Used to detect breakouts, momentum surges, anomalies</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-black font-bold rounded-2xl transition duration-300">
            Launch Market Feed Engine
          </button>
        </div>
      </section>
    </main>
  );
}
