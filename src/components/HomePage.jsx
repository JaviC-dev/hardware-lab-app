import React from 'react'

export default function HomePage({ onNavigate }) {
  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      <div className="text-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          {/* Left gear - larger, clockwise */}
          <div className="animate-gear">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="h-28 w-28 text-amber-500">
              <circle cx="50" cy="50" r="40" strokeWidth="3" />
              <circle cx="50" cy="50" r="18" strokeWidth="2" />
              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`rotate(${(i * 45)} 50 50)`}>
                  <rect x="47" y="6" width="6" height="10" fill="currentColor" />
                </g>
              ))}
              <circle cx="50" cy="50" r="6" fill="currentColor" />
            </svg>
          </div>
          {/* Right gear - smaller, counter-clockwise */}
          <div className="animate-gear-reverse -ml-6">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="h-20 w-20 text-amber-400">
              <circle cx="50" cy="50" r="34" strokeWidth="3" />
              <circle cx="50" cy="50" r="16" strokeWidth="2" />
              {[...Array(8)].map((_, i) => (
                <g key={i} transform={`rotate(${(i * 45)} 50 50)`}>
                  <rect x="47" y="9" width="6" height="8" fill="currentColor" />
                </g>
              ))}
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </svg>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold tracking-wide uppercase text-amber-950 drop-shadow-lg" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '2px' }}>Bienvenido</h1>
        <p className="subtitle-steam mt-4 text-xl">Laboratorio interactivo de montaje de ordenadores</p>
        <p className="mt-3 max-w-xl text-amber-200/70">
          Aprende cómo se monta un ordenador pieza a pieza o consulta información detallada sobre cada componente.
        </p>

        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => onNavigate('build')}
            className="btn-steam min-w-[260px] px-8 py-5 text-lg"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Monta tu PC
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('info')}
            className="btn-steam min-w-[260px] px-8 py-5 text-lg"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 16v-4" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 8h.01" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Información sobre componentes
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}