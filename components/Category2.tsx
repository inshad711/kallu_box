"use client";
import React from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Category2() {
  return (
    <section
      id="about"
      className="w-full bg-white py-16 md:py-24 overflow-hidden text-stone-900"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Main Section Header --- */}
        <div className="mb-16 md:mb-24 flex flex-col gap-6 items-center text-center">
          <SectionTag text="About Velvera" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-3xl">
            Hair salon where style and care come together
          </h2>
        </div>

        {/* --- Content Grid 1: Image Left, Text Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          {/* Image Wrapper */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[1.1] rounded-2xl overflow-hidden bg-stone-100">
            <img
              src="https://framerusercontent.com/images/0KkbgGAjJJTkCMgIXPzNZhuzGx8.jpg"
              alt="Velvera Salon Interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start gap-6">
            <SectionTag text="Introduction" />

            <h3 className="text-3xl md:text-4xl font-medium leading-tight">
              Welcome to <span className="text-stone-600">Velvera</span>, your
              destination for hair care
            </h3>

            <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
              We combine expert techniques with premium products to give your
              hair the care it deserves. From styling to treatments, we ensure
              every visit leaves you feeling confident & careful.
            </p>

            <a
              href="#contact"
              className="group mt-4 inline-flex items-center justify-center gap-2 bg-[#FF6A00] text-white px-8 py-4 rounded-xl font-medium transition-all hover:bg-[#e65f00] hover:shadow-lg active:scale-95"
            >
              <span>Get Expert Care</span>
              <div className="relative w-5 h-5 overflow-hidden">
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
              </div>
            </a>
          </div>
        </div>

        {/* --- Content Grid 2: Text Left, Image Right --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content (Order 2 on mobile, Order 1 on Desktop) */}
          <div className="flex flex-col items-start gap-8 order-2 lg:order-1">
            <SectionTag text="Why choose us" />

            <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-2">
              Why <span className="text-stone-600">Velvera</span> is the right
              choice for your hair
            </h3>

            <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
              We combine expert techniques with premium products to give your
              hair the care it deserves. From styling to treatments, we ensure
              every visit leaves you feeling confident & careful.
            </p>

            <a
              href="#contact"
              className="group mt-4 inline-flex items-center justify-center gap-2 bg-[#FF6A00] text-white px-8 py-4 rounded-xl font-medium transition-all hover:bg-[#e65f00] hover:shadow-lg active:scale-95"
            >
              <span>Get Expert Care</span>
              <div className="relative w-5 h-5 overflow-hidden">
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-0 -translate-x-6 opacity-0 group-hover:opacity-100" />
                <ArrowRight className="w-5 h-5 absolute transition-all duration-300 group-hover:translate-x-6 translate-x-0 opacity-100 group-hover:opacity-0" />
              </div>
            </a>
          </div>

          {/* Image Wrapper (Order 1 on mobile, Order 2 on Desktop) */}
          <div className="order-1 lg:order-2 relative w-full aspect-[4/3] lg:aspect-[1.1] rounded-2xl overflow-hidden bg-stone-100">
            <img
              src="https://framerusercontent.com/images/pl8KtZDJfmFPHF6wUBHGoIuHCaQ.jpg"
              alt="Hair styling session"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Sub-Components for Cleanliness --- */

function SectionTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-[1px] bg-black"></div>
      <span className="text-sm font-semibold uppercase tracking-wide text-black">
        {text}
      </span>
    </div>
  );
}

function FeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors duration-300">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mt-1">
        <Check className="w-5 h-5" strokeWidth={3} />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-stone-900">{title}</span>
        <span className="text-stone-500">{description}</span>
      </div>
    </div>
  );
}
