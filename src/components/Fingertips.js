import React from "react";
import Fingertips_img from "../assets/Images/Fingertips.svg";
import Image from "next/image";
import Azure_blob_storage from '../assets/logos/Azure_blob_storage.png'
import AWSS3 from '../assets/logos/AWSS3.png'
import Snowflake from '../assets/logos/Snowflake.png'
import Salesforce from '../assets/logos/Salesforce.png'
import GoogleDocs from '../assets/logos/GoogleDocs.png'
import Notion from '../assets/logos/Notion.png'
import Email from '../assets/logos/Email.png'
import Slack from '../assets/logos/Slack.png'
import Dropbox from '../assets/logos/Dropbox.png'
import Googlesheet from '../assets/logos/Google sheet.png'
function Fingertips() {
  return (
    <div className="Fingertips pt-[50px] pb-[84px] md:pt-28 md:pb-36">
      <div className="container text-center mx-auto">
        <h2 className="text-white mb-5"  >
          Smart integrations at your fingertips{" "}
        </h2>
        <p className="mb-20" >Connect you ai agent with leading platforms</p>
        <Image src={Fingertips_img} className="md:block hidden" alt="Fingertips_img" />
        <div className="Logos_Fingertips md:hidden block">
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={Azure_blob_storage} alt="logo" />
          <h6 className="text-white">Azure blob storage</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={AWSS3} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={Snowflake} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={Salesforce} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={GoogleDocs} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={Notion} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={Email} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={Slack} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={Dropbox} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        <div className="flex items-center rounded gap-5 bg-[#FFFFFF08] py-[10px] mb-5 px-6" >
          <Image width={40} src={Googlesheet} alt="logo" />
          <h6 className="text-white">AWS S3</h6>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Fingertips;
