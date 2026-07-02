import React from 'react'
import components from '../data/components.json'
import pcComponents from '../assets/pc-components.jpg'

const parts = [
  { id: 'procesador', style: { left: '6%', top: '8%', width: '26%', height: '26%', zIndex: 1 } },
  { id: 'memoria_ram', style: { left: '28%', top: '12%', width: '16%', height: '50%', zIndex: 1 } },
  { id: 'ssd', style: { left: '8%', top: '58%', width: '22%', height: '18%', zIndex: 1 } },
  { id: 'tarjeta_grafica', style: { left: '45%', top: '16%', width: '34%', height: '22%', zIndex: 1 } },
  { id: 'fuente_alimentacion', style: { left: '72%', top: '10%', width: '23%', height: '18%', zIndex: 1 } },
  { id: 'placa_base', style: { left: '0%', top: '0%', width: '100%', height: '100%', zIndex: 0 } },
]

export default function Board({ onSelect, selectedId }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
        <figure className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
          <img
            src={pcComponents}
            alt="Componentes reales de un PC desmontado"
            className="w-full h-auto block"
          />
          {parts.map((part) => (
            <button
              key={part.id}
              type="button"
              onClick={() => onSelect(part.id)}
              className={`absolute rounded-2xl border transition ${selectedId === part.id ? 'border-indigo-500 bg-indigo-500/15' : 'border-transparent hover:border-slate-300 hover:bg-slate-200/20'}`}
              style={{ ...part.style, position: 'absolute' }}
            />
          ))}
          <figcaption className="absolute bottom-0 left-0 right-0 bg-slate-950/80 text-slate-100 p-3 text-sm">
            Imagen real del PC desmontado con zonas clicables. Toca un componente para ver más información.
          </figcaption>
        </figure>

        <aside className="w-full lg:w-80">
          <div className="bg-slate-50 rounded-3xl p-5 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Componentes del PC</h3>
            <p className="mt-2 text-sm text-slate-600">Selecciona un componente en la imagen o en la lista para aprender qué hace.</p>
            <ul className="mt-4 space-y-3">
              {components.map((c) => (
                <li key={c.id}>
                  <button
                    className={`w-full text-left rounded-2xl px-4 py-3 transition ${selectedId === c.id ? 'bg-indigo-600 text-white shadow' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
                    onClick={() => onSelect(c.id)}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
