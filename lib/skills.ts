import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazonaws,
  SiRabbitmq,
  SiNginx,
  SiReact,
  SiGo,
  SiScikitlearn,
  SiTypescript, // <-- IMPORT ADDED
  SiRender,
  SiRedis
} from "react-icons/si";
import { FaBrain, FaLayerGroup } from "react-icons/fa";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  iconColor: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "Backend & Core Languages",
    skills: [
      { name: "Python", icon: SiPython, iconColor: "text-[#3776AB]" },
      { name: "Go", icon: SiGo, iconColor: "text-[#00ADD8]" },
      // REPLACED JavaScript with TypeScript - a direct upgrade.
      { name: "TypeScript", icon: SiTypescript, iconColor: "text-[#3178C6]" },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LangChain / LLMs", icon: FaBrain, iconColor: "text-purple-500" },
      { name: "RAG Architecture", icon: FaLayerGroup, iconColor: "text-blue-500" },
      { name: "Scikit-learn", icon: SiScikitlearn, iconColor: "text-[#F7931E]" },
    ],
  },
  {
    title: "Databases & DevOps",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#47A248]" },
      { name: "Docker", icon: SiDocker, iconColor: "text-[#2496ED]" },
      { name: "AWS", icon: SiAmazonaws, iconColor: "text-[#FF9900]" },
      { name: "RabbitMQ", icon: SiRabbitmq, iconColor: "text-[#FF6600]" },
      { name: "Nginx", icon: SiNginx, iconColor: "text-[#009639]" },
      { name: "Redis", icon: SiRedis, iconColor: "text-[#DC382D]" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, iconColor: "text-[#61DAFB]" },
    ],
  },
];