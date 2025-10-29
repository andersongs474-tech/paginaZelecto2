// app/components/Results.tsx
import { FaBullhorn, FaRegListAlt, FaPuzzlePiece } from 'react-icons/fa';

// Componente reutilizable para los íconos de servicio.
const ServiceItem = ({ icon, title }: { icon: React.ReactNode, title: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center max-w-[200px] mx-auto">
    <div className="bg-lime-300 rounded-full w-32 h-32 flex items-center justify-center mb-4 text-black">
      {icon}
    </div>
    <h4 className="font-semibold text-lg">{title}</h4>
  </div>
);

// Componente de marcador de posición para las imágenes de los teléfonos.
const PhonePlaceholder = ({ className = '' }: { className?: string }) => (
  <div className={`bg-gray-200 rounded-3xl border-4 border-gray-300 h-80 w-40 flex items-center justify-center ${className}`}>
    <p className="text-gray-500 text-sm p-4 text-center">Reemplazar con imagen</p>
  </div>
);

export default function Results() {
  return (
    // He cambiado el color de fondo a blanco para que coincida con la captura.
    <section id="more-services" className="py-20 bg-white">
      <div className="container mx-auto px-4 space-y-28">

        {/* --- Sección: Contenido Audiovisual --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Contenido de texto e iconos */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-black">Contenido audiovisual</h2>
            <p className="max-w-xl mx-auto md:mx-0 text-gray-800 text-base mb-10">
              Diseñamos estrategias publicitarias que convierten datos en crecimiento real. 
              Gestionamos campañas con enfoque en análisis, optimización y rentabilidad, impulsando resultados medibles desde la primera inversión.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <ServiceItem icon={<FaBullhorn size={50} />} title={<>Creación de<br/>estrategia</>} />
              <ServiceItem icon={<FaRegListAlt size={50} />} title="Producción" />
              <ServiceItem icon={<FaPuzzlePiece size={50} />} title={<>Posproducción<br/>y ediciones</>} />
            </div>
          </div>
          {/* Imágenes de los teléfonos */}
          <div className="md:w-1/2 flex justify-center md:justify-start gap-6">
            <PhonePlaceholder />
            <PhonePlaceholder className="hidden sm:flex" /> {/* Ocultamos el segundo en móviles pequeños */}
          </div>
        </div>

        {/* --- Sección: Anuncios UGC --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Imágenes de los teléfonos (primero en el orden visual en escritorio) */}
          <div className="md:w-1/2 flex justify-center md:justify-end gap-6 order-1 md:order-none">
            <PhonePlaceholder />
            <PhonePlaceholder className="hidden sm:flex" />
          </div>
          {/* Contenido de texto e iconos */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 text-black">Anuncios UGC</h2>
            <p className="max-w-xl mx-auto md:mx-0 text-gray-800 text-base mb-4">
              Anuncios UGC de alto impacto → guiones persuasivos, creadores, pre - producción, postproducción y testing constante.
            </p>
            <p className="max-w-xl mx-auto md:mx-0 text-gray-800 text-base mb-10">
              Un servicio completo para transformar creatividad auténtica en ventas comprobadas.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <ServiceItem icon={<FaBullhorn size={50} />} title={<>Guiones con<br/>fórmulas<br/>comprobadas</>} />
              <ServiceItem icon={<FaRegListAlt size={50} />} title={<>Creadores UGC<br/>profesionales</>} />
              <ServiceItem icon={<FaPuzzlePiece size={50} />} title={<>Posproducción<br/>y ediciones</>} />
            </div>
          </div>
        </div>
        
        {/* --- Sección: Sitios Web --- */}
        <div className="text-center max-w-4xl mx-auto">
           <h2 className="text-4xl font-bold mb-4 text-black">Sitios Web</h2>
           <p className="max-w-2xl mx-auto text-gray-800 text-base mb-12">
             Landings y E-commerce ultrarrápidos, diseñados para una sola cosa: convertir visitantes en clientes.
           </p>
           <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
              <ServiceItem icon={<FaBullhorn size={50} />} title="-" />
              <ServiceItem icon={<FaRegListAlt size={50} />} title="-" />
              <ServiceItem icon={<FaPuzzlePiece size={50} />} title="-" />
           </div>
        </div>

      </div>
    </section>
  );
}