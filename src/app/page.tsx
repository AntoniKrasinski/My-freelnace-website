import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/features/myServices/components/ServicesSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import PlaceHolderSection from "@/features/projects/components/ProjectsSection";
import FAQSection from "@/components/common/FAQSection";
import ContactSection from "@/components/common/ContactSection";
import AboutSection from "@/components/sections/AboutSection";
import Slider from "@/components/common/Slider";
import LocalSection from "@/features/cities/components/LocalSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WorkProcessSection />
      <AboutSection />
      <Slider>PROJEKTY &#160;</Slider>
      <PlaceHolderSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
