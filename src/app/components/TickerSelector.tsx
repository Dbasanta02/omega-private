interface Props {
  onSelect: (symbol: string) => void;
}

export default function TickerSelector({ onSelect }: Props) {
  const symbols = [
    { label: "Bitcoin (BTC/USDT)", value: "BINANCE:BTCUSDT" },
    { label: "Ethereum (ETH/USDT)", value: "BINANCE:ETHUSDT" },
    { label: "Apple (AAPL)", value: "NASDAQ:AAPL" },
    { label: "S&P 500 (SPX)", value: "NASDAQ:SPX" },
    { label: "Euro/USD (EURUSD)", value: "FX:EURUSD" },
  ];

  return (
    <select
      className="w-full p-2 mb-2 rounded-xl bg-zinc-800 text-white border border-zinc-700"
      onChange={(e) => onSelect(e.target.value)}
    >
      {symbols.map((s) => (
        <option key={s.value} value={s.value}>{s.label}</option>
      ))}
    </select>
  );
}
