"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function AboutMe() {
  const handleDownload = () => toast.success("Resume downloaded successfully!");

  const highlightPoints = [
    "Detail-oriented reporting & analysis",
    "Hands-on with variance reconciliation",
    "Expertise in analytical tools (Python, MySQL)",
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
      {/* Background topography or subtle patterns could go here */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Circular Portrait & Badges */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center aspect-square md:aspect-auto"
        >
          {/* Decorative rings / arcs matching reference */}
          <svg className="absolute w-full h-full -top-4 -left-4 text-[#5A4FF3] -z-10 animate-spin-slow opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
          </svg>
          
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-[#F9FAFB] shadow-xl z-10">
             {/* Placeholder while awaiting actual photo placement */}
             <Image 
                src="/sequence/frame_047_delay-0.067s.webp" 
                alt="Sumedh Chavan"
                fill
                className="object-cover object-center"
             />
          </div>

          <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-3 flex -z-0 bounce-animation text-xl">
             💡
          </div>
          <div className="absolute bottom-10 right-0 bg-[#FFB200] shadow-xl rounded-xl p-3 flex z-20 bounce-animation-delay">
             <div className="text-black font-bold">100% Data Accuracy</div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 z-10"
        >
          <h4 className="text-[#5A4FF3] font-bold tracking-wider text-sm uppercase">About Me</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Designing Solutions, Not Just Visuals
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I am a detail-oriented data analyst with hands-on experience in data reporting, quarter-end analysis, variance analysis, and data reconciliation. I ensure accurate and timely insights aligned with business standards.
          </p>
          
          <div className="space-y-4 pt-4">
            {highlightPoints.map((point, i) => (
              <div key={i} className="flex items-center space-x-3 bg-[#F9FAFB] p-4 rounded-xl border border-gray-100">
                <CheckCircle2 className="text-[#FFB200]" size={24} />
                <span className="font-semibold text-gray-800">{point}</span>
              </div>
            ))}
          </div>

          <div className="pt-6">
             <a href="/sumedh_resume.pdf" download="Sumedh_Chavan_Resume.pdf" onClick={handleDownload} className="inline-block bg-[#FFB200] hover:bg-[#e09d00] text-black font-semibold py-3 px-8 rounded-full transition-all shadow-md">
               Download CV
             </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
