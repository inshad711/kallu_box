// E:\kallu_box_web\kallu_box\components\ProductComp\ProductCategoryCarousel.tsx

"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

interface DisplayProduct {
  id: number;
  name: string;
  image: string;
}

interface ProductCategoryCarouselProps {
  category: {
    name: string;
    description: string;
    slug: string;
    products: Array<{
      ID: number;
      title: string;
      featured_image: string;
      meta_fields: {
        name?: string[];
        gallery?: string[];
      };
    }>;
  };
}

const decodeHtml = (text: string) => {
  if (typeof window === "undefined") return text; // Fallback for SSR
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent || text;
};

export default function ProductCategoryCarousel({
  category,
}: ProductCategoryCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraint, setConstraint] = useState(0);
  const x = useMotionValue(0);
  const [activeRange, setActiveRange] = useState<"start" | "middle" | "end">(
    "start",
  );

  const products: DisplayProduct[] = category.products.map((p) => ({
    id: p.ID,
    // Wrap the name logic here:
    name: decodeHtml(p.meta_fields?.name?.[0] || p.title || "Product"),
    image:
      p.featured_image ||
      p.meta_fields?.gallery?.[0] ||
      "https://placehold.co/600x600?text=No+Image",
  }));

  // Show nice placeholder if no products
  if (products.length === 0) {
    return (
      <div className="bg-neutral-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            {/* <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight">
              {category.name}
            </h2> */}
            <h2 className="text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight">
              {decodeHtml(category.name)} {/* Fix this here too! */}
            </h2>
            <div className="flex items-center justify-center gap-3 max-w-xs mx-auto">
              <div className="h-px bg-yellow-600/30 flex-1" />
              <p className="font-medium text-yellow-700/80 uppercase tracking-widest text-xs">
                Collections
              </p>
              <div className="h-px bg-yellow-600/30 flex-1" />
            </div>
          </div>

          <div className="py-20 bg-white/60 rounded-2xl border border-dashed border-gray-300 text-center">
            <h3 className="text-2xl font-medium text-gray-700 mb-3">
              Coming Soon
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              We're preparing beautiful new items for this collection. Check
              back soon!
            </p>
            {category.description && (
              <p className="mt-6 text-gray-600 italic max-w-2xl mx-auto">
                {category.description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    const calcConstraint = () => {
      if (!carouselRef.current || !containerRef.current) return;
      const carouselWidth = carouselRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      if (containerWidth >= carouselWidth) {
        setConstraint(0);
      } else {
        setConstraint(-(carouselWidth - containerWidth + 48));
      }
    };

    calcConstraint();
    window.addEventListener("resize", calcConstraint);
    return () => window.removeEventListener("resize", calcConstraint);
  }, [products.length]);

  useMotionValueEvent(x, "change", (latest) => {
    if (constraint === 0) {
      setActiveRange("start");
      return;
    }
    const threshold = 20;
    if (latest >= -threshold) setActiveRange("start");
    else if (latest <= constraint + threshold) setActiveRange("end");
    else setActiveRange("middle");
  });

  const handleNav = (direction: "left" | "right") => {
    const current = x.get();
    const moveBy = 280;
    let target = direction === "left" ? current + moveBy : current - moveBy;
    target = Math.min(0, Math.max(constraint, target));
    animate(x, target, {
      type: "tween",
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    });
  };

  return (
    <div className="pt-12  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 tracking-tight">
            {/* {category.name} */}
            {decodeHtml(category.name)}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-4 max-w-sm mx-auto">
            <div className="h-px flex-1 bg-yellow-600/30" />
            <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-yellow-700/80">
              Collections
            </span>
            <div className="h-px flex-1 bg-yellow-600/30" />
          </div>
        </div>

        <div ref={containerRef} className="relative overflow-hidden group">
          <div className="absolute inset-0 z-20 flex items-center justify-between px-2 md:px-4 pointer-events-none">
            <button
              onClick={() => handleNav("left")}
              disabled={activeRange === "start" || constraint === 0}
              className={`pointer-events-auto p-3 md:p-4 rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:bg-white
                ${activeRange === "start" || constraint === 0 ? "opacity-0 scale-90 pointer-events-none" : "opacity-100"}`}
            >
              <ChevronLeft className="w-5 h-5 cursor-pointer md:w-6 md:h-6" />
            </button>

            <button
              onClick={() => handleNav("right")}
              disabled={activeRange === "end" || constraint === 0}
              className={`pointer-events-auto p-3 md:p-4 rounded-full bg-white/90 shadow-lg transition-all duration-300 hover:bg-white
                ${activeRange === "end" || constraint === 0 ? "opacity-0 scale-90 pointer-events-none" : "opacity-100"}`}
            >
              <ChevronRight className="w-5 h-5 cursor-pointer md:w-6 md:h-6" />
            </button>
          </div>
          {/* 
          <div className="absolute left-0 top-0 bottom-0 w-10 md:w-16 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 md:w-16 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" /> */}

          <motion.div
            ref={carouselRef}
            className="flex gap-5 md:gap-6 px-2 py-8 w-fit mx-auto cursor-grab active:cursor-grabbing select-none"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: constraint, right: 0 }}
            dragElastic={0.2}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 group/card"
              >
                <div className="bg-white p-3 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    <button className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-yellow-50 text-yellow-700">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="text-base md:text-lg font-medium text-gray-800 group-hover/card:text-yellow-700 transition-colors line-clamp-2 min-h-[2.8rem]">
                      {product.name}
                    </h3>
                    <div className="mt-3 h-0.5 w-10 bg-yellow-600/30 mx-auto group-hover/card:w-16 transition-all duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="md:hidden text-center mt-6">
          <p className="text-sm text-neutral-500 uppercase tracking-wider animate-pulse">
            Swipe to explore →
          </p>
        </div>
      </div>
    </div>
  );
}
