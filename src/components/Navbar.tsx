'use client'
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-20 p-2 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="w-[90%] mx-auto p-4 flex items-center justify-between">
          <div className="text-zinc-800">
            <Link href={'/'}>
              <Image 
                src={"/logo.png"} 
                alt="logo-image" 
                height={300} 
                width={300} 
                className="h-10 w-auto md:h-12" 
              />
            </Link>
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
            className="md:hidden text-white focus:outline-none relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={28} className="text-white transition-transform duration-300" />
            ) : (
              <Menu size={28} className="text-white transition-transform duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 to-gray-800 z-40 transform transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden shadow-2xl border-l border-gray-700`}>
        <div className="absolute top-0 left-0 w-full h-24 flex items-center px-6">
          <Image 
            src={"/logo.png"} 
            alt="logo-image" 
            height={300} 
            width={300} 
            className="h-10 w-auto" 
          />
        </div>
        
        <div className="flex flex-col p-6 space-y-8 mt-32">
          {[
            { href: "/", label: "Home" },
            { href: "/Services", label: "Services" },
            { href: "/About", label: "About" },
            { href: "/Contact", label: "Contact" }
          ].map((item, index) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="group"
            >
              <div className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <h1 className="text-white font-medium text-xl hover:text-primary transition-colors">
                  {item.label}
                </h1>
                <span className="ml-auto text-gray-500 group-hover:text-white transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="h-px bg-gray-700 mt-2 w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Coolpix
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/70 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;