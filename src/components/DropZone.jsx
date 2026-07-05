import React from 'react'
import { useDroppable } from '@dnd-kit/core'

export default function DropZone({ zone, activeComponent, onDrop, installed, hoveredZone }) {
  const { isOver, setNodeRef } = useDroppable({
    id: zone.id,
    data: { zoneId: zone.id }
  })

  const isActive = isOver || hoveredZone === zone.id
  const isInstalled = installed.includes(zone.id)

  return (
    <div
      ref={setNodeRef}
      className={`absolute rounded-2xl border-2 transition-all duration-200 ${
        isInstalled
          ? 'border-emerald-400 bg-emerald-500/15 shadow-lg'
          : isActive
            ? 'border-sky-400 bg-sky-400/10 shadow-md'
            : 'border-transparent bg-transparent'
      }`}
      style={zone.style}
    >
      {!isInstalled && (
        <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-300/70 text-center text-xs font-medium text-slate-400">
          {activeComponent ? 'Suelta aquí' : zone.label}
        </div>
      )}
      {isInstalled && (
        <div className="flex h-full items-center justify-center rounded-2xl text-sm font-semibold text-emerald-700">
          {zone.label}
        </div>
      )}
    </div>
  )
}
