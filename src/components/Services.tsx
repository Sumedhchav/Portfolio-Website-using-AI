"use client";

import { PieChart, Database, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <FileSpreadsheet size={32} className="text-[#5A4FF3]" />,
    title: "MS Excel",
    description: "Advanced reporting, variance analysis, and complex dataset manipulation to generate actionable insights.",
    active: false,
  },
  {
    icon: <PieChart size={32} className="text-white" />,
    title: "Power BI",
    description: "Creating highly interactive dashboards, tracking reporting efficiency, and analyzing quarter-end business metrics.",
    active: true, // Center highlighted purple card
  },
  {
    icon: <Database size={32} className="text-[#5A4FF3]" />,
    title: "MySQL & Python",
    description: "Querying structured databases, transforming data pipelines, and reconciling datasets efficiently.",
    active: false,
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#F9FAFB] relative overflow-hidden" id="services">
      {/* Decorative dots top right */}
      <div className="absolute top-10 right-10 flex space-x-2">
        <div className="w-3 h-3 bg-[#5A4FF3]/20 rounded-full" />
        <div className="w-3 h-3 bg-[#5A4FF3]/40 rounded-full" />
        <div className="w-3 h-3 bg-[#5A4FF3]/60 rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-[#5A4FF3] font-bold tracking-wider text-sm mb-3 uppercase">Core Competencies</h4>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Analytical Skills! Let's check it out
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          I leverage industry-standard tools to organize data, identify crucial trends, and provide robust solutions that easily scale with business demands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-3xl transition-transform hover:-translate-y-2 cursor-pointer shadow-xl ${
                skill.active 
                ? "bg-[#5A4FF3] text-white" 
                : "bg-white text-gray-900 hover:shadow-2xl"
              }`}
            >
              <div className={`mb-6 p-4 rounded-xl inline-block ${
                skill.active ? "bg-white/20" : "bg-blue-50"
              }`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{skill.title}</h3>
              <p className={skill.active ? "text-white/80" : "text-gray-500"}>
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
