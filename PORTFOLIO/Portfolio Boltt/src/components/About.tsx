import React from 'react';
import { Brain, Code, Rocket, Star } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Enthusiast",
      description: "Passionate about artificial intelligence and machine learning technologies"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Developer",
      description: "Proficient in multiple programming languages and web technologies"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Innovation Driven",
      description: "Always exploring new technologies and pushing boundaries"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Love tackling complex challenges with creative solutions"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
              Navigating the Digital Cosmos
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a BTech Computer Science Engineering student with a specialization in Artificial Intelligence 
              and Machine Learning. My journey in the vast universe of technology began with curiosity and 
              has evolved into a passion for creating intelligent solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From writing my first "Hello World" in C to developing complex machine learning models, 
              I've been on an exciting expedition through the realms of programming. I believe in the 
              power of technology to transform ideas into reality and solve real-world problems.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring the latest developments in AI, contributing 
              to open-source projects, or stargazing while contemplating the infinite possibilities 
              that technology holds for our future.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-purple-400 mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;