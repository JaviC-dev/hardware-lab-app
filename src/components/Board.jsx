import React, { useEffect, useMemo, useState } from 'react'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import componentsData from '../data/componentsData'
import pcComponents from '../assets/pc-components.jpg'
import DropZone from './DropZone'
import ComponentTray from './ComponentTray'
import ProgressBar from './ProgressBar'
import CompletionModal from './CompletionModal'
import InfoPanel from './InfoPanel'

const zones = [
  { id: 'procesador', label: 'Procesador', style: { left: '7%', top: '12%', width: '20%', height: '20%' } },
  { id: 'memoria_ram', label: 'RAM', style: { left: '31%', top: '20%', width: '14%', height: '42%' } },
  { id: 'disco_duro', label: 'Disco duro', style: { left: '10%', top: '58%', width: '22%', height: '16%' } },
  { id: 'tarjeta_grafica', label: 'GPU', style: { left: '48%', top: '16%', width: '32%', height: '20%' } },
  { id: 'fuente_alimentacion', label: 'Fuente', style: { left: '72%', top: '12%', width: '20%', height: '16%' } },
  { id: 'ventilador', label: 'Ventilador', style: { left: '16%', top: '34%', width: '14%', height: '13%' } }
]

export default function Board({ showOnlyInfo }) {
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
    const droppedZone = over?.id || over?.data?.current?.zoneId
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

  if (showOnlyInfo) {
    return (
      <div className="space-y-6">
        <InfoPanel
          componentsData={componentsData}
          selectedInfo={selectedInfo}
          onToggleInfo={toggleComponentInfo}
        />
      </div>
    )
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
      <div className="space-y-6">
        <div className="plate-metal p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="subtitle-steam text-sm uppercase">Laboratorio Mecánico</p>
              <h1 className="title-victorian mt-2 text-4xl">Monta tu Ordenador</h1>
              <p className="mt-3 max-w-2xl text-amber-100">Arrastra cada pieza hasta su zona correcta sobre la placa base.</p>
            </div>
            <div className="w-full max-w-sm">
              <ProgressBar installedCount={installedCount} total={componentsData.length} />
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.95fr]">
          <div className="space-y-4">
            <div className="wood-panel relative overflow-hidden p-3">
              <div className="relative mx-auto w-full overflow-hidden rounded-2xl border-4 border-amber-900 bg-amber-950/20">
                <img src={pcComponents} alt="Placa base del ordenador" className="h-auto max-h-[480px] w-full object-contain" />
                <div className="absolute inset-0">
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
            </div>
          </div>

          <div className="space-y-4">
            <div className="wood-panel p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-amber-100">Bandeja de Trabajo</h3>
                  <p className="text-sm text-amber-200">Arrastra cada pieza al lugar correcto.</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm font-medium transition ${feedback.type === 'success' ? 'bg-emerald-900/80 text-emerald-100' : feedback.type === 'error' ? 'bg-red-900/80 text-red-100' : 'bg-amber-900/60 text-amber-100'}`}>
                  {feedback.message || 'Esperando...'}
                </span>
              </div>
              <ComponentTray components={componentsData} installedIds={installedIds} />
            </div>
          </div>
        </div>
      </div>
      <CompletionModal isOpen={completed} onReset={handleReset} />
    </DndContext>
  )
}