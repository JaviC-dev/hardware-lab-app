import React from 'react'
import { useDraggable } from '@dnd-kit/core'

export default function ComponentCard({ component, isPlaced }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: component.id,
    disabled: isPlaced
  })

  const draggableStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 20
      }
    : undefined

  return (
    <div
      className={`flex w-full items-center gap-4 rounded-xl border-2 border-amber-800 bg-amber-900/40 p-3 shadow-lg backdrop-blur transition ${
        isPlaced ? 'cursor-default opacity-50' : 'hover:bg-amber-900/60'
      }`}
    >
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-amber-700 bg-amber-800/60 transition ${
          isPlaced ? 'cursor-default' : 'cursor-grab'
        } ${isDragging ? 'scale-125 shadow-2xl ring-2 ring-amber-400' : ''}`}
        style={draggableStyle}
      >
        <img src={component.imagen} alt={component.nombre} className="h-12 w-12 object-contain" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-amber-100">{component.nombre}</p>
        <p className="text-sm text-amber-300">Arrastra la imagen</p>
      </div>
    </div>
  )
}
