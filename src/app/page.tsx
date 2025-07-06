import ChartDemo from '../components/ChartDemo'
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Welcome to Omega Dashboard</h1>
        <DarkModeToggle />
      </div>
      <ChartDemo />
    </main>
  )
}
