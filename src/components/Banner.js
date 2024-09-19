import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Banner_image from "../assets/Images/Banner_image.png";
import Banner_image_mobile from "../assets/Images/Banner_image_mobile.png";

function Banner() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionPosition = sectionRef.current.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
          setIsActive(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Banner pb-20 pt-36 lg:pb-64 lg:pt-[206px]">
      <div className="container mx-auto">
        <div className="banner_text">
          <h1
            ref={sectionRef}
            className={`text-white animated-section text-center mx-auto max-w-[900px] relative z-10 mb-8 ${isActive ? 'active' : ''}`}
          >
            Revolutionising Enterprise{" "}
            <span className="Automation italic">Automation</span> Using AI Agents
          </h1>
          <p
            ref={sectionRef} style={{"transition-delay":"0.7s"}}
            className={`text-center animated-section max-w-[900px] relative z-10 sm:block hidden mx-auto  ${isActive ? 'active' : ''}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div
              ref={sectionRef} style={{"transition-delay":"1s"}}
            className={`banner_buttons animated-section relative z-10 flex gap-3 mt-[30px] md:mt-[80px] justify-center ${isActive ? 'active' : ''}`}
          >
            <button className="light_button">Sign Up</button>
            <button className="transparent_button">Request a Demo</button>
          </div>
        </div>
        <Image
             ref={sectionRef} style={{"transition-delay":"1.2s"}}
          src={Banner_image}
          alt="Banner Image"
          className={`md:mt-[100px] animated-section  mt-8 ${isActive ? 'active' : ''}`}
        />
   
      </div>
    </div>
  );
}

export default Banner;
