import React from "react";
import Button from "../ui/Button";

interface Prop {
  header?: string;
  desc?: string;
}
//The reason for using props in Hero is the purpose of creating multiple home pages, for example, local SEO home pages with a city in the H1.
const HeroSection = ({
  header = "Twoja Marka Zasługuje Na Solidną Stronę.",
  desc = "Strony internetowe tworzę w pojedynkę, robię to z pasją. Zaczynając od prototypu, po design, aż do implementacji.Współpracując ze mną napewno znajdziemy rozwiązanie, którę Cię zadowoli i nada Twojej marce duszę.",
}: Prop) => {
  return (
    <div className="flex justify-between items-center p-4 h-[60vh]">
      <div className="w-1/2 space-y-4">
        <h1>{header}</h1>
        <p>{desc}</p>
      </div>
      <div className="flex justify-center items-center w-1/2">IMAGE</div>
    </div>
  );
};

export default HeroSection;
