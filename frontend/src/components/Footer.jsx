import React from 'react';
import { personalInfo } from '../mock';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navLinks = ['about', 'services', 'projects', 'contact'];
  const socials = [
    { href: personalInfo.linkedin, icon: <Linkedin size={13} />, label: 'LinkedIn' },
    { href: personalInfo.instagram, icon: <Instagram size={13} />, label: 'Instagram' },
    { href: 'https://github.com', icon: <Github size={13} />, label: 'GitHub' },
    { href: `mailto:${personalInfo.email}`, icon: <Mail size={13} />, label: 'Email' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 px-8 md:px-16 lg:px-24 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-xl tracking-[0.15em] text-white uppercase"
        >
          AM
        </button>

        {/* Nav */}
        <nav className="flex items-center gap-8">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="link-underline font-mono text-[10px] tracking-[0.25em] text-white/30 hover:text-white transition-colors uppercase"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/25 hover:text-white transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[10px] text-white/15 tracking-[0.2em] uppercase">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <p className="font-mono text-[10px] text-white/15 tracking-[0.2em] uppercase">
          Software Engineer — {personalInfo.email}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
