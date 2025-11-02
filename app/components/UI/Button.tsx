"use client";

// src/components/ui/Button.tsx
import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  // Nuevo estilo "primary" para el efecto de borde brillante animado
  if (variant === "primary") {
    return (
      <Link
        href={href}
        // 1. Contenedor principal: relativo para posicionar las capas internas.
        //    group se usa para controlar efectos hover en los hijos.
        className={`relative inline-flex items-center justify-center rounded-full transition-transform duration-200 ease-in-out hover:scale-105 group ${className}`}
      >
        {/* 2. Capa de fondo (el borde brillante):
            - `absolute -inset-0.5`: Se posiciona detrás y es ligeramente más grande.
            - `rounded-full`: Coincide con la forma del botón.
            - `bg-[conic-gradient(...)]`: El gradiente cónico que crea los colores del borde.
            - `animate-border-spin`: Nuestra animación de rotación personalizada.
            - `blur-sm opacity-75 group-hover:opacity-100`: Crea el efecto de "brillo" (glow) que se intensifica al pasar el cursor.
            - rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#b2ef43_0%,#111211_50%,#F87171_100%)] opacity-75 blur-sm group-hover:opacity-100 transition duration-300
        */}
        <div
          className="absolute -inset-0.5 animate-aurora"
          style={{
            backgroundImage: `radial-gradient(ellipse at 25% 25%, #b2ef43 0%, transparent 50%),
                              radial-gradient(ellipse at 75% 75%, #F87171 0%, transparent 50%)`,
            filter: "blur(20px)", // Aumentamos el desenfoque para un brillo más difuso
            backgroundSize: "300% 300%", // Hacemos el fondo más grande para que el movimiento sea más notorio
          }}
        ></div>

        {/* 3. Capa de contenido:
            - `relative`: Para asegurarse de que se apila encima del fondo.
            - `bg-black`: El color de fondo oscuro del botón.
            - `px-5 py-2.5`: El espaciado interno del botón.
        */}
        <div className="relative w-full h-full px-10 py-4 font-semibold text-white bg-black rounded-full">
          {children}
        </div>
      </Link>
    );
  }

  // Mantenemos el estilo secundario como estaba
  const baseStyles =
    "px-4 py-2 font-semibold rounded-lg transition-transform duration-200 ease-in-out hover:scale-105";
  const variantStyles = {
    secondary:
      "bg-transparent text-verde border border-slate-300 hover:bg-slate-50",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
