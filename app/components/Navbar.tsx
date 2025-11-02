// app/components/Navbar.tsx
"use client"; // Necesario para usar hooks como useState

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./UI/Button";

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-negro bg-opacity-80 text-white px-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/">
            <Image
              src="/LOGO ZELECTO COLOR-02.png"
              alt="logo de zelecto color fondo negro"
              width={200}
              height={10}
              priority // Buena práctica para imágenes LCP (Largest Contentful Paint)
            />
        </Link>


        {/* Navegación para Escritorio */}
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

        {/* Botón para Escritorio */}
        <div className="hidden md:block">
            <Button href="#contact" variant="primary">
                Agendar Llamada
            </Button>
        </div>


        {/* Botón de Menú para Móvil (Hamburguesa) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              // Icono de "Cerrar" (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono de "Hamburguesa"
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú Desplegable para Móvil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-negro bg-opacity-95 backdrop-blur-sm">
          <nav className="flex flex-col items-center space-y-4 py-8">
            <a href="#services" className="hover:text-verde transition-colors" onClick={() => setIsMenuOpen(false)}>
              Nuestros Servicios
            </a>
            <a href="#team" className="hover:text-verde transition-colors" onClick={() => setIsMenuOpen(false)}>
              Nuestro Equipo
            </a>
            <a href="#results" className="hover:text-verde transition-colors" onClick={() => setIsMenuOpen(false)}>
              Testimonios
            </a>
            <Link href="/blog" className="hover:text-verde transition-colors" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Button href="#contact" variant="primary" onClick={() => setIsMenuOpen(false)}>
              Agendar Llamada
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}