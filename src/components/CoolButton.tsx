"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // optional utility for conditional classes

export function CoolButton({
  className,
}: {
  className?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-6 py-3 text-white shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none",
        className
      )}
    >
      <span className="relative z-10 font-medium tracking-wide">Browse Services</span>
      <span
        className="absolute inset-0 z-0 h-full w-full bg-gradient-to-br from-blue-400 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      ></span>
      <span
        className="pointer-events-none absolute inset-0 z-10 rounded-xl border border-blue-300/30"
      />
    </motion.button>
  );
}
