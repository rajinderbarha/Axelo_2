
import React from 'react'
import Logo_footer from '../assets/logos/Logo_main.svg'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
            <div className="container mx-auto    py-[20px] px-[10px] bg-[#0c0d14]">
                <div className="footer_container bg-[#0c0d14] border-[1px] border-[#FFFFFF33] border-solid rounded-[20px] sm:rounded-[40px] pt-[58px] md:pt-[80px] lg:pt-[102px] px-[30px] md:px-[70px] lg:px-[100px] ">
                    <div className="flex justify-between sm:flex-row flex-col gap-[50px]">
                        <div className="footer-logo-items">
                            <div className="img_div">

                                <Image src={Logo_footer} alt='' className='max-w-[114px] sm:max-w-[140px] md:max-w-[190px] w-full' />
                            </div>
                            <ul className='list-none text-[#93949B] mt-[38px] md:mt-[50px] lg:mt-[82px] text-lg'>
                                <li className=''>Email : info@stelisai.com</li>
                                <li>Phone : +44 2345 1234</li>
                                <li>Address : 78, street New york</li>
                            </ul>
                        </div>
                        <div className="pages-links">
                            <h6 className='text-white text-[20px] mb-[30px]'>Pages</h6>
                            <ul className="list-none text-lg">
                                <li><a href="#" className='text-[#93949B] mt-[15px]'>Feature</a></li>
                                <li><a href="#" className='text-[#93949B] mt-[15px]'>Testimonial</a></li>
                                <li><a href="#" className='text-[#93949B] mt-[15px]'>Contact</a></li>
                            </ul>
                        </div>
                        <div className="other-links">
                            <h6 className='text-white text-[20px] mb-[30px]'>Utility</h6>
                            <ul className="list-none text-lg">
                                <li><a href="#" className='text-[#93949B] mt-[15px]'>Privacy</a></li>
                                <li><a href="#" className='text-[#93949B] mt-[15px]'>Security</a></li>
                                <li><a href="#" className='text-[#93949B] mt-[15px]'>Terms</a></li>
                                <li><a href="#" className='text-[#93949B] mt-[15px]'>FAQs</a></li>
                                <li><a href="#" className='text-[#93949B] mt-[15px]'>404</a></li></ul>
                        </div>
                    </div>
                    <div className='footer-below-text mt-[60px] sm:mt-[90px] md-[95px] lg:mt-[100px]'>
                    {/* <hr/> */}
                    <div className='line'></div>
                <div className='justify-center mx-auto flex gap-[50px]  py-[26px]'>

                    <p className=''>
                        <a href ="#" className='text-white text-[16px]'>Terms of Service</a>
                    </p>
                    <p>
                        <a href ="#" className='text-white text-[16px]'>Privacy Policy</a>

                    </p>
                    </div>
                </div>
                </div>

            </div>

        </>
    )
}

export default Footer