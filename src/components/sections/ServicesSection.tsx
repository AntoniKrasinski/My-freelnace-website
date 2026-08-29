import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import Link from "next/link";
import IconCTA from "../../assets/icons/arrow-circle-up-right-fill-svgrepo-com.svg";
import type { StaticImageData } from "next/image";
import {
  landingPage,
  onlineShop,
  website,
} from "../../assets/images/servicesImages/serviceImages";
import {
  performanceImg,
  cmsImg,
  domainImg,
  hostingImg,
  seoImg,
  supportImg,
} from "../../assets/images/benefitsImages/benefitsImages";

interface Benefit {
  title: string;
  img: StaticImageData;
}
const benefits: Benefit[] = [
  { title: "Wykupienie Nowej Domeny", img: domainImg },
  { title: "Wdrożenie Strony na Hosting", img: hostingImg },
  { title: "Optymalizacje Wydajności", img: performanceImg },
  { title: "Przygotowanie pod SEO", img: seoImg },
  { title: "Możliwość Edycji Treści", img: cmsImg },
  { title: "Moje Wsparcie Techniczne", img: supportImg },
];
interface Service {
  title: string;
  img: StaticImageData;
}
const services: Service[] = [
  { title: "Landing Page", img: landingPage },
  { title: "Strona Internetowa", img: website },
  { title: "Sklep Internetowy", img: onlineShop },
];

const ServicesSection = () => {
  return (
    <Section
      title="Usługi"
      desc="Zakres moich usług zaczyna się od samego projektu, przez Landing Page, aż po rozbudowane sklepy internetowe."
    >
      <div className="flex flex-col">
        <div className="my-8 grid w-full gap-12 lg:grid-cols-3">
          <ServiceCard text="Landing Page" image={landingPage} />
          <ServiceCard text="Strona Internetowa" image={website} />
          <ServiceCard text="Sklep Internetowy" image={onlineShop} />
        </div>

        <h3>Każda usługa obejmuje:</h3>
        <div className="flex items-center justify-center">
          <ul className="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
            {benefits.map((e, index) => (
              <li
                key={index}
                className="bg-surface theme-border-rounded flex w-full flex-col items-center gap-2 p-4 text-center"
              >
                <div className="flex h-12.5 items-center justify-center">
                  <Image src={e.img} alt={e.title} width={50} height={50} />
                </div>
                <span>{e.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

interface ServiceCardProp {
  text: string;
  image: StaticImageData;
}
const ServiceCard = ({ text, image }: ServiceCardProp) => {
  return (
    <Link
      href="/services"
      className="bg-primary theme-border-rounded flex h-48 justify-around p-4"
    >
      <div className="flex flex-col justify-between">
        <h3>{text}</h3>
        <div className="flex items-center justify-start space-x-2">
          <Image src={IconCTA} alt="" width={38} />
          <span className="font-bold">Sprawdź</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src={image} alt={`Ikona ${text}`} width={90} />
      </div>
    </Link>
  );
};

export default ServicesSection;
