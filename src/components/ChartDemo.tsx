'use client';

import React, { useEffect, useRef } from 'react';
import {
  createChart,
  CandlestickSeriesPartialOptions,
  Time,
  IChartApi,
} from 'lightweight-charts';

const ChartDemo = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart: IChartApi = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: '#000000' },
        textColor: '#FFFFFF',
      },
      grid: {
        vertLines: { color: '#1F2937' },
        horzLines: { color: '#1F2937' },
      },
      crosshair: {
        mode: 0,
      },
      priceScale: {
        borderColor: '#666',
      },
      timeScale: {
        borderColor: '#666',
      },
    });

    const series = chart.addCandlestickSeries({
      upColor: '#4ade80',
      downColor: '#f87171',
      borderVisible: false,
      wickUpColor: '#4ade80',
      wickDownColor: '#f87171',
    });

    series.setData([
      { time: '2024-07-01' as Time, open: 100, high: 110, low: 90, close: 105 },
      { time: '2024-07-02' as Time, open: 105, high: 115, low: 95, close: 110 },
      { time: '2024-07-03' as Time, open: 110, high: 120, low: 100, close: 115 },
      { time: '2024-07-04' as Time, open: 115, high: 125, low: 105, close: 120 },
      { time: '2024-07-05' as Time, open: 120, high: 130, low: 110, close: 125 },
    ]);

    return () => {
      chart.remove();
    };
  }, []);

  return <div ref={chartContainerRef} className="w-full h-[400px]" />;
};

export default ChartDemo;
