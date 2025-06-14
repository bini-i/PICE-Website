import { Header } from "@/sections/Header";
import { Technology } from "@/sections/Technology";
import { Footer } from "@/sections/Footer";
import { twMerge} from "tailwind-merge";
import { Inter, Roboto } from "next/font/google";
import { Consultation } from "@/sections/Consultation";

const roboto = Roboto({
    weight: ['400', '500', '700'],
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
            <div className={twMerge(inter.className, "hero-gradient")}>
                <Header />

                <section className="hero flex flex-col items-center container">
                    <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-[#fff] my-4">Consultation Services</h2>
                    <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#fff] mt-5">Boost productivity and efficiency with our comprehensive consulting services</p>
                    <a href="#services" className={twMerge(roboto.className, "btn btn-primary font-bold")}>Learn more →</a>
                </section>
            </div>

            {/* <div className="divider"></div> */}
            {/* <Technology /> */}

            <Consultation />

            <Footer/>
        </>
    )
}