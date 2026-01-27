// "use client";
// import React from "react";
// import { ArrowRight, ThumbsUp, Headset, Leaf } from "lucide-react";

// const WhyChooseUs = () => {
//   return (
//     <div className="bg-white text-gray-800">
//       {/* Main Section Container */}
//       <section className="py-20 templateContainer">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
//           {/* Column 1: Text Content */}
//           <div className="space-y-8 animate-fade-in-up">
//             <div className="space-y-4">
//               <h4 className="text-sm font-bold tracking-widest text-[#50c594] uppercase">
//                 Our Benefits
//               </h4>
//               <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight">
//                 Why Choose Us
//               </h2>
//             </div>
//             <p className="text-gray-500 text-lg leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//               tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
//             </p>

//             <button className="group inline-flex items-center gap-3 bg-[#50c594] text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-emerald-100 transition-all duration-300 hover:bg-[#3db383] hover:shadow-xl hover:-translate-y-1">
//               <span>Learn More</span>
//               <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
//             </button>
//           </div>

//           {/* Column 2: Center Image */}
//           <div className="relative flex justify-center lg:justify-center animate-fade-in order-first lg:order-none">
//             {/* Background decorative blob/circle */}
//             <div className="absolute inset-0 bg-[#50c594] rounded-full blur-3xl opacity-20 scale-90 -z-10"></div>

//             <img
//               src="https://kitpro.site/kit-packega/wp-content/uploads/sites/237/2024/03/7-1-1024x817.png"
//               alt="Feature Illustration"
//               className="w-full max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           {/* Column 3: Features List */}
//           <div className="space-y-6">
//             {/* Feature 1 */}
//             <FeatureItem
//               icon={<ThumbsUp className="w-6 h-6 text-white" />}
//               title="Premium Quality"
//               description="Lorem ipsum dolor sit amet."
//             />

//             {/* Feature 2 */}
//             <FeatureItem
//               icon={<Headset className="w-6 h-6 text-white" />}
//               title="24/7 Support"
//               description="Lorem ipsum dolor sit amet."
//             />

//             {/* Feature 3 */}
//             <FeatureItem
//               icon={<Leaf className="w-6 h-6 text-white" />}
//               title="Eco Friendly"
//               description="Lorem ipsum dolor sit amet."
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// // Sub-component for individual features
// const FeatureItem = ({ icon, title, description }) => (
//   <div className="flex gap-5 items-center group p-4 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-100 border border-transparent hover:border-gray-50">
//     <div className="flex-shrink-0">
//       {/* Updated to 'Stacked' view: Filled colored circle with white icon */}
//       <div className="w-16 h-16 rounded-full bg-[#50c594] shadow-md shadow-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//         {icon}
//       </div>
//     </div>
//     <div className="space-y-1">
//       <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#50c594] transition-colors">
//         {title}
//       </h3>
//       <p className="text-gray-500 text-base">{description}</p>
//     </div>
//   </div>
// );

// // Main App Component
// export default function Stats() {
//   return (
//     <div className="bg-white flex items-center justify-center">
//       <WhyChooseUs />
//     </div>
//   );
// }

"use client";
import React from "react";
import { ArrowRight, ThumbsUp, Headset, Leaf } from "lucide-react";

/* ---------------- Types ---------------- */
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/* ---------------- Main Section ---------------- */
const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Main Section Container */}
      <section className="py-20 templateContainer">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Column 1: Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h4 className="text-sm font-medium tracking-widest text-[#700000] uppercase">
                Our Benefits
              </h4>
              <h2 className="text-3xl md:text-4xl uppercase font-medium text-[#1a1a1a] leading-tight">
                Why Choose Us
              </h2>
            </div>

            <p className="text-gray-500 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
            </p>

            <button className="group inline-flex cursor-pointer items-center gap-3 bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-10 py-4 rounded-full font-bold">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Column 2: Center Image */}
          <div className="relative flex justify-center animate-fade-in order-first lg:order-none">
            <div className="absolute inset-0 bg-[#50c594] rounded-full blur-3xl opacity-20 scale-90 -z-10"></div>

            <img
              src="https://kitpro.site/kit-packega/wp-content/uploads/sites/237/2024/03/7-1-1024x817.png"
              alt="Feature Illustration"
              className="w-full max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Column 3: Features */}
          <div className="space-y-2">
            <FeatureItem
              icon={<ThumbsUp className="w-6 h-6 text-white" />}
              title="Premium Quality"
              description="Lorem ipsum dolor sit amet."
            />

            <FeatureItem
              icon={<Headset className="w-6 h-6 text-white" />}
              title="24/7 Support"
              description="Lorem ipsum dolor sit amet."
            />

            <FeatureItem
              icon={<Leaf className="w-6 h-6 text-white" />}
              title="Eco Friendly"
              description="Lorem ipsum dolor sit amet."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

/* ---------------- Feature Item ---------------- */
const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex gap-5 items-center group p-4 rounded-full transition-all duration-300 bg-gray-50">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#700000] to-[#3b0000] text-white shadow-md shadow-emerald-100 flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#700000] transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-base">{description}</p>
      </div>
    </div>
  );
};

/* ---------------- Export ---------------- */
const Stats: React.FC = () => {
  return (
    <div className="bg-white flex items-center justify-center">
      <WhyChooseUs />
    </div>
  );
};

export default Stats;
