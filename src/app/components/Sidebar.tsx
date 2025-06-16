'use client';
import React from 'react';

export default function Sidebar() {
  return (
    <aside className='w-64 p-4 text-white bg-black/10 border-r border-white/20'>
      <h2 className='text-lg font-semibold mb-4'>Modules</h2>
      <ul className='space-y-2'>
        {Array.from({ length: 33 }, (_, i) => (
          <li key={i}>
            <a href={'/modules/module' + (i + 1)}>Module {i + 1}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
