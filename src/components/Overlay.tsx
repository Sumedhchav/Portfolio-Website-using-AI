"use client";

import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10 flex flex-col justify-between">
      
      {/* Section 1 - 0% */}
      <section className="h-screen w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-2xl">
            My Name.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-zinc-300 tracking-wide uppercase drop-shadow-md">
            Creative Developer.
          </p>
        </motion.div>
      </section>

      {/* Section 2 - 30ish% */}
      <section className="h-screen w-full flex items-center justify-start px-12 md:px-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-left max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-2xl">
            I build digital experiences.
          </h2>
        </motion.div>
      </section>

      {/* Section 3 - 60ish% */}
      <section className="h-screen w-full flex items-center justify-end px-12 md:px-32">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-right max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight text-white drop-shadow-2xl">
            Bridging design and engineering.
          </h2>
        </motion.div>
      </section>

      {/* Spacer for the rest of the 500vh */}
      <div className="h-[200vh]"></div>

    </div>
  );
}
