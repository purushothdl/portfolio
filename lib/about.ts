import React from "react";
import { IconType } from "react-icons";
import { HiCode } from "react-icons/hi";
import { FaServer, FaDatabase } from "react-icons/fa";
import { SiPython, SiFlutter, SiMongodb } from "react-icons/si";

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
    primary: "Backend Engineer specializing in FastAPI, cloud architectures, and AI-powered applications",
  },
};

// The issue is that the className styling is overriding the icon's default colors
export const skills: Skill[] = [
  {
    icon: React.createElement(SiPython, { 
      size: 36,
      style: { color: '#3776AB' }, // Python blue
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "Python Backend Development",
    description: "Building high-performance microservices with FastAPI and scalable systems using Docker, AWS, and Render.",
  },
  {
    icon: React.createElement(SiFlutter, { 
      size: 36,
      style: { color: '#02569B' }, // Flutter blue
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "Cross-Platform Development",
    description: "Creating seamless user experiences across web and mobile platforms using Flutter and React.",
  },
  {
    icon: React.createElement(SiMongodb, { 
      size: 36,
      style: { color: '#47A248' }, // MongoDB green
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "Database Design",
    description: "Designing and optimizing databases for high performance with PostgreSQL and MongoDB.",
  },
];
