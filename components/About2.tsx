// import React from "react";

// export default function About2() {
//   return (
//     <div className="bg-[#111111] text-white font-sans selection:bg-red-500 selection:text-white">
//       <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           {/* Left Column: Text Content */}
//           <div className="lg:col-span-4 space-y-8">
//             <div className="space-y-4">
//               {/* Section Header */}
//               <div className="flex items-center gap-3">
//                 <div className="w-5 h-5 text-[#ed202b]">
//                   <svg viewBox="0 0 18 14" fill="currentColor">
//                     <path d="M0 14h18v-2H0v2zm0-4h18V8H0v2zm0-4h18V4H0v2zm0-4v2h18V2H0z" />
//                   </svg>
//                 </div>
//                 <span className="text-[#ed202b] text-sm font-bold tracking-widest uppercase">
//                   About Company
//                 </span>
//               </div>

//               {/* Main Title */}
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 Company has been in operation more 14 years.
//               </h2>
//             </div>

//             {/* Quote/Description Block */}
//             <div className="pl-6 border-l-2 border-[#ed202b] space-y-4">
//               <p className="text-gray-300 text-lg leading-relaxed">
//                 New installations, trust our team of licensed professionals to
//                 protect.
//               </p>
//               <p className="text-gray-400 font-medium italic">
//                 Gabriella S. Adams
//               </p>
//             </div>
//           </div>

//           {/* Center Column: Hero Image */}
//           <div className="lg:col-span-5 flex justify-center">
//             <div className="relative w-full aspect-[4/5] max-w-md overflow-hidden rounded-sm shadow-2xl">
//               <img
//                 src="https://framerusercontent.com/images/SbNYmKxyQbIqTz5RyldJrCcUE8.jpg?width=900"
//                 alt="Professional Roofer at Work"
//                 className="w-full h-full object-cover"
//                 loading="lazy"
//               />
//             </div>
//           </div>

//           {/* Right Column: Counters */}
//           <div className="lg:col-span-3 flex flex-col justify-center space-y-8">
//             {/* Counter 1: 3k */}
//             <div className="relative flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0">
//               {/* Outline Number */}
//               <span
//                 className="text-[130px] md:text-[180px] font-black opacity-25 select-none leading-none inline-block py-4"
//                 style={{
//                   WebkitTextStroke: "2px #ed202b",
//                   color: "transparent",
//                 }}
//               >
//                 3k
//               </span>

//               {/* Label: Centered vertically and horizontally relative to the number */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-8 lg:translate-x-0 bg-[#111111] px-4 py-1.5 z-10 border border-white/10 shadow-xl">
//                 <span className="uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] text-white whitespace-nowrap">
//                   Active Member
//                 </span>
//               </div>
//             </div>

//             {/* Counter 2: 2k */}
//             <div className="relative flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0">
//               {/* Outline Number */}
//               <span
//                 className="text-[130px] md:text-[180px] font-black opacity-25 select-none leading-none inline-block py-4"
//                 style={{
//                   WebkitTextStroke: "2px #ed202b",
//                   color: "transparent",
//                 }}
//               >
//                 2k
//               </span>

//               {/* Label: Centered vertically and horizontally relative to the number */}
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-8 lg:translate-x-0 bg-[#111111] px-4 py-1.5 z-10 border border-white/10 shadow-xl">
//                 <span className="uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] text-white whitespace-nowrap">
//                   Good Ratings
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Brand Logos Footer */}
//         <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-10 grayscale opacity-40 hover:grayscale-0 transition-all duration-700">
//           <img
//             src="https://framerusercontent.com/images/BOpKpfJx8wjhOU9J2S5ald2H2A.svg"
//             alt="Brand"
//             className="h-7 w-auto"
//           />
//           <img
//             src="https://framerusercontent.com/images/VJkfvb0dcc2IOQnmskmb9Bm1jv0.svg"
//             alt="Brand"
//             className="h-7 w-auto"
//           />
//           <img
//             src="https://framerusercontent.com/images/F1LcfKfwoHFgPZSlfi2u1KoJDGU.svg"
//             alt="Brand"
//             className="h-7 w-auto"
//           />
//           <img
//             src="https://framerusercontent.com/images/DzPme5BRmYeSEijxA9kJXT56fU.svg"
//             alt="Brand"
//             className="h-7 w-auto"
//           />
//           <img
//             src="https://framerusercontent.com/images/ZDIL59YO0klAHG3QRssxaiA7c.svg"
//             alt="Brand"
//             className="h-7 w-auto"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";

export default function About2() {
  return (
    // Changed: bg-[#111111] -> bg-white, text-white -> text-black
    <div className="bg-white text-black ">
      <section className="max-w-7xl mx-auto px-4 pt-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              {/* Section Header */}
              <div className="flex items-center gap-3">
                <span className="text-[#700000] text-sm font-bold tracking-widest uppercase">
                  About Company
                </span>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-normal tracking-normal leading-10 ">
                Company has been in operation more 14 years.
              </h2>
            </div>

            {/* Quote/Description Block */}
            <div className="pl-6 border-l-2 border-[#700000] space-y-4">
              {/* Changed: text-gray-300 -> text-gray-700 (darker for visibility) */}
              <p className="text-gray-700 text-lg leading-relaxed">
                New installations, trust our team of licensed professionals to
                protect.
              </p>
              {/* Changed: text-gray-400 -> text-gray-500 */}
              <p className="text-gray-500 font-medium">Gabriella S. Adams</p>
            </div>
          </div>

          {/* Center Column: Hero Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full aspect-[8/9] max-w-md overflow-hidden rounded-sm shadow-2xl">
              <img
                src="https://framerusercontent.com/images/SbNYmKxyQbIqTz5RyldJrCcUE8.jpg?width=900"
                alt="Professional Roofer at Work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Counters */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-3 md:space-y-8">
            {/* Counter 1: 3k */}
            <div className="relative flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0">
              {/* Outline Number */}
              <span
                className="text-[120px] md:text-[180px] font-black opacity-25 select-none leading-none inline-block py-4"
                style={{
                  WebkitTextStroke: "2px #700000",
                  color: "transparent",
                }}
              >
                3k
              </span>

              {/* Label */}
              {/* Changed: bg-[#111111] -> bg-white, border-white/10 -> border-black/10 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-8 lg:translate-x-0 bg-white px-4 py-1.5 z-10 border border-black/10 shadow-xl">
                {/* Changed: text-white -> text-black */}
                <span className="uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] text-black whitespace-nowrap">
                  Active Member
                </span>
              </div>
            </div>

            {/* Counter 2: 2k */}
            <div className="relative flex items-center justify-center lg:justify-start w-fit mx-auto lg:mx-0">
              {/* Outline Number */}
              <span
                className="text-[120px] md:text-[180px] font-black opacity-25 select-none leading-none inline-block py-4"
                style={{
                  WebkitTextStroke: "2px #700000",
                  color: "transparent",
                }}
              >
                2k
              </span>

              {/* Label */}
              {/* Changed: bg-[#111111] -> bg-white, border-white/10 -> border-black/10 */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-8 lg:translate-x-0 bg-white px-4 py-1.5 z-10 border border-black/10 shadow-xl">
                {/* Changed: text-white -> text-black */}
                <span className="uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] text-black whitespace-nowrap">
                  Good Ratings
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
