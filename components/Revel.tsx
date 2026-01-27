"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ShoppingBag, ArrowRight, Scan, Plus } from "lucide-react";

// --- Types & Data ---

interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  currency: string;
  x: number; // Percentage from left
  y: number; // Percentage from top
  image: string;
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: "01",
    name: "Velluto Sofa",
    subtitle: "Emerald Edition",
    price: 1850,
    currency: "$",
    x: 48,
    y: 65,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500",
    description: "Rich velvet texture meeting mid-century design.",
  },
  {
    id: "02",
    name: "Orbital Lamp",
    subtitle: "Matte Series",
    price: 420,
    currency: "$",
    x: 78,
    y: 32,
    image:
      "https://images.unsplash.com/photo-1513506003013-953a45dc3815?auto=format&fit=crop&q=80&w=500",
    description: "Adjustable arc of light with marble base.",
  },
  {
    id: "03",
    name: "Abstract No. 7",
    subtitle: "Limited Print",
    price: 125,
    currency: "$",
    x: 25,
    y: 28,
    image:
      "https://images.unsplash.com/photo-1549887552-93f8efb8725d?auto=format&fit=crop&q=80&w=500",
    description: "Warm earth tones captured in fluid motion.",
  },
  {
    id: "04",
    name: "Kyoto Low Table",
    subtitle: "Solid Oak",
    price: 890,
    currency: "$",
    x: 52,
    y: 85,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=500",
    description: "Inspired by Japanese tea ceremonies.",
  },
];

const LOOK_IMAGE =
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=2000";

// --- Components ---

const ProductCard = ({ product }: { product: Product }) => {
  // Determine if card should open to left or right based on X position
  const isRightSide = product.x > 50;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`absolute z-50 w-64 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden
        ${isRightSide ? "right-full mr-4" : "left-full ml-4"}
        -top-12 origin-${isRightSide ? "right" : "left"}
      `}
    >
      {/* Image Header */}
      <div className="h-32 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 left-3 z-20">
          <span className="text-[10px] font-bold tracking-widest text-[#d4af37] uppercase bg-black/50 backdrop-blur-md px-2 py-1 rounded-sm">
            In Stock
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-white font-serif text-lg leading-tight">
              {product.name}
            </h3>
            <p className="text-white/50 text-xs">{product.subtitle}</p>
          </div>
          <span className="text-[#d4af37] font-serif italic">
            {product.currency}
            {product.price}
          </span>
        </div>

        <p className="text-white/70 text-xs leading-relaxed mb-4 border-t border-white/10 pt-3 mt-2">
          {product.description}
        </p>

        <button className="w-full bg-white text-black py-2 text-xs font-bold tracking-widest uppercase hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2 rounded-sm group">
          Add to Cart
          <Plus
            size={14}
            className="group-hover:rotate-90 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default function Revel() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Mouse tracking for flashlight effect
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const activeProduct = PRODUCTS.find((p) => p.id === activeId);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // If a product is active, we override the mouse position to center on the product
  useEffect(() => {
    if (activeProduct && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const targetX = (activeProduct.x / 100) * rect.width;
      const targetY = (activeProduct.y / 100) * rect.height;
      mouseX.set(targetX);
      mouseY.set(targetY);
    }
  }, [activeProduct]);

  return (
    <div className="min-h-screen bg-[#fff] text-white font-sans flex items-center justify-center p-4 md:p-8">
      {/* Main Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] bg-[#111] shadow-2xl border border-white/5 rounded-sm select-none"
      >
        {/* --- Layer 1: The Dimmed "Ambient" Image --- */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-sm">
          <img
            src={LOOK_IMAGE}
            alt="Ambient"
            className="w-full h-full object-cover opacity-30 filter grayscale-[50%] blur-[1px] transition-all duration-700"
            style={{
              transform: activeId ? "scale(1.02)" : "scale(1)",
            }}
          />
        </div>

        {/* --- Layer 2: The "Flashlight" Reveal Layer --- */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-sm"
          style={{
            maskImage: useTransform(
              [smoothX, smoothY],
              ([x, y]) =>
                `radial-gradient(circle 250px at ${x}px ${y}px, black, transparent)`,
            ),
            WebkitMaskImage: useTransform(
              [smoothX, smoothY],
              ([x, y]) =>
                `radial-gradient(circle 250px at ${x}px ${y}px, black, transparent)`,
            ),
          }}
        >
          <img
            src={LOOK_IMAGE}
            alt="Reveal"
            className="w-full h-full object-cover filter contrast-110 saturate-110"
            style={{
              transform: activeId ? "scale(1.02)" : "scale(1)",
              transition: "transform 0.7s ease",
            }}
          />
        </motion.div>

        {/* --- Interactive Pins & Tooltips --- */}
        <div className="absolute inset-0 z-30">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="absolute w-0 h-0 flex items-center justify-center"
              style={{ left: `${product.x}%`, top: `${product.y}%` }}
              onMouseEnter={() => setActiveId(product.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Interaction Wrapper */}
              <div className="relative group cursor-pointer p-6 -m-6 flex items-center justify-center">
                {/* Outer Glow Ring */}
                <div
                  className={`absolute w-8 h-8 rounded-full blur-md bg-[#d4af37] opacity-0 transition-opacity duration-300 ${activeId === product.id ? "opacity-40 scale-150" : "group-hover:opacity-30"}`}
                />

                {/* The Pin */}
                <div
                  className={`relative w-8 h-8 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]
                    ${activeId === product.id ? "bg-[#d4af37] border-[#d4af37] text-black scale-110" : "bg-white/10 text-white hover:bg-white/20"}
                  `}
                >
                  {activeId === product.id ? (
                    <Scan size={14} strokeWidth={2.5} />
                  ) : (
                    <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]" />
                  )}
                </div>

                {/* Tooltip Card */}
                <AnimatePresence>
                  {activeId === product.id && <ProductCard product={product} />}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* --- UI Overlays --- */}

        {/* Title Top Left */}
        <div className="absolute top-8 left-8 z-20 pointer-events-none mix-blend-difference">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">
              Curated Edit
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-wide">
            Nocturne <span className="italic text-white/50">Living</span>
          </h1>
        </div>

        {/* Instructions Bottom Left */}
        <div
          className={`absolute bottom-8 left-8 z-20 transition-opacity duration-500 pointer-events-none ${activeId ? "opacity-0" : "opacity-100"}`}
        >
          <p className="text-sm font-mono text-white/40 flex items-center gap-2">
            <Scan size={16} /> HOVER TO INSPECT
          </p>
        </div>

        {/* Cart Icon Top Right */}
        <div className="absolute top-8 right-8 z-30">
          <button className="flex items-center gap-3 group">
            <span className="hidden md:block text-xs font-bold tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
              Cart (0)
            </span>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
              <ShoppingBag size={16} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

/// hover section
