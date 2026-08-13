import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-28 flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Hello, I'm</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Vamshi Bisapogu
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4">
            Software Developer & Full Stack Engineer
          </p>

          {/* 👤 Profile Picture */}
          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/b3HJopf.png"
              alt="Vamshi Bisapogu - Profile Picture"
              className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-6 object-cover object-center"
              style={{
                imageRendering: 'crisp-edges',
                filter: 'contrast(1.1) brightness(1.05)'
              }}
            />
          </div>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Computer Science graduate with expertise in full-stack development, mobile applications,
            and modern web technologies. Passionate about creating innovative solutions and scalable applications.
          </p>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center items-center mb-12">
            <a
              href="https://drive.google.com/file/d/1BdONIjrSsZWgcYApvtUGC81Y6c4MCSHO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
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

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://github.com/bvamshi4928"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/vamshi-bisapogu-04b47a19a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:vbisapog@asu.edu"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
