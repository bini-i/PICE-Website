"use client";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import Image from "next/image";
import logo from "@/assets/Logo.png";
import { Barlow_Semi_Condensed } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { FaUserTie, FaBuilding } from "react-icons/fa";

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const navLinks = [
  { href: "/offices/dean", label: "Dean" },
  { href: "/offices/capacity-vice-dean", label: "Capacity Building Vice Dean" },
  { href: "/offices/research-vice-dean", label: "Institution Development Vice Dean" },
  { href: "/offices/technology-vice-dean", label: "Technology Vice Dean" },
];

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 shadow-lg pt-[5rem]">
        <Header />
        {/* Banner with integrated navigation */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 md:py-14">
          <div className="flex items-center gap-4 mb-2">
            <span className="inline-flex items-center justify-center bg-white/20 rounded-full p-4 shadow-lg">
              <FaBuilding className="text-white text-2xl md:text-4xl drop-shadow" />
            </span>
            <h2
              className={twMerge(
                barlow.className,
                "text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg"
              )}
            >
              Offices
            </h2>
          </div>
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-medium text-center max-w-2xl">
            Explore the leadership and key offices that drive our institution’s vision and excellence.
          </p>
          <div className="mt-4 w-20 md:w-24 h-1 rounded-full bg-white/70" />

          {/* Integrated navigation */}
          <nav className="w-full flex justify-center mt-8">
            <ul className="flex flex-wrap gap-2 md:gap-4 px-2 md:px-0">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={twMerge(
                      "block px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-150 border-t-4 text-base md:text-lg",
                      pathname === link.href
                        ? "bg-white text-blue-700 border-blue-600 shadow"
                        : "bg-blue-600/30 text-white border-transparent hover:bg-white hover:text-blue-700 hover:border-blue-400"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern.svg')] bg-repeat pointer-events-none" />
      </div>

      <div className={twMerge(barlow.className, "container mx-auto mt-4 px-4 flex flex-col items-center")}>
        {/* Main Content with top border only and adjusted text sizes */}
        <section className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow p-6 sm:p-10 mb-12">
          <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-6">
            <div className="relative">
              <Image
                src={logo}
                alt="Dean's Office Logo"
                className="w-24 h-24 md:w-28 md:h-28 rounded-full border-t-4 border-blue-600 object-cover"
                priority
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white rounded-full p-1 border border-blue-100">
                <FaUserTie className="text-blue-500 text-xl" />
              </span>
            </div>
            <span className="mt-3 text-sm text-blue-700 font-semibold md:text-sm">
              Vice Dean of Technology
            </span>
            <span className="mt-1 px-3 py-1 rounded bg-blue-100 text-blue-800 font-bold text-sm md:text-base self-start">
              Tesfaye
            </span>
          </div>

          <div className="w-full">
            <h1 className="font-bold text-lg md:text-2xl text-blue-700 mb-3">
              Welcome Message
            </h1>
            <p className="text-justify text-base md:text-lg leading-relaxed text-gray-700">
              At our Center, we are committed to enhancing the skills and competencies of TVET trainers and leaders through cutting-edge training programs. Our focus areas include advanced manufacturing, ICT solutions, automotive technology, construction finishing, and more. We serve as a hub for innovation, equipping institutions with the tools needed for excellence.
              <br />
              <br />
              I invite industries, TVET institutions, and professionals to collaborate with us and benefit from our expertise. Visit us today and be part of a transformative journey toward productivity and excellence!
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}