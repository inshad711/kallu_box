"use client";

import Image from "next/image";
import React from "react";

// In a real Next.js project, you would import Image from 'next/image'
// import Image from 'next/image';

interface BannerProps {
  desktopImageUrl: string;
  mobileImageUrl: string;
  targetUrl: string;
  altText?: string;
}

const BannerWidget: React.FC<BannerProps> = ({
  desktopImageUrl,
  mobileImageUrl,
  targetUrl,
  altText = "Banner",
}) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <a
            href={targetUrl}
            className="block w-full h-full text-decoration-none transition-opacity hover:opacity-95"
          >
            <div className="relative w-full h-full overflow-hidden">
              {/* --- MOBILE IMAGE --- */}

              <Image
                src={mobileImageUrl}
                alt={altText}
                width={1200}
                height={400}
                className="w-full h-auto object-cover block sm:hidden"
                loading="lazy"
              />

              {/* --- DESKTOP IMAGE --- */}
              {/* Hidden by default (hidden), visible on medium screens and up (md:block) */}
              <Image
                src={desktopImageUrl}
                alt={altText}
                width={1200}
                height={400}
                className="w-full h-auto object-cover hidden sm:block"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

// Main App Component to demonstrate usage
export default function DesignBox() {
  return (
    <div className=" flex flex-col items-center">
      <div className="w-full">
        {/* Instance 2: Using Unsplash placeholders */}
        <BannerWidget
          // Landscape
          desktopImageUrl="/imagesW/KALLU-BOX-CATEGORY-BANNERFOR-WEBSITE-DESKTOP.webp"
          // Portrait
          mobileImageUrl="/imagesW/KALLUMOBILE.webp"
          targetUrl="/products"
          altText="jewellery"
        />
      </div>
    </div>
  );
}
