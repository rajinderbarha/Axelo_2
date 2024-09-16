import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Customer_Image from "../assets/Images/Customer_Image.png";
import Image from "next/image";
import star from "../assets/Images/Star.svg";
function SliderMain() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="SliderMain px-4">
      <Slider {...settings}>
      <div className="Customer_Stories_card p-8">
            <div className="flex items-center mb-12 justify-between">
              <div className="flex Customer items-center gap-5">
                <Image src={Customer_Image} alt="Customer_Image" />
                <div className="">
                <h3 className="text-white ">Devid Johnath</h3>
                <p>3 months ago</p>
                </div>
              </div>
              <div className="star">
                <Image src={star} alt="star" />
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>
          </div>
          <div className="Customer_Stories_card p-8">
            <div className="flex items-center mb-12 justify-between">
              <div className="flex Customer items-center gap-5">
                <Image src={Customer_Image} alt="Customer_Image" />
                <div className="">
                <h3 className="text-white ">Devid Johnath</h3>
                <p>3 months ago</p>
                </div>
              </div>
              <div className="star">
                <Image src={star} alt="star" />
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>
          </div>
          <div className="Customer_Stories_card p-8">
            <div className="flex items-center mb-12 justify-between">
              <div className="flex Customer items-center gap-5">
                <Image src={Customer_Image} alt="Customer_Image" />
                <div className="">
                <h3 className="text-white ">Devid Johnath</h3>
                <p>3 months ago</p>
                </div>
              </div>
              <div className="star">
                <Image src={star} alt="star" />
              </div>
            </div>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.”
            </p>
          </div>
      </Slider>
    </div>
  );
}

export default SliderMain;
