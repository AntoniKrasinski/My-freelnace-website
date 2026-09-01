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

interface ServiceCardProps {
  title: string;
  slug: string;
  image: StaticImageData;
}
const ServiceCard = ({ title, slug, image }: ServiceCardProps) => {
  return (
    <Link
      href={`/usluga/${slug}`}
      className="bg-primary theme-border-rounded flex h-48 max-w-lg justify-around p-4"
    >
      <div className="flex flex-col justify-between">
        <h3>{title}</h3>
        <div className="flex items-center justify-start space-x-2">
          <Image src={IconCTA} alt="" width={38} height={38} />
          <span className="font-bold">Sprawdź</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src={image} alt="" width={90} />
      </div>
    </Link>
  );
};

interface Benefit {
  title: string;
  image: StaticImageData;
}
const benefits: Benefit[] = [
  { title: "Wykupienie Nowej Domeny", image: domainImg },
  { title: "Wdrożenie Strony na Hosting", image: hostingImg },
  { title: "Optymalizacje Wydajności", image: performanceImg },
  { title: "Przygotowanie pod SEO", image: seoImg },
  { title: "Możliwość Edycji Treści", image: cmsImg },
  { title: "Moje Wsparcie Techniczne", image: supportImg },
];
interface Service {
  title: string;
  slug: string;
  image: StaticImageData;
}
const services: Service[] = [
  { title: "Landing Page", slug: "landing-page", image: landingPage },
  { title: "Strona Internetowa", slug: "strona-internetowa", image: website },
  { title: "Sklep Internetowy", slug: "sklep-internetowy", image: onlineShop },
];

const ServicesSection = () => {
  return (
    <Section
      title="Usługi"
      desc="Zakres moich usług zaczyna się od samego projektu, przez Landing Page, aż po rozbudowane sklepy internetowe."
      id="uslugi"
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="my-8 grid gap-8 md:min-w-lg lg:w-full lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                slug={service.slug}
                image={service.image}
              />
            ))}
          </div>
        </div>

        <h3>Każda usługa obejmuje:</h3>
        <div className="flex items-center justify-center">
          <ul className="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
            {benefits.map((benefit) => (
              <li
                key={benefit.title}
                className="bg-surface theme-border-rounded flex w-full flex-col items-center gap-2 p-4 text-center"
              >
                <div className="flex h-12.5 items-center justify-center">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    width={50}
                    height={50}
                  />
                </div>
                <span>{benefit.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ServicesSection;
