import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hair from "@/public/hair.png";
import eduaid from "@/public/eduaid.png";
import karma from "@/public/karma.png";

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
    title: "AI Software Engineer",
    location: "Staple IO - Singapore (Remote)",
    description:
      "Enhanced document analytics with machine learning and LLMs. Implemented computer vision for detecting document elements and managed 100k+ documents monthly for major clients like P&G and EY. Integrated DevOps with Kubernetes, AWS, and LangChain.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    title: "AI Software Engineer",
    location: "Dotnitron Technologies - United States (Remote)",
    description:
      "Architected Retrieval-Augmented Generative Models (RAGs) for Diligence GPT. Led backend development with Python, Django, and FastAPI, delivering solutions with LangChain, OpenAI, and prompt engineering.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - May 2024",
  },
  {
    title: "Data Science Engineer Intern",
    location: "Bajaj Finserv Health - Pune, India (On-site)",
    description:
      "Built lab test recommendation systems, boosting efficiency by 30%. Applied LLMs, OCR, and YOLO for image analytics, and improved ElasticSearch and SQL retrieval speeds by 80%.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Jul 2023",
  },
] as const;

export const projectsData = [
  {
    title: "eduAId - Instructor Analytics Platform",
    description:
      "Built an analytics platform for instructors with 90% accuracy, integrating LangChain agents and Google Vision Pro for digitizing handwritten notes.",
    tags: ["LangChain", "Python", "Google Vision Pro", "FastAPI"],
    imageUrl: eduaid, // Replace with relevant image URL
  },
  {
    title: "KaRmA - KRA-AI-Manager",
    description:
      "Developed a chatbot and report generator using advanced LLMs and LangChain integrated with SQL databases.",
    tags: ["LangChain", "SQL", "Mistral 7B", "LLama"],
    imageUrl: karma, // Replace with relevant image URL
  },
  {
    title: "hAIr (AI in HR)",
    description:
      "Automated hiring with AI for parsing resumes, ranking candidates, and generating customized assessments.",
    tags: ["Python", "LangChain", "OpenAI", "Computer Vision"],
    imageUrl: hair, // Replace with relevant image URL
  },
] as const;


export const skillsData = [
  "C++",
  "Python",
  "Go",
  "SQL",
  "No-SQL",
  "AI",
  "Machine Learning (ML)",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "Deep Learning",
  "FastAPI",
  "MongoDB",
  "ElasticSearch",
  "ArangoDB",
  "OCR",
  "NER",
  "YOLO",
  "AWS",
  "Kubernetes",
  "Distributed Architecture",
  "Linear Support Vector Machine",
  "Neural Networks",
  "Geometric Math Analysis",
  "Deep Vision",
  "Render (Cloud Services)",
  "Keras",
  "TensorFlow",
  "LangChain",
  "Large Language Models (LLMs: GPT, PaLM, LLama, etc.)",
] as const;
