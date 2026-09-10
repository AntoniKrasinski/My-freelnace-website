import React from "react";
import Section from "../../../components/common/Section";
import project1 from "../../../assets/images/portfolio/portfolio.png";
import Image from "next/image";
import Tags from "../../../components/ui/Tags";

const ProjectsSection = () => {
  return (
    <Section
      title="Projekty"
      desc="Sprawdź moje wybrane projekty. Zaufaj doświadczonej osobie."
      id="projekty"
    >
      <article className="flex flex-col-reverse gap-14 xl:flex-row">
        <div className="space-y-4 xl:w-1/2">
          <h3>Projekty w realizacji...</h3>

          <p className="">
            W trakcie...
          </p>
          <Tags
            tags={[
              "...",
              "...",
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

export default ProjectsSection;
