"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Eye, Target, HeartHandshake, ArrowBigRight } from "lucide-react";
import Contactdiv from "@/components/Contactdiv";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import Link from "next/link";

// Reusable Card Component
interface CardSpotlightDemoProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  className?: string;
}

function CardSpotlightDemo({
  title,
  description,
  icon: Icon,
  className = "",
}: CardSpotlightDemoProps) {
  return (
    <CardSpotlight className={`h-full w-full flex flex-col items-center justify-center p-8 gap-6 ${className}`}>
      <div className="p-4 rounded-full bg-primary/10">
        <Icon size={48} className="text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </CardSpotlight>
  );
}

const page = () => {
  const commitments = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To redefine visual excellence by pushing creative boundaries while maintaining authenticity in every pixel we touch."
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "Deliver exceptional editing services that empower businesses and creators to showcase their best selves to the world."
    },
    {
      icon: HeartHandshake,
      title: "Our Values",
      description: "Quality, integrity, and innovation guide every project. We believe in building trust through consistent excellence."
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="min-h-[70vh] w-full flex flex-col items-center justify-center relative overflow-hidden px-4">
        <div className="w-full max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">ABOUT US</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We turn creativity into flawless results. Our team of expert editors
            and designers brings your vision to life with precision and
            passion—because your success is our craft.
          </p>
        </div>
        <BackgroundBeams className="absolute inset-0 z-0" />
      </div>

      {/* Commitments Section */}
      <div className="w-full px-4">
        <div className="w-full max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 mt-10 rounded-lg py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-zinc-800 dark:text-white font-bold mb-10 px-4">
            Our Commitments
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {commitments.map((item, index) => (
              <CardSpotlightDemo
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className="h-[300px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full px-4 mt-10">
        <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-xl py-10 shadow-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-400 px-4">
            Our Services
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full px-4">
            {/* Service Cards */}
            <div className="w-full max-w-2xl lg:max-w-none lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full h-[300px] sm:h-[400px] bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-amber-400 transition-all duration-300 group overflow-hidden">
                <h1 className="text-white text-xl sm:text-2xl font-bold mb-4">
                  Background Change
                </h1>
                <div className="relative h-[200px] sm:h-[280px] rounded-lg overflow-hidden">
                  <Image
                    src={"/background-change.jpg"}
                    alt="background-change"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">
                      Seamlessly replace backgrounds for professional product shots
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[300px] sm:h-[400px] bg-zinc-900 p-6 rounded-xl border border-zinc-700 hover:border-amber-400 transition-all duration-300 group overflow-hidden">
                <h1 className="text-white text-xl sm:text-2xl font-bold mb-4">Retouching</h1>
                <div className="relative h-[200px] sm:h-[280px] rounded-lg overflow-hidden">
                  <Image
                    src={"/Retouching.png"}
                    alt="retouching"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">
                      Flawless skin and product retouching for perfect images
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* See All Button */}
            <div className="w-full max-w-md lg:w-1/3 h-full">
              <Link href={"/Services"}>
                <button className="w-full h-[300px] sm:h-[400px] bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex flex-col items-center justify-center gap-4 p-6 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
                  <span className="text-white text-xl sm:text-2xl font-bold text-center">
                    Explore All Services
                  </span>
                  <ArrowBigRight size={40} className="text-white animate-pulse" />
                  <span className="text-white/80 text-sm text-center">
                    10+ professional editing services
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Contactdiv />
      <Footer />
    </div>
  );
};

export default page;