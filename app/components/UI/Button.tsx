// src/components/ui/Button.tsx
"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void; // 1. Añadimos la propiedad onClick (opcional)
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick, // 2. Recibimos la función onClick
}: ButtonProps) {
  // Estilo "primary" con el efecto de borde brillante
  if (variant === "primary") {
    return (
      <Link
        href={href}
        onClick={onClick} // 3. Pasamos la función onClick al componente Link
        className={`relative inline-flex items-center justify-center rounded-full transition-transform duration-200 ease-in-out hover:scale-105 group ${className}`}
      >
        {/* Capa de fondo (el borde brillante) */}
        <div
          className="absolute -inset-0.5 animate-aurora"
          style={{
            backgroundImage: `radial-gradient(ellipse at 25% 25%, #b2ef43 0%, transparent 50%),
                              radial-gradient(ellipse at 75% 75%, #F87171 0%, transparent 50%)`,
            filter: "blur(20px)",
            backgroundSize: "300% 300%",
          }}
        ></div>

        {/* Capa de contenido */}
        {/* 4. Hacemos el padding responsivo: más pequeño en móvil, más grande en escritorio */}
        <div className="relative w-full h-full px-6 py-3 md:px-10 md:py-4 font-semibold text-white bg-black rounded-full">
          {children}
        </div>
      </Link>
    );
  }

  // Estilo secundario
  const baseStyles =
    "px-4 py-2 font-semibold rounded-lg transition-transform duration-200 ease-in-out hover:scale-105";
  const variantStyles = {
    secondary:
      "bg-transparent text-verde border border-slate-300 hover:bg-slate-50",
  };

  return (
    <Link
      href={href}
      onClick={onClick} // También lo añadimos aquí para consistencia
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}