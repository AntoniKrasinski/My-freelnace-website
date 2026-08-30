import React from "react";
import Container from "../common/Container";
import Button from "../ui/Button";
import Image from "next/image";
import heroImage from "../../assets/images/heroImage.svg";
import Slider from "../common/Slider";
import Link from "next/link";

interface Prop {
  h1?: string;
}
const HeroSection = ({
  h1 = "Strony internetowe Piotrków Trybunalski",
}: Prop) => {
  return (
    <>
      <Container id="hero">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-6">
          <div className="space-y-4 md:w-1/2">
            <h1 className="hidden">{h1}</h1>
            <h2 className="h1">Twoja Marka Zasługuje Na Solidną Stronę.</h2>
            <p>
              Strony internetowe tworzę w pojedynkę, robię to z pasją.
              Zaczynając od prototypu, po design, aż do implementacji.
              Współpracując ze mną na pewno znajdziemy rozwiązanie, które Cię
              zadowoli i nada Twojej marce duszę.
            </p>
            <div className="flex gap-3">
              <Button>Kontakt</Button>
              <Link href="#uslugi">
                <Button variant="secondary">Oferta</Button>
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
