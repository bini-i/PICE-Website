import Image from "next/image";

import FuelIllustration from "@/assets/fuel-illustration.png";
import HiringIllustration from "@/assets/hiring-illustration.png";
import SpecificationIllustration from "@/assets/specification-illustration.png";
import MachineIllustration from "@/assets/machine-illustration.png";

import { twMerge} from "tailwind-merge";
import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Inter } from "next/font/google";

import localFont from "next/font/local";

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  })
  
  const merriweather = Merriweather({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
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

export const Consultation = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-[#FFFFFF] to-[#fcfc0071]">
                <section className={twMerge(barlow.className, "text-black pt-20 pb-5")} id="services">
                    <div className="container md:flex">
                        <div className="md:w-1/2 relative mr-3">
                            <h2 className={twMerge(roboto.className, "title-type-3 pr-6 my-6 text-[#0384d2] text-2xl md:text-[27px] md:leading-[30px]")}>Streamline Your Operations with Our Consultation Services</h2>

                        </div>
                        <div className="md:w-1/2 py-2">
                            <ul className="space-y-4 mb-8 pl-6 border-l-4 border-[#969600] ">
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700 text-xl">Vehicle Fuel Consumption Measurement Service</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700 text-xl">Expert Skills Assessment</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700 text-xl">Preparation of Machinery and Vehicle Specifications</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700 text-xl">Workshop Design Preparation and Organization</span>
                                </li>
                                <li className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-gray-700 text-xl">Machinery Installation and Commissioning Service</span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </section>

                <section className={twMerge(barlow.className, "text-black py-6 md:py-20")} id="fuel">
                    <div className="container md:flex">
                        <div className="md:w-1/2 px-4 relative">
                            <Image src={FuelIllustration} alt="Fuel illustration" className="h-auto w-[300px] md:absolute top-[-60px]"/>
                        </div>

                        <div className="md:w-1/2 px-4">

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vehicle Fuel Consumption Measurement Service</h2>

                            <p className="text-lg text-gray-600">Reduce your fuel costs! Our Vehicle Fuel Consumption Measurement Service gives your business precise data to optimize fleet efficiency. Identify waste, improve driver behavior, and significantly cut operational expenses.</p>

                        </div>
                    </div>
                </section>
            

                <section className={twMerge(barlow.className, "text-black py-10")} id="skill">
                    <div className="container md:flex">

                        <div className="md:hidden md:w-1/2 px-4 py-6 relative">
                            <Image src={HiringIllustration} alt="Hiring illustration" className="h-auto w-[300px] "/>
                        </div>

                        <div className="md:w-1/2 px-4">

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Expert Skills Assessment</h2>

                            <p className="text-lg text-gray-600">Our Expert Skills Assessment service streamlines your hiring process. We provide tailored, in-depth evaluations to accurately measure candidate capabilities against your specific job requirements. Ensure you hire the right talent the first time, saving time and resources with our precise and objective assessments..</p>

                        </div>

                        <div className="hidden md:flex md:w-1/2 px-4 py-6 relative">
                            <Image src={HiringIllustration} alt="Hiring illustration" className="h-auto w-[300px] "/>
                        </div>
                    </div>
                </section>

                <section className={twMerge(barlow.className, "text-black py-10")} id="specification">
                    <div className="container md:flex">
                        <div className="md:w-1/2 px-4 relative">
                            <Image src={SpecificationIllustration} alt="Specification illustration" className="h-auto w-[300px] "/>
                        </div>
                        <div className="md:w-1/2 px-4 py-6">

                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Preparation of Machinery and Vehicle Specifications</h2>

                            <p className="text-lg text-gray-600">Our service provides expert specifications for machinery, vehicles, and property. We meticulously evaluate assets to create detailed documentation, crucial for accurate valuation, informed purchasing, and regulatory compliance. Get precise insights to understand true asset value and make smarter business decisions.</p>

                        </div>
                    </div>
                </section>

                <section className={twMerge(barlow.className, "text-black py-10")} id="services">
                    <div className="container md:flex">
                        
                        <div className="md:hidden md:w-1/2 px-4 relative">
                            <Image src={MachineIllustration} alt="Machine illustration" className="h-auto w-[300px] "/>
                        </div>

                        <div className="md:w-1/2 px-4 py-6">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Machinery Installation and Commissioning Service</h2>

                            <p className="text-lg text-gray-600">Our Machinery Installation and Commissioning Service ensures seamless setup and optimal performance of your new equipment. We handle everything from precise positioning and connection to rigorous testing and calibration, guaranteeing your machinery is fully operational, efficient, and ready for production from day one.</p>
                        </div>
                        <div className="hidden md:flex md:w-1/2 px-4 relative">
                            <Image src={MachineIllustration} alt="Machine illustration" className="h-auto w-[300px] "/>
                        </div>

                    </div>
                </section>
            </div>

            <section className={twMerge(barlow.className, "py-20 flex items-center w-full consultation-banner-image")}>
                <div className="container md:flex">
                    <div className="md:w-1/2 text-white consultation-banner-title">
                        <h2 className="text-3xl font-bold mb-4">Workshop Design Preparation and Organization</h2>
                        <p className="text-lg mb-6">
                            Our Workshop Design Preparation and Organization service optimizes your workspace. We plan efficient layouts, streamline workflows, and strategically place equipment. The result is a safe, highly functional, and organized workshop, tailored to boost your productivity.
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <img src="/path/to/your/illustration.png" alt="" className="w-full h-auto"/>
                    </div>
                </div>
            </section>


        </>
    )
}