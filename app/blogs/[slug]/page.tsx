// app/blogs/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';
import LottieIcon from '@/app/components/UI/LottieIcon';
import { notFound } from 'next/navigation'; // Importa notFound para manejar errores 404

// Esta función genera las rutas estáticas para cada post durante la compilación
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');

  // Asegurarnos de que el directorio existe para evitar un error en producción
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(postsDirectory);

  // Filtramos para asegurarnos de que solo procesamos archivos .mdx
  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ''),
    }));
}

// Definimos los tipos para las props de la página para mayor claridad
type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  // Verificamos si el archivo del post existe. Si no, mostramos una página 404.
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  
  // 1. Leemos el contenido del archivo .mdx
  const source = fs.readFileSync(filePath, 'utf8');
  
  // 2. Usamos gray-matter para separar el frontmatter (data) del contenido (content)
  const { content, data } = matter(source);

  // 3. Obtenemos nuestros componentes personalizados desde mdx-components.tsx
  const components = useMDXComponents();
  
  return (
    <main className="flex min-h-screen flex-col items-center pt-32 px-4">
      <div className="w-full max-w-4xl">
        <article>
          {/* 4. Renderizamos el encabezado usando los metadatos del 'frontmatter' */}
          <header className="mb-12 text-center">
            <LottieIcon 
                src="/animations/PandaSleeping.lottie" 
                className="absolute top-1 w-64 h-64 md:top-5"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white pt-20">
              {data.title}
            </h1>
            <p className="text-lg text-gray-400">
              Publicado el: {data.date}
            </p>
          </header>

          {/* 5. Renderizamos el contenido del post usando MDXRemote */}
          {/* Le pasamos el contenido limpio (sin frontmatter) y nuestros componentes personalizados */}
          <div className="prose prose-invert lg:prose-xl mx-auto">
            <MDXRemote source={content} components={components} />
          </div>
        </article>
      </div>
    </main>
  );
}

// Opcional pero recomendado: Evita que Next.js genere rutas para slugs que no existen.
export const dynamicParams = false;