"use client";
import Contactdiv from "@/components/Contactdiv";
import { CoolButton } from "@/components/CoolButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { BackgroundLines } from "@/components/ui/background-lines";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define the service data type
interface Service {
  title: string;
  image: string;
  points: string[];
}

// Reusable ServiceCard component
const ServiceCard = ({
  title,
  image,
  points
}: Service) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group h-[400px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-0 group-hover:p-6 transition-all duration-500 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-6">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h2>
          <ul className="space-y-2 text-white/90">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="flex-shrink-0 mt-1 text-amber-400" size={16} />
                <span className="text-xs md:text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Page = () => {
  const photoEditingServices: Service[] = [
    {
      title: "Background Change",
      image: "/background-removing.png",
      points: [
        "Complete background removal",
        "Custom backdrop integration",
        "Studio-quality white backgrounds",
        "E-commerce ready outputs"
      ]
    },
    {
      title: "Model Retouching",
      image: "/Retouching.png",
      points: [
        "Skin smoothing & blemish removal",
        "Product enhancement",
        "Natural texture preservation",
        "Non-destructive workflow"
      ]
    },
    {
      title: "Ghost Editing",
      image: "/Ghost-editing.png",
      points: [
        "Invisible mannequin removal",
        "Garment shaping & draping",
        "Clothing adjustments",
        "Fashion catalog ready"
      ]
    },
    {
      title: "Shadow Creation",
      image: "/shadow-creation.png",
      points: [
        "Natural drop shadows",
        "Reflection effects",
        "3D shadow simulation",
        "Product presentation enhancement"
      ]
    },
    {
      title: "Background Cleaning",
      image: "/background-cleaning.png",
      points: [
        "Distraction removal",
        "Imperfection cleanup",
        "Noise reduction",
        "Professional finish"
      ]
    },
    {
      title: "Color Correction",
      image: "/color-correction.png",
      points: [
        "Precise color matching",
        "Fabric color adjustments",
        "Consistent color across images",
        "Pantone reference accuracy"
      ]
    }
  ];

  const graphicsDesignServices: Service[] = [
    {
      title: "Logo Design",
      image: "/services-logo.png",
      points: [
        "Unique brand identity creation",
        "Multiple concept options",
        "Vector file formats",
        "Full copyright ownership"
      ]
    },
    {
      title: "Web Design",
      image: "/services-web.png",
      points: [
        "Responsive website design",
        "UI/UX optimized layouts",
        "Mobile-first approach",
        "SEO-friendly structure"
      ]
    },
    {
      title: "Brand Identity",
      image: "/services-identity.png",
      points: [
        "Complete brand guidelines",
        "Color palette selection",
        "Typography systems",
        "Marketing collateral"
      ]
    },
    {
      title: "Social Media Graphics",
      image: "/services-socialGraphics.png",
      points: [
        "Platform-optimized designs",
        "Post templates creation",
        "Banner and cover designs",
        "Brand consistency"
      ]
    }
  ];

  const fillGrid = (arr: Service[]) => {
    const filled = [...arr];
    const remainder = arr.length % 3;
    if (remainder !== 0) {
      filled.push({
        title: "Coming Soon",
        image: "/coming-soon.png", // You must have this image in your public folder
        points: ["Exciting services in progress"]
      });
    }
    return filled;
  };

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="min-h-[60vh] lg:min-h-screen relative overflow-hidden">
        <BackgroundLines className="absolute inset-0 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center pt-20 pb-10 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
                OUR SERVICES
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed"
              >
                Professional creative services from photo editing to complete graphic design solutions. We transform your visuals into powerful brand assets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-6"
              >
                <Link href="#services-section">
                  <CoolButton/>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </BackgroundLines>
      </div>

      {/* Services Section */}
      <section id="services-section" className="w-full bg-white py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 md:mb-16 text-zinc-800"
          >
            Our Complete Service Offerings
          </motion.h1>

          {/* Photo Editing Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">
              Professional Photo Editing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {fillGrid(photoEditingServices).map((service, index) => (
                <ServiceCard
                  key={`photo-${index}`}
                  title={service.title}
                  image={service.image}
                  points={service.points}
                />
              ))}
            </div>
          </motion.div>

          {/* Graphics & Web Design Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 pb-2 border-b border-gray-200">
              Graphics & Web Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {fillGrid(graphicsDesignServices).map((service, index) => (
                <ServiceCard
                  key={`design-${index}`}
                  title={service.title}
                  image={service.image}
                  points={service.points}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Contactdiv />
      <Footer />
    </div>
  );
};

export default Page;
