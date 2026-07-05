## Registro de prompts en desarrollo de proyecto

### Primera versión

> Crea una aplicación web educativa llamada **Hardware Lab** utilizando React, Vite y Tailwind CSS.
> La aplicación debe mostrar una imagen de un ordenador de sobremesa desmontado con seis componentes principales: placa base, procesador, memoria RAM, SSD, tarjeta gráfica y fuente de alimentación.
> Cada componente debe ser clicable. Al hacer clic, se abrirá un panel lateral con el nombre del componente, una breve descripción, su función y una curiosidad.
> El diseño debe ser moderno, limpio, responsive y pensado para alumnado de 1.º a 4.º de ESO.
> No debe existir navegación entre páginas; toda la aplicación debe desarrollarse en una única pantalla principal.
> Los datos de los componentes deben almacenarse en un archivo JSON independiente para facilitar su mantenimiento y la ampliación de la aplicación en futuras versiones.

### Segunda Versión. 

> Eres un desarrollador senior especializado en React, Vite y Tailwind CSS.
>
> Quiero crear la segunda versión (MVP 2) de esta aplicación llamada **Hardware Lab**.
>
> ## Objetivo
>
> La aplicación debe permitir montar un ordenador de forma interactiva mediante drag & drop. No debe ser un simulador complejo; debe ser sencilla, intuitiva y visual.
>
> ## Tecnologías
>
> - React
> - Vite
> - Tailwind CSS
> - dnd-kit para el drag & drop
>
> No utilizar backend. No utilizar base de datos. Todo el estado estará en memoria.
>
> ## Diseño
>
> Hay que modificar la pantalla principal para que esté dividida en una fila con la información de los componentes (la sección "Componentes de PC"), situada bajo el título, y debajo dos columnas.
>
> ### Fila de información de los componentes
>
> Modificar la zona de información para que los componentes aparezcan alineados horizontalmente. Si el usuario hace clic sobre un componente, debe seguir apareciendo su información como hasta ahora.
>
> ### Parte inferior: columna izquierda
>
> Mostrar la imagen de la placa base. La imagen ya está en el proyecto y se llama **pc-componentes.jpg**.
>
> Sobre esta imagen deben existir zonas donde el usuario pueda soltar componentes. Las zonas deben estar posicionadas con CSS de forma absoluta y deben resaltarse ligeramente cuando el usuario arrastre un componente sobre ellas.
>
> ### Parte inferior: columna derecha
>
> Mostrar una bandeja con los componentes disponibles. Cada componente aparecerá como una tarjeta con:
>
> - Imagen.
> - Nombre.
>
> Las tarjetas deben poder arrastrarse.
>
> ## Componentes
>
> Utilizar únicamente estos seis componentes:
>
> - Procesador (procesador.png)
> - Memoria RAM (RAM.png)
> - Disco duro (hdd.png)
> - Tarjeta gráfica (gpu.png)
> - Fuente de alimentación (fuente.png)
> - Ventilador CPU (ventilador.png)
>
> Todas las imágenes están ubicadas en:
>
> `/src/assets/`
>
> No generar imágenes. Ya están añadidas manualmente al proyecto.
>
> ## Mecánica
>
> Cuando un componente se arrastra, puede soltarse en cualquier zona.
>
> Si la zona es correcta:
>
> - El componente queda fijado.
> - Aparece una pequeña animación.
> - Se muestra el mensaje: ✅ Correcto.
>
> Si la zona es incorrecta:
>
> - El componente vuelve automáticamente a la bandeja.
> - Se muestra el mensaje: ❌ Ese componente no va ahí.
>
> ## Progreso
>
> En la parte superior mostrar un contador con el texto:
>
> **Componentes instalados**
>
> **0 / 6**
>
> Este contador debe actualizarse automáticamente conforme se coloquen correctamente los componentes.
>
> ## Cuando el alumno complete el montaje
>
> Mostrar una tarjeta centrada con el siguiente contenido:
>
> 🎉 ¡Ordenador montado correctamente!
>
> Has instalado todos los componentes.
>
> Incluir un botón **"Volver a empezar"**, que reinicie completamente la actividad.
>
> ## Código
>
> Organizar el proyecto utilizando los siguientes componentes:
>
> - App
> - Board
> - ComponentTray
> - ComponentCard
> - DropZone
> - ProgressBar
> - CompletionModal
>
> Separar los datos de los componentes en un archivo **componentsData.js**.
>
> Cada componente deberá tener las siguientes propiedades:
>
> - id
> - nombre
> - imagen
> - zonaCorrecta
> - descripcion
>
> ## Estilo
>
> Mantener un aspecto moderno, con colores suaves, mucho espacio en blanco, tarjetas con esquinas redondeadas, sombras ligeras y animaciones rápidas. El diseño debe ser responsive y transmitir la sensación de una aplicación educativa moderna, no de una página web tradicional.
>
> Genera todo el código necesario modificando el proyecto existente, reutilizando al máximo la estructura actual y evitando reescribir código que ya funciona.