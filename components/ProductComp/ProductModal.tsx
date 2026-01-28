// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Send } from "lucide-react";
// import Image from "next/image";

// interface ProductModalProps {
//   product: {
//     id: number;
//     name: string;
//     image: string;
//     gallery: string[];
//     itemCode: string;
//   };
//   onClose: () => void;
// }

// export default function ProductModal({ product, onClose }: ProductModalProps) {
//   const images =
//     product.gallery?.length > 0 ? product.gallery : [product.image];
//   const [imgIndex, setImgIndex] = useState(0);

//   const nextImg = () => setImgIndex((prev) => (prev + 1) % images.length);
//   const prevImg = () =>
//     setImgIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/60 backdrop-blur-md"
//       />

//       {/* Modal Box */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0, y: 40 }}
//         animate={{ scale: 1, opacity: 1, y: 0 }}
//         exit={{ scale: 0.9, opacity: 0, y: 40 }}
//         transition={{ type: "spring", damping: 25, stiffness: 300 }}
//         className="relative w-full max-w-6xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full max-h-[850px]"
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 z-50 p-2 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-full transition-all duration-300"
//         >
//           <X size={24} />
//         </button>

//         {/* LEFT SIDE: Product Details & Slider */}
//         <div className="w-full md:w-1/2 bg-[#fcfcfc] p-8 md:p-12 flex flex-col border-r border-gray-100">
//           <div className="flex-1 flex flex-col justify-center">
//             <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={imgIndex}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="relative w-full h-full"
//                 >
//                   <Image
//                     src={images[imgIndex]}
//                     alt={product.name}
//                     fill
//                     className="object-cover p-2 rounded-3xl"
//                     priority
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {images.length > 1 && (
//                 <div className="absolute inset-0 flex items-center justify-between px-4">
//                   <button
//                     onClick={prevImg}
//                     className="p-3 bg-white/90 rounded-full shadow-lg hover:bg-white text-gray-800 transition-transform active:scale-90"
//                   >
//                     <ChevronLeft size={20} />
//                   </button>
//                   <button
//                     onClick={nextImg}
//                     className="p-3 bg-white/90 rounded-full shadow-lg hover:bg-white text-gray-800 transition-transform active:scale-90"
//                   >
//                     <ChevronRight size={20} />
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Thumbnail Indicator */}
//             {images.length > 1 && (
//               <div className="flex gap-2 mt-4 justify-center">
//                 {images.map((_, i) => (
//                   <div
//                     key={i}
//                     className={`h-1.5 rounded-full transition-all duration-300 ${i === imgIndex ? "w-8 bg-[#700000]" : "w-2 bg-gray-200"}`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>

//           <div className="mt-8">
//             <span className="inline-block px-3 py-1 bg-red-50 text-[#700000] text-xs font-bold rounded-full mb-3 tracking-widest uppercase">
//               Product ID: {product.itemCode}
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               {product.name}
//             </h2>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Contact Form */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white">
//           <div className="max-w-md mx-auto">
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-800">Send Inquiry</h3>
//               <p className="text-gray-500 mt-2">
//                 Fill out the form below and our team will get back to you with
//                 pricing and details.
//               </p>
//             </div>

//             <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700 ml-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#700000] outline-none transition-all"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-1.5">
//                   <label className="text-sm font-semibold text-gray-700 ml-1">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#700000] outline-none transition-all"
//                     placeholder="name@email.com"
//                   />
//                 </div>
//                 <div className="space-y-1.5">
//                   <label className="text-sm font-semibold text-gray-700 ml-1">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#700000] outline-none transition-all"
//                     placeholder="+91 00000 00000"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700 ml-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   readOnly
//                   value={`Ordering: ${product.name} (${product.itemCode})`}
//                   className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-100 text-gray-600 cursor-not-allowed outline-none"
//                 />
//               </div>

//               <div className="space-y-1.5">
//                 <label className="text-sm font-semibold text-gray-700 ml-1">
//                   Requirements
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-red-50 focus:border-[#700000] outline-none transition-all resize-none"
//                   placeholder="Quantity, customization details, etc..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-5 bg-[#700000] hover:bg-[#500000] text-white font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-red-900/20 flex items-center justify-center gap-3 group active:scale-[0.98]"
//               >
//                 <span>Submit Order Request</span>
//                 <Send
//                   size={18}
//                   className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

////////// new

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Send } from "lucide-react";
// import Image from "next/image";

// interface ProductModalProps {
//   product: {
//     id: number;
//     name: string;
//     image: string;
//     gallery: string[];
//     itemCode: string;
//   };
//   onClose: () => void;
// }

// export default function ProductModal({ product, onClose }: ProductModalProps) {
//   const images =
//     product.gallery?.length > 0 ? product.gallery : [product.image];
//   const [imgIndex, setImgIndex] = useState(0);

//   const nextImg = () => setImgIndex((prev) => (prev + 1) % images.length);
//   const prevImg = () =>
//     setImgIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/70 backdrop-blur-md"
//       />

//       {/* Modal Box */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="relative w-full max-w-5xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full md:h-[90vh]"
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 z-50 p-2 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-all"
//         >
//           <X size={24} />
//         </button>

//         {/* LEFT SIDE: Image Section & Product Info */}
//         <div className="w-full md:w-1/2 bg-[#f8f8f8] flex flex-col h-full border-r border-gray-100">
//           {/* Product Name and Code (Always Visible at bottom of left side) */}
//           <div className="bg-white p-8 border-t border-gray-100">
//             <span className="text-[#700000] font-bold text-sm tracking-widest uppercase mb-1 block">
//               Item Code: {product.itemCode}
//             </span>
//             <h2 className="text-3xl font-bold text-gray-900 leading-tight">
//               {product.name}
//             </h2>
//           </div>
//           {/* Main Image Slider */}
//           <div className="flex-1 relative min-h-[300px] flex items-center justify-center p-6">
//             <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-sm">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={imgIndex}
//                   initial={{ opacity: 0, x: 10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -10 }}
//                   className="relative w-full h-full"
//                 >
//                   <Image
//                     src={images[imgIndex]}
//                     alt={product.name}
//                     fill
//                     className="object-cover p-4"
//                     priority
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {images.length > 1 && (
//                 <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
//                   <button
//                     onClick={prevImg}
//                     className="p-3 bg-white/90 rounded-full shadow-md hover:bg-white pointer-events-auto transition-transform active:scale-90"
//                   >
//                     <ChevronLeft size={24} className="text-gray-800" />
//                   </button>
//                   <button
//                     onClick={nextImg}
//                     className="p-3 bg-white/90 rounded-full shadow-md hover:bg-white pointer-events-auto transition-transform active:scale-90"
//                   >
//                     <ChevronRight size={24} className="text-gray-800" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mini Gallery Thumbnails */}
//           {images.length > 1 && (
//             <div className="px-8 pb-4">
//               <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide justify-center">
//                 {images.map((img, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setImgIndex(i)}
//                     className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
//                       i === imgIndex
//                         ? "border-[#700000] scale-110 shadow-md"
//                         : "border-transparent opacity-60"
//                     }`}
//                   >
//                     <Image
//                       src={img}
//                       alt="thumb"
//                       fill
//                       className="object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* RIGHT SIDE: Contact Form */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col justify-center">
//           <div className="max-w-md mx-auto w-full">
//             <div className="mb-8">
//               <h3 className="text-2xl font-bold text-gray-800">
//                 Product Inquiry
//               </h3>
//               <p className="text-gray-500 mt-2">
//                 Interested in this item? Send us a message and we'll get back to
//                 you.
//               </p>
//             </div>

//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                     placeholder="+91 00000 00000"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   readOnly
//                   value={`Request for ${product.name} (#${product.itemCode})`}
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-gray-100 text-gray-500 cursor-not-allowed outline-none"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all resize-none"
//                   placeholder="Tell us about your quantity needs..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 bg-[#700000] hover:bg-[#500000] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group"
//               >
//                 <span>Send Inquiry</span>
//                 <Send
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

//////new

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Send } from "lucide-react";
// import Image from "next/image";

// interface ProductModalProps {
//   product: {
//     id: number;
//     name: string;
//     image: string;
//     gallery: string[];
//     itemCode: string;
//   };
//   onClose: () => void;
// }

// export default function ProductModal({ product, onClose }: ProductModalProps) {
//   const images =
//     product.gallery?.length > 0 ? product.gallery : [product.image];
//   const [imgIndex, setImgIndex] = useState(0);

//   const nextImg = () => setImgIndex((prev) => (prev + 1) % images.length);
//   const prevImg = () =>
//     setImgIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/70 backdrop-blur-md"
//       />

//       {/* Modal Box */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="relative w-full max-w-5xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full md:h-[90vh]"
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 z-50 p-2 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-all"
//         >
//           <X size={24} />
//         </button>

//         {/* LEFT SIDE: Image Section ONLY */}
//         <div className="w-full md:w-1/2 bg-[#f8f8f8] flex flex-col h-full border-r border-gray-100">
//           {/* Main Image Slider */}
//           <div className="flex-1 relative min-h-[300px] flex items-center justify-center p-6">
//             <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-sm">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={imgIndex}
//                   initial={{ opacity: 0, x: 10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -10 }}
//                   className="relative w-full h-full"
//                 >
//                   <Image
//                     src={images[imgIndex]}
//                     alt={product.name}
//                     fill
//                     className="object-cover p-3 rounded-3xl"
//                     priority
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {images.length > 1 && (
//                 <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
//                   <button
//                     onClick={prevImg}
//                     className="p-3 bg-white/90 rounded-full shadow-md hover:bg-white pointer-events-auto transition-transform active:scale-90"
//                   >
//                     <ChevronLeft size={24} className="text-gray-800" />
//                   </button>
//                   <button
//                     onClick={nextImg}
//                     className="p-3 bg-white/90 rounded-full shadow-md hover:bg-white pointer-events-auto transition-transform active:scale-90"
//                   >
//                     <ChevronRight size={24} className="text-gray-800" />
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mini Gallery Thumbnails */}
//           {images.length > 1 && (
//             <div className="px-8 pb-8">
//               <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide justify-center">
//                 {images.map((img, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setImgIndex(i)}
//                     className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
//                       i === imgIndex
//                         ? "border-[#700000] scale-110 shadow-md"
//                         : "border-transparent opacity-60"
//                     }`}
//                   >
//                     <Image
//                       src={img}
//                       alt="thumb"
//                       fill
//                       className="object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* RIGHT SIDE: Product Info & Contact Form */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
//           <div className="max-w-md mx-auto w-full">
//             {/* Product Name and Code (Moved here from left side) */}
//             <div className="mb-8 pb-6 border-b border-gray-100">
//               <span className="text-[#700000] font-bold text-sm tracking-widest uppercase mb-1 block">
//                 Item Code: {product.itemCode}
//               </span>
//               <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//                 {product.name}
//               </h2>
//             </div>

//             <div className="mb-8">
//               <h3 className="text-xl font-bold text-gray-800">
//                 Product Inquiry
//               </h3>
//               <p className="text-gray-500 mt-2">
//                 Interested in this item? Send us a message and we'll get back to
//                 you.
//               </p>
//             </div>

//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                     placeholder="+91 00000 00000"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   readOnly
//                   value={`Request for: ${product.name} (#${product.itemCode})`}
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-gray-100 text-gray-500 cursor-not-allowed outline-none"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all resize-none"
//                   placeholder="Tell us about your quantity needs..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 bg-[#700000] hover:bg-[#500000] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group"
//               >
//                 <span>Send Inquiry</span>
//                 <Send
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
////////////new

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Send } from "lucide-react";
// import Image from "next/image";

// interface ProductModalProps {
//   product: {
//     id: number;
//     name: string;
//     image: string;
//     gallery: string[];
//     itemCode: string;
//   };
//   onClose: () => void;
// }

// export default function ProductModal({ product, onClose }: ProductModalProps) {
//   const images =
//     product.gallery?.length > 0 ? product.gallery : [product.image];
//   const [imgIndex, setImgIndex] = useState(0);
//   // State to track hover
//   const [isHovered, setIsHovered] = useState(false);

//   const nextImg = () => setImgIndex((prev) => (prev + 1) % images.length);
//   const prevImg = () =>
//     setImgIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={onClose}
//         className="absolute inset-0 bg-black/70 backdrop-blur-md"
//       />

//       {/* Modal Box */}
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         className="relative w-full max-w-5xl bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row h-full md:h-[90vh]"
//       >
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 z-50 p-2 bg-gray-100 hover:bg-red-600 hover:text-white rounded-full transition-all"
//         >
//           <X size={24} />
//         </button>

//         {/* LEFT SIDE: Image Section */}
//         <div
//           className="w-full md:w-1/2 bg-[#f8f8f8] flex flex-col h-full border-r border-gray-100"
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           {/* Main Image Slider */}
//           <div className="flex-1 relative min-h-[300px] flex items-center justify-center p-6">
//             <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-sm">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={imgIndex}
//                   initial={{ opacity: 0, x: 10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -10 }}
//                   className="relative w-full h-full"
//                 >
//                   <Image
//                     src={images[imgIndex]}
//                     alt={product.name}
//                     fill
//                     className="object-cover p-3 rounded-3xl"
//                     priority
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {/* Navigation Buttons - Only visible on hover */}
//               <AnimatePresence>
//                 {images.length > 1 && isHovered && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                     className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none"
//                   >
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         prevImg();
//                       }}
//                       className="p-3 bg-white/90 cursor-pointer rounded-full shadow-md hover:bg-white pointer-events-auto transition-transform active:scale-90"
//                     >
//                       <ChevronLeft size={24} className="text-gray-800" />
//                     </button>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         nextImg();
//                       }}
//                       className="p-3 bg-white/90 cursor-pointer rounded-full shadow-md hover:bg-white pointer-events-auto transition-transform active:scale-90"
//                     >
//                       <ChevronRight size={24} className="text-gray-800" />
//                     </button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Mini Gallery Thumbnails */}
//           {images.length > 1 && (
//             <div className="px-8 pb-8">
//               <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide justify-center">
//                 {images.map((img, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setImgIndex(i)}
//                     className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
//                       i === imgIndex
//                         ? "border-[#700000] scale-110 shadow-md"
//                         : "border-transparent opacity-60"
//                     }`}
//                   >
//                     <Image
//                       src={img}
//                       alt="thumb"
//                       fill
//                       className="object-cover"
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* RIGHT SIDE: Product Info & Contact Form */}
//         <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
//           <div className="max-w-md mx-auto w-full">
//             <div className="mb-8 pb-6 border-b border-gray-100">
//               <span className="text-[#700000] font-bold text-sm tracking-widest uppercase mb-1 block">
//                 Item Code: {product.itemCode}
//               </span>
//               <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//                 {product.name}
//               </h2>
//             </div>

//             <div className="mb-8">
//               <h3 className="text-xl font-bold text-gray-800">
//                 Product Inquiry
//               </h3>
//               <p className="text-gray-500 mt-2">
//                 Interested in this item? Send us a message and we'll get back to
//                 you.
//               </p>
//             </div>

//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                     placeholder="john@example.com"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     required
//                     className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
//                     placeholder="+91 00000 00000"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   readOnly
//                   value={`Request for: ${product.name} (#${product.itemCode})`}
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-gray-100 text-gray-500 cursor-not-allowed outline-none"
//                 />
//               </div>

//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-gray-400 uppercase ml-1">
//                   Message
//                 </label>
//                 <textarea
//                   rows={4}
//                   className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all resize-none"
//                   placeholder="Tell us about your quantity needs..."
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-4 bg-[#700000] hover:bg-[#500000] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group"
//               >
//                 <span>Send Inquiry</span>
//                 <Send
//                   size={18}
//                   className="group-hover:translate-x-1 transition-transform"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

/////new
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Send } from "lucide-react";
import Image from "next/image";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    image: string;
    gallery: string[];
    itemCode: string;
  };
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const images =
    product.gallery?.length > 0 ? product.gallery : [product.image];
  const [imgIndex, setImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImg = () => setImgIndex((prev) => (prev + 1) % images.length);
  const prevImg = () =>
    setImgIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl bg-white rounded-[32px] overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[95vh] md:h-[90vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 cursor-pointer z-50 p-2 bg-gray-100 hover:bg-[#700000] hover:text-white rounded-full transition-all"
        >
          <X size={24} />
        </button>

        {/* LEFT SIDE: Image Section - Reduced to 40% on Desktop */}
        <div
          className="w-full md:w-[45%] bg-[#f8f8f8] flex flex-col h-auto md:h-full border-b md:border-b-0 md:border-r border-gray-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Image Slider - aspect-square ensures it stays square on desktop */}
          <div className="relative aspect-square w-full flex items-center justify-center p-4 md:p-8">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIndex}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[imgIndex]}
                    alt={product.name}
                    fill
                    className="object-cover p-3 rounded-3xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <AnimatePresence>
                {images.length > 1 &&
                  (isHovered ||
                    (typeof window !== "undefined" &&
                      window.innerWidth < 768)) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none z-10"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImg();
                        }}
                        className="p-3 bg-white/90 cursor-pointer rounded-full shadow-md hover:bg-white pointer-events-auto transition-transform active:scale-90"
                      >
                        <ChevronLeft size={24} className="text-gray-800" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImg();
                        }}
                        className="p-3 bg-white/90 cursor-pointer rounded-full shadow-md hover:bg-white pointer-events-auto transition-transform active:scale-90"
                      >
                        <ChevronRight size={24} className="text-gray-800" />
                      </button>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mini Gallery Thumbnails */}
          {images.length > 1 && (
            <div className="px-8 pb-8">
              <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide justify-center">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      i === imgIndex
                        ? "border-[#700000] scale-110 shadow-md"
                        : "border-transparent opacity-60"
                    }`}
                  >
                    <Image
                      src={img}
                      alt="thumb"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: Product Info & Contact Form - Expanded to 60% on Desktop */}
        <div className="w-full md:w-[55%] p-5 md:p-10 md:overflow-y-auto bg-white flex flex-col">
          <div className="max-w-md mx-auto w-full">
            <div className="">
              <span className="text-[#700000] font-bold text-sm tracking-widest uppercase mb-1 block">
                Item Code: {product.itemCode}
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                {product.name}
              </h2>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-medium text-gray-800">
                Product Inquiry
              </h3>
              <p className="text-gray-500 mt-2">
                Interested in this item? Send us a message and we'll get back to
                you.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  readOnly
                  value={`Request for: ${product.name} (#${product.itemCode})`}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-100 bg-gray-100 text-gray-500 cursor-not-allowed outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#700000]/10 focus:border-[#700000] outline-none transition-all resize-none"
                  placeholder="Tell us about your quantity needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#700000] hover:bg-[#500000] text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 group"
              >
                <span>Send Inquiry</span>
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
