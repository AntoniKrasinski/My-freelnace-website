import React from "react";
import Section from "@/components/common/Section";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { title } from "process";
import Square from "../ui/Square";
import CityCases from "@/types/cityCases";

const AboutSection = ({ city }: { city?: CityCases }) => {
  return (
    <Section
      title="O Mnie"
      desc="Dowiedz się z kim możesz współpracować."
      id="#o-mnie"
    >
      <div className="flex flex-col-reverse gap-6 lg:flex-row">
        <div className="flex flex-col justify-center space-y-4 lg:w-1/2">
          <p>
            <b>Cześć</b>, nazywam się Antoni jestem studentem informatyki i
            specjalizuję się w tworzeniu stron internetowych. Swoją pasję
            rozwijam od ponad dwóch lat i jestem w to naprawdę zaangażowany. Na
            przestrzeni tego okresu udało nauczyć mi się kluczowych technologii
            oraz zasad designu.{" "}
            {city && (
              <>
                {" "}
                Swoje usługi realizuję w <b>{city.locative}</b> i na terenie
                całej Polski.
              </>
            )}
          </p>
          <p>
            Podczas tworzenia projektów stawiam na kontakt z klientem, tak aby
            realizacja spełniła jego oczekiwania. <b>Nie jestem agencją</b>,
            rozmawiam konkretnie bez nawijam makaronu na uszy, po prostu uczciwa
            i bezpośrednia współpraca.
          </p>
        </div>
        <div className="flex lg:w-1/2 lg:justify-end">
          <div>
            {[
              {
                title: "Dbałość o Detale",
                desc: "Projekty są zawsze testowane i poprawiane.",
              },
              {
                title: "Bezpośredni Kontakt",
                desc: "Rozmawiasz bezpośrednio ze mną, bez pośredników.",
              },
              {
                title: "Indywidualne podejście ",
                desc: "Każdy projekt dopasowuję do potrzeb i charakteru konkretnej firmy.",
              },
            ].map((e) => (
              <div key={e.title}>
                <div className="flex items-center justify-start gap-4">
                  <div className="bg-primary theme-border p-2">
                    <FaCheck />
                  </div>
                  <h3>{e.title}</h3>
                </div>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
