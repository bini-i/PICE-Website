import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

import Image from "next/image";
import piceHero from "@/assets/pice-hero.png";

import { Inter, Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";

import { twMerge} from "tailwind-merge";
import Link from "next/link";

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
        <div className="hero-gradient mb-8">
            <Header />

            <section className="hero flex flex-col items-center container">
                <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-white bg-clip-text my-4">PICE Latest <span className="text-[#ffff00]">News</span></h2>
                {/* <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#fff] mt-5">Empowering your staff with comprehensive training programs and transforming your workforce with industry-leading vocational training programs.</p> */}
                {/* <a href="#services" className={twMerge(roboto.className, "btn btn-primary font-bold")}>Learn more →</a> */}
            </section>
        </div>

        <div className={twMerge(barlow.className, "grid-page-layout flex flex-col h-full md:flex-row rounded border container py-10")}>
            <div className="flex flex-wrap w-full">
              <div className="lg:w-1/2">
                <div>
                  <div className="flex flex-col justify-start items-start mb-8">
                  <figure className="w-full box-border relative" style={{ minHeight: 300 }}>
                    <Link href="" className="block w-full h-full relative" >
                      <Image
                        src={piceHero}
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded"
                        sizes=""
                        priority
                      />
                    </Link>
                  </figure>

                    <div className="">
                      <h3>News title</h3>
                    </div>

                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">

              </div>
            </div>
        </div>
      </>
    )
}