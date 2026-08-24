import React from "react";
import Image from "next/image";
import logo from "../../assets/images/antonikrasinski.plLogo.svg";
import Button from "../ui/Button";
import { MdMenu } from "react-icons/md";
// Responsive

const NavBar = () => {
  return (
    <header className="flex flex-row justify-between p-4 w-full h-fit">
      <div>
        <Image src={logo} alt="logo" height={35} />
      </div>
      <div className="flex flex-row items-center md:hidden">
        <MdMenu size={35}/>
      </div>
      <div className="hidden md:flex flex-row items-center space-x-10">
        <ul className="flex flex-row space-x-5">
          <li>Usługi</li>
          <li>O mnie</li>
          <li>Blog</li>
          <li>Kontakt</li>
        </ul>
        <Button>Wycena</Button>
      </div>
    </header>
  );
};

export default NavBar;
