'use client&#39;;
import React from &#39;react&#39;;

export default function Module18() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-red-400 mb-6">
          ??? Omega Trade Safety Watcher
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Every trade must pass through Omega&#39;s Risk Firewall — a dynamic risk scanner that adapts in real-time using market news, legal feeds, volatility data, and predictive AI models.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-red-500 p-6 rounded-xl">
            <h2 className="text-xl text-red-300 font-semibold mb-2">?? Market Shock Detection</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Real-time detection of black swan signals</li>
              <li>Monitors VIX, circuit breakers, and whale moves</li>
              <li>Aborts dangerous trades instantly</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-red-500 p-6 rounded-xl">
            <h2 className="text-xl text-red-300 font-semibold mb-2">?? Regulatory & Compliance Monitoring</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Monitors global regulatory news and SEC filings</li>
              <li>Flags risk zones (e.g., pending bans, investigations)</li>
              <li>Adapts trading logic based on compliance feeds</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-black font-bold rounded-2xl transition duration-300">
            Activate Safety Protocol
          </button>
        </div>
      </section>
    </main>
  );
}
