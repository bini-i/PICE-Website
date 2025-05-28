import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Inter } from "next/font/google";

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
        <section>
            <div className={twMerge(barlow.className, "container flex justify-center gap-10 my-10")}>
                <div>
                    <p className="font-bold">Departments</p> 
                </div>
                <div>
                    <p className="font-bold">Staff</p>
                </div>
                <div>
                    <p className="font-bold">Graduates</p>
                </div>
                <div>
                    <p className="font-bold">Customers</p>
                </div>
            </div>
        </section>
    );
};