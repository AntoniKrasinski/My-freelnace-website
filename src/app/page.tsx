import Image from "next/image";
import NavBar from "@/components/layout/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import Slider from "@/components/common/Slider";
export default function Home() {
  return (
    <div className="container mx-auto px-8 md:px-20 lg:px-24">
      <NavBar />
      <main>
        <HeroSection />
        <Slider>TEXT</Slider>
      </main>
    </div>
  );
}
