import Image from "next/image";
import React from "react";
import Banner_image from "../assets/Images/Banner_image.png";
import Banner_image_mobile from '../assets/Images/Banner_image_mobile.png'

function Banner() {

  return (
    <div className="Banner pb-20 pt-36 lg:pb-64 lg:pt-[206px]">
      <div className=" container mx-auto">
        <div className="banner_text">
          <h1  data-aos="fade-up" className="text-white text-center  lg:mb-0  mb-8">
            Revolutionising Enterprise{" "}
            <span className="Automation italic "> Automation</span> Using AI
            Agents{" "}
          </h1>
          <p  data-aos="fade-up"  data-aos-delay="300" className="text-center sm:block hidden  max-w-[1110px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div  data-aos="fade-up"  data-aos-delay="400" className="banner_buttons flex gap-3 mt-[30px]  md:mt-[80px] justify-center">
            <button className="light_button">Sign Up</button>
            <button className="transparent_button ">Request a Demo </button>
          </div>
        </div>
        <Image  data-aos="fade-up"
         data-aos-delay="600"
          src={Banner_image}
          alt="Banner_image"
          className="md:mt-[100px] mt-8 "
        />
         {/* <Image
          src={Banner_image_mobile}
          alt="Banner_image"
          className="md:mt-[100px] mt-8 sm:hidden block"
        /> */}
      </div>
    </div>
  );
}

export default Banner;
