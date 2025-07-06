'use client'

import DarkModeToggle from './DarkModeToggle'

export default function Topbar() {
  return (
    <header className="w-full h-16 bg-gray-800 text-white flex justify-between items-center px-6">
      <span className="text-lg font-semibold">Omega Dashboard</span>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
          N
        </div>
      </div>
    </header>
  )
}
