import React from 'react';
import { Code, Database, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C", level: 75 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 70 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 75 }
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI/ML Technologies",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Data Analysis", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-purple-900/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical arsenal spans across multiple domains, from AI/ML to full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group p-8 bg-gradient-to-br from-gray-900/50 to-purple-900/30 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-200">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;