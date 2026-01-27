"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Package,
  Coffee,
  Utensils,
} from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images from the original HTML
  const carouselImages = [
    "https://kitpro.site/kit-packega/wp-content/uploads/sites/237/2024/03/Image-1-2.jpg",
    "https://kitpro.site/kit-packega/wp-content/uploads/sites/237/2024/03/contactless-delivery-girl-courier-with-food-takea-2023-11-27-05-26-02-utc.jpg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1,
    );
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 lg:py-24">
      <div className="templateContainer">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT COLUMN: Content */}
          <div className="flex flex-col gap-8 animated-fade-in-up">
            {/* Headings */}
            <div className="space-y-2">
              <h2 className="text-xl font-medium text-orange-500 uppercase tracking-wide">
                Make The Best
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Packaging
              </h1>
              <div className="w-20 h-1 bg-orange-500 rounded-full mt-4"></div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-6">
              {/* Primary Button */}
              <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-orange-500 px-8 py-4 text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200">
                <span className="font-semibold">Learn More</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Video Button */}
              <div className="flex items-center gap-4">
                <button
                  className="group flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-100 bg-white text-orange-500 shadow-sm transition-all hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  aria-label="Play Video"
                >
                  <Play className="h-5 w-5 fill-current ml-1" />
                </button>
                <span className="font-semibold text-gray-800">Play Video</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Images */}
          <div className="relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
            {/* Background Blob - Absolute */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-end z-0">
              <img
                src="https://kitpro.site/kit-packega/wp-content/uploads/sites/237/2024/03/blob-1-01-1024x839.png"
                alt="Background shape"
                className="w-[120%] max-w-none opacity-80 translate-x-10 translate-y-10 lg:translate-y-0"
              />
            </div>

            {/* Main Product Image - Relative Z-10 */}
            <div className="relative z-10 w-full max-w-md lg:max-w-md transform transition-transform hover:scale-105 duration-700">
              <img
                src="https://kitpro.site/kit-packega/wp-content/uploads/sites/237/2024/03/Yogurt-Bottle-Mockup-02-773x1024.png"
                alt="Yogurt Bottle Packaging"
                className="w-full h-auto drop-shadow-2xl"
              />

              {/* Floating Badge (Optional decorative element implied by style) */}
              <div className="absolute top-10 -left-4 bg-white p-4 rounded-xl shadow-xl animate-bounce-slow hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-800">
                    100% Organic
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for custom simple animations usually found in tailwind plugins */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animated-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
    </section>
  );
}
