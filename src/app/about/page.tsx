import { Header } from "@/sections/Header";
import { Mission } from "@/sections/Mission";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <div className="hero-gradient">
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