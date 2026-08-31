import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import PlaceHolderSection from "@/components/sections/ProjectsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/AboutSection";
import Slider from "@/components/common/Slider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkProcessSection />
      <AboutSection />
      <Slider>Projekty &#160;</Slider>
      <PlaceHolderSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
