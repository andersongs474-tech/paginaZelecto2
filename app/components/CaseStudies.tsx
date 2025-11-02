// components/CaseStudies.tsx
import React from 'react';
import CaseStudyCard from './CaseStudyCard';

// Los datos no cambian, puedes personalizarlos como necesites
const caseStudiesData = [
  {
    imageSrc: '/images/fashion.jpg', // Reemplaza con tus imágenes
    category: 'Marca de Moda',
    metricName: 'ROAS',
    beforeValue: '2.5x',
    afterValue: '4.8x',
    features: [
      'Lanzamiento de creativos UGC',
      'Optimización de landing page',
      'Estructura de pauta full-funnel',
    ],
  },
  {
    imageSrc: '/images/saas-b2b.jpg', // Reemplaza con tus imágenes
    category: 'SaaS B2B',
    metricName: 'CPA',
    beforeValue: '120€',
    afterValue: '65€',
    features: [
      'Contenido orgánico para ads',
      'Pauta optimizada en LinkedIn',
      'Automatización de lead nurturing',
    ],
  },
  {
    imageSrc: '/images/cosmetics.jpg', // Reemplaza con tus imágenes
    category: 'E-commerce de Cosmética',
    metricName: 'CVR',
    beforeValue: '1.2%',
    afterValue: '2.5%',
    features: [
      'Whitelisting con influencers',
      'Testeo A/B de hooks UGC',
      'Mejora de LCP a <2.5s',
    ],
  },
];

const CaseStudies = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Resultados, no promesas
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Así es como nuestro ecosistema modular ha impactado en las métricas clave de nuestros clientes.
          </p>
        </div>

        {/* Contenedor de las tarjetas */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudiesData.map((study, index) => (
            <CaseStudyCard
              key={index}
              imageSrc={study.imageSrc}
              category={study.category}
              metricName={study.metricName}
              beforeValue={study.beforeValue}
              afterValue={study.afterValue}
              features={study.features}
            />
          ))}
        </div>

        {/* Botón inferior */}
        <div className="mt-12 text-center">
          {/* <button className="px-8 py-3 font-semibold text-green-600 bg-white border-2 border-green-500 rounded-full transition-colors duration-300 hover:bg-green-500 hover:text-white">
            Ver todos los casos
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;