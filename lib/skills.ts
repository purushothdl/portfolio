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
  SiTypescript,
  SiRedis,
  SiApachekafka, // Import for Apache Kafka
  SiMysql,
  SiMicrosoftazure, // Corrected import for Azure
  SiPostman, // For REST APIs
  SiGit, // For Git
  SiHtml5, // For HTML
  SiNodedotjs, // For Node.js
  SiFlutter, // For Flutter
  SiCelery // For Celery
} from "react-icons/si";
import { FaBrain, FaLayerGroup, FaRobot } from "react-icons/fa";
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
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython, iconColor: "text-[#3776AB]" }, // Python Blue
      { name: "Go", icon: SiGo, iconColor: "text-[#00ADD8]" },         // Go Blue
      { name: "TypeScript", icon: SiTypescript, iconColor: "text-[#3178C6]" }, // TypeScript Blue
    ],
  },
  {
    title: "Backend & Web Services",
    skills: [
      { name: "FastAPI", icon: SiFastapi, iconColor: "text-[#009688]" }, // FastAPI Teal
      { name: "Chi", icon: SiGo, iconColor: "text-[#00ADD8]" }, // Using Go icon for Chi
      { name: "Node.js (Express)", icon: SiNodedotjs, iconColor: "text-[#68A063]" }, // Node.js Green
      { name: "REST APIs", icon: SiPostman, iconColor: "text-[#FF6C37]" }, // Postman for REST APIs
      { name: "Nginx", icon: SiNginx, iconColor: "text-[#009639]" }, // Nginx Green
    ],
  },
  {
    title: "AI/ML & Automation",
    skills: [
      { name: "LangChain / LangGraph", icon: FaBrain, iconColor: "text-[#47A248]" }, // LangChain Green (Brain icon for general LLM frameworks)
      { name: "RAG Architecture", icon: FaLayerGroup, iconColor: "text-blue-500" }, // RAG concept (FaLayerGroup as no specific icon)
      { name: "AI Agents", icon: FaRobot, iconColor: "text-red-500" }, // Robot icon for agents
      { name: "Prompt Engineering", icon: FaBrain, iconColor: "text-yellow-500" }, // Prompt Engineering (FaBrain as it's AI related)
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-[#4169E1]" }, // PostgreSQL Blue
      { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#47A248]" },     // MongoDB Green
      { name: "Redis", icon: SiRedis, iconColor: "text-[#DC382D]" },         // Redis Red
      { name: "MySQL", icon: SiMysql, iconColor: "text-[#4479A1]" },         // MySQL Blue
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: SiAmazonaws, iconColor: "text-[#FF9900]" }, // AWS Orange
      { name: "Docker", icon: SiDocker, iconColor: "text-[#2496ED]" }, // Docker Blue
      { name: "Apache Kafka", icon: SiApachekafka, iconColor: "text-[#231F20]" }, // Kafka Black
      { name: "RabbitMQ", icon: SiRabbitmq, iconColor: "text-[#FF6600]" }, // RabbitMQ Orange
      { name: "Azure Service Bus", icon: SiMicrosoftazure, iconColor: "text-[#0078D4]" }, // Azure Blue
      { name: "Celery", icon: SiCelery, iconColor: "text-green-500" }, // Celery
      { name: "Git", icon: SiGit, iconColor: "text-[#F05032]" }, // Git
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, iconColor: "text-[#61DAFB]" }, // React Blue
      { name: "HTML/CSS", icon: SiHtml5, iconColor: "text-orange-600" }, // HTML5 for HTML/CSS
      { name: "Flutter", icon: SiFlutter, iconColor: "text-[#02569B]" }, // Added Flutter
    ],
  },
];