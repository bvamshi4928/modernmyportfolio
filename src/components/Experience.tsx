import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer II",
      company: "Seeds of Success",
      location: "Tempe,Arizona",
      period: "July 2026 - Present",
      description: " worked on datapipeline and building chatbots",
      

      achievements: [
        " Automated Python data-extraction pipilines to parse 100%  of multi-year economic datasets,from state government sources, eliminating manual data entry and standardizing schemas for supabase postgresql.", 
"Architected a Retrieval-Augmented Generation (RAG) pipeline using pgvector and OpenAI embeddings to power a context-aware LLM chatbot, cutting query retrieval latency by 50% while improving answer accuracy",
      ],


      technologies: ["Python", "Supabase", "PostgreSQL", "OpenAI", "LangChain"]
    },
    {
      title: "Software Developer Intern",
      company: "Brane Enterprises Private Limited",
      location: "Hyderabad,India",
      period: "Summer 2022",
      description: "Gained hands-on experience in full-stack development, working on real-world projects and collaborating with experienced developers.",
      achievements: [
        "Developed a no-code Flutter application with real-time drag-and-drop functionality, reducing UI development time by 40% compared to traditional coding.", 
"Engineered 20+ interactive widgets including dynamic TextFields, GridViews with lazy loading, and custom Column layouts with constraint-based rendering.",
      ],
      technologies: ["React", "Flutter", "Dart", "Github", "Git"]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional experience and academic involvement.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                } pl-12 md:pl-0`}>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-medium mb-2">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer">
            <a
            href="/resume.pdf"
            download="Vamshi_Bisapogu_Resume.pdf"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume</span>
          </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;