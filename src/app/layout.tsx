import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Omega Dashboard – The Divine Trading Mind',
  description: 'The World’s Most Advanced AI Trading System, built for perfection.',
  themeColor: '#000000',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'Omega Dashboard',
    description: 'God-tier AI Trading System powered by Quantum Intelligence.',
    url: 'https://omegadashboard.vercel.app',
    siteName: 'Omega',
    type: 'website',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'Omega Dashboard Preview'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
