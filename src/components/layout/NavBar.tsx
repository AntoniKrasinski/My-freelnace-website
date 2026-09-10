"use client";
import Image from "next/image";
import Section from "../common/Container";
import logo from "../../assets/images/logo.svg";
import { MdMenu } from "react-icons/md";
import { FaChevronDown as DropDown } from "react-icons/fa";
import Link from "next/link";
import services from "@/features/myServices/data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { div } from "motion/react-client";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  title: string;
  slug: string;
  dropDown?: navDropDown[];
  cta?: boolean;
}
interface navDropDown {
  title: string;
  slug: string;
}

const defaultNav: NavItem[] = [
  {
    title: "Usługi",
    slug: "/#uslugi",
    dropDown: Object.entries(services).map((serviceData) => ({
      title: serviceData[1].name,
      slug: `/usluga/${serviceData[0]}`,
    })),
  },
  {
    title: "O Mnie",
    slug: "/#o-mnie",
  },
  {
    title: "Kontakt",
    slug: "#kontakt",
  },
  {
    title: "Wycena",
    slug: "#kontakt",
    cta: true,
  },
];

const NavDeskopt = () => {
  return (
    <nav
      aria-label="Główna nawigacja"
      className="hidden flex-row items-center space-x-20 lg:flex"
    >
      <ul className="flex flex-row space-x-10">
        {defaultNav.map((navItem) => (
          <li key={navItem.title} className="flex items-center justify-center">
            {navItem.dropDown ? (
              <div className="group relative">
                <Link
                  href={navItem.slug}
                  className="flex items-center justify-center gap-2"
                >
                  {navItem.title}

                  <DropDown />
                </Link>

                <NavDropDown navSubitems={navItem.dropDown} />
              </div>
            ) : (
              <Link href={navItem.slug} className={navItem.cta ? `button` : ``}>
                {navItem.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
const NavDropDown = ({ navSubitems }: { navSubitems: navDropDown[] }) => {
  const path = usePathname();

  return (
    <div className="invisible absolute top-full left-1/2 group-hover:visible">
      {navSubitems.map((navSubItem) => (
        <Link
          key={navSubItem.title}
          href={navSubItem.slug}
          className={`theme-border block w-full p-2 whitespace-nowrap ${path.includes(navSubItem.slug) ? "bg-primary" : "bg-surface"}`}
        >
          {navSubItem.title}
        </Link>
      ))}
    </div>
  );
};

const NavMobile = ({
  isVisivle,
  closeMenu,
}: {
  isVisivle: boolean;
  closeMenu: () => void;
}) => {
  const path = usePathname();
  const [dropDown, setDropDown] = useState(false);

  return (
    <AnimatePresence initial={false}>
      {isVisivle ? (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-background fixed left-0 z-10 h-screen w-full overflow-hidden lg:hidden"
          id="navMenu"
        >
          <nav
            aria-label="Nawigacja mobilna"
            className="flex items-center justify-center"
          >
            <ul className="flex h-screen w-[200px] flex-col gap-2 pt-30">
              {defaultNav.map((navItem) => (
                <li key={navItem.title} className="">
                  {navItem.dropDown ? (
                    <div className="group relative">
                      <div
                        onClick={() => {
                          setDropDown(!dropDown);
                        }}
                        className="flex items-center gap-2 text-xl"
                      >
                        {navItem.title}
                        <DropDown />
                      </div>
                      {dropDown &&
                        navItem.dropDown.map((navSubItem) => (
                          <Link
                            onClick={closeMenu}
                            key={navSubItem.title}
                            href={navSubItem.slug}
                            className={`theme-border block whitespace-nowrap ${path.includes(navSubItem.slug) ? "bg-primary" : "bg-surface"}`}
                          >
                            {navSubItem.title}
                          </Link>
                        ))}
                    </div>
                  ) : (
                    <Link
                      onClick={closeMenu}
                      href={navItem.slug}
                      className={`text-xl ${navItem.cta ? `button` : ``}`}
                    >
                      {navItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const path = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full">
      <Section>
        <div className="flex h-fit w-full flex-row items-center justify-between">
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={70} />
          </Link>

          <div className="flex flex-row items-center lg:hidden">
            <MdMenu
              size={60}
              onClick={() => {
                setShowMobileNav(!showMobileNav);
              }}
            />
          </div>

          <NavDeskopt />
        </div>
        <NavMobile
          isVisivle={showMobileNav}
          closeMenu={() => {
            setShowMobileNav(false);
          }}
        />
      </Section>
    </header>
  );
};

export default NavBar;
