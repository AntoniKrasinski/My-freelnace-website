import React from "react";
import Image from "next/image";
import Section from "../common/Container";
import logo from "../../assets/images/logo.svg";
import { MdMenu } from "react-icons/md";
import { FaChevronDown as DropDown } from "react-icons/fa";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <Section>
        <div className="flex h-fit w-full flex-row items-center justify-between">
          <div>
            <Link href={"/"}>
              <Image src={logo} alt="logo" height={70} />
            </Link>
          </div>
          <div className="flex flex-row items-center lg:hidden">
            <MdMenu size={60} />
          </div>
          <nav
            aria-label="Główna nawigacja"
            className="hidden flex-row items-center space-x-20 lg:flex"
          >
            <ul className="flex flex-row space-x-10">
              <li>
                <Link className="" href={""}>
                  <span className="flex items-center justify-center gap-2">
                    Usługi
                    <DropDown size={18} />
                  </span>
                </Link>
              </li>
              <li>
                <Link href={""}>O mnie</Link>
              </li>
              <li>
                <Link href={""}>Blog</Link>
              </li>
              <li>
                <Link href="#contact">Kontakt</Link>
              </li>
            </ul>
            <Link href="#kontakt" className="button">
              Wycena
            </Link>
          </nav>
        </div>
      </Section>
    </header>
  );
};

//ToDo
const desktopNav = () => {
  return (
    <nav
      aria-label="Główna nawigacja"
      className="hidden flex-row items-center space-x-20 lg:flex"
    >
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
      <Link href="kontakt" className="button">
        Wycena
      </Link>
    </nav>
  );
};
const mobileNav = () => {
  return (
    <div className="flex flex-row items-center lg:hidden">
      <MdMenu size={60} />
    </div>
  );
};

export default NavBar;
