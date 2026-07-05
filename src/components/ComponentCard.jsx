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
      className={`flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition ${
        isPlaced ? 'cursor-default opacity-70' : 'hover:-translate-y-0.5 hover:shadow-md'
      }`}
    >
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 p-2 transition ${
          isPlaced ? 'cursor-default' : 'cursor-grab'
        } ${isDragging ? 'scale-105 shadow-xl' : ''}`}
        style={draggableStyle}
      >
        <img src={component.imagen} alt={component.nombre} className="h-10 w-10 object-contain" />
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-slate-800">{component.nombre}</p>
        <p className="text-sm text-slate-500">Arrastra la imagen al lugar correcto</p>
      </div>
    </div>
  )
}
