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

          <div className="mt-12 pointer-events-auto">
            <a 
              href="https://www.last.fm/user/feleipmtoat/" 
              className="inline-block group hover:scale-110 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 text-white/70 group-hover:text-white transition-colors"
                  fill="currentColor"
                >
                  <path d="M10.599 17.211l-.881-1.277s-1.429 1.596-3.573 1.596c-1.901 0-3.248-1.646-3.248-4.289 0-3.381 1.704-4.591 3.381-4.591 2.407 0 3.18 1.561 3.841 3.561l.871 2.733c.871 2.644 2.515 4.771 7.251 4.771 3.391 0 5.687-1.041 5.687-3.783 0-2.22-1.262-3.373-3.617-3.914l-1.754-.384c-1.209-.275-1.561-.771-1.561-1.597 0-.936.736-1.487 1.946-1.487 1.319 0 2.031.495 2.144 1.679l2.741-.33c-.22-2.466-1.899-3.476-4.663-3.476-2.407 0-4.771 1.21-4.771 4.065 0 1.926.936 3.152 3.286 3.711l1.946.441c1.451.33 1.936.916 1.936 1.711 0 1.021-.991 1.441-2.87 1.441-2.784 0-3.841-1.457-4.498-3.476l-.907-2.733c-1.154-3.571-2.973-4.896-6.614-4.896-4.023 0-6.153 2.54-6.153 6.868 0 4.17 2.144 6.416 5.999 6.416 3.099 0 4.597-1.457 4.597-1.457z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 animate-bounce hidden md:flex">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
      </div>
    </BackgroundGradientAnimation>
  );
}