import React from 'react';
import { personalInfo, stats } from '../mock';
import { Card } from './ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in creating custom web solutions tailored to your business needs. Whether you're a startup looking to establish your digital presence or an established business seeking to enhance your online reach, I'm here to help you succeed.
            </p>
          </div>
          
          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
