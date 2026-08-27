"use client";
import { useState } from "react";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import VerticalSpecialText from "../common/VerticalSpecialText";
import { FaChevronDown as DropDown } from "react-icons/fa";
const questionsAnswers: { question: string; anwser: string }[] = [
  { question: "Jak długo trwa tworzenie strony?", anwser: "123" },
  { question: "Jakie są dodatkowe koszta utrzymania strony?", anwser: "123" },
  { question: "Ile kosztuje wykonanie strony www?", anwser: "123" },
  {
    question: "Jak po odebraniu strony będę mógł edytować treści?",
    anwser: "123",
  },
  { question: "123", anwser: "123" },
  { question: "123", anwser: "123" },
];

const WorkProcessSection = () => {
  const [dropAnwser, setDropAnwser] = useState<number>(0);

  const toogleQuestion = (index: number) => {
    setDropAnwser(index);
  };
  return (
    <Section
      background="surface"
      title="FAQ"
      desc="FAQ - Frequently Asked Questions, czyli najczęściej zadawane pytania."
    >
      <div className="flex w-full flex-row-reverse justify-between">
        <div className="w-3/4">
          <div className="space-y-4">
            {questionsAnswers.map((e, index) => (
              <div key={index}>
                <div
                  onClick={() => toogleQuestion(index)}
                  className="border-border bg-primary border border-b-2 border-l-2 p-2 hover:cursor-pointer"
                >
                  <div className="mx-4 flex items-center justify-between">
                    <h3 className="">{e.question}</h3>
                    <span>
                      <DropDown size={30} className="" />
                    </span>
                  </div>
                </div>
                <div
                  className={`${dropAnwser === index ? "block" : "hidden"} border-border bg-background border border-t-0 border-b-2 border-l-2`}
                >
                  {" "}
                  {/*add framer motion animation*/}
                  <p className="mx-6">{e.anwser}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <VerticalSpecialText text="pytania" />
        </div>
      </div>
    </Section>
  );
};

export default WorkProcessSection;
