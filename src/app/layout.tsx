import './globals.css'
import { Inter } from 'next/font/google'
import Tabs from './components/Tabs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Omega Dashboard',
  description: 'God-Tier AI Trading Core',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className + ' bg-black text-white'}>
        <div className='min-h-screen w-full flex flex-col'>
          <header className='bg-gradient-to-r from-[#39FFBE] to-[#437EFF] p-4 shadow-lg text-black font-bold text-xl'>
            OMEGA GOD-TIER DASHBOARD
          </header>
          <main className='flex-1 p-6'>
            <Tabs />
            {children}
          </main>
          <footer className='p-4 text-center text-gray-400 text-sm'>
            © 2025 Omega Intelligence Systems. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}
