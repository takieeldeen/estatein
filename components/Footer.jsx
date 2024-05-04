import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="p-12 border-t-[1px] border-neutral-800 grid grid-cols-2 gap-4 gap-y-12 md:grid-cols-5">
        <div className="flex flex-col gap-4">
          <p className="text-neutral-400">Home</p>
          <ul className=" flex flex-col gap-2 text-sm">
            <li>Hero Section</li>
            <li>Features</li>
            <li>Properties</li>
            <li>Testimonials</li>
            <li>CTA</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-neutral-400">About Us</p>
          <ul className=" flex flex-col gap-2 text-sm ">
            <li>Our Story</li>
            <li>Our Works</li>
            <li>How it works</li>
            <li>Our team</li>
            <li>Our clients</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-neutral-400">Properties</p>
          <ul className=" flex flex-col gap-2 text-sm ">
            <li>Portfolio</li>
            <li>Category</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-neutral-400">Services</p>
          <ul className=" flex flex-col gap-2 text-sm ">
            <li>Valuation Mastery</li>
            <li>Strategic Marketing</li>
            <li>Negotiation Wizardy</li>
            <li>Closing Success</li>
            <li>Property Management</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 ">
          <p className="text-neutral-400">Contact Us</p>
          <ul className=" flex flex-col gap-2 text-sm ">
            <li>Contact Form</li>
            <li>Our Offices</li>
          </ul>
        </div>
      </div>
      <div className="bg-neutral-800 py-4 flex flex-col items-center gap-4 md:flex-row-reverse md:justify-between md:px-12 md:py-2">
        <div className="flex gap-2 items-center">
          <div className="w-12 h-12 rounded-full cursor-pointer items-center justify-center flex bg-neutral-900 text-lg hover:bg-neutral-950 transition-all duration-300">
            <FaFacebookF />
          </div>
          <div className="w-12 h-12 rounded-full cursor-pointer items-center justify-center flex bg-neutral-900 text-lg hover:bg-neutral-950 transition-all duration-300">
            <FaLinkedinIn />
          </div>
          <div className="w-12 h-12 rounded-full cursor-pointer items-center justify-center flex bg-neutral-900 text-lg hover:bg-neutral-950 transition-all duration-300">
            <FaXTwitter />
          </div>
          <div className="w-12 h-12 rounded-full cursor-pointer items-center justify-center flex bg-neutral-900 text-lg hover:bg-neutral-950 transition-all duration-300">
            <FaYoutube />
          </div>
        </div>
        <p>&copy;2024 Estatein. All Rights Reserved</p>
      </div>
    </footer>
  );
}
