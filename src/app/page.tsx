"use client";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Statistics } from "@/sections/Statistics";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Trainings } from "@/sections/Trainings";
import { ContactForm } from "@/sections/ContactForm";
import { Footer } from "@/sections/Footer";

import { useEffect, useState } from "react";

// const DEFAULT_CENTER = [38.907132, -77.036546]
import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Barlow_Semi_Condensed } from "next/font/google";
import { Inter } from "next/font/google";

import { twMerge} from "tailwind-merge";

// const roboto = Roboto({
//   weight: ['400', '500', '700'],
//   subsets: ['latin'],
// })

// const merriweather = Merriweather({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// })

// const barlow = Barlow_Semi_Condensed({
//   weight: ['400', '600', '700'],
//   subsets: ['latin'],
// })

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className={twMerge(inter.className, "hero-wrapper")}>
        <div className="hero-gradient">
            <Header />
            <Hero />
        </div>
      </div>
      <LogoTicker />
      <Statistics />
      <ProductShowcase />
      <Trainings />

      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d985.1659193333041!2d38.73568101042511!3d9.003061778332917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b878388778361%3A0x4a1649b4332be7ef!2zUHJvZHVjdGl2aXR5IEltcHJvdmVtZW50IGFuZCBDZW50ZXIgb2YgRXhjZWxsZW5jZSAo4Yid4Yit4Ymz4Yib4YqQ4Ym1IOGIm-GIu-GIuOGLq-GKkyDhi6jhiI3hi5XhiYDhibUg4Yib4YuV4Yqo4YiNKQ!5e0!3m2!1sen!2set!4v1743499012372!5m2!1sen!2set" width="100%" height="300"  loading="lazy"></iframe> */}

      <div className="bg-white relative">
        <ContactForm />

        <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Productivity+Improvement+and+Center+of+Excellence+(ምርታማነት+ማሻሸያና+የልዕቀት+ማዕከል)" width="100%" className="h-96 md:h-[600px]" ></iframe>
      </div>
      
      <Footer />
    </>
  );
}
