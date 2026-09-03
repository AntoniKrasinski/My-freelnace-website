import React from "react";
import Section from "@/components/common/Section";
import Container from "@/components/common/Container";
import type { Benefit } from "../type";
import Image from "next/image";
const ServiceBenefits = ({
  service,

  benefits,
}: {
  service: string;

  benefits: Benefit[];
}) => {
  return (
    <Container>
      <h2>Każda realizacja obejmuje:</h2>
      <div className="flex items-center justify-center">
        <ul className="mt-2 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="bg-surface theme-border-rounded flex w-full flex-col items-center gap-2 p-4 text-center"
            >
              <div className="flex h-12.5 items-center justify-center">
                <Image
                  src={benefit.img}
                  alt={benefit.title}
                  width={50}
                  height={50}
                />
              </div>
              <span>{benefit.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ServiceBenefits;
