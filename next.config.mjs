// next.config.mjs
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Le indicamos a Next.js que reconozca estas extensiones como páginas
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // Opciones adicionales para MDX si las necesitas
})

export default withMDX(nextConfig)
