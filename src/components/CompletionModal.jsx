import React from 'react'

export default function CompletionModal({ isOpen, onReset }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="plate-metal w-full max-w-md p-8 text-center">
        <div className="mb-6 text-6xl animate-pulse">⚙️</div>
        <h2 className="title-victorian text-3xl">Maquina Completada</h2>
        <p className="mt-4 text-amber-100">Has montado correctamente todos los componentes del laboratorio! El ordenador esta listo para funcionar.</p>
        <button
          type="button"
          onClick={onReset}
          className="btn-steam mt-8 w-full"
        >
          Reiniciar el Laboratorio
        </button>
      </div>
    </div>
  )
}
