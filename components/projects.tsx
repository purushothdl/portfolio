"use client";

import React, { useRef, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/projects";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Project from "./project";
import { StaticImageData } from "next/image";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section 
      ref={ref} 
      id="projects" 
      className="scroll-mt-28 mb-28 sm:mb-0 py-6 sm:py-0 max-w-[70rem] mx-auto px-4 sm:px-6"
    >
      <div className="text-center mb-12 sm:mb-16">
        <SectionHeading>
          <span className="relative inline-block pb-3 tracking-tight text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Featured Projects
          </span>
        </SectionHeading>
        <motion.p
          className="text-neutral-600 dark:text-neutral-400 mt-4 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Showcasing my expertise in AI, backend development, and system design through real-world applications.
        </motion.p>
      </div>

      <div className="space-y-6 sm:space-y-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
          >
            <Project 
              {...project} 
              // Ensure imageUrl is treated as StaticImageData[]
              imageUrl={project.imageUrl as unknown as StaticImageData[]}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}