import React from "react";
import Image from "next/image";
import Section from "../common/Container";
import logo from "../../assets/images/antonikrasinski.plLogo.svg";
import Button from "../ui/Button";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
// Responsive

const NavBar = () => {
  return (
    <Section>
      <header className="flex h-fit w-full flex-row items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={60} />
          </Link>
        </div>
        <div className="flex flex-row items-center lg:hidden">
          <MdMenu size={60} />
        </div>
        <div className="hidden flex-row items-center space-x-20 lg:flex">
          <ul className="flex flex-row space-x-10">
            <li>
              <Link href={""}>Usługi</Link>
            </li>
            <li>
              <Link href={""}>O mnie</Link>
            </li>
            <li>
              <Link href={""}>Blog</Link>
            </li>
            <li>
              <Link href={"/contact"}>Kontakt</Link>
            </li>
          </ul>
          <Button>Wycena</Button>
        </div>
      </header>
    </Section>
  );
};

export default NavBar;
