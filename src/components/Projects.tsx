import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "Blog Up",
      description: "A complete Blogging platform built for various technologies.",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "OAuth"],
      github: "https://github.com/bvamshi4928/blogUp",
      live: "https://blogup-pvgt.onrender.com/",
      featured: true
    },
    {
      title: "Stream Studio",
      description: " A real time chat application where user are to learn a language along with video call features.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "FullStack",
      technologies: ["JavaScript", "React", "Node.js", "GetStream API", "Zustand"],
      github: "https://github.com/bvamshi4928/streamstudio",
      live: "https://streamstudio.onrender.com/",
      featured: true
    },
    {
      title: "React Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Frontend",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/bvamshi4928",
      live: "https://ornate-heliotrope-a168ed.netlify.app/",
      featured: false
    },
    {
      title: "Modulation classification of Amplitude Modulated Signal ",
      description: "ML project implementing algorithms for predictive the modulation Typed of various amplitude modulated signals.",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Backend",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      github: "https://github.com/bvamshi4928",
      live: "https://github.com/bvamshi4928",
      featured: false
    },
    {
      title: "Realtor",
      description: "A modern, realesate website where users can post the places or rent the place with advance search features",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Frontend",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "OAuth"],
      github: "https://github.com/bvamshi4928/mern_real_estate",
      live: "https://realtor-k1sl.onrender.com/",
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my academic and personal projects that demonstrate my technical skills.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-800" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-800" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{project.category}</span>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/bvamshi4928?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 inline-flex items-center space-x-2"
          >
            <Eye className="w-5 h-5" />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
