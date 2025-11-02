// app/components/Services.tsx

// 1. Remueve las importaciones de react-icons que ya no necesitas
// import { FaBullhorn, FaRegListAlt, FaPuzzlePiece } from 'react-icons/fa'; 
import { SiMeta, SiTiktok, SiGoogleads } from 'react-icons/si';
import IconWithShapeBlur from './UI/IconWithShapeBlur';
import LottieIcon from './UI/LottieIcon'; // 2. Importa tu nuevo componente LottieIcon

const ServiceItem = ({ icon, title }: { icon: React.ReactNode, title: React.ReactNode }) => (
  <div className="flex flex-col items-center text-center">
    <div className="rounded-full w-36 h-36 flex items-center justify-center mb-5 text-black">
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
          
          <div className="flex justify-center items-center space-x-10 md:space-x-16 mb-8">
            {/* ... tus logos con IconWithShapeBlur se mantienen igual ... */}
            <IconWithShapeBlur
              className="w-[120px] h-[120px] bg-gray-900 rounded-full flex items-center justify-center"
              shapeSize={1.5} roundness={0.5} borderSize={0.1} circleSize={0.4} circleEdge={0.6}
            >
              <SiMeta size={80} className="text-white" />
            </IconWithShapeBlur>
            <IconWithShapeBlur
              className="w-[120px] h-[120px] bg-gray-900 rounded-full flex items-center justify-center"
              shapeSize={1.5} roundness={0.5} borderSize={0.1} circleSize={0.4} circleEdge={0.6}
            >
              <SiGoogleads size={80} className="text-white" />
            </IconWithShapeBlur>
            <IconWithShapeBlur
              className="w-[120px] h-[120px] bg-gray-900 rounded-full flex items-center justify-center"
              shapeSize={1.5} roundness={0.5} borderSize={0.1} circleSize={0.4} circleEdge={0.6}
            >
              <SiTiktok size={80} className="text-white"/>
            </IconWithShapeBlur>
          </div>

          <h3 className="text-4xl font-bold mb-4 text-black">Performance Marketing</h3>
          <p className="max-w-3xl mx-auto text-gray-800 text-lg mb-16 px-4">
            Diseñamos estrategias publicitarias que convierten datos en crecimiento real. 
            Gestionamos campañas con enfoque en análisis, optimización y rentabilidad, impulsando resultados medibles desde la primera inversión.
          </p>
          
          {/* 3. Reemplaza los íconos estáticos con tus LottieIcons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8">
            <ServiceItem 
              icon={<LottieIcon src="animations/Megaphone.lottie" className="w-24 h-24" />} 
              title={<>Gestión<br />de campañas</>}
            />
            <ServiceItem 
              icon={<LottieIcon src="animations/SocialMediaInfluencer.lottie" className="w-24 h-24" />}
              title={<>Producción<br />de anuncios</>}
            />
            <ServiceItem 
              icon={<LottieIcon src="animations/Calendar.lottie" className="w-40 h-40" />}
              title={<>Planeación<br />estratégica</>}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}