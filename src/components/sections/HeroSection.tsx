import React from "react";
import Container from "../common/Container";
import Image from "next/image";
import heroImage from "../../assets/images/heroImage.svg";
import Slider from "../common/Slider";
import Link from "next/link";
import CityCases from "@/types/cityCases";

interface Prop {
  city?: CityCases;
}
const deafultCity = {
  nominative: "Piotrków Trybunalski", // Mianownik
  genitive: "Piotrkowa Trybunalskiego", // Dopełniacz
  dative: "Piotrkowu Trybunalskiemu", // Celownik
  accusative: "Piotrków Trybunalski", // Biernik
  instrumental: "Piotrkowem Trybunalskim", // Narzędnik
  locative: "Piotrkowie Trybunalskim", // Miejscownik
  vocative: "Piotrków Trybunalski", // Wołacz
};
const HeroSection = ({ city = deafultCity }: Prop) => {
  return (
    <>
      <Container id="hero">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-6">
          <div className="space-y-4 md:w-1/2">
            <h1 className="hidden">Strony internetowe {city.nominative}</h1>
            <h2 className="h1">Twoja Marka Zasługuje Na Solidną Stronę.</h2>
            <p>
              Strony internetowe tworzę w pojedynkę, robię to z pasją.
              Współpracuję z firmami z {city.genitive} oraz z całej Polski.
              Zaczynając od prototypu, po design, aż do implementacji.
              Współpracując ze mną na pewno znajdziemy rozwiązanie, które Cię
              zadowoli i nada Twojej marce duszę.
            </p>
            <div className="flex gap-3">
              <Link href="#kontakt" className="button">
                Kontakt
              </Link>

              <Link href="#uslugi" className="button-surface">
                Oferta
              </Link>
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
