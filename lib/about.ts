import React from "react";
import { FaServer, FaDatabase, FaRobot } from "react-icons/fa";

interface AboutContent {
  mainDescription: {
    primary: string;
  };
}

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const aboutContent: AboutContent = {
  mainDescription: {
    primary: "I'm a Backend Engineer who builds intelligent, scalable systems. I specialize in creating robust, AI-powered applications using Python, FastAPI, and modern cloud architectures.",
  },
};

// AFTER
export const skills: Skill[] = [
  {
    icon: React.createElement(FaServer, { 
      // size: 36, // <-- REMOVED
      style: { color: '#14B8A6' },
      className: "w-full h-full group-hover:scale-110 transition-transform" // <-- ADDED w-full h-full
    }),
    title: "Python Backend Engineering",
    description: "Architecting high-performance, asynchronous APIs with FastAPI and designing scalable, containerized systems for cloud deployment on AWS and Render.",
  },
  {
    icon: React.createElement(FaRobot, { 
      style: { color: '#A855F7' },
      className: "w-full h-full group-hover:scale-110 transition-transform" 
    }),
    title: "AI & LLM Integration",
    description: "Developing intelligent, stateful agents using LangGraph and LangChain. Expert at connecting LLMs to custom tools and external APIs to create autonomous systems.",
  },
  {
    icon: React.createElement(FaDatabase, { 
      style: { color: '#3B82F6' },
      className: "w-full h-full group-hover:scale-110 transition-transform" 
    }),
    title: "Database Architecture",
    description: "Designing efficient data models for both SQL (PostgreSQL) and NoSQL (MongoDB), with a focus on data integrity, performance, and decoupled services.",
  },
];