// "use client";

// import React from "react";
// import Image from "next/image";

// const Hero2 = () => {
//   return (
//     <section className="relative w-full h-[600px] md:h-[90vh] overflow-hidden flex items-center justify-center text-white">
//       {/* Background Container */}
//       <div className="absolute inset-0 z-0 flex">
//         {/* Left Side: Vintage Mumbai Image */}
//         <div className="relative w-full h-full">
//           <img
//             src="/api/placeholder/1200/800" // Replace with your vintage Mumbai image
//             alt="Vintage Mumbai"
//             className="w-full h-full object-cover grayscale-[50%] sepia-[20%]"
//           />
//           {/* Dark Overlay Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-[#1a2533]/90" />
//         </div>
//       </div>

//       {/* Content Layer */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
//         {/* Established Date Header */}
//         <div className="flex items-center gap-4 mb-4">
//           <div className="h-[1px] w-12 bg-yellow-600/50" />
//           <span className="tracking-[0.3em] text-sm font-light uppercase text-gray-300">
//             Est. 1960.
//           </span>
//           <div className="h-[1px] w-12 bg-yellow-600/50" />
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight leading-tight max-w-3xl mb-4">
//           MUMBAI’S PREMIER <br />
//           <span className="italic">PACKAGING LEGACY.</span>
//         </h1>

//         {/* Subheading */}
//         <p className="text-lg md:text-xl font-light text-gray-200 mb-8 max-w-xl">
//           Crafting Your Brand&apos;s Identity Since Decades.
//         </p>

//         {/* CTA Button */}
//         <button className="bg-[#cba36d] hover:bg-[#b88f56] transition-colors text-black font-semibold px-8 py-4 rounded-md shadow-lg">
//           Explore Our Collection
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero2;

////////for video //////////

// "use client";

// import React from "react";

// const Hero2 = () => {
//   return (
//     <section className="relative w-full h-[600px] md:h-[90vh] overflow-hidden flex items-center justify-center text-white">
//       {/* Background Container */}
//       <div className="absolute inset-0 z-0">
//         {/* Background Video */}
//         <video
//           className="w-full h-full object-cover grayscale-[50%] sepia-[20%]"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="/video/box.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       {/* Content Layer */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
//         {/* Established Date Header */}
//         <div className="flex items-center gap-4 mb-4">
//           <div className="h-[1px] w-12 bg-yellow-600/50" />
//           <span className="tracking-[0.3em] text-sm font-light uppercase text-gray-300">
//             Est. 1960.
//           </span>
//           <div className="h-[1px] w-12 bg-yellow-600/50" />
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-4xl md:text-6xl  font-medium tracking-tight leading-tight max-w-3xl mb-4">
//           MUMBAI’S PREMIER <br />
//           <span className="">PACKAGING LEGACY.</span>
//         </h1>

//         {/* Subheading */}
//         <p className="text-lg md:text-xl font-light text-gray-200 mb-8 max-w-xl">
//           Crafting Your Brand&apos;s Identity Since Decades.
//         </p>

//         {/* CTA Button */}
//         <button className="bg-[#cba36d] hover:bg-[#b88f56] transition-colors text-black font-semibold px-8 py-4 rounded-md shadow-lg">
//           Explore Our Collection
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero2;

"use client";

import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[90vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <Image
          //   src="/images/2148343301.jpg"
          src="/images/87f04430-3286-460c-8b89-94da7bba76d5.jpg"
          alt="Packaging Background"
          fill
          priority
          className="object-cover grayscale-[50%] sepia-[20%]"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Established Date Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-yellow-600/50" />
          <span className="tracking-[0.3em] text-sm font-light uppercase text-[#000]">
            Est. 1960.
          </span>
          <div className="h-[1px] w-12 bg-yellow-600/50" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl text-[#000] md:text-6xl font-medium tracking-tight leading-tight max-w-3xl mb-4">
          MUMBAI’S PREMIER <br />
          <span>PACKAGING LEGACY.</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-light text-[#000] mb-8 max-w-xl">
          Crafting Your Brand&apos;s Identity Since Decades.
        </p>

        {/* CTA Button */}
        <button className=" bg-gradient-to-r from-[#700000] to-[#3b0000] text-white transition-colors  font-semibold px-8 py-4 rounded-md shadow-lg">
          Explore Our Collection
        </button>
      </div>
    </section>
  );
};

export default Hero2;
