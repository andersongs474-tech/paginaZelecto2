// app/components/Hero.tsx 

import Button from "./UI/Button";
import Threads from "./UI/Threads";

export default function Hero() {
  return (
    
    <section 
      id="hero" 
      className="relative bg-black text-white pt-32 pb-20 overflow-hidden" 
      style={{ backgroundImage: "url('/hero-background-dots.png')" }}
    >
      <div className="absolute inset-0 z-0">
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
        <div className="pl-10">
          <h2 className="text-5xl 2xl:text-6xl font-extrabold leading-tight mb-4">
            Escala tu negocio con nuestro ecosistema ágil y modular
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Lleva tu negocio a otro nivel con nuestra estrategia adaptable y perfecta para tu negocio: UGC + Ads + Web + Contenido, medido mes a mes.
          </p>
          <Button href="#contact" variant="primary">Agendar Llamada</Button>
        </div>
        
      </div>
    </section>
  );
}