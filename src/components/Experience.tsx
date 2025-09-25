import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { FaBriefcase, FaInfoCircle, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs } from "react-icons/si";

export default function Experience() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <FaBriefcase className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Junior Fullstack Freelance</h3>
              <p className="text-white/70">Freelance Developer</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white/90">
                <SiJavascript className="text-yellow-400" />
                JavaScript
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white/90">
                <SiReact className="text-blue-400" />
                React
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white/90">
                <SiNodedotjs className="text-green-400" />
                Node.js
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white/90">
                <FaDatabase className="text-blue-300" />
                Postgres
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white/90">
                <FaDatabase className="text-green-300" />
                Rest API
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              Key Achievements
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                <span>Developing and maintaining applications using React and Node.js</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                <span>Building mobile-first, accessible interfaces with modern web standards</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                <span>Working closely with designers and stakeholders to deliver client solutions</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2024 - Present",
      content: (
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
              <FaBriefcase className="text-white text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Intern</h3>
              <p className="text-white/70">UFFS - Federal University of Fronteira Sul</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white/90">
                <SiHtml5 className="text-orange-400" />
                HTML
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-lg text-white/90">
                <SiCss3 className="text-blue-300" />
                CSS
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              Key Achievements
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                <span>Migrating and maintaining the university's new website</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                <span>Training and preparing employees to manage the website</span>
              </li>
            </ul>
          </div>
        </div>
      ),
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
              Experience
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
          </div>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-3">
            My professional journey in software development
          </p>
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto animate-pulse"></div>
        </div>

        {/* Timeline */}
        <div className="relative w-full overflow-hidden">
          <div className="[&_.timeline-item]:bg-transparent [&_.timeline-line]:bg-white/20 [&_.timeline-dot]:bg-white/10 [&_.timeline-dot]:border-white/30 [&_*]:text-white [&_h3]:text-white [&_p]:text-white/80 [&_.text-neutral-800]:text-white/90 [&_.dark\\:text-neutral-200]:text-white/90 [&_.text-neutral-700]:text-white/70 [&_.dark\\:text-neutral-300]:text-white/70">
            <Timeline data={data} />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => window.open('https://www.linkedin.com/in/felipe-motta-b472a4201/', '_blank')}
            className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl px-8 py-4 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <FaInfoCircle className="text-white text-sm" />
              </div>
              <span className="text-white font-medium group-hover:text-blue-200 transition-colors duration-200">
                Let's connect on LinkedIn!
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}