import React from "react";
import Image from "next/image";
import Section from "../common/Section";
import logo from "../../assets/images/antonikrasinski.plLogo.svg";
import Button from "../ui/Button";
import { MdMenu } from "react-icons/md";
// Responsive

const NavBar = () => {
  return (
    <Section>
      <header className="flex flex-row justify-between items-center w-full h-fit">
        <div>
          <Image src={logo} alt="logo" height={60} />
        </div>
        <div className="flex flex-row items-center md:hidden">
          <MdMenu size={60} />
        </div>
        <div className="hidden md:flex flex-row items-center space-x-20">
          <ul className="flex flex-row space-x-10">
            <li>Usługi</li>
            <li>O mnie</li>
            <li>Blog</li>
            <li>Kontakt</li>
          </ul>
          <Button>Wycena</Button>
        </div>
      </header>
    </Section>
  );
};

export default NavBar;
