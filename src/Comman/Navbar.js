import React, { useState } from "react";
import Logo_main from "../assets/logos/Logo_main.svg";
import Logo_main2 from "../assets/logos/XLogo.svg";
import Image from "next/image";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <>
      <div className="App  absolute w-full top-0 text-white" id="home">
        <div className="line"></div>
        <header className="App-header">
          <nav className="navbar container mx-auto">
            {/* logo */}
            <a href="#home" className="logo">
              <Image src={Logo_main} className="hidden sm:block" alt="Logo_main" />
              <Image src={Logo_main2} className="block sm:hidden" alt="Logo_main" />
            </a>
            <ul className={`navMenu text-white ${isActive ? "active" : ""}`}>
              <li onClick={removeActive}>
                <a href="#home" className="navLink text-white ">
                  Home
                </a>
              </li>
              <li onClick={removeActive}>
                <a href="#catalog" className="navLink">
                  About
                </a>
              </li>
              <li onClick={removeActive}>
                <a href="#products" className="navLink">
                  Feature
                </a>
              </li>
              
            </ul>
            <div className="banner_buttons flex gap-3  justify-center">
            <button className="transparent_button  hidden sm:block">Request a Demo </button>
            <button className="light_button hidden sm:block">Sign Up</button>
          
            <div
              className={`hamburger ${isActive ? "active" : ""}`}
              onClick={toggleActiveClass}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
           
          </nav>
        </header>
        <div className="line"></div>
      </div>
    </>
  );
};

export default Navbar;
