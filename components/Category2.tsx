// "use client";
// import React from "react";
// import { ArrowRight, Check } from "lucide-react";

// export default function Category2() {
//   return (
//     <section
//       id="about"
//       className="w-full bg-white py-16 md:py-24 overflow-hidden text-stone-900"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* --- Main Section Header --- */}
//         <div className="mb-16 md:mb-24 flex flex-col gap-6 items-center text-center">
//           <SectionTag text="About Velvera" />
//           <h2 className="text-3xl lg:text-5xl font-medium tracking-tight max-w-xl">
//             Hair salon where style and care come together
//           </h2>
//         </div>

//         {/* --- Content Grid 1: Image Left, Text Right --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
//           {/* Image Wrapper */}
//           <div className="relative w-full aspect-[4/3] lg:aspect-[1.1] rounded-2xl overflow-hidden bg-stone-100">
//             <img
//               src="https://framerusercontent.com/images/0KkbgGAjJJTkCMgIXPzNZhuzGx8.jpg"
//               alt="Velvera Salon Interior"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
//             />
//           </div>

//           {/* Text Content */}
//           <div className="flex flex-col items-start gap-6">
//             <SectionTag text="Introduction" />

//             <h3 className="text-3xl md:text-4xl font-medium leading-tight">
//               Welcome to <span className="text-stone-600">Velvera</span>, your
//               destination for hair care
//             </h3>

//             <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
//               We combine expert techniques with premium products to give your
//               hair the care it deserves. From styling to treatments, we ensure
//               every visit leaves you feeling confident & careful.
//             </p>

//             <a
//               href="#contact"
//               className="group mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-8 py-3 rounded-xl font-medium transition-all hover:bg-[#e65f00] hover:shadow-lg active:scale-95"
//             >
//               <span>Get Expert Care</span>
//               <div className="relative w-5 h-5 overflow-hidden">
//                 <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
//                 <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
//               </div>
//             </a>
//           </div>
//         </div>

//         {/* --- Content Grid 2: Text Left, Image Right --- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//           {/* Text Content (Order 2 on mobile, Order 1 on Desktop) */}
//           <div className="flex flex-col items-start gap-8 order-2 lg:order-1">
//             <SectionTag text="Why choose us" />

//             <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-2">
//               Why <span className="text-stone-600">Velvera</span> is the right
//               choice for your hair
//             </h3>

//             <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
//               We combine expert techniques with premium products to give your
//               hair the care it deserves. From styling to treatments, we ensure
//               every visit leaves you feeling confident & careful.
//             </p>

//             <a
//               href="#contact"
//               className="group mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-8 py-3 rounded-xl font-medium transition-all hover:bg-[#e65f00] hover:shadow-lg active:scale-95"
//             >
//               <span>Get Expert Care</span>
//               <div className="relative w-5 h-5 overflow-hidden">
//                 <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
//                 <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
//               </div>
//             </a>
//           </div>

//           {/* Image Wrapper (Order 1 on mobile, Order 2 on Desktop) */}
//           <div className="order-1 lg:order-2 relative w-full aspect-[4/3] lg:aspect-[1.1] rounded-2xl overflow-hidden bg-stone-100">
//             <img
//               src="https://framerusercontent.com/images/pl8KtZDJfmFPHF6wUBHGoIuHCaQ.jpg"
//               alt="Hair styling session"
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* --- Sub-Components for Cleanliness --- */

// function SectionTag({ text }: { text: string }) {
//   return (
//     <div className="flex items-center gap-3">
//       <div className="w-8 h-[1px] bg-black"></div>
//       <span className="text-sm font-semibold uppercase tracking-wide text-[#700000]">
//         {text}
//       </span>
//     </div>
//   );
// }

// function FeatureItem({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors duration-300">
//       <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mt-1">
//         <Check className="w-5 h-5" strokeWidth={3} />
//       </div>
//       <div className="flex flex-col">
//         <span className="text-lg font-semibold text-stone-900">{title}</span>
//         <span className="text-stone-500">{description}</span>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";

// --- Easing Curve (The "Luxury" Feel) ---
const transitionCurve = [0.76, 0, 0.24, 1] as const;

export default function Category2() {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 md:py-24 overflow-hidden text-stone-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Main Section Header --- */}
        <div className="mb-16 md:mb-24 flex flex-col gap-6 items-center text-center">
          <SectionTag text="About Kallu Box" />
          <h2 className="text-3xl lg:text-5xl font-medium tracking-tight max-w-xl">
            Packaging solutions where quality and customization come together.
          </h2>
        </div>

        {/* --- Content Grid 1: Image Left, Text Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          {/* Animated Image Wrapper */}
          <RevelImage
            src="https://framerusercontent.com/images/0KkbgGAjJJTkCMgIXPzNZhuzGx8.jpg"
            alt="Velvera Salon Interior"
            className="aspect-[4/3] lg:aspect-[1.1]"
          />

          {/* Text Content */}
          <div className="flex flex-col items-start gap-6">
            <SectionTag text="Our Story" />

            <h3 className="text-3xl md:text-4xl font-medium leading-tight">
              Legacy <span className="text-stone-600"> of</span> Excellence
              Since 1960
            </h3>

            <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
              We are a Mumbai-based packaging box manufacturing company with a
              legacy that began in 1960. With decades of experience, we
              specialize in customized packaging solutions designed to match our
              clients’ brand identity and product needs.
            </p>
            <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
              As a customer-centric company, we focus on understanding each
              client’s requirements. From FMCG brands, hospitality companies,
              and event planners to startups and entrepreneurs, we deliver the
              perfect balance of design, quality, and functionality.
            </p>

            <a
              href="#contact"
              className="group mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-8 py-3  font-medium transition-all hover:bg-[#e65f00] hover:shadow-lg active:scale-95"
            >
              <span>Get Expert Care</span>
              <div className="relative w-5 h-5 overflow-hidden">
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
              </div>
            </a>
          </div>
        </div>

        {/* --- Content Grid 2: Text Left, Image Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content (Order 2 on mobile, Order 1 on Desktop) */}
          <div className="flex flex-col items-start gap-8 order-2 lg:order-1">
            <SectionTag text="Why Choose Us" />

            {/* <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-2">
              Why <span className="text-stone-600">Kallu Box</span> Ent. is the
              right choice for your brand
            </h3>

            <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
              We combine skilled craftsmanship with advanced printing
              technologies to ensure every box tells your story perfectly.
            </p> */}
            <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-4">
              Why <span className="text-stone-600">Kallu Box</span> Ent. is the
              right choice for your brand
            </h3>
            <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
              We combine skilled craftsmanship with advanced printing
              technologies to ensure every box tells your story perfectly.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                {/* Simple bullet point design */}
                <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                Low MOQs for Startups
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                Advanced Laser & Die Cutting
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                Premium UV & Foil Finishing
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-stone-500 rounded-full"></span>
                Quick Turnaround Times
              </div>
            </div>

            <a
              href="#contact"
              className="group mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-8 py-3 font-medium transition-all hover:bg-[#e65f00] hover:shadow-lg active:scale-95"
            >
              <span>Get Expert Care</span>
              <div className="relative w-5 h-5 overflow-hidden">
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
              </div>
            </a>
          </div>

          {/* Animated Image Wrapper (Order 1 on mobile, Order 2 on Desktop) */}
          <div className="order-1 lg:order-2 w-full">
            <RevelImage
              src="https://framerusercontent.com/images/pl8KtZDJfmFPHF6wUBHGoIuHCaQ.jpg"
              alt="Hair styling session"
              className="aspect-[4/3] lg:aspect-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- The Reveal Component (The Magic) ---
interface RevelImageProps {
  src: string;
  alt: string;
  className?: string;
}

const RevelImage: React.FC<RevelImageProps> = ({ src, alt, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });

  return (
    <div
      ref={ref}
      className={`relative w-full  overflow-hidden bg-stone-100 group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 1. The Image: Scales from 1.3 -> 1.0 */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.3, filter: "grayscale(100%)" }}
        animate={
          isInView
            ? { scale: 1, filter: "grayscale(0%)" }
            : { scale: 1.3, filter: "grayscale(100%)" }
        }
        transition={{ duration: 1.5, ease: transitionCurve }}
      >
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* 2. Top Curtain (Brand Color Red) */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[51%] bg-gray-50 z-20 origin-top"
        initial={{ y: "0%" }}
        animate={isInView ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: 1.2, ease: transitionCurve, delay: 0.1 }}
      />

      {/* 3. Bottom Curtain (Brand Color Red) */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[51%] bg-gray-50 z-20 origin-bottom"
        initial={{ y: "0%" }}
        animate={isInView ? { y: "100%" } : { y: "0%" }}
        transition={{ duration: 1.2, ease: transitionCurve, delay: 0.1 }}
      />

      {/* 4. Corner Overlays */}
      <CornerOverlay isHovered={isHovered} />
    </div>
  );
};

// --- Corner System ---
const CornerOverlay: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <motion.div
      className="absolute inset-4 z-30 pointer-events-none"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={
        isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }
      }
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-full">
        {/* Corners (White for contrast against photos) */}
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-white shadow-sm" />
        <div className="absolute top-0 left-0 w-[1px] h-4 bg-white shadow-sm" />

        <div className="absolute top-0 right-0 w-4 h-[1px] bg-white shadow-sm" />
        <div className="absolute top-0 right-0 w-[1px] h-4 bg-white shadow-sm" />

        <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-white shadow-sm" />
        <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-white shadow-sm" />

        <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-white shadow-sm" />
        <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-white shadow-sm" />
      </div>
    </motion.div>
  );
};

/* --- Sub-Components --- */

function SectionTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-[1px] bg-black"></div>
      <span className="text-sm font-semibold uppercase tracking-wide text-[#700000]">
        {text}
      </span>
    </div>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors duration-300">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mt-1">
        <Check className="w-5 h-5" strokeWidth={3} />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-stone-900">{title}</span>
        <span className="text-stone-500">{description}</span>
      </div>
    </div>
  );
}
