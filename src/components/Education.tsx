import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Arizona State University",
      location: "Tempe, AZ",
      year: "January 2024 - December 2025",
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Indian Institute of Technology, Bhubaneswar",
      location: "Odisha, India",
      year: "July 2019 - May 2023",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My academic background and foundation in computer science.
          </p>
        </div>

        {/* Centered Cards */}
        <div className="flex justify-center">
          <div className="space-y-8 max-w-2xl w-full">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Academic Qualification
            </h3>

            {education.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.degree}</h4>
                    <p className="text-lg text-blue-600 font-medium mb-2">{item.institution}</p>
                    <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {item.year}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
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

export default Education;
