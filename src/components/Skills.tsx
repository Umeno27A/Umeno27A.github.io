import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            技術スタック
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            モダンな技術を活用して、スケーラブルで高品質なアプリケーションを開発します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skillCategory, index) => (
            <div
              key={skillCategory.category}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {skillCategory.category}
              </h3>
              
              <div className="space-y-4">
                {skillCategory.technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <span className="font-medium text-gray-800">{tech.name}</span>
                    </div>
                    
                    {tech.level && (
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < tech.level 
                                ? 'bg-blue-500' 
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    )}
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