import React from "react";
import Image from "next/image";
import Section from "../common/Container";
import logo from "../../assets/images/antonikrasinski.plLogo.svg";
import { MdEmail as Email } from "react-icons/md";
import { FaPhoneAlt as Phone } from "react-icons/fa";
import { FaLinkedin as LinkedIn } from "react-icons/fa";
import { FaGithub as GitHub } from "react-icons/fa";

const Footer = () => {
  return (
    <Section>
      <div className="grid grid-cols-4">
        <div>
          <Image src={logo} alt="logo" height={60} />
          <p className="">
            Antoni Krasiński
            <br />
            Tworzenie i projektowanie <br /> stron oraz sklepów internetowych
          </p>
        </div>
        <div>
          <h4>Linki</h4>
          <ul></ul>
        </div>
        <div>
          <h4>Kontakt</h4>
          <ul>
            <li className="flex gap-2">
              <Email size={22} />
              <p>kontakt@antonikrasinski.pl</p>
            </li>
            <li className="flex gap-2">
              <Phone size={22} />
              <p>792 327 596</p>
            </li>
          </ul>
        </div>
        <div>
          <h4>Social</h4>
          <ul className="flex">
            <li>
              <LinkedIn />
            </li>
            <li>
              <GitHub />
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
