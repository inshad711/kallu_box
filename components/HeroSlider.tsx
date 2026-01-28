// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Define your images here.
// const images = [
//   "/images/Gemini_Generated_Image_itzc7jitzc7jitzc.png",
//   "/slider/KALLU BOX BANNER FOR WEBSITE.png",
//   "/slider/KALLU BOX BANNER FOR WEBSITE.png",
// ];

// const HeroSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center justify-center text-white">
//       {/* Background Slider Container */}
//       <div className="absolute inset-0 z-0 bg-black">
//         <AnimatePresence mode="popLayout" initial={false}>
//           <motion.div
//             key={currentIndex}
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//             className="absolute inset-0 w-full h-full"
//           >
//             <img
//               src={images[currentIndex]}
//               alt={`Packaging Background ${currentIndex + 1}`}
//               className="object-cover w-full h-full block"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // 1. Update data structure to hold both Desktop and Mobile versions
// const sliderData = [
//   {
//     id: 1,
//     desktop: "/slider/KALLU BOX BANNER FOR WEBSITE.png",
//     mobile: "/slider/KALLU BOX BANNER FOR WEBSITE - MOBILE.png",
//     alt: "Gemini Generated Art",
//   },
//   {
//     id: 2,
//     desktop: "/slider/KALLU BOX BANNER FOR WEBSITE.png",
//     mobile: "/slider/KALLU BOX BANNER FOR WEBSITE - MOBILE.png",
//     alt: "Kallu Box Banner",
//   },
//   {
//     id: 3,
//     desktop: "/slider/KALLU BOX BANNER FOR WEBSITE.png",
//     mobile: "/slider/KALLU BOX BANNER FOR WEBSITE - MOBILE.png",
//     alt: "Kallu Box Banner Duplicate",
//   },
// ];

// const HeroSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, []);

//   // Animation Variants for cleaner code
//   const slideVariants = {
//     initial: { x: "100%" },
//     animate: { x: 0 },
//     exit: { x: "-100%" },
//   };

//   return (
//     <section className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center justify-center bg-black text-white">
//       <div className="absolute inset-0 z-0">
//         {/* Removed mode="popLayout" to fix the jump/glitch */}
//         <AnimatePresence initial={false}>
//           <motion.div
//             key={currentIndex}
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             // Slower transition for a smoother, less "jerky" feel
//             transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
//             className="absolute inset-0 w-full h-full"
//           >
//             {/* 2. The <picture> tag automatically switches images based on screen width */}
//             <picture>
//               {/* Show this image if screen is smaller than 768px */}
//               <source
//                 media="(max-width: 768px)"
//                 srcSet={sliderData[currentIndex].mobile}
//               />
//               {/* Fallback / Default Desktop Image */}
//               <img
//                 src={sliderData[currentIndex].desktop}
//                 alt={sliderData[currentIndex].alt}
//                 className="object-cover w-full h-full block"
//                 // 'eager' loading prevents white flashes while image loads
//                 loading="eager"
//               />
//             </picture>

//             {/* Optional: Dark Overlay for better text readability if you add text later */}
//             {/* <div className="absolute inset-0 bg-black/20" /> */}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

/////////

// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const sliderData = [
//   {
//     id: 1,
//     desktop: "/slider/KALLU BOX BANNER FOR WEBSITE.png",
//     mobile: "/slider/KALLU BOX BANNER FOR WEBSITE - MOBILE.png",
//     alt: "Gemini Generated Art",
//   },
//   {
//     id: 2,
//     desktop: "/slider/KALLU BOX BANNER FOR WEBSITE.png",
//     mobile: "/slider/KALLU BOX BANNER FOR WEBSITE - MOBILE.png",
//     alt: "Kallu Box Banner",
//   },
//   {
//     id: 3,
//     desktop: "/slider/KALLU BOX BANNER FOR WEBSITE.png",
//     mobile: "/slider/KALLU BOX BANNER FOR WEBSITE - MOBILE.png",
//     alt: "Kallu Box Banner Duplicate",
//   },
// ];

// const HeroSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   // 1. Check screen size on load and resize
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     // Check immediately
//     checkScreenSize();

//     // Add listener for resize events
//     window.addEventListener("resize", checkScreenSize);

//     // Cleanup
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);

//   // 2. Auto-slide logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const slideVariants = {
//     initial: { x: "100%" },
//     animate: { x: 0 },
//     exit: { x: "-100%" },
//   };

//   return (
//     <section className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center justify-center bg-black text-white">
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence initial={false}>
//           <motion.div
//             key={currentIndex}
//             variants={slideVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
//             className="absolute inset-0 w-full h-full"
//           >
//             {/* 3. Explicitly choose the image source based on state */}
//             <img
//               src={
//                 isMobile
//                   ? sliderData[currentIndex].mobile
//                   : sliderData[currentIndex].desktop
//               }
//               alt={sliderData[currentIndex].alt}
//               className="object-cover w-full h-full block"
//               loading="eager"
//             />

//             <div className="absolute inset-0 bg-black/20" />
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default HeroSlider;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// const sliderData = [
//   {
//     id: 1,
//     desktop: "/slider/KALLU BOX BANNER FOR WEBSITE.png",
//     mobile: "/slider/KALLU BOX BANNER FOR WEBSITE - MOBILE.png",
//     alt: "Gemini Generated Art",
//   },
//   {
//     id: 2,
//     desktop: "/slider/KALLU BOX-BANNER 2-FOR-WEBSITE - DESKTOP.png",
//     mobile: "/slider/KALLU-BOX-BANNER-2-FOR WEBSITE - MOBILE.png",
//     alt: "Kallu Box Banner",
//   },
//   {
//     id: 3,
//     desktop: "/slider/KALLU BOX BANNER 3 FOR WEBSITE - DESKTOP.png",
//     mobile: "/slider/KALLU BOX BANNER 3 FOR WEBSITE - MOBILE.png",
//     alt: "Kallu Box Banner Duplicate",
//   },
// ];

const sliderData = [
  {
    id: 1,

    desktop: "/imagesW/KALLU-BOX-BANNER-FOR-WEBSITE.webp",
    mobile: "/imagesW/KALLU-BOX-BANNER-FOR-WEBSITE-MOBILE.webp",
    alt: "Gemini Generated Art",
  },
  {
    id: 2,
    desktop: "/imagesW/KALLU-BOX-BANNER-2-FOR-WEBSITE-DESKTOP.webp",
    mobile: "/imagesW/KALLU-BOX-BANNER-2-FOR-WEBSITE-MOBILE.webp",
    alt: "Kallu Box Banner",
  },
  {
    id: 3,
    desktop: "/imagesW/KALLU-BOX-BANNER-3-FOR-WEBSITE-DESKTOP.webp",
    mobile: "/imagesW/KALLU-BOX-BANNER-3-FOR-WEBSITE -MOBILE.webp",
    alt: "Kallu Box Banner Duplicate",
  },
];
const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  };

  // Helper to get current image src
  const currentImageSrc = isMobile
    ? sliderData[currentIndex].mobile
    : sliderData[currentIndex].desktop;

  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* 2. THE SPACER IMAGE */}

      <img
        src={currentImageSrc}
        alt="spacer"
        className="w-full h-auto opacity-0 relative z-0 pointer-events-none block"
        aria-hidden="true"
      />

      {/* 3. The Actual Slider Layer */}
      {/* Positioned absolutely over the spacer */}
      <div className="absolute inset-0 z-10">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentImageSrc}
              alt={sliderData[currentIndex].alt}
              className="w-full h-full object-cover block" // object-cover ensures it fills the space defined by the spacer
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSlider;
