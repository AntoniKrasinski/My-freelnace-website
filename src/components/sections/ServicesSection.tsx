import React from "react";
import ServiceCard from "../ui/ServiceCard";
import Section from "../common/Section";
import Image from "next/image";
import {
  landingPage,
  onlineShop,
  website,
} from "../../assets/images/servicesImages/serviceImages";

const ServicesSection = () => {
  return (
    <Section
      title="Usługi"
      desc="Zakres moich usług zaczyna się od samego projektu, przez Landing Page, aż po rozbudowane sklepy internetowe."
    >
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <div className="my-8 grid w-fit gap-12 lg:grid-cols-3">
            <ServiceCard
              variant="primary"
              text="Landing Page"
              image={landingPage}
            />

            <ServiceCard
              variant="primary"
              text="Strona Internetowa"
              image={website}
            />
            <ServiceCard
              variant="primary"
              text="Sklep Internetowy"
              image={onlineShop}
            />
          </div>
        </div>
        <h3>Każda usługa obejmuje:</h3>
        <div className="flex items-center justify-center">
          <ul className="mt-2 grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {[
              "Wykupienie Domeny",
              "Zapewnienie Hostingu",
              "Optymalizacja Wydajności",
              "Zaprojektowanie pod SEO",
              "Możliwość Edycji Treści",
              "Moje Wsparcie Techniczne",
            ].map((e, index) => (
              <li
                key={index}
                className="bg-surface flex w-full flex-col items-center gap-2 rounded-lg border p-4 text-center"
              >
                <div className="flex h-12.5 items-center justify-center">
                  <Image src={landingPage} alt={e} width={50} height={50} />
                </div>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
