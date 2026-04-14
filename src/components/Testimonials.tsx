"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const skills = [
  {
    title: "Complex Problem Solver",
    review: "I excel at analyzing complex challenges efficiently, breaking down large datasets to find the core discrepancies.",
    role: "Analytical Focus",
  },
  {
    title: "Team Collaborator",
    review: "A firm believer in effective collaboration to drive team success. I align cross-functional goals with reporting standards.",
    role: "Communication",
  },
  {
    title: "Dynamic Adaptability",
    review: "Able to adapt seamlessly to dynamic environments and rapidly shifting enterprise requirements and priority changes.",
    role: "Flexibility",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#F9FAFB] relative">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-16">
            <h4 className="text-[#5A4FF3] font-bold tracking-wider text-sm mb-3 uppercase">Behavioral Skills</h4>
            <h2 className="text-4xl font-bold text-gray-900">
               How I Approach Work
            </h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#FFB200] fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed italic">
                  "{skill.review}"
                </p>
                <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                  <div className="w-12 h-12 rounded-full bg-[#5A4FF3]/10 flex items-center justify-center text-[#5A4FF3] font-bold">
                    {skill.title.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{skill.title}</h4>
                    <p className="text-sm text-gray-500">{skill.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
