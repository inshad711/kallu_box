// "use client";
// import React, { useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ChevronDown,
//   Package,
//   Menu,
//   X,
// } from "lucide-react";

// const Link = ({ href, children, className }) => {
//   return (
//     <a href={href} className={className} onClick={(e) => e.preventDefault()}>
//       {children}
//     </a>
//   );
// };
// // ---------------------------------------

// export default function MainHeader() {
//   return (
//     <div className="bg-gray-50">
//       <Header />
//     </div>
//   );
// }

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* 1. Top Contact Bar */}
//       <div className="bg-[#3d5a6c] text-white py-3 px-6 border-b border-[#4d6a7c]">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
//           {/* Mobile-friendly stacking */}
//           <div className="hidden md:flex items-center gap-6 w-full justify-center">
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <Phone className="w-4 h-4" />
//               <span>(+654) 6478909</span>
//             </div>
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <Mail className="w-4 h-4" />
//               <span>mail@packga.id</span>
//             </div>
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <MapPin className="w-4 h-4" />
//               <span>London Eye, London</span>
//             </div>
//           </div>

//           {/* Mobile Contact View (Simplified) */}
//           <div className="md:hidden flex justify-center gap-6 w-full">
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <span>Call Us</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4" />
//               <span>Email</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gradient-to-b from-[#3d5a6c] from-50% to-gray-50 to-50% px-6 pb-6 pt-2">
//         <div className="max-w-7xl mx-auto">
//           <div className="bg-white rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-xl relative">
//             {/* Logo Section */}
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3d7a8a] rounded-full flex items-center justify-center shrink-0">
//                 <Package className="w-5 h-5 md:w-6 md:h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-[#3d5a6c] font-bold text-lg md:text-xl leading-tight">
//                   Packeqa
//                 </h1>
//                 <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-medium">
//                   Packaging Company
//                 </p>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-8">
//               <Link
//                 href="/"
//                 className="text-[#3d5a6c] font-bold hover:text-[#3d7a8a] transition"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-gray-500 font-medium hover:text-[#3d7a8a] transition"
//               >
//                 About Us
//               </Link>

//               {/* Dropdown 1 */}
//               <div className="relative group">
//                 <button className="text-gray-500 font-medium hover:text-[#3d7a8a] transition flex items-center gap-1">
//                   Services
//                   <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
//                 </button>
//                 {/* Dropdown Menu */}
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Box Manufacturing
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Custom Design
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Logistics
//                   </Link>
//                 </div>
//               </div>

//               {/* Dropdown 2 */}
//               <div className="relative group">
//                 <button className="text-gray-500 font-medium hover:text-[#3d7a8a] transition flex items-center gap-1">
//                   Pages
//                   <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
//                 </button>
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Team
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Pricing
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     FAQ
//                   </Link>
//                 </div>
//               </div>
//             </nav>

//             {/* Contact Button & Mobile Toggle */}
//             <div className="flex items-center gap-4">
//               <Link
//                 href="/contact"
//                 className="hidden md:block bg-[#3d7a8a] text-white px-7 py-2.5 rounded-full font-medium hover:bg-[#2f5f6e] transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
//               >
//                 Contact Us
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden text-[#3d5a6c]"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
//           <Link href="/" className="text-[#3d5a6c] font-bold">
//             Home
//           </Link>
//           <Link href="/about" className="text-gray-600">
//             About Us
//           </Link>
//           <Link href="/services" className="text-gray-600">
//             Services
//           </Link>
//           <Link href="/pages" className="text-gray-600">
//             Pages
//           </Link>
//           <Link
//             href="/contact"
//             className="bg-[#3d7a8a] text-white px-6 py-2 rounded-full text-center mt-2"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ChevronDown,
//   Package,
//   Menu,
//   X,
// } from "lucide-react";
// import Image from "next/image";

// // 1. Define the interface for the Link props
// interface LinkProps {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
// }

// const Link = ({ href, children, className }: LinkProps) => {
//   return (
//     <a
//       href={href}
//       className={className}
//       // 2. Type the event handler
//       onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
//     >
//       {children}
//     </a>
//   );
// };

// // ---------------------------------------

// export default function MainHeader() {
//   return (
//     <div className="bg-gray-50">
//       <Header />
//     </div>
//   );
// }

// function Header() {
//   // 3. Explicitly type the state (optional but good practice)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* 1. Top Contact Bar */}
//       {/* <div className="bg-[#700000] text-white py-3 px-6 border-b border-[#4d6a7c]"> */}
//       <div className="bg-[#700000] text-white py-3 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
//           {/* Mobile-friendly stacking */}
//           <div className="hidden md:flex items-center gap-x-12 w-full justify-center">
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <Phone className="w-4 h-4" />
//               <span>(+654) 6478909</span>
//             </div>
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <Mail className="w-4 h-4" />
//               <span>mail@packga.id</span>
//             </div>
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <MapPin className="w-4 h-4" />
//               <span>London Eye, London</span>
//             </div>
//           </div>

//           {/* Mobile Contact View (Simplified) */}
//           <div className="md:hidden flex justify-center gap-6 w-full">
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <span>Call Us</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4" />
//               <span>Email</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gradient-to-b from-[#700000] from-50% to-white to-50%  pb-0 pt-1">
//         <div className="templateContainer">
//           <div className="bg-white rounded-full px-4 md:px-8 py-3 md:py-3 flex items-center justify-between shadow-sm relative">
//             {/* Logo Section */}
//             {/* <div className="flex items-center gap-3">
//               <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3d7a8a] rounded-full flex items-center justify-center shrink-0">
//                 <Package className="w-5 h-5 md:w-6 md:h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-[#3d5a6c] font-bold text-lg md:text-xl leading-tight">
//                   Packeqa
//                 </h1>
//                 <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-medium">
//                   Packaging Company
//                 </p>
//               </div>
//             </div> */}
//             <div className=" flex items-center justify-center shrink-0">
//               {/* <Image
//                 src="/logo/logo_img.webp"
//                 alt="Packeqa Logo"
//                 width={28}
//                 height={28}
//                 className="object-contain w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
//               /> */}
//               <Image
//                 src="/logo/KALLU-BOX-LOGO.png"
//                 alt="Packeqa Logo"
//                 width={28}
//                 height={28}
//                 className="object-contain w-[100px] h-[40px] md:w-[48px] md:h-[48px]"
//               />
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-8">
//               <Link
//                 href="/"
//                 className="text-[#3d5a6c] font-bold hover:text-[#3d7a8a] transition"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-gray-500 font-medium hover:text-[#3d7a8a] transition"
//               >
//                 About Us
//               </Link>

//               {/* Dropdown 1 */}
//               <div className="relative group">
//                 <button className="text-gray-500 font-medium hover:text-[#3d7a8a] transition flex items-center gap-1">
//                   Services
//                   <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
//                 </button>
//                 {/* Dropdown Menu */}
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Box Manufacturing
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Custom Design
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Logistics
//                   </Link>
//                 </div>
//               </div>

//               {/* Dropdown 2 */}
//               <div className="relative group">
//                 <button className="text-gray-500 font-medium hover:text-[#3d7a8a] transition flex items-center gap-1">
//                   Pages
//                   <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
//                 </button>
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Team
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Pricing
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     FAQ
//                   </Link>
//                 </div>
//               </div>
//             </nav>

//             {/* Contact Button & Mobile Toggle */}
//             <div className="flex items-center gap-4">
//               {/* <Link
//                 href="/contact"
//                 className="hidden md:block bg-[#700000] text-white px-7 py-2.5 rounded-full font-medium hover:bg-[#700000]/80 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
//               >
//                 Contact Us
//               </Link> */}
//               <Link
//                 href="/contact"
//                 className="hidden md:block bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-7 py-2.5 rounded-full font-medium transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 hover:opacity-90"
//               >
//                 Contact Us
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden text-[#3d5a6c]"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
//           <Link href="/" className="text-[#3d5a6c] font-bold">
//             Home
//           </Link>
//           <Link href="/about" className="text-gray-600">
//             About Us
//           </Link>
//           <Link href="/services" className="text-gray-600">
//             Services
//           </Link>
//           <Link href="/pages" className="text-gray-600">
//             Pages
//           </Link>
//           <Link
//             href="/contact"
//             className="bg-[#700000] text-white px-6 py-2 rounded-full text-center mt-2"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";
// import React, { useState } from "react";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ChevronDown,
//   Package,
//   Menu,
//   X,
// } from "lucide-react";
// import Image from "next/image";

// // 1. Define the interface for the Link props
// interface LinkProps {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
// }

// const Link = ({ href, children, className }: LinkProps) => {
//   return (
//     <a
//       href={href}
//       className={className}
//       // 2. Type the event handler
//       onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}
//     >
//       {children}
//     </a>
//   );
// };

// // ---------------------------------------

// export default function MainHeader() {
//   return (
//     <div className="bg-gray-50">
//       <Header />
//     </div>
//   );
// }

// function Header() {
//   // 3. Explicitly type the state (optional but good practice)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* 1. Top Contact Bar */}

//       <div className="bg-[#700000] text-white py-3 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs md:text-sm">
//           {/* Mobile-friendly stacking */}
//           <div className="hidden md:flex items-center gap-x-12 w-full justify-center">
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <Phone className="w-4 h-4" />
//               <span>(+654) 6478909</span>
//             </div>
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <Mail className="w-4 h-4" />
//               <span>mail@packga.id</span>
//             </div>
//             <div className="flex items-center gap-2 hover:text-[#a8d0db] transition-colors cursor-pointer">
//               <MapPin className="w-4 h-4" />
//               <span>London Eye, London</span>
//             </div>
//           </div>

//           {/* Mobile Contact View (Simplified) */}
//           <div className="md:hidden flex justify-center gap-6 w-full">
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <span>Call Us</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4" />
//               <span>Email</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gradient-to-b from-[#700000] from-50% to-white to-50%  pb-0 pt-1">
//         <div className="templateContainer">
//           <div className="bg-white rounded-full px-4 md:px-8 py-3 md:py-3 flex items-center justify-between shadow-sm relative">
//             {/* Logo  */}

//             <div className="flex items-center justify-start shrink-0">
//               <Image
//                 src="/logo/e18da22c-b1a2-454a-ba30-a0094f99529b.png"
//                 alt="Packeqa Logo"
//                 width={180}
//                 height={60}
//                 className="object-contain w-[150px] h-auto md:w-[180px]"
//               />
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-8">
//               <Link
//                 href="/"
//                 className="text-[#3d5a6c] font-bold hover:text-[#3d7a8a] transition"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/about"
//                 className="text-gray-500 font-medium hover:text-[#3d7a8a] transition"
//               >
//                 About Us
//               </Link>

//               {/* Dropdown 1 */}
//               <div className="relative group">
//                 <button className="text-gray-500 font-medium hover:text-[#3d7a8a] transition flex items-center gap-1">
//                   Services
//                   <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
//                 </button>
//                 {/* Dropdown Menu */}
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Box Manufacturing
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Custom Design
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Logistics
//                   </Link>
//                 </div>
//               </div>

//               {/* Dropdown 2 */}
//               <div className="relative group">
//                 <button className="text-gray-500 font-medium hover:text-[#3d7a8a] transition flex items-center gap-1">
//                   Pages
//                   <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
//                 </button>
//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden border border-gray-100">
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Team
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     Pricing
//                   </Link>
//                   <Link
//                     href="#"
//                     className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#3d7a8a]"
//                   >
//                     FAQ
//                   </Link>
//                 </div>
//               </div>
//             </nav>

//             {/* Contact Button & Mobile Toggle */}
//             <div className="flex items-center gap-4">
//               <Link
//                 href="/contact"
//                 className="hidden md:block bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-7 py-2.5 rounded-full font-medium transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 hover:opacity-90"
//               >
//                 Contact Us
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 className="lg:hidden text-[#3d5a6c]"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="w-6 h-6" />
//                 ) : (
//                   <Menu className="w-6 h-6" />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
//           <Link href="/" className="text-[#3d5a6c] font-bold">
//             Home
//           </Link>
//           <Link href="/about" className="text-gray-600">
//             About Us
//           </Link>
//           <Link href="/services" className="text-gray-600">
//             Services
//           </Link>
//           <Link href="/pages" className="text-gray-600">
//             Pages
//           </Link>
//           <Link
//             href="/contact"
//             className="bg-[#700000] text-white px-6 py-2 rounded-full text-center mt-2"
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Phone, Mail, MapPin, ChevronDown, Menu, X } from "lucide-react";

// export default function MainHeader() {
//   return (
//     <div className="bg-gray-50">
//       <Header />
//     </div>
//   );
// }

// function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="w-full relative z-50">
//       {/* Top Contact Bar */}
//       <div className="bg-[#700000] text-white py-3 px-6">
//         <div className="max-w-7xl mx-auto flex justify-center text-xs md:text-sm">
//           <div className="hidden md:flex items-center gap-12">
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <span>(+654) 6478909</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="w-4 h-4" />
//               <span>mail@packga.id</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <MapPin className="w-4 h-4" />
//               <span>London Eye, London</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <div className="bg-gradient-to-b from-[#700000] from-50% to-white to-50% pt-1">
//         {/* <div className="bg-gradient-to-b from-[#700000] from-50% to-transparent to-50% pt-1 -mb-12 relative z-20"> */}
//         <div className="templateContainer">
//           <div className="bg-white rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
//             {/* Logo */}
//             <Link href="/" className="shrink-0">
//               <Image
//                 src="/logo/e18da22c-b1a2-454a-ba30-a0094f99529b.png"
//                 alt="Packeqa Logo"
//                 width={180}
//                 height={60}
//                 className="object-contain w-[150px] md:w-[180px]"
//               />
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex cursor-pointer items-center gap-8">
//               <Link href="/" className=" text-[#3d5a6c]">
//                 Home
//               </Link>

//               <Link
//                 href="/about"
//                 className="text-gray-500 hover:text-[#3d7a8a]"
//               >
//                 About Us
//               </Link>

//               {/* Services Dropdown */}
//               <div className="relative group">
//                 <button className="flex items-center gap-1 text-gray-500 hover:text-[#3d7a8a]">
//                   Products
//                   <ChevronDown className="w-3 h-3 transition group-hover:rotate-180" />
//                 </button>

//                 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
//                   <Link
//                     href="/services/box"
//                     className="block px-4 py-2 hover:bg-gray-50"
//                   >
//                     Box Manufacturing
//                   </Link>
//                   <Link
//                     href="/services/design"
//                     className="block px-4 py-2 hover:bg-gray-50"
//                   >
//                     Custom Design
//                   </Link>
//                   <Link
//                     href="/services/logistics"
//                     className="block px-4 py-2 hover:bg-gray-50"
//                   >
//                     Logistics
//                   </Link>
//                 </div>
//               </div>
//             </nav>

//             {/* Right Side */}
//             <div className="flex items-center gap-4">
//               <Link
//                 href="/contact"
//                 className="hidden md:block bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-7 py-2.5 rounded-full shadow hover:opacity-90"
//               >
//                 Contact Us
//               </Link>

//               {/* Mobile Toggle */}
//               <button
//                 className="lg:hidden"
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               >
//                 {isMobileMenuOpen ? <X /> : <Menu />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4">
//           <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
//             Home
//           </Link>
//           <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
//             About Us
//           </Link>
//           <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
//             Services
//           </Link>
//           <Link href="/pages" onClick={() => setIsMobileMenuOpen(false)}>
//             Pages
//           </Link>
//           <Link
//             href="/contact"
//             className="bg-[#700000] text-white px-6 py-2 rounded-full text-center"
//             onClick={() => setIsMobileMenuOpen(false)}
//           >
//             Contact Us
//           </Link>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronDown, Menu, X } from "lucide-react";

export default function MainHeader() {
  return (
    // FIX 1: Changed bg-gray-50 to bg-transparent to avoid blocking the hero background
    <div className="bg-transparent">
      <Header />
    </div>
  );
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Top Contact Bar */}
      <div className="bg-[#700000] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center  text-[10px] md:text-sm">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 md:gap-12">
            <div className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 md:w-4 md:h-4" />{" "}
              {/* Adjusted icon size */}
              <span>(+654) 6478909</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span>mail@packga.id</span>
            </div>

            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
              <span>London Eye, London</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#700000] from-50% to-transparent to-50% pt-1 -mb-12 relative z-20">
        <div className="px-4 md:px-4">
          <div className="bg-white rounded-full px-4 py-3 flex items-center justify-between shadow-sm max-w-7xl mx-auto">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo/e18da22c-b1a2-454a-ba30-a0094f99529b.png"
                alt="Packeqa Logo"
                width={180}
                height={60}
                className="object-contain w-[150px] md:w-[180px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex cursor-pointer items-center gap-8">
              <Link href="/" className=" text-[#3d5a6c]">
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-500 hover:text-[#3d7a8a]"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              {/* <div className="relative group">
                <button className="flex items-center gap-1 text-gray-500 hover:text-[#3d7a8a]">
                  Products
                  <ChevronDown className="w-3 h-3 transition group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                  <Link
                    href="/services/box"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Box Manufacturing
                  </Link>
                  <Link
                    href="/services/design"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Custom Design
                  </Link>
                  <Link
                    href="/services/logistics"
                    className="block px-4 py-2 hover:bg-gray-50"
                  >
                    Logistics
                  </Link>
                </div>
              </div> */}
              <Link
                href="/products"
                className="text-gray-500 hover:text-[#3d7a8a]"
              >
                Products
              </Link>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:block bg-gradient-to-r from-[#700000] to-[#3b0000] text-white px-7 py-2.5 rounded-full shadow hover:opacity-90"
              >
                Contact Us
              </Link>

              {/* Mobile Toggle */}
              <button
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 z-50">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="/pages" onClick={() => setIsMobileMenuOpen(false)}>
            Pages
          </Link>
          <Link
            href="/contact"
            className="bg-[#700000] text-white px-6 py-2 rounded-full text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
