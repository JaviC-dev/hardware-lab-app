import React, { useEffect, useMemo, useState } from 'react'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import componentsData from '../data/componentsData'
import pcComponents from '../assets/pc-components.jpg'
import DropZone from './DropZone'
import ComponentTray from './ComponentTray'
import ProgressBar from './ProgressBar'
import CompletionModal from './CompletionModal'

const zones = [
  { id: 'procesador', label: 'Procesador', style: { left: '7%', top: '12%', width: '20%', height: '20%' } },
  { id: 'memoria_ram', label: 'RAM', style: { left: '31%', top: '20%', width: '14%', height: '42%' } },
  { id: 'disco_duro', label: 'Disco duro', style: { left: '10%', top: '58%', width: '22%', height: '16%' } },
  { id: 'tarjeta_grafica', label: 'GPU', style: { left: '48%', top: '16%', width: '32%', height: '20%' } },
  { id: 'fuente_alimentacion', label: 'Fuente', style: { left: '72%', top: '12%', width: '20%', height: '16%' } },
  { id: 'ventilador', label: 'Ventilador', style: { left: '16%', top: '34%', width: '14%', height: '13%' } }
]

export default function Board() {
  const [installedIds, setInstalledIds] = useState([])
  const [feedback, setFeedback] = useState({ type: '', message: '' })
  const [activeComponentId, setActiveComponentId] = useState(null)
  const [hoveredZone, setHoveredZone] = useState(null)
  const [selectedInfo, setSelectedInfo] = useState(null)

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }))

  const installedCount = installedIds.length
  const completed = installedCount === componentsData.length

  const activeComponent = useMemo(
    () => componentsData.find((component) => component.id === activeComponentId) || null,
    [activeComponentId]
  )

  useEffect(() => {
    if (!feedback.message) return undefined

    const timer = window.setTimeout(() => setFeedback({ type: '', message: '' }), 1800)
    return () => window.clearTimeout(timer)
  }, [feedback.message])

  const handleDragStart = (event) => {
    setActiveComponentId(event.active.id)
    setFeedback({ type: '', message: '' })
  }

  const handleDragOver = (event) => {
    const zoneId = event.over?.data?.current?.zoneId
    setHoveredZone(zoneId || null)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    const droppedZone = over?.data?.current?.zoneId
    const component = componentsData.find((item) => item.id === active.id)

    if (!component || !droppedZone) {
      setActiveComponentId(null)
      setHoveredZone(null)
      return
    }

    if (component.zonaCorrecta === droppedZone) {
      if (!installedIds.includes(component.id)) {
        setInstalledIds((prev) => [...prev, component.id])
      }
      setFeedback({ type: 'success', message: '✅ Correcto' })
    } else {
      setFeedback({ type: 'error', message: '❌ Ese componente no va ahí.' })
    }

    setActiveComponentId(null)
    setHoveredZone(null)
  }

  const handleReset = () => {
    setInstalledIds([])
    setFeedback({ type: '', message: '' })
    setActiveComponentId(null)
    setHoveredZone(null)
    setSelectedInfo(null)
  }

  const toggleComponentInfo = (component) => {
    setSelectedInfo((current) => (current?.id === component.id ? null : component))
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <div className="space-y-6">
        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Hardware Lab</p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900">Monta tu ordenador paso a paso</h1>
              <p className="mt-2 max-w-2xl text-slate-600">Arrastra cada componente hasta su zona correcta sobre la placa base.</p>
            </div>
            <div className="w-full max-w-sm">
              <ProgressBar installedCount={installedCount} total={componentsData.length} />
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.95fr]">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)]">
              <img src={pcComponents} alt="Placa base del ordenador" className="w-full rounded-[1.5rem]" />
              {zones.map((zone) => (
                <DropZone
                  key={zone.id}
                  zone={zone}
                  activeComponent={activeComponent}
                  installed={installedIds}
                  hoveredZone={hoveredZone}
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">Bandeja de componentes</h3>
                  <p className="text-sm text-slate-500">Arrastra cada pieza a la zona correcta.</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm font-medium ${feedback.type === 'success' ? 'bg-emerald-100 text-emerald-700' : feedback.type === 'error' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'}`}>
                  {feedback.message || 'Listo para empezar'}
                </span>
              </div>
              <ComponentTray components={componentsData} installedIds={installedIds} />
            </div>
          </div>
        </div>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Información sobre los componentes</h2>
              <p className="text-sm text-slate-500">Pulsa sobre cada botón para abrir su información en un desplegable.</p>
            </div>
            <span className="text-sm font-medium text-sky-600">{selectedInfo ? `Seleccionado: ${selectedInfo.nombre}` : 'Selecciona un componente'}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {componentsData.map((component) => (
              <button
                key={component.id}
                type="button"
                onClick={() => toggleComponentInfo(component)}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  selectedInfo?.id === component.id ? 'bg-sky-600 text-white shadow' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {component.nombre}
              </button>
            ))}
          </div>

          {selectedInfo && (
            <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50/70 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <img src={selectedInfo.imagen} alt={selectedInfo.nombre} className="h-14 w-14 rounded-2xl bg-white p-2 object-contain shadow-sm" />
                <div>
                  <h3 className="font-semibold text-slate-900">{selectedInfo.nombre}</h3>
                  <p className="mt-1 text-sm text-slate-600">{selectedInfo.descripcion}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-800">¿Qué hace?</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{selectedInfo.funcion}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-800">Importancia</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{selectedInfo.importancia}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-800">Dónde va</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{selectedInfo.ubicacion}</p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="font-semibold text-slate-800">Dato curioso</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{selectedInfo.datoCurioso}</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
      <CompletionModal isOpen={completed} onReset={handleReset} />
    </DndContext>
  )
}
