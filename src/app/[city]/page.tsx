import React from "react";
import cities from "@/features/cities/data";
import { notFound } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/features/myServices/components/ServicesSection";
import WorkProcessSection from "@/components/WorkProcessSection";
import PlaceHolderSection from "@/features/projects/components/ProjectsSection";
import FAQSection from "@/components/common/FAQSection";
import ContactSection from "@/components/common/ContactSection";
import AboutSection from "@/components/AboutSection";
import Slider from "@/components/common/Slider";
import LocalSection from "@/features/cities/components/LocalSection";

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
