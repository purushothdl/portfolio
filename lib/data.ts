import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaRobot } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import Image from "next/image"; // Import Image from next/image


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const experiencesData = [
  {
    title: "Junior Software Developer",
    location: "Rainbow Labs - UK (Remote)",
    description: [
      "Developing AI integrations for healthcare systems, improving patient data processing and analysis efficiency.",
      "Building backend systems for AI agents using LangGraph framework to enable complex decision-making workflows.",
      "Implementing secure data pipelines and APIs to connect AI models with healthcare applications."
    ],
    icon: React.createElement(Image, {
      src: "/work-icons/rainbow-labs.png",
      alt: "Healthcare AI logo",
      width: 48,
      height: 48,
      quality: 95,
      className: "object-contain rounded-full"
    }),
    date: "Aug 2025 - Present",
  },
  {
    title: "Full-Stack Engineer Intern",
    location: "StackGuard - India (Remote)",
    description: [
      "Led PoC development for 'Atlas,' an AI-powered system that autonomously detects exposed keys in code and raises GitHub PRs for safe remediation.",
      "Engineered dynamic LLM-based logic to accurately transform code across Python, Go, and JavaScript, externalizing secrets to config files.",
      "Optimized a Go-based scanning backend and Kafka messaging for enhanced performance, accelerating Git cloning and overall vulnerability detection throughput."
    ],
    icon: React.createElement(Image, {
      src: "/work-icons/stackguard.png",
      alt: "StackGuard logo",
      width: 48, 
      height: 48, 
      quality: 95,
      className: "object-contain rounded-full"
    }),
    date: "Jul 2025 - Present", 
  },
  {
    title: "AI Engineer Intern",
    location: "Dotnitron Technologies - India (Remote)",
    description: [
      "Developed a Python library to classify and sanitize user queries, ensuring secure interactions within production RAG pipelines.",
      "Built core components for autonomous financial agents using agentic frameworks to automate complex financial due diligence processes.",
      "Engineered a Celery-based system with cron jobs to automate data lifecycle management and cleanup operations."
    ],
    icon: React.createElement(Image, {
      src: "/work-icons/dotnitron.png",
      alt: "Dotnitron Technologies logo",
      width: 48,
      height: 48,
      quality: 95,
      className: "object-contain rounded-full"
    }),
    date: "Mar 2025 - Apr 2025", 
  }
] as const;