import React from "react";
import {
  SiPython,
  SiFastapi,
  SiTensorflow,
  SiKubernetes,
  SiMongodb,
  SiElasticsearch,
  SiDocker,
  SiGo,
  SiOpencv,
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiFlutter,
  SiDart,
  SiAmazonwebservices,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { IconType } from "react-icons";

export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Learning";

interface Skill {
  name: string;
  icon: IconType;
  level: SkillLevel;
  iconColor: string;
  progressColor: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillLevelConfig {
  color: string;
  width: string;
}

export const skillsCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    skills: [
      { name: "Python", icon: SiPython, level: "Intermediate", iconColor: "text-[#3776AB]", progressColor: "bg-gradient-to-r from-[#3776AB] to-[#4B8BBE]" },
      { name: "Go", icon: SiGo, level: "Learning", iconColor: "text-[#00ADD8]", progressColor: "bg-gradient-to-r from-[#00ADD8] to-[#00A3C4]" },
      { name: "Dart", icon: SiDart, level: "Intermediate", iconColor: "text-[#00B4AB]", progressColor: "bg-gradient-to-r from-[#00B4AB] to-[#00A2A4]" },
    ]
    
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "TensorFlow", icon: SiTensorflow, level: "Learning", iconColor: "text-[#FF6F00]", progressColor: "bg-gradient-to-r from-[#FF6F00] to-[#FF9900]" },
      { name: "Scikit-learn", icon: SiScikitlearn, level: "Intermediate", iconColor: "text-[#F7931E]", progressColor: "bg-gradient-to-r from-[#F7931E] to-[#FFA500]" },
      { name: "Computer Vision", icon: SiOpencv, level: "Intermediate", iconColor: "text-[#5C3EE8]", progressColor: "bg-gradient-to-r from-[#5C3EE8] to-[#7B68EE]" },
      { name: "LLMs", icon: FaBrain, level: "Learning", iconColor: "text-[#34A853]", progressColor: "bg-gradient-to-r from-[#34A853] to-[#4CAF50]" },
    ],
  },
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "FastAPI", icon: SiFastapi, level: "Intermediate", iconColor: "text-[#009688]", progressColor: "bg-gradient-to-r from-[#009688] to-[#00BFA5]" },
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", iconColor: "text-[#47A248]", progressColor: "bg-gradient-to-r from-[#47A248] to-[#68B04D]" },
      { name: "SQL", icon: SiMysql, level: "Intermediate", iconColor: "text-[#4479A1]", progressColor: "bg-gradient-to-r from-[#4479A1] to-[#5B96C2]" },
      { name: "PostgreSQL", icon: SiPostgresql, level: "Intermediate", iconColor: "text-[#336791]", progressColor: "bg-gradient-to-r from-[#336791] to-[#4479A1]" },
      { name: "Firebase", icon: SiFirebase, level: "Intermediate", iconColor: "text-[#FFCA28]", progressColor: "bg-gradient-to-r from-[#FFCA28] to-[#FFA000]" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: SiDocker, level: "Intermediate", iconColor: "text-[#2496ED]", progressColor: "bg-gradient-to-r from-[#2496ED] to-[#1D85E5]" },
      { name: "Kubernetes", icon: SiKubernetes, level: "Learning", iconColor: "text-[#326CE5]", progressColor: "bg-gradient-to-r from-[#326CE5] to-[#4285F4]" },
      { name: "AWS", icon: SiAmazonwebservices, level: "Learning", iconColor: "text-[#FF9900]", progressColor: "bg-gradient-to-r from-[#FF9900] to-[#FFA726]" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Flutter", icon: SiFlutter, level: "Intermediate", iconColor: "text-[#02569B]", progressColor: "bg-gradient-to-r from-[#02569B] to-[#0175C2]" },
    ],
  },
] as const;

export const skillLevels: Record<SkillLevel, SkillLevelConfig> = {
  Expert: { color: "bg-neutral-300", width: "100%" },
  Advanced: { color: "bg-neutral-400", width: "80%" },
  Intermediate: { color: "bg-neutral-500", width: "60%" },
  Learning: { color: "bg-neutral-600", width: "40%" },
};
