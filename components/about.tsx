"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { skills, aboutContent } from "@/lib/about";

export default function About() {
  const { ref } = useSectionInView("About", 0.2);

  return (
    <section
      ref={ref}
      id="about"
      className="py-28 px-4 max-w-5xl mx-auto"
    >
      <motion.div
        className="space-y-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SectionHeading>About Me</SectionHeading>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {aboutContent.mainDescription.primary}
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group p-6 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-2 rounded-lg bg-transparent">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
                  {skill.title}
                </h3>
                <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}