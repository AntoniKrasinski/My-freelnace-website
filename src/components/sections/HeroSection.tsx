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
        <div className="flex items-center justify-between space-x-6">
          <div className="w-1/2 space-y-4">
            <h1>{header}</h1>
            <p>{desc}</p>
            <div className="flex space-x-2">
              <Button>Kontakt</Button>
              <Button variant="secondary">Oferta</Button>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-end">
            <Image
              src={heroImage}
              alt="Ilustracja sprzętu komputerowego i developera"
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
