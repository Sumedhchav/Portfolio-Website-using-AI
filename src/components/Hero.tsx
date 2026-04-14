"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function Hero() {
  const handleWatchVideo = () => toast.success("Loading video presentation...");

  return (
    <section id="home" className="relative bg-[#5A4FF3] w-full min-h-[90vh] overflow-hidden flex items-center pt-24 pb-12">
      {/* Decorative background doodles */}
      <div className="absolute top-1/4 left-1/4 text-white/20">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 35.5C12 -3.5 37 -1 37.5 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div className="absolute top-20 right-1/4 text-white/20">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 15L15 2L28 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hello, I'm <br />
            Sumedh Chavan <br />
            A Data Analyst
          </h1>
          <p className="text-white/80 max-w-md text-lg leading-relaxed">
            I transform complex datasets into clear, actionable insights, supporting decision-making processes and improving reporting efficiency.
          </p>

          <div className="flex items-center space-x-6 pt-4 z-20 relative">
            <a href="#contact" className="inline-block bg-[#FFB200] hover:bg-[#e09d00] text-black font-semibold py-3 px-8 rounded-full transition-all shadow-xl">
              Hire Me
            </a>
            <button onClick={handleWatchVideo} className="flex items-center space-x-3 text-white hover:text-[#FFB200] transition-colors pr-6">
              <div className="bg-white/20 p-3 rounded-full flex items-center justify-center backdrop-blur-md">
                <Play size={20} fill="currentColor" />
              </div>
              <span className="font-medium underline underline-offset-4">Watch Video</span>
            </button>
            
            <a href="https://www.linkedin.com/in/sumedh-chavan-20b3912b4/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white hover:text-[#FFB200] transition-colors">
              <div className="bg-[#0A66C2] p-3 rounded-full flex items-center justify-center shadow-lg border border-white/20 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right Image Cutout Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-end"
        >
          {/* Yellow Abstract Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFB200] w-80 h-80 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 shadow-2xl skew-y-6" />

          {/* Masked Portrait Container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-[50%] overflow-hidden border-8 border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm">
            <Image 
              src="/sequence/frame_047_delay-0.067s.webp" 
              alt="Sumedh Chavan"
              fill
              className="object-cover object-center" 
              priority
            />
          </div>

          {/* Floating Elements relative to analyst */}
          <div className="absolute bottom-10 -right-6 bg-white p-3 rounded-xl shadow-xl flex flex-col items-center bounce-animation">
             <span className="text-xs text-gray-500 font-semibold mb-1">Power BI Pro</span>
             <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#FFB200]" />
             </div>
          </div>
          
          <div className="absolute top-20 -right-12 bg-white px-4 py-2 rounded-xl shadow-xl flex items-center space-x-2 text-sm font-semibold text-gray-800 bounce-animation-delay">
            <span className="text-[#5A4FF3] text-lg">📊</span> <span>Data Accuracy</span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
