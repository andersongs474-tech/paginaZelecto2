// app/components/EcosystemSteps.tsx
import { FaSearch, FaDraftingCompass, FaRocket, FaSyncAlt } from 'react-icons/fa';
import ShinyContainer from './UI/ShinyContainer';

// Subcomponente para cada tarjeta de paso
const StepCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <ShinyContainer 
    speed={3}
    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full"
    >
    <div className="flex items-center mb-4">
      <div className="bg-gray-900 text-verde rounded-full p-4 mr-4 text-2xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
    </div>
    <p className="text-gray-600">
      {description}
    </p>
  </ShinyContainer>
);

export default function EcosystemSteps() {
  return (
    <section id="ecosystem" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
          Un ecosistema ágil y modular de 4 pasos para un crecimiento predecible
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Lleva tu negocio a otro nivel con nuestra estrategia adaptable y perfecta para tu negocio
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          <StepCard
            icon={<FaSearch />}
            title="Diagnostico"
            description="Realizamos una investigación a profundidad de tu marca y del mercado."
          />
          <StepCard
            icon={<FaDraftingCompass />}
            title="Estrategia personalizada"
            description="Definimos qué módulos (UGC, Pauta, etc.) se activarán cada mes y qué KPIs esperamos mejorar."
          />
          <StepCard
            icon={<FaRocket />}
            title="Activación"
            description="Activamos los módulos y monitoreamos las métricas clave en tiempo real desde el primer día."
          />
          <StepCard
            icon={<FaSyncAlt />}
            title="Diagnostico"
            description="Analizamos los resultados y tomamos decisiones."
          />
        </div>
      </div>
    </section>
  );
}

