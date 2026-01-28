// "use client";
// import React from "react";
// import { Globe, Mail, ChevronDown } from "lucide-react";

// const Contact2 = () => {
//   return (
//     // <div className="bg-[#f2c5a2]/5 text-slate-900">
//     <div className=" text-slate-900 bg-[url('/images/OIP.jpg')] bg-repeat bg-contain bg-center">
//       {/* Main Content */}
//       <main className="templateContainer py-18 sm:py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//         {/* Left Column */}
//         <div className="space-y-10 pt-22">
//           <div className="space-y-5">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
//               Contact Us
//             </h1>

//             <p className="text-base sm:text-lg text-slate-600 max-w-md leading-relaxed">
//               Email, call, or complete the form to learn how Snappy can solve
//               your messaging problem.
//             </p>

//             <div className="space-y-2 text-base sm:text-lg">
//               <p>info@snappy.io</p>
//               <p>321-221-231</p>
//               <p className="underline font-medium cursor-pointer">
//                 Customer Support
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
//             <section>
//               <h3 className="font-bold mb-2">Customer Support</h3>
//               <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
//                 Our support team is available around the clock to address any
//                 concerns or queries you may have.
//               </p>
//             </section>

//             <section>
//               <h3 className="font-bold mb-2">Feedback and Suggestions</h3>
//               <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
//                 We value your feedback and are continuously working to improve
//                 Snappy. Your input is crucial in shaping the future of Snappy.
//               </p>
//             </section>

//             <section>
//               <h3 className="font-bold mb-2">Media Inquiries</h3>
//               <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
//                 For media-related questions or press inquiries, please contact
//                 us at media@snappyapp.com.
//               </p>
//             </section>
//           </div>
//         </div>

//         {/* Right Column: Form */}
//         <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-100/50 w-full max-w-lg mx-auto lg:ml-auto">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
//             Get in Touch
//           </h2>
//           <p className="text-slate-500 mb-6 sm:mb-8">
//             You can reach us anytime
//           </p>

//           <form className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
//               />
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
//               />
//             </div>

//             <div className="relative">
//               <Mail
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                 size={18}
//               />
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
//               />
//             </div>

//             <div className="flex gap-2">
//               <div className="flex items-center gap-1 px-3 py-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer shrink-0">
//                 <span>+62</span>
//                 <ChevronDown size={14} className="text-slate-400" />
//               </div>

//               <input
//                 type="tel"
//                 placeholder="Phone number"
//                 className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
//               />
//             </div>

//             <div className="relative">
//               <textarea
//                 placeholder="How can we help?"
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 resize-none"
//               />
//               <span className="absolute bottom-3 right-4 text-xs text-slate-400">
//                 0/120
//               </span>
//             </div>

//             <button className="w-full bg-[#700000] hover:bg-[#700000]/50 text-white font-bold py-4 rounded-full transition-colors mt-4">
//               Submit
//             </button>

//             <p className="text-center text-xs text-slate-500 mt-6 px-2 sm:px-4">
//               By contacting us, you agree to our{" "}
//               <span className="font-bold text-slate-800 cursor-pointer">
//                 Terms of service
//               </span>{" "}
//               and{" "}
//               <span className="font-bold text-slate-800 cursor-pointer">
//                 Privacy Policy
//               </span>
//             </p>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Contact2;

////////////map

// "use client";
// import React from "react";
// import { Globe, Mail, ChevronDown } from "lucide-react";

// const Contact2 = () => {
//   return (
//     <div className=" text-slate-900 bg-[url('/images/OIP.jpg')] bg-repeat bg-contain bg-center">
//       {/* Main Content */}
//       <main className="templateContainer py-18 sm:py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//         {/* Left Column */}
//         <div className="space-y-10 pt-22">
//           <div className="space-y-5">
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
//               Contact Us
//             </h1>

//             <p className="text-base sm:text-lg text-slate-600 max-w-md leading-relaxed">
//               Email, call, or complete the form to learn how Snappy can solve
//               your messaging problem.
//             </p>

//             <div className="space-y-2 text-base sm:text-lg">
//               <p>info@snappy.io</p>
//               <p>321-221-231</p>
//               <p className="underline font-medium cursor-pointer">
//                 Customer Support
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
//             <section>
//               <h3 className="font-bold mb-2">Customer Support</h3>
//               <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
//                 Our support team is available around the clock to address any
//                 concerns or queries you may have.
//               </p>
//             </section>

//             <section>
//               <h3 className="font-bold mb-2">Feedback and Suggestions</h3>
//               <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
//                 We value your feedback and are continuously working to improve
//                 Snappy. Your input is crucial in shaping the future of Snappy.
//               </p>
//             </section>

//             <section>
//               <h3 className="font-bold mb-2">Media Inquiries</h3>
//               <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
//                 For media-related questions or press inquiries, please contact
//                 us at media@snappyapp.com.
//               </p>
//             </section>
//           </div>
//         </div>

//         {/* Right Column: Form */}
//         <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-100/50 w-full max-w-lg mx-auto lg:ml-auto">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
//             Get in Touch
//           </h2>
//           <p className="text-slate-500 mb-6 sm:mb-8">
//             You can reach us anytime
//           </p>

//           <form className="space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First name"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
//               />
//               <input
//                 type="text"
//                 placeholder="Last name"
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
//               />
//             </div>

//             <div className="relative">
//               <Mail
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
//                 size={18}
//               />
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
//               />
//             </div>

//             <div className="flex gap-2">
//               <div className="flex items-center gap-1 px-3 py-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer shrink-0">
//                 <span>+62</span>
//                 <ChevronDown size={14} className="text-slate-400" />
//               </div>

//               <input
//                 type="tel"
//                 placeholder="Phone number"
//                 className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
//               />
//             </div>

//             <div className="relative">
//               <textarea
//                 placeholder="How can we help?"
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 resize-none"
//               />
//               <span className="absolute bottom-3 right-4 text-xs text-slate-400">
//                 0/120
//               </span>
//             </div>

//             <button className="w-full bg-[#700000] hover:bg-[#700000]/50 text-white font-bold py-4 rounded-full transition-colors mt-4">
//               Submit
//             </button>

//             <p className="text-center text-xs text-slate-500 mt-6 px-2 sm:px-4">
//               By contacting us, you agree to our{" "}
//               <span className="font-bold text-slate-800 cursor-pointer">
//                 Terms of service
//               </span>{" "}
//               and{" "}
//               <span className="font-bold text-slate-800 cursor-pointer">
//                 Privacy Policy
//               </span>
//             </p>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Contact2;

"use client";
import React from "react";
import { Globe, Mail, ChevronDown } from "lucide-react";

const Contact2 = () => {
  return (
    // <div className="text-slate-900 bg-[url('/images/pastel-orange-rough-concrete-textured-background.webp')] bg-repeat bg-contain bg-center">
    <div
      className="
  bg-white/75
  bg-[url('/images/pastel-orange-rough-concrete-textured-background.webp')] 
  bg-repeat bg-contain bg-center 
  bg-blend-overlay 
 
  p-8"
    >
      {/* Main Content */}
      <main className="templateContainer py-18 sm:py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="space-y-10 pt-22">
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              Contact Us
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-md leading-relaxed">
              Email, call, or complete the form to learn how Snappy can solve
              your messaging problem.
            </p>

            <div className="space-y-2 text-base sm:text-lg">
              <p>info@snappy.io</p>
              <p>321-221-231</p>
              <p className="underline font-medium cursor-pointer">
                Customer Support
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
            <section>
              <h3 className="font-bold mb-2">Customer Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </section>

            <section>
              <h3 className="font-bold mb-2">Feedback and Suggestions</h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                We value your feedback and are continuously working to improve
                Snappy. Your input is crucial in shaping the future of Snappy.
              </p>
            </section>

            <section>
              <h3 className="font-bold mb-2">Media Inquiries</h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                For media-related questions or press inquiries, please contact
                us at media@snappyapp.com.
              </p>
            </section>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-100/50 w-full max-w-lg mx-auto lg:ml-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            Get in Touch
          </h2>
          <p className="text-slate-500 mb-6 sm:mb-8">
            You can reach us anytime
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
              />
            </div>

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
              />
            </div>

            <div className="flex gap-2">
              <div className="flex items-center gap-1 px-3 py-3 rounded-xl border border-slate-200 bg-slate-50/50 cursor-pointer shrink-0">
                <span>+62</span>
                <ChevronDown size={14} className="text-slate-400" />
              </div>

              <input
                type="tel"
                placeholder="Phone number"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50"
              />
            </div>

            <div className="relative">
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50/50 resize-none"
              />
              <span className="absolute bottom-3 right-4 text-xs text-slate-400">
                0/120
              </span>
            </div>

            <button className="w-full bg-[#700000] hover:bg-[#700000]/50 text-white font-bold py-4 rounded-full transition-colors mt-4">
              Submit
            </button>

            <p className="text-center text-xs text-slate-500 mt-6 px-2 sm:px-4">
              By contacting us, you agree to our{" "}
              <span className="font-bold text-slate-800 cursor-pointer">
                Terms of service
              </span>{" "}
              and{" "}
              <span className="font-bold text-slate-800 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </form>
        </div>
      </main>

      {/* Full Width Map Section */}
      <div className="w-full h-[400px] shadow-lg overflow-hidden transition-all duration-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1633456789012!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact2;
