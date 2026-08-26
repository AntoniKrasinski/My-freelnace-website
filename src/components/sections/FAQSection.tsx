import React from "react";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import VerticalSpecialText from "../common/VerticalSpecialText";


const WorkProcessSection = () => {
  return (
    <Section background="surface">
      <div>
        <SectionHeader color="background" title="FAQ" desc="123"/>
        <div className="flex justify-between w-full">
          <div className="w-3/4">
            
          </div>
          <div className="">
            <VerticalSpecialText text="pytania" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkProcessSection;
