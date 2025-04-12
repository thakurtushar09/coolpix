import Link from "next/link";
import React from "react";

const Contactdiv = () => {
  return (
    <div className="mt-10 min-h-[40vh] w-[94%] p-6 sm:p-10 mx-auto bg-[#1C1D29] rounded-lg flex flex-col md:flex-row items-center justify-center md:justify-between">
      {/* Left Content - Always visible */}
      <div className="max-w-full md:max-w-[50%] text-center md:text-left">
        <h1 className="text-2xl font-sans relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-orange-500 after:rounded">
          Ready to Connect?
        </h1>
        <p className="mt-4 text-gray-300 font-light max-w-full md:max-w-[80%]">
          Don't wait—let's solve it now! Our experts are on standby to guide
          you. Reach out and get a response within 24 hours.
        </p>

        {/* Mobile-only Contact Button */}
        <div className="mt-8 md:hidden">
          <Link href={'Contact'}>
          <button className="px-8 py-3 sm:px-12 sm:py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 cursor-pointer">
            Contact us
          </button>
          </Link>
        </div>
      </div>

      {/* Right Content - Hidden on mobile */}
      <div className="hidden md:flex w-full md:w-[40%] h-auto md:h-[40%] bg-white rounded-lg p-5 flex-col items-center justify-center">
        <h1 className="text-zinc-800 text-xl font-extrabold text-center">
          We're Here to Help!
        </h1>
        <p className="mt-4 text-gray-800 font-light text-center">
          One conversation could solve everything. Let's start now
        </p>
        <Link href={'/Contact'}>
        <button className="my-5 px-8 py-3 sm:px-12 sm:py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200 cursor-pointer">
          Contact us
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Contactdiv;