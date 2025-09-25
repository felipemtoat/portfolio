import React from "react";

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20 px-4">
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
                I'm a <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Computer Science student</span> with 
                an unwavering passion for creating exceptional digital experiences. My journey in software development is driven by a 
                deep love for <span className="text-white font-medium">React</span> and the endless possibilities of modern web technologies.
              </p>
              
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                What sets me apart is my commitment to <span className="text-blue-300 font-medium">innovation</span> and 
                <span className="text-purple-300 font-medium"> clean code</span>. I believe that great software isn't just functional—it's 
                elegant, maintainable, and built with the future in mind.
              </p>
            </div>

            {/* Current Focus */}
            {/* <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg mr-3 animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Currently Learning</h3>
              </div>
              <p className="text-white/80">
                Exploring advanced React patterns, TypeScript, and modern full-stack architectures 
                while pursuing my Computer Science degree.
              </p>
            </div> */}

          </div>

          {/* Right Side - Skills & Philosophy */}
          <div className="space-y-8">
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <div className="text-white text-xl font-bold">⚛</div>
                </div>
                <h3 className="text-white font-semibold mb-1">React</h3>
                <p className="text-white/70 text-sm">Modern UI Development</p>
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

            {/* Philosophy Card */}
            {/* <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg mr-3 flex items-center justify-center">
                  <div className="text-white text-sm font-bold">💭</div>
                </div>
                <h3 className="text-xl font-bold text-white">My Philosophy</h3>
              </div>
              <blockquote className="text-white/80 italic text-lg leading-relaxed border-l-4 border-blue-400 pl-4">
                "Every line of code is an opportunity to create something beautiful and meaningful. 
                I strive to write software that not only works today, but evolves gracefully tomorrow."
              </blockquote>
              <cite className="text-white/60 text-sm mt-3 block">- Felipe Motta</cite>
            </div> */}

            {/* Fun Fact */}
            {/* <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 shadow-xl">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="text-white text-sm font-bold">🎯</div>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Fun Fact</h4>
                  <p className="text-white/80 text-sm">
                    When I'm not coding, you'll find me exploring the latest tech trends, 
                    contributing to open-source projects, or brainstorming the next big idea 
                    that could change how we interact with technology.
                  </p>
                </div>
              </div>
            </div> */}

          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-white/70">
            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
            <span className="text-sm">Let's build something amazing together</span>
            <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}