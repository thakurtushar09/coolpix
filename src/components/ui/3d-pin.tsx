"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PinContainerProps {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  target?: "_blank" | "_self";
}

export const PinContainer = ({
  children,
  title,
  href = "/",
  className,
  containerClassName,
  target = "_self",
}: PinContainerProps) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="absolute inset-0 z-10"
        aria-label={title || "Link"}
      />
      
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} target={target} />
    </div>
  );
};

interface PinPerspectiveProps {
  title?: string;
  href?: string;
  target?: "_blank" | "_self";
}

export const PinPerspective = ({
  title,
  href = "/",
  target = "_self",
}: PinPerspectiveProps) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <Link
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 hover:ring-white/20 transition-all"
          >
            <span className="relative z-20 text-white text-xs font-medium inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
          </Link>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "absolute right-1/2 bottom-1/2 translate-y-[14px]",
              i === 0 && "bg-gradient-to-b from-transparent to-cyan-500 w-px h-20 group-hover/pin:h-40 blur-[2px]",
              i === 1 && "bg-gradient-to-b from-transparent to-cyan-500 w-px h-20 group-hover/pin:h-40",
              i === 2 && "bg-cyan-600 translate-x-[1.5px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]",
              i === 3 && "bg-cyan-300 translate-x-[0.5px] w-[2px] h-[2px] rounded-full z-40"
            )}
          />
        ))}
      </div>
    </motion.div>
  );
};