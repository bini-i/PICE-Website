import { Header } from "@/sections/Header";
import { PageBanner } from "@/sections/PageBanner";
import { Footer } from "@/sections/Footer";

import Image from "next/image";
import AutomotiveBanner from "@/assets/automotive-banner.jpg";
import StudentPerspective from "@/assets/student-perspective.png";
import { DeptTrainings } from "@/sections/DeptTrainings";

import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Inter } from "next/font/google";

import { twMerge} from "tailwind-merge";

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


export default function Home() {
  return (
    <>
      {/* <PageBanner title="Automotive Department" /> */}

      <section className={twMerge(inter.className, "banner-container pb-20 md:pb-10 overflow-x-clip")}>
        
        <Header />
        
        <div className="banner-image-container">
            {/* <Image src={AutomotiveBanner} alt="student’s perspective" className="w-full" /> */}
            <div className="garment-banner-image"></div>

            <div className="banner-gradient"></div>
        </div>

        <div className="banner-title container">
            <h1 className={twMerge(merriweather.className)}>Garment Department</h1>
        </div>

      </section>

      <div className="bg-[#f4f4f4]">

        <div className="dept-grid-page-layout flex flex-col h-full md:flex-row rounded border border-white/50 py-10">
          <main className={twMerge(barlow.className, "grid-page-column-content w-full px-12 md:px-6")}>
              <div className="mb-6">
                    
                    <div className="">
                        <div className="">
                            <div className="grid-page-column-content-header">
                                <h2 className={twMerge(barlow.className, "title-type-2 my-6 text-[#0384d2]")}>Discover Garment Trainings</h2>
                            </div>

                            <p className={twMerge(barlow.className, "grid-page-column-content-text font-normal my-6 text-justify text-xl leading-relaxed")}>The Garment Department at our Center offers comprehensive training programs designed to develop skilled professionals for the fashion and textile industry. Our courses cover the full spectrum of garment production, from foundational skills in Garment Sewing Operation, Cutting, and Assembling (Skirt, Shirt, Trouser) to advanced techniques in Pattern Making for precise garment construction. Beyond technical expertise, we emphasize professional growth with modules in Leadership, Project Management, and Mindset Development, including Kaizen principles for continuous improvement. Whether you're a beginner or seeking advanced specialization, our hands-on training equips you with the creativity, precision, and management skills needed to excel in garment manufacturing, design, and production supervision.</p>

                            {/* <div className="my-6">
                                <a className={twMerge(roboto.className, "grid-page-column-content-btn font-bold")} href="/capacity-building/trainings">
                                See More
                                </a>
                            </div> */}
                        </div>

                        <div className="grid-page-column-content-middle-banner overflow-x-clip">
                          <div className="">
                              <div className="flex items-center">
                                  <h2 className="title-type-2 text-[#0384d2] my-6 w-full">Available Training Programs</h2>
                              </div>

                              <p className={twMerge(merriweather.className, "grid-page-column-content-text font-normal my-6")}></p>

                                  
                              <ul className="space-y-4 text-left text-black dark:text-black">
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Garment Sewing Operation</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Cutting and Assembling (Skirt, Shirt)</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Advanced Garment Sewing</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Beginners Pattern Making</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Advanced Pattern Making</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Pattern making, cutting, and assembling (Skirt, Shirt, Trouser)</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Maintenanced for Beginners</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Mind Set</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Kayzen</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Leader Ship</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Project Management</span>
                                  </li>
                                  
                              </ul>
                          </div>
                        </div>     
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center">
                            <h2 className="title-type-2 my-6 text-[#0384d2] w-full"> A student’s perspective</h2>
                        </div>

                        <div className="card flex overflow-hidden flex-col">
                            <div className="grid-page-column-content-text font-normal my-6 leading-9">
                            
                              <span className="text-3xl">❝</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet corporis, rem eveniet obcaecati quisquam beatae eos consectetur laudantium earum voluptatibus fugiat hic ut, commodi ratione consequatur excepturi quos laboriosam. <span className="text-3xl">❞</span>
                            
                            </div>

                            <div className="flex items-center gap-2 my-6">
                                <Image src={StudentPerspective} alt="student’s perspective" className="h-20 w-20 rounded-full" />

                                <div className="flex flex-col">
                                    <div className="font-medium text-xl tracking-tight leading-5">
                                        Abebe Kebede
                                    </div>
                                    <div className="leading-5 tracking-tight">
                                        Garment Trainee
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

              </div>

          </main>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}