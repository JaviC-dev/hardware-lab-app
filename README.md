# Hardware Lab

> Laboratorio interactivo de montaje de ordenadores — aprende cómo se monta un PC pieza a pieza.

**Hardware Lab** es una aplicación educativa interactiva desarrollada con **React**, **Vite** y **Tailwind CSS** para aprender de forma visual y práctica los componentes internos de un ordenador.

## Objetivo del proyecto

La falta de recursos en el aula dificulta que el alumnado pueda manipular hardware real. Esta aplicación ofrece una experiencia sencilla, intuitiva y visual para introducir los conceptos básicos del montaje de un PC y la función de cada componente.

Está pensada para alumnado de secundaria, especialmente de 1.º a 4.º de ESO, que empieza a conocer el funcionamiento interno de un ordenador.

## Funcionalidades

- **Página de inicio** con acceso directo a las dos secciones principales: montaje interactivo e información de componentes.
- **Montaje interactivo de un ordenador** mediante drag & drop con validación por zona.
- **Zonas de colocación** sobre una imagen de la placa base con feedback visual (hover, acierto y error).
- **Bandeja de componentes** arrastrables con imagen y nombre; los componentes instalados desaparecen de la bandeja.
- **Barra de progreso** que muestra el avance del montaje en tiempo real.
- **Feedback visual** al colocar correctamente un componente o al cometer un error (mensajes temporales con colores distintivos).
- **Modal de finalización** al completar correctamente el montaje, con opción de reiniciar.
- **Sección de información de componentes** con fichas técnicas detalladas que se muestran al seleccionar cada pieza.
- **Diseño temático oscuro** estilo steampunk/victoriano con animaciones de engranajes, paneles de madera y metal.
- **Navegación entre páginas** mediante cabecera fija con botones de sección.

## Componentes del ordenador

La aplicación incluye 6 componentes para montar:

| Componente | Zona en la placa |
|---|---|
| Procesador (CPU) | Procesador |
| Memoria RAM | RAM |
| Disco duro | Disco duro |
| Tarjeta gráfica (GPU) | GPU |
| Fuente de alimentación | Fuente |
| Ventilador | Ventilador |

## Tecnologías utilizadas

- **React 18** — Librería de interfaz de usuario
- **Vite 5** — Entorno de desarrollo y build
- **Tailwind CSS 3** — Framework de estilos utilitario
- **dnd-kit** — Sistema de arrastrar y soltar (drag & drop)
- **PostCSS & Autoprefixer** — Procesado de CSS

##  Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/JaviC-dev/hardware-lab-app.git
cd hardware-lab-app

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

```bash
# Generar build de producción
npm run build

# Vista previa del build
npm run preview
```

##  Instrucciones para su uso en clase

Hardware Lab está diseñado para integrarse en sesiones de tecnología de 1.º a 4.º de ESO. A continuación se proponen dinámicas de uso según el tiempo disponible y el nivel del grupo.

### Dinámica rápida (15–20 min) — Introducción a los componentes

1. El profesorado proyecta la aplicación en la pizarra digital.
2. Se abre la sección **Info. Componentes** y se van seleccionando las piezas una a una, comentando en voz alta su función e importancia.
3. A continuación, se accede a **Monta tu PC** y se invita a un alumno o alumna a arrastrar el primer componente a su zona correcta.
4. Se repite la operación con distintos voluntarios hasta completar el montaje.
5. Al finalizar, se abre un turno de preguntas: *"¿Qué pasa si la fuente de alimentación falla?", "¿Por qué la RAM pierde los datos al apagar?"*.

### Sesión completa (45–50 min) — Taller de montaje

1. **Introducción (5 min):** El profesorado explica el objetivo de la sesión y presenta las tres secciones de la aplicación.
2. **Exploración guiada (10 min):** Cada alumno, en parejas o individualmente, abre la aplicación en su dispositivo y explora la sección de información de componentes.
3. **Montaje interactivo (20 min):** Los alumnos realizan el montaje completo. Pueden ayudarse entre sí, pero cada uno debe completar su propio montaje.
4. **Puesta en común (10 min):** Se proyectan los resultados y se discuten las dificultades encontradas. El profesorado refuerza los conceptos clave (función de la CPU, diferencia entre RAM y disco duro, etc.).

### Variantes y recomendaciones

- **Trabajo en parejas:** Un alumno lee la información del componente en voz alta mientras el otro lo arrastra a la zona correcta. Fomenta la cooperación y el debate.
- **Competición por equipos:** Cronometrar el montaje y ver qué equipo lo completa en menos tiempo con menos errores.
- **Refuerzo con preguntas:** Tras completar el montaje, el profesorado puede pedir a los alumnos que escriban en una frase la función de cada componente.
- **Uso sin dispositivos individuales:** Si solo se dispone de un ordenador con proyector, el profesorado puede dirigir el montaje y pedir a los alumnos que indiquen verbalmente dónde colocar cada pieza.
- **Evaluación formativa:** El progreso mostrado en la barra permite al profesorado identificar rápidamente qué alumnos necesitan más apoyo.

##  Estructura del proyecto

```
hardware-lab/
├── index.html
├── vite.config.mjs
├── tailwind.config.cjs
├── postcss.config.cjs
├── package.json
├── prompts.md
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx              ← Componente principal con navegación
    ├── index.css             ← Estilos globales y animaciones
    ├── assets/               ← Imágenes de componentes y placa base
    ├── components/
    │   ├── Board.jsx         ← Página de montaje con DnD
    │   ├── ComponentCard.jsx ← Tarjeta de componente arrastrable
    │   ├── ComponentTray.jsx ← Bandeja de componentes arrastrables
    │   ├── CompletionModal.jsx ← Modal de finalización
    │   ├── DropZone.jsx      ← Zona de colocación en la placa
    │   ├── HomePage.jsx      ← Página de inicio / bienvenida
    │   ├── InfoPanel.jsx     ← Panel informativo de componentes
    │   └── ProgressBar.jsx   ← Barra de progreso del montaje
    └── data/
        ├── components.json     ← Datos raw de componentes (legacy)
        └── componentsData.js   ← Datos procesados con zonas
```

##  Arquitectura de la aplicación

La aplicación consta de **tres pantallas** navegables desde la cabecera:

1. **Inicio** — Pantalla de bienvenida con dos botones principales (Monta tu PC / Información sobre componentes) y animaciones decorativas de engranajes.
2. **Monta tu PC** — Vista principal donde el usuario arrastra componentes desde la bandeja hasta las zonas correctas sobre la imagen de la placa base. Incluye barra de progreso y feedback en tiempo real.
3. **Info. Componentes** — Muestra el panel informativo de cada componente. Al seleccionar un componente se despliegan automáticamente cuatro secciones detalladas: qué hace, importancia, ubicación y nota histórica.

### Flujo de drag & drop

1. El usuario selecciona un componente de la bandeja (activación con distancia mínima de 4 px).
2. Al arrastrar sobre una zona, esta se ilumina con un efecto *pulse*.
3. Al soltar, se valida si el componente corresponde a la zona:
   - ✅ **Acierto**: el componente se marca como instalado y desaparece de la bandeja.
   - ❌ **Error**: se muestra un mensaje de error temporal y el componente vuelve a la bandeja.
4. Al completar los 6 componentes, aparece un modal de felicitación con opción de reinicio.

## Últimos cambios

### v0.2.0 (MVP actual)
-  Implementación de **navegación multipágina** (Inicio / Montaje / Info Componentes).
-  Nueva **página de inicio** con diseño temático, engranajes animados y acceso directo a las funcionalidades.
-  Nueva **sección de información de componentes** con fichas técnicas detalladas al seleccionar cada pieza.
-  Rediseño completo de la interfaz con **temática steampunk/victoriana** (colores ámbar, paneles de madera y metal).
-  Añadidas **animaciones decorativas** de engranajes (rotación y contrarrotación).
-  **Imagen actualizada de la placa base** con zonas de colocación más visibles.
-  Ajuste del comportamiento drag & drop para mayor precisión y feedback visual.

### v0.1.0 (MVP inicial)
- Implementación del sistema de arrastre y soltado con validación por zona.
- Contador de progreso y pantalla final de éxito.
- Barra de progreso visual con porcentaje.
- 6 componentes básicos del ordenador con sus zonas correspondientes.

## Autor

Diseñado y desarrollado por **Javi C.**.

## 📝 Notas

> Proyecto desarrollado para el curso *"Vibe Coding educatiu amb Intel·ligència Artificial i la seua publicació"*.  
> Los prompts utilizados se encuentran en el fichero [`prompts.md`](./prompts.md).

---