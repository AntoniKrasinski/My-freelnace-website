import React from "react";
import Image from "next/image";
import Section from "../common/Container";
import logo from "../../assets/images/antonikrasinski.plLogo.svg";
import Button from "../ui/Button";
import { MdMenu } from "react-icons/md";
// Responsive

const NavBar = () => {
  return (
    <Section>
      <header className="flex h-fit w-full flex-row items-center justify-between">
        <div>
          <Image src={logo} alt="logo" height={60} />
        </div>
        <div className="flex flex-row items-center md:hidden">
          <MdMenu size={60} />
        </div>
        <div className="hidden flex-row items-center space-x-20 md:flex">
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
