// "use client";
// import React from "react";

// const logos = [
//   {
//     src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-17.png",
//     alt: "BCG",
//   },
//   {
//     src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy.png",
//     alt: "J&J",
//   },
//   {
//     src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-2.png",
//     alt: "Snazzy",
//   },
//   {
//     src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-3.png",
//     alt: "Tinder",
//   },
//   {
//     src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/abott.png",
//     alt: "Abbott",
//   },
//   {
//     src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/adani.png",
//     alt: "Adani",
//   },
//   {
//     src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-6.png",
//     alt: "Amazon",
//   },
//   {
//     src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-10.png",
//     alt: "Netflix",
//   },
// ];

// export default function BrandMarquee() {
//   return (
//     <section className="w-full bg-white py-12 overflow-hidden">
//       {/* Global CSS for the Marquee Animation */}
//       <style jsx global>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee-infinite {
//           display: flex;
//           width: max-content;
//           animation: marquee 30s linear infinite;
//         }
//         .animate-marquee-infinite:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="relative flex items-center">
//         {/* Left & Right Gradient Overlays for smooth fading edges */}
//         <div className="absolute left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
//         <div className="absolute right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

//         <div className="animate-marquee-infinite">
//           {/* Loop twice to create the seamless infinite effect */}
//           {[...Array(2)].map((_, i) => (
//             <div key={i} className="flex items-center">
//               {logos.map((logo, index) => (
//                 <div
//                   key={index}
//                   className="mx-10 flex w-32 items-center justify-center sm:w-40"
//                 >
//                   <img
//                     src={logo.src}
//                     alt={logo.alt}
//                     className="h-10 w-auto object-contain transition-opacity duration-300 hover:opacity-70"
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";

const logos = [
  {
    src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-17.png",
    alt: "BCG",
  },
  {
    src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy.png",
    alt: "J&J",
  },
  {
    src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-2.png",
    alt: "Snazzy",
  },
  {
    src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-3.png",
    alt: "Tinder",
  },
  {
    src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/abott.png",
    alt: "Abbott",
  },
  {
    src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/adani.png",
    alt: "Adani",
  },
  {
    src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-6.png",
    alt: "Amazon",
  },
  {
    src: "https://thebaxsaaco.com/wp-content/uploads/2025/12/Artboard-1-copy-10.png",
    alt: "Netflix",
  },
];

export default function BrandMarquee() {
  return (
    <section className="w-full py-8 overflow-hidden">
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>

      <div className="relative flex items-center">
        {/* Faded edges for a premium look */}
        <div className="absolute left-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute right-0 z-10 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent" />

        <div className="animate-marquee-infinite">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="mx-4 flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    /* Adjusted height to 48px (h-12) for better visibility like the image */
                    className="h-32 w-auto min-w-[150px] object-contain transition-all duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
