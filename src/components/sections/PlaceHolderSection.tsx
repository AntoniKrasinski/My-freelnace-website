import React from "react";
import Section from "../common/Section";

const PlaceHolderSection = () => {
  return (
    <Section
      title="Projekty"
      desc="Sprawdź moje wybrane projekty. Zaufaj doświadczonej osobie."
    >
      <div className="flex">
        <div>
          <div>
            <h2>Fikcyjny Sklep Internetowy</h2>
            <p>
              (Jest to strona wykonana w celu prezentacji umiejętności, nie dla
              parawdziwego klienta.)
            </p>
          </div>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odio
            quis accusantium, saepe ut, exercitationem corporis est facilis
            voluptate corrupti, dolorem adipisci mollitia hic beatae molestiae.
            Fugiat deleniti sapiente ipsa.
          </h4>
        </div>
        <div>
          <div className="test h-60 w-md">Image placeholder</div>
        </div>
      </div>
    </Section>
  );
};

export default PlaceHolderSection;
