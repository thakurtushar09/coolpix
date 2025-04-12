"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { CheckCircle } from "lucide-react";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-white dark:bg-gray-900">
      <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Professional Services
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const ServiceContent = ({ points }: { points: string[] }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 h-full">
      <ul className="space-y-4 text-neutral-600 dark:text-neutral-300 text-base md:text-lg font-sans">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400" size={18} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const data = [
  {
    category: "Photo Editing",
    title: "Background Change",
    src: "/bg-remove-long.jpg",
    content: <ServiceContent points={[
      "Complete background removal",
      "Custom backdrop integration",
      "Studio-quality white backgrounds",
      "E-commerce ready outputs"
    ]} />,
  },
  {
    category: "Photo Editing",
    title: "Model Retouching",
    src: "/retouching-long.jpg",
    content: <ServiceContent points={[
      "Skin smoothing & blemish removal",
      "Product enhancement",
      "Natural texture preservation",
      "Non-destructive workflow"
    ]} />,
  },
  {
    category: "Photo Editing",
    title: "Ghost Editing",
    src: "/ghost-long.jpg",
    content: <ServiceContent points={[
      "Invisible mannequin removal",
      "Garment shaping & draping",
      "Clothing adjustments",
      "Fashion catalog ready"
    ]} />,
  },
  {
    category: "Photo Editing",
    title: "Color Correction",
    src: "/color-correction.jpg",
    content: <ServiceContent points={[
      "Precise color matching",
      "Fabric color adjustments",
      "Consistent color across images",
      "Pantone reference accuracy"
    ]} />,
  },
  {
    category: "Photo Editing",
    title: "Shadow Creation",
    src: "/shadow-long.jpg",
    content: <ServiceContent points={[
      "Natural drop shadows",
      "Reflection creation",
      "3D shadow effects",
      "Product presentation ready"
    ]} />,
  },
  
  {
    category: "Design Services",
    title: "Web Design",
    src: "/web-long.jpg",
    content: <ServiceContent points={[
      "Responsive website design",
      "UI/UX optimized layouts",
      "Mobile-first approach",
      "SEO-friendly structure"
    ]} />,
  },
  {
    category: "Design Services",
    title: "Brand Identity",
    src: "/brand-design.jpg",
    content: <ServiceContent points={[
      "Complete brand guidelines",
      "Color palette selection",
      "Typography systems",
      "Marketing collateral"
    ]} />,
  },
];