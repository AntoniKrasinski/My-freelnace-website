import React from "react";
import ServiceCard from "../ui/ServiceCard";
import Section from "../common/Section";
import {
  landingPage,
  onlineShop,
  websiteDesign,
  website,
} from "../../assets/images/servicesImages/serviceImages";

const ServicesSection = () => {
  return (
    <Section
      title="Usługi"
      desc="Zakres moich usług zaczyna się od samego projektu, przez Landing Page, czyli stronę jednostronicową, aż po rozbudowane sklepy internetowe."
    >
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="my-8 grid w-fit grid-cols-2 grid-rows-2 gap-12">
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
