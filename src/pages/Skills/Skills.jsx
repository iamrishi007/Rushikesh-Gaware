import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiJsonwebtokens,
} from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";
import { MdApi } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { TbBrandJavascript, TbBrandVscode } from "react-icons/tb";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "JavaScript", icon: <TbBrandJavascript className="w-4 h-4 text-yellow-400" /> },
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Chakra UI", icon: <SiChakraui className="w-4 h-4 text-[#319795]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <MdApi className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "REST API Development", icon: <MdApi className="w-4 h-4 text-[#FF9800]" /> },
        { name: "JWT Authentication", icon: <SiJsonwebtokens className="w-4 h-4 text-red-400" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Version Control & Deployment",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "GitHub", icon: <FaGithub className="w-4 h-4 text-white" /> },
      ],
    },
    {
      icon: Cpu,
      title: "AI & Integrations",
      color: "text-pink-400",
      skills: [
        { name: "AI API Integration", icon: <RiRobot2Line className="w-4 h-4 text-[#FF4081]" /> },
        { name: "Generative AI", icon: <RiRobot2Line className="w-4 h-4 text-[#00C853]" /> },
        { name: "NLP APIs", icon: <RiRobot2Line className="w-4 h-4 text-[#7C4DFF]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Tools",
      color: "text-cyan-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Postman", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#FF6C37]" /> },
        { name: "Netlify", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#00C7B7]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Soft Skills",
      color: "text-yellow-400",
      skills: [
        { name: "Problem Solving", icon: <Cpu className="w-4 h-4 text-blue-400" /> },
        { name: "Teamwork", icon: <Cpu className="w-4 h-4 text-green-400" /> },
        { name: "Time Management", icon: <Cpu className="w-4 h-4 text-purple-400" /> },
        { name: "Communication", icon: <Cpu className="w-4 h-4 text-orange-400" /> },
      ],
    },
    {
      icon: Layout,
      title: "Currently Exploring",
      color: "text-teal-400",
      skills: [
        { name: "Advanced MySQL", icon: <SiMysql className="w-4 h-4 text-[#4479A1]" /> },
        { name: "Docker (Basics)", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "AWS (Deployment)", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
