import React from "react";
import Integration_image from "../assets/Images/Integration_image.png";
import Image from "next/image";
function Integration() {
  return (
    <>
      <div className="Integration relative py-16 sm:py-36">
        <div className="container mx-auto">
          <div className="grid  sm:grid-cols-2  items-center">
            <div className="max-w-[663px] " >
              <h2 className="text-white mb-[20px] md:mb-[40px]">
                Empower your Enterprise with seamless AI agent Integration
              </h2>
              <p className="mb-[10px] md:mb-[30px] sm:block hidden">
                AI agents that can be effortlessly embedded into your exiting
                infrastracture{" "}
              </p>
              <p className="sm:block hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="max-w-[490px] ms-auto">
              <Image src={Integration_image} alt="Integration_image" />
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}

export default Integration;
