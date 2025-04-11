"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen w-[90%] rounded-lg mx-auto bg-[#fdfcea] flex items-center justify-center p-4 sm:p-12 mt-[10%]">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-zinc-800 font-mono">
            Get in touch
          </h1>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Right Content - Form */}
        <div className="lg:w-1/2">
          <div className="border-b-4 border-[#f3f2cf] pb-8 mb-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#f3f2cf] rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b0ab4d]"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full bg-[#f3f2cf] rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b0ab4d]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#f3f2cf] rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b0ab4d]"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full bg-[#f3f2cf] rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#b0ab4d]"
              ></textarea>
            </div>
            
            <button className="mt-6 bg-[#b0ab4d] text-white py-3 px-8 rounded-lg hover:bg-[#9c9842] transition-colors duration-300">
              Send Message
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-[#b0ab4d] hover:text-[#9c9842]">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-[#b0ab4d] hover:text-[#9c9842]">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-[#b0ab4d] hover:text-[#9c9842]">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-[#b0ab4d] hover:text-[#9c9842]">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;