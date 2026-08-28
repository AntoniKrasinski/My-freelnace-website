import React from "react";
import Container from "../common/Container";
import Button from "../ui/Button";
import Image from "next/image";
import heroImage from "../../assets/images/heroImage.svg";
import Slider from "../common/Slider";

interface Prop {
  header?: string;
  desc?: string;
}
//The reason for using props in Hero is the purpose of creating multiple home pages, for example, local SEO home pages with a city in the H1.
const HeroSection = ({
  header = "Twoja Marka Zasługuje Na Solidną Stronę.",
  desc = "Strony internetowe tworzę w pojedynkę, robię to z pasją. Zaczynając od prototypu, po design, aż do implementacji. Współpracując ze mną napewno znajdziemy rozwiązanie, którę Cię zadowoli i nada Twojej marce duszę.",
}: Prop) => {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-6">
          <div className="space-y-4 md:w-1/2">
            <h1>{header}</h1>
            <p>{desc}</p>
            <div className="flex space-x-2">
              <Button>Kontakt</Button>
              <Button variant="secondary">Oferta</Button>
            </div>
          </div>
          <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/2 md:justify-end">
            <Image
              src={heroImage}
              alt="Ilustracja sprzętu komputerowego i developera"
              className="w-full max-w-[320px] md:max-w-none"
            />
          </div>
        </div>
      </Container>
      <Slider>
        <span>CREATIVE</span>
        <span>•</span>
        <span>RESPONSIVE</span>
        <span>•</span>
        <span>SCALABLE</span>
        <span>•</span>
        <span>SEO READY</span>
        <span>•</span>
      </Slider>
    </>
  );
};

export default HeroSection;
