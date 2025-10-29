// components/CaseStudyCard.tsx
import React from 'react';
import Image from 'next/image';

interface CaseStudyCardProps {
  imageSrc: string;
  category: string;
  metricName: string;
  beforeValue: string;
  afterValue: string;
  features: string[];
}

// Un pequeño componente para el icono de check, estilizado con Tailwind
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 flex-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  imageSrc,
  category,
  metricName,
  beforeValue,
  afterValue,
  features,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Imagen de la tarjeta */}
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={`Caso de éxito de ${category}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900">{category}</h3>

        {/* Métricas Antes y Después */}
        <div className="my-4 flex justify-between items-center gap-2">
          <div className="text-left">
            <p className="text-sm text-gray-500">Antes</p>
            <p className="text-lg font-semibold text-gray-700">{`${metricName} de ${beforeValue}`}</p>
          </div>
          <span className="text-2xl font-light text-blue-500">→</span>
          <div className="text-left">
            <p className="text-sm text-gray-500">Después</p>
            <p className="text-lg font-bold text-blue-500">{`${metricName} del ${afterValue}`}</p>
          </div>
        </div>

        {/* Lista de características */}
        <ul className="space-y-3 mt-2 border-t border-gray-200 pt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckIcon />
              <span className="ml-3 text-base text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CaseStudyCard;