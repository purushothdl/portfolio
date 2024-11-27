"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As an experienced <span className="font-medium">AI Software Engineer</span>, I specialize in <span className="font-medium">LLMs</span>, <span className="font-medium">computer vision</span>, and <span className="font-medium">document analytics</span>. My work at <span className="font-medium">Staple AI</span> and <span className="font-medium">Dotnitron Technologies</span> focused on building scalable AI solutions and optimizing large-scale data workflows. Skilled in tools like <span className="font-medium">TensorFlow, FastAPI, LangChain</span>, and <span className="font-medium">OpenAI APIs</span>, I enjoy solving challenging problems and delivering impactful results. I’ve excelled in over <span className="font-medium">30 hackathons</span>, showcasing my ability to innovate under pressure.
      </p>
      <p>
        <span className="italic">Beyond work</span>, I’m passionate about <span className="font-medium">swimming</span>, which keeps me refreshed, and <span className="font-medium">flying drones</span>, capturing unique perspectives. I’ve also worked as a <span className="font-medium">Tech Instructor</span>, mentoring students in areas like AI, machine learning, and software engineering. I constantly explore <span className="font-medium">new technologies</span> to stay ahead in this ever-evolving field, driven by a love for innovation and problem-solving.
      </p>

    </motion.section>
  );
}
