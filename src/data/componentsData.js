import procesador from '../assets/procesador.png'
import ram from '../assets/RAM.png'
import discoDuro from '../assets/hdd.png'
import gpu from '../assets/gpu.png'
import fuente from '../assets/fuente.png'
import ventilador from '../assets/ventilador.png'

const componentsData = [
  {
    id: 'procesador',
    nombre: 'Procesador',
    imagen: procesador,
    zonaCorrecta: 'procesador',
    descripcion: 'El procesador ejecuta las instrucciones del ordenador y coordina las tareas principales.',
    funcion: 'Interpreta las órdenes del sistema y realiza los cálculos que permiten ejecutar programas, navegar por internet o editar documentos.',
    importancia: 'Es el cerebro del equipo y determina la velocidad con la que se ejecutan las tareas.',
    ubicacion: 'Se coloca en la zona del procesador de la placa base.',
    datoCurioso: 'Los procesadores modernos tienen miles de millones de transistores en un espacio muy pequeño.'
  },
  {
    id: 'memoria_ram',
    nombre: 'Memoria RAM',
    imagen: ram,
    zonaCorrecta: 'memoria_ram',
    descripcion: 'La RAM guarda los datos que el ordenador usa en ese momento para trabajar rápido.',
    funcion: 'Mantiene abierta la información que necesita el procesador para trabajar con rapidez.',
    importancia: 'Cuanta más RAM tenga un equipo, mejor podrá abrir varias aplicaciones a la vez.',
    ubicacion: 'Se instala en los slots de memoria de la placa base.',
    datoCurioso: 'La RAM pierde su contenido cuando se apaga el ordenador, por eso no sirve como almacenamiento permanente.'
  },
  {
    id: 'disco_duro',
    nombre: 'Disco duro',
    imagen: discoDuro,
    zonaCorrecta: 'disco_duro',
    descripcion: 'El disco duro guarda el sistema operativo, los archivos y las aplicaciones de forma permanente.',
    funcion: 'Almacena de forma durable los datos, programas y documentos del usuario.',
    importancia: 'Sin almacenamiento, el equipo no podría guardar ni recuperar información cuando se reinicia.',
    ubicacion: 'Se coloca en la zona dedicada al almacenamiento de la placa o en un compartimento del chasis.',
    datoCurioso: 'Los discos duros tradicionales tienen partes móviles, mientras que los SSD son más rápidos y silenciosos.'
  },
  {
    id: 'tarjeta_grafica',
    nombre: 'Tarjeta gráfica',
    imagen: gpu,
    zonaCorrecta: 'tarjeta_grafica',
    descripcion: 'La tarjeta gráfica procesa los gráficos y ayuda a mostrar imágenes y vídeos de forma fluida.',
    funcion: 'Genera y despliega las imágenes que ves en pantalla, especialmente en juegos, edición o diseño.',
    importancia: 'Es fundamental para trabajar con gráficos 3D, videojuegos y tareas visuales intensivas.',
    ubicacion: 'Se inserta en la ranura PCI Express de la placa base.',
    datoCurioso: 'Las GPU también se usan en inteligencia artificial porque pueden procesar muchos datos al mismo tiempo.'
  },
  {
    id: 'fuente_alimentacion',
    nombre: 'Fuente de alimentación',
    imagen: fuente,
    zonaCorrecta: 'fuente_alimentacion',
    descripcion: 'La fuente proporciona la energía necesaria para que todos los componentes funcionen.',
    funcion: 'Convierte la corriente eléctrica y distribuye la energía de forma segura a cada pieza del ordenador.',
    importancia: 'Una fuente estable protege al equipo y evita fallos o averías.',
    ubicacion: 'Se sitúa en la parte posterior del chasis, conectada a la placa y al resto de componentes.',
    datoCurioso: 'Una fuente de baja calidad puede provocar problemas incluso si el resto del hardware es correcto.'
  },
  {
    id: 'ventilador',
    nombre: 'Ventilador CPU',
    imagen: ventilador,
    zonaCorrecta: 'ventilador',
    descripcion: 'El ventilador ayuda a disipar el calor generado por el procesador durante el uso.',
    funcion: 'Mantiene la temperatura del procesador en niveles seguros para evitar sobrecalentamientos.',
    importancia: 'Evita que el equipo se caliente demasiado y reduzca su rendimiento o se dañe.',
    ubicacion: 'Se coloca encima del disipador del procesador o muy cerca de él.',
    datoCurioso: 'Si el ventilador falla, el ordenador puede apagar o ralentizarse para proteger el hardware.'
  }
]

export default componentsData
