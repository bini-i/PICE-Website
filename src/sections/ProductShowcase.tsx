import productImage from "@/assets/product-image.png";
import Image from "next/image";
import ArrowIcon from "@/assets/arrow-right.svg";
import CheckIcon from "@/assets/check.svg";
import ShowRoomCarousel from "./showroom-carousel";
import { twMerge } from "tailwind-merge";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const ProductShowcase = () => {
  return (
    <section className={twMerge(inter.className, "bg-gradient-to-b from-[#FFFFFF] to-[#fcfc0071] py-24 overflow-x-clip")}>
      <div className="container">
        <div className="max-w-[540px] mx-auto mb-6">
          <div className="flex justify-center">
            <div className="tag-black">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#535303] text-transparent bg-clip-text mt-5">Turn your ideas into products</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#1E1E03] mt-5">Bring your ideas to life with cutting-edge machinery and top-tier shops</p>
        </div>

        <ShowRoomCarousel />

        <div className="px-10 pt-6 pb-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-0">

          <div className="flex flex-col md:flex-row gap-6 lg:gap-0">
            <div className="mb-10 lg:px-3">
              <CheckIcon className="h-6 w-6" />
              <h3 className="text-lg md:text-base mb-3 md:text-[30px] md:leading-[30px] font-bold tracking-tighter">Machine Shop</h3>
              <p className="text-[14px] leading-[30px] tracking-tight"></p>
              {/* <div className="flex gap-1 items-center mt-[20px]">
                <button className="btn btn-text gap-1 px-0">
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div> */}
            </div>
            <div className="mb-10 lg:px-3">
              <CheckIcon className="h-6 w-6" />
              <h3 className="text-lg md:text-base mb-3 md:text-[30px] md:leading-[30px] font-bold tracking-tighter">Garment Shop</h3>
              <p className="text-[14px] leading-[30px] tracking-tight"></p>
              {/* <div className="flex gap-1 items-center mt-[20px]">
                <button className="btn btn-text gap-1 px-0">
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div> */}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 lg:gap-0">
            <div className="mb-10 lg:px-3">
              <CheckIcon className="h-6 w-6" />
              <h3 className="text-lg md:text-base mb-3 md:text-[30px] md:leading-[30px] font-bold tracking-tighter">ICT Labs</h3>
              <p className="text-[14px] leading-[30px] tracking-tight"></p>
              {/* <div className="flex gap-1 items-center mt-[20px]">
                <button className="btn btn-text gap-1 px-0">
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div> */}
            </div>
            <div className="mb-10 lg:px-3">
              <CheckIcon className="h-6 w-6" />
              <h3 className="text-lg md:text-base mb-3 md:text-[30px] md:leading-[30px] font-bold tracking-tighter">Wood Shop</h3>
              <p className="text-[14px] leading-[30px] tracking-tight"></p>
              {/* <div className="flex gap-1 items-center mt-[20px]">
                <button className="btn btn-text gap-1 px-0">
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
