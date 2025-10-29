// app/components/Team.tsx
// Se elimina la importación de 'Link' y 'FaLinkedin'
import { FaUserCircle } from 'react-icons/fa';

// El array de datos ahora solo contiene el nombre y el rol
const teamMembers = [
  {
    name: 'Juan Pérez',
    role: 'CEO & Estratega',
  },
  {
    name: 'Ana García',
    role: 'Directora de Performance',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Líder de Contenido',
  },
];

// El componente reutilizable ahora solo recibe 'name' y 'role'
const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div className="flex flex-col items-center text-center">
    
    {/* Icono de usuario */}
    <FaUserCircle className="w-32 h-32 text-gray-300 mb-4" />
    
    {/* Información del miembro */}
    <h4 className="text-xl font-bold text-gray-900">{name}</h4>
    <p className="text-blue-600 font-semibold">{role}</p>

    {/* El enlace a LinkedIn ha sido eliminado */}
  </div>
);

// Componente principal de la sección del equipo
export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Conoce al equipo
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Los expertos detrás de tu crecimiento.
          </p>
        </div>

        {/* Grid con los miembros del equipo */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.name}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}