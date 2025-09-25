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
          <div className="flex-1 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="space-y-6">
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

          {/* Right side - Create Something Amazing Card */}
          <div className="flex-1">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center border border-white/10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 border border-white/10 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">Let's Create Something Amazing</h3>
              <div className="flex gap-4">
                <span className="px-6 py-2 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full text-white/70 border border-white/10">⌨️ Code</span>
                <span className="px-6 py-2 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full text-white/70 border border-white/10">🎨 Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection; 