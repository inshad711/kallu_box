// "use client";
// import React, { useState } from "react";
// import { ArrowRight } from "lucide-react";

// const ShopCategories = () => {
//   // Mock data for categories
//   // In a real Next.js app, you might fetch this from an API or CMS
//   const categories = [
//     {
//       id: 1,
//       name: "Smartphones",
//       itemCount: "120+ items",
//       image:
//         "https://images.unsplash.com/photo-1598327105666-5b89351aff70?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-blue-50",
//     },
//     {
//       id: 2,
//       name: "Laptops",
//       itemCount: "85+ items",
//       image:
//         "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-indigo-50",
//     },
//     {
//       id: 3,
//       name: "Watches",
//       itemCount: "40+ items",
//       image:
//         "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-orange-50",
//     },
//     {
//       id: 4,
//       name: "Fashion",
//       itemCount: "300+ items",
//       image:
//         "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-rose-50",
//     },
//     {
//       id: 5,
//       name: "Home Decor",
//       itemCount: "150+ items",
//       image:
//         "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-green-50",
//     },
//     {
//       id: 6,
//       name: "Beauty",
//       itemCount: "90+ items",
//       image:
//         "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-pink-50",
//     },
//     {
//       id: 7,
//       name: "Footwear",
//       itemCount: "200+ items",
//       image:
//         "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-slate-50",
//     },
//     {
//       id: 8,
//       name: "Gaming",
//       itemCount: "60+ items",
//       image:
//         "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-purple-50",
//     },
//     {
//       id: 9,
//       name: "Audio",
//       itemCount: "75+ items",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-red-50",
//     },
//     {
//       id: 10,
//       name: "Cameras",
//       itemCount: "45+ items",
//       image:
//         "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-zinc-50",
//     },
//     {
//       id: 11,
//       name: "Accessories",
//       itemCount: "110+ items",
//       image:
//         "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-amber-50",
//     },
//     {
//       id: 12,
//       name: "Gifts",
//       itemCount: "50+ items",
//       image:
//         "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=300&h=300",
//       color: "bg-teal-50",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex justify-between items-end mb-8">
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
//               Shop by Category
//             </h2>
//             <p className="mt-2 text-gray-500 text-sm sm:text-base">
//               Explore our wide range of collections curated just for you.
//             </p>
//           </div>
//           <a
//             href="#"
//             className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 group"
//           >
//             View All Categories
//             <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
//           </a>
//         </div>

//         {/* Categories Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
//           {categories.map((category) => (
//             <CategoryCard key={category.id} category={category} />
//           ))}
//         </div>

//         {/* Mobile View All Link */}
//         <div className="mt-8 sm:hidden text-center">
//           <a
//             href="#"
//             className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200"
//           >
//             View All Categories
//             <ArrowRight className="w-5 h-5 ml-2" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Individual Category Card Component
// const CategoryCard = ({ category }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <a
//       href="#"
//       className="group flex flex-col items-center cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Container */}
//       <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out">
//         {/* Background Overlay for hover effect */}
//         <div
//           className={`absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
//         />

//         {/* Image */}
//         <img
//           src={category.image}
//           alt={category.name}
//           className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
//           loading="lazy"
//         />

//         {/* Optional: Icon overlay or action button could go here */}
//       </div>

//       {/* Text Content */}
//       <div className="text-center">
//         <h3
//           className={`text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200`}
//         >
//           {category.name}
//         </h3>
//         {/* Optional: Item count subtext if needed */}
//         {/* <span className="text-xs text-gray-500 mt-1 block">{category.itemCount}</span> */}
//       </div>
//     </a>
//   );
// };

// // Main App Wrapper
// export default function Category3() {
//   return (
//     <div className="bg-white">
//       <ShopCategories />
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Define the shape of a Category object
interface Category {
  id: number;
  name: string;
  itemCount: string;
  image: string;
  color: string;
}

const ShopCategories = () => {
  // Mock data typed with the Category interface
  const categories: Category[] = [
    {
      id: 1,
      name: "Smartphones",
      itemCount: "120+ items",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff70?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-blue-50",
    },
    {
      id: 2,
      name: "Laptops",
      itemCount: "85+ items",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-indigo-50",
    },
    {
      id: 3,
      name: "Watches",
      itemCount: "40+ items",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-orange-50",
    },
    {
      id: 4,
      name: "Fashion",
      itemCount: "300+ items",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-rose-50",
    },
    {
      id: 5,
      name: "Home Decor",
      itemCount: "150+ items",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-green-50",
    },
    {
      id: 6,
      name: "Beauty",
      itemCount: "90+ items",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-pink-50",
    },
    {
      id: 7,
      name: "Footwear",
      itemCount: "200+ items",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-slate-50",
    },
    {
      id: 8,
      name: "Gaming",
      itemCount: "60+ items",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-purple-50",
    },
    {
      id: 9,
      name: "Audio",
      itemCount: "75+ items",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-red-50",
    },
    {
      id: 10,
      name: "Cameras",
      itemCount: "45+ items",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-zinc-50",
    },
    {
      id: 11,
      name: "Accessories",
      itemCount: "110+ items",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-amber-50",
    },
    {
      id: 12,
      name: "Gifts",
      itemCount: "50+ items",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=300&h=300",
      color: "bg-teal-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Shop by Category
            </h2>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              Explore our wide range of collections curated just for you.
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 group"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 sm:hidden text-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200"
          >
            View All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Interface for component props
interface CategoryCardProps {
  category: Category;
}

// Individual Category Card Component
const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <a
      href="#"
      className="group flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ease-out">
        {/* Background Overlay for hover effect */}
        <div
          className={`absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10`}
        />

        {/* Image */}
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
          loading="lazy"
        />

        {/* Optional: Icon overlay or action button could go here */}
      </div>

      {/* Text Content */}
      <div className="text-center">
        <h3
          className={`text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200`}
        >
          {category.name}
        </h3>
        {/* Optional: Item count subtext if needed */}
        {/* <span className="text-xs text-gray-500 mt-1 block">{category.itemCount}</span> */}
      </div>
    </a>
  );
};

// Main App Wrapper
export default function Category3() {
  return (
    <div className="bg-white">
      <ShopCategories />
    </div>
  );
}
