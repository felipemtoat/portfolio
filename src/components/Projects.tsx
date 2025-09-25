import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Timeline",
      description: "A portfolio app for managing the finances of small businesses.",
      tags: ["Vite", "TypeScript", "Shadcn UI", "React", "Node.js", "PostgreSQL", "Prisma"],
      screenshot: "/timeline.jpeg",
      github: "https://github.com/lemesvini/timeline-app",
      website: "https://horizonenglishgroup.com"
    },
    {
      title: "BookMarker",
      description: "iOS App for bookmarking movies, using the OMDB API to fetch movie data.",
      tags: ["Swift", "Movies", "OMDB API", "iOS"],
      screenshot: "/bookmarker.png",
      github: "https://github.com/felipemtoat/bookMarker",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Favorite Projects
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
          </div>
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto animate-pulse"></div>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                
                {/* Screenshot Section */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    <img
                      src={project.screenshot}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                      >
                        <FaGithub className="text-lg" />
                        <span className="font-medium">View Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm opacity-80"></div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-lg text-white/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-2 text-sm font-medium rounded-lg bg-white/10 border border-white/20 text-white/90 hover:bg-white/20 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200 group/btn"
                    >
                      <FaGithub className="text-lg group-hover/btn:scale-110 transition-transform duration-200" />
                      <span className="font-medium">GitHub</span>
                    </a>
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-200 group/btn"
                      >
                        <FaExternalLinkAlt className="text-sm group-hover/btn:scale-110 transition-transform duration-200" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* See All Projects Card */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/felipemtoat?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <FaGithub className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">See All Projects</h3>
                  
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}