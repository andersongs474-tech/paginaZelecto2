// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'

// Esta función permite personalizar los componentes que renderiza MDX.
// Por ahora lo dejaremos vacío, pero aquí podrías, por ejemplo,
// estilizar todos los h1 o reemplazar las imágenes por el componente <Image> de Next.js
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}