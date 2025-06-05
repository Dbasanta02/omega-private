'use client';

import { useEffect, useRef } from 'react';

export default function TradingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(0, 240, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Price',
            data: [100, 120, 110, 140, 130, 150],
            borderColor: '#00f0ff',
            backgroundColor: gradient,
            fill: true,
          }],
        },
        options: {
          scales: {
            x: { grid: { color: '#3b82f6' } },
            y: { grid: { color: '#3b82f6' } },
          },
        },
      });
    }
  }, []);

  return (
    <div className='h-64'>
      <h3 className='text-lg mb-2 neon-glow'>Trading Chart</h3>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
import { Chart } from 'chart.js';
