// // E:\kallu_box_web\kallu_box\components\ProductComp\ProductCards.tsx
// "use client";

// import { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface Product {
//   id: number;
//   name: string;
//   image: string;
// }

// const products: Product[] = [
//   {
//     id: 1,
//     name: "Jewelry Boxes",
//     image:
//       "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Note & Coin Boxes",
//     image:
//       "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=300&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Chocolate & Sweet Boxes",
//     image:
//       "https://images.unsplash.com/photo-1599599810962-d0a9b6a9eb5d?w=300&h=300&fit=crop",
//   },
//   {
//     id: 4,
//     name: "MDF Boxes",
//     image:
//       "https://images.unsplash.com/photo-1598655261948-4b1b4c53cecc?w=300&h=300&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Perfume Boxes",
//     image:
//       "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300&h=300&fit=crop",
//   },
//   {
//     id: 6,
//     name: "Trays & Baskets",
//     image:
//       "https://images.unsplash.com/photo-1595521624864-0c83b29e1b4e?w=300&h=300&fit=crop",
//   },
//   {
//     id: 7,
//     name: "Gift Boxes",
//     image:
//       "https://images.unsplash.com/photo-1576183453862-1908e5e1d58a?w=300&h=300&fit=crop",
//   },
//   {
//     id: 8,
//     name: "Gift Boxes",
//     image:
//       "https://images.unsplash.com/photo-1576183453862-1908e5e1d58a?w=300&h=300&fit=crop",
//   },
// ];

// export default function ProductCards() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (scrollContainerRef.current) {
//       const scrollAmount = 320; // Adjusted for card width + gap
//       const newPosition =
//         direction === "left"
//           ? scrollContainerRef.current.scrollLeft - scrollAmount
//           : scrollContainerRef.current.scrollLeft + scrollAmount;

//       scrollContainerRef.current.scrollTo({
//         left: newPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section className="relative w-full bg-[#faf9f6] py-20 overflow-hidden">
//       <div className="templateContainer">
//         {/* Decorative Background Pattern (Subtle Dots) */}
//         <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
//           <div
//             className="w-full h-full"
//             style={{
//               backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
//               backgroundSize: "24px 24px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto">
//           {/* Header Section */}
// <div className="text-center mb-8">
//   <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
//     Jewellery boxes
//   </h2>

//   <div className="flex items-center justify-center gap-4 max-w-lg mx-auto">
//     <div className="h-px bg-yellow-600/30 flex-1" />
//     <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs sm:text-sm">
//       Explore Our Collections
//     </p>
//     <div className="h-px bg-yellow-600/30 flex-1" />
//   </div>
// </div>

//           {/* Carousel Container */}
//           <div className="relative group">
//             {/* Left Navigation Button */}
//             <button
//               onClick={() => scroll("left")}
//               className="absolute -left-2 cursor-pointer lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-800 hover:bg-gray-50 hover:text-yellow-700 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
//               aria-label="Scroll left"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>

//             {/* Scrollable Area */}
//             <div
//               ref={scrollContainerRef}
//               className="flex gap-4 overflow-x-auto scroll-smooth pb-12 pt-4 px-2 no-scrollbar"
//               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//             >
//               {products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="flex-shrink-0 w-64 md:w-72 group/card"
//                 >
//                   <div className="bg-white rounded-t-2xl rounded-b-lg p-3 shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 hover:border-yellow-100/50">
//                     {/* Image Container */}
//                     <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="absolute inset-0 w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
//                       />
//                       {/* Overlay on Hover */}
//                       <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-500" />
//                     </div>

//                     {/* Content */}
//                     <div className="pt-6 pb-2 text-center">
//                       <h3 className="text-lg text-gray-900 group-hover/card:text-yellow-700 transition-colors duration-300">
//                         {product.name}
//                       </h3>
//                       <div className="w-8 h-px bg-yellow-600/20 mx-auto mt-3 group-hover/card:w-16 group-hover/card:bg-yellow-600/40 transition-all duration-500" />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Navigation Button */}
//             <button
//               onClick={() => scroll("right")}
//               className="absolute -right-2 cursor-pointer lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-800 hover:bg-gray-50 hover:text-yellow-700 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
//               aria-label="Scroll right"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Inline styles for hiding scrollbar across browsers */}
//         <style>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//       </div>
//     </section>
//   );
// }

/////

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   animate,
//   useMotionValueEvent,
// } from "framer-motion";
// import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

// // --- Types ---
// interface Product {
//   id: number;
//   name: string;
//   image: string;
// }

// // --- Data ---
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Jewelry Boxes",
//     image:
//       "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Note & Coin Boxes",
//     image:
//       "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Chocolate & Sweet Boxes",
//     image:
//       "https://images.unsplash.com/photo-1599599810962-d0a9b6a9eb5d?w=600&h=600&fit=crop",
//   },
//   {
//     id: 4,
//     name: "MDF Boxes",
//     image:
//       "https://images.unsplash.com/photo-1598655261948-4b1b4c53cecc?w=600&h=600&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Perfume Boxes",
//     image:
//       "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=600&fit=crop",
//   },
//   {
//     id: 6,
//     name: "Trays & Baskets",
//     image:
//       "https://images.unsplash.com/photo-1595521624864-0c83b29e1b4e?w=600&h=600&fit=crop",
//   },
//   {
//     id: 7,
//     name: "Gift Boxes",
//     image:
//       "https://images.unsplash.com/photo-1576183453862-1908e5e1d58a?w=600&h=600&fit=crop",
//   },
//   {
//     id: 8,
//     name: "Luxury Packaging",
//     image:
//       "https://images.unsplash.com/photo-1606103920295-9a091573f160?w=600&h=600&fit=crop",
//   },
// ];

// export default function ProductCards() {
//   // References
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // State
//   const [constraint, setConstraint] = useState(0); // The max negative scroll value
//   const x = useMotionValue(0); // Framer motion value for x position
//   const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
//     "start",
//   );

//   // Calculate constraints on mount and resize
//   useEffect(() => {
//     const calcConstraint = () => {
//       if (carouselRef.current && containerRef.current) {
//         const carouselWidth = carouselRef.current.scrollWidth;
//         const containerWidth = containerRef.current.offsetWidth;
//         // The total scrollable distance is the difference + a little padding
//         const maxScroll = carouselWidth - containerWidth;
//         setConstraint(-maxScroll);
//       }
//     };

//     calcConstraint();
//     window.addEventListener("resize", calcConstraint);
//     return () => window.removeEventListener("resize", calcConstraint);
//   }, []);

//   // Monitor scroll position to update arrow states
//   useMotionValueEvent(x, "change", (latest) => {
//     const threshold = 10;
//     if (latest >= -threshold) setActiveRange("start");
//     else if (latest <= constraint + threshold) setActiveRange("end");
//     else setActiveRange("middle");
//   });

//   // Manual Navigation Handler
//   const handleNav = (direction: "left" | "right") => {
//     const current = x.get();
//     const moveAmount = 320; // Adjusted to match card width + gap for better alignment

//     let target =
//       direction === "left" ? current + moveAmount : current - moveAmount;

//     // Clamp values
//     target = Math.min(0, Math.max(constraint, target));

//     animate(x, target, {
//       type: "tween",
//       ease: "circOut",
//       duration: 0.5,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-neutral-50 flex flex-col justify-center py-20">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
//           Jewellery boxes
//         </h2>

//         <div className="flex items-center justify-center gap-4 max-w-lg mx-auto">
//           <div className="h-px bg-yellow-600/30 flex-1" />
//           <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs sm:text-sm">
//             Explore Our Collections
//           </p>
//           <div className="h-px bg-yellow-600/30 flex-1" />
//         </div>
//       </div>

//       {/* Carousel Container */}
//       <div
//         ref={containerRef}
//         className="w-full overflow-hidden relative group/carousel"
//       >
//         {/* Navigation Arrows (Absolute Overlay) */}
//         <div className="absolute inset-0 z-20 flex items-center justify-between px-4 md:px-8 pointer-events-none h-full">
//           <button
//             onClick={() => handleNav("left")}
//             disabled={activeRange === "start"}
//             className={`pointer-events-auto p-4 rounded-full border border-neutral-100 shadow-xl transition-all duration-300
//               ${
//                 activeRange === "start"
//                   ? "opacity-0 -translate-x-4 cursor-not-allowed"
//                   : "opacity-100 translate-x-0 hover:bg-white hover:border-yellow-200 text-neutral-800 bg-white/90 backdrop-blur-sm"
//               }`}
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={24} />
//           </button>

//           <button
//             onClick={() => handleNav("right")}
//             disabled={activeRange === "end"}
//             className={`pointer-events-auto p-4 rounded-full border border-neutral-100 shadow-xl transition-all duration-300
//               ${
//                 activeRange === "end"
//                   ? "opacity-0 translate-x-4 cursor-not-allowed"
//                   : "opacity-100 translate-x-0 hover:bg-white hover:border-yellow-200 text-neutral-800 bg-white/90 backdrop-blur-sm"
//               }`}
//             aria-label="Next slide"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>

//         {/* Gradient Masks (Fade edges) */}
//         <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

//         <motion.div
//           ref={carouselRef}
//           className="flex gap-6 md:gap-8 px-12 md:px-32 w-max cursor-grab active:cursor-grabbing py-10"
//           style={{ x }}
//           drag="x"
//           dragConstraints={{
//             right: 0,
//             left: constraint,
//           }}
//           dragElastic={0}
//           whileTap={{ cursor: "grabbing" }}
//         >
//           {products.map((product) => (
//             // --- YOUR CARD COMPONENT START ---
//             <div
//               key={product.id}
//               className="flex-shrink-0 w-64 md:w-72 group/card select-none" // Added select-none for better drag experience
//             >
//               <div className="bg-white rounded-t-2xl rounded-b-lg p-3 shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 hover:border-yellow-100/50 relative">
//                 {/* Image Container */}
//                 <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="absolute inset-0 w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700 ease-in-out pointer-events-none" // pointer-events-none prevents image drag ghosting
//                   />
//                   {/* Overlay on Hover */}
//                   <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-500" />

//                   {/* Quick Action Button (Optional addition for flair) */}
//                   <div className="absolute bottom-3 right-3 translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500">
//                     <button className="bg-white text-yellow-700 p-2 rounded-full shadow-lg hover:bg-yellow-50">
//                       <ShoppingBag size={16} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="pt-6 pb-2 text-center">
//                   <h3 className="text-lg font-medium text-gray-900 group-hover/card:text-yellow-700 transition-colors duration-300">
//                     {product.name}
//                   </h3>
//                   <div className="w-8 h-px bg-yellow-600/20 mx-auto mt-3 group-hover/card:w-16 group-hover/card:bg-yellow-600/40 transition-all duration-500" />
//                 </div>
//               </div>
//             </div>
//             // --- YOUR CARD COMPONENT END ---
//           ))}
//         </motion.div>
//       </div>

//       {/* Mobile Indication / Scroll Helper */}
//       <div className="flex md:hidden justify-center mt-4 gap-2">
//         <div className="text-neutral-400 text-sm flex items-center gap-2 animate-pulse">
//           <ChevronLeft size={14} /> <span>Swipe to explore</span>{" "}
//           <ChevronRight size={14} />
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   animate,
//   useMotionValueEvent,
// } from "framer-motion";
// import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

// // --- Types ---
// interface Product {
//   id: number;
//   name: string;
//   image: string;
// }

// // --- Data ---
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Jewelry Boxes",
//     image:
//       "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Note & Coin Boxes",
//     image:
//       "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Chocolate & Sweet Boxes",
//     image:
//       "https://images.unsplash.com/photo-1599599810962-d0a9b6a9eb5d?w=600&h=600&fit=crop",
//   },
//   {
//     id: 4,
//     name: "MDF Boxes",
//     image:
//       "https://images.unsplash.com/photo-1598655261948-4b1b4c53cecc?w=600&h=600&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Perfume Boxes",
//     image:
//       "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=600&fit=crop",
//   },
//   {
//     id: 6,
//     name: "Trays & Baskets",
//     image:
//       "https://images.unsplash.com/photo-1595521624864-0c83b29e1b4e?w=600&h=600&fit=crop",
//   },
//   {
//     id: 7,
//     name: "Gift Boxes",
//     image:
//       "https://images.unsplash.com/photo-1576183453862-1908e5e1d58a?w=600&h=600&fit=crop",
//   },
//   {
//     id: 8,
//     name: "Luxury Packaging",
//     image:
//       "https://images.unsplash.com/photo-1606103920295-9a091573f160?w=600&h=600&fit=crop",
//   },
// ];

// export default function ProductCards() {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [constraint, setConstraint] = useState(0);
//   const x = useMotionValue(0);
//   const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
//     "start",
//   );

//   useEffect(() => {
//     const calcConstraint = () => {
//       if (carouselRef.current && containerRef.current) {
//         const carouselWidth = carouselRef.current.scrollWidth;
//         const containerWidth = containerRef.current.offsetWidth;
//         const maxScroll = carouselWidth - containerWidth;
//         setConstraint(-maxScroll);
//       }
//     };
//     calcConstraint();
//     window.addEventListener("resize", calcConstraint);
//     return () => window.removeEventListener("resize", calcConstraint);
//   }, []);

//   useMotionValueEvent(x, "change", (latest) => {
//     const threshold = 10;
//     if (latest >= -threshold) setActiveRange("start");
//     else if (latest <= constraint + threshold) setActiveRange("end");
//     else setActiveRange("middle");
//   });

//   const handleNav = (direction: "left" | "right") => {
//     const current = x.get();
//     // Compact size: w-60 (240px) + gap-4 (16px) = 256px
//     const moveAmount = 256;

//     let target =
//       direction === "left" ? current + moveAmount : current - moveAmount;
//     target = Math.min(0, Math.max(constraint, target));

//     animate(x, target, {
//       type: "tween",
//       ease: "circOut",
//       duration: 0.5,
//     });
//   };

//   return (
//     <div className=" bg-neutral-50 flex flex-col justify-center py-12">
//       <div className="text-center mb-8 px-4">
//         <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight font-serif">
//           Jewellery Boxes
//         </h2>
//         <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
//           <div className="h-px bg-yellow-600/30 flex-1" />
//           <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-[10px] sm:text-xs">
//             Collections
//           </p>
//           <div className="h-px bg-yellow-600/30 flex-1" />
//         </div>
//       </div>

//       <div
//         ref={containerRef}
//         className="w-full overflow-hidden relative group/carousel px-4"
//       >
//         {/* Navigation Arrows */}
//         <div className="absolute inset-0 z-20 flex items-center justify-between px-2 pointer-events-none">
//           <button
//             onClick={() => handleNav("left")}
//             disabled={activeRange === "start"}
//             className={`pointer-events-auto p-3 rounded-full shadow-lg transition-all duration-300
//               ${activeRange === "start" ? "opacity-0 scale-75" : "opacity-100 bg-white/90 text-neutral-800 hover:bg-white"}`}
//           >
//             <ChevronLeft size={20} />
//           </button>
//           <button
//             onClick={() => handleNav("right")}
//             disabled={activeRange === "end"}
//             className={`pointer-events-auto p-3 rounded-full shadow-lg transition-all duration-300
//               ${activeRange === "end" ? "opacity-0 scale-75" : "opacity-100 bg-white/90 text-neutral-800 hover:bg-white"}`}
//           >
//             <ChevronRight size={20} />
//           </button>
//         </div>

//         {/* Gradient Masks */}
//         <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
//         <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

//         <motion.div
//           ref={carouselRef}
//           className="flex gap-4 px-12 w-max cursor-grab active:cursor-grabbing py-8"
//           style={{ x }}
//           drag="x"
//           dragConstraints={{ right: 0, left: constraint }}
//           dragElastic={0.1}
//         >
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="flex-shrink-0 w-56 md:w-60 group/card select-none"
//             >
//               <div className="bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative">
//                 <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="absolute inset-0 w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300" />

//                   <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
//                     <button className="bg-white/90 backdrop-blur-sm text-yellow-700 p-2 rounded-full shadow-md">
//                       <ShoppingBag size={14} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="pt-4 pb-2 text-center px-2">
//                   <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-1 group-hover/card:text-yellow-700 transition-colors">
//                     {product.name}
//                   </h3>
//                   <div className="w-6 h-0.5 bg-yellow-600/20 mx-auto mt-2 group-hover/card:w-10 transition-all" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       <div className="flex md:hidden justify-center mt-2">
//         <p className="text-neutral-400 text-[10px] uppercase tracking-widest animate-pulse">
//           Swipe to explore
//         </p>
//       </div>
//     </div>
//   );
// }

///////////////// goood ////////

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   animate,
//   useMotionValueEvent,
// } from "framer-motion";
// import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

// // --- Types ---
// interface Product {
//   id: number;
//   name: string;
//   image: string;
// }

// // --- Data ---
// const products: Product[] = [
//   {
//     id: 1,
//     name: "Jewelry Boxes",
//     image:
//       "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
//   },
//   {
//     id: 2,
//     name: "Note & Coin Boxes",
//     image:
//       "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop",
//   },
//   {
//     id: 3,
//     name: "Chocolate & Sweet Boxes",
//     image:
//       "https://images.unsplash.com/photo-1599599810962-d0a9b6a9eb5d?w=600&h=600&fit=crop",
//   },
//   {
//     id: 4,
//     name: "MDF Boxes",
//     image:
//       "https://images.unsplash.com/photo-1598655261948-4b1b4c53cecc?w=600&h=600&fit=crop",
//   },
//   {
//     id: 5,
//     name: "Perfume Boxes",
//     image:
//       "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=600&h=600&fit=crop",
//   },
//   {
//     id: 6,
//     name: "Trays & Baskets",
//     image:
//       "https://images.unsplash.com/photo-1595521624864-0c83b29e1b4e?w=600&h=600&fit=crop",
//   },
//   {
//     id: 7,
//     name: "Gift Boxes",
//     image:
//       "https://images.unsplash.com/photo-1576183453862-1908e5e1d58a?w=600&h=600&fit=crop",
//   },
//   {
//     id: 8,
//     name: "Luxury Packaging",
//     image:
//       "https://images.unsplash.com/photo-1606103920295-9a091573f160?w=600&h=600&fit=crop",
//   },
// ];

// export default function ProductCards() {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [constraint, setConstraint] = useState(0);
//   const x = useMotionValue(0);
//   const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
//     "start",
//   );

//   useEffect(() => {
//     const calcConstraint = () => {
//       if (carouselRef.current && containerRef.current) {
//         const carouselWidth = carouselRef.current.scrollWidth;
//         const containerWidth = containerRef.current.offsetWidth;

//         // Fix: If cards fit in container, constraint is 0 (no scrolling)
//         if (containerWidth >= carouselWidth) {
//           setConstraint(0);
//         } else {
//           // Subtract padding to ensure last item is reachable
//           setConstraint(-(carouselWidth - containerWidth + 32));
//         }
//       }
//     };
//     calcConstraint();
//     window.addEventListener("resize", calcConstraint);
//     return () => window.removeEventListener("resize", calcConstraint);
//   }, []);

//   useMotionValueEvent(x, "change", (latest) => {
//     // If no scroll is needed (constraint 0), force Start state so right arrow is disabled too
//     if (constraint === 0) {
//       setActiveRange("start"); // or handle a 'disabled' state
//       return;
//     }

//     const threshold = 10;
//     if (latest >= -threshold) setActiveRange("start");
//     else if (latest <= constraint + threshold) setActiveRange("end");
//     else setActiveRange("middle");
//   });

//   const handleNav = (direction: "left" | "right") => {
//     const current = x.get();
//     const moveAmount = 256;

//     let target =
//       direction === "left" ? current + moveAmount : current - moveAmount;

//     target = Math.min(0, Math.max(constraint, target));

//     animate(x, target, {
//       type: "tween",
//       ease: "circOut",
//       duration: 0.5,
//     });
//   };

//   return (
//     <div className="bg-neutral-50 flex flex-col justify-center py-12">
//       <div className="max-w-7xl mx-auto w-full">
//         {/* Header Section */}
//         <div className="text-center mb-8 px-4">
//           <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight font-serif">
//             Perfumes Boxes
//           </h2>
//           <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
//             <div className="h-px bg-yellow-600/30 flex-1" />
//             <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-[10px] sm:text-xs">
//               Collections
//             </p>
//             <div className="h-px bg-yellow-600/30 flex-1" />
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div
//           ref={containerRef}
//           // Fix 1: Removed 'flex flex-col items-center'. Just use block/relative.
//           className="w-full overflow-hidden relative group/carousel px-4"
//         >
//           {/* Navigation Arrows */}
//           <div className="absolute inset-0 z-20 flex items-center justify-between px-2 pointer-events-none max-w-7xl mx-auto w-full">
//             <button
//               onClick={() => handleNav("left")}
//               disabled={activeRange === "start"}
//               className={`pointer-events-auto p-3 rounded-full shadow-lg transition-all duration-300
//               ${activeRange === "start" ? "opacity-0 scale-75" : "opacity-100 bg-white/90 text-neutral-800 hover:bg-white"}`}
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <button
//               onClick={() => handleNav("right")}
//               // Disable right button if at end OR if content fits entirely (constraint === 0)
//               disabled={activeRange === "end" || constraint === 0}
//               className={`pointer-events-auto p-3 rounded-full shadow-lg transition-all duration-300
//               ${activeRange === "end" || constraint === 0 ? "opacity-0 scale-75" : "opacity-100 bg-white/90 text-neutral-800 hover:bg-white"}`}
//             >
//               <ChevronRight size={20} />
//             </button>
//           </div>

//           {/* Gradient Masks */}
//           <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
//           <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

//           {/* Draggable Area */}
//           <motion.div
//             ref={carouselRef}
//             // Fix 2: Changed 'w-max' to 'w-fit' and added 'mx-auto'.
//             // 'mx-auto' centers the strip when it fits, but keeps it left-aligned when it overflows.
//             className="flex gap-4 px-4 w-fit mx-auto cursor-grab active:cursor-grabbing py-8"
//             style={{ x }}
//             drag="x"
//             dragConstraints={{ right: 0, left: constraint }}
//             dragElastic={0.1}
//           >
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="flex-shrink-0 w-56 md:w-60 group/card select-none"
//               >
//                 <div className="bg-white rounded-xl p-2 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 relative">
//                   <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="absolute inset-0 w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
//                     />
//                     <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/5 transition-colors duration-300" />

//                     <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
//                       <button className="bg-white/90 backdrop-blur-sm text-yellow-700 p-2 rounded-full shadow-md">
//                         <ShoppingBag size={14} />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="pt-4 pb-2 text-center px-2">
//                     <h3 className="text-sm md:text-base font-medium text-gray-800 line-clamp-1 group-hover/card:text-yellow-700 transition-colors">
//                       {product.name}
//                     </h3>
//                     <div className="w-6 h-0.5 bg-yellow-600/20 mx-auto mt-2 group-hover/card:w-10 transition-all" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="flex md:hidden justify-center mt-2">
//           <p className="text-neutral-400 text-[10px] uppercase tracking-widest animate-pulse">
//             Swipe to explore
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

interface ProductCardsProps {
  categoryData: {
    name: string;
    products: Array<{
      ID: number;
      title: string;
      featured_image: string;
      meta_fields: {
        "item-code"?: string[];
      };
    }>;
  };
}

export default function ProductCards({ categoryData }: ProductCardsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraint, setConstraint] = useState(0);
  const x = useMotionValue(0);
  const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
    "start",
  );

  // Calculate constraints for dragging
  useEffect(() => {
    const calcConstraint = () => {
      if (carouselRef.current && containerRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        setConstraint(
          containerWidth >= scrollWidth
            ? 0
            : -(scrollWidth - containerWidth + 32),
        );
      }
    };
    calcConstraint();
    window.addEventListener("resize", calcConstraint);
    return () => window.removeEventListener("resize", calcConstraint);
  }, [categoryData]);

  useMotionValueEvent(x, "change", (latest) => {
    if (constraint === 0) return setActiveRange("start");
    if (latest >= -10) setActiveRange("start");
    else if (latest <= constraint + 10) setActiveRange("end");
    else setActiveRange("middle");
  });

  const handleNav = (direction: "left" | "right") => {
    const target = direction === "left" ? x.get() + 300 : x.get() - 300;
    animate(x, Math.min(0, Math.max(constraint, target)), {
      type: "tween",
      ease: "circOut",
      duration: 0.5,
    });
  };

  return (
    <div className="bg-neutral-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif text-gray-900 mb-2">
            {categoryData.name}
          </h2>
          <div className="h-0.5 w-20 bg-yellow-600 mx-auto" />
        </div>

        <div ref={containerRef} className="relative overflow-hidden group">
          {/* Navigation */}
          {constraint < 0 && (
            <>
              <button
                onClick={() => handleNav("left")}
                disabled={activeRange === "start"}
                className={`absolute left-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white shadow-xl transition-all ${activeRange === "start" ? "opacity-0" : "opacity-100"}`}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => handleNav("right")}
                disabled={activeRange === "end"}
                className={`absolute right-2 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white shadow-xl transition-all ${activeRange === "end" ? "opacity-0" : "opacity-100"}`}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <motion.div
            ref={carouselRef}
            drag={constraint < 0 ? "x" : false}
            dragConstraints={{ right: 0, left: constraint }}
            style={{ x }}
            className="flex gap-6 w-fit cursor-grab active:cursor-grabbing py-4"
          >
            {categoryData.products.map((product) => (
              <div key={product.ID} className="w-64 flex-shrink-0">
                <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square relative">
                    <img
                      src={product.featured_image}
                      alt={product.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-2 py-1 rounded">
                      {product.meta_fields["item-code"]?.[0]}
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-gray-800">
                      {product.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
