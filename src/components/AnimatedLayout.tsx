'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedLayout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-gray-100 font-sans"
    >
      {children}
    </motion.div>
  )
}
