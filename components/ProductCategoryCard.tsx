import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// --- Types & Data ---
interface Category {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  count: number;
}

const categories: Category[] = [
  {
    id: "1",
    title: "Essential Basics",
    subtitle: "The Foundation",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=800",
    count: 42,
  },
  {
    id: "2",
    title: "Autumn Outerwear",
    subtitle: "Weather Ready",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca1927801?auto=format&fit=crop&q=80&w=800",
    count: 28,
  },
  {
    id: "3",
    title: "Active Lifestyle",
    subtitle: "Performance Gear",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800",
    count: 64,
  },
  {
    id: "4",
    title: "Evening Elegance",
    subtitle: "Night Out",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800",
    count: 15,
  },
];

// --- Editorial Card Component ---
const EditorialCard = ({ data }: { data: Category }) => {
  return (
    <div className="group cursor-pointer flex flex-col gap-4">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100">
        {/* Main Image */}
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        {/* Hover Overlay (Subtle Darken) */}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

        {/* Floating Action Button (Appears on Hover) */}
        <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-black hover:bg-black hover:text-white transition-colors">
            <ArrowRight size={20} />
          </div>
        </div>

        {/* Item Count Badge (Top Left) */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-gray-900 shadow-sm opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            {data.count} Products
          </span>
        </div>
      </div>

      {/* Text Content (Below Image) */}
      <div className="space-y-1">
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
            {data.title}
          </h3>
          <span className="text-xs font-medium text-gray-400 group-hover:text-indigo-600 transition-colors">
            Shop Now
          </span>
        </div>

        <p className="text-sm text-gray-500">{data.subtitle}</p>

        {/* Decorative Line on Hover */}
        <div className="h-px w-0 bg-indigo-600 transition-all duration-500 ease-out group-hover:w-full mt-2" />
      </div>
    </div>
  );
};

// --- Main Layout ---
export default function ProductCategoryCard() {
  return (
    <div className=" bg-white text-gray-900 ">
      <div className="templateContainer">
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#700000]">
              <Sparkles size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">
                New Collections
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Editor's Picks
            </h1>
          </div>
          <p className="max-w-xs text-gray-500 text-sm leading-relaxed">
            Curated selection of seasonal essentials, designed for the modern
            individual.
          </p>
        </header>

        {/* Grid */}
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {categories.map((category) => (
            <EditorialCard key={category.id} data={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
