// app/components/Results.tsx
import { FaBullhorn, FaRegListAlt, FaPuzzlePiece } from 'react-icons/fa';

// Componente ServiceItem con tamaños responsivos
const ServiceItem = ({ icon, title }: { icon: React.ReactNode, title: React.ReactNode }) => (
  // El max-w-[200px] se elimina para permitir que la cuadrícula controle el tamaño.
  <div className="flex flex-col items-center text-center mx-auto">
    {/* Contenedor del ícono responsivo */}
    <div className="bg-lime-300 rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mb-4 text-black">
      {/* Tamaño del ícono ligeramente más pequeño para el contenedor móvil */}
      {icon}
    </div>
    {/* Título responsivo */}
    <h4 className="font-semibold text-base sm:text-lg">{title}</h4>
  </div>
);

// Componente PhonePlaceholder con tamaños responsivos
const PhonePlaceholder = ({ className = '' }: { className?: string }) => (
  <div className={`bg-gray-200 rounded-3xl border-4 border-gray-300 h-64 w-32 sm:h-80 sm:w-40 flex items-center justify-center ${className}`}>
    <p className="text-gray-500 text-sm p-4 text-center">Reemplazar con imagen</p>
  </div>
);

export default function Results() {
  return (
    <section id="more-services" className="py-20 bg-white">
      {/* Espaciado vertical entre secciones reducido en móvil */}
      <div className="container mx-auto px-4 space-y-20 md:space-y-28">

        {/* --- Sección: Contenido Audiovisual --- */}
        {/* Espaciado de columnas ajustado */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-10 gap-x-12">
          {/* Contenido de texto e iconos */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Título responsivo */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Contenido audiovisual</h2>
            <p className="max-w-xl mx-auto md:mx-0 text-gray-700 text-base mb-10">
              Diseñamos estrategias publicitarias que convierten datos en crecimiento real. 
              Gestionamos campañas con enfoque en análisis, optimización y rentabilidad, impulsando resultados medibles desde la primera inversión.
            </p>
            {/* Cuadrícula responsiva: 1 columna en móvil, 3 en pantallas 'sm' y superiores */}
            <div className="grid grid-cols-3 gap-y-8 sm:gap-4">
              <ServiceItem icon={<FaBullhorn size={40} />} title={<>Creación de<br/>estrategia</>} />
              <ServiceItem icon={<FaRegListAlt size={40} />} title="Producción" />
              <ServiceItem icon={<FaPuzzlePiece size={40} />} title={<>Posproducción<br/>y ediciones</>} />
            </div>
          </div>
          {/* Imágenes de los teléfonos */}
          <div className="md:w-1/2 flex justify-center md:justify-start gap-4 sm:gap-6">
            <PhonePlaceholder />
            <PhonePlaceholder className="hidden sm:flex" />
          </div>
        </div>

        {/* --- Sección: Anuncios UGC --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-10 gap-x-12">
          {/* Imágenes de los teléfonos */}
          <div className="md:w-1/2 flex justify-center md:justify-end gap-4 sm:gap-6 order-1 md:order-none">
            <PhonePlaceholder />
            <PhonePlaceholder className="hidden sm:flex" />
          </div>
          {/* Contenido de texto e iconos */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Anuncios UGC</h2>
            <p className="max-w-xl mx-auto md:mx-0 text-gray-700 text-base mb-4">
              Anuncios UGC de alto impacto → guiones persuasivos, creadores, pre - producción, postproducción y testing constante.
            </p>
            <p className="max-w-xl mx-auto md:mx-0 text-gray-700 text-base mb-10">
              Un servicio completo para transformar creatividad auténtica en ventas comprobadas.
            </p>
            <div className="grid grid-cols-3 gap-y-8 sm:gap-4">
              <ServiceItem icon={<FaBullhorn size={40} />} title={<>Guiones con<br/>fórmulas<br/>comprobadas</>} />
              <ServiceItem icon={<FaRegListAlt size={40} />} title={<>Creadores UGC<br/>profesionales</>} />
              <ServiceItem icon={<FaPuzzlePiece size={40} />} title={<>Posproducción<br/>y ediciones</>} />
            </div>
          </div>
        </div>
        
        {/* --- Sección: Sitios Web --- */}
        <div className="text-center max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Sitios Web</h2>
           <p className="max-w-2xl mx-auto text-gray-700 text-base mb-12">
             Landings y E-commerce ultrarrápidos, diseñados para una sola cosa: convertir visitantes en clientes.
           </p>
           <div className="grid grid-cols-3 gap-y-8 sm:gap-4 max-w-3xl mx-auto">
              <ServiceItem icon={<FaBullhorn size={40} />} title="-" />
              <ServiceItem icon={<FaRegListAlt size={40} />} title="-" />
              <ServiceItem icon={<FaPuzzlePiece size={40} />} title="-" />
           </div>
        </div>

      </div>
    </section>
  );
}