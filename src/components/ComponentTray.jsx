import React from 'react'
import ComponentCard from './ComponentCard'

export default function ComponentTray({ components, installedIds }) {
  return (
    <div className="space-y-3">
      {components.map((component) => (
        <ComponentCard
          key={component.id}
          component={component}
          isPlaced={installedIds.includes(component.id)}
        />
      ))}
    </div>
  )
}
