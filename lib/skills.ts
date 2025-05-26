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
  SiAmazonaws,
  SiJavascript,
  SiReact,
  SiRabbitmq,
  SiNginx,
  SiRender,
  SiMetabase,
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { IconType } from "react-icons";

export type SkillLevel = "Expert" | "Advanced" | "Intermediate" | "Learning";

interface Skill {
  name: string;
  icon: IconType;
  iconColor: string;
  progressColor: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface SkillLevelConfig {
  color: string;
}

export const skillsCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: SiPython, iconColor: "text-[#3776AB]", progressColor: "bg-gradient-to-r from-[#3776AB] to-[#4B8BBE]" },
      { name: "Go", icon: SiGo, iconColor: "text-[#00ADD8]", progressColor: "bg-gradient-to-r from-[#00ADD8] to-[#00A3C4]" },
      { name: "JavaScript", icon: SiJavascript, iconColor: "text-[#F7DF1E]", progressColor: "bg-gradient-to-r from-[#F7DF1E] to-[#FFD700]" },
    ]
  }
  ,
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, iconColor: "text-[#61DAFB]", progressColor: "bg-gradient-to-r from-[#61DAFB] to-[#21A1F1]" },
      { name: "Flutter", icon: SiFlutter, iconColor: "text-[#02569B]", progressColor: "bg-gradient-to-r from-[#02569B] to-[#0175C2]" },
    ]
  }
  ,
  {
    title: "Backend & Infrastructure",
    skills: [
      { name: "FastAPI", icon: SiFastapi, iconColor: "text-[#009688]", progressColor: "bg-gradient-to-r from-[#009688] to-[#00BFA5]" },
      { name: "Docker", icon: SiDocker, iconColor: "text-[#2496ED]", progressColor: "bg-gradient-to-r from-[#2496ED] to-[#1D85E5]" },
      { name: "RabbitMQ", icon: SiRabbitmq, iconColor: "text-[#FF6600]", progressColor: "bg-gradient-to-r from-[#FF6600] to-[#FF8A29]" },
      { name: "Nginx", icon: SiNginx, iconColor: "text-[#009639]", progressColor: "bg-gradient-to-r from-[#009639] to-[#33B16C]" },
      { name: "AWS", icon: SiAmazonaws, iconColor: "text-[#FF9900]", progressColor: "bg-gradient-to-r from-[#FF9900] to-[#FFA726]" },
      { name: "Render", icon: SiRender, iconColor: "text-[#46E3B7]", progressColor: "bg-gradient-to-r from-[#46E3B7] to-[#3BD9A6]" },
    ]
  },

  {
    title: "AI & Experiments",
    skills: [
      { name: "Scikit-learn", icon: SiScikitlearn, iconColor: "text-[#F7931E]", progressColor: "bg-gradient-to-r from-[#F7931E] to-[#FFA500]" },
      { name: "RAG", icon: SiMetabase, iconColor: "text-[#3B82F6]", progressColor: "bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]" },
      { name: "LLMs", icon: FaBrain, iconColor: "text-[#34A853]", progressColor: "bg-gradient-to-r from-[#34A853] to-[#4CAF50]" },
    ]
  }
  ,
] satisfies SkillCategory[];

// export const skillLevels: Record<SkillLevel, SkillLevelConfig> = {
//   Expert: { color: "bg-neutral-300" },
//   Advanced: { color: "bg-neutral-400" },
//   Intermediate: { color: "bg-neutral-500" },
//   Learning: { color: "bg-neutral-600" },
// };
