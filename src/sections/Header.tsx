"use client";

import React from "react";
import { motion } from "framer-motion";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/close-button.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faClose, faHamburger } from "@fortawesome/free-solid-svg-icons";

import { Barlow_Semi_Condensed } from "next/font/google";
import { twMerge } from "tailwind-merge";

import { Menu, X, ChevronDown } from "lucide-react";
import { Menus } from "./../app/utils";


const barlow = Barlow_Semi_Condensed({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

function NavItem(props: any) {
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="flex items-center"
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
    >
      <Link
        className={
          pathname === "/capacity-building"
            ? "px-3 ml-2 text-nowrap underline decoration-[#fcfb00] decoration-4 underline-offset-8 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
            : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer text-nowrap hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-8"
        }
        href="/"
      >
        {props.title}
      </Link>

      <svg
        className="h-4 w-4 fill-[#fff]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>{" "}
      </svg>

      {open && props.children}
    </div>
  );
}

function DropdownMenuCapacity() {
  const pathname = usePathname();

  function DropdownItem(props: any) {
    return (
      <Link
        className={
          pathname === "/"
            ? "menu-item hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
            : "menu-item hover:-translate-y-1 hover:scale-101"
        }
        href={props.pathname}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <div className="dropdown">
      <div>
        <DropdownItem pathname="/capacity-building/trainings/automotive">
          Automotive
        </DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/computer">
          Computer Science
        </DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/construction">
          Construction Technology
        </DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/electronics">
          Electrical Electronics
        </DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/garment">
          Garment
        </DropdownItem>
      </div>
      <div>
        <DropdownItem pathname="/capacity-building/trainings/leather">
          Leather Technology
        </DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/manufacturing">
          Manufacturing Technology
        </DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/welding">
          Welding Technology
        </DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/wood">
          Wood Works
        </DropdownItem>
      </div>
    </div>
  );
}

function DropdownMenuAbout() {
  const pathname = usePathname();

  function DropdownItem(props: any) {
    return (
      <Link
        className={
          pathname === "/"
            ? "menu-item hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
            : "menu-item hover:-translate-y-1 hover:scale-101"
        }
        href={props.pathname}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <div className="dropdown w-40  flex-col">
      <DropdownItem pathname="/about">Mission</DropdownItem>
      <DropdownItem pathname="/offices">Offices</DropdownItem>
    </div>
  );
}

export const Header = () => {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState<number | null>(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const [headerDropDownOpen, setheaderDropDownOpen] = React.useState(false);
  const handleheaderDropDownOpen = () => setheaderDropDownOpen((cur) => !cur);
  
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <header
      className="h-16 lg:h-20 flex items-center sticky top-0 backdrop-blur-sm z-50"
      data-indicator=".overlay"
      data-indicator-item="button"
    >
      {/* <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
          <div className="inline-flex gap-1 items-center">
            <p>Trainings available</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
          </div>
        </div> */}

      <div className="backdrop-blur-sm w-full">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/">
              <div className="flex gap-3 items-center">
                <Image
                  src={Logo}
                  alt="PICE Logo"
                  // height={40}
                  // width={40}
                  className="size-8"
                />
                <div className="flex flex-col justify-center pl-3 border-l-2 border-[#fff]">
                  <div className="text-[15px] leading-5 lg:text-lg lg:leading-7 text-[#fff] font-bold">PICE</div>
                  <div className="text-[12px] leading-4 lg:text-sm lg:leading-5 text-[#fff] font-bold">
                    Since 1962
                  </div>
                </div>
              </div>
            </a>
            <nav className="md:flex items-center">
              <div className="lg:hidden">
                <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
                  {
                    isOpen ? <X className="text-[#fcfb00]"/> : <Menu className="text-[#fcfb00]"/>
                  }
                </button>
              </div>

      {/* <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      > */}
      <motion.div
        className="banner-gradient-full-screen fixed h-screen left-0 right-0 top-12 overflow-y-auto bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative font-[600]"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        {name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
              {/* <!-- Mobile menu, show/hide based on menu state. --> */}
              {/* <div className="" id="mobile-menu">
                  <div className="space-y-1 px-2 pt-2 pb-3"> */}
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              {/* <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
                  </div>
                </div> */}

              <ul className="hidden top-nav lg:flex gap-2 lg:px-6">
                <li>
                  <Link
                    className={
                      pathname === "/"
                        ? "underline decoration-[#fcfb00] decoration-4 underline-offset-4 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
                        : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-4"
                    }
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      pathname === "/latest"
                        ? "underline decoration-[#fcfb00] decoration-4 underline-offset-4 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
                        : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-4"
                    }
                    href="/latest"
                  >
                    Latest
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      pathname === "/admission"
                        ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-8 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
                        : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-8"
                    }
                    href="/admission"
                  >
                    Admission
                  </Link>
                </li>
                <li className="">
                  <NavItem title={"Academics"}>
                    <DropdownMenuCapacity />
                  </NavItem>
                </li>
                <li>
                  <Link
                    className={
                      pathname === "/innovation"
                        ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-4 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
                        : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-4"
                    }
                    href="/innovation"
                  >
                    Innovation
                  </Link>
                </li>
                <li className="">
                  <NavItem title={"About"}>
                    <DropdownMenuAbout />
                  </NavItem>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="banner-gradient backdrop-blur-sm -z-10"></div>
    </header>
  );
};
