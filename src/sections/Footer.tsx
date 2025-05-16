import Image from "next/image";
import Logo from "@/assets/Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocation, faLocationPin, faLocationPinLock } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faFacebook, faTelegram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="bg-[#0384d2] text-[#BCBCBC] py-10">
      <div className="container">
        <div className="footer-controller lg:flex">
          <div className="footer-column-left my-8 md:pr-6">
            <div className="inline-flex items-center">
              <div className="footer-logo-outer-border">
                <Image src={Logo} height={80} alt="PICE Logo" className="relative"/>
              </div>
              <h1 className="ml-3 text-5xl font-bold text-[#fcfb00]">PICE</h1>
            </div>
            
            <div className="mt-2">
              <p className="font-bold text-[#fcfb00] text-xl"> Productiviy Improvement Center of Excellence </p>
            </div>

            <address className="mt-2 text-[#fff] text-lg">
              <FontAwesomeIcon icon={faLocationPin} className="text-[#fcfb00]" />
              {" "}
              Lideta Sub-City Wereda 10 <br/>
              Sarbet, 50m from Kaizen Excellence Center
            </address>

            <div className="mt-3">
              <div>
                <FontAwesomeIcon icon={faPhone} className="text-[#fcfb00]" />
                {" "}
                <a className="font-bold text-lg text-[#fff] footer-address-item" href="tel:(+251)115-58-47-66" title="Contact us by telephone"> +251-115-58-47-66/67 </a>
              </div>

              <div>
                <FontAwesomeIcon icon={faEnvelope} className="text-[#fcfb00]" />
                {" "}
                <a className="font-bold text-lg text-[#fff] footer-address-item" href="mailto:pice@edu.et" title="Contact us by email" target="_blank" rel="noreferrer">pice@edu.et</a>
              </div>
            </div>
          </div>

          <div className="footer-column-middle my-8 md:px-10 lg:pt-16">
            <h3 className="font-bold text-2xl text-[#fff] mb-3">Helpful Links</h3>
            <ul className="flex flex-col list-disc font-bold">
              <li className="">
                <Link className="text-[#fff] underline text-xl footer-nav-link-item" href="/about">About</Link>
              </li>
              <li className="footer-nav-link-item">
                <a className="text-[#fff] underline text-xl footer-nav-link-item" href="/capacity-building">Trainings</a>
              </li>
              <li className="footer-nav-link-item">
                <a className="text-[#fff] underline text-xl footer-nav-link-item" href="">Specification</a>
              </li>
              <li className="footer-nav-link-item">
                <a className="text-[#fff] underline text-xl footer-nav-link-item" href="">Gas measurement</a>
              </li>
              <li className="footer-nav-link-item">
                <a className="text-[#fff] underline text-xl footer-nav-link-item" href="">Hiring evaluation</a>
              </li>
            </ul>
          </div>

          <div className="footer-column-right my-8 md:pl-8 lg:pt-16">
            <div className="flex gap-6 mt-6 footer-social-list">
              <a className="footer-social-item">
                <FontAwesomeIcon icon={faTelegram} size="3x"/>
              </a>
              <a className="footer-social-item">
                <FontAwesomeIcon icon={faYoutube} size="3x"/>
              </a>
              <a className="footer-social-item">
                <FontAwesomeIcon icon={faTwitter} size="3x"/>
              </a>
              <a className="footer-social-item">
                <FontAwesomeIcon icon={faFacebook} size="3x"/>
              </a>
            </div>
          </div>
        </div>
        
        <p className="footer-moto">Wisdom and Excellence</p>

        <p className="mt-6 text-center text-[#fff]">&copy; 2025 PICE, Inc. All rights reserved</p>

      </div>
    </footer>
  );
};
