// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   ShoppingBag,
//   ArrowRight,
// } from "lucide-react";

// const COLLECTION_DATA = [
//   {
//     id: 1,
//     category: "Shoulder bags",
//     title: "CRAFTING YOUR UNIQUE STYLE",
//     image:
//       "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     category: "Trendy bags",
//     title: "STORIES BEHIND ICONIC DESIGNS",
//     image:
//       "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     category: "Brown collections",
//     title: "A GUIDE TO THE BEST BRANDS",
//     image:
//       "https://images.unsplash.com/photo-1591343395582-99bf4d678b4a?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 4,
//     category: "Side bags",
//     title: "STAY ORGANIZED & STYLISH",
//     image:
//       "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 5,
//     category: "Sling bags",
//     title: "ULTIMATE BLEND OF COMFORT",
//     image:
//       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     id: 6,
//     category: "Leather bags",
//     title: "ELEGANCE WITH LEATHER",
//     image:
//       "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?q=80&w=800&auto=format&fit=crop",
//   },
// ];

// export default function Slider2() {
//   const [activeIndex, setActiveIndex] = useState(2);
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200,
//   );

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % COLLECTION_DATA.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex(
//       (prev) => (prev - 1 + COLLECTION_DATA.length) % COLLECTION_DATA.length,
//     );
//   };

//   const getCardStyle = (index) => {
//     const total = COLLECTION_DATA.length;
//     let diff = index - activeIndex;

//     // Correct wrap-around logic
//     if (diff > total / 2) diff -= total;
//     if (diff < -total / 2) diff += total;

//     const absDiff = Math.abs(diff);

//     // Smooth opacity fade
//     const opacity = Math.max(0, 1 - (absDiff - 1) * 1.2);

//     const scale = 1 - absDiff * 0.12;
//     const x = diff * (windowWidth < 768 ? 160 : 300);

//     const y = absDiff * absDiff * 30;
//     const rotateY = diff * -15;
//     const rotateZ = diff * 3;

//     return {
//       x,
//       y,
//       scale,
//       rotateY,
//       rotateZ,
//       opacity: absDiff > 2.2 ? 0 : opacity,
//       zIndex: Math.round(100 - absDiff * 10),
//       pointerEvents: absDiff > 1.2 ? "none" : "auto",
//     };
//   };

//   return (
//     <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center font-sans text-white selection:bg-white selection:text-black">
//       {/* Dynamic Background Gradient */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#050505_100%)] pointer-events-none" />

//       {/* Background Pattern Overlay */}
//       <div
//         className="absolute inset-0 opacity-20 pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
//           backgroundSize: "48px 48px",
//         }}
//       />

//       {/* Hero Section Header */}
//       <div className="relative z-10 text-center mb-4 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center justify-center gap-2 mb-4"
//         >
//           <span className="h-[1px] w-8 bg-white/30" />
//           <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/60">
//             Premium Collection 2024
//           </span>
//           <span className="h-[1px] w-8 bg-white/30" />
//         </motion.div>

//         <div className="overflow-hidden">
//           <motion.h1
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//             className="text-5xl md:text-7xl font-black tracking-tighter leading-none italic mb-2"
//           >
//             THE NEW VIBE
//           </motion.h1>
//         </div>
//       </div>

//       {/* Large Ghost Text */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
//         <motion.h2
//           animate={{
//             x: [0, -20, 0],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="text-[25vw] font-black tracking-tighter opacity-[0.03] leading-none whitespace-nowrap"
//           style={{
//             WebkitTextStroke: "1px rgba(255,255,255,0.5)",
//             color: "transparent",
//           }}
//         >
//           CRAFTSMANSHIP CRAFTSMANSHIP
//         </motion.h2>
//       </div>

//       {/* Showcase Container */}
//       <div className="relative w-full max-w-7xl h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px]">
//         <div className="relative w-full flex items-center justify-center">
//           {COLLECTION_DATA.map((item, index) => {
//             const style = getCardStyle(index);
//             const isActive = index === activeIndex;

//             return (
//               <motion.div
//                 key={item.id}
//                 initial={false}
//                 animate={style}
//                 transition={{
//                   type: "spring",
//                   stiffness: 150,
//                   damping: 20,
//                   mass: 0.8,
//                 }}
//                 className="absolute w-[260px] md:w-[320px] h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer group"
//                 onClick={() => setActiveIndex(index)}
//               >
//                 <div className="relative w-full h-full">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? "scale-100" : "scale-110 grayscale-[0.5]"} group-hover:scale-105 group-hover:grayscale-0`}
//                   />

//                   {!isActive && (
//                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
//                   )}

//                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                     <motion.div
//                       initial={false}
//                       animate={{
//                         opacity: isActive ? 1 : 0.6,
//                         x: isActive ? 0 : -10,
//                       }}
//                     >
//                       <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/70 mb-2">
//                         {item.category}
//                       </p>
//                       <h3 className="text-xl md:text-2xl font-bold leading-[1.1] tracking-tight uppercase max-w-[200px]">
//                         {item.title}
//                       </h3>

//                       {isActive && (
//                         <motion.div
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           className="mt-4 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"
//                         >
//                           Explore <ArrowRight className="w-3 h-3" />
//                         </motion.div>
//                       )}
//                     </motion.div>
//                   </div>
//                 </div>

//                 <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-300 pointer-events-none rounded-2xl" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Navigation & Controls */}
//       <div className="relative z-20 mt-8 flex flex-col items-center gap-8">
//         <div className="flex items-center gap-8">
//           <button
//             onClick={handlePrev}
//             className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-[0.3em] font-bold"
//           >
//             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
//               <ChevronLeft className="w-5 h-5" />
//             </div>
//             Prev
//           </button>

//           {/* Index Display */}
//           <div className="flex flex-col items-center">
//             <div className="text-2xl font-black italic tracking-tighter">
//               0{activeIndex + 1}
//             </div>
//             <div className="h-px w-4 bg-white/20 my-1" />
//             <div className="text-[10px] font-bold text-white/30 tracking-widest">
//               0{COLLECTION_DATA.length}
//             </div>
//           </div>

//           <button
//             onClick={handleNext}
//             className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-[0.3em] font-bold"
//           >
//             Next
//             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
//               <ChevronRight className="w-5 h-5" />
//             </div>
//           </button>
//         </div>
//       </div>

//       {/* Floating CTA */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         className="fixed bottom-10 right-10 bg-white text-black p-4 rounded-full shadow-2xl flex items-center gap-2 z-50 group overflow-hidden"
//       >
//         <ShoppingBag className="w-5 h-5" />
//         <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest">
//           Bag Now
//         </span>
//       </motion.button>
//     </div>
//   );
// }

//////// new
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

// Define the interface for the collection data
interface CollectionItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

const COLLECTION_DATA: CollectionItem[] = [
  {
    id: 1,
    category: "Shoulder bags",
    title: "CRAFTING YOUR UNIQUE STYLE",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Trendy bags",
    title: "STORIES BEHIND ICONIC DESIGNS",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Brown collections",
    title: "A GUIDE TO THE BEST BRANDS",
    image:
      "https://images.unsplash.com/photo-1591343395582-99bf4d678b4a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "Side bags",
    title: "STAY ORGANIZED & STYLISH",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "Sling bags",
    title: "ULTIMATE BLEND OF COMFORT",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "Leather bags",
    title: "ELEGANCE WITH LEATHER",
    image:
      "https://images.unsplash.com/photo-1524498250077-390f9e378fc0?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Slider2() {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % COLLECTION_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + COLLECTION_DATA.length) % COLLECTION_DATA.length,
    );
  };

  const getCardStyle = (index: number) => {
    const total = COLLECTION_DATA.length;
    let diff = index - activeIndex;

    // Correct wrap-around logic
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    // Smooth opacity fade
    const opacity = Math.max(0, 1 - (absDiff - 1) * 1.2);

    const scale = 1 - absDiff * 0.12;
    const x = diff * (windowWidth < 768 ? 160 : 300);

    const y = absDiff * absDiff * 30;
    const rotateY = diff * -15;
    const rotateZ = diff * 3;

    return {
      x,
      y,
      scale,
      rotateY,
      rotateZ,
      opacity: absDiff > 2.2 ? 0 : opacity,
      zIndex: Math.round(100 - absDiff * 10),
      pointerEvents: absDiff > 1.2 ? "none" : ("auto" as const),
    };
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex flex-col items-center justify-center font-sans text-white selection:bg-white selection:text-black">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#050505_100%)] pointer-events-none" />

      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero Section Header */}
      <div className="relative z-10 text-center mb-4 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="h-[1px] w-8 bg-white/30" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/60">
            Premium Collection 2024
          </span>
          <span className="h-[1px] w-8 bg-white/30" />
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none italic mb-2"
          >
            THE NEW VIBE
          </motion.h1>
        </div>
      </div>

      {/* Large Ghost Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center">
        <motion.h2
          animate={{
            x: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-[25vw] font-black tracking-tighter opacity-[0.03] leading-none whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.5)",
            color: "transparent",
          }}
        >
          CRAFTSMANSHIP CRAFTSMANSHIP
        </motion.h2>
      </div>

      {/* Showcase Container */}
      <div className="relative w-full max-w-7xl h-[500px] md:h-[600px] flex items-center justify-center perspective-[2000px]">
        <div className="relative w-full flex items-center justify-center">
          {COLLECTION_DATA.map((item, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={style}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                  mass: 0.8,
                }}
                className="absolute w-[260px] md:w-[320px] h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer group"
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      isActive ? "scale-100" : "scale-110 grayscale-[0.5]"
                    } group-hover:scale-105 group-hover:grayscale-0`}
                  />

                  {!isActive && (
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 text-left translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.6,
                        x: isActive ? 0 : -10,
                      }}
                    >
                      <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white/70 mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold leading-[1.1] tracking-tight uppercase max-w-[200px]">
                        {item.title}
                      </h3>

                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"
                        >
                          Explore <ArrowRight className="w-3 h-3" />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </div>

                <div className="absolute inset-0 border border-white/10 group-hover:border-white/30 transition-colors duration-300 pointer-events-none rounded-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="relative z-20 mt-8 flex flex-col items-center gap-8">
        <div className="flex items-center gap-8">
          <button
            onClick={handlePrev}
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-[0.3em] font-bold"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </div>
            Prev
          </button>

          {/* Index Display */}
          <div className="flex flex-col items-center">
            <div className="text-2xl font-black italic tracking-tighter">
              0{activeIndex + 1}
            </div>
            <div className="h-px w-4 bg-white/20 my-1" />
            <div className="text-[10px] font-bold text-white/30 tracking-widest">
              0{COLLECTION_DATA.length}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors uppercase text-[10px] tracking-[0.3em] font-bold"
          >
            Next
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/40 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      {/* Floating CTA */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-10 right-10 bg-white text-black p-4 rounded-full shadow-2xl flex items-center gap-2 z-50 group overflow-hidden"
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="max-w-0 group-hover:max-w-[100px] overflow-hidden transition-all duration-500 whitespace-nowrap text-xs font-bold uppercase tracking-widest">
          Bag Now
        </span>
      </motion.button>
    </div>
  );
}
