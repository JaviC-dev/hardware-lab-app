import React from 'react'
import components from '../data/components.json'

export default function SidePanel({ componentId, onClose }) {
  const comp = components.find((c) => c.id === componentId)

  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-96 transform ${componentId ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <div className="h-full bg-white shadow-xl p-6 overflow-auto">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold">{comp ? comp.name : 'Selecciona un componente'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">Cerrar</button>
        </div>

        {comp ? (
          <div className="mt-4 space-y-4">
            <p className="text-gray-700">{comp.description}</p>
            <div>
              <h3 className="font-medium">Función</h3>
              <p className="text-gray-700">{comp.function}</p>
            </div>
            <div>
              <h3 className="font-medium">Curiosidad</h3>
              <p className="text-gray-700">{comp.curiosity}</p>
            </div>
          </div>
        ) : (
          <p className="mt-4 text-gray-600">Haz clic en un componente del ordenador para ver datos adaptados al alumnado de ESO.</p>
        )}
      </div>
    </div>
  )
}
