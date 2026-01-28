"use client";

import { useRef, useEffect } from "react";

const products = [
  {
    title: "Age Defence Day Cream",
    category: "Anti-Aging Collection",
    price: "$49.95",
    img1: "https://barcelona-clean.myshopify.com/cdn/shop/files/Skincare05.jpg?v=1691474014&width=750",
    img2: "https://barcelona-clean.myshopify.com/cdn/shop/files/Skincare-Hover05.jpg?v=1691474014&width=750",
  },
  {
    title: "Vitamin Oil",
    category: "Skin Repair",
    price: "$29.95",
    img1: "https://barcelona-clean.myshopify.com/cdn/shop/files/Skincare06.jpg?v=1691474197&width=750",
    img2: "https://barcelona-clean.myshopify.com/cdn/shop/files/Skincare-Hover06.jpg?v=1691474197&width=750",
  },
  {
    title: "Infinity Drops immuno-serum",
    category: "Anti-Aging Collection",
    price: "$26.00",
    oldPrice: "$30.95",
    sale: true,
    img1: "https://barcelona-clean.myshopify.com/cdn/shop/files/Body_Hair01.jpg?v=1691476123&width=750",
    img2: "https://barcelona-clean.myshopify.com/cdn/shop/files/Body_Hair-Hover01.jpg?v=1691476123&width=750",
  },
  {
    title: "Shampoo",
    category: "Body & Hair Care",
    price: "$14.95",
    img1: "https://barcelona-clean.myshopify.com/cdn/shop/files/Body_Hair02.jpg?v=1691476293&width=750",
    img2: "https://barcelona-clean.myshopify.com/cdn/shop/files/Body_Hair-Hover02.jpg?v=1691476293&width=750",
  },
  {
    title: "Hydra-Silk Firming Cream",
    category: "Skincare",
    price: "$14.50",
    img1: "https://barcelona-clean.myshopify.com/cdn/shop/files/Skincare03.jpg?v=1691473489&width=750",
    img2: "https://barcelona-clean.myshopify.com/cdn/shop/files/Skincare-Hover03.jpg?v=1691473489&width=750",
  },
];

export default function ProductSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".slider-card") as HTMLElement;

    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const prev = document.getElementById("prevBtn");
      const next = document.getElementById("nextBtn");

      if (!prev || !next) return;

      prev.style.opacity = slider.scrollLeft <= 0 ? "0.3" : "1";
      next.style.opacity = slider.scrollLeft >= max ? "0.3" : "1";
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-light">Our Best Sellers</h2>
          <p className="text-gray-500 mt-2">
            Discover our clean beauty collection.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            id="prevBtn"
            onClick={() => scroll("left")}
            className="p-2 border rounded-full hover:bg-black hover:text-white transition"
          >
            ←
          </button>
          <button
            id="nextBtn"
            onClick={() => scroll("right")}
            className="p-2 border rounded-full hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar"
      >
        {products.map((item, i) => (
          <div
            key={i}
            className="slider-card snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
          >
            <div className="group relative">
              {/* Image */}
              <div className="relative pb-[130%] overflow-hidden bg-gray-100">
                <img
                  src={item.img1}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-400 group-hover:opacity-0"
                  alt={item.title}
                />
                <img
                  src={item.img2}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                  alt={item.title}
                />

                {item.sale && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] px-2 py-1 font-bold uppercase">
                    Sale
                  </span>
                )}

                <div className="absolute inset-x-4 bottom-4">
                  <button className="w-full translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-white text-black py-3 text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-black hover:text-white">
                    Quick Add
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  {item.category}
                </span>
                <h3 className="text-sm font-medium">{item.title}</h3>
                <div className="text-sm flex gap-2">
                  <span className="font-light">{item.price}</span>
                  {item.oldPrice && (
                    <span className="line-through text-xs text-gray-400">
                      {item.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
