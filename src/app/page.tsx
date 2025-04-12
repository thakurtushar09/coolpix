"use client";
import Contactdiv from "@/components/Contactdiv";
import { CoolButton } from "@/components/CoolButton";
import { AppleCardsCarouselDemo } from "@/components/Crousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Camera, Laptop, Palette } from "lucide-react";
import Link from "next/link";


// Reusable Card Component
interface CardSpotlightDemoProps {
  icon: React.ComponentType<{ size: number; className?: string }>;
  title: string;
  description: string;
  className?: string;
}

function CardSpotlightDemo({ icon: Icon, title, description, className }: CardSpotlightDemoProps) {
  return (
    <CardSpotlight className={`h-96 w-full flex flex-col items-center justify-center p-8 gap-6 ${className}`}>
      <div className="p-4 rounded-full bg-primary/10">
        <Icon size={48} className="text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </CardSpotlight>
  );
}

export default function Home() {
  const services = [
    {
      icon: Camera,
      title: "Professional Photo Editing",
      description: "Transform your images with expert editing for flawless, publication-ready results."
    },
    {
      icon: Palette,
      title: "Health & Beauty Retouching",
      description: "Specialized editing that enhances while maintaining natural textures and authenticity."
    },
    {
      icon: Laptop,
      title: "E-commerce Solutions",
      description: "Optimized product images that increase conversions and showcase your items perfectly."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <BackgroundBeamsWithCollision className="flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[90vh]">
        <div className="flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 sm:pt-40 sm:pb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
            Where Editing Dreams Become{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-2 sm:py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Flawless Reality.</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-2 sm:py-4">
                <span>Flawless Reality.</span>
              </div>
            </div>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12">
            <Link href={'/Services'}>
            <CoolButton />
            </Link>
            <Link href={'/Contact'}>
            <button className="px-8 py-3 sm:px-12 sm:py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-all duration-200 text-sm sm:text-base cursor-pointer">
              Contact us
            </button>
            </Link>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Services Cards Section */}
      <div className="w-full max-w-7xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <CardSpotlightDemo
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="w-full max-w-[350px] md:max-w-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className="mt-10 sm:mt-16 px-4 sm:px-6">
        <AppleCardsCarouselDemo />
      </div>

      {/* Contact Section */}
      <div className="mt-10 sm:mt-16">
        <Contactdiv />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}