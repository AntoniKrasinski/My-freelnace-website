"use client";
import { useState } from "react";
import Section from "../common/Section";
import VerticalSpecialText from "../common/VerticalSpecialText";
import { FaChevronDown as DropDown } from "react-icons/fa";
const questionsAnswers: { question: string; anwser: string }[] = [
  {
    question: "Jak długo trwa tworzenie strony internetowej?",
    anwser:
      "Czas realizacji strony internetowej zależy od wielu czynników, takich jak typ i skala projektu. Stronę typu landing page, czyli pojedynczą stronę internetową, tworzę zwykle w około tydzień. Wykonanie bardziej złożonej strony internetowej lub sklepu może potrwać od 3 do ponad 6 tygodni, w zależności od skali projektu. W większości przypadków czas realizacji mieści się jednak w dolnej granicy tego przedziału.",
  },

  {
    question: "Jakie są dodatkowe koszta utrzymania strony?",
    anwser:
      "Hosting oraz domenę na pierwszy rok zapewniam w ramach realizacji projektu. W kolejnych latach koszt domeny wynosi około 50 zł rocznie, natomiast koszt hostingu zależy od wybranego rozwiązania i zakresu projektu. W przypadku landing page hosting może być bezpłatny, natomiast w przypadku sklepów internetowych jego koszt może wynosić około 30 zł miesięcznie.",
  },

  {
    question: "Ile kosztuje wykonanie strony internetowej?",
    anwser:
      "Koszt wykonania strony internetowej zaczyna się u mnie od 2000 zł za landing page. W cenę wliczone są również hosting oraz zakup domeny na pierwszy rok. Ceny bardziej rozbudowanych stron internetowych, serwisów oraz sklepów internetowych zaczynają się od około 4000 zł. Ostateczna cena zależy od zakresu projektu, a także od tego, czy klient posiada już przygotowane treści lub projekt graficzny.",
  },

  {
    question: "Czy po odebraniu strony będę mógł edytować treści?",
    anwser:
      "Tak. Większość stron, które tworzę, wykonuję w WordPressie. Jest to system, który pozwala na łatwe edytowanie treści strony bez znajomości programowania. Po zakończeniu realizacji będziesz mógł samodzielnie aktualizować treści na stronie.",
  },

  {
    question:
      "Czy strona internetowa będzie responsywna i dostosowana do urządzeń mobilnych?",
    anwser:
      "Tak. Od wielu lat jest to standard w tej branży. Niedostosowana strona mogłaby negatywnie wpłynąć na komfort użytkowania, dlatego zwracam na to szczególną uwagę. Dbam o to, aby każda część strony była odpowiednio dostosowana do komputerów, tabletów oraz smartfonów.",
  },

  {
    question: "Czy mogę później rozbudować stronę o nowe funkcje?",
    anwser:
      "Tak. Tworzę strony z myślą o ich potencjalnym dalszym rozwoju, dlatego w przyszłości można je rozbudować o nowe podstrony czy funkcje.",
  },
];

const WorkProcessSection = () => {
  const [dropAnwser, setDropAnwser] = useState<number | null>(0);

  const toogleQuestion = (index: number) => {
    if (index === dropAnwser) {
      setDropAnwser(null);
    } else {
      setDropAnwser(index);
    }
  };
  return (
    <Section
      background="surface"
      title="FAQ"
      desc="FAQ - Frequently Asked Questions, czyli najczęściej zadawane pytania."
      id="faq"
    >
      <div className="flex w-full flex-row-reverse justify-between">
        <div className="xl:w-3/4">
          <div className="space-y-4">
            {questionsAnswers.map((e, index) => (
              <div key={index}>
                <div
                  onClick={() => toogleQuestion(index)}
                  className="bg-primary theme-border p-2 hover:cursor-pointer"
                >
                  <div className="mx-4 flex items-center justify-between">
                    <h3 className="">{e.question}</h3>
                    <span>
                      <DropDown size={30} className="" />
                    </span>
                  </div>
                </div>
                <div
                  className={`${dropAnwser === index ? "block" : "hidden"} bg-background theme-border`}
                >
                  {" "}
                  {/*add framer motion animation*/}
                  <p className="mx-6">{e.anwser}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden xl:block">
          <VerticalSpecialText text="pytania" />
        </div>
      </div>
    </Section>
  );
};

export default WorkProcessSection;
