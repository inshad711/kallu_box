// "use client";
// import React, { useState } from "react";
// import { ArrowRight, ShoppingBag, Star, LayoutGrid, Heart } from "lucide-react";

// // --- Mock Data ---
// const categories = [
//   {
//     id: "1",
//     title: "Modern Living",
//     image:
//       "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800",
//     count: 124,
//     featured: true,
//   },
//   {
//     id: "2",
//     title: "Minimalist Bedroom",
//     image:
//       "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
//     count: 85,
//   },
//   {
//     id: "3",
//     title: "Workspace",
//     image:
//       "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
//     count: 42,
//   },
//   {
//     id: "4",
//     title: "Kitchen & Dining",
//     image:
//       "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
//     count: 67,
//   },
//   {
//     id: "5",
//     title: "Outdoor & Patio",
//     image:
//       "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=800",
//     count: 38,
//   },
// ];

// // --- Components ---

// /**
//  * Enhanced Product Category Card
//  * FIX APPLIED: Changed fixed height classes (h-96) to min-height (min-h-96) + h-full.
//  * This allows the card to stretch if a neighbor in the same grid row is taller.
//  */
// const ProductCategoryCard = ({ category, variant = "default" }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   // Use min-h instead of fixed h so it can grow to fill the grid row if needed
//   const heightClass = variant === "tall" ? "min-h-[24rem]" : "min-h-[16rem]";

//   return (
//     <div
//       className={`group relative ${heightClass} h-full w-full overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ease-out`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       role="button"
//       tabIndex={0}
//       aria-label={`View ${category.title} category`}
//     >
//       {/* Background Image with Zoom Effect */}
//       <div className="absolute inset-0 w-full h-full bg-slate-200">
//         <img
//           src={category.image}
//           alt={category.title}
//           className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
//         />
//       </div>

//       {/* Gradient Overlays */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70" />
//       <div className="absolute inset-0 bg-gradient-to-t from-[#5c2e2e]/90 via-[#5c2e2e]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90 mix-blend-multiply" />

//       {/* Top Badge (Item Count) */}
//       <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20">
//         <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
//           {category.count} Items
//         </span>
//       </div>

//       {/* Content Container */}
//       <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
//         <div className="transform transition-transform duration-300 ease-out group-hover:-translate-y-2">
//           {/* Decorative Line */}
//           <div className="w-12 h-1 bg-white/70 mb-4 rounded-full origin-left transition-all duration-300 group-hover:w-20 group-hover:bg-[#ff8f8f]" />

//           <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight drop-shadow-lg mb-1">
//             {category.title}
//           </h3>

//           <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
//             <p className="text-gray-200 text-sm font-medium flex items-center gap-2 pt-2">
//               Explore Collection{" "}
//               <ArrowRight size={16} className="animate-pulse" />
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Hover Ring Border */}
//       <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
//     </div>
//   );
// };

// // --- Main App ---
// export default function Category() {
//   return (
//     <div className="bg-gray-50">
//       {/* Header removed as requested */}

//       <div className="templateContainer">
//         <main className="py-12">
//           {/* Section Header */}
//           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
//             <div className="max-w-xl">
//               <h2 className="text-[#5c2e2e] font-semibold tracking-wide uppercase text-sm mb-3 flex items-center gap-2">
//                 <span className="w-8 h-[2px] bg-[#5c2e2e]"></span>
//                 Curated Collections
//               </h2>
//               <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
//                 Design your dream sanctuary.
//               </h1>
//             </div>
//             <button className="hidden md:flex items-center gap-2 text-gray-600 font-medium hover:text-[#5c2e2e] group">
//               View all categories
//               <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>

//           {/* Categories Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//             {/* Featured Large Card */}
//             {/* Added h-full here to ensure the wrapper also fills the grid cell */}
//             <div className="lg:col-span-2 h-full">
//               <ProductCategoryCard category={categories[0]} variant="tall" />
//             </div>

//             {/* Standard Cards */}
//             {categories.slice(1).map((category) => (
//               <ProductCategoryCard key={category.id} category={category} />
//             ))}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

///// new
"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// --- Types & Interfaces ---
interface Category {
  id: string;
  title: string;
  image: string;
  count: number;
  featured?: boolean;
}

interface ProductCategoryCardProps {
  category: Category;
  variant?: "default" | "tall";
}

// --- Mock Data ---
const categories: Category[] = [
  {
    id: "1",
    title: "Corrugated Boxes",
    image: "https://www.thebaxsaaco.com/corrugated-boxes",
    count: 124,
    featured: true,
  },
  {
    id: "2",
    title: "Rigid Boxes",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    count: 85,
  },
  {
    id: "3",
    title: "Workspace",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    count: 42,
  },
  {
    id: "4",
    title: "Kitchen & Dining",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    count: 67,
  },
  {
    id: "5",
    title: "Outdoor & Patio",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=800",
    count: 38,
  },
];

// --- Components ---

/**
 * Enhanced Product Category Card
 * FIX APPLIED: Changed fixed height classes (h-96) to min-height (min-h-96) + h-full.
 * This allows the card to stretch if a neighbor in the same grid row is taller.
 */
const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({
  category,
  variant = "default",
}) => {
  // We can let TS infer boolean here, or be explicit with <boolean>
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Use min-h instead of fixed h so it can grow to fill the grid row if needed
  const heightClass = variant === "tall" ? "min-h-[24rem]" : "min-h-[16rem]";

  return (
    <div
      className={`group relative ${heightClass} h-full w-full overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 ease-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View ${category.title} category`}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full bg-slate-200">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#5c2e2e]/90 via-[#5c2e2e]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-90 mix-blend-multiply" />

      {/* Top Badge (Item Count) */}
      <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20">
        <span className="bg-white/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full border border-white/30">
          {category.count} Items
        </span>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <div className="transform transition-transform duration-300 ease-out group-hover:-translate-y-2">
          {/* Decorative Line */}
          {/* <div className="w-12 h-1 bg-white/70 mb-4 rounded-full origin-left transition-all duration-300 group-hover:w-20 group-hover:bg-[#ff8f8f]" /> */}

          <h3 className="text-white text-2xl md:text-3xl font-normal tracking-tight drop-shadow-lg mb-1">
            {category.title}
          </h3>

          <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
            <p className="text-gray-200 text-sm font-medium flex items-center gap-2 pt-2">
              Explore Collection{" "}
              <ArrowRight size={16} className="animate-pulse" />
            </p>
          </div>
        </div>
      </div>

      {/* Hover Ring Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

// --- Main App ---
export default function Category() {
  return (
    <div className="">
      {/* Header removed as requested */}

      <div className="templateContainer">
        <main className="py-12">
          {/* Section Header */}
          {/* <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-[#5c2e2e] font-semibold tracking-wide uppercase text-sm mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#5c2e2e]"></span>
                Curated Collections
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                Design your dream sanctuary.
              </h1>
            </div>
            <button className="hidden md:flex items-center gap-2 text-gray-600 font-medium hover:text-[#5c2e2e] group">
              View all categories
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div> */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl  text-gray-900 mb-6 tracking-tight">
              Curated Collections
            </h1>

            <div className="flex items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="h-px bg-yellow-600/30 flex-1" />
              <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs sm:text-sm">
                Design your dream sanctuary.
              </p>
              <div className="h-px bg-yellow-600/30 flex-1" />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Featured Large Card */}
            {/* Added h-full here to ensure the wrapper also fills the grid cell */}
            <div className="lg:col-span-2 h-full">
              <ProductCategoryCard category={categories[0]} variant="tall" />
            </div>

            {/* Standard Cards */}
            {categories.slice(1).map((category) => (
              <ProductCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
