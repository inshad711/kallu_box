"use client";
import React from "react";
import { motion } from "framer-motion";

// --- Types & Interfaces ---
interface ProductImage {
  src: string;
  alt: string;
  width: number;
  className: string; // Tailwind positioning classes
  // Custom animation offsets for "Explosion/Reveal from Center" effect
  initialX: number;
  initialY: number;
}

// --- Data ---
const images: ProductImage[] = [
  {
    // 1. Main Item: Chemex (Central Anchor)
    src: "https://motion-theme-home.myshopify.com/cdn/shop/products/brown-chemex-new_1200x_a166b957-b91e-4381-b6cc-f9865870bfdd.jpg?v=1502376786&width=560",
    alt: "Leather Chemex Collar",
    width: 560,
    // CHANGED: z-30 (highest priority), added shadow-2xl
    className: "w-[65%] absolute top-[10%] left-[17%] z-30 shadow-2xl",
    // Starts exactly where it is, just zooms in
    initialX: 0,
    initialY: 0,
  },
  {
    // 2. Tall Item: Bottle (Top Right)
    src: "https://motion-theme-home.myshopify.com/cdn/shop/products/kk-bottle-2000_1200x_c70095bc-54ba-4a62-a8fd-29f054e3f305.jpeg?v=1502376563&width=360",
    alt: "Ampersand Insulated Bottle",
    width: 360,
    className: "w-[28%] absolute top-[0%] right-[8%] z-0",
    // Moves FROM slightly left and down (Center) TO Top-Right
    initialX: -60,
    initialY: 60,
  },
  {
    // 3. Small Item: Black Mug (Bottom Left)
    src: "https://motion-theme-home.myshopify.com/cdn/shop/products/premium-ampersand-mug_1200x_3d909610-b862-4352-ba50-69d09af1f3ae.jpg?v=1502376856&width=320",
    alt: "Premium Ampersand Mug",
    width: 320,
    // CHANGED: z-index reduced to 20
    className:
      "w-[25%] absolute bottom-[18%] left-[2%] z-20 shadow-xl rounded-full",
    // Moves FROM slightly right and up (Center) TO Bottom-Left
    initialX: 60,
    initialY: -60,
  },
  {
    // 4. Small Item: White Mug (Bottom Right)
    src: "https://motion-theme-home.myshopify.com/cdn/shop/products/white-mug1_1200x_4b250f23-b8f4-4416-9ce5-491c0477aa26.jpeg?v=1502377077&width=400",
    alt: "And Then I Woke Up",
    width: 400,
    // CHANGED: z-index reduced to 20
    className:
      "w-[32%] absolute bottom-[5%] right-[5%] z-20 shadow-xl rounded-full",
    // Moves FROM slightly left and up (Center) TO Bottom-Right
    initialX: -40,
    initialY: -40,
  },
];

// --- Components ---

const CollectionCallout = () => {
  return (
    <section className="w-full bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Side: Image Collage */}
          <div className="w-full md:w-1/2 relative flex justify-center">
            {/* Aspect Ratio Container */}
            <div className="aspect-square relative w-full max-w-[500px]">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  className={img.className}
                  // Start from center offsets, smaller scale, and invisible
                  initial={{
                    opacity: 0,
                    x: img.initialX,
                    y: img.initialY,
                    scale: 0.8,
                  }}
                  // Animate to natural position (0,0), full size, visible
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.15, // Staggered delay for "pop-pop-pop" effect
                      type: "spring", // Spring gives it a nice "pop" feeling
                      stiffness: 50,
                      damping: 15,
                    },
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    loading="lazy"
                    className="w-full h-auto block object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 pl-0 md:pl-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-5 max-w-md"
            >
              {/* Subtitle */}
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">
                new
              </span>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl text-gray-900 leading-[1.0]">
                coffee making essentials
              </h2>

              {/* Body Text */}
              <div className="text-gray-600 text-lg leading-relaxed font-light">
                <p>
                  Discover our branded collection of coffee making must have
                  accessories.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a
                  href="/collections/mugs"
                  className="inline-block bg-gray-900 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-all duration-300"
                >
                  Shop now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Main App Component (for preview) ---

export default function CTA() {
  return (
    <div className=" bg-gray-50">
      <main>
        <CollectionCallout />
      </main>
    </div>
  );
}
