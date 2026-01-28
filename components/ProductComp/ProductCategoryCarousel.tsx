// // E:\kallu_box_web\kallu_box\components\ProductComp\ProductCategoryCarousel.tsx

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   animate,
//   useMotionValueEvent,
// } from "framer-motion";
// import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

// interface DisplayProduct {
//   id: number;
//   name: string;
//   image: string;
// }

// interface ProductCategoryCarouselProps {
//   category: {
//     name: string;
//     description: string;
//     slug: string;
//     products: Array<{
//       ID: number;
//       title: string;
//       featured_image: string;
//       meta_fields: {
//         name?: string[];
//         gallery?: string[];
//       };
//     }>;
//   };
// }

// const decodeHtml = (text: string) => {
//   if (typeof window === "undefined") return text; // Fallback for SSR
//   const doc = new DOMParser().parseFromString(text, "text/html");
//   return doc.documentElement.textContent || text;
// };

// export default function ProductCategoryCarousel({
//   category,
// }: ProductCategoryCarouselProps) {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [constraint, setConstraint] = useState(0);
//   const x = useMotionValue(0);
//   const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
//     "start",
//   );

//   const products: DisplayProduct[] = category.products.map((p) => ({
//     id: p.ID,
//     // Wrap the name logic here:
//     name: decodeHtml(p.meta_fields?.name?.[0] || p.title || "Product"),
//     image:
//       p.featured_image ||
//       p.meta_fields?.gallery?.[0] ||
//       "https://placehold.co/600x600?text=No+Image",
//   }));

//   // Show nice placeholder if no products
//   if (products.length === 0) {
//     return (
//       <div className="bg-neutral-50 py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-10">
//             {/* <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight">
//               {category.name}
//             </h2> */}
//             <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight">
//               {decodeHtml(category.name)} {/* Fix this here too! */}
//             </h2>
//             <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
//               <div className="h-px bg-yellow-600/30 flex-1" />
//               <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs">
//                 Collections
//               </p>
//               <div className="h-px bg-yellow-600/30 flex-1" />
//             </div>
//           </div>

//           <div className="py-20 bg-white/60 rounded-2xl border border-dashed border-gray-300 text-center">
//             <h3 className="text-2xl font-medium text-gray-700 mb-3">
//               Coming Soon
//             </h3>
//             <p className="text-gray-500 max-w-md mx-auto">
//               We're preparing beautiful new items for this collection. Check
//               back soon!
//             </p>
//             {category.description && (
//               <p className="mt-6 text-gray-600 italic max-w-2xl mx-auto">
//                 {category.description}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   useEffect(() => {
//     const calcConstraint = () => {
//       if (!carouselRef.current || !containerRef.current) return;
//       const carouselWidth = carouselRef.current.scrollWidth;
//       const containerWidth = containerRef.current.offsetWidth;
//       if (containerWidth >= carouselWidth) {
//         setConstraint(0);
//       } else {
//         setConstraint(-(carouselWidth - containerWidth + 48));
//       }
//     };

//     calcConstraint();
//     window.addEventListener("resize", calcConstraint);
//     return () => window.removeEventListener("resize", calcConstraint);
//   }, [products.length]);

//   useMotionValueEvent(x, "change", (latest) => {
//     if (constraint === 0) {
//       setActiveRange("start");
//       return;
//     }
//     const threshold = 20;
//     if (latest >= -threshold) setActiveRange("start");
//     else if (latest <= constraint + threshold) setActiveRange("end");
//     else setActiveRange("middle");
//   });

//   const handleNav = (direction: "left" | "right") => {
//     const current = x.get();
//     const moveBy = 280;
//     let target = direction === "left" ? current + moveBy : current - moveBy;
//     target = Math.min(0, Math.max(constraint, target));
//     animate(x, target, {
//       type: "tween",
//       duration: 0.6,
//       ease: [0.25, 0.1, 0.25, 1],
//     });
//   };

//   return (
//     <div className="pt-12  ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight">
//             {/* {category.name} */}
//             {decodeHtml(category.name)}
//           </h2>
//           <div className="mt-4 flex items-center justify-center gap-4 max-w-sm mx-auto">
//             <div className="h-px flex-1 bg-yellow-600/30" />
//             <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-yellow-700/80">
//               Collections
//             </span>
//             <div className="h-px flex-1 bg-yellow-600/30" />
//           </div>
//         </div>

//         <div ref={containerRef} className="relative overflow-hidden group">
//           <div className="absolute inset-0 z-20 flex items-center justify-between px-2 md:px-4 pointer-events-none">
//             <button
//               onClick={() => handleNav("left")}
//               disabled={activeRange === "start" || constraint === 0}
//               className={`pointer-events-auto p-3 md:p-4 rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:bg-white
//                 ${activeRange === "start" || constraint === 0 ? "opacity-0 scale-90 pointer-events-none" : "opacity-100"}`}
//             >
//               <ChevronLeft className="w-5 h-5 cursor-pointer md:w-6 md:h-6" />
//             </button>

//             <button
//               onClick={() => handleNav("right")}
//               disabled={activeRange === "end" || constraint === 0}
//               className={`pointer-events-auto p-3 md:p-4 rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:bg-white
//                 ${activeRange === "end" || constraint === 0 ? "opacity-0 scale-90 pointer-events-none" : "opacity-100"}`}
//             >
//               <ChevronRight className="w-5 h-5 cursor-pointer md:w-6 md:h-6" />
//             </button>
//           </div>

//           <motion.div
//             ref={carouselRef}
//             className="flex gap-5 md:gap-6 px-2 py-8 w-fit mx-auto cursor-grab active:cursor-grabbing select-none"
//             style={{ x }}
//             drag="x"
//             dragConstraints={{ left: constraint, right: 0 }}
//             dragElastic={0.2}
//           >
//             {products.map((product) => (
//               <div
//                 key={product.id}
//                 className="flex-shrink-0 w-64 sm:w-72 md:w-80 group/card"
//               >
//                 <div className="bg-white p-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
//                   <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
//                     <button className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-yellow-50 text-yellow-700">
//                       <ShoppingBag size={20} />
//                     </button>
//                   </div>
//                   <div className="p-5 text-center">
//                     <h3 className="text-base md:text-lg font-medium text-gray-800 group-hover/card:text-yellow-700 transition-colors line-clamp-2 min-h-[2.8rem]">
//                       {product.name}
//                     </h3>
//                     <div className="mt-3 h-0.5 w-10 bg-yellow-600/30 mx-auto group-hover/card:w-16 transition-all duration-300" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="md:hidden text-center mt-6">
//           <p className="text-sm text-neutral-500 uppercase tracking-wider animate-pulse">
//             Swipe to explore →
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

/////// new

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   animate,
//   useMotionValueEvent,
//   AnimatePresence,
// } from "framer-motion";
// import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

// interface DisplayProduct {
//   id: number;
//   name: string;
//   image: string;
//   gallery: string[]; // Added gallery field
// }

// interface ProductCategoryCarouselProps {
//   category: {
//     name: string;
//     description: string;
//     slug: string;
//     products: Array<{
//       ID: number;
//       title: string;
//       featured_image: string;
//       meta_fields: {
//         name?: string[];
//         gallery?: string[];
//       };
//     }>;
//   };
// }

// const decodeHtml = (text: string) => {
//   if (typeof window === "undefined") return text;
//   const doc = new DOMParser().parseFromString(text, "text/html");
//   return doc.documentElement.textContent || text;
// };

// const ProductCard = ({ product }: { product: DisplayProduct }) => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const [direction, setDirection] = useState(0); // -1 for left, 1 for right
//   const images = product.gallery.length > 0 ? product.gallery : [product.image];

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//     }),
//   };

//   const paginate = (newDirection: number) => {
//     setDirection(newDirection);
//     setImgIndex(
//       (prev) => (prev + newDirection + images.length) % images.length,
//     );
//   };

//   return (
//     <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 group/card">
//       <div className="bg-white p-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
//         {/* Animated Image Container */}
//         <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.img
//               key={imgIndex}
//               src={images[imgIndex]}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 },
//               }}
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//           </AnimatePresence>

//           {/* Hover Arrows */}
//           {images.length > 1 && (
//             <div className="absolute inset-0 z-10 flex items-center justify-between px-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   paginate(-1);
//                 }}
//                 className="p-1.5 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg active:scale-90 transition-transform"
//               >
//                 <ChevronLeft size={18} />
//               </button>
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   paginate(1);
//                 }}
//                 className="p-1.5 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg active:scale-90 transition-transform"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           )}

//           {/* Progress Indicators (Dots) */}
//           {images.length > 1 && (
//             <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5">
//               {images.map((_, i) => (
//                 <div
//                   key={i}
//                   className={`h-1.5 transition-all duration-300 rounded-full ${i === imgIndex ? "w-4 bg-yellow-600" : "w-1.5 bg-white/70"}`}
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Text and Button Section */}
//         <div className="p-5 text-center">
//           <h3 className="text-base md:text-lg font-medium text-gray-800 group-hover/card:text-yellow-700 transition-colors line-clamp-1">
//             {product.name}
//           </h3>

//           <button className="mt-4 w-full py-2.5 px-4 bg-transparent border-2 border-red-500 text-red-600 font-bold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 uppercase tracking-wider text-sm shadow-sm hover:shadow-md">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ProductCategoryCarousel({
//   category,
// }: ProductCategoryCarouselProps) {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [constraint, setConstraint] = useState(0);
//   const x = useMotionValue(0);
//   const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
//     "start",
//   );

//   const products: DisplayProduct[] = category.products.map((p) => ({
//     id: p.ID,
//     name: decodeHtml(p.meta_fields?.name?.[0] || p.title || "Product"),
//     image: p.featured_image || "https://placehold.co/600x600?text=No+Image",
//     gallery: p.meta_fields?.gallery || [], // Extracting the gallery from meta_fields
//   }));

//   // ... (Keep your existing useEffect, handleNav, and empty check logic here) ...

//   if (products.length === 0) {
//     /* ... same as before ... */ return null;
//   }

//   useEffect(() => {
//     const calcConstraint = () => {
//       if (!carouselRef.current || !containerRef.current) return;
//       const carouselWidth = carouselRef.current.scrollWidth;
//       const containerWidth = containerRef.current.offsetWidth;
//       setConstraint(
//         containerWidth >= carouselWidth
//           ? 0
//           : -(carouselWidth - containerWidth + 48),
//       );
//     };
//     calcConstraint();
//     window.addEventListener("resize", calcConstraint);
//     return () => window.removeEventListener("resize", calcConstraint);
//   }, [products.length]);

//   useMotionValueEvent(x, "change", (latest) => {
//     if (constraint === 0) {
//       setActiveRange("start");
//       return;
//     }
//     if (latest >= -20) setActiveRange("start");
//     else if (latest <= constraint + 20) setActiveRange("end");
//     else setActiveRange("middle");
//   });

//   const handleNav = (direction: "left" | "right") => {
//     const current = x.get();
//     let target = direction === "left" ? current + 300 : current - 300;
//     target = Math.min(0, Math.max(constraint, target));
//     animate(x, target, { type: "tween", duration: 0.5, ease: "circOut" });
//   };

//   return (
//     <div className="pt-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight">
//             {decodeHtml(category.name)}
//           </h2>
//           <div className="mt-4 flex items-center justify-center gap-4 max-w-sm mx-auto">
//             <div className="h-px flex-1 bg-yellow-600/30" />
//             <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-yellow-700/80">
//               Collections
//             </span>
//             <div className="h-px flex-1 bg-yellow-600/30" />
//           </div>
//         </div>

//         {/* Carousel Section */}
//         <div ref={containerRef} className="relative overflow-hidden group">
//           {/* Main Navigation Arrows */}
//           <div className="absolute inset-0 z-20 flex items-center justify-between px-2 pointer-events-none">
//             <button
//               onClick={() => handleNav("left")}
//               className={`pointer-events-auto p-3 rounded-full bg-white shadow-md transition-all ${activeRange === "start" ? "opacity-0" : "opacity-100"}`}
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={() => handleNav("right")}
//               className={`pointer-events-auto p-3 rounded-full bg-white shadow-md transition-all ${activeRange === "end" ? "opacity-0" : "opacity-100"}`}
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           <motion.div
//             ref={carouselRef}
//             className="flex gap-6 px-2 py-8 w-fit mx-auto cursor-grab active:cursor-grabbing select-none"
//             style={{ x }}
//             drag="x"
//             dragConstraints={{ left: constraint, right: 0 }}
//           >
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

//////////new

// // E:\kallu_box_web\kallu_box\components\ProductComp\ProductCategoryCarousel.tsx

// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   animate,
//   useMotionValueEvent,
//   AnimatePresence,
// } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// interface DisplayProduct {
//   id: number;
//   name: string;
//   image: string;
//   gallery: string[];
// }

// interface ProductCategoryCarouselProps {
//   category: {
//     name: string;
//     description: string;
//     slug: string;
//     products: Array<{
//       ID: number;
//       title: string;
//       featured_image: string;
//       meta_fields: {
//         name?: string[];
//         gallery?: string[];
//       };
//     }>;
//   };
// }

// const decodeHtml = (text: string) => {
//   if (typeof window === "undefined") return text;
//   const doc = new DOMParser().parseFromString(text, "text/html");
//   return doc.documentElement.textContent || text;
// };

// // Variants for the sliding animation
// const slideVariants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? 300 : -300,
//     opacity: 0,
//   }),
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction: number) => ({
//     zIndex: 0,
//     x: direction < 0 ? 300 : -300,
//     opacity: 0,
//   }),
// };

// // Optimized ProductCard
// const ProductCard = ({ product }: { product: DisplayProduct }) => {
//   const [[page, direction], setPage] = useState([0, 0]);
//   const images =
//     product.gallery?.length > 0 ? product.gallery : [product.image];
//   const imageIndex = Math.abs(page % images.length);

//   const paginate = (newDirection: number, e: React.MouseEvent) => {
//     e.stopPropagation();
//     e.preventDefault();
//     setPage([page + newDirection, newDirection]);
//   };

//   return (
//     <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 group/card">
//       <div className="bg-white p-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
//         {/* Image Slider Container */}
//         <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4">
//           <AnimatePresence initial={false} custom={direction} mode="popLayout">
//             <motion.div
//               key={page}
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 x: { type: "spring", stiffness: 300, damping: 30 },
//                 opacity: { duration: 0.2 },
//               }}
//               className="absolute inset-0 w-full h-full"
//             >
//               <Image
//                 src={images[imageIndex]}
//                 alt={product.name}
//                 fill
//                 sizes="(max-width: 768px) 256px, 320px"
//                 className="object-cover"
//                 loading="lazy"
//               />
//             </motion.div>
//           </AnimatePresence>

//           {/* Mini-Slider Controls */}
//           {images.length > 1 && (
//             <div className="absolute inset-0 z-10 flex items-center justify-between px-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
//               <button
//                 onClick={(e) => paginate(-1, e)}
//                 className="p-1.5 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg pointer-events-auto"
//               >
//                 <ChevronLeft size={18} />
//               </button>
//               <button
//                 onClick={(e) => paginate(1, e)}
//                 className="p-1.5 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg pointer-events-auto"
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           )}
//         </div>

//         <div className="flex flex-col flex-grow text-center">
//           <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2 pb-3">
//             {product.name}
//           </h3>
//           <div className="mt-auto">
//             <button className="w-full cursor-pointer py-2.5 border-2 border-[#700000] text-[#700000] font-bold rounded-xl hover:bg-[#700000] hover:text-white transition-all duration-300 uppercase text-sm">
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ProductCategoryCarousel({
//   category,
// }: ProductCategoryCarouselProps) {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [constraint, setConstraint] = useState(0);
//   const x = useMotionValue(0);
//   const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
//     "start",
//   );

//   const products: DisplayProduct[] = category.products.map((p) => ({
//     id: p.ID,
//     name: decodeHtml(p.meta_fields?.name?.[0] || p.title || "Product"),
//     image: p.featured_image || "https://placehold.co/600x600?text=No+Image",
//     gallery: p.meta_fields?.gallery || [],
//   }));

//   useEffect(() => {
//     const calcConstraint = () => {
//       if (!carouselRef.current || !containerRef.current) return;
//       const carouselWidth = carouselRef.current.scrollWidth;
//       const containerWidth = containerRef.current.offsetWidth;
//       setConstraint(
//         containerWidth >= carouselWidth
//           ? 0
//           : -(carouselWidth - containerWidth + 48),
//       );
//     };
//     calcConstraint();
//     window.addEventListener("resize", calcConstraint);
//     return () => window.removeEventListener("resize", calcConstraint);
//   }, [products.length]);

//   useMotionValueEvent(x, "change", (latest) => {
//     if (constraint === 0) {
//       setActiveRange("start");
//       return;
//     }
//     if (latest >= -20) setActiveRange("start");
//     else if (latest <= constraint + 20) setActiveRange("end");
//     else setActiveRange("middle");
//   });

//   const handleNav = (direction: "left" | "right") => {
//     const current = x.get();
//     const moveBy = 320;
//     let target = direction === "left" ? current + moveBy : current - moveBy;
//     target = Math.min(0, Math.max(constraint, target));
//     animate(x, target, { type: "spring", stiffness: 200, damping: 30 });
//   };

//   if (products.length === 0) return null; // Placeholder logic can be kept from original

//   return (
//     <div className="py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight">
//             {decodeHtml(category.name)}
//           </h2>
//           <div className="mt-4 flex items-center justify-center gap-4 max-w-sm mx-auto">
//             <div className="h-px flex-1 bg-yellow-600/30" />
//             <span className="text-xs font-bold uppercase tracking-widest text-yellow-700/80">
//               Collections
//             </span>
//             <div className="h-px flex-1 bg-yellow-600/30" />
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div
//           ref={containerRef}
//           className="relative overflow-hidden group/carousel"
//         >
//           {/* Main Left/Right Nav */}
//           <div className="absolute inset-0 z-20 flex items-center justify-between px-2 pointer-events-none">
//             <button
//               onClick={() => handleNav("left")}
//               className={`pointer-events-auto p-4 rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 ${
//                 activeRange === "start"
//                   ? "opacity-0 -translate-x-10"
//                   : "opacity-100 translate-x-0"
//               }`}
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={() => handleNav("right")}
//               className={`pointer-events-auto p-4 rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 ${
//                 activeRange === "end"
//                   ? "opacity-0 translate-x-10"
//                   : "opacity-100 translate-x-0"
//               }`}
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           <motion.div
//             ref={carouselRef}
//             className="flex gap-6 px-2 py-8 w-fit cursor-grab active:cursor-grabbing"
//             style={{ x }}
//             drag="x"
//             dragConstraints={{ left: constraint, right: 0 }}
//             dragElastic={0.1}
//           >
//             {products.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </motion.div>
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
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ProductModal from "./ProductModal";

interface DisplayProduct {
  id: number;
  name: string;
  image: string;
  gallery: string[];
  itemCode: string;
}

interface ProductCategoryCarouselProps {
  category: {
    name: string;
    description: string;
    slug: string;
    products: Array<{
      ID: number;
      title: string;
      featured_image: string;
      meta_fields: {
        name?: string[];
        gallery?: string[];
        "item-code"?: string[];
      };
    }>;
  };
}

const decodeHtml = (text: string) => {
  if (typeof window === "undefined") return text;
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent || text;
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

// Optimized ProductCard
const ProductCard = ({
  product,
  onBuyNow,
}: {
  product: DisplayProduct;
  onBuyNow: (p: DisplayProduct) => void;
}) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images =
    product.gallery?.length > 0 ? product.gallery : [product.image];
  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 group/card">
      <div className="bg-white p-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 mb-4">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[imageIndex]}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <div className="absolute inset-0 z-10 flex items-center justify-between px-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => paginate(-1, e)}
                className="p-1.5 rounded-full cursor-pointer bg-white/90 hover:bg-white text-gray-800 shadow-lg pointer-events-auto"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={(e) => paginate(1, e)}
                className="p-1.5 rounded-full cursor-pointer bg-white/90 hover:bg-white text-gray-800 shadow-lg pointer-events-auto"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-grow text-center">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2 pb-3">
            {product.name}
          </h3>
          <div className="mt-auto">
            <button
              onClick={() => onBuyNow(product)}
              className="w-full cursor-pointer py-2.5 border-2 border-[#700000] text-[#700000] font-bold rounded-xl hover:bg-[#700000] hover:text-white transition-all duration-300 uppercase text-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductCategoryCarousel({
  category,
}: ProductCategoryCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraint, setConstraint] = useState(0);
  const x = useMotionValue(0);
  const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
    "start",
  );

  // State for the modal
  const [selectedProduct, setSelectedProduct] = useState<DisplayProduct | null>(
    null,
  );

  const products: DisplayProduct[] = category.products.map((p) => ({
    id: p.ID,
    name: decodeHtml(p.meta_fields?.name?.[0] || p.title || "Product"),
    image: p.featured_image || "https://placehold.co/600x600?text=No+Image",
    gallery: p.meta_fields?.gallery || [],
    itemCode: p.meta_fields?.["item-code"]?.[0] || "N/A",
  }));

  useEffect(() => {
    const calcConstraint = () => {
      if (!carouselRef.current || !containerRef.current) return;
      const carouselWidth = carouselRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      setConstraint(
        containerWidth >= carouselWidth
          ? 0
          : -(carouselWidth - containerWidth + 48),
      );
    };
    calcConstraint();
    window.addEventListener("resize", calcConstraint);
    return () => window.removeEventListener("resize", calcConstraint);
  }, [products.length]);

  useMotionValueEvent(x, "change", (latest) => {
    if (constraint === 0) {
      setActiveRange("start");
      return;
    }
    if (latest >= -20) setActiveRange("start");
    else if (latest <= constraint + 20) setActiveRange("end");
    else setActiveRange("middle");
  });

  const handleNav = (direction: "left" | "right") => {
    const current = x.get();
    const moveBy = 320;
    let target = direction === "left" ? current + moveBy : current - moveBy;
    target = Math.min(0, Math.max(constraint, target));
    animate(x, target, { type: "spring", stiffness: 200, damping: 30 });
  };

  if (products.length === 0) return null;

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 tracking-tight">
            {decodeHtml(category.name)}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4 max-w-sm mx-auto">
            <div className="h-px flex-1 bg-yellow-600/30" />
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-700/80">
              Collections
            </span>
            <div className="h-px flex-1 bg-yellow-600/30" />
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative overflow-hidden group/carousel"
        >
          <div className="absolute inset-0 z-20 flex items-center justify-between px-2 pointer-events-none">
            <button
              onClick={() => handleNav("left")}
              className={`pointer-events-auto cursor-pointer p-4 rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 ${
                activeRange === "start"
                  ? "opacity-0 -translate-x-10"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleNav("right")}
              className={`pointer-events-auto p-4 cursor-pointer rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-110 ${
                activeRange === "end"
                  ? "opacity-0 translate-x-10"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <motion.div
            ref={carouselRef}
            className="flex gap-6 px-2 py-8 w-fit cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: constraint, right: 0 }}
            dragElastic={0.1}
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onBuyNow={(p) => setSelectedProduct(p)}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal Integration */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
