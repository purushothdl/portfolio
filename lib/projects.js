"use client";

import { SiPython, SiFastapi, SiFlutter, SiMongodb, SiGooglecloud, SiFirebase, SiGooglemaps, SiGoogle } from "react-icons/si";
import { FaDumbbell, FaRobot, FaRecycle } from "react-icons/fa";

export const projectsData = [
  {
    title: "Level Up",
    subtitle: "Fitness Studio Companion App",
    description: "Designed a full-stack gym management app for Level Up Fitness Studio, enhancing user engagement with tailored fitness tracking.",
    longDescription: "Crafted a practical solution for a local gym using FastAPI and Flutter, deployed on Render. Admins upload custom diets and exercises, while users (~100 active) log daily workouts and meals, plus track weekly weights over time. Features JWT auth, Firebase for media storage, and MongoDB for data, with a clean, user-friendly design.",
    tags: ["FastAPI", "Flutter", "MongoDB", "Firebase", "JWT Auth", "Google Cloud Storage"],
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
    stats: [
      { label: "Users", value: "~100" },
      { label: "Daily Logs", value: "300+" },
      { label: "Uptime", value: "99.9%" },
    ],
    githubLink: "https://github.com/purushothdl/level-up", // Placeholder—swap later
  },
  {
    title: "NextGenHealth",
    subtitle: "AI-Enhanced Telemedicine Prototype",
    description: "Developed an innovative college project for AI-driven telemedicine, streamlining patient-doctor interactions.",
    longDescription: "Built a full-stack telemedicine app as a college project with Flutter and FastAPI. Patients upload tickets (issues, images, reports), admins assign them to doctors, and Gemini Flash AI analyzes tickets with user medical history from onboarding. Includes chatbots for all users (basic advice only), backed by MongoDB, Google Cloud Storage, and Firebase Cloud Messaging for push notifications.",
    tags: ["Flutter", "FastAPI", "MongoDB", "Gemini AI", "Firebase Cloud Messaging", "Google Cloud Storage"],
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
    stats: [
      { label: "Tickets Tested", value: "50+" },
      { label: "Chat Latency", value: "<3s" },
      { label: "Demo Users", value: "10" },
    ],
    githubLink: "https://github.com/purushothdl/nextgenhealth", 
  },
  {
    title: "GreenCore",
    subtitle: "Smart Waste Management Solution",
    description: "Created a college project for location-based waste disposal with AI classification and interactive tracking.",
    longDescription: "Designed a full-stack waste management app with Flutter and FastAPI. Features Google Maps SDK for nearby disposal orgs (50m radius lock), waste input (type, weight, image), and a Gemini Flash chatbot for classification. Dashboard includes sliding weekly weight graphs (2 months) and lifetime stats by category, stored in MongoDB with a polished design.",
    tags: ["Flutter", "FastAPI", "Google Maps SDK", "Gemini AI", "MongoDB", "JWT Auth"],
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
    stats: [
      { label: "Waste Disposed", value: "0.5T" },
      { label: "Classified", value: "80+" },
      { label: "Mock Locations", value: "5" },
    ],
    githubLink: "https://github.com/purushothdl/green-core", // Placeholder
  },
];