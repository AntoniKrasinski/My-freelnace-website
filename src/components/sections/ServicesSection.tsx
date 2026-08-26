import React from "react";
import ServiceCard from "../ui/ServiceCard";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import {
  landingPage,
  onlineShop,
  websiteDesign,
  website,
} from "../../assets/images/servicesImages/serviceImages";

const ServicesSection = () => {
  return (
    <Section>
      <div className="flex flex-col ">
        <SectionHeader color="surface" title="Usługi" desc="123"/>
        <div className="flex justify-center">
          <div className="my-8 grid grid-cols-2 grid-rows-2 w-fit gap-12">
            <ServiceCard
              variant="primary"
              text="Landing Page"
              image={landingPage}
            />
            <ServiceCard
              variant="primary"
              text="Serwis Internetowy"
              image={website}
            />
            <ServiceCard
              variant="primary"
              text="Sklep Internetowy"
              image={onlineShop}
            />
            <ServiceCard
              variant="primary"
              text="Design Strony"
              image={websiteDesign}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
