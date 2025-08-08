import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaRobot } from "react-icons/fa";


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
    title: "AI Engineer Intern",
    location: "StackGuard - India (Remote)",
    description: [
      "Led PoC development for 'Atlas,' an AI-powered system that autonomously detects exposed keys in code and raises GitHub PRs for safe remediation.",
      "Engineered dynamic LLM-based logic to accurately transform code across Python, Go, and JavaScript, externalizing secrets to config files.",
      "Optimized a Go-based scanning backend and Kafka messaging for enhanced performance, accelerating Git cloning and overall vulnerability detection throughput."
    ],
    icon: React.createElement(FaRobot), 
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
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2025 - Apr 2025", 
  }
] as const;