import Image from "next/image";
import NavBar from "@/components/layout/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import PlaceHolderSection from "@/components/sections/PlaceHolderSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkProcessSection />
        <PlaceHolderSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
