"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Jewelry Boxes",
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Note & Coin Boxes",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Chocolate & Sweet Boxes",
    image:
      "https://images.unsplash.com/photo-1599599810962-d0a9b6a9eb5d?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "MDF Boxes",
    image:
      "https://images.unsplash.com/photo-1598655261948-4b1b4c53cecc?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Perfume Boxes",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Trays & Baskets",
    image:
      "https://images.unsplash.com/photo-1595521624864-0c83b29e1b4e?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Gift Boxes",
    image:
      "https://images.unsplash.com/photo-1576183453862-1908e5e1d58a?w=300&h=300&fit=crop",
  },
];

export default function ProductCardsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Adjusted for card width + gap
      const newPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-[#faf9f6] py-20 overflow-hidden">
      <div className="templateContainer">
        {/* Decorative Background Pattern (Subtle Dots) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl  text-gray-900 mb-6 tracking-tight">
              Premium Packaging Solutions
            </h1>

            <div className="flex items-center justify-center gap-4 max-w-lg mx-auto">
              <div className="h-px bg-yellow-600/30 flex-1" />
              <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs sm:text-sm">
                Explore Our Collections
              </p>
              <div className="h-px bg-yellow-600/30 flex-1" />
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative group">
            {/* Left Navigation Button */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-2 cursor-pointer lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-800 hover:bg-gray-50 hover:text-yellow-700 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Scrollable Area */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-12 pt-4 px-2 no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-64 md:w-72 group/card"
                >
                  <div className="bg-white rounded-t-2xl rounded-b-lg p-3 shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-gray-100 hover:border-yellow-100/50">
                    {/* Image Container */}
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="pt-6 pb-2 text-center">
                      <h3 className="text-lg text-gray-900 group-hover/card:text-yellow-700 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="w-8 h-px bg-yellow-600/20 mx-auto mt-3 group-hover/card:w-16 group-hover/card:bg-yellow-600/40 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-2 cursor-pointer lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white p-3 rounded-full shadow-lg border border-gray-100 text-gray-800 hover:bg-gray-50 hover:text-yellow-700 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Inline styles for hiding scrollbar across browsers */}
        <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </div>
    </section>
  );
}
