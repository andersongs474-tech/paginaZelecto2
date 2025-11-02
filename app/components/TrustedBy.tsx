// app/components/TrustedBy.tsx
import { FaBuilding, FaRegLightbulb, FaConnectdevelop, FaHubspot } from 'react-icons/fa';
import Image from 'next/image';

export default function TrustedBy() {
  return (
    <div className="bg-negro py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-white text-xl mb-8">Confían en nuestro ecosistema</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
           <Image 
            src='/fajas.png'
            width={100}
            height={100}
            alt='logo claudia ramirez fajas'
           />
           <FaBuilding className="text-gray-400 text-5xl" title="Claudia Ramirez Logo" />
           <FaRegLightbulb className="text-gray-400 text-5xl" title="Avancemos Grupo Educativo Logo" />
           <p className="text-green-400 text-3xl font-bold">+ 300k USD Invertido en Ads</p>
           
           <Image 
            src='/crecent.jpg'
            width={100}
            height={100}
            alt='logo claudia ramirez fajas'
            className='rounded-full'
           />
           <Image 
            src='/zohara.jpg'
            width={100}
            height={100}
            alt='logo claudia ramirez fajas'
            className='rounded-full'
           />
        </div>
      </div>
    </div>
  );
}