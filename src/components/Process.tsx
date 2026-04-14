"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const processSteps = [
  {
    icon: <GraduationCap size={28} className="text-[#5A4FF3]" />,
    title: "B.E. Degree",
    description: "Viva Institute of Technology, Mumbai (2021-2025). Graduated with a 6.39 CGPI.",
  },
  {
    icon: <Award size={28} className="text-[#5A4FF3]" />,
    title: "Infosys & Deloitte",
    description: "Earned certifications in Data Analytics and Job Simulation (2024-2026).",
  },
  {
    icon: <BookOpen size={28} className="text-[#5A4FF3]" />,
    title: "Barti Certification",
    description: "Currently pursuing Applied Data Science and Analytics.",
  }
];

export default function Process() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h4 className="text-[#5A4FF3] font-bold tracking-wider text-sm mb-3 uppercase">Timeline</h4>
        <h2 className="text-4xl font-bold text-gray-900 mb-16">
          Education & Certifications
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
          
          {/* Subtle dotted connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] border-t-2 border-dashed border-[#FFB200]/50 z-[-1]"></div>

          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center max-w-xs text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[#F9FAFB] shadow-xl flex items-center justify-center mb-6 border-4 border-white relative">
                 {step.icon}
                 {idx < 2 && (
                   <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 w-[2px] h-8 border-l-2 border-dashed border-[#FFB200]/50" />
                 )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
