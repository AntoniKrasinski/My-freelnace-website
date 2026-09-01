import React from "react";
import ServiceSection from "@/components/sections/ServiceSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ city: string }> }) => {
  return (
    <>
      <ServiceSection />
      <ContactSection />
    </>
  );
};

export default page;
