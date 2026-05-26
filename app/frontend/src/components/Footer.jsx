import React from 'react';
import { personalInfo } from '../mock';
import { Linkedin, Instagram, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = ['about', 'services', 'projects', 'contact'];

  const socials = [
    { href: personalInfo.linkedin, icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
    { href: personalInfo.instagram, icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
    { href: 'https://github.com', icon: <Github className="w-4 h-4" />, label: 'GitHub' },
    { href: `mailto:${personalInfo.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/8" style={{ background: '#080810' }}>
      {/* Gradient top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'var(--gradient-primary)', opacity: 0.6 }}
      />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(ellipse, #7c3aed, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div
              className="text-3xl font-black mb-3 gradient-text tracking-tight"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              AM
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-sm font-semibold text-white/80 mb-5 uppercase tracking-widest"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200 capitalize"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="text-sm font-semibold text-white/80 mb-5 uppercase tracking-widest"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Connect
            </h3>

            <a
              href={`mailto:${personalInfo.email}`}
              className="block text-sm text-white/40 hover:text-white transition-colors mb-5"
            >
              {personalInfo.email}
            </a>

            <div className="flex items-center gap-3">
              {socials.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 border border-white/10 bg-white/5 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="w-3 h-3 text-pink-500" fill="currentColor" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
