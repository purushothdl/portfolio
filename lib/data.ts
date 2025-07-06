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
    location: "Dotnitron Technologies - India (Remote)", 
    description: [
      "Owned the development of a Python library to classify and sanitize user queries, ensuring safe interactions within production RAG pipelines.",
      "Developed key components for autonomous financial agents using agentic frameworks to automate complex due diligence research.",
      "Engineered an asynchronous task system with Celery and cron to manage the data lifecycle, automating file and chat deletion policies."
    ],
    icon: React.createElement(FaRobot), 
    date: "Mar 2025 - May 2025", 
  },
  {
    title: "Backend Developer Intern",
    location: "AIOverflow - India (Remote)",
    description: [ 
      "Developed and deployed a full-stack gym management app ('Level Up') from concept to production using FastAPI and Flutter.",
      "Architected the RESTful API and backend system, implementing secure JWT authentication and robust data models in MongoDB.",
      "Containerized the application with Docker and managed deployments to cloud infrastructure (AWS ECS/ECR), gaining production DevOps experience.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Dec 2024", 
  }
] as const;