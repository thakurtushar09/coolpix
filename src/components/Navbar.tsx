'use client'
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="m-2  p-2 left-0 right-0 z-50 bg-transparent border rounded-lg border-gray-700">
        <div className="w-[90%] mx-auto p-4 md:p-6 flex items-center justify-between">
          <div className="text-zinc-800">
            <Image 
              src={"/logo.png"} 
              alt="logo-image" 
              height={500} 
              width={500} 
              className="h-10 w-auto md:h-12" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="items-center gap-5 justify-evenly hidden md:flex">
            <Link href={"/"}>
              <h1 className="text-white font-medium text-lg hover:text-primary transition-colors">Home</h1>
            </Link>


            <Link href={'/Services'}>
              <h1 className="text-white font-medium text-lg hover:text-primary transition-colors">Services</h1>
            </Link>

            

            <Link href={'/About'}>
              <h1 className="text-white font-medium text-lg hover:text-primary transition-colors">About</h1>
            </Link>
            <Link href={'/Contact'}>
              <h1 className="text-white font-medium text-lg hover:text-primary transition-colors">Contact</h1>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col p-6 space-y-6 mt-20">
          <Link href={"/"} onClick={() => setIsMobileMenuOpen(false)}>
            <h1 className="text-white font-medium text-lg hover:text-primary transition-colors">Home</h1>
          </Link>

          <Link href={'/Services'} onClick={() => setIsMobileMenuOpen(false)}>
            <h1 className="text-white font-medium text-lg hover:text-primary transition-colors">Services</h1>
          </Link>

          

          <Link href={'/About'} onClick={() => setIsMobileMenuOpen(false)}>
            <h1 className="text-white font-medium text-lg hover:text-primary transition-colors">About</h1>
          </Link>

          <Link href={'/Contact'} onClick={() => setIsMobileMenuOpen(false)}>
            <h1 className="text-white font-medium text-lg hover:text-primary transition-colors">Contact</h1>
          </Link>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;