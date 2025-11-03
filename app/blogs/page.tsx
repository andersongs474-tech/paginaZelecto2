// app/blogs/page.tsx
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// Recomiendo usar un alias de ruta para importaciones más limpias
import LottieIcon from '../components/UI/LottieIcon';

// (La función getPosts se mantiene igual, no es necesario copiarla de nuevo)
function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const blogs = fileNames.map(fileName => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Sin Título',
      description: data.description || 'Sin Descripción',
    };
  });

  return blogs;
}


export default function BlogPage() {
  const blogs = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 md:pt-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        
        {/* ENCABEZADO CON ESCENA DE LOTTIES */}
        <header className="relative text-center mb-24 py-16">
          
          {/* Contenedor de Lotties (en el fondo) */}
          {/* Ocultos en móvil (hidden), visibles desde tablet (md:block) */}
          <div className="absolute inset-0 z-0">
            <LottieIcon 
              src="animations/Seo Analytics Team.lottie" 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-64 h-64"
            />
            <LottieIcon 
              src="animations/Digital Marketing.lottie" 
              className="absolute top-1/2 right-[10%] w-56 h-56 opacity-40 rotate-12 hidden md:block" 
            />
          </div>

          {/* Contenido de texto (en el frente) */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 pt-48">
              Nuestro Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Aquí encontrarás todos nuestros artículos, noticias y tutoriales sobre las últimas tecnologías.
            </p>
          </div>
        </header>

        {/* Cuadrícula de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <Link 
              href={`/blogs/${blog.slug}`} 
              key={blog.slug} 
              className="group block p-8 bg-gray-900/50 border border-gray-800 rounded-xl shadow-md transition-all duration-300 ease-in-out hover:border-verde/50 hover:-translate-y-2"
            >
              <LottieIcon 
              src="animations/Social Icons Marketing.lottie" 
              className="absolute w-48 h-48 opacity-40 -rotate-12 hidden md:block" 
              />
              <h2 className="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-verde">
                {blog.title}
              </h2>
              <p className="text-gray-400 line-clamp-3">
                {blog.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}