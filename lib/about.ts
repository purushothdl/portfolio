import React from "react";
import { IconType } from "react-icons";
import { HiCode } from "react-icons/hi";
import { FaServer, FaDatabase } from "react-icons/fa";
import { SiPython, SiFlutter, SiScikitlearn } from "react-icons/si";

interface AboutContent {
  mainDescription: {
    primary: string;
    experience: string;
    currentFocus: string;
  };
  paragraphs: Array<{
    title: string;
    content: string;
  }>;
}

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const aboutContent: AboutContent = {
  mainDescription: {
    primary: "Backend Engineer specializing in FastAPI, cloud architectures, and AI-powered applications",
    experience: "Hands-on experience building full-stack applications with FastAPI and Flutter",
    currentFocus: "Mastering backend scalability, security, and real-time systems while exploring AI integrations",
  },
  
    paragraphs: [
      {
        title: "Technical Expertise",
        content:
          "Experienced in building scalable backend systems using FastAPI, MongoDB, and cloud-native architectures. Proficient in developing high-performance APIs, implementing microservices, and optimizing databases for efficiency and reliability.",
      },
      {
        title: "Current Learning Path",
        content:
          "Expanding knowledge in AI and machine learning while improving backend scalability, caching strategies, and security best practices. Also refining mobile development skills with Flutter to build cross-platform applications.",
      },
    ],
  };

// The issue is that the className styling is overriding the icon's default colors
export const skills: Skill[] = [
  {
    icon: React.createElement(SiPython, { 
      size: 36,
      style: { color: '#3776AB' }, // Python blue
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "Python Backend",
    description: "FastAPI & Django REST",
  },
  {
    icon: React.createElement(FaServer, { 
      size: 36,
      style: { color: '#38B2AC' }, // Teal
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "Microservices",
    description: "Distributed Systems",
  },
  {
    icon: React.createElement(FaDatabase, { 
      size: 36,
      style: { color: '#8B5CF6' }, // Purple
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "Database Design",
    description: "Performance Optimization",
  },
  {
    icon: React.createElement(SiFlutter, { 
      size: 36,
      style: { color: '#02569B' }, // Flutter blue
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "Flutter",
    description: "Cross-platform Apps",
  },
  {
    icon: React.createElement(SiScikitlearn, { 
      size: 36,
      style: { color: '#F97316' }, // Orange
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "Machine Learning",
    description: "Scikit-learn & ML Ops",
  },
  {
    icon: React.createElement(HiCode, { 
      size: 36,
      style: { color: '#6366F1' }, // Indigo
      className: "group-hover:scale-110 transition-transform" 
    }),
    title: "System Design",
    description: "Scalable Architecture",
  },
];