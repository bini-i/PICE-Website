import { Header } from "@/sections/Header";
import { PageBanner } from "@/sections/PageBanner";
import { Footer } from "@/sections/Footer";
import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";

import { twMerge} from "tailwind-merge";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
})


export default function Home() {
  return (
    <>
      <Header />
      <PageBanner title="Trainings" />

      <div className="traininig-grid-page-layout flex flex-col h-full md:flex-row rounded border bg-white/30 border-white/50 container py-10">
          <div className="grid-page-column-nav bg-MetallicBlue/30 md:bg-MetallicBlue/80 w-full md:max-w-[300px] px-8 hidden md:flex flex-col gap-5 h-full py-14s">
              <nav>
                  <div className="cwf-nav__container">
                      <div className="cwf-nav__controller">
                          <ul className="">
                              <li className="nav-item">
                                  <a className={twMerge(roboto.className, "nav-link flex w-full font-medium")} href="/capacity-building/trainings/automotive" aria-current="page">
                                      Automotive
                                  </a>
                              </li><li className="nav-item">
                                  <a className={twMerge(roboto.className, "nav-link flex w-full font-medium")} href="/capacity-building/trainings/computer">
                                      Computer
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className={twMerge(roboto.className, "nav-link flex w-full font-medium")} href="/capacity-building/trainings/construction" target="_blank">
                                      Construction
                                  </a>
                              </li>
                              <li className="nav-item">
                                  <a className={twMerge(roboto.className, "nav-link flex w-full font-medium")} href="/capacity-building/trainings/electronics" target="_blank">
                                      Electronics
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>

          <main className="grid-page-column-content">
              <div className="mb-6">
                  <div className="grid-page-column-content-header">
                    <h1 className={twMerge(merriweather.className, "text-2xl lg:text-5xl font-normal")}>Trainings</h1>
                  </div>

                  <p className={twMerge(merriweather.className, "grid-page-column-content-text font-normal mt-6")}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi commodi quia quas impedit dolorum recusandae repellendus minus nostrum, autem atque, id aliquam fuga eum! Sit, odio sunt. Quasi, dolorem eaque.</p>

                  {/* <div className="my-6">
                    <a className={twMerge(roboto.className, "grid-page-column-content-btn font-bold")} href="/capacity-building/trainings">
                      See More
                    </a>
                  </div> */}
              </div>



          </main>
      </div>
      
      <Footer/>
    </>
  );
}