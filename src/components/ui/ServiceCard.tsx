import React from "react";
import Image from "next/image";
import IconCTA from "../../assets/icons/arrow-circle-up-right-fill-svgrepo-com.svg";
interface Prop {
  variant: "primary" | "secondary";
  text: string;
  image: string;
}
const ServiceCard = ({ variant, text, image }: Prop) => {
  return (
    <div
      className={`${variant === "primary" ? "bg-[#F97B48]" : "bg-[#F9FBFC]"} border border-b-2 rounded-md p-4 flex justify-around w-md h-48`}
    >
      <div className="flex flex-col justify-between">
        <h3>{text}</h3>
        <div className="flex justify-start items-center space-x-2">
          <Image src={IconCTA} alt="Ikona 'Kliknij Mnie'" width={38} />
          <span className="font-bold">Zobacz Więcej</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src={image} alt={`Ikona ${text}`} width={90} />
      </div>
    </div>
  );
};

export default ServiceCard;
