"use client";

import { SiPython, SiFastapi, SiFlutter, SiMongodb, SiGooglecloud, SiFirebase, SiGooglemaps, SiGoogle, SiReact, SiTailwindcss } from "react-icons/si";
import { FaDumbbell, FaRobot, FaRecycle } from "react-icons/fa";

export const projectsData = [
  {
    title: "Singularity Labs: Orion Agent",
    subtitle: "Conversational AI Scheduling Agent",
    description: "An intelligent agent that autonomously books Google Calendar appointments through natural, human-like conversation.",
    longDescription: "Engineered a stateful AI agent using LangGraph for reliable, cyclic reasoning. The system features a suite of tools for real-time calendar checks, automatic timezone handling, and direct Google Calendar booking. Its core architecture is built for production, with a sophisticated concurrency model to prevent race conditions and double-bookings. The backend uses a decoupled, service-oriented pattern for maximum scalability and testability.",
    tags: ["AI Agent", "System Design", "Concurrency", "Google API"],
    imageUrl: [
      "/project-images/singularity-labs/register_page.png", 
      "/project-images/singularity-labs/login_page.png",
      "/project-images/singularity-labs/welcome_screen.png",
      "/project-images/singularity-labs/update_profile.png",
      "/project-images/singularity-labs/slot_searching.png",
      "/project-images/singularity-labs/confirm.png",
      "/project-images/singularity-labs/booked.png",
      "/project-images/singularity-labs/calendar.png", 
    ],
    icons: [
      { icon: <FaRobot className="text-purple-500" />, name: "LangGraph", color: "#A855F7" },
      { icon: <SiFastapi className="text-teal-500" />, name: "FastAPI", color: "#16A34A" },
      { icon: <SiReact className="text-blue-400" />, name: "React", color: "#38BDF8" },
    ],
    githubLink: "https://github.com/purushothdl/booking-agent-proto", 
    demoLink: "YOUR_NEW_VIDEO_DEMO_LINK",
    type: "web",
  },

  {
    title: "Level Up Fitness",
    subtitle: "Full-Stack Studio Companion App",
    description: "Delivered a full-stack solution for a local fitness studio, now actively used to manage client engagement and progress.",
    longDescription: "Architected and deployed a mobile solution for a local gym serving ~100 active users. The system empowers admins to manage custom diet and exercise plans, while clients log daily activities and track progress via weekly weight-logging. The stack features secure JWT authentication, Firebase for media storage, and a robust FastAPI backend.",
    tags: ["Full-Stack", "Mobile App", "Real-World Client", "Firebase"],
    imageUrl: [
      "/project-images/level-up/levelup1.jpg",
      "/project-images/level-up/levelup2.jpg",
      "/project-images/level-up/levelup3.jpg",
      "/project-images/level-up/levelup4.jpg",
      "/project-images/level-up/levelup5.jpg",
    ],
    icons: [
      { icon: <SiFastapi className="text-teal-500" />, name: "FastAPI", color: "#16A34A" },
      { icon: <SiFlutter className="text-blue-400" />, name: "Flutter", color: "#38BDF8" },
      { icon: <FaDumbbell className="text-gray-500" />, name: "Fitness", color: "#6B7280" },
    ],
    githubLink: "https://github.com/purushothdl/level-up", 
    demoLink: "https://drive.google.com/drive/folders/1KtZtit1QMRR2T7Fnbg3VD5d5szhWq-Md?usp=drive_link",
    type: "mobile",
  },

  {
    title: "NextGenHealth",
    subtitle: "AI-Enhanced Telemedicine Prototype",
    description: "Prototyped an AI platform to reduce doctor workload by automatically analyzing and summarizing patient tickets.",
    longDescription: "Built a full-stack telemedicine proof-of-concept using Flutter and FastAPI. The core feature is the integration of Gemini AI to pre-process patient tickets, analyzing them against medical history to provide doctors with a preliminary summary. The platform also includes role-based chatbots and Firebase Cloud Messaging for real-time push notifications.",
    tags: ["AI Integration", "Gemini AI", "Full-Stack", "Push Notifications"],
    imageUrl: [
      "/project-images/nextgenhealth/nextgen1.png",
      "/project-images/nextgenhealth/nextgen2.png",
      "/project-images/nextgenhealth/nextgen3.png",
      "/project-images/nextgenhealth/nextgen4.png",
      "/project-images/nextgenhealth/nextgen5.png",
      "/project-images/nextgenhealth/nextgen6.png",
      "/project-images/nextgenhealth/nextgen7.png",
      "/project-images/nextgenhealth/nextgen8.png",
      "/project-images/nextgenhealth/nextgen9.png",
      "/project-images/nextgenhealth/nextgen10.png",
      "/project-images/nextgenhealth/nextgen11.png",
      "/project-images/nextgenhealth/nextgen12.png",
    ],
    icons: [
      { icon: <SiFlutter className="text-blue-400" />, name: "Flutter", color: "#38BDF8" },
      { icon: <SiGoogle className="text-green-500" />, name: "Gemini AI", color: "#22C55E" },
      { icon: <FaRobot className="text-purple-500" />, name: "AI", color: "#A855F7" },
    ],
    githubLink: "https://github.com/purushothdl/nextgenhealth", 
    demoLink: "https://drive.google.com/drive/folders/1F1BgGUx818AagYo4D_zecM6Jf-tZZrf_?usp=drive_link",
    type: "mobile",
  },

  {
    title: "GreenCore",
    subtitle: "Smart Waste Management Solution",
    description: "Created a college project for location-based waste disposal with AI classification and interactive tracking.",
    longDescription: "Designed a full-stack waste management app with Flutter and FastAPI. Features Google Maps SDK for nearby disposal orgs (50m radius lock), waste input (type, weight, image), and a Gemini Flash chatbot for classification. Dashboard includes sliding weekly weight graphs (2 months) and lifetime stats by category, stored in MongoDB with a polished design.",
    tags: ["FastAPI", "Google Maps SDK", "Gemini AI", "MongoDB", "JWT Auth"],
    imageUrl: [
      "/project-images/green-core/gc1.png",
      "/project-images/green-core/gc2.png",
      "/project-images/green-core/gc3.png",
      "/project-images/green-core/gc4.png",
      "/project-images/green-core/gc5.png",
      "/project-images/green-core/gc6.png",
      "/project-images/green-core/gc7.png",   
      "/project-images/green-core/gc8.png",
      "/project-images/green-core/gc9.png",
      "/project-images/green-core/gc10.png",
      "/project-images/green-core/gc11.png",
      "/project-images/green-core/gc12.png",
    ],
    icons: [
      { icon: <SiGooglemaps className="text-red-500" />, name: "Google Maps", color: "#EF4444" },
      { icon: <SiFlutter className="text-blue-400" />, name: "Flutter", color: "#38BDF8" },
      { icon: <FaRecycle className="text-green-500" />, name: "Recycling", color: "#22C55E" },
    ],
    githubLink: "https://github.com/purushothdl/green-core", 
    demoLink: "https://drive.google.com/drive/folders/1nHG9F16MZbU2b0iyEL9HGKsi037vaLSm?usp=drive_link",
    type: "mobile",
  },

];