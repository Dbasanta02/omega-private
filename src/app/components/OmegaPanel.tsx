export default function OmegaPanel({ symbol }: { symbol: string }) {
  const thoughts: { [key: string]: string } = {
    "BINANCE:BTCUSDT": "BTC showing sideways action. Watch for breakout above 67K.",
    "BINANCE:ETHUSDT": "ETH pushing toward 3K. Strong buy signals on 30m chart.",
    "NASDAQ:AAPL": "AAPL consolidating near highs. Potential tech rally brewing.",
    "NASDAQ:SPX": "S&P 500 neutral. Awaiting macro triggers or Fed comments.",
    "FX:EURUSD": "EUR/USD in a volatile range. Caution advised before ECB data."
  };

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold text-green-400">🧠 Omega AI Panel</h2>
      <div className="bg-zinc-800 p-3 rounded-xl text-sm leading-relaxed">
        <p><strong>Market:</strong> {symbol}</p>
        <p><strong>Omega Insight:</strong> {thoughts[symbol]}</p>
        <p><strong>Action:</strong> Monitoring order flow and preparing next move.</p>
      </div>
    </div>
  );
}
