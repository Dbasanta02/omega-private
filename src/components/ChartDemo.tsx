'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', value: 65 },
  { name: 'Tue', value: 59 },
  { name: 'Wed', value: 80 },
  { name: 'Thu', value: 81 },
  { name: 'Fri', value: 56 },
  { name: 'Sat', value: 55 },
  { name: 'Sun', value: 40 },
]

export default function ChartDemo() {
  return (
    <div className="w-full h-[300px] bg-gray-900 p-4 rounded-xl shadow-md">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#00ffe1" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
