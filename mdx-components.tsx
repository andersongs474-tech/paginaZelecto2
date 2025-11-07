import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

// Estilos base para el texto que podemos reutilizar
const textStyles = {
  color: '#E5E7EB', // Un gris muy claro, bueno para fondos oscuros
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // --- Encabezados ---
    // El h1 principal del contenido (tu h1 rojo).
    h1: ({ children }) => (
      <h1 style={{ 
        fontSize: '2.5rem', // 40px
        color: '#b2ef43', // Un rojo más suave
        fontWeight: 'bold',
        marginTop: '2rem',
        marginBottom: '1rem',
        borderBottom: '2px solid #374151', // Línea sutil debajo
        paddingBottom: '0.5rem'
      }}>
        {children}
      </h1>
    ),
    // Subtítulos
    h2: ({ children }) => (
      <h2 style={{ 
        fontSize: '2rem', // 32px
        color: '#D1D5DB', // Gris claro
        fontWeight: 'bold',
        marginTop: '2.5rem',
        marginBottom: '1rem'
      }}>
        {children}
      </h2>
    ),

    // --- Texto Básico ---
    // Párrafos
    p: ({ children }) => (
      <p style={{
        ...textStyles,
        lineHeight: '1.7', // Espaciado entre líneas para mejor lectura
        margin: '1rem 0',
      }}>
        {children}
      </p>
    ),
    // Texto en negrita
    strong: ({ children }) => (
      <strong style={{
        color: '#FFFFFF', // Blanco puro para destacar
        fontWeight: 'bold',
      }}>
        {children}
      </strong>
    ),
    // Enlaces
    a: (props) => (
      <a 
        style={{ 
          color: '#60A5FA', // Azul vibrante para enlaces
          textDecoration: 'underline',
          textDecorationColor: '#3B82F6'
        }}
        {...props} 
      />
    ),

    // --- Listas ---
    ul: ({ children }) => (
      <ul style={{
        ...textStyles,
        listStyleType: 'disc',
        paddingLeft: '1.5rem',
        margin: '1rem 0',
      }}>
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li style={{
        lineHeight: '1.7',
        marginBottom: '0.5rem', // Espacio entre elementos de la lista
      }}>
        {children}
      </li>
    ),

    // --- Imágenes ---
    // Tu componente de imagen ya era perfecto, solo lo mantengo.
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ 
          width: '100%', 
          height: 'auto',
          borderRadius: '0.5rem', // Bordes redondeados para un look moderno
          margin: '2rem 0',
        }}
        {...(props as ImageProps)}
        alt={props.alt || ""}
      />
    ),

    // Es importante esparcir los 'components' que vienen por defecto
    // para no perder ninguna funcionalidad.
    ...components,
  };
}