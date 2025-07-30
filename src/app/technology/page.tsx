import { Header } from "@/sections/Header";
import { Technology } from "@/sections/Technology";
import { Footer } from "@/sections/Footer";
import { twMerge} from "tailwind-merge";
import { Inter, Roboto, Barlow_Semi_Condensed } from "next/font/google";

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


const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
    return (
        <>
            <div className={twMerge(inter.className, "hero-gradient")}>
                <Header />

                <div className=" w-full h-[50vh] md:h-[70vh] flex flex-col justify-center">
                    <section className="hero flex flex-col items-center container border-0">
                        <div className="w-[80vw] pl-6 flex flex-col justify-center items-center md:block text-center"> 
                            <h2 className="text-center text-3xl md:text-[44px] md:leading-[60px] font-bold tracking-tighter text-[#fff] my-4">Technology Development and Incubation Service</h2>
                            <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#fff] mt-5">Empowering industries with cutting-edge research, innovative design, and comprehensive incubation services to foster competitive ecosystems.</p>
                            <div className="flex justify-center">
                                <a href="#services" className={twMerge(roboto.className, "btn btn-primary font-bold")}>Learn more →</a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Technology />
            
            <Footer/>
        </>
    )
}

// <section className="hero flex flex-col container relative w-full z-50 border-0">
// <div className="w-[80vw] md:w-[600px] pl-6 flex flex-col items-center md:block">
//   <h2 className="text-left text-4xl md:text-6xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-white bg-clip-text my-4">Explrore Your Potential and Talents at <span className="text-[#fcfb00]">PICE</span></h2>
//   {/* <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#fff] mt-5">Empowering your staff with comprehensive training programs and transforming your workforce with industry-leading vocational training programs.</p> */}
//   {/* <a href="#services" className={twMerge(roboto.className, "btn btn-primary font-bold")}>Learn more →</a> */}
// </div>
// </section>