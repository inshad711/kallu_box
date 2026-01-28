// "use client";
// import React from "react";

// const Stats3 = () => {
//   const stats = [
//     { label: "Baxsaa's delivered", value: "15", suffix: "M+" },
//     { label: "Solutions Shared", value: "10,000", suffix: "+" },
//     { label: "Clients", value: "215", suffix: "+" },
//     { label: "Cities", value: "100", suffix: "+" },
//   ];

//   return (
//     <section className="w-full py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Main Grid Container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-gray-100">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="group relative flex flex-col items-center justify-center py-16 px-6 transition-all duration-300 ease-in-out cursor-default"
//             >
//               {/* Hover Background - visible only on hover */}
//               <div className="absolute inset-0 bg-[#f9f8f3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

//               {/* Stat Value */}
//               <div className="flex items-baseline text-[#801010] font-semibold">
//                 <span className="text-5xl md:text-6xl tracking-tight">
//                   {stat.value}
//                 </span>
//                 <span className="text-4xl md:text-5xl ml-1">{stat.suffix}</span>
//               </div>

//               {/* Stat Label */}
//               <p className="mt-4 text-[#801010] text-lg md:text-xl font-light text-center">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats3;

// "use client";
// import React from "react";

// const Stats3 = () => {
//   const stats = [
//     { label: "Baxsaa's delivered", value: "15", suffix: "M+" },
//     { label: "Solutions Shared", value: "10,000", suffix: "+" },
//     { label: "Clients", value: "215", suffix: "+" },
//     { label: "Cities", value: "100", suffix: "+" },
//   ];

//   return (
//     <section className="w-full py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-gray-100">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="group relative flex flex-col items-center justify-center py-16 px-6 cursor-default overflow-hidden"
//             >
//               {/* FIXED: Removed -z-10. This sits at the base of the relative parent */}
//               <div className="absolute inset-0 bg-[#f9f8f3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* FIXED: Added 'relative z-10' to the content wrappers to keep them above the hover bg */}
//               <div className="relative z-10 flex items-baseline text-[#801010] font-semibold">
//                 <span className="text-5xl md:text-6xl tracking-tight">
//                   {stat.value}
//                 </span>
//                 <span className="text-4xl md:text-5xl ml-1">{stat.suffix}</span>
//               </div>

//               <p className="relative z-10 mt-4 text-[#801010] text-lg md:text-xl font-light text-center">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats3;

// "use client";

// import React, { useEffect, useRef } from "react";
// import { useInView, useMotionValue, useSpring } from "framer-motion";

// interface Stat {
//   label: string;
//   value: string;
//   suffix: string;
// }

// const StatItem = ({ value, label, suffix }: Stat) => {
//   const ref = useRef<HTMLSpanElement>(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   // Convert "10,000" or "15" into a pure number for the animation logic
//   const numericValue = parseInt(value.replace(/,/g, ""), 10);

//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, {
//     damping: 30,
//     stiffness: 100,
//     restDelta: 0.001,
//   });

//   useEffect(() => {
//     if (isInView) {
//       motionValue.set(numericValue);
//     }
//   }, [isInView, motionValue, numericValue]);

//   useEffect(() => {
//     return springValue.on("change", (latest) => {
//       if (ref.current) {
//         // Formats the number back into a localized string (e.g., adds commas)
//         ref.current.textContent = Intl.NumberFormat().format(
//           Math.floor(latest),
//         );
//       }
//     });
//   }, [springValue]);

//   return (
//     <div className="group relative flex flex-col items-center justify-center py-16 px-6 cursor-default overflow-hidden">
//       {/* Hover Background Overlay */}
//       <div className="absolute inset-0 bg-[#f9f8f3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//       {/* Counter and Suffix */}
//       <div className="relative z-10 flex items-baseline text-[#801010] font-semibold">
//         <span className="text-5xl md:text-6xl tracking-tight" ref={ref}>
//           0
//         </span>
//         <span className="text-4xl md:text-5xl ml-1">{suffix}</span>
//       </div>

//       {/* Label */}
//       <p className="relative z-10 mt-4  text-[#801010] text-lg md:text-xl font-normal text-center">
//         {label}
//       </p>
//     </div>
//   );
// };

// const Stats3: React.FC = () => {
//   const stats: Stat[] = [
//     { label: "Baxsaa's delivered", value: "15", suffix: "M+" },
//     { label: "Solutions Shared", value: "10,000", suffix: "+" },
//     { label: "Clients", value: "215", suffix: "+" },
//     { label: "Cities", value: "100", suffix: "+" },
//   ];

//   return (
//     <section className="w-full">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
//           {stats.map((stat, index) => (
//             <StatItem key={index} {...stat} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats3;

"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Interface for the statistics data
 */
interface Stat {
  label: string;
  value: string;
  suffix: string;
}

/**
 * Individual Stat Component
 * Handles the count-up animation and rendering of a single stat block.
 */
const StatItem = ({ value, label, suffix }: Stat) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract the numeric part for animation (e.g., "10,000" -> 10000)
  const numericValue = parseInt(value.replace(/,/g, ""), 10);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Format number with commas for display
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest),
        );
      }
    });
  }, [springValue]);

  return (
    <div className="group relative flex flex-col items-center justify-center p-4 py-8 md:py-12 cursor-default transition-colors duration-300 hover:bg-neutral-50 rounded-lg">
      {/* Number & Suffix Wrapper */}
      <div className="flex items-baseline text-[#801010] font-semibold leading-none">
        <span
          className="text-4xl sm:text-5xl md:text-6xl tracking-tight"
          ref={ref}
        >
          0
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl ml-1">{suffix}</span>
      </div>

      {/* Label */}
      <p className="mt-3 text-[#801010] text-sm sm:text-base md:text-xl font-normal text-center max-w-[150px] sm:max-w-none leading-tight">
        {label}
      </p>
    </div>
  );
};

/**
 * Main Stats Section
 */
const Stats3: React.FC = () => {
  const stats: Stat[] = [
    { label: "Baxsaa's delivered", value: "15", suffix: "M+" },
    { label: "Solutions Shared", value: "10,000", suffix: "+" },
    { label: "Clients", value: "215", suffix: "+" },
    { label: "Cities", value: "100", suffix: "+" },
  ];

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout Changes:
          - grid-cols-2: Makes it 2 items per row on mobile (compact, like the image).
          - md:grid-cols-4: Expands to 4 items in a row on desktop.
          - gap-y-8: Reduces vertical gap between rows on mobile.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Default export for the single-file requirement
export default function Sta() {
  return <Stats3 />;
}
