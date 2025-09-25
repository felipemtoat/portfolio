import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              About Me
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent w-16"></div>
          </div>
          <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto animate-pulse"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            
            {/* Main Description */}
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
                I'm a <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Computer Science student </span>  
                 passionate about technology and personal improvement in and out of the code. 
              </p>
              
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                I believe in diving head first into any issues I come accross and trust every single one will bring me valuable <span className="text-blue-300 font-medium">knowledge.</span> 
              </p>
            </div>


          </div>

          {/* Right Side - Skills & Philosophy */}
          <div className="space-y-8">
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <div className="text-white text-xl font-bold">💻</div>
                </div>
                <h3 className="text-white font-semibold mb-1">Technologies</h3>
                <p className="text-white/70 text-sm">Usage of latest technologies</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <div className="text-white text-xl font-bold">✨</div>
                </div>
                <h3 className="text-white font-semibold mb-1">Clean Code</h3>
                <p className="text-white/70 text-sm">Best Practices</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <div className="text-white text-xl font-bold">🚀</div>
                </div>
                <h3 className="text-white font-semibold mb-1">Innovation</h3>
                <p className="text-white/70 text-sm">Creative Solutions</p>
              </div>
              
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <div className="text-white text-xl font-bold">💡</div>
                </div>
                <h3 className="text-white font-semibold mb-1">Problem Solving</h3>
                <p className="text-white/70 text-sm">Analytical Thinking</p>
              </div>
            </div>



          </div>
        </div>

      </div>
    </section>
  );
}