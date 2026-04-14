import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Interactive WebGL Experience",
      description: "A 3D product showcase using Three.js and React Three Fiber.",
      tags: ["WebGL", "Three.js", "Next.js"],
      link: "#",
    },
    {
      title: "Fintech Dashboard UI",
      description: "Real-time trading interface with complex data visualizations.",
      tags: ["React", "D3.js", "Tailwind"],
      link: "#",
    },
    {
      title: "E-Commerce Re-platforming",
      description: "Headless Shopify migration resulting in a 40% performance boost.",
      tags: ["Shopify", "GraphQL", "Vercel"],
      link: "#",
    },
    {
      title: "Agency Portfolio",
      description: "Award-winning creative agency site with custom GSAP animations.",
      tags: ["GSAP", "Lenis", "Nuxt"],
      link: "#",
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Selected Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="group relative flex flex-col justify-between p-8 md:p-12 h-80 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:border-white/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-300 bg-white/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="p-3 rounded-full bg-white text-black opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h4 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-zinc-400 max-w-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
