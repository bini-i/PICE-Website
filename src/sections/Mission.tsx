import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Inter } from "next/font/google";

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
})

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const Mission = () =>  {
    return (
        <section className="mission">

            <div className="container py-10">
                <div className="">
                    <h2 className={twMerge(barlow.className, "title-type-2 my-6 text-[#0384d2] text-2xl md:text-[27px] md:leading-[30px]")}>Mission</h2>
                </div>

                <div className="mb-10">
                    <p className={twMerge(barlow.className, "font-normal my-6 text-justify text-xl leading-relaxed")}>
                        Based on the national framework for technical and vocational education and training, the aim is to engage the community and industry by providing high-quality short-term skill gap training for technical and vocational leaders, trainers, and industry professionals. This initiative seeks to enhance the efficiency of the industry by offering consultancy services, conducting studies and research, developing and transferring problem-solving technologies, and providing incubation services. Additionally, it aims to ensure the sustainable utilization of our city's community and contribute to its development.
                    </p>
                </div>
                
                <div>
                    <h2 className={twMerge(barlow.className, "title-type-2 my-6 text-[#0384d2] text-2xl md:text-[27px] md:leading-[30px]")}>Vision</h2>
                </div>

                <div className="mb-10">
                    <p className={twMerge(barlow.className, "font-normal my-6 text-justify text-xl leading-relaxed")}>
                        By 2022, it is envisioned to become the leading center of technical excellence in Ethiopia. 
                    </p>
                </div>

                <div>
                    <h2 className={twMerge(barlow.className, "title-type-2 my-6 text-[#0384d2] text-2xl md:text-[27px] md:leading-[30px]")}>Core Values</h2>
                </div>

                <div className={twMerge(barlow.className, "font-normal my-6 text-justify text-xl leading-relaxed mb-10")}>
                    <ul className="list-disc">
                        <li>Vocational Excellence</li>
                        <li>Quality & Accessibility</li>
                        <li>Customer Oriented</li>
                        <li>Innovativeness</li>
                        <li>Readiness for Change</li>
                        <li>Partnership</li>
                        <li>Quality first </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}