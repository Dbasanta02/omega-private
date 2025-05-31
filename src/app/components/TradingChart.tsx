/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useRef } from "react";

export default function TradingChart({ symbol }: { symbol: string }) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerId = "tv_chart_container";
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
if ((window as typeof window & { TradingView?: any }).TradingView && chartRef.current) {
  new (window as typeof window & { TradingView: any }).TradingView.widget({

               container_id: containerId,
          autosize: true,
          symbol,
          interval: "5",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#1e293b",
          enable_publishing: false,
          allow_symbol_change: true,
          hide_top_toolbar: false,
          withdateranges: true,
          studies: ["Volume@tv-basicstudies"],
        });
      }
    };
    document.body.appendChild(script);
  }, [symbol]);

  return <div id="tv_chart_container" ref={chartRef} className="w-full h-full rounded-xl overflow-hidden" />;
}
