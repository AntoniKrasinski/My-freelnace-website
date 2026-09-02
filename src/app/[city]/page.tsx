import React from "react";
import cities from "@/data/cities";
import { notFound } from "next/navigation";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import PlaceHolderSection from "@/components/sections/ProjectsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/AboutSection";
import Slider from "@/components/common/Slider";
import LocalSection from "@/components/sections/LocalSection";

const page = async ({ params }: { params: Promise<{ city: string }> }) => {
  const { city } = await params;

  const cityData = cities[city];

  if (!cityData) {
    notFound();
  }

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <LocalSection cityData={cityData} />
      <AboutSection />
      <WorkProcessSection />
      <PlaceHolderSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default page;
