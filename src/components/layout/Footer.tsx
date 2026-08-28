import React from "react";
import Image from "next/image";
import Section from "../common/Container";
import logo from "../../assets/images/antonikrasinski.plLogo.svg";
import { MdEmail as Email } from "react-icons/md";
import { FaPhoneAlt as Phone } from "react-icons/fa";
import { FaLinkedin as LinkedIn } from "react-icons/fa";
import { FaGithub as GitHub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Section>
        <div className="grid gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
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
            <ul>
              <li>
                <Link href="">
                  <p>Strona Główna</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p>Usługi</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p>O Mnie</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p>Blog</p>
                </Link>
              </li>
              <li>
                <Link href="">
                  <p>Kontakt</p>
                </Link>
              </li>
            </ul>
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
            <ul className="flex gap-2">
              <li>
                <LinkedIn size={26} />
              </li>
              <li>
                <GitHub size={26} />
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
