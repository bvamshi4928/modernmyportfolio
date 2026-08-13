import React from 'react';
import { 
  Code2, 
  Database, 
  Wrench, 
  MessageSquare,
  Globe,
  Server,
  Smartphone,
  Palette,
  GitBranch,
  Cloud,
  Terminal,
  Layers
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      skills: [
        { name: "ReactJS", icon: "⚛️", color: "bg-blue-100 text-blue-800" },
        { name: "ExpressJS", icon: "🚀", color: "bg-green-100 text-green-800" },
        { name: "NodeJS", icon: "🟢", color: "bg-green-100 text-green-800" },
        { name: "Redux", icon: "🔄", color: "bg-purple-100 text-purple-800" },
        { name: "Firebase", icon: "🔥", color: "bg-orange-100 text-orange-800" },
        { name: "Android", icon: "🤖", color: "bg-green-100 text-green-800" },
        { name: "MaterialUI", icon: "🎨", color: "bg-blue-100 text-blue-800" },
        { name: "ChakraUI", icon: "⚡", color: "bg-teal-100 text-teal-800" },
        { name: "TailwindCSS", icon: "🌊", color: "bg-cyan-100 text-cyan-800" },
        { name: "Bootstrap", icon: "🅱️", color: "bg-purple-100 text-purple-800" },
        { name: "Sass", icon: "💅", color: "bg-pink-100 text-pink-800" },
        { name: "HTML5", icon: "🌐", color: "bg-orange-100 text-orange-800" }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6 text-green-500" />,
      skills: [
        { name: "CSS3", icon: "🎨", color: "bg-blue-100 text-blue-800" },
        { name: "JavaScript", icon: "📜", color: "bg-yellow-100 text-yellow-800" },
        { name: "Java", icon: "☕", color: "bg-red-100 text-red-800" },
        { name: "Kotlin", icon: "🔷", color: "bg-purple-100 text-purple-800" },
        { name: "PHP", icon: "🐘", color: "bg-indigo-100 text-indigo-800" },
        { name: "Python", icon: "🐍", color: "bg-blue-100 text-blue-800" },
        { name: "C++", icon: "⚙️", color: "bg-blue-100 text-blue-800" },
        { name: "MongoDB", icon: "🍃", color: "bg-green-100 text-green-800" },
        { name: "MySQL", icon: "🐬", color: "bg-blue-100 text-blue-800" },
        { name: "PostgreSQL", icon: "🐘", color: "bg-blue-100 text-blue-800" },
        { name: "AWS", icon: "☁️", color: "bg-orange-100 text-orange-800" },
        { name: "Heroku", icon: "💜", color: "bg-purple-100 text-purple-800" }
      ]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-orange-500" />,
      skills: [
        { name: "Netlify", icon: "🌐", color: "bg-teal-100 text-teal-800" },
        { name: "DigitalOcean", icon: "🌊", color: "bg-blue-100 text-blue-800" },
        { name: "JQuery", icon: "📚", color: "bg-blue-100 text-blue-800" },
        { name: "Git VCS", icon: "🔀", color: "bg-orange-100 text-orange-800" },
        { name: "GitHub", icon: "🐙", color: "bg-gray-100 text-gray-800" },
        { name: "WordPress", icon: "📝", color: "bg-blue-100 text-blue-800" }
      ]
    },
    {
      title: "Languages",
      icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
      skills: [
        { name: "TypeScript", icon: "📘", color: "bg-blue-100 text-blue-800" },
        { name: "JavaScript", icon: "📜", color: "bg-yellow-100 text-yellow-800" },
        { name: "Python", icon: "🐍", color: "bg-blue-100 text-blue-800" },
        { name: "Java", icon: "☕", color: "bg-red-100 text-red-800" },
        { name: "C++", icon: "⚙️", color: "bg-blue-100 text-blue-800" },
        { name: "PHP", icon: "🐘", color: "bg-indigo-100 text-indigo-800" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-blue-100 rounded-lg mr-3">
              <Code2 className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Skills & Abilities
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`${skill.color} px-3 py-2 rounded-lg text-center text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-pointer`}
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-xs leading-tight">{skill.name}</span>
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