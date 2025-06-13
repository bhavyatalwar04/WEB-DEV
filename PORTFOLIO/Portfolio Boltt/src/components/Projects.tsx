import React from 'react';
import { ExternalLink, Github, Rocket, Brain, Globe, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Chatbot",
      description: "Developed an intelligent chatbot using natural language processing and machine learning algorithms to provide automated customer support.",
      technologies: ["Python", "TensorFlow", "NLP", "Flask"],
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Smart Portfolio Website",
      description: "Created a responsive portfolio website with modern design principles, featuring interactive elements and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Built a comprehensive dashboard for data visualization and analysis, helping businesses make data-driven decisions.",
      technologies: ["Python", "Pandas", "Matplotlib", "MySQL"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "Machine Learning Predictor",
      description: "Implemented a predictive model using various ML algorithms to forecast trends and patterns in large datasets.",
      technologies: ["Python", "Scikit-learn", "Jupyter", "NumPy"],
      icon: <Rocket className="w-6 h-6" />,
      gradient: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my journey through code, where each project represents a step forward in my quest to master technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-900/50 to-purple-900/30 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
            >
              {/* Project Icon */}
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-6`}>
                <div className="text-white">
                  {project.icon}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-200 mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-purple-500 rounded-lg font-medium hover:bg-purple-500/10 transition-all duration-300">
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/bhavyatalwar04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;