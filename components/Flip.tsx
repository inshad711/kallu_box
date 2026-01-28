// "use client";

// import Image from "next/image";

// export default function Flip() {
//   return (
//     <section className="relative w-full  py-20 overflow-hidden">
//       <div className="templateContainer">
//         <div className="relative z-10 max-w-7xl mx-auto">
//           {/* Header Section */}

//           <div className="text-center max-w-2xl mx-auto mb-8">
//             <h1 className="text-3xl md:text-5xl  text-gray-900 mb-6 tracking-tight">
//               Tailored Packaging Solutions for Your Specialized Business
//             </h1>

//             <div className="flex items-center justify-center gap-4 max-w-lg mx-auto">
//               <div className="h-px bg-yellow-600/30 flex-1" />
//               <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs sm:text-sm">
//                 Explore products by industry by category
//               </p>
//               <div className="h-px bg-yellow-600/30 flex-1" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Image src={} />
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";

// export default function Flip() {
//   return (
//     <section className="relative w-full min-h-screen py-20 overflow-hidden flex flex-col">
//       <div className="templateContainer mb-12">
//         <div className="relative z-10 max-w-7xl mx-auto px-4">
//           {/* Header Section */}
//           <div className="text-center max-w-2xl mx-auto">
//             <h1 className="text-3xl md:text-5xl text-gray-900 mb-6 tracking-tight">
//               Tailored Packaging Solutions for Your Specialized Business
//             </h1>

//             <div className="flex items-center justify-center gap-4 max-w-lg mx-auto">
//               <div className="h-px bg-yellow-600/30 flex-1" />
//               <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs sm:text-sm">
//                 Explore products by industry by category
//               </p>
//               <div className="h-px bg-yellow-600/30 flex-1" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Full Width/Height Image Container */}
//       <div className="flex flex-1 w-full">
//         {/* Left Image Container */}
//         <div className="relative w-1/2 h-full">
//           <Image
//             src="/images/banner.PNG"
//             alt="Product Industry 1"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         {/* Right Image Container */}
//         <div className="relative w-1/2 h-full">
//           <Image
//             src="/images/kall.PNG"
//             alt="Product Industry 2"
//             fill
//             className="object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import DailyProduct from "./DailyProduct";
import DesignBox from "./DesignBox";

export default function Flip() {
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden flex flex-col">
      <div className="templateContainer mb-12">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-5xl text-gray-900 mb-6 tracking-tight">
              Tailored Packaging Solutions for Your Specialized Business
            </h1>

            <div className="flex items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="h-px bg-yellow-600/30 flex-1" />
              <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs sm:text-sm">
                Explore products by industry by category
              </p>
              <div className="h-px bg-yellow-600/30 flex-1" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <DailyProduct />

        <DesignBox />
      </div>{" "}
    </section>
  );
}
