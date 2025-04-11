
'use client'
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/5" : ""}`}>
      <div className={`w-[90%] mx-auto p-10 border-2 border-white/10 text-white rounded-lg flex items-center justify-between ${isScrolled ? "border-white/20" : ""}`}>
        <div className="text-zinc-800">
          <Image src={"/logo.png"} alt="logo-image" height={100} width={100} />
        </div>
        <div className="items-center gap-5 justify-evenly hidden md:flex">
          <Link href={"/"}>
            <h1 className="text-white font-mono text-xl hover:text-primary transition-colors">Home</h1>
          </Link>

          <div>
            <Select>
              <SelectTrigger className="w-[180px] bg-transparent">
                <SelectValue placeholder="Services" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-700">
                <SelectItem value="light">Background Change</SelectItem>
                <SelectItem value="dark">Retouching Model</SelectItem>
                <SelectItem value="system">Ghost Editing</SelectItem>
                <SelectItem value="system">Color Correction</SelectItem>
                <SelectItem value="dark">Shadow Creation</SelectItem>
                <SelectItem value="system">Background cleaning</SelectItem>
                <SelectItem value="system">Product dusting</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Link href={'/about'}><h1 className="text-white font-mono text-xl hover:text-primary transition-colors">About</h1></Link>
          <Link href={'/contact'}><h1 className="text-white font-mono text-xl hover:text-primary transition-colors">Contact</h1></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;