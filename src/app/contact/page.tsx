import React from "react";
import NavBar from "@/components/layout/NavBar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkProcessSection from "@/components/sections/WorkProcessSection";
import PlaceHolderSection from "@/components/sections/PlaceHolderSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

const page = () => {
  return (
    <>
      <NavBar />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default page;
