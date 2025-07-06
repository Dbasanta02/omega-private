'use client'

import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="bg-gray-800 text-white dark:bg-white dark:text-black px-4 py-2 rounded-md transition-colors"
    >
      {theme === 'dark' ? '☀ Light Mode' : '🌙 Dark Mode'}
    </motion.button>
  )
}
