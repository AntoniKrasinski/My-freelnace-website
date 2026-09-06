import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/features/myServices/components/ServicesSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import PlaceHolderSection from "@/features/projects/components/ProjectsSection";
import FAQSection from "@/components/common/FAQSection";
import ContactSection from "@/components/common/ContactSection";
import AboutSection from "@/components/AboutSection";
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
