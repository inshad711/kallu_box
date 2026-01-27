"use client";
import React from "react";
import { Eye, Target, Printer, Package, Handshake } from "lucide-react";

/**
 * Data for the cards to make the code cleaner and reusable
 */
const serviceCards = [
  {
    title: "Our Vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur. We aim to be the leading provider in the industry.",
    icon: <Eye className="w-8 h-8 text-white" />,
    colorClass: "bg-gradient-to-r from-[#700000] to-[#3b0000] text-white",
  },
  {
    title: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet, consectetur. Delivering excellence in every package we print.",
    icon: <Target className="w-8 h-8 text-white" />,
    colorClass: "bg-gradient-to-r from-[#700000] to-[#3b0000] text-white", // Keeping uniform color based on typical corporate themes
  },
];

const partners = [
  { name: "Partner 1", src: "https://via.placeholder.com/150x60?text=Logo+1" },
  { name: "Partner 2", src: "https://via.placeholder.com/150x60?text=Logo+2" },
  { name: "Partner 3", src: "https://via.placeholder.com/150x60?text=Logo+3" },
  { name: "Partner 4", src: "https://via.placeholder.com/150x60?text=Logo+4" },
];

export default function Benefit() {
  return (
    <div className="  flex items-center justify-center p-4 md:p-8">
      {/* Main Container */}
      <div className="templateContainer">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT COLUMN: Vision & Mission Cards */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-6 justify-center lg:justify-start">
            {serviceCards.map((card, index) => (
              <div key={index} className="flex-1 mt-10 sm:mt-0">
                {/* Card Container */}
                <div className="relative bg-gray-50 rounded-4xl shadow-xl p-8 pt-12 text-center  hover:-translate-y-2 transition-transform duration-300 ease-in-out h-full flex flex-col items-center">
                  {/* Floating Icon - "Center Border Par Rahe" */}
                  {/* We use negative margin top or absolute positioning to pull it up */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                    <div
                      className={`w-20 h-20 rounded-full ${card.colorClass} flex items-center justify-center shadow-lg ring-4 ring-white`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <h4 className="text-xl font-bold text-gray-800 mt-6 mb-3">
                    {card.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Content Text */}
          <div className="space-y-6">
            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
                Excellence In Printing <br /> And Packaging
              </h2>
              <div className="w-20 h-1 bg-[#700000] rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. We
              specialize in high-quality printing solutions tailored to your
              business needs.
            </p>

            {/* Partners Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Handshake className="text-emerald-500 w-5 h-5" />
                Our Partners :
              </h3>

              {/* Simple Grid/Flex for logos */}
              <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {partners.map((partner, i) => (
                  <div
                    key={i}
                    className="h-10 w-24 bg-gray-200 rounded animate-pulse flex items-center justify-center text-xs text-gray-400 font-bold"
                  >
                    LOGO {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
