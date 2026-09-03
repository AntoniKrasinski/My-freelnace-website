import React from "react";
import Section from "../common/Section";
import VerticalSpecialText from "../common/VerticalSpecialText";
const defaultProcess: { title: string; desc: string }[] = [
  {
    title: "Ustalenie Potrzeb",
    desc: "Rozmowa z klientem, na tym etapie poznaje problem biznesowy, który moja usługa ma rozwiązać. Na podstawie informacji, które uzyskałem proponuje rozwiązanie. Na tym etapie również proszę klienta o preferencje wizualne strony. ",
  },
  {
    title: "Design",
    desc: "Tworzę wstępny projekt strony, który przesyłam klientowi do akceptacji. Gdy klient zatwierdzi projekt przechodzę do następnego etapu, w innym przypadku poprawiam projekt według preferencji klienta.",
  },
  {
    title: "Kodowanie i Testowanie",
    desc: "Tworzę stronę internetową w WoordPress lub Next.js a następnie ją dokładnie testuje pod względami takimi jak responsywność, szybkość ładowania oraz kilku innych aspektów.",
  },
  {
    title: "Wdrożenie",
    desc: "Gdy klient finalnie zatwiedzi projekt wysyłam kod na hosting, aby był on dostępny w internecie. ",
  },
  {
    title: "Utrzymanie",
    desc: "Jeśli klient zauważy jakiś błąd na stronie jestem zobowiązany go rozwiązać.",
  },
];

const WorkProcessSection = ({
  workProcess = defaultProcess,
}: {
  workProcess?: { title: string; desc: string }[];
}) => {
  return (
    <Section
      background="surface"
      title="Relizacja"
      desc="Do każdego zlecenia podchodzę z planem, zależy mi na tym, aby  każda strona którą wykonuję, była spójna i łatwa w rozwoju oraz utrzymaniu."
      id="realizacja"
    >
      <div>
        <div className="flex w-full justify-between">
          <div className="xl:w-3/4">
            <div className="border-border overflow-hidden rounded-tl-xl rounded-br-xl border border-b-2 border-l-2">
              {workProcess.map((e, index) => (
                <div
                  key={index}
                  className={`${index % 2 === 0 ? "bg-primary" : "bg-background"} flex items-center`}
                >
                  <div className="specialText p-2 px-6">
                    <span>{index + 1}</span>
                  </div>
                  <div className="p-4">
                    <h3>{e.title}</h3>
                    <p>{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden xl:flex">
            <VerticalSpecialText text="realizacja" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkProcessSection;
