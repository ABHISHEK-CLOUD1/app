import React, { useEffect, useState } from 'react';
import { personalInfo } from '../mock';
import { ArrowRight, Github, Instagram, Linkedin } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Full-bleed hero image — user's photo */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Abhishek Mishra"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(20%) contrast(1.05) brightness(0.55)' }}
        />
        {/* Bottom gradient so content below reads clearly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 80%, #000 100%)',
          }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen pb-16 px-8 md:px-16 lg:px-24 pt-28">
        {/* Top-left label */}
        <div
          className={`absolute top-28 left-8 md:left-16 lg:left-24 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <p className="font-mono text-xs tracking-[0.25em] text-white/50 uppercase mb-1">
            Software Engineer
          </p>
          <p className="font-mono text-xs tracking-[0.2em] text-white/35 uppercase">
            Vibe Coding & AI Enthusiast
          </p>
        </div>

        {/* Top-right tagline */}
        <div
          className={`absolute top-28 right-8 md:right-16 lg:right-24 text-right transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <p className="font-mono text-xs tracking-[0.2em] text-white/35 uppercase">
            Available for Projects
          </p>
        </div>

        {/* Main heading — editorial, all caps */}
        <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1
            className="font-display text-[clamp(3rem,10vw,9rem)] leading-none tracking-wider uppercase text-white mb-2"
          >
            {personalInfo.name.split(' ')[0]}
          </h1>
          <h1
            className="font-display text-[clamp(3rem,10vw,9rem)] leading-none tracking-wider uppercase text-white/80 mb-8"
          >
            {personalInfo.name.split(' ')[1]}
          </h1>
        </div>

        {/* Bottom bar */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/10 pt-8 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Left — tagline */}
          <p className="font-mono text-xs text-white/40 tracking-[0.15em] uppercase max-w-xs">
            {personalInfo.tagline}
          </p>

          {/* Center — CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-white"
            >
              Get In Touch
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              View Work
            </button>
          </div>

          {/* Right — Social */}
          <div className="flex items-center gap-5">
            {[
              { href: personalInfo.linkedin, icon: <Linkedin size={14} />, label: 'LinkedIn' },
              { href: personalInfo.instagram, icon: <Instagram size={14} />, label: 'Instagram' },
              { href: 'https://github.com', icon: <Github size={14} />, label: 'GitHub' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="link-underline text-white/40 hover:text-white transition-colors duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40 animate-pulse" />
        <span className="font-mono text-[10px] text-white/30 tracking-[0.3em] uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
