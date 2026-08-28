import React from "react";
import Section from "../common/Section";

const PlaceHolderSection = () => {
  return (
    <Section
      title="Projekty"
      desc="Sprawdź moje wybrane projekty. Zaufaj doświadczonej osobie."
    >
      <div className="flex flex-col lg:flex-row gap-14">
        <div>
          <div >
            <h2>Fikcyjny Sklep Internetowy</h2>
            <p>
              (Jest to strona wykonana w celu prezentacji umiejętności, nie dla
              parawdziwego klienta.)
            </p>
          </div>
          <p className="md:mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus non sint a corporis doloribus alias voluptas delectus unde optio, nulla dolore perspiciatis, atque dolores cupiditate ab culpa voluptatem hic magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deserunt inventore suscipit tenetur sint cum facilis quo assumenda ut porro quasi eaque, sunt explicabo sapiente ad ullam beatae delectus dolorem.</p>
        </div>
        <div>
          <div className="test h-60 w-xl">Image placeholder</div>
        </div>
      </div>
    </Section>
  );
};

export default PlaceHolderSection;
