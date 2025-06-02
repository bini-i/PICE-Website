import { Header } from "@/sections/Header";
// import { Mission } from "@/sections/Mission";
import { Footer } from "@/sections/Footer";
import { PageBanner } from "@/sections/PageBanner";
import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";

import { twMerge} from "tailwind-merge";

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

export default function Home() {
  return (
    <>
        <div className="hero-gradient">
          <Header />

          <section className="hero flex flex-col items-center container">
              <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-white bg-clip-text my-4">Capacity Building</h2>
              <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#fff] mt-5">Empowering your staff with comprehensive training programs and transforming your workforce with industry-leading vocational training programs.</p>
              <a href="#services" className={twMerge(roboto.className, "btn btn-primary font-bold")}>Learn more →</a>
          </section>
        </div>

        <div className={twMerge(barlow.className, "grid-page-layout flex flex-col h-full md:flex-row rounded border container py-10")}>
            <div className="grid-page-column-nav bg-MetallicBlue/30 md:bg-MetallicBlue/80 w-full md:max-w-[300px] px-8 hidden md:flex flex-col gap-5 h-full py-14s">
              <nav>
                    <div className="cwf-nav__container">
                        <div className="cwf-nav__controller">
                            <ul className="">
                                <li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/automotive" aria-current="page">
                                        Automotive
                                    </a>
                                </li><li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/computer">
                                        Computer
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/construction" target="_blank">
                                        Construction
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/electronics" target="_blank">
                                        Electronics
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/garment" target="_blank">
                                        Garment
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/leather" target="_blank">
                                        Leather
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/manufacturing" target="_blank">
                                        Manufacturing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/welding" target="_blank">
                                        Welding
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link flex w-full font-bold" href="/capacity-building/trainings/wood" target="_blank">
                                        Wood Works
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <main id="services" className="grid-page-column-content">
                <div className="mb-10">
                    <div className="grid-page-column-content-header">
                      <h1 className="text-3xl lg:text-5xl font-bold">Trainings</h1>
                    </div>

                    <p className="grid-page-column-content-text text-lg font-normal mt-6">Enhance your skills with our specialized vocational training programs across key industries! Choose from a wide range of courses including Automotive, Computer, Construction, Electronics, Garment, Leather, Manufacturing, Welding, and Wood Works. Whether you're looking to start a new career or upgrade your expertise, our hands-on training equips you with industry-relevant knowledge. Contact us today to enroll and take the next step toward professional success!</p>

                    <div className="my-6">
                      {/* <a className="grid-page-column-content-btn font-bold" href="/capacity-building/trainings">
                        See More
                      </a> */}
                    </div>
                </div>

                <div className="mb-6">
                    <div className="grid-page-column-content-header">
                      <h1 className="text-3xl lg:text-5xl font-bold">Skill Gap</h1>
                    </div>

                    <p className="grid-page-column-content-text font-normal mt-6">Bridge your skill gaps quickly with our industry-focused short-term training programs! Whether you're looking to master Automotive repair, Computer skills, Construction techniques, Electronics, Garment production, Leather crafting, Manufacturing processes, Welding, or Wood Works, our hands-on courses are designed to deliver practical, job-ready expertise in a short time. Ideal for career starters and professionals alike, these targeted trainings equip you with in-demand skills to boost employability and productivity. Enroll now and fast-track your success!</p>

                    <div className="my-6">
                      {/* <a className="grid-page-column-content-btn font-bold" href="/capacity-building/skill-gap">
                        See More
                      </a> */}
                    </div>
                </div>

            </main>
        </div>

        <Footer/>
    </>
  );
}