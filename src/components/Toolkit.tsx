import React, { useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaPalette, FaLinux } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVegas, SiNextdotjs, SiPostgresql, SiMysql, SiBootstrap, SiAdobephotoshop, SiGimp, SiUbuntu, SiInsomnia } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

export default function Toolkit() {
  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "React Native", icon: <IoLogoReact className="text-blue-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-300" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-400" /> },
        { name: "Shadcn", icon: <FaPalette className="text-blue-300" /> },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-300" /> },
        { name: "Insomnia", icon: <SiInsomnia className="text-purple-400" /> },
        { name: "REST API", icon: <FaJs className="text-green-300" /> },
      ],
    },
    {
      title: "Others",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
        { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" /> },
        { name: "GIMP", icon: <SiGimp className="text-gray-300" /> },
        { name: "Linux", icon: <FaLinux className="text-yellow-400" /> },
        { name: "Ubuntu Server", icon: <SiUbuntu className="text-orange-400" /> },
        { name: "Final Cut Pro", icon: <div className="w-6 h-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded flex items-center justify-center text-xs font-bold text-black">FC</div> },
        { name: "Vegas Pro", icon: <SiVegas className="text-blue-400" /> },
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              My Toolkit
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-3">
            Technologies and tools I work with
          </p>
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto animate-pulse"></div>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 max-h-[600px] flex flex-col"
            >
              {/* Category Header */}
              <div className="text-center mb-6 flex-shrink-0">
                <div className="inline-flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm opacity-80"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </div>

              {/* Skills List */}
              <div className={`flex-1 overflow-y-auto ${category.skills.length > 5 ? 'grid grid-cols-1 sm:grid-cols-2 gap-3' : 'space-y-4'}`}>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <span className="text-white/90 font-medium group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Category Footer Decoration */}
              <div className="mt-6 flex justify-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-2 h-2 bg-indigo-400/60 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed">
              Always exploring new technologies and expanding my toolkit to create 
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold"> innovative solutions</span> 
              and deliver exceptional user experiences.
            </p>
            <div className="mt-6 flex justify-center items-center space-x-2">
              <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}