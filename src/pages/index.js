import Image from "next/image";
import localFont from "next/font/local";
import Banner from "@/components/Banner";
import Integration from "@/components/Integration";
import Fingertips from "@/components/Fingertips";
import Logos from "@/components/logos";
import Customer_Stories from "@/components/Customer_Stories";
import CTA from "@/components/CTA";
import Navbar from "@/Comman/Navbar";
import Footer from "@/components/Footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <Navbar />
      <Banner />
      <Logos />
      <Integration />
      <Fingertips />
      <Customer_Stories />
      <CTA />
      <Footer />
    </>
  );
}
