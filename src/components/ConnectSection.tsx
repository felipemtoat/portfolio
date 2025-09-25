import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const ConnectSection: React.FC = () => {
  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Connect With Me
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
          </div>
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto animate-pulse"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - Contact Information */}
          <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex items-center justify-center">
            <div className="space-y-6 w-full">
              <a 
                href="mailto:felipesoldatellimotta@gmail.com" 
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 border border-white/10 flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-purple-600/30 transition-all">
                  <FaEnvelope className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">Email</span>
                  <span className="text-sm text-white/50">felipesoldatellimotta@gmail.com</span>
                </div>
              </a>

              <a 
                href="https://github.com/felipemtoat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 border border-white/10 flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-purple-600/30 transition-all">
                  <FaGithub className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">GitHub</span>
                  <span className="text-sm text-white/50">@felipemtoat</span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/vinicius-lemes-ds/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 border border-white/10 flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-purple-600/30 transition-all">
                  <FaLinkedin className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-medium">LinkedIn</span>
                  <span className="text-sm text-white/50">Let's Connect</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right side - Logo and Name */}
          <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center space-y-6">
            <div className="flex-1 flex items-center justify-center">
              <img 
                src="/LOGO.svg" 
                alt="Logo" 
                className="w-auto h-24 md:h-32 lg:h-40 object-contain filter brightness-100"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Felipe Motta
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection; 