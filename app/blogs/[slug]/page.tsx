// app/blogs/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import LottieIcon from '@/app/components/UI/LottieIcon';

// Esta función genera las rutas estáticas para cada post
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

// Props para la página
type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // Leer el archivo mdx
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  
  // Extraer frontmatter y contenido
  const { content, data } = matter(source);

  return (
    <main className="flex min-h-screen flex-col items-center pt-32 px-4">
      <div className="w-full max-w-4xl">
        <article>
          {/* Encabezado del artículo */}
          <header className="mb-12 text-center">
            <LottieIcon 
              src="/animations/PandaSleeping.lottie" 
              className="absolute top-5 w-64 h-64"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white pt-20">
              {data.title}
            </h1>
            <p className="text-lg text-gray-400">
              Publicado el: {data.date}
            </p>
          </header>

          {/* Contenido del MDX con estilos de 'prose' */}
          <div className="prose prose-invert lg:prose-xl mx-auto">
            <MDXRemote source={content} />
          </div>
        </article>
      </div>
    </main>
  );
}