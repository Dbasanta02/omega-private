// ChartDemo.tsx
"use client";

import React, { useEffect, useRef } from "react";
import {
  createChart,
  CrosshairMode,
  IChartApi,
} from "lightweight-charts";

const candlestickData = [
  { time: '2024-07-01', open: 101, high: 110, low: 95, close: 105 },
  { time: '2024-07-02', open: 105, high: 115, low: 100, close: 108 },
  { time: '2024-07-03', open: 108, high: 112, low: 102, close: 107 },
  { time: '2024-07-04', open: 107, high: 120, low: 105, close: 118 },
  { time: '2024-07-05', open: 118, high: 125, low: 115, close: 122 },
];

export default function ChartDemo() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi>();

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { color: "#0d0d0d" },
        textColor: "#FFFFFF",
      },
      grid: {
        vertLines: { color: "#1e1e1e" },
        horzLines: { color: "#1e1e1e" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      crosshair: {
        mode: CrosshairMode.Normal,
      },
    });

    chartRef.current = chart;

    const candleSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderUpColor: "#26a69a",
      borderDownColor: "#ef5350",
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    candleSeries.setData(candlestickData);

    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current?.clientWidth || 400,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div
      ref={chartContainerRef}
      className="w-full rounded-lg border border-gray-700 shadow-lg"
    />
  );
}
