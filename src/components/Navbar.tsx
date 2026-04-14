"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { toast } from "sonner";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add slight background to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    toast.success("Resume download started!");
    // In a real app, this would trigger an <a> download attribute or file save
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-16 flex justify-between items-center transition-all ${
      scrolled ? "bg-[#5A4FF3]/90 backdrop-blur-md shadow-lg" : "bg-transparent text-white"
    } text-white`}>
      <div className="text-2xl font-bold tracking-wide">Sumedh.</div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <Link href="#home" className="hover:text-accent transition-colors">Home</Link>
        <Link href="#about" className="hover:text-accent transition-colors">About</Link>
        <Link href="#services" className="hover:text-accent transition-colors">Skills</Link>
        <Link href="#portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
        <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
      </div>

      <div className="hidden md:block">
        <a href="/sumedh_resume.pdf" download="Sumedh_Chavan_Resume.pdf" onClick={handleDownload} className="inline-block bg-[#FFB200] hover:bg-[#e09d00] text-black font-semibold py-2.5 px-6 rounded-full transition-all shadow-md">
          Download CV
        </a>
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-white text-black p-6 rounded-2xl shadow-xl flex flex-col space-y-4 md:hidden text-center z-50">
          <Link href="#home" className="font-semibold" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="font-semibold" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#services" className="font-semibold" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="#portfolio" className="font-semibold" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="#contact" className="font-semibold" onClick={() => setIsOpen(false)}>Contact</Link>
          <a href="/sumedh_resume.pdf" download="Sumedh_Chavan_Resume.pdf" onClick={() => { handleDownload(); setIsOpen(false); }} className="block text-center bg-[#FFB200] hover:bg-[#e09d00] text-black font-semibold py-3 px-6 rounded-full w-full">
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
