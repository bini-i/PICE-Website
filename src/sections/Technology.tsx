import Image from "next/image";
import { twMerge} from "tailwind-merge";
import { Roboto } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";

import TechnologyBanner1 from "@/assets/technology-banner-1.png";
import TechnologyBanner2 from "@/assets/technology-banner-2.png";
import TechnologyBanner3 from "@/assets/technology-banner-3.png";

const barlow = Barlow_Semi_Condensed({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})
 
const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const Technology = () => {
    return (
        <div className="bg-gray-300">

            <section className={twMerge(barlow.className, "bg-gray-300 text-black py-16 md:py-20")} id="services">
                <div className="container md:flex py-6 md:py-8">
                    <div className="md:w-1/2 px-4 mb-12 relative">
                        <Image src={TechnologyBanner1} alt="Technology illustration" className="h-auto w-[300px] md:scale-125"/>
                    </div>

                    <div className="md:w-1/2 px-4">

                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Advancing tech research and incubating ideas into industry-ready solutions</h2>

                        <p className="text-lg text-gray-600">Reduce your fuel costs! Our Vehicle Fuel Consumption Measurement Service gives your business precise data to optimize fleet efficiency. Identify waste, improve driver behavior, and significantly cut operational expenses.</p>

                    </div>
                </div>
            </section>

            <section className={twMerge(barlow.className, "technology-hero bg-[#0384d2cc] text-xl py-16")}>
                <div className="container md:flex pb-10 md:py-14">
                    <div className="md:hidden md:w-1/2 px-4 py-6 relative">
                        <Image src={TechnologyBanner2} alt="Technology research illustration" className="h-auto w-[300px]"/>
                    </div>

                    <div className="md:w-1/2 px-4 md:py-6">

                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Technology Research Designs</h2>

                        <p className="text-lg text-white">Our Technology Research Design department focuses on adopting and localizing productivity-enhancing technologies through in-depth research and innovative solutions tailored to industry needs.</p>

                    </div>

                    <div className="hidden md:flex md:w-1/2 pl-20 relative">
                        <Image src={TechnologyBanner2} alt="Hiring illustration" className="h-auto w-[300px] md:scale-125 "/>
                    </div>
                </div>
            </section>

            <section className={twMerge(barlow.className, "bg-gray-300 text-black py-16 md:py-20")} id="services">
                <div className="container md:flex py-6 md:py-8">
                    <div className="md:w-1/2 px-4 mb-12 relative">
                        <Image src={TechnologyBanner3} alt="Technology illustration" className="h-auto w-[300px] md:scale-125"/>
                    </div>

                    <div className="md:w-1/2 px-4">

                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Incubation Service</h2>

                        <p className="text-lg text-gray-600">The Incubation Service supports technology and business ideas through resources, mentorship, and collaborative environments to transform concepts into sustainable, competitive industries.</p>

                    </div>
                </div>
            </section>

            <div className="container">
                <section id="services" className={twMerge(barlow.className, "services")}>
                    <div className="goal">
                        The goal of TDIS is to establish competitive industries and incubators in terms of quality and productivity by adopting and localizing productivity-enhancing technologies, and by incubating technology and business ideas.
                    </div>
                </section>
            </div>

        </div>
    )
}