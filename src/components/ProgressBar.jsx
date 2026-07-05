import React from 'react'

export default function ProgressBar({ installedCount, total }) {
  const progress = Math.round((installedCount / total) * 100)

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
        <span>Componentes instalados</span>
        <span className="font-semibold text-slate-800">{installedCount} / {total}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
