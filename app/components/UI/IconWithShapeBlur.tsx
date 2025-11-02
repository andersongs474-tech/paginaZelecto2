// src/components/ui/IconWithShapeBlur.tsx
import React from 'react';
import ShapeBlur from './ShapeBlur'; // Asegúrate de que la ruta sea correcta

interface IconWithShapeBlurProps {
  children: React.ReactNode; // Para que puedas pasar cualquier ícono o contenido
  className?: string;
  // Puedes exponer las props de ShapeBlur si quieres personalizarlas
  shapeSize?: number;
  roundness?: number;
  borderSize?: number;
  circleSize?: number;
  circleEdge?: number;
}

const IconWithShapeBlur = ({
  children,
  className = '',
  ...shapeBlurProps // Capturamos el resto de las props para pasarlas a ShapeBlur
}: IconWithShapeBlurProps) => {
  return (
    // 1. Contenedor principal: 'relative' es crucial para posicionar el canvas
    //    'isolate' previene que el mix-blend-mode afecte a elementos fuera del contenedor.
    <div className={`relative isolate ${className}`}>
      
      {/* 2. El contenido (ícono): Esta es la capa base. */}
      <div className="relative z-10">
        {children}
      </div>

      {/* 3. El efecto ShapeBlur: Se superpone al contenido.
          - 'absolute inset-0' hace que cubra todo el contenedor.
          - 'z-20' lo coloca encima del contenido.
          - 'mix-blend-color-dodge' es la magia. El blanco del shader "quemará" o
            aclarará de forma brillante los colores del ícono que están debajo.
          - 'pointer-events-none' permite que el ratón interactúe con lo que haya debajo.
      */}
      <div className="absolute inset-0 z-20 mix-blend-color-dodge pointer-events-none">
        <ShapeBlur {...shapeBlurProps} />
      </div>

    </div>
  );
};

export default IconWithShapeBlur;