// app/components/TrustedBy.tsx
import { FaBuilding, FaRegLightbulb } from 'react-icons/fa';
import Image from 'next/image';

export default function TrustedBy() {
  return (
    <div className="bg-negro py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/*
          Contenedor principal.
          - En móvil (por defecto): 'flex-col' para apilar los elementos verticalmente.
          - En escritorio ('md:'): 'flex-row' y 'flex-wrap' para crear la disposición horizontal.
          - 'items-center' y 'justify-center' se aseguran de que todo esté alineado.
        */}
        <div className="flex flex-row md:flex-row flex-wrap justify-center items-center gap-x-12 gap-y-8">

          {/* --- Título "Confían en nuestro ecosistema" --- */}
          {/* Móvil: es el segundo elemento (order-2). */}
          {/* Desktop: es el primer elemento (md:order-1) y ocupa todo el ancho (w-full) para estar en su propia línea. */}
          <h3 className="w-full order-2 md:order-1 text-center text-white text-lg sm:text-xl">
            Confían en nuestro ecosistema
          </h3>

          {/* --- Logo 1: Fajas --- */}
          {/* Móvil: parte del grupo de logos (order-3). Desktop: segundo elemento (md:order-2). */}
          <div className="order-3 md:order-2">
            <Image
              src='/fajas.png'
              width={100}
              height={100}
              alt='Logo de Claudia Ramirez Fajas'
            />
          </div>

          

          {/* --- Logo 3: Lightbulb Icon --- */}
          {/* Móvil: (order-3). Desktop: cuarto elemento (md:order-4). */}
          <div className="order-3 md:order-3">
            <Image
              src='/avancemos.png'
              width={100}
              height={100}
              alt='Logo de Claudia Ramirez Fajas'
            />
          </div>

          {/* --- Texto Destacado "+ 300k USD..." --- */}
          {/* Móvil: es el primer elemento (order-1). */}
          {/* Desktop: es el quinto elemento (md:order-5), justo en medio de los logos. */}
          <div className="w-full md:w-auto order-1 md:order-4">
            <p className="text-green-400 text-2xl md:text-3xl font-bold text-center">
              + 300k USD Invertido en Ads
            </p>
          </div>

          {/* --- Logo 4: Crecent --- */}
          {/* Móvil: (order-3). Desktop: sexto elemento (md:order-6). */}
          <div className="order-3 md:order-5">
            <Image
              src='/crecent.jpg'
              width={100}
              height={100}
              alt='Logo de Crecent'
              className='rounded-full'
            />
          </div>

          {/* --- Logo 5: Zohara --- */}
          {/* Móvil: (order-3). Desktop: séptimo elemento (md:order-7). */}
          <div className="order-3 md:order-7">
            <Image
              src='/zohara.jpg'
              width={100}
              height={100}
              alt='Logo de Zohara'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
}