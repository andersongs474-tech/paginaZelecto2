// app/components/Services.tsx
import { FaBullhorn, FaRegListAlt, FaPuzzlePiece } from 'react-icons/fa';
import { SiMeta, SiTiktok, SiGoogleads } from 'react-icons/si';

// He creado un componente interno para cada servicio para mantener el código más limpio.
const ServiceItem = ({ icon, title }: { icon: React.ReactNode, title: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-lime-300 rounded-full w-36 h-36 flex items-center justify-center mb-5 text-black">
      {icon}
    </div>
    <h4 className="font-semibold text-xl text-black">{title}</h4>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-extrabold mb-12 text-black">Nuestros Servicios</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* --- Performance Marketing --- */}
          
          {/* Logos de plataformas */}
          <div className="flex justify-center items-center space-x-10 md:space-x-16 mb-8">
            <SiMeta size={120} className="text-black" />
            <SiGoogleads size={100} className="text-black" />
            <SiTiktok size={100} className="text-black"/>
          </div>

          <h3 className="text-4xl font-bold mb-4 text-black">Performance Marketing</h3>
          <p className="max-w-3xl mx-auto text-gray-800 text-lg mb-16 px-4">
            Diseñamos estrategias publicitarias que convierten datos en crecimiento real. 
            Gestionamos campañas con enfoque en análisis, optimización y rentabilidad, impulsando resultados medibles desde la primera inversión.
          </p>
          
          {/* Servicios específicos con iconos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8">
            <ServiceItem 
              icon={<FaBullhorn size={60} />} 
              title={<>Gestión<br />de campañas</>}
            />
            <ServiceItem 
              icon={<FaRegListAlt size={60} />} // Icono de bloc de notas, similar a "producción".
              title={<>Producción<br />de anuncios</>}
            />
            <ServiceItem 
              icon={<FaPuzzlePiece size={60} />} // Icono de pieza de puzzle para "estrategia".
              title={<>Planeación<br />estratégica</>}
            />
          </div>
        </div>

        {/* Aquí puedes mantener o agregar las otras secciones de servicios si lo necesitas */}
        
      </div>
    </section>
  );
}