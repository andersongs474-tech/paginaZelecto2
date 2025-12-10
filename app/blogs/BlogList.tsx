// app/blogs/BlogList.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import LottieIcon from "../components/UI/LottieIcon";

type Blog = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
};

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"default" | "newest" | "oldest">(
    "default"
  );

  // Filter functionality: Search in Title, Description, AND Content
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort functionality
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (sortOrder === "newest") {
      return dateB - dateA;
    } else if (sortOrder === "oldest") {
      return dateA - dateB;
    } else {
      // Default: 'primer-articulo' (Core Web Vitals) pinned first, then by date descending
      if (a.slug === "primer-articulo") return -1;
      if (b.slug === "primer-articulo") return 1;
      return dateB - dateA;
    }
  });

  return (
    <div className="w-full max-w-6xl">
      {/* Search Bar & Filter Options */}
      <div className="mb-12 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Buscar en el contenido..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-verde focus:ring-1 focus:ring-verde transition-all backdrop-blur-sm"
          />
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        {/* Sort Select */}
        <div className="relative min-w-[200px]">
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value as "default" | "newest" | "oldest")
            }
            className="w-full h-full px-6 py-4 bg-gray-900/80 border border-gray-700 rounded-full text-white focus:outline-none focus:border-verde focus:ring-1 focus:ring-verde transition-all backdrop-blur-sm appearance-none cursor-pointer"
          >
            <option value="default">Por defecto</option>
            <option value="newest">Más recientes</option>
            <option value="oldest">Más antiguos</option>
          </select>
          {/* Custom Arrow Icon for Select */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* List Layout */}
      <div className="flex flex-col gap-6">
        {sortedBlogs.map((blog) => (
          <Link
            href={`/blogs/${blog.slug}`}
            key={blog.slug}
            className="group relative block w-full bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-10 transition-all duration-300 hover:border-verde/50 hover:bg-gray-900/80 overflow-hidden"
          >
            {/* Lottie only for Core Web Vitals */}
            {blog.slug === "primer-articulo" && (
              <LottieIcon
                src="animations/Social Icons Marketing.lottie"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-20 md:opacity-40 -rotate-12 pointer-events-none"
              />
            )}

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold text-verde/90 tracking-wider uppercase px-2 py-1 bg-verde/10 rounded-md border border-verde/20">
                    {blog.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-verde transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-3xl line-clamp-2 md:line-clamp-none">
                  {blog.description}
                </p>
              </div>

              {/* Arrow Icon for visual cue */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 shrink-0 rounded-full border border-gray-700 text-gray-400 group-hover:border-verde group-hover:text-verde transition-all transform group-hover:translate-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
        {sortedBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No encontramos artículos que coincidan con tu búsqueda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
