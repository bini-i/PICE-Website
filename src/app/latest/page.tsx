import { Header } from "@/sections/Header";
import { NewsPost } from "@/sections/NewsPost";
import { Footer } from "@/sections/Footer";

import Image from "next/image";
import piceHero from "@/assets/pice-hero.png";

import { Inter, Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";

import { twMerge} from "tailwind-merge";
import Link from "next/link";

import piceBuld from "@/assets/hero-slide4.jpg";

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
    return (
      <>
        <div className="mb-8">
            <Header />

            <div className="flex flex-col justify-center relative z-0 pt-[5rem]">

    
              <div className=" w-full h-[35vh] flex flex-col justify-center">
                <div className="top-0 left-0 w-full z-40 overflow-hidden">
                  <div
                      className='absolute inset-0 bg-cover bg-center object-cover'
                      style={{
                          backgroundImage: `url(${piceBuld.src})`,
                      }}
                  ></div>
                </div>

                <div className="absolute inset-0 top-0 left-0 w-full hero-gradient-darker z-40">
                </div>

                <section className="hero flex flex-col items-center container relative w-full z-50 border-0">
                    <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-white bg-clip-text my-4">PICE Latest <span className="text-[#fcfb00]">News</span></h2>
                    {/* <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#fff] mt-5">Empowering your staff with comprehensive training programs and transforming your workforce with industry-leading vocational training programs.</p> */}
                    {/* <a href="#services" className={twMerge(roboto.className, "btn btn-primary font-bold")}>Learn more →</a> */}
                </section>
              </div>  
            </div>
        </div>

        <div className={twMerge(barlow.className, "grid-page-layout flex flex-col h-full md:flex-row rounded border container lg:py-10 mb-8")}>
            <NewsPost />
        </div>

        <Footer />
      </>
    )
}
