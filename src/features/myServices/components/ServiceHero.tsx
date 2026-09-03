import React from "react";
import Container from "@/components/common/Container";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Slider from "@/components/common/Slider";

const ServiceHero = ({
  service,
  title,
  desc,
  image,
}: {
  service: string;
  title: string;
  desc: string;
  image: StaticImageData;
}) => {
  return (
    <>
      <Container id="hero">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-6">
          <div className="space-y-4 md:w-1/2">
            <h1 className="hidden">{service} Piotrków Trybunalski</h1>
            <h2 className="h1">{title}</h2>
            <p>{desc}</p>
            <div className="flex gap-3">
              <Link href="#kontakt" className="button">
                Kontakt
              </Link>

              <Link href="#uslugi" className="button-surface">
                Sprawdź Więcej
              </Link>
            </div>
          </div>
          <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
            <Image
              src={image}
              alt="Ilustracja sprzętu komputerowego i developera"
              className="w-full max-w-[320px] md:max-w-none"
            />
          </div>
        </div>
      </Container>
      <Slider>
        <span>{service}</span>
        <span>•</span>
      </Slider>
    </>
  );
};

export default ServiceHero;
