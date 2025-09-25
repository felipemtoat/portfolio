import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

export default function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center px-4 pointer-events-none pt-20 md:pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/20 overflow-hidden shadow-2xl">
                <img 
                  src="/me.jpeg" 
                  alt="Felipe Motta"
                  className="w-full h-full object-cover"
                />
                {/* Subtle ring animation */}
                <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-pulse"></div>
              </div>
              {/* Floating elements for modern touch */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-80 animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-70 animate-pulse shadow-lg"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl">
              Felipe Motta
            </span>
          </h1>

          {/* Title */}
          <div className="mb-6">
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-white/80 mb-2">
              FullStack Junior Software Developer
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent flex-1 max-w-20"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent flex-1 max-w-20"></div>
            </div>
          </div>

          {/* Subtitle/Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
            Crafting digital experiences with modern technologies.
            <br />
            <span className="text-white/50 text-sm md:text-base">
              Passionate about clean code and innovative solutions.
            </span>
          </p>

          {/* Tech Stack Indicators */}
          <div className="mt-8 flex justify-center items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-sm"></div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-sm"></div>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Floating Action Hint */}
          <div className="mt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}