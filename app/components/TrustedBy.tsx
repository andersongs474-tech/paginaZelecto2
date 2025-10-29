// app/components/TrustedBy.tsx
import { FaBuilding, FaRegLightbulb, FaConnectdevelop, FaHubspot } from 'react-icons/fa';

export default function TrustedBy() {
  return (
    <div className="bg-black py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-white text-xl mb-8">Confían en nuestro ecosistema</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
           {/* Aquí puedes usar iconos o imágenes para los logos */}
           <FaBuilding className="text-gray-400 text-5xl" title="Claudia Ramirez Logo" />
           <FaRegLightbulb className="text-gray-400 text-5xl" title="Avancemos Grupo Educativo Logo" />
           <p className="text-green-400 text-3xl font-bold">+ 300k USD Invertido en Ads</p>
           <FaConnectdevelop className="text-gray-400 text-5xl" title="Crecent Logo" />
           <FaHubspot className="text-gray-400 text-5xl" title="Zohara Logo" />
        </div>
      </div>
    </div>
  );
}