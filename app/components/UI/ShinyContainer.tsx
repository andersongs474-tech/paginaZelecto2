// src/components/ui/ShinyContainer.tsx
import React from 'react';

// Definimos las props para el nuevo componente
interface ShinyContainerProps {
  children: React.ReactNode; // Aceptamos 'children' en lugar de 'text'
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyContainer = ({
  children,
  disabled = false,
  speed = 5,
  className = ''
}: ShinyContainerProps) => {
  const animationDuration = `${speed}s`;

  return (
    // 1. Contenedor principal: debe ser 'relative' para posicionar el efecto de brillo por debajo.
    //    'overflow-hidden' es crucial para que el gradiente no se salga de los bordes.
    <div className={`relative overflow-hidden isolate${className}`}>
      
      {/* 2. La capa del efecto de brillo:
          - Es un 'div' absoluto que se estira para llenar todo el contenedor.
          - Se coloca detrás del contenido (`-z-10` o simplemente dejando que el contenido tenga un z-index mayor).
          - Solo se renderiza si no está deshabilitado.
      */}
      {!disabled && (
        <div
          className="absolute top-0 left-0 w-full h-full z-10 mix-blend-hard-light pointer-events-none animate-shine"
          style={{
            backgroundImage:
              'linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(199, 199, 199, 0.8) 50%, rgba(255, 255, 255, 0) 70%)',
            backgroundSize: '200% 100%',
            animationDuration: animationDuration
            // ¡Hemos quitado 'WebkitBackgroundClip' y 'bg-clip-text'!
          }}
        />
      )}

      {/* 3. Contenido del usuario:
          - Se renderiza en una capa por encima del efecto de brillo.
          - La clase 'relative' ayuda a asegurar que tenga su propio contexto de apilamiento.
      */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default ShinyContainer;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };
