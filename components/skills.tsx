"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { skillsCategories } from "@/lib/skills";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-28 py-12 sm:py-16 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div ref={containerRef} className="max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12 sm:space-y-16 md:space-y-20"
        >
          {/* Header */}
          <div className="text-center space-y-4 sm:space-y-6">
            <SectionHeading>
              <span className="relative inline-block pb-3 tracking-tight text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
                Skills & Expertise
              </span>
            </SectionHeading>
            <motion.p
              variants={categoryVariants}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-light"
            >
              Leveraging cutting-edge technologies to build innovative solutions that make a difference
            </motion.p>
          </div>

          {/* Category Tabs */}
          <motion.div
            variants={categoryVariants}
            className="flex justify-center mb-12 sm:mb-16 overflow-x-auto pb-4 hide-scrollbar"
          >
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-1 rounded-lg sm:rounded-full bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50">
              {skillsCategories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap focus:outline-none select-none [-webkit-tap-highlight-color:transparent] ${
                    activeCategory === index
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="overflow-hidden">
            {skillsCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCategory === categoryIndex ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${
                  activeCategory === categoryIndex ? "block" : "hidden"
                }`}
              >
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1 * skillIndex,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="bg-transparent dark:bg-transparent backdrop-blur-xl border border-slate-350/50 dark:border-slate-600/50 rounded-2xl p-4 sm:p-6 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="p-2 sm:p-3 rounded-lg bg-transparent border-0 dark:border-0 dark:border-slate-300/50">
                          <Icon
                            className="text-xl sm:text-2xl"
                            style={{ color: getColorFromClass(skill.iconColor) }}
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl font-medium text-black dark:text-white">{skill.name}</h3>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// Helper functions
function getColorFromClass(colorClass: string) {
  const match = colorClass.match(/text-\[(#[0-9A-Fa-f]+)\]/);
  return match ? match[1] : "#6d28d9";
}

function getGradientFromClass(gradientClass: string) {
  const fromMatch = gradientClass.match(/from-\[(#[0-9A-Fa-f]+)\]/);
  const toMatch = gradientClass.match(/to-\[(#[0-9A-Fa-f]+)\]/);
  
  const fromColor = fromMatch ? fromMatch[1] : "#3b82f6";
  const toColor = toMatch ? toMatch[1] : "#8b5cf6";
  
  return `linear-gradient(to right, ${fromColor}, ${toColor})`;
}
