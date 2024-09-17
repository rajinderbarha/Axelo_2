import React from "react";

function CTA() {
  return (
    <div className="overflow-hidden pt-8 sm:pt-20">
      <div className="cta  max-w-[770PX] px-4 relative md:pb-48 pb-20 mx-auto">
        <h5 className="mb-10 text-center text-white" data-aos="fade-up">The future of your industry starts here.</h5>
        <form className="sm:flex gap-2">
          <input type="email" className="sm:mb-0 mb-2" placeholder="Enter your work email" name="email" data-aos="fade-up"/>
          <button className="sm:w-auto w-full" data-aos="fade-up" >Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default CTA;
