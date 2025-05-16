'use client';

import aawsaLogo from "@/assets/logo-aawsa.png";
import koicaLogo from "@/assets/logo-koica.png";
import aacalsb from "@/assets/logo-aacalsb.png";
import skLogo from "@/assets/logo-sk.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import full from "@/assets/logo-full.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div 
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition= {{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            <Image src={aacalsb} alt="aacalsb logo" className="logo-ticker-image" />
            <Image src={aawsaLogo} alt="Aawsa Logo"  className="logo-ticker-image" />
            <Image src={koicaLogo} alt="koica Logo" className="logo-ticker-image" />
            <Image src={full} alt="koica Logo" className="logo-ticker-image" />

            {/* Second logos for animation */}
            <Image src={aacalsb} alt="aacalsb logo" className="logo-ticker-image" />
            <Image src={aawsaLogo} alt="Aawsa Logo"  className="logo-ticker-image" />
            <Image src={koicaLogo} alt="koica Logo" className="logo-ticker-image" />
            <Image src={full} alt="koica Logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
