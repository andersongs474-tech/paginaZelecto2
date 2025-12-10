// app/blogs/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import LottieIcon from "../components/UI/LottieIcon";
import BlogList from "./BlogList";

function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  // Ensure directory exists to avoid crashes
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);

  const blogs = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Sin Título",
      description: data.description || "Sin Descripción",
      date: data.date || "Unknown",
      content: content || "", // Pass content for search
    };
  });

  // Sort by date (newest first)
  return blogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export default function BlogPage() {
  const blogs = getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center pt-24 md:pt-32 px-4 sm:px-6 lg:px-8 pb-32">
      {/* ENCABEZADO CON ESCENA DE LOTTIES */}
      <header className="relative w-full max-w-6xl text-center mb-16 py-16">
        {/* Contenedor de Lotties (en el fondo) */}
        {/* Using opacity and positioning to create a nice background effect */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LottieIcon
            src="animations/Seo Analytics Team.lottie"
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-64 h-64 opacity-80"
          />
          <LottieIcon
            src="animations/Digital Marketing.lottie"
            className="absolute top-1/2 right-[5%] w-56 h-56 opacity-30 rotate-12 hidden lg:block"
          />
        </div>

        {/* Contenido de texto (en el frente) */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 pt-48">
            Nuestro Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre las últimas tendencias, tutoriales y estrategias para
            llevar tu negocio al siguiente nivel.
          </p>
        </div>
      </header>

      {/* Cliente: Lista de Blogs con Buscador y Filtros */}
      <BlogList blogs={blogs} />
    </main>
  );
}
