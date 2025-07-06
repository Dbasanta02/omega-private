import { ReactNode } from 'react'
import './globals.css'
import AnimatedLayout from '../components/AnimatedLayout'
import { ThemeProvider } from '../components/ThemeProvider'

export const metadata = {
  title: 'Omega Dashboard',
  description: 'Next-gen intelligent trading dashboard',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AnimatedLayout>
            {children}
          </AnimatedLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
