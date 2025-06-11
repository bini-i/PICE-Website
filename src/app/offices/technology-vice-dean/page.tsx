"use client";

import { Header } from "@/sections/Header";
// import { Mission } from "@/sections/Mission";
import { Footer } from "@/sections/Footer";
import { PageBanner } from "@/sections/PageBanner";

import Image from "next/image";
import logo from "@/assets/Logo.png";

import { Inter, Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";

import { twMerge} from "tailwind-merge";
import { usePathname } from "next/navigation";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const barlow = Barlow_Semi_Condensed({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const inter = Inter({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export default function Home() {
    const pathname = usePathname();
  return (
    <>
        <div className="hero-gradient">
          <Header />

          <section className="hero flex flex-col items-center container">
              <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-white bg-clip-text my-4">Offices</h2>
              {/* <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#fff] mt-5">Empowering your staff with comprehensive training programs and transforming your workforce with industry-leading vocational training programs.</p> */}
              {/* <a href="#services" className={twMerge(roboto.className, "btn btn-primary font-bold")}>Learn more →</a> */}
          </section>
        </div>

        <div className={twMerge(barlow.className, "grid-page-layout flex flex-col h-full md:flex-row rounded border container py-10")}>
            <div className="grid-page-column-nav bg-MetallicBlue/30 md:bg-MetallicBlue/80 w-full md:max-w-[300px] md:flex flex-col gap-5 h-full py-14 mr-8 md:border-r-2 border-[#6b6b06]">
              <nav>
                    <div className="cwf-nav__container">
                        <div className="cwf-nav__controller">
                            <ul className="">
                                <li className="nav-item">
                                    <a className={ pathname === "/offices/dean" ? "nav-link flex w-full font-bold text-[#fff] bg-[#696900]" : "nav-link flex w-full font-bold text-[#6d6d6d]"} href="/offices/dean" aria-current="page">
                                        Dean
                                    </a>
                                </li><li className="nav-item">
                                    <a className={ pathname === "/offices/capacity-vice-dean" ? "nav-link flex w-full font-bold text-[#fff] bg-[#696900]" : "nav-link flex w-full font-bold text-[#6d6d6d]"} href="/offices/capacity-vice-dean">
                                        Capacity Building Vice Dean
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={ pathname === "/offices/research-vice-dean" ? "nav-link flex w-full font-bold text-[#fff] bg-[#696900]" : "nav-link flex w-full font-bold text-[#6d6d6d]"} href="/offices/research-vice-dean">
                                        Institution Development Vice Dean
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className={ pathname === "/offices/technology-vice-dean" ? "nav-link flex w-full font-bold text-[#fff] bg-[#696900]" : "nav-link flex w-full font-bold text-[#6d6d6d]"} href="/offices/technology-vice-dean">
                                        Technology Vice Dean
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <main id="services" className="grid-page-column-content">


            <section className="flex flex-col md:flex-row items-center gap-16 py-16 px-6">
                <Image src={logo} alt="Technology illustration" className="h-auto w-[200px] rounded-full"/>

                <div>
                    <h1 className="title-type-2 my-6 text-[#0384d2] text-2xl md:text-[27px] md:leading-[30px]">Vice Dean of Technology</h1>

                    <p className="font-normal my-6 text-justify text-xl leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur esse aliquam minus necessitatibus eveniet vitae doloremque ut atque, ab nesciunt quisquam consequuntur amet vero aspernatur, obcaecati quo possimus. Quo, culpa?
                    </p>
                </div>
            </section>



            </main>
        </div>

        <Footer/>
    </>
  );
}