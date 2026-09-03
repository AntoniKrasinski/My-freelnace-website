import React from "react";
import ServiceHero from "@/features/myServices/components/ServiceHero";
import ServiceDetail from "@/features/myServices/components/SericeDetail";
import ServiceBenefits from "@/features/myServices/components/ServiceBenefits";
import ServiceProcess from "@/features/myServices/components/ServiceProcess";
import FAQSection from "@/components/common/FAQSection";
import ContactSection from "@/components/common/ContactSection";
import Slider from "@/components/common/Slider";
import services from "@/features/myServices/data";
import ProjectsSection from "@/features/projects/components/ProjectsSection";
import HeroSection from "@/components/sections/HeroSection";
import defaultImage from "@/assets/images/heroImage.svg";
import WorkProcessSection from "@/components/sections/WorkProcessSection";

import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ service: string }> }) => {
  const { service } = await params;
  const serviceData = services[service];
  if (!serviceData) {
    notFound();
  }

  return (
    <>
      <ServiceHero
        service={serviceData.name}
        title={serviceData.heroTitle}
        desc={serviceData.heroDesc}
        image={defaultImage}
      />
      <ServiceDetail
        service={serviceData.name}
        title={serviceData.sectionTitle}
        desc={serviceData.sectionDesc}
      />
      <ServiceBenefits
        service={serviceData.name}
        benefits={serviceData.benefits}
      />
      <WorkProcessSection  />
      <ProjectsSection />
      <FAQSection  />
      <ContactSection />
    </>
  );
};

export default page;
