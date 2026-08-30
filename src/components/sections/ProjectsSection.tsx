import React from "react";
import Section from "../common/Section";
import project1 from "../../assets/images/portfolio/portfolio.png";
import Image from "next/image";
import Tags from "../ui/Tags";

const PlaceHolderSection = () => {
  return (
    <Section
      title="Projekty"
      desc="Sprawdź moje wybrane projekty. Zaufaj doświadczonej osobie."
    >
      <article className="flex flex-col-reverse gap-14 xl:flex-row">
        <div className="space-y-4 xl:w-1/2">
          <h3>Strona Internetowa dla Firmy XYZ</h3>

          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus non sint a corporis doloribus alias voluptas delectus
            unde optio, nulla dolore perspiciatis, atque dolores cupiditate ab
            culpa voluptatem hic magni! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste deserunt inventore suscipit tenetur sint cum
            facilis quo assumenda ut porro quasi eaque, sunt explicabo sapiente
            ad ullam beatae delectus dolorem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Hic praesentium dolore architecto
            consequatur non sit facilis tenetur dolores, et facere ut, quia
            similique quasi vel alias deleniti ex qui harum?
          </p>
          <Tags
            tags={[
              "Własny Design",
              "CMS",
              "Projekt Logo",
              "Formularz Kontaktowy",
            ]}
          />
        </div>
        <div className="xl:w-1/2">
          <Image
            className="theme-border"
            src={project1}
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
