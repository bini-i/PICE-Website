import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import piceHero from "@/assets/pice-hero.png";

export const Hero = () => {
  return (
    <div className="">
      <section className=" pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center">
            <div className="md:w-[478px]">
              {/* <div className="tag text-[#fff] font-semibold">AU infront of Jegnoch</div> */}
              <h1 className="text-5xl md:text-7xl tracking-tighter font-bold text-[#fcfb00] mt-6">
                Pathway to 
              </h1>
              <h1 className="text-5xl md:text-8xl tracking-tighter font-bold text-white bg-clip-text">
                Productivity
              </h1>
              <p className="text-lg text-[#fff] tracking-tight mt-6">Empowering your staff with comprehensive training programs and expert consultancy services</p>
              <div className="flex gap-1 items-center mt-[30px]">
                <a href="#training" className="flex">
                  <button className="btn btn-primary gap-1 w-full">
                    <span>Learn more</span>
                    <ArrowIcon className="h-5 w-5" />
                  </button>
                </a>
              </div>
            </div>

            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              {/* <Image src={piceHero} alt="PICE hero image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6" /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
