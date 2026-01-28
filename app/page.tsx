// E:\kallu_box_web\kallu_box\app\page.tsx

import Benefit from "@/components/Benefit";
import BrandMarquee from "@/components/BrandMarquee";
import Category from "@/components/Category";
import Contact2 from "@/components/Contact2";
import Faq from "@/components/Faq";
// import ContactSection from "@/components/ContactSection";
import Flip from "@/components/Flip";

// import Hero from "@/components/Hero";
// import Hero2 from "@/components/Hero2";
import HeroSlider from "@/components/HeroSlider";
import Sta from "@/components/Sta";
// import PerfumeCo from "@/components/Perfume/PerfumeCo";
// import ProductCardsSection from "@/components/ProductCardsSection";
// import ProductCategoryCard from "@/components/ProductCategoryCard";

// import Slider from "@/components/Slider";
// import Slider2 from "@/components/Slider2";
// import Stats from "@/components/Stats";
// import Stats2 from "@/components/Stats2";
import Stats3 from "@/components/Sta";
// import Image from "next/image";

export default function Home() {
  return (
    <div
      className="bg-white/75
  bg-[url('/images/pastel-orange-rough-concrete-textured-background.webp')] 
  bg-repeat bg-contain bg-center 
  bg-blend-overlay"
    >
      {/* <Hero2 /> */}
      <HeroSlider />
      {/* <PerfumeCo /> */}

      <Sta />
      <BrandMarquee />
      <Flip />
      {/* <Hero /> */}
      {/* <Stats2 /> */}
      {/* <ProductCategoryCard /> */}
      {/* <Stats /> */}
      {/* <ProductCardsSection /> */}
      <Benefit />
      <Category />
      <Contact2 />

      <Faq />
      {/* <Slider /> */}
      {/* <Slider2 /> */}
    </div>
  );
}
