import React from 'react'
import Board from './components/Board'

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f8fbff,_#f4f7fb_55%,_#eef2f7)] text-slate-900">
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Board />
      </main>
    </div>
  )
}
