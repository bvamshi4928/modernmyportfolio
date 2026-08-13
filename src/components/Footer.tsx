import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Frontend Development',
    'Backend Development',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Vamshi Bisapogu</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Computer Science graduate and software developer passionate about creating innovative 
              solutions and scalable applications. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/bvamshi4928" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/vamshi-bisapogu-04b47a19a/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:vbisapog@asu.edu" className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Vamshi Bisapogu. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and passion for coding</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;