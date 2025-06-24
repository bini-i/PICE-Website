import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import piceHero from "@/assets/pice-hero.png";

import React from "react";
import Carousel from "./Carousel";

export const Hero = () => {

  return (
    <div className="min-h-screen flex flex-col justify-center">
      <section className="pt-32 pb-20 overflow-x-clip">

        <div className="absolute top-0 left-0 w-full min-h-dvh z-40 overflow-hidden">
          <Carousel />
        </div>

        <div className="absolute top-0 left-0 w-full min-h-screen hero-gradient z-40">
            
        </div>

        <div className="relative container w-full z-50">
          <div className="md:flex items-center">
            <div className="md:w-[478px] flex flex-col items-center md:block">
              {/* <div className="tag text-[#fff] font-semibold">AU infront of Jegnoch</div> */}
              <h1 className="text-5xl md:text-7xl tracking-tighter font-bold text-[#fcfb00] mt-6">
                Pathway to 
              </h1>
              <h1 className="text-5xl md:text-8xl tracking-tighter font-bold text-white bg-clip-text">
                Productivity
              </h1>
              <p className="text-center md:text-left text-base text-[#fff] tracking-tight mt-6">Empowering your staff with comprehensive training programs and expert consultancy services</p>
              <div className="flex gap-1 items-center mt-[30px]">
                <a href="#training" className="flex">
                  <button className="btn btn-primary gap-1 w-full">
                    <span className="text-base">Learn more</span>
                    <ArrowIcon className="h-5 w-5" />
                  </button>
                </a>
              </div>
            </div>

            {/* <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Image src={piceHero} alt="PICE hero image" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6" />
            </div> */}
          </div>
        </div>

      </section>
    </div>
  );
};
