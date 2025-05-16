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
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const barlow = Barlow_Semi_Condensed({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})


export default function Home() {
  return (
    <>
      {/* <PageBanner title="Automotive Department" /> */}

      <section className={twMerge(inter.className, "banner-container pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip")}>
        
        <Header />
        
        <div className="banner-image-container">
            {/* <Image src={AutomotiveBanner} alt="student’s perspective" className="w-full" /> */}
            <div className="banner-image" style={{backgroundImage: "url(" + "/static/images/leather-banner.png" + ")"}}></div>

            <div className="banner-gradient"></div>
        </div>

        <div className="banner-title container">
            <h1 className={twMerge(merriweather.className)}>Leather Technology Department</h1>
        </div>

      </section>

      <div className="bg-[#f4f4f4]">

        <div className="dept-grid-page-layout flex flex-col h-full md:flex-row rounded border border-white/50 py-10">
          <main className={twMerge(barlow.className, "grid-page-column-content w-full px-12 md:px-6")}>
              <div className="mb-6">
                    
                    <div className="">
                        <div className="">
                            <div className="grid-page-column-content-header">
                                <h2 className={twMerge(barlow.className, "title-type-2 my-6 text-[#0384d2]")}>Discover Electrical Electronics Trainings</h2>
                            </div>

                            <p className={twMerge(barlow.className, "grid-page-column-content-text font-normal my-6 text-justify text-xl leading-relaxed")}>The Leather Technology Department at our Center offers specialized training programs designed to cultivate expertise in all aspects of leather craftsmanship and industrial production. Our curriculum covers fundamental to advanced skills, including Sewing Operations (Beginner & Advanced), Shoe Design & Pattern Making, Bag Design & Pattern Making, and Leather Product Manufacturing. Trainees also learn critical techniques like Leather Tanning & Shaping and Hides & Skins Quality Improvement, alongside innovative approaches such as Design Thinking. Complemented by Life Skills training, our programs prepare students for successful careers in leather goods production, footwear design, and quality control, blending traditional craftsmanship with modern technology for the global leather industry.</p>

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
                                      <span>Sewing Operation/Beginners</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Sewing Operation/Advanced</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Shoes Design and Pattern Making</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>የቆዳ ዉጤቶች ስራ</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>የቆዳ ማስዋቢያና ቅርጽ ማውጣት ስራ</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Design Thinking</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Bag Design & Pattern</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Life Skill</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Leather Manufacturing Technology</span>
                                  </li>
                                  <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                      <svg className="shrink-0 w-3.5 h-3.5 text-green-900 dark:text-green-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                      </svg>
                                      <span>Hides and Skins Quality Improvement</span>
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
                                        Leather Technology Trainee
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
