import React, { useEffect, useState } from 'react';
import { personalInfo } from '../mock';
import { ArrowRight, Github, Instagram, Linkedin, Sparkles } from 'lucide-react';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Animated background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse"
        style={{ background: 'radial-gradient(circle, #ec4899, transparent)', animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className={`relative z-10 max-w-5xl mx-auto px-6 py-32 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-purple-300 border border-purple-500/30 bg-purple-500/10 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          Available for new projects
        </div>

        {/* Profile Photo */}
        <div className="mb-8 inline-block animate-float">
          <div
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 animate-pulse-glow"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <img
              src="https://customer-assets.emergentagent.com/job_mishra-webhelp/artifacts/2ry616tg_IMG_6683.png"
              alt="Abhishek Mishra"
              className="w-full h-full rounded-full object-cover border-2 border-[#0a0a0f]"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          <span className="text-white">{personalInfo.name.split(' ')[0]} </span>
          <span className="gradient-text">{personalInfo.name.split(' ')[1]}</span>
        </h1>

        <p
          className="text-xl md:text-2xl font-medium text-white/60 mb-4"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          {personalInfo.title}
        </p>

        <p className="text-lg text-white/40 mb-12 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={scrollToContact}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'var(--gradient-primary)',
              boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)',
            }}
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white/80 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          {[
            { href: personalInfo.linkedin, icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
            { href: personalInfo.instagram, icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
            { href: 'https://github.com', icon: <Github className="w-5 h-5" />, label: 'GitHub' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-11 h-11 rounded-full text-white/50 border border-white/10 bg-white/5 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
