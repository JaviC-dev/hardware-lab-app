import React, { useState } from 'react'
import Board from './components/Board'
import SidePanel from './components/SidePanel'

export default function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-semibold">Hardware Lab</h1>
        <p className="text-gray-600 mt-1">Haz clic en cualquier componente para saber más.</p>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <Board onSelect={(id) => setSelected(id)} selectedId={selected} />
      </main>

      <SidePanel
        componentId={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}
