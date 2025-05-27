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


function NavItem(props: any) {
  const pathname = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center" onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(!open)} >
      <Link className={ pathname === "/capacity-building" ? "px-3 ml-2 text-nowrap underline decoration-[#fcfb00] decoration-4 underline-offset-8 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer text-nowrap hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-8"} href="/capacity-building">Capacity Building</Link>
                      
      <svg className="h-4 w-4 fill-[#fff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path> </svg>

      {open && props.children}
    </div>
  )
}

function DropdownMenu() {
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
              <div className="flex gap-3">
                <Image src={Logo} alt="PICE Logo" height={40} width={40} />
                <div className="pl-3 border-l-2 border-[#fff] flex items-center"><a href="/" className="text-xl text-[#fff] font-bold">PICE</a></div>
              </div>
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
                    <NavItem>
                      <DropdownMenu />
                    </NavItem>
                  </li>
                  <li><Link className={ pathname === "/technology" ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-8 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-8"} href="/technology">Technology</Link></li>
                  <li><Link className={ pathname === "/consultation" ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-4 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-4"} href="/consultation">Consultation</Link></li>
                  <li><Link className={ pathname === "/about" ? "px-3 ml-2 underline decoration-[#fcfb00] decoration-4 underline-offset-4 hover:-translate-y-1 hover:scale-101 hover:cursor-pointer transition duration-200" : "hover:-translate-y-1 hover:scale-101 hover:cursor-pointer hover:underline hover:decoration-[#fcfb00] decoration-4 underline-offset-4"} href="/about">About</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="banner-gradient backdrop-blur-sm h-full -z-10"></div>

      </header>
    );
};
