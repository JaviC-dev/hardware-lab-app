import React from 'react'

export default function ProgressBar({ installedCount, total }) {
  const progress = (installedCount / total) * 100

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-amber-300">
        <span>Progreso</span>
        <span className="font-semibold text-amber-100">{installedCount}/{total}</span>
      </div>

      <div className="h-3 rounded-full border border-amber-800 bg-amber-950/70 p-1 shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 transition-all duration-300"
          style={{ width: `${Math.max(progress, 4)}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-amber-300">
        <span>0%</span>
        <span className="font-semibold text-amber-100">{Math.round(progress)}%</span>
        <span>100%</span>
      </div>
    </div>
  )
}
