"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] text-white pt-24 pb-10 px-6 md:px-16 border-t-4 border-[#5A4FF3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

        {/* Brand & Bio */}
        <div className="md:col-span-2 space-y-6 lg:pr-12">
          <div className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-[#FFB200]">
            Sumedh Chavan.
          </div>
          <p className="text-gray-400 max-w-sm leading-relaxed text-sm md:text-base">
            A detail-oriented Data Analyst focused on technical variance analysis, comprehensive data reporting, and delivering actionable
            decision-making insights. Currently exploring modern solutions to complex enterprise challenges.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="https://www.linkedin.com/in/sumedh-chavan-20b3912b4/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-colors shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* Note: Update href with your actual github if desired */}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/5 flex items-center justify-center hover:bg-gray-600 hover:border-gray-500 transition-colors shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold tracking-wide text-gray-100 border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm md:text-base font-medium">
            <li><a href="#about" className="hover:text-[#FFB200] transition-colors flex items-center space-x-2"><span className="text-[#5A4FF3]">›</span> <span>About Me</span></a></li>
            <li><a href="#services" className="hover:text-[#FFB200] transition-colors flex items-center space-x-2"><span className="text-[#5A4FF3]">›</span> <span>Core Competencies</span></a></li>
            <li><a href="#portfolio" className="hover:text-[#FFB200] transition-colors flex items-center space-x-2"><span className="text-[#5A4FF3]">›</span> <span>Project Portfolio</span></a></li>
            <li><a href="/sumedh_resume.pdf" download="Sumedh_Chavan_Resume.pdf" className="hover:text-[#FFB200] transition-colors flex items-center space-x-2"><span className="text-[#5A4FF3]">›</span> <span>Download Resume</span></a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold tracking-wide text-gray-100 border-b border-gray-800 pb-2 inline-block">Connect</h4>
          <ul className="space-y-4 text-gray-400 text-sm md:text-base">
            <li>
              <a href="mailto:sumedhchavan123@gmail.com" className="group flex items-center space-x-3 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-[#FFB200]/20 transition-colors">
                  <Mail size={16} className="text-gray-300 group-hover:text-[#FFB200] transition-colors" />
                </div>
                <span>sumedhchavan123@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+917709688409" className="group flex items-center space-x-3 hover:text-white transition-colors">
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-[#FFB200]/20 transition-colors">
                  <Phone size={16} className="text-gray-300 group-hover:text-[#FFB200] transition-colors" />
                </div>
                <span>+91 7709688409</span>
              </a>
            </li>
            <li>
              <div className="group flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gray-800/50">
                  <MapPin size={16} className="text-gray-300" />
                </div>
                <span>Virar (W) – 401303, India</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Sumedh Chavan. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
