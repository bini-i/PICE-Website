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
        <div className="py-14">
            <div className="container">
                <h1 className="header-marker text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter text-[#fff] mt-5 py-10">Mission, Vission, and Core Values</h1>
            </div>
        </div>
      </div>

      <Mission />
      <Footer/>
    </>
  );
}