import React from "react";
import { FaServer, FaDatabase, FaRobot, FaShieldAlt } from "react-icons/fa";

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

export const aboutContent = {
  mainDescription: {
    primary: "I'm a Backend & AI Engineer who builds intelligent, scalable, and secure systems. I specialize in creating robust applications using Python and Go, integrating advanced AI for automation, and designing modern cloud architectures.",
  },
};

export const skills = [ // The 3 main skill cards on the About page
  {
    icon: React.createElement(FaServer, { 
      style: { color: '#14B8A6' },
      className: "w-full h-full group-hover:scale-110 transition-transform"
    }),
    title: "Backend Engineering",
    description: "Architecting high-performance, asynchronous APIs with FastAPI and Go, and designing scalable, containerized systems for cloud deployment.",
  },
  {
    icon: React.createElement(FaRobot, { 
      style: { color: '#A855F7' },
      className: "w-full h-full group-hover:scale-110 transition-transform"
    }),
    title: "AI Agent & Automation Development",
    description: "Developing intelligent, stateful agents using LangGraph to automate complex tasks, from calendar scheduling to security remediation.",
  },
  {
    icon: React.createElement(FaShieldAlt, { // New icon for Security
      style: { color: '#3B82F6' },
      className: "w-full h-full group-hover:scale-110 transition-transform"
    }),
    title: "Secure & Distributed Systems",
    description: "Designing efficient data models and engineering distributed systems with tools like Kafka, focusing on data integrity, performance, and security.",
  },
];