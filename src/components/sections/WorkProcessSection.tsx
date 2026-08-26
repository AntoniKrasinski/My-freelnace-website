import React from "react";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import VerticalSpecialText from "../common/VerticalSpecialText";
const workProcess: { id: number; title: string; desc: string }[] = [
  {
    id: 0,
    title: "Ustalenie Potrzeb",
    desc: "fdgdgfhugfdh fdguguhfd hdugf hu fgdhu fdghuhuf dghgfd hugfd uhh gfdhgf dhiugf",
  },
  {
    id: 1,
    title: "Ustalenie Potrzeb",
    desc: "fdgdgfhugfdh fdguguhfd hdugf hu fgdhu fdghuhuf dghgfd hugfd uhh gfdhgf dhiugf",
  },
  {
    id: 2,
    title: "Ustalenie Potrzeb",
    desc: "fdgdgfhugfdh fdguguhfd hdugf hu fgdhu fdghuhuf dghgfd hugfd uhh gfdhgf dhiugf",
  },
  {
    id: 3,
    title: "Ustalenie Potrzeb",
    desc: "fdgdgfhugfdh fdguguhfd hdugf hu fgdhu fdghuhuf dghgfd hugfd uhh gfdhgf dhiugf",
  },
  {
    id: 4,
    title: "Ustalenie Potrzeb",
    desc: "fdgdgfhugfdh fdguguhfd hdugf hu fgdhu fdghuhuf dghgfd hugfd uhh gfdhgf dhiugf",
  },
];

const WorkProcessSection = () => {
  return (
    <Section background="surface">
      <div>
        <SectionHeader color="background" title="Relizacja" desc="123"/>
        <div className="flex justify-between w-full">
          <div className="w-3/4">
            <div className="border border-border rounded-br-md rounded-tl-md">
              {workProcess.map((e) => (
                <div
                  key={e.id}
                  className={`${e.id % 2 === 0 ? "bg-primary" : "bg-background"} flex justify-around`}
                >
                  <div className="specialText  p-2">
                    <span>{e.id + 1}</span>
                  </div>
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <VerticalSpecialText text="realizacja" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkProcessSection;
