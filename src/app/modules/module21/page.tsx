'use client&#39;;
import React from &#39;react&#39;;

export default function Module21() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-400 mb-6">
          ?? Omega News Sentiment Engine
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Omega&#39;s Sentiment Engine scrapes and parses real-time news, social media, and global events. It uses NLP and transformer-based models to classify sentiment and predict market reactions instantly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-blue-500 p-6 rounded-xl">
            <h2 className="text-xl text-blue-300 font-semibold mb-2">?? Global Feed Monitor</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>News, tweets, Reddit, and financial blogs</li>
              <li>Real-time web socket ingestion</li>
              <li>Zero-latency preprocessing pipeline</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-blue-500 p-6 rounded-xl">
            <h2 className="text-xl text-blue-300 font-semibold mb-2">?? Sentiment Classifier</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Trained on finance-specific datasets</li>
              <li>Classifies into bullish, bearish, neutral</li>
              <li>Understands sarcasm, uncertainty, fear</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-blue-500 p-6 rounded-xl">
            <h2 className="text-xl text-blue-300 font-semibold mb-2">?? Impact Predictor</h2>
            <ul className="list-disc list-inside text-gray-200">
              <li>Estimates effect on stocks, crypto, forex</li>
              <li>Feeds into Omega’s trading core</li>
              <li>Triggers defense or offense in strategies</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-black font-bold rounded-2xl transition duration-300">
            View Real-Time News Map
          </button>
        </div>
      </section>
    </main>
  );
}
