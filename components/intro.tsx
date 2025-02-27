"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    console.log("Intro mounted, waiting 100ms for hydration...");
    const timer = setTimeout(() => {
      console.log("Hydration delay done, rendering!");
      setIsReady(true);
    }, 100);
    return () => {
      console.log("Intro unmounting");
      clearTimeout(timer);
    };
  }, []);

  const handleClick = (e: React.MouseEvent, target: string) => {
    console.log(`Button clicked: ${target}`);
    if (target === "contact") {
      e.preventDefault();
      setActiveSection("Contact");
      setTimeOfLastClick(Date.now());
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isReady) {
    console.log("Not ready yet, skipping render...");
    return null;
  }

  console.log("Rendering Intro...");
  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 max-w-[900px]">
        <motion.div
          className="space-y-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm uppercase tracking-[0.4em] text-neutral-600 dark:text-neutral-400 mb-6">
                Backend Engineer
              </h2>
            </motion.div>
            
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hello, I'm{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                Purushoth
              </span>
            </motion.h1>

            <motion.p
            className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building robust and scalable backend solutions with{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              hands-on experience
            </span> in FastAPI, cloud architectures, and AI-powered applications.
          </motion.p>

          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="#contact"
              onClick={(e) => handleClick(e, "contact")}
              className="group px-12 py-4 bg-neutral-900 dark:bg-white dark:text-neutral-900 text-white rounded-lg hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2"
            >
              Let's Connect
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="/CV.pdf"
              download
              onClick={(e) => handleClick(e, "download")}
              className="px-12 py-4 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2"
            >
              Resume <HiDownload className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6 pt-12 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: <BsLinkedin size={24} />, url: "https://www.linkedin.com/in/dl-purushoth-b2a5a52a7/" },
              { icon: <FaGithubSquare size={26} />, url: "https://github.com/purushothdl" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                onClick={(e) => handleClick(e, social.url.includes("linkedin") ? "linkedin" : "github")}
                className="w-16 h-16 bg-white dark:bg-neutral-800/50 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}