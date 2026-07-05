import React from 'react'

export default function CompletionModal({ isOpen, onReset }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl">
        <div className="mb-4 text-5xl">🎉</div>
        <h2 className="text-2xl font-semibold text-slate-900">¡Ordenador montado correctamente!</h2>
        <p className="mt-3 text-slate-600">Has instalado todos los componentes del laboratorio.</p>
        <button
          type="button"
          onClick={onReset}
          className="mt-6 rounded-full bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700"
        >
          Volver a empezar
        </button>
      </div>
    </div>
  )
}
