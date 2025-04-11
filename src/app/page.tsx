import { CardSpotlightDemo } from "@/components/CardComponent";
import { AppleCardsCarouselDemo } from "@/components/Crousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/moving-border";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 min-h-screen">
      <BackgroundBeamsWithCollision className="flex flex-col">
        {/* Navbar placed at the top inside the background UI */}
        <div className="w-full fixed top-4 left-0 z-50">
          <Navbar />
        </div>

        {/* Spacer so content doesn't go under fixed navbar */}
        <div className="pt-20">
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Where Fabric Dreams Become{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Flawless Reality.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>Flawless Reality.</span>
              </div>
            </div>
          </h2>
        </div>

        <div>
          <Button
            borderRadius="1.75rem"
            className="bg-transparent dark:bg-transparent font-bold text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Browse Services
          </Button>

          <button className="mx-4 px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            Contact us
          </button>
        </div>
      </BackgroundBeamsWithCollision>

      <div className="w-[90%] mx-auto bg-gray-400 mt-10 rounded-lg min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] flex items-center justify-center gap-2 px-4">
        <CardSpotlightDemo />
        <CardSpotlightDemo />
        <CardSpotlightDemo />
      </div>

      <div className="mt-10">
        <AppleCardsCarouselDemo/>
      </div>

      <div className="mt-10 min-h-[40vh] w-[94%] p-10 mx-auto bg-[#1C1D29] rounded-lg flex">
        <div className="max-w-[50%]">
          <h1 className="text-2xl font-sans relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-orange-500 after:rounded">
            Ready to Connect?
          </h1>
          <p className="mt-4 text-gray-300 font-light max-w-[50%]">
            Don't wait—let's solve it now! Our experts are on standby to guide
            you. Reach out and get a response within 24 hours.
          </p>
        </div>

        <div className="w-[40%] h-[40%]  bg-white rounded-lg p-5">
            <h1 className="text-zinc-800 text-xl font-extrabold">We’re Here to Help!</h1>
            <p className="mt-4 text-gray-800 font-light max-w-[90%]">One conversation could solve everything. Let’s start now</p>
            <button className="my-5 px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            Contact us
          </button>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
