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
    <section className={twMerge(inter.className, "bg-gradient-to-b from-[#FFFFFF] to-[#fcfc0071] pt-24 pb-16 overflow-x-clip")}>
      <div className="container">
        <div className="max-w-[540px] mx-auto mb-6">
          <div className="flex justify-center">
            <div className="tag-black">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#535303] text-transparent bg-clip-text mt-5">Turn your ideas into products</h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#1E1E03] mt-5">Bring your ideas to life with cutting-edge machinery and top-tier shops</p>
        </div>

        <ShowRoomCarousel />

        
        <div className="wrapper">
          <ul className={twMerge(inter.className, "dynamic-txts")}>
            <li><span>Machine Shop</span></li>
            <li><span>Garment Shop</span></li>
            <li><span>ICT Labs</span></li>
            <li><span>Wood Workshop</span></li>
            <li><span>Incubation Space</span></li>
          </ul>
        </div>

      </div>
    </section>
  );
};
