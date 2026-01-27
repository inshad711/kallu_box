// "use client";
// import React from "react";
// import { ArrowRight } from "lucide-react";

// /**
//  * Career Journey CTA Section
//  * Features a highly detailed, "fluffy" SVG cloud and trail dots.
//  */
// const About = () => {
//   return (
//     <section className="relative w-full min-h-[600px] bg-[#0d1b1a] overflow-hidden flex items-center justify-center p-6 md:p-12 font-sans">
//       {/* Background Texture - subtle radial pattern */}
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
//         {/* Left Column: Floating Elements & Main Heading */}
//         <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-12">
//           {/* Top Row: Fluffy Cloud and Main Title */}
//           <div className="flex flex-col md:flex-row items-center gap-10 w-full">
//             {/* The "Cloudy" Container */}
//             <div className="relative shrink-0 hidden md:block w-64 h-56 transform -rotate-3">
//               {/* Very Fluffy SVG Cloud */}
//               <svg
//                 viewBox="0 0 240 200"
//                 className="w-full h-full drop-shadow-2xl fill-[#c8e6a1]"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="
//                   M 50,100
//                   A 30,30 0 0 1 80,60
//                   A 35,35 0 0 1 140,50
//                   A 30,30 0 0 1 190,70
//                   A 30,30 0 0 1 210,110
//                   A 30,30 0 0 1 180,150
//                   A 35,35 0 0 1 120,165
//                   A 35,35 0 0 1 60,150
//                   A 30,30 0 0 1 50,100
//                   Z"
//                 />
//               </svg>

//               {/* Centered Text inside the Cloud */}
//               <div className="absolute inset-0 flex items-center justify-center p-12">
//                 <p className="text-[#1a2e2c] font-bold text-lg leading-tight text-center max-w-[150px]">
//                   Do You Have Any To Join With Us
//                 </p>
//               </div>

//               {/* Decorative Trail Dots (The "Thought" tail) */}
//               <div className="absolute -bottom-2 right-12 w-8 h-8 bg-[#c8e6a1] rounded-full shadow-lg"></div>
//               <div className="absolute -bottom-10 right-4 w-5 h-5 bg-[#c8e6a1] rounded-full opacity-70"></div>
//               <div className="absolute -bottom-16 right-0 w-3 h-3 bg-[#c8e6a1] rounded-full opacity-40"></div>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight max-w-2xl">
//               Your Career Journey Begins{" "}
//               <span className="block md:inline">Let's Make It</span>
//             </h1>
//           </div>

//           {/* Bottom Row: Team Image, Description and CTA */}
//           <div className="flex flex-col md:flex-row items-end gap-8 w-full">
//             {/* Left Overlapping Image */}
//             <div className="w-full md:w-[450px] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1a2e2c]">
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
//                 alt="Diverse team working together"
//                 className="w-full h-full object-cover"
//                 onError={(e) => {
//                   e.target.src =
//                     "https://via.placeholder.com/800x450?text=Team+Collaboration";
//                 }}
//               />
//             </div>

//             {/* Description and Button */}
//             <div className="flex-1 space-y-6 md:pb-4">
//               <p className="text-gray-300 text-lg max-w-sm leading-relaxed">
//                 Centered designs I am passionate about solving complex problems
//                 and delivering impactful digital experiences.
//               </p>

//               <button className="group flex items-center gap-3 bg-[#368886] hover:bg-[#45a3a1] text-white px-8 py-4 rounded-md font-semibold transition-all transform active:scale-95 shadow-lg">
//                 Post Job Free
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Tall Feature Image */}
//         <div className="lg:col-span-4 h-full flex justify-center lg:justify-end">
//           <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform lg:translate-y-8">
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
//               alt="People collaborating around a laptop"
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 e.target.src =
//                   "https://via.placeholder.com/600x800?text=Digital+Collaboration";
//               }}
//             />
//             {/* Decorative Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b1a]/40 to-transparent pointer-events-none"></div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Blur Orbs */}
//       <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#368886] opacity-10 rounded-full blur-[120px]"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#c8e6a1] opacity-5 rounded-full blur-[100px]"></div>
//     </section>
//   );
// };

// export default About;

"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * Career Journey CTA Section
 * Features a highly detailed, "fluffy" SVG cloud and trail dots.
 */
const About: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-[#0d1b1a] overflow-hidden flex items-center justify-center p-6 md:p-12 font-sans">
      {/* Background Texture - subtle radial pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Floating Elements & Main Heading */}
        <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left space-y-12">
          {/* Top Row: Fluffy Cloud and Main Title */}
          <div className="flex flex-col md:flex-row items-center gap-10 w-full">
            {/* The "Cloudy" Container */}
            <div className="relative shrink-0 hidden md:block w-64 h-56 transform -rotate-3">
              {/* Very Fluffy SVG Cloud */}
              <svg
                viewBox="0 0 240 200"
                className="w-full h-full drop-shadow-2xl fill-[#c8e6a1]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="
                  M 50,100 
                  A 30,30 0 0 1 80,60 
                  A 35,35 0 0 1 140,50 
                  A 30,30 0 0 1 190,70 
                  A 30,30 0 0 1 210,110 
                  A 30,30 0 0 1 180,150 
                  A 35,35 0 0 1 120,165 
                  A 35,35 0 0 1 60,150 
                  A 30,30 0 0 1 50,100 
                  Z"
                />
              </svg>

              {/* Centered Text inside the Cloud */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <p className="text-[#1a2e2c] font-bold text-lg leading-tight text-center max-w-[150px]">
                  Do You Have Any To Join With Us
                </p>
              </div>

              {/* Decorative Trail Dots (The "Thought" tail) */}
              <div className="absolute -bottom-2 right-12 w-8 h-8 bg-[#c8e6a1] rounded-full shadow-lg"></div>
              <div className="absolute -bottom-10 right-4 w-5 h-5 bg-[#c8e6a1] rounded-full opacity-70"></div>
              <div className="absolute -bottom-16 right-0 w-3 h-3 bg-[#c8e6a1] rounded-full opacity-40"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-2xl">
              Your Career Journey Begins{" "}
              <span className="block md:inline">Let's Make It</span>
            </h1>
          </div>

          {/* Bottom Row: Team Image, Description and CTA */}
          <div className="flex flex-col md:flex-row items-end gap-8 w-full">
            {/* Left Overlapping Image */}
            <div className="w-full md:w-[450px] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1a2e2c]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                alt="Diverse team working together"
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/800x450?text=Team+Collaboration";
                }}
              />
            </div>

            {/* Description and Button */}
            <div className="flex-1 space-y-6 md:pb-4">
              <p className="text-gray-300 text-lg max-w-sm leading-relaxed">
                Centered designs I am passionate about solving complex problems
                and delivering impactful digital experiences.
              </p>

              <button className="group flex items-center gap-3 bg-[#368886] hover:bg-[#45a3a1] text-white px-8 py-4 rounded-md font-semibold transition-all transform active:scale-95 shadow-lg">
                Post Job Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Tall Feature Image */}
        <div className="lg:col-span-4 h-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform lg:translate-y-8">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="People collaborating around a laptop"
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/600x800?text=Digital+Collaboration";
              }}
            />
            {/* Decorative Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b1a]/40 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#368886] opacity-10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#c8e6a1] opacity-5 rounded-full blur-[100px]"></div>
    </section>
  );
};

export default About;
