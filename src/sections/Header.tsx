"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg"
import CloseIcon from "@/assets/close-button.svg"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

import { Barlow_Semi_Condensed } from "next/font/google";
import { twMerge } from "tailwind-merge";

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

function NavItem(props: any) {
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center" onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)} >
      <Link className={ pathname === "/capacity-building" ? "px-3 ml-2 text-nowrap underline decoration-[#fcfb00] decoration-4 underline-offset-8 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer text-nowrap hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-8"} href="/">{props.title}</Link>
                      
      <svg className="h-4 w-4 fill-[#fff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path> </svg>

      {open && props.children}
    </div>
  )
}

function DropdownMenuCapacity() {
  const pathname = usePathname();

  function DropdownItem(props: any) {
    return (
      <Link className={ pathname === "/" ? "menu-item hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "menu-item hover:-translate-y-1 hover:scale-101"} href={props.pathname}>{props.children}</Link>
    )
  }
  
  return (
    <div className='dropdown'>
      <div>
        <DropdownItem pathname="/capacity-building/trainings/automotive">Automotive</DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/computer">Computer Science</DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/construction">Construction Technology</DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/electronics">Electrical Electronics</DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/garment">Garment</DropdownItem>
      </div>
      <div>
        <DropdownItem pathname="/capacity-building/trainings/leather">Leather Technology</DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/manufacturing">Manufacturing Technology</DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/welding">Welding Technology</DropdownItem>
        <DropdownItem pathname="/capacity-building/trainings/wood">Wood Works</DropdownItem>
      </div>
  </div>
  )
}

function DropdownMenuAbout() {
  const pathname = usePathname();

  function DropdownItem(props: any) {
    return (
      <Link className={ pathname === "/" ? "menu-item hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "menu-item hover:-translate-y-1 hover:scale-101"} href={props.pathname}>{props.children}</Link>
    )
  }
  
  return (
    <div className='dropdown w-40  flex-col'>
        <DropdownItem pathname="/about">Mission</DropdownItem>
        <DropdownItem pathname="/offices">Offices</DropdownItem>
  </div>
  )
}

export const Header = () => {
  const pathname = usePathname();

  return (
      <header className="sticky top-0 backdrop-blur-sm z-40" data-indicator=".overlay" data-indicator-item="button">
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
                  <Image src={Logo} alt="PICE Logo" height={60} width={60} className="pr-3 border-r-2 border-[#fff]"/>
                  <div className="flex flex-col justify-center">
                    <div className="text-xl text-[#fff] font-bold">PICE</div>
                    <div className="text-sm text-[#fff] font-bold">Since 1962</div>
                  </div>
                </div>
              </a>
              <nav className="md:flex items-center">
                <span id="hamburger-button" className="p-2 cursor-pointer md:hidden text-[#fcfb00]">
                  {/* <MenuIcon className="h-5 w-5 md:hidden"/> */}

                  <FontAwesomeIcon icon={faHamburger} size="2x" className="h-7 w-7 "/>
                </span>
                <ul className="sidebar-container z-999">
                  <div className="sidebar">
                    <div className="close-btn-container">
                      <div id="close-button">
                        <span className="text-white">Close</span>
                        <a href="#"><CloseIcon className=""/></a>
                      </div>
                    </div>
                    <li className="menu-item"><a href="/">Home</a></li>
                    <li className="menu-item"><Link href="/capacity-building">Capacity Building</Link></li>
                    <li className="menu-item"><Link href="/technology">Technology</Link></li>
                    <li className="menu-item"><Link href="/consultation">Consultation</Link></li>
                    <li className="menu-item"><Link href="/mission-vision-and-values">About</Link></li>
                  </div>
                </ul>
                <ul className="hidden top-nav md:flex gap-2 lg:px-6">
                  <li><Link className={ pathname === "/" ? "underline decoration-[#fcfb00] decoration-4 underline-offset-4 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-4"} href="/">Home</Link></li>
                  <li className="">
                    <NavItem title={"Capacity Building"}>
                      <DropdownMenuCapacity />
                    </NavItem>
                  </li>
                  <li><Link className={ pathname === "/technology" ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-8 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-8"} href="/technology">Technology</Link></li>
                  <li><Link className={ pathname === "/consultation" ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-4 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-4"} href="/consultation">Consultation</Link></li>
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
