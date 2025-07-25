import Image from "next/image";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { Barlow_Semi_Condensed } from "next/font/google";
import { Inter } from "next/font/google";

const barlow = Barlow_Semi_Condensed({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export const Admission = () => {
    return (
        <section id="training" className={twMerge(barlow.className, "w-full bg-white py-6 overflow-x-clip")}>
            <div className="">
                <div className="max-w-[540px] mx-auto">
                    {/* <div className="flex justify-center">
                        <div className="tag-black">Train your staff</div>
                    </div> */}
                    <h2 className="text-center text-3xl md:text-[45px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#535303] text-transparent bg-clip-text mt-5">Available Trainings</h2>
                    <p className="text-center text-[20px] leading-[30px] tracking-tight text-[#010D3E] mt-5">Take a short term training from a list of vocational trainings provided at the center including enterprenership training</p>
                </div>

                <div className="py-12 md:flex justify-center gap-6 flex-wrap">
                    <div className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="h-full flex flex-col justify-between">
                            {/* <Image src={AutomotiveImage} alt="Automotive Image" className="" /> */}
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[20px] md:leading-[30px] font-bold tracking-tighter">Short Term Training</h3>
                            {/* <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p> */}
                        </div>
                    </div>

                    <div className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="h-full flex flex-col justify-between">
                            {/* <Image src={AutomotiveImage} alt="Automotive Image" className="" /> */}
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[20px] md:leading-[30px] font-bold tracking-tighter">Teaching Methodology</h3>
                            {/* <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p> */}
                        </div>
                    </div>

                    <div className="flex-[0_1_24%] flex flex-col mb-5 items-center p-10 rounded-3xl shadow-[0_7px_14px_#cfcfcf] min-w-xs w-full hover:cursor-pointer">
                        <div className="h-full flex flex-col justify-between">
                            {/* <Image src={AutomotiveImage} alt="Automotive Image" className="" /> */}
                            <h3 className="mb-3 text-[#1E1E03] text-center text-xl md:text-[20px] md:leading-[30px] font-bold tracking-tighter">Industry Training</h3>
                            {/* <p className="text-center text-[#1E1E03] text-[16px] leading-[20px] md:text-[14px]">Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum</p> */}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center">
                    <div className="lg:w-1/4 md:w-1/2">
                        <div className="admission-trainings-card1 bg-1">
                            <div className="serial">
                                <p>01.</p>
                            </div>

                            <div className="academic-content">
                                <div className="academic-top-content">
                                    {/* <i className="flaticon-graduation"></i> */}
                                    <a href=""><h3>Short Term Training</h3></a>
                                </div>
                                <p>Short-term training for industry and TVET trainers focuses on rapidly equipping educators with specialized, current technical skills directly applicable to evolving industry demands.</p>
                                {/* <a href="academics-details.html" className="read-more-btn white-color"><i className="flaticon-next"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2">
                        <div className="admission-trainings-card1 bg-2">
                            <div className="serial">
                                <p>02.</p>
                            </div>

                            <div className="academic-content">
                                <div className="academic-top-content">
                                    {/* <i className="flaticon-graduation"></i> */}
                                    <a href=""><h3>Teaching Methodology</h3></a>
                                </div>
                                <p>Teaching Methodology training empowers all educators with effective instructional strategies to enhance learning outcomes and student engagement.</p>
                                {/* <a href="academics-details.html" className="read-more-btn white-color"><i className="flaticon-next"></i></a> */}
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2">
                        <div className="admission-trainings-card1 bg-3">
                            <div className="serial">
                                <p>03.</p>
                            </div>

                            <div className="academic-content">
                                <div className="academic-top-content">
                                    {/* <i className="flaticon-graduation"></i> */}
                                    <a href=""><h3>Life Skill Training</h3></a>
                                </div>
                                <p>Life skill training for young Ethiopians equips them with practical abilities and knowledge to navigate daily challenges and build a self-sufficient future.</p>
                                {/* <a href="academics-details.html" className="read-more-btn white-color"><i className="flaticon-next"></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </section>
    )
}
