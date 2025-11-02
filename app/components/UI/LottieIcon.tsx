// app/components/UI/LottieIcon.tsx
'use client'; // Las animaciones Lottie necesitan ejecutarse en el cliente

import React, { useEffect, useState } from 'react';
//import  Lottie  from 'lottie-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieIconProps {
  src: string; // La ruta al archivo de animación en la carpeta `public`
  className?: string;
}

const LottieIcon = ({ src, className }: LottieIconProps) => {
//   const [animationData, setAnimationData] = useState(null);

//   useEffect(() => {
//     // Importamos la animación de forma dinámica
//     import(`../../../public/animations/${src}`)
//       .then((module) => setAnimationData(module.default))
//       .catch(console.error);
//   }, [src]);

//   if (!animationData) {
//     // Puedes mostrar un placeholder mientras carga la animación
//     return <div className={className} />;
//   }

  return (
    <DotLottieReact
      src={src}
      loop
      autoplay
      className={className}
    />
    // <Lottie
    //   animationData={animationData}
    //   loop={true}
    //   autoplay={true}
    //   className={className}
    // />
  );
};

export default LottieIcon;