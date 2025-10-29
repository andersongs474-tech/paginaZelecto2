// app/components/Team.tsx
import { FaLinkedin } from 'react-icons/fa';

const TeamMember = ({ name, role, imageSrc }: { name: string, role: string, imageSrc: string }) => (
  <div className="text-center">
    <img src={imageSrc} alt={`Foto de ${name}`} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h4 className="font-bold text-lg">{name}</h4>
    <p className="text-gray-600">{role}</p>
    <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl mt-2 inline-block">
      <FaLinkedin />
    </a>
  </div>
);

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold">Conoce al equipo</h2>
        <p className="text-gray-700 mt-4">Los expertos detrás de tu crecimiento.</p>
        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <TeamMember name="Juan Pérez" role="CEO & Estratega" imageSrc="/team-member-juan.jpg" />
          <TeamMember name="Ana García" role="Directora de Performance" imageSrc="/team-member-ana.jpg" />
          <TeamMember name="Carlos Ruiz" role="Líder de Contenido" imageSrc="/team-member-carlos.jpg" />
        </div>
      </div>
    </section>
  );
}