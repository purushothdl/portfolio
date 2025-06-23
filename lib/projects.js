"use client";

import { SiPython, SiFastapi, SiFlutter, SiMongodb, SiGooglecloud, SiFirebase, SiGooglemaps, SiGoogle, SiReact, SiTailwindcss } from "react-icons/si";
import { FaDumbbell, FaRobot, FaRecycle } from "react-icons/fa";

export const projectsData = [

  {
    title: "MovieFlix",
    subtitle: "Movie Search App",
    description: "A movie search app that provides details of any movie and features trending movies.",
    longDescription: "Built with React, Vite, and Tailwind, this app allows users to search for movie details and view trending movies. Each search is stored in MongoDB using a Python (FastAPI) backend.",
    tags: ["React", "Vite", "Tailwind", "FastAPI", "MongoDB"],
    imageUrl: [
      "/project-images/movie-flix/movieflix1.png",
      "/project-images/movie-flix/movieflix2.png",
      "/project-images/movie-flix/movieflix3.png",
      "/project-images/movie-flix/movieflix4.png",
      "/project-images/movie-flix/movieflix5.png",
      "/project-images/movie-flix/movieflix6.png",
    ],
    icons: [
      { icon: <SiReact className="text-blue-400" />, name: "React", color: "#38BDF8" },
      { icon: <SiPython className="text-blue-500" />, name: "Python", color: "#3B82F6" },
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", color: "#22C55E" },
    ],
    githubLink: "https://github.com/purushothdl/movie-flix",
    demoLink: "https://drive.google.com/drive/folders/1GwJO_G1vJWU5wXofmQ6oaTC5NLQvSabW?usp=drive_link",
    type: "web",
  },

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
    githubLink: "https://github.com/purushothdl/level-up", 
    demoLink: "https://drive.google.com/drive/folders/1KtZtit1QMRR2T7Fnbg3VD5d5szhWq-Md?usp=drive_link",
    type: "mobile",
  },

  {
    title: "TukTuk Dinda",
    subtitle: "A Satirical Website",
    description: "A static webpage that honors slow strike rate batsmen and high economy bowlers.",
    longDescription: "Built with React, Vite, and Tailwind, this static webpage serves player images over a URL. It's a fun, satirical take on cricket statistics.",
    tags: ["React", "Vite", "Tailwind"],
    imageUrl: [
      "/project-images/tuktuk-dinda/td_1.png",
      "/project-images/tuktuk-dinda/td_2.png",
      "/project-images/tuktuk-dinda/td_3.png",
      "/project-images/tuktuk-dinda/td_4.png",
      "/project-images/tuktuk-dinda/td_5.png",
      "/project-images/tuktuk-dinda/td_6.png",
      "/project-images/tuktuk-dinda/td_7.png",
      "/project-images/tuktuk-dinda/td_8.png",
    ],
    icons: [
      { icon: <SiReact className="text-blue-400" />, name: "React", color: "#38BDF8" },
      { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind", color: "#2DD4BF" },
    ],
    githubLink: "https://github.com/purushothdl/tuk-tuk-dinda-academy",
    demoLink: "https://drive.google.com/drive/folders/1AQifz7uH84zyvM6lri25gw3ySzR25_Ww?usp=drive_link",
    type: "web",
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
    githubLink: "https://github.com/purushothdl/nextgenhealth", 
    demoLink: "https://drive.google.com/drive/folders/1F1BgGUx818AagYo4D_zecM6Jf-tZZrf_?usp=drive_link",
    type: "mobile",
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
    githubLink: "https://github.com/purushothdl/green-core", 
    demoLink: "https://drive.google.com/drive/folders/1nHG9F16MZbU2b0iyEL9HGKsi037vaLSm?usp=drive_link",
    type: "mobile",
  },

];