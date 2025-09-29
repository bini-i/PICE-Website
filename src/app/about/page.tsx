import { Header } from "@/sections/Header";
import { Mission } from "@/sections/Mission";
import { Footer } from "@/sections/Footer";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <div className={twMerge(inter.className ,"hero-gradient")}>
        <Header />

        <div className=" w-full h-[35vh] md:h-[50vh] flex flex-col justify-center pt-[5rem]">
            <section className="hero flex flex-col items-center container border-0">
              <div className="w-[80vw] pl-6 flex flex-col justify-center items-center md:block text-center"> 
                <h2 className="header-marker text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-[#fff] mt-5 py-10">Mission, Vission, and Core Values</h2>
      
              </div>
            </section>
        </div>

      </div>

      <Mission />
      <Footer/>
    </>
  );
}