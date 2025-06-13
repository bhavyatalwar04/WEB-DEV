import React from 'react';
import { ChevronDown, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Sparkles className="text-purple-400 w-6 h-6" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce">
        <Rocket className="text-pink-400 w-8 h-8" />
      </div>
      <div className="absolute bottom-40 left-20 animate-pulse">
        <Sparkles className="text-blue-400 w-4 h-4" />
      </div>

      <div className="text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium">
            Welcome to my digital universe
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
          Bhavya Talwar
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
          BTech CSE Student | AI/ML Specialist
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring the infinite possibilities of artificial intelligence and machine learning, 
          one algorithm at a time. Building the future through code and innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Explore My Work
            <Rocket className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400 mx-auto" />
        </div>
      </div>

      {/* Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-pink-500/20 rounded-full animate-spin-reverse"></div>
      </div>
    </section>
  );
};

export default Hero;