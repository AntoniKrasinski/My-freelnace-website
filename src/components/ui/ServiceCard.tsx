import React from "react";
import Image from "next/image";
import Link from "next/link";
import IconCTA from "../../assets/icons/arrow-circle-up-right-fill-svgrepo-com.svg";
interface Prop {
  variant: "primary" | "secondary";
  text: string;
  image: string;
}
const ServiceCard = ({ variant, text, image }: Prop) => {
  return (
    <Link href={"services"}>
      <div
        className={`${variant === "primary" ? "bg-[#F97B48]" : "bg-[#F9FBFC]"} flex h-48 justify-around rounded-md border border-b-2 p-4`}
      >
        <div className="flex flex-col justify-between">
          <h3>{text}</h3>
          <div className="flex items-center justify-start space-x-2">
            <Image src={IconCTA} alt="Ikona 'Kliknij Mnie'" width={38} />
            <span className="font-bold">Sprawdź</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={image} alt={`Ikona ${text}`} width={90} />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
