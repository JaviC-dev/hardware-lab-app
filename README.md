# Hardware Lab

Hardware Lab es una aplicación educativa interactiva desarrollada con React, Vite y Tailwind CSS para aprender de forma visual y práctica los componentes de un ordenador.

## Objetivo del proyecto
La falta de recursos en el aula dificulta que el alumnado pueda manipular hardware real. Esta aplicación ofrece una experiencia sencilla, intuitiva y visual para introducir los conceptos básicos del montaje de un PC y la función de cada componente.

Está pensada para alumnado de secundaria, especialmente de 1º a 4º de ESO, que empieza a conocer el funcionamiento interno de un ordenador.

## Funcionalidades
- Montaje interactivo de un ordenador mediante drag & drop.
- Zonas de colocación sobre una imagen de la placa base.
- Bandeja de componentes arrastrables con imagen y nombre.
- Feedback visual al colocar correctamente un componente o al cometer un error.
- Progreso automático del montaje con contador de componentes instalados.
- Modal de finalización al completar correctamente el montaje.
- Sección inferior con información detallada sobre cada componente, accesible mediante botones desplegables.

## Últimos cambios
- Se ha implementado la versión MVP 2 con una experiencia de montaje más visual y guiada.
- Se ha añadido el sistema de arrastre y soltado con validación por zona.
- Se ha incorporado un contador de progreso y una pantalla final de éxito.
- Se ha reorganizado la interfaz para incluir una sección inferior de información educativa sobre los componentes.
- Se ha ajustado el comportamiento del drag & drop para que solo se mueva la imagen del componente.

## Tecnologías utilizadas
- React
- Vite
- Tailwind CSS
- dnd-kit

## Instalación y uso
```bash
npm install
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## Estructura del proyecto
- src/components: componentes de la interfaz y lógica visual.
- src/data: datos de los componentes del ordenador.
- src/assets: imágenes de los componentes y de la placa base.

> Proyecto desarrollado para curso "Vibe Coding educatiu amb Intel·ligència Artificial i la seua publicació". Los prompts utilizados se encuentran en el fichero prompts.md
