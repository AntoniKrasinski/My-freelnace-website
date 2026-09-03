import React from "react";
import Section from "@/components/common/Section";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import defaultImage from "@/assets/images/servicesImages/serviceSection.svg";
const SericeDetail = ({
  service,
  title,
  desc,
}: {
  service: string;
  title: string;
  desc: string;
}) => {
  return (
    <Section noH title={service} desc="Dowiedz się więcej o mojej usłudze.">
      <div className="flex">
        <div className="flex lg:w-1/2">
          <Image src={defaultImage} alt="" height={350} />
        </div>
        <div className="lg:w-1/2">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className=" w-fit pt-4">
            <Link href="#kontakt" className="button">
              Darmowa Wycena
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SericeDetail;
