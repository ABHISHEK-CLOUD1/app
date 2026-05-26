import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const navItems = ['about', 'services', 'projects', 'contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/10 shadow-lg shadow-purple-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="relative cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span
              className="text-2xl font-black tracking-tighter"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <span className="gradient-text">AM</span>
            </span>
            <span
              className="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
              style={{ background: 'var(--gradient-primary)' }}
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 3).map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 capitalize group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300 bg-gradient-to-r from-violet-500 to-pink-500" />
              </button>
            ))}

            <button
              onClick={() => scrollToSection('contact')}
              className="relative px-5 py-2 text-sm font-semibold text-white rounded-full overflow-hidden group"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-left text-base font-medium text-white/70 hover:text-white transition-colors capitalize py-1"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
