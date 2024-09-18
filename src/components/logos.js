import React from "react";
import logo_1 from "../assets/logos/beatport.svg";
import logo_2 from "../assets/logos/Iaddition.svg";
import logo_3 from "../assets/logos/ipinfo.svg";
import logo_4 from "../assets/logos/pitch.svg";
import logo_5 from "../assets/logos/Proposales.svg";
import logo_6 from "../assets/logos/scrapingbee.svg";
import Image from "next/image";
function Logos() {
  return (
    < div className="py-2">
      <div className="line"></div>
      <div className="logos overflow-hidden  sm:py-16 py-10">
        <h3 className="text-white text-center mb-16 px-[25px]" data-aos="fade-up">
          Trusted by the world’s best companies
        </h3>
        <div className="main_logos flex " >
          <div className="logo_items" data-aos="fade-up">
            <Image src={logo_1} alt="logos" />
            <Image src={logo_2} alt="logos" />
            <Image src={logo_3} alt="logos" />
            <Image src={logo_4} alt="logos" />
            <Image src={logo_5} alt="logos" />
            <Image src={logo_6} alt="logos" />
          </div>
          <div className="logo_items" data-aos="fade-up">
          <Image src={logo_1} alt="logos" />
            <Image src={logo_2} alt="logos" />
            <Image src={logo_3} alt="logos" />
            <Image src={logo_4} alt="logos" />
            <Image src={logo_5} alt="logos" />
            <Image src={logo_6} alt="logos" />
          </div>
        </div>
      </div>
      <div className="line "></div>
    </div>
  );
}

export default Logos;
