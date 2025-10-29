// app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import Button from "./UI/Button";

export default function Navbar() {
  return (
    <header className="bg-negro bg-opacity-80 text-white px-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/LOGO ZELECTO COLOR-02.png"
          alt="logo de zelecto color fondo negro"
        //   style={{ objectFit: "cover" }}
          width={200}
          height={10}
        />

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="hover:text-verde transition-colors">
            Nuestros Servicios
          </a>
          <a href="#team" className="hover:text-verde transition-colors">
            Nuestro Equipo
          </a>
          <a href="#results" className="hover:text-verde transition-colors">
            Testimonios
          </a>
          <Link href="/blog" className="hover:text-verde transition-colors">
            Blog
          </Link>
        </nav>
        <Button href="#contact" variant="primary">
          Agendar Llamada
        </Button>
      </div>
    </header>
  );
}
