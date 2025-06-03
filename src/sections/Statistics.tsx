import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Inter } from "next/font/google";
import CountUp from "react-countup";

import { twMerge} from "tailwind-merge";

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

export const Statistics = () => {
    return (
        <section className="bg-white">
            <div className={twMerge(barlow.className, "container flex justify-center gap-10 pt-10")}>
                <div className="flex flex-col items-center">
                    <div className="font-bold text-3xl text-[#000] mb-2">
                        <CountUp start={0} end={9} duration={5} delay={0}/>+
                    </div>
                    <p className="font-semibold text-xl">Departments</p> 
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-bold text-3xl text-[#000] mb-2">
                        <CountUp start={0} end={100} duration={5} delay={0}/>+
                    </div>
                    <p className="font-semibold text-xl">Staff</p> 
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-bold text-3xl text-[#000] mb-2">
                        <CountUp start={0} end={10000} duration={5} delay={0}/>+
                    </div>
                    <p className="font-semibold text-xl">Graduates</p> 
                </div>
                <div className="flex flex-col items-center">
                    <div className="font-bold text-3xl text-[#000] mb-2">
                        <CountUp start={0} end={500} duration={5} delay={0}/>+
                    </div>
                    <p className="font-semibold text-xl">Customers</p> 
                </div>
            </div>
        </section>
    );
};