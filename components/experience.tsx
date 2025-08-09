"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-0 w-72 h-72 bg-purple-100 dark:bg-purple-950/20 rounded-full mix-blend-multiply blur-3xl opacity-30" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 dark:bg-blue-950/20 rounded-full mix-blend-multiply blur-3xl opacity-30" />
        </div>

        {/* Enhanced heading */}
        <div className="text-center mb-16">
          <SectionHeading>
            <span className="relative inline-block">
              Professional Journey
            </span>
          </SectionHeading>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            A timeline of my professional experience and key milestones
          </motion.p>
        </div>

        <VerticalTimeline lineColor={theme === "light" ? "#E5E7EB" : "#1F2937"}>
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" 
                      ? "rgba(255, 255, 255, 0.95)" 
                      : "rgba(17, 24, 39, 0.8)",
                  boxShadow: theme === "light"
                    ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
                    : "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
                  border: theme === "light"
                    ? "1px solid rgba(0, 0, 0, 0.05)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  textAlign: "left",
                  padding: "1.5rem 2rem",
                  borderRadius: "1rem",
                  backdropFilter: "blur(10px)",
                }}
                contentArrowStyle={{
                  borderRight: theme === "light"
                    ? "0.4rem solid #E5E7EB"
                    : "0.4rem solid #374151",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === "light"
                    ? "white"
                    : "rgba(17, 24, 39, 0.8)",
                  display: "flex", // Added to center the image
                  justifyContent: "center", // Added to center the image
                  alignItems: "center", // Added to center the image
                  boxShadow: theme === "light"
                    ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
                    : "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
                }}
              >
                <div className="relative">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-medium text-gray-500 dark:text-gray-400 mb-3">
                    {item.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {item.description}
                  </p>
                  
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
