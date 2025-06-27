"use client";

import Image from "next/image";
import piceBuld from "@/assets/hero-slide4.jpg";

import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Inter } from "next/font/google";

import { twMerge} from "tailwind-merge";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import desired modules

// Import Swiper styles
import 'swiper/css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const NewsPost = () => {
    return (
        <>
            <section className={twMerge(barlow.className, "w-full py-12")}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8">
                        <div className="w-full flex justify-between flex-col lg:w-2/5">
                            <div className="block lg:text-left text-center">
                            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-5">Our latest <span className=" text-[#727205]">News</span></h2>
                            <p className="text-gray-500 mb-10  max-lg:max-w-xl max-lg:mx-auto">Welcome to our latest news and article section. Explore insightful articles, expert tips, and the latest trends in our sector.</p>
                            {/* <a href="javascript:;" className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 lg:mx-0 mx-auto flex justify-center text-[#727205] font-semibold transition-all duration-300 hover:bg-gray-100">View All</a> */}
                        </div>
                            {/* <!-- Slider controls --> */}
                        <div className="flex items-center lg:justify-start justify-center lg:mt-0 mt-8 gap-8 mb-4">
                            <button id="slider-button-left" className="swiper-button-prev group flex justify-center items-center border border-solid border-[#3f3f00] w-11 h-11 transition-all duration-500 rounded-full text-[#3f3f00] hover:bg-[#3f3f00]" data-carousel-prev>
                                <svg className="h-6 w-6 text-[#3f3f00] group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </button>
                            <button id="slider-button-right" className="swiper-button-next group flex justify-center items-center border border-solid border-[#3f3f00] w-11 h-11 transition-all duration-500 rounded-full text-[#3f3f00] hover:bg-[#3f3f00]" data-carousel-next>
                                <svg className="h-6 w-6 text-[#3f3f00] group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-3/5">
                        {/* <!--Slider wrapper--> */}
                        {/* <div className="swiper mySwiper"> */}
                        <Swiper
                            // Pass the modules you want to use
                            modules={[Navigation, Pagination, Autoplay]}

                            autoplay={{
                                delay: 3000, // Delay in milliseconds
                                disableOnInteraction: true, // Autoplay does not continue after user interaction
                            }}

                            // Swiper parameters as props
                            slidesPerView={2}
                            spaceBetween={28}
                            centeredSlides={false}
                            loop={false}
                            pagination={{
                                el: ".swiper-pagination",
                                clickable: true,
                            }}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                    centeredSlides: false,
                                },
                                568: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    centeredSlides: false,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 28,
                                    centeredSlides: false,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                }
                            }}
                            className="mySwiper" // Add your custom class
                        >
                            <SwiperSlide>
                                <div className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                                    <div className="flex items-center mb-9 overflow-hidden">
                                        <Image src={piceBuld} alt="piceBuld" className="rounded-2xl w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-[#727205]">1ኛው ከተማአቀፍ የቴክኒክና ሙያ ሳምንት በኤግዚብሽን ማዕከል መከፈቱ ይታወቃል። </h3>
                                    <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                                    የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                    </p>
                                    <a href="javascript:;" className="cursor-pointer flex items-center gap-2 text-lg text-[#727205] font-semibold">
                                        Read more<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#727205" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </a>    
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                                    <div className="flex items-center mb-9 overflow-hidden">
                                        <Image src={piceBuld} alt="piceBuld" className="rounded-2xl w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-[#727205]">የ2ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት የቅድመ ዝግጅት ስራዎች የደረሰበት ደረጃ የግምገማ መድረክ ተካሄደ፡፡</h3>
                                    <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                                    የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                    </p>
                                    <a href="javascript:;" className="cursor-pointer flex items-center gap-2 text-lg text-[#727205] font-semibold">
                                        Read more<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#727205" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                                    <div className="flex items-center mb-9 overflow-hidden">
                                        <Image src={piceBuld} alt="piceBuld" className="rounded-2xl w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-[#727205]">የ3ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት የቅድመ ዝግጅት ስራዎች የደረሰበት ደረጃ የግምገማ መድረክ ተካሄደ፡፡</h3>
                                    <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                                    የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                    </p>
                                    <a href="javascript:;" className="cursor-pointer flex items-center gap-2 text-lg text-[#727205] font-semibold">
                                        Read more<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#727205" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </a>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide w-full max-lg:max-w-xl lg:w-1/2 group">
                                    <div className="flex items-center mb-9 overflow-hidden">
                                        <Image src={piceBuld} alt="piceBuld" className="rounded-2xl w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-xl text-gray-900 font-medium leading-8 mb-4 group-hover:text-[#727205]">የ4ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት የቅድመ ዝግጅት ስራዎች የደረሰበት ደረጃ የግምገማ መድረክ ተካሄደ፡፡</h3>
                                    <p className="text-gray-500 leading-6 transition-all duration-500 mb-8">
                                    የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                    </p>
                                    <a href="javascript:;" id="openModalButton" className="cursor-pointer flex items-center gap-2 text-lg text-[#727205] font-semibold">
                                        Read more<svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5" stroke="#727205" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                </div>
            </section>
            
            {/* Modal start */}
            <div 
                className={twMerge(barlow.className, "fixed left-0 top-10 antialiased inset-0 bg-stone-800 bg-opacity-75 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999] overflow-y-auto overflow-x-hidden outline-none")} 
                id="exampleModalWeb3" 
                aria-hidden="true"
            >
                <div className="bg-white rounded-lg w-9/12 sm:w-11/12 md:w-11/12 lg:w-11/12 scale-95 transition-transform duration-300 ease-out">
                    {/* <!-- Modal Header --> */}
                    <div className="border-b border-stone-200 p-4 flex justify-between items-start">
                        <div className="flex flex-col">
                            <h1 className="text-lg text-stone-800 font-semibold">የ4ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት የቅድመ ዝግጅት ስራዎች የደረሰበት ደረጃ የግምገማ መድረክ ተካሄደ፡፡</h1>
                            {/* <p className="font-sans text-base text-stone-500">Choose which card you want to connect</p> */}
                        </div>
                        <button 
                        type="button" 
                        id="closeModalButton" 
                        aria-label="Close" 
                        className="text-stone-500 hover:text-stone-800"
                        >
                            &times;
                        </button>
                    </div>
                    {/* <!-- Modal Body --> */}
                    <div className="text-stone-500">
                        <div className="space-y-2">
                                
                                <div className="flex items-center mb-9 overflow-hidden h-[40vh]">
                                    <Image src={piceBuld} alt="piceBuld" className="w-full object-cover" />
                                </div>

                                <div className="px-4">
                                    <h2 className="text-4xl text-gray-900 font-medium leading-8 mb-12 group-hover:text-[#727205]">የ4ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት የቅድመ ዝግጅት ስራዎች የደረሰበት ደረጃ የግምገማ መድረክ ተካሄደ፡፡</h2>
                                    <p className="text-lg text-gray-700 leading-6 transition-all duration-500 mb-8">
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                        የአዲስ አበባ ሥራና ክህሎት ቢሮ የ15ኛው ከተማ አቀፍ የቴክኒክና ሙያ ሳምንት አውደርዕይ የቅድመ ዝግጅት ስራዎች የደረሰበትን ደረጃ ከቴክኒክና ሙያ ማሰልጠኛ ኮሌጅ ዲኖች ጋር በጋራ ገምግሟል፡፡...
                                    </p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal end */}
        </>
    )
}