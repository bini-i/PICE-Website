"use client";

import React from "react";
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

  const [headerDropDownOpen, setheaderDropDownOpen] = React.useState(false);
  const handleheaderDropDownOpen = () => setheaderDropDownOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <header
      className="sticky top-0 backdrop-blur-sm z-40"
      data-indicator=".overlay"
      data-indicator-item="button"
    >
      {/* <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
          <div className="inline-flex gap-1 items-center">
            <p>Trainings available</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
          </div>
        </div> */}

      <div className="py-5 backdrop-blur-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/">
              <div className="flex gap-3">
                <Image
                  src={Logo}
                  alt="PICE Logo"
                  height={60}
                  width={60}
                  className="pr-3 border-r-2 border-[#fff]"
                />
                <div className="flex flex-col justify-center">
                  <div className="text-xl text-[#fff] font-bold">PICE</div>
                  <div className="text-sm text-[#fff] font-bold">
                    Since 1962
                  </div>
                </div>
              </div>
            </a>
            <nav className="md:flex items-center">
              <span
                id="hamburger-button"
                className="p-2 cursor-pointer lg:hidden text-[#fcfb00]"
                onClick={handleOpen}
              >
                {open ? "" : <MenuIcon className="h-8 w-8 lg:hidden" />}

                {/* { open ? (
                    <FontAwesomeIcon icon={faClose} size="2x" className="h-10 w-10 "/>
                  ): (
                    <MenuIcon className="h-8 w-8 lg:hidden"/>
                  )} */}

                {/* <FontAwesomeIcon icon={faHamburger} size="2x" className="h-7 w-7 "/> */}
              </span>

              <ul className={open ? "sidebar-container z-999" : "hidden"}>
                <div className="sidebar">
                  <div className="close-btn-container">
                    <div id="close-button">
                      <span
                        id="hamburger-button"
                        className="p-2 cursor-pointer lg:hidden text-[#fcfb00]"
                        onClick={handleOpen}
                      >
                        {/* <span className="text-white">Close</span> */}

                        <FontAwesomeIcon
                          icon={faClose}
                          size="2x"
                          className="h-10 w-10 "
                        />
                      </span>

                      {/* <a href="#"><CloseIcon className=""/></a> */}
                    </div>
                  </div>
                  <li className="menu-item">
                    <a className="menu-item-link" href="/">Home</a>
                  </li>
                  
                  <li className="menu-item header-dropbtn" onClick={handleheaderDropDownOpen}>
                    <span className="pr-0 menu-item-link">Capacity Building</span>
                    <svg className="w-6 h-6" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </li>

                  { headerDropDownOpen ? 
                    <div className="header-dropdown-content bg-[#47470a]">
                      <li className="menu-item">
                        <Link className="ml-10 menu-item-link" href="/technology">Automotive</Link>
                      </li>
                      <li className="menu-item">
                        <Link className="ml-10 menu-item-link" href="/consultation">Computer Science</Link>
                      </li>
                    </div> : ""
                  }
                  
                  <li className="menu-item">
                    <Link className="menu-item-link" href="/technology">Technology</Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-item-link" href="/consultation">Consultation</Link>
                  </li>
                  <li className="menu-item">
                    <Link className="menu-item-link" href="/about">About</Link>
                  </li>

                  

                </div>
              </ul>

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
                <li className="">
                  <NavItem title={"Capacity Building"}>
                    <DropdownMenuCapacity />
                  </NavItem>
                </li>
                <li>
                  <Link
                    className={
                      pathname === "/technology"
                        ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-8 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
                        : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-8"
                    }
                    href="/technology"
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    className={
                      pathname === "/consultation"
                        ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-4 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200"
                        : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-4"
                    }
                    href="/consultation"
                  >
                    Consultation
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

      <div className="banner-gradient backdrop-blur-sm h-full -z-10"></div>
    </header>
  );
};
