import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Cover } from "@/components/ui/cover";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar - fixed at top */}
      <div className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </div>

      {/* Main content - centered with navbar spacing */}
      <div className="flex-1 flex flex-col pt-20"> {/* pt-20 pushes content below navbar */}
        {/* Hero Section - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 mt-[13%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-4xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            Don't let ideas fade away <br /> Act now <Cover>Contact Us</Cover>
          </h1>
        </div>

        <ContactUs/>

        

        <Footer/>
      </div>
    </div>
  );
};

export default page;