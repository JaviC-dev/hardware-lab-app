import React from 'react'
import Board from './components/Board'

export default function App() {
  return (
    <div className="min-h-screen text-amber-950">
      <header className="sticky top-0 z-30 border-b border-amber-900/40 bg-amber-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-300">Laboratorio interactivo</p>
            <h1 className="text-xl font-semibold text-amber-100">Hardware Lab</h1>
          </div>
          <div className="rounded-full border border-amber-700/60 bg-amber-900/40 px-3 py-1 text-sm text-amber-200">
            Montaje de PC
          </div>
        </div>
      </header>

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 animate-gear-reverse text-amber-700 opacity-30">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="40" strokeWidth="3" />
            <circle cx="50" cy="50" r="20" strokeWidth="2" />
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`rotate(${(i * 45)} 50 50)`}>
                <rect x="47" y="8" width="6" height="8" fill="currentColor" />
              </g>
            ))}
          </svg>
        </div>
        <div className="absolute bottom-32 right-20 w-24 h-24 animate-gear text-amber-600 opacity-20">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="50" r="35" strokeWidth="2.5" />
            <circle cx="50" cy="50" r="18" strokeWidth="1.5" />
            {[...Array(6)].map((_, i) => (
              <g key={i} transform={`rotate(${(i * 60)} 50 50)`}>
                <rect x="47" y="6" width="6" height="10" fill="currentColor" />
              </g>
            ))}
          </svg>
        </div>
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Board />
      </main>

      <footer className="relative z-10 border-t border-amber-900/40 bg-amber-950/80 px-4 py-4 text-center text-sm text-amber-200 sm:px-6 lg:px-8">
        <p>Diseñado y desarrollado por J.Cuallado</p>
      </footer>
    </div>
  )
}
