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
      className={`absolute z-20 rounded-2xl border-2 transition-all duration-200 ${
        isInstalled
          ? 'border-amber-400 bg-amber-500/25 shadow-xl'
          : isActive
            ? 'border-yellow-400 bg-yellow-400/15 shadow-2xl animate-pulse-steam'
            : 'border-amber-900/40 bg-amber-950/10'
      }`}
      style={zone.style}
    >
      {!isInstalled && (
        <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-amber-500/50 text-center text-xs font-medium text-amber-300">
          {activeComponent ? 'Encaja aqui' : zone.label}
        </div>
      )}
      {isInstalled && (
        <div className="flex h-full items-center justify-center rounded-2xl text-sm font-semibold text-amber-100">
          ✓ {zone.label}
        </div>
      )}
    </div>
  )
}
