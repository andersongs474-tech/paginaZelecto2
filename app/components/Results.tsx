// app/components/Results.tsx
import { FaBullhorn, FaRegListAlt, FaPuzzlePiece } from 'react-icons/fa';
import LottieIcon from './UI/LottieIcon';

// Componente ServiceItem con tamaños responsivos
const ServiceItem = ({ icon, title }: { icon: React.ReactNode, title: React.ReactNode }) => (
  // El max-w-[200px] se elimina para permitir que la cuadrícula controle el tamaño.
  <div className="flex flex-col items-center text-center mx-auto">
    {/* Contenedor del ícono responsivo */}
    <div className="bg-negro rounded-full w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center mb-4 text-verde">
      {/* Tamaño del ícono ligeramente más pequeño para el contenedor móvil */}
      {icon}
    </div>
    {/* Título responsivo */}
    <h4 className="font-semibold text-base sm:text-lg">{title}</h4>
  </div>
);

// Componente PhonePlaceholder con tamaños responsivos
const PhonePlaceholder = ({ videoSrc, className = '' }: { videoSrc: string, className?: string }) => (
  <div className={`bg-gray-200 relative rounded-3xl border-4 border-negro h-64 w-32 sm:h-80 sm:w-40 flex items-center justify-center ${className}`}>
    <video
      key={videoSrc} // Ayuda a React a reiniciar el video si la fuente cambia
      src={videoSrc}
      autoPlay
      muted
      loop
      controls
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl"
    >
      Tu navegador no soporta el tag de video.
    </video>
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
            <PhonePlaceholder videoSrc="/videos/avancemos.mp4" />
            <PhonePlaceholder videoSrc="/videos/dias.mp4" /> 
          </div>
        </div>

        {/* --- Sección: Anuncios UGC --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-10 gap-x-12">
          {/* Imágenes de los teléfonos */}
          <div className="md:w-1/2 flex justify-center md:justify-end gap-4 sm:gap-6 order-1 md:order-none">
            <PhonePlaceholder videoSrc="/videos/finca.MOV" />
            <PhonePlaceholder videoSrc="/videos/pestañas.mp4" />
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
        <section className="py-20 px-4"> {/* Usamos <section> para semántica y añadimos padding */}
          <div className="max-w-6xl mx-auto">
            
            {/* --- Fila 1: Introducción de Impacto (2 columnas) --- */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              
              {/* Columna Izquierda: El Texto Persuasivo */}
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black mb-6">
                  Máquinas de Conversión, no solo Sitios Web
                </h2>
                <p className="text-lg text-negro leading-relaxed">
                  Nuestra obsesión es el <strong className="text-verde">rendimiento</strong>. No solo creamos diseños atractivos; construimos experiencias digitales ultrarrápidas con <strong className="text-white">Next.js</strong> que Google y tus usuarios amarán.
                </p>
                <p className="mt-4 text-lg text-negro leading-relaxed">
                  Cada proyecto se despliega en <strong className="text-verde">Vercel o Cloudflare pages</strong>, garantizando una disponibilidad global y una velocidad de carga que transforma visitantes en clientes leales.
                </p>
              </div>

              {/* Columna Derecha: El Lottie Principal */}
              <div className="flex items-center justify-center">
                {/* Lottie sugerido: busca 'website development', 'rocket speed', 'web analytics' */}
                <LottieIcon src="/animations/web design.lottie" className="w-full max-w-md h-auto" />
              </div>

            </div>

            {/* --- Fila 2: Grid de Características Clave --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              
              {/* Item 1: Rendimiento */}
              <div className="p-6 bg-negro border-gray-800 rounded-xl">
                <LottieIcon src="/animations/Web Development.lottie" className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Rendimiento Extremo con Next.js</h3>
                <p className="text-gray-400">
                  Sitios que cargan al instante, mejoran tu ranking en buscadores y ofrecen una experiencia de usuario impecable.
                </p>
              </div>

              {/* Item 2: SEO */}
              <div className="p-6 bg-negro border border-gray-800 rounded-xl">
                <LottieIcon src="/animations/Seo Analytics Team.lottie" className="w-24 h-24 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">SEO Técnico Avanzado</h3>
                <p className="text-gray-400">
                  Optimizamos cada detalle, desde la semántica del HTML hasta los Core Web Vitals, para asegurar la máxima visibilidad.
                </p>
              </div>

              {/* Item 3: Escalabilidad */}
              <div className="relative p-6 bg-negro border border-gray-800 rounded-xl">
                <LottieIcon src="/animations/SocialMediaInfluencer.lottie" className="w-24 h-24 mb-4" /> 
                <h3 className="text-xl font-bold text-white mb-2">Despliegue Global en Vercel</h3>
                <p className="text-gray-400">
                  Tu web siempre rápida y disponible, sin importar desde qué parte del mundo te visiten tus clientes.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </section>
  );
}