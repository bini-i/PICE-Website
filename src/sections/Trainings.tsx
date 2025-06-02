import Image from "next/image";
import AutomotiveImage from "@/assets/automotive-image.jpg";
import ConstructionImage from "@/assets/construction-image.png";
import ComputerImage from "@/assets/computer-image.png";
import ElectronicsImage from "@/assets/electronics-image.jpg";
import ManufacturingImage from "@/assets/manufacturing-image.jpg";
import GarmentImage from "@/assets/garment-image.jpg";

import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const Trainings = () => {
    return (
        <section id="training" className={twMerge(inter.className, "bg-white py-24 overflow-x-clip")}>
            <div className="container">
                <div className="max-w-[540px] mx-auto">
                    <div className="flex justify-center">
                        <div className="tag-black">Train your staff</div>
                    </div>
                    <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#535303] text-transparent bg-clip-text mt-5">Training for better productivity</h2>
                    <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">Take a course or full training from a list of technical vocational training provided at the center</p>
                </div>

                <div className="py-12 md:flex justify-center gap-6 flex-wrap">
                    <Link href="/capacity-building/trainings/automotive" className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="">
                            <Image src={AutomotiveImage} alt="Automotive Image" className="" />
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[25px] md:leading-[30px] font-bold tracking-tighter">Automotive</h3>
                            <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p>
                        </div>
                    </Link>

                    <Link href="/capacity-building/trainings/computer" className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="">
                            <Image src={ComputerImage} alt="Computer Image" className="" />
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[25px] md:leading-[30px] font-bold tracking-tighter">Computer</h3>
                            <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p>
                        </div>
                    </Link>

                    <Link href="/capacity-building/trainings/construction" className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="">
                            <Image src={ConstructionImage} alt="Construction Image" className="" />
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[25px] md:leading-[30px] font-bold tracking-tighter">Construction</h3>
                            <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p>
                        </div>
                    </Link>

                    <Link href="/capacity-building/trainings/electronics" className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="">
                            <Image src={ElectronicsImage} alt="Electronics Image" className="" />
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[25px] md:leading-[30px] font-bold tracking-tighter">Electronics</h3>
                            <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p>
                        </div>
                    </Link>

                    <Link href="/capacity-building/trainings/garment" className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="">
                            <Image src={GarmentImage} alt="Garment Image" className="" />
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[25px] md:leading-[30px] font-bold tracking-tighter">Garment</h3>
                            <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p>
                        </div>
                    </Link>

                    <Link href="/capacity-building/trainings/manufacturing" className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="">
                            <Image src={ManufacturingImage} alt="Manufacturing Image" className="" />
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[25px] md:leading-[30px] font-bold tracking-tighter">Manufacturing</h3>
                            <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p>
                        </div>
                    </Link>

                </div>
            </div>

        </section>
    );
};