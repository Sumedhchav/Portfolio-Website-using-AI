"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3, Database, FileSpreadsheet } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Quarter-End Variance Analysis",
    category: "Reports",
    image: "/images/ui_showcase_1.png", 
    link: "#",
  },
  {
    title: "SQL Data Reconciliation",
    category: "Pipelines",
    isAbstract: true,
    icon: <Database size={48} className="text-[#FFB200]" />,
    link: "#",
  },
  {
    title: "Executive KPIs Dashboard",
    category: "Dashboards",
    isAbstract: true,
    icon: <BarChart3 size={48} className="text-[#5A4FF3]" />,
    link: "#",
  },
  {
    title: "Excel Automated Workbooks",
    category: "Reports",
    isAbstract: true,
    icon: <FileSpreadsheet size={48} className="text-green-500" />,
    link: "#",
  }
];

export default function Showcase() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Reports", "Dashboards", "Pipelines"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-6 md:px-16 bg-white relative">
      <div className="max-w-7xl mx-auto text-center">
         <h4 className="text-[#5A4FF3] font-bold tracking-wider text-sm mb-3 uppercase">Portfolio</h4>
         <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Data Product Showcases
         </h2>

         {/* Interactive Filter Tabs */}
         <div className="flex justify-center space-x-4 mb-16 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium shadow-sm transition-colors ${
                  filter === cat 
                  ? "bg-[#5A4FF3] text-white shadow-md" 
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
         </div>

         {/* Filtered Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={`${project.title}-${filter}`} // Force re-animation on filter change
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg bg-[#F9FAFB] border border-gray-100 hover:shadow-2xl transition-all h-80 flex flex-col cursor-pointer"
              >
                {!project.isAbstract && project.image ? (
                  <div className="relative w-full h-48 bg-gray-200">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="relative w-full h-48 bg-white flex items-center justify-center border-b border-gray-100 group-hover:bg-blue-50 transition-colors">
                    <div className="p-6 bg-gray-50 rounded-full shadow-inner">
                      {project.icon}
                    </div>
                  </div>
                )}
                
                <div className="p-6 text-left flex-1 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#5A4FF3] transition-colors">{project.title}</h3>
                  <p className="text-sm font-medium text-[#FFB200]">{project.category}</p>
                </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
}
