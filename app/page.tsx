import Benefit from "@/components/Benefit";
import Category from "@/components/Category";
import ContactSection from "@/components/ContactSection";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import ProductCardsSection from "@/components/ProductCardsSection";
import ProductCategoryCard from "@/components/ProductCategoryCard";

import Slider from "@/components/Slider";
import Slider2 from "@/components/Slider2";
import Stats from "@/components/Stats";
import Stats2 from "@/components/Stats2";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero2 />

      {/* <Hero /> */}
      <Stats2 />
      <ProductCategoryCard />
      <Stats />
      <ProductCardsSection />
      <Benefit />
      <Category />

      {/* <Slider /> */}
      {/* <Slider2 /> */}
    </div>
  );
}
