"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// --- Types ---
interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface CornerOverlayProps {
  isHovered: boolean;
}

// --- Project Data ---
const projects: Project[] = [
  {
    id: "01",
    title: "Emily Carter",
    category: "Fashion",
    image:
      "https://cdn.prod.website-files.com/6783f9897840e964ff046215/67894e7a45250ebd3bb160c3_Elegant%20Woman%20in%20Plaid.png",
    link: "/project/emily-carter",
  },
  {
    id: "02",
    title: "Natural Vibe",
    category: "Editorial",
    image:
      "https://cdn.prod.website-files.com/6783f9897840e964ff046215/67894eed3b2a5fe8fe24dfdd_Person%20in%20Green%20Outfit%20on%20Leaves.png",
    link: "/project/natural-vibe",
  },
  {
    id: "03",
    title: "Sarah Thompson",
    category: "Portrait",
    image:
      "https://cdn.prod.website-files.com/6783f9897840e964ff046215/67894ff84904fc97c749152e_Solitary%20Figure%20in%20Desert.png",
    link: "/project/sarah-thompson",
  },
  {
    id: "04",
    title: "Urban Soles",
    category: "Commercial",
    image:
      "https://cdn.prod.website-files.com/6783f9897840e964ff046215/678950aedad24ee4cadaed1e_Close-up%20of%20Stylish%20Sneakers.png",
    link: "/project/urban-soles",
  },
];

// --- Easing Curve ---
// Fixed: Explicitly typed as a tuple of 4 numbers [x1, y1, x2, y2]
const transitionCurve: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function Revel2() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Line grows from 0% to 100% as you scroll down the section
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="bg-[#101010] text-white min-h-screen py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom Section Divider (reveals on scroll) */}
        <div className="relative mt-40 w-full h-[1px] bg-white/10 overflow-hidden">
          <motion.div
            style={{ width: lineWidth }}
            className="absolute top-0 left-0 h-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Triggers animation when the top of the card is 20% from the bottom of the viewport
  const isInView = useInView(ref, {
    once: true,
    margin: "-20% 0px -20% 0px",
  });

  // Stagger layout: Shift the second column down
  const isEven = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col group cursor-pointer ${
        isEven ? "md:mt-32" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* --- Image Area --- */}
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0a0a0a]">
        {/* 1. The Image: Scales from 1.3 -> 1.0 AND Grayscale -> Color */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.3, opacity: 0, filter: "grayscale(100%)" }}
          animate={
            isInView
              ? { scale: 1, opacity: 1, filter: "grayscale(0%)" }
              : { scale: 1.3, opacity: 0, filter: "grayscale(100%)" }
          }
          transition={{ duration: 1.4, ease: transitionCurve }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            // Hover: Slight slow zoom
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* 2. Top Curtain (Now Gray #222) */}
        <motion.div
          className="absolute top-0 left-0 w-full h-[51%] bg-[#222] z-20 origin-top"
          initial={{ y: "0%" }}
          animate={isInView ? { y: "-100%" } : { y: "0%" }}
          transition={{ duration: 1.2, ease: transitionCurve, delay: 0.1 }}
        />

        {/* 3. Bottom Curtain (Now Gray #222) */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[51%] bg-[#222] z-20 origin-bottom"
          initial={{ y: "0%" }}
          animate={isInView ? { y: "100%" } : { y: "0%" }}
          transition={{ duration: 1.2, ease: transitionCurve, delay: 0.1 }}
        />

        {/* 4. The 8-Point Corner Frame (Visible on Hover) */}
        <CornerOverlay isHovered={isHovered} />
      </div>

      {/* --- Text Content (Masked Reveal) --- */}
      <div className="mt-8 flex flex-col items-start gap-2">
        <div className="overflow-hidden">
          <motion.h2
            className="text-3xl md:text-[2.5rem] font-medium leading-none tracking-tight text-white"
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : { y: "110%" }}
            transition={{ duration: 1, ease: transitionCurve, delay: 0.4 }}
          >
            {project.title}
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.span
            className="text-sm font-mono uppercase tracking-widest text-gray-400"
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : { y: "110%" }}
            transition={{ duration: 1, ease: transitionCurve, delay: 0.5 }}
          >
            {project.category}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

// --- Corner System Component ---
// This draws the 8 specific corner segments from your HTML
const CornerOverlay: React.FC<CornerOverlayProps> = ({ isHovered }) => {
  const duration = 0.4;

  // Container scales slightly from 0.95 -> 1.0 on hover
  const containerVariants = {
    idle: { opacity: 0, scale: 0.95 },
    hover: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="absolute inset-4 z-30 pointer-events-none"
      initial="idle"
      animate={isHovered ? "hover" : "idle"}
      variants={containerVariants}
      transition={{ duration: duration, ease: "easeOut" }}
    >
      <div className="relative w-full h-full">
        {/* Top Left */}
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-white" />
        <div className="absolute top-0 left-0 w-[1px] h-4 bg-white" />

        {/* Top Right */}
        <div className="absolute top-0 right-0 w-4 h-[1px] bg-white" />
        <div className="absolute top-0 right-0 w-[1px] h-4 bg-white" />

        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-white" />
        <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-white" />

        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-white" />
        <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-white" />
      </div>
    </motion.div>
  );
};
