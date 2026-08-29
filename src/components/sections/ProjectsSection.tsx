import React from "react";
import Section from "../common/Section";
import localElectircWebsite from "../../assets/images/portfolio/Wordpress Elektyk.png";
import Image from "next/image";

const PlaceHolderSection = () => {
  return (
    <Section
      title="Projekty"
      desc="Sprawdź moje wybrane projekty. Zaufaj doświadczonej osobie."
    >
      <article className="flex flex-col gap-14 lg:flex-row">
        <div>
          <div>
            <h3>Landing Page dla Elektryka</h3>
            <p>
              (Jest to strona wykonana w celu prezentacji umiejętności, nie dla
              parawdziwego klienta.)
            </p>
          </div>
          <p className="md:mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus non sint a corporis doloribus alias voluptas delectus
            unde optio, nulla dolore perspiciatis, atque dolores cupiditate ab
            culpa voluptatem hic magni! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste deserunt inventore suscipit tenetur sint cum
            facilis quo assumenda ut porro quasi eaque, sunt explicabo sapiente
            ad ullam beatae delectus dolorem.
          </p>
        </div>
        <div>
          <Image
            src={localElectircWebsite}
            alt="Prezentacja strony internetowej 'Instalacje Elektryczne Bełchatów'"
            width={2000}
            height={2000}
          />
        </div>
      </article>
    </Section>
  );
};

export default PlaceHolderSection;
