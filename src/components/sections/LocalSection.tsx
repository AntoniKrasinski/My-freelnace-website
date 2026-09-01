import React from "react";
import Section from "../common/Section";
import Image from "next/image";
import piotrkowTrybunalski from "../../assets/images/cities/piotrkowTrybunalski.png";
import LocationProps from "@/types/locationProps";

const LocalSection = ({ cityData }: { cityData: LocationProps }) => {
  return (
    <Section
      title="Gdzie działam?"
      desc={`Realizuje usługi na terenie ${cityData.city.genitive} i w całej Polsce`}
      background="surface"
    >
      <div className="flex flex-col-reverse gap-14 xl:flex-row">
        <div className="space-y-4 xl:w-1/2">
          <h3>Tworzę strony internetowe w {cityData.city.accusative}</h3>

          <p className="">
            Tworzę nowoczesne strony oraz sklepy internetowe dla firm z{" "}
            {cityData.city.genitive}, które są szybkie, responsywne i
            przygotowane pod lokalne SEO dla {cityData.city.genitive} oraz
            okolic.
          </p>
          <p>
            Współpracuję zarówno z małymi, lokalnymi przedsiębiorcami, jak i z
            firmami działającymi w całej Polsce. Jeśli prowadzisz działalność w{" "}
            {cityData.city.locative}, pomogę Ci stworzyć stronę internetową,
            która będzie wyglądać profesjonalnie, działać szybko i wspierać
            rozwój Twojego biznesu.
          </p>
        </div>
        <div className="xl:w-1/2">
          <Image
            className="theme-border"
            src={cityData.cityImage}
            alt="Prezentacja strony internetowej 'Instalacje Elektryczne Bełchatów'"
            width={2000}
          />
        </div>
      </div>
    </Section>
  );
};

export default LocalSection;
