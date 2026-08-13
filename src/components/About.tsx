import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces with attention to detail and user experience."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Fast Performance",
      description: "Optimizing applications for speed and performance across all devices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a Computer Science graduate from Arizona State University with a passion for full-stack development and innovative technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              As a recent Computer Science graduate from Arizona State University, I bring fresh perspectives 
              and cutting-edge knowledge to software development. My academic journey has equipped me with 
              strong fundamentals in algorithms, data structures, and software engineering principles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in full-stack development,cloud development, and distributed systems with expertise in modern web technologies including React, 
              Node.js, Python, and cloud platforms. I'm passionate about creating scalable applications and 
              exploring emerging technologies like machine learning and mobile development.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Full-Stack Developer
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                ASU Graduate
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Tech Enthusiast
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;