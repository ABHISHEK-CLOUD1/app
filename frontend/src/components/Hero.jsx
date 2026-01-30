import React from 'react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';
import { ArrowRight, Code, Github, Instagram, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon or Visual Element */}
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100">
            <Code className="w-10 h-10 text-gray-900" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            {personalInfo.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            {personalInfo.title}
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base"
            >
              Get In Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              size="lg"
              className="border-gray-300 hover:border-gray-400 px-8 py-6 text-base"
            >
              View Projects
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
