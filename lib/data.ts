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
    title: "Backend Developer Intern",
    location: "AIOverflow - India (Remote)",
    description:
      "Developed and deployed a full-stack gym management app, Level Up, using FastAPI and Flutter. Designed and implemented core backend functionalities, including JWT authentication, MongoDB data storage, and Firebase integrations for media handling. Optimized real-time user interactions and analytics for tracking workouts, diet plans, and weight progress. Gained hands-on experience with GraphRAG, RAG, OpenCV (YOLO-based object detection), and DevOps tools like Docker, AWS ECS/ECR, and Google Cloud APIs. Explored AI-driven applications by integrating LLMs for intelligent user interactions and automation.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2024 - Dec 2024",
  }
] as const;



// export const skillsData = [
//   "C++",
//   "Python",
//   "Go",
//   "SQL",
//   "No-SQL",
//   "AI",
//   "Machine Learning (ML)",
//   "Natural Language Processing (NLP)",
//   "Computer Vision",
//   "Deep Learning",
//   "FastAPI",
//   "MongoDB",
//   "ElasticSearch",
//   "ArangoDB",
//   "OCR",
//   "NER",
//   "YOLO",
//   "AWS",
//   "Kubernetes",
//   "Distributed Architecture",
//   "Linear Support Vector Machine",
//   "Neural Networks",
//   "Geometric Math Analysis",
//   "Deep Vision",
//   "Render (Cloud Services)",
//   "Keras",
//   "TensorFlow",
//   "LangChain",
//   "Large Language Models (LLMs: GPT, PaLM, LLama, etc.)",
// ] as const;
