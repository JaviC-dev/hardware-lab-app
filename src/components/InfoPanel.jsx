import React from 'react'

export default function InfoPanel({ componentsData, selectedInfo, onToggleInfo }) {
  return (
    <section className="wood-panel p-5">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-amber-100">Enciclopedia Técnica</h2>
          <p className="text-sm text-amber-200">Pulsa sobre cada componente para abrir su ficha tecnica.</p>
        </div>
        <span className="text-sm font-semibold text-amber-300">
          {selectedInfo ? `${selectedInfo.nombre}` : 'Selecciona un componente'}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {componentsData.map((component) => (
          <button
            key={component.id}
            type="button"
            onClick={() => onToggleInfo(component)}
            className={`btn-steam transition ${
              selectedInfo?.id === component.id ? 'ring-2 ring-amber-300' : ''
            }`}
          >
            {component.nombre}
          </button>
        ))}
      </div>

      {selectedInfo && (
        <div className="mt-5 rounded-2xl border-2 border-amber-700 bg-amber-900/30 p-5 backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber-800/50 p-3 shadow-lg">
              <img src={selectedInfo.imagen} alt={selectedInfo.nombre} className="h-12 w-12 object-contain" />
            </div>
            <div>
              <h3 className="font-semibold text-amber-100">{selectedInfo.nombre}</h3>
              <p className="mt-1 text-sm text-amber-200">{selectedInfo.descripcion}</p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-amber-700 bg-amber-900/20 p-4">
              <p className="font-semibold text-amber-100">Que hace?</p>
              <p className="mt-2 text-sm leading-6 text-amber-200">{selectedInfo.funcion}</p>
            </div>
            <div className="rounded-xl border border-amber-700 bg-amber-900/20 p-4">
              <p className="font-semibold text-amber-100">Importancia</p>
              <p className="mt-2 text-sm leading-6 text-amber-200">{selectedInfo.importancia}</p>
            </div>
            <div className="rounded-xl border border-amber-700 bg-amber-900/20 p-4">
              <p className="font-semibold text-amber-100">Ubicacion</p>
              <p className="mt-2 text-sm leading-6 text-amber-200">{selectedInfo.ubicacion}</p>
            </div>
            <div className="rounded-xl border border-amber-700 bg-amber-900/20 p-4">
              <p className="font-semibold text-amber-100">Nota historica</p>
              <p className="mt-2 text-sm leading-6 text-amber-200">{selectedInfo.datoCurioso}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}