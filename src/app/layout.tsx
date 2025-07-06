import { ReactNode } from 'react'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

export const metadata = {
  title: 'Omega Dashboard',
  description: 'AI-powered trading intelligence',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen bg-gray-950 text-white">
              <Topbar />
              <main className="flex-1 p-6">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
